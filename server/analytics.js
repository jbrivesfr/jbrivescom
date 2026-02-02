import { Logging } from '@google-cloud/logging';
import crypto from 'crypto';

// Configuration
const PROJECT_ID = process.env.GOOGLE_CLOUD_PROJECT || 'chatbot-374301';
const SERVICE_NAME = process.env.K_SERVICE || 'keto';
const LOG_NAME = `projects/${PROJECT_ID}/logs/run.googleapis.com%2Frequests`;
const DAYS = 30; // Increased to 30 days

// Basic bot list to exclude
const BOTS = [
  'Googlebot', 'Bingbot', 'Slurp', 'DuckDuckBot', 'Baiduspider',
  'YandexBot', 'Sogou', 'Exabot', 'facebot', 'ia_archiver',
  'AhrefsBot', 'SemrushBot', 'MJ12bot', 'DotBot', 'PetalBot', 'UptimeRobot'
];

// Static asset extensions to exclude from page views
const ASSET_EXTENSIONS = [
  '.js', '.css', '.png', '.jpg', '.jpeg', '.gif', '.svg',
  '.ico', '.woff', '.woff2', '.ttf', '.eot', '.map', '.json', '.xml', '.txt'
];

let cachedStats = null;
let lastFetchTime = null;

function getHash(text) {
  return crypto.createHash('sha256').update(text).digest('hex');
}

function isBot(userAgent) {
  if (!userAgent) return false;
  return BOTS.some(bot => userAgent.toLowerCase().includes(bot.toLowerCase()));
}

function isAsset(url) {
  try {
    const parsedUrl = new URL(url, 'https://keto.fr');
    const pathname = parsedUrl.pathname;
    return ASSET_EXTENSIONS.some(ext => pathname.toLowerCase().endsWith(ext));
  } catch (e) {
    return false;
  }
}

function getPath(url) {
  try {
    const parsedUrl = new URL(url, 'https://keto.fr');
    return parsedUrl.pathname;
  } catch (e) {
    return url;
  }
}

function getReferrerDomain(referrer) {
  if (!referrer || referrer === '-') return 'Direct';
  try {
    const parsedUrl = new URL(referrer);
    return parsedUrl.hostname;
  } catch (e) {
    return 'Direct';
  }
}

function getDailyTrafficTemplate(days) {
    const traffic = {};
    for (let i = 0; i < days; i++) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        const dateStr = d.toISOString().split('T')[0];
        traffic[dateStr] = 0;
    }
    return traffic;
}

export async function fetchAndParseLogs() {
  console.log('Starting log fetch for analytics...');

  const logging = new Logging({ projectId: PROJECT_ID });
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - DAYS);
  const timestamp = cutoffDate.toISOString();

  const filter = `resource.type="cloud_run_revision" AND resource.labels.service_name="${SERVICE_NAME}" AND logName="${LOG_NAME}" AND timestamp >= "${timestamp}"`;

  console.log('Analytics filter:', filter);

  try {
    // Fetch logs
    const [entries] = await logging.getEntries({
      filter,
      pageSize: 1000,
      maxResult: 20000 // Limit to avoid memory explosion if traffic is huge
    });

    console.log(`Fetched ${entries.length} log entries.`);

    const stats = {
      totalRequests: 0,
      pageViews: 0,
      uniqueVisitors: new Set(),
      topPages: {},
      referrers: {},
      userAgents: {},
      dailyTraffic: getDailyTrafficTemplate(DAYS), // Initialize with zeros
      generatedAt: new Date().toISOString()
    };

    const salt = crypto.randomBytes(16).toString('hex');

    for (const entry of entries) {
      const http = entry.httpRequest;
      if (!http) continue;

      stats.totalRequests++;

      const userAgent = http.userAgent || '';
      const ip = http.remoteIp;
      const url = http.requestUrl;
      const referrer = http.referer;
      const timestamp = entry.metadata.timestamp;

      if (isBot(userAgent)) continue;
      if (isAsset(url)) continue;

      stats.pageViews++;

      if (ip) {
        const visitorHash = getHash(ip + salt);
        stats.uniqueVisitors.add(visitorHash);
      }

      const pathName = getPath(url);
      stats.topPages[pathName] = (stats.topPages[pathName] || 0) + 1;

      const refDomain = getReferrerDomain(referrer);
      stats.referrers[refDomain] = (stats.referrers[refDomain] || 0) + 1;

      if (timestamp) {
        const dateObj = new Date(timestamp);
        const dateStr = dateObj.toISOString().split('T')[0];
        // Only count if it's within our tracked range (it should be due to filter, but safe guard)
        if (stats.dailyTraffic.hasOwnProperty(dateStr)) {
            stats.dailyTraffic[dateStr] = (stats.dailyTraffic[dateStr] || 0) + 1;
        }
      }

      // Simple UA parsing
      let uaType = 'Other';
      if (userAgent.includes('Mobile')) uaType = 'Mobile';
      else if (userAgent.includes('Tablet')) uaType = 'Tablet';
      else if (userAgent.includes('Mozilla')) uaType = 'Desktop';

      let browser = 'Unknown';
      if (userAgent.includes('Firefox')) browser = 'Firefox';
      else if (userAgent.includes('Chrome')) browser = 'Chrome';
      else if (userAgent.includes('Safari')) browser = 'Safari';
      else if (userAgent.includes('Edge')) browser = 'Edge';

      const uaKey = `${browser} (${uaType})`;
      stats.userAgents[uaKey] = (stats.userAgents[uaKey] || 0) + 1;
    }

    // Sort dates
    const sortedDailyTraffic = Object.keys(stats.dailyTraffic).sort().reduce((obj, key) => {
      obj[key] = stats.dailyTraffic[key];
      return obj;
    }, {});

    // Calculate Weekly Comparisons
    const dates = Object.keys(sortedDailyTraffic); // Sorted YYYY-MM-DD
    // Last 7 days (dates are sorted ascending, so take last 7)
    const currentWeekDates = dates.slice(-7);
    const previousWeekDates = dates.slice(-14, -7);

    const currentWeekViews = currentWeekDates.reduce((sum, date) => sum + sortedDailyTraffic[date], 0);
    const previousWeekViews = previousWeekDates.reduce((sum, date) => sum + sortedDailyTraffic[date], 0);

    let growthPercentage = 0;
    if (previousWeekViews > 0) {
        growthPercentage = ((currentWeekViews - previousWeekViews) / previousWeekViews) * 100;
    } else if (currentWeekViews > 0) {
        growthPercentage = 100; // From 0 to something is 100% (or infinite)
    }

    // Format for output
    cachedStats = {
      ...stats,
      uniqueVisitors: stats.uniqueVisitors.size,
      topPages: Object.entries(stats.topPages)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 20),
      referrers: Object.entries(stats.referrers)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 20),
      userAgents: Object.entries(stats.userAgents)
        .sort(([,a], [,b]) => b - a),
      dailyTraffic: sortedDailyTraffic,
      comparison: {
          currentWeekViews,
          previousWeekViews,
          growthPercentage: growthPercentage.toFixed(1)
      }
    };

    lastFetchTime = new Date();
    console.log('Analytics stats updated successfully.');
    return cachedStats;

  } catch (error) {
    console.error('Error fetching logs:', error);
    // If we have cached stats, return them, otherwise return empty structure
    return cachedStats || { error: 'Failed to fetch logs', details: error.message };
  }
}

export function getStats() {
  return cachedStats || { status: 'Loading or Failed', generatedAt: null };
}
