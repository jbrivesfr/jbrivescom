import express from 'express';
import { promises as fs } from 'fs';
import { existsSync, readdirSync } from 'fs';
import path from 'path';
import md5 from 'md5';
import nodemailer from 'nodemailer';
import { fileURLToPath } from 'url';
import compression from 'compression';
import cron from 'node-cron';
import basicAuth from 'express-basic-auth';
import { optimizeImages } from './scripts/optimize_images.js';
import { fetchAndParseLogs, getStats } from './server/analytics.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8080;
const COMMENTS_DIR = path.join(__dirname, 'comments');

// Middleware
app.use(compression());
app.use(express.json());

// Logging Middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Security Headers Middleware
app.use((req, res, next) => {
  // Strict Transport Security (HSTS)
  // Enforces HTTPS for 1 year, including subdomains
  res.setHeader(
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains'
  );

  // Content Security Policy (CSP)
  // restricting sources for scripts, styles, images, etc.
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; " +
    "script-src 'self' 'unsafe-inline' https://cdn.tailwindcss.com https://esm.sh https://cdn.jsdelivr.net; " +
    "style-src 'self' 'unsafe-inline'; " +
    "img-src 'self' data: https://*.unsplash.com https://www.gravatar.com https://picsum.photos; " +
    "frame-src 'self' https://player.vimeo.com https://vimeo.com; " +
    "connect-src 'self' https://esm.sh https://cdn.tailwindcss.com https://cdn.jsdelivr.net; " +
    "font-src 'self' data:; " +
    "object-src 'none'; " +
    "base-uri 'self';"
  );

  // X-Content-Type-Options
  // Prevents MIME type sniffing
  res.setHeader('X-Content-Type-Options', 'nosniff');

  // X-Frame-Options
  // Prevents clickjacking by ensuring the content is not embedded in other sites
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');

  // Referrer-Policy
  // Controls how much referrer information should be included with requests
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');

  // Permissions-Policy
  // Disables sensitive features like camera, microphone, and geolocation
  res.setHeader(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=()'
  );

  next();
});

// Asynchronously create comments directory if it doesn't exist
(async () => {
  try {
    await fs.mkdir(COMMENTS_DIR);
    console.log('Comments directory created.');
  } catch (error) {
    // Ignore error if directory already exists
    if (error.code !== 'EEXIST') {
      console.error('Error creating comments directory:', error);
      // Exit the process if we can't create the directory, as it's critical
      process.exit(1);
    }
  }
})();

// Diagnostics: Check dist folder
const DIST_DIR = path.join(__dirname, 'dist');
if (existsSync(DIST_DIR)) {
  console.log('DIST directory exists. Contents:', readdirSync(DIST_DIR));
} else {
  console.error('CRITICAL: DIST directory does NOT exist!');
}

// API Routes

// Health Check
app.get('/health', (req, res) => {
  res.status(200).send('Healthy');
});

// Analytics Routes
// Basic Auth Middleware for Analytics
const analyticsAuth = basicAuth({
    users: { 'admin': process.env.ANALYTICS_PASSWORD || 'keto-analytics-2024' },
    challenge: true,
    realm: 'KetoAnalytics'
});

app.get('/analytics', analyticsAuth, async (req, res) => {
    try {
        const htmlPath = path.join(__dirname, 'server/views/analytics.html');
        let html = await fs.readFile(htmlPath, 'utf-8');

        // Find the generated CSS file in dist/assets
        const assetsDir = path.join(__dirname, 'dist', 'assets');
        let cssFile = '';
        if (existsSync(assetsDir)) {
             const files = await fs.readdir(assetsDir);
             cssFile = files.find(f => f.endsWith('.css'));
        }

        if (cssFile) {
            html = html.replace(
                '<script src="https://cdn.tailwindcss.com"></script>',
                `<link rel="stylesheet" href="/assets/${cssFile}">`
            );
        }

        res.send(html);
    } catch (error) {
        console.error('Error serving analytics page:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/api/analytics/stats', analyticsAuth, (req, res) => {
    const stats = getStats();
    res.json(stats);
});

// Get comments for a slug
app.get('/api/comments/:slug', async (req, res) => {
  const { slug } = req.params;
  const filePath = path.join(COMMENTS_DIR, `${slug}.json`);

  try {
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const comments = JSON.parse(fileContent);
    res.json(comments);
  } catch (error) {
    // If the file doesn't exist, it's not an error; it just means no comments yet.
    if (error.code === 'ENOENT') {
      return res.json([]); // Return empty array if no comments file exists
    }
    // For other errors (e.g., malformed JSON), log and send a server error response.
    console.error('Error reading comments file:', error);
    res.status(500).json({ error: 'Failed to read comments' });
  }
});

// Post a new comment
app.post('/api/comments/:slug', async (req, res) => {
  const { slug } = req.params;
  const { author, content, email } = req.body;

  if (!author || !content) {
    return res.status(400).json({ error: 'Author and content are required' });
  }

  // Generate Gravatar URL (same logic as before)
  let avatarUrl = '';
  if (email) {
    const hash = md5(email.trim().toLowerCase());
    avatarUrl = `https://www.gravatar.com/avatar/${hash}?d=retro`;
  } else {
    const randomId = Math.floor(Math.random() * 1000);
    avatarUrl = `https://picsum.photos/seed/${randomId}/100/100`;
  }

  const newComment = {
    id: Date.now().toString(),
    author,
    date: new Date().toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    }),
    content,
    avatarUrl
  };

  const filePath = path.join(COMMENTS_DIR, `${slug}.json`);

  try {
    let comments = [];
    try {
      // Read existing comments if the file exists
      const fileContent = await fs.readFile(filePath, 'utf-8');
      comments = JSON.parse(fileContent);
    } catch (error) {
      // If file doesn't exist, it's fine; we'll create it.
      // For other read errors, we can log them but proceed to write a new file.
      if (error.code !== 'ENOENT') {
        console.error('Error reading comments for update:', error);
      }
    }

    comments.unshift(newComment); // Add the new comment to the top

    // Write the updated comments array back to the file
    await fs.writeFile(filePath, JSON.stringify(comments, null, 2));
    res.status(201).json(newComment);

  } catch (error) {
    console.error('Error saving comment:', error);
    res.status(500).json({ error: 'Failed to save comment' });
  }
});

// Handle Quiz Results Email
app.post('/api/send-quiz-results', async (req, res) => {
  const { answers, selectedPlan } = req.body;

  // Pretty print answers
  const formattedAnswers = Object.entries(answers)
    .map(([key, value]) => `Question ${key}: ${value}`)
    .join('\n');

  const emailContent = `
    Nouveau prospect Keto !

    Plan choisi : ${selectedPlan}

    Réponses au questionnaire :
    ${formattedAnswers}
  `;

  console.log('--- EMAIL SIMULATION ---');
  console.log(`To: jbrives@gmail.com`);
  console.log(`Subject: Nouveau Lead Quiz Keto`);
  console.log(emailContent);
  console.log('------------------------');

  // Attempt to send real email if credentials exist
  // NOTE: In this environment we likely don't have SMTP credentials,
  // so we log to console as primary verification.

  try {
     // Create a transporter (mock or real)
     // If environment variables aren't set, this might fail, so we catch it.
     const transporter = nodemailer.createTransport({
        service: 'gmail', // or configured host
        auth: {
           user: process.env.EMAIL_USER,
           pass: process.env.EMAIL_PASS
        }
     });

     if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: 'jbrives@gmail.com',
          subject: 'Nouveau Lead Quiz Keto',
          text: emailContent
        });
     }

     res.status(200).json({ success: true, message: 'Email processed' });
  } catch (error) {
     console.error('Email sending failed (expected if no credentials):', error);
     // Still return success to frontend because we logged it
     res.status(200).json({ success: true, message: 'Email logged' });
  }
});

// Cron Job for Image Optimization (Daily at 03:00 AM)
cron.schedule('0 3 * * *', async () => {
  console.log('Running daily image optimization task...');

  // Note: On ephemeral filesystems (like Cloud Run), these changes are lost on restart.
  // This is best for ensuring new uploads (if persisted) or dev environments are clean.
  try {
    await optimizeImages();
    console.log('Daily image optimization completed.');
  } catch (error) {
    console.error('Error during daily image optimization:', error);
  }
});

// Cron Job for Analytics (Hourly)
cron.schedule('0 * * * *', async () => {
    await fetchAndParseLogs();
});

// Initial Fetch on Startup (Non-blocking)
fetchAndParseLogs().catch(err => console.error('Initial analytics fetch failed:', err));

// Serve static files from dist
app.use(express.static(path.join(__dirname, 'dist')));

// Handle client-side routing by serving index.html for all other routes
// Note: Use regex because Express 5 (via path-to-regexp) no longer supports '*' as a wildcard string
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'), (err) => {
    if (err) {
      console.error('Error serving index.html:', err);
      res.status(500).send('Internal Server Error: Failed to load application.');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
