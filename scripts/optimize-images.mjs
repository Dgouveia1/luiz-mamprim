import sharp from "sharp";
import { readFile, writeFile, stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const sourceDir = join(root, "src", "public");

const TARGETS = [
  { name: "perfil.png", maxWidth: 1200, palette: false, quality: { webp: 82, avif: 60 } },
  { name: "bio.png", maxWidth: 1200, palette: false, quality: { webp: 82, avif: 60 } },
  { name: "logo.png", maxWidth: 256, palette: true, quality: { webp: 90, avif: 70 } },
  { name: "logo-ub.png", maxWidth: 256, palette: true, quality: { webp: 90, avif: 70 } },
];

function bytes(n) {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / (1024 * 1024)).toFixed(2)} MB`;
}

async function run() {
  for (const t of TARGETS) {
    const inputPath = join(sourceDir, t.name);
    let inputBuf;
    try {
      inputBuf = await readFile(inputPath);
    } catch {
      console.log(`skip (missing): ${t.name}`);
      continue;
    }
    const inSize = (await stat(inputPath)).size;
    const base = t.name.replace(/\.png$/i, "");

    const meta = await sharp(inputBuf).metadata();
    const targetWidth = meta.width && meta.width > t.maxWidth ? t.maxWidth : meta.width;

    const pipe = sharp(inputBuf);
    if (meta.width && meta.width > t.maxWidth) pipe.resize({ width: t.maxWidth });

    const webp = await pipe.clone().webp({ quality: t.quality.webp }).toBuffer();
    const avif = await pipe.clone().avif({ quality: t.quality.avif }).toBuffer();
    const pngOpt = await pipe
      .clone()
      .png({ quality: 78, compressionLevel: 9, palette: t.palette })
      .toBuffer();

    const webpPath = join(sourceDir, `${base}.webp`);
    const avifPath = join(sourceDir, `${base}.avif`);
    const pngOptPath = join(sourceDir, `${base}.png`);
    await writeFile(webpPath, webp);
    await writeFile(avifPath, avif);
    // Overwrite the source PNG with the optimized version (keeps fallback small).
    await writeFile(pngOptPath, pngOpt);

    console.log(
      `${t.name}  (${bytes(inSize)})  →  png ${bytes(pngOpt.length)}  /  webp ${bytes(webp.length)}  /  avif ${bytes(avif.length)}  (w=${targetWidth})`
    );
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
