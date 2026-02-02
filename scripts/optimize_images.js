import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, '..');

const IMAGE_DIR = path.join(PROJECT_ROOT, 'public/images');
const MAX_SIZE = 1200;
const QUALITY = 80;

export async function optimizeImages() {
  if (!fs.existsSync(IMAGE_DIR)) {
    console.log(`Directory ${IMAGE_DIR} does not exist.`);
    return;
  }

  console.log(`Starting image optimization in ${IMAGE_DIR}...`);
  let count = 0;
  let optimizedCount = 0;
  let errorCount = 0;

  try {
    const files = await fs.promises.readdir(IMAGE_DIR);

    for (const filename of files) {
      const filepath = path.join(IMAGE_DIR, filename);
      const ext = path.extname(filename).toLowerCase();

      if (['.png', '.jpg', '.jpeg', '.webp'].includes(ext)) {
        count++;
        try {
          const metadata = await sharp(filepath).metadata();

          // Check if resizing is needed or if we just want to re-compress
          // For now, trigger if dimensions are larger than MAX_SIZE
          if (metadata.width > MAX_SIZE || metadata.height > MAX_SIZE) {
            console.log(`Resizing ${filename} (${metadata.width}x${metadata.height})...`);

            let pipeline = sharp(filepath).resize({
              width: MAX_SIZE,
              height: MAX_SIZE,
              fit: 'inside',
              withoutEnlargement: true
            });

            // Apply format-specific optimizations
            if (metadata.format === 'jpeg' || metadata.format === 'jpg') {
                pipeline = pipeline.jpeg({ quality: QUALITY, mozjpeg: true });
            } else if (metadata.format === 'png') {
                // PNG quality is different, usually palette based or compression level
                // optimize for web
                pipeline = pipeline.png({ quality: QUALITY, compressionLevel: 9, palette: true });
            } else if (metadata.format === 'webp') {
                pipeline = pipeline.webp({ quality: QUALITY });
            }

            const buffer = await pipeline.toBuffer();

            await fs.promises.writeFile(filepath, buffer);
            optimizedCount++;
          }
        } catch (err) {
            console.error(`Error processing ${filename}:`, err);
            errorCount++;
        }
      }
    }
  } catch (err) {
    console.error('Error reading directory:', err);
  }

  console.log(`Scanned ${count} images. Optimized ${optimizedCount} images. Errors: ${errorCount}.`);
}

// Allow running directly
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  optimizeImages();
}
