import googleTrends from 'google-trends-api';
import fs from 'fs';
import path from 'path';

const keywords = ["keto", "low carb", "cétogène"];
const researchDir = path.join(process.cwd(), 'research');

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function fetchWithRetry(keyword, maxRetries = 3) {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            console.log(`Fetching trends for: ${keyword} (Attempt ${attempt}/${maxRetries})`);

            const result = await googleTrends.relatedQueries({
                keyword: keyword,
                geo: 'FR'
            });

            // Try to parse to check if it's valid JSON (not HTML error page)
            const parsed = JSON.parse(result);
            return parsed;

        } catch (err) {
            console.error(`Error fetching ${keyword} on attempt ${attempt}:`);
            // Check if it's a JSON parse error, which usually means we got an HTML error page (429)
            if (err instanceof SyntaxError && err.message.includes('JSON')) {
                 console.error("Likely 429 Rate Limit encountered (invalid JSON received).");
            } else {
                 console.error(err.message);
            }

            if (attempt < maxRetries) {
                // Exponential backoff: 60s, 120s, 180s...
                const waitTime = 60000 * attempt;
                console.log(`Waiting ${waitTime / 1000}s before retrying...`);
                await sleep(waitTime);
            } else {
                throw err;
            }
        }
    }
}

async function run() {
    const data = {};

    // Ensure research directory exists
    if (!fs.existsSync(researchDir)) {
        fs.mkdirSync(researchDir, { recursive: true });
    }

    for (const keyword of keywords) {
        try {
            // Add random delay between 10-20 seconds before starting (except first one if we want, but logic is simpler to just wait between)
            // Actually, let's keep the logic: wait *between* keywords.

            // If it's not the first keyword, wait 10-20s
            if (keyword !== keywords[0]) {
                 const delay = Math.floor(Math.random() * 10000) + 10000;
                 console.log(`Waiting ${delay}ms before next keyword...`);
                 await sleep(delay);
            }

            const result = await fetchWithRetry(keyword);
            data[keyword] = result;

        } catch (err) {
            console.error(`Failed to fetch ${keyword} after retries:`, err.message);
            data[keyword] = { error: err.message };
        }
    }

    // Determine filename
    const date = new Date().toISOString().split('T')[0];
    let count = 1;
    let filename = `${date}_${count}.json`;
    while (fs.existsSync(path.join(researchDir, filename))) {
        count++;
        filename = `${date}_${count}.json`;
    }

    const filepath = path.join(researchDir, filename);
    fs.writeFileSync(filepath, JSON.stringify(data, null, 2));
    console.log(`Saved result to ${filepath}`);
}

run();
