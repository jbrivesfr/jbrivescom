
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { ARTICLES, RECIPES, SITE_NAME } from '../constants.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://keto.fr';

const generateSitemap = () => {
  const allContent = [...ARTICLES, ...RECIPES];

  const staticRoutes = [
    '',
    '/about'
  ];

  const contentRoutes = allContent.map(item => `/article/${item.slug}`);

  const routes = [...staticRoutes, ...contentRoutes];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map(route => {
      return `
  <url>
    <loc>${BASE_URL}${route}</loc>
    <changefreq>daily</changefreq>
    <priority>${route === '' ? '1.0' : '0.8'}</priority>
  </url>`;
    })
    .join('')}
</urlset>`;

  const publicDir = path.join(__dirname, '../public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log('Sitemap generated at public/sitemap.xml');
};

generateSitemap();
