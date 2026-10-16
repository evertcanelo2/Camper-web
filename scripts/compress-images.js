const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const IMAGES_DIR = path.join(__dirname, '../public/images');

// Imágenes a comprimir
const PERFUME_PNGS = [
  'asad-bourbon-perfume.png',
  'asad-elixir-perfume.png',
  'asad-perfume.png',
  'asad-zanzibar-perfume.png',
  'yara-perfume.png',
];

const WATCH_JPGS = [
  'casio-enticer-mtp-1302-blanco.jpg',
  'casio-enticer-mtp-1302.jpg',
  'casio-enticer-mtp-blanco.jpg',
  'casio-enticer-mtp-marron.jpg',
  'casio-enticer-mtp-verde.jpg',
  'casio-enticer-mtp.jpg',
  'casio-vintage-ltp-azul.jpg',
  'casio-vintage-ltp-champan.jpg',
  'casio-vintage-ltp-negro.jpg',
  'casio-vintage-ltp.jpg',
  'casio.jpg',
  'caterpillar-azul-oscuro.jpg',
  'caterpillar-marron.jpg',
  'caterpillar-negro.jpg',
  'reloj-casio2.jpg',
  'reloj-qcong-blanco.jpg',
  'reloj-qcong-marron.jpg',
  'reloj-qcong-negro.jpg',
];

function formatKB(bytes) {
  return (bytes / 1024).toFixed(1) + ' KB';
}

async function compressPng(filename) {
  const inputPath = path.join(IMAGES_DIR, filename);
  const tmpPath = inputPath + '.tmp.png';

  const before = fs.statSync(inputPath).size;

  await sharp(inputPath)
    .png({ compressionLevel: 9, palette: false, quality: 85 })
    .toFile(tmpPath);

  const after = fs.statSync(tmpPath).size;

  // Solo reemplazar si el archivo comprimido es más pequeño
  if (after < before) {
    fs.renameSync(tmpPath, inputPath);
    console.log(`✅ PNG  ${filename.padEnd(35)} ${formatKB(before).padStart(10)} → ${formatKB(after).padStart(10)}  (-${Math.round((1 - after / before) * 100)}%)`);
  } else {
    fs.unlinkSync(tmpPath);
    console.log(`⏭️  PNG  ${filename.padEnd(35)} ${formatKB(before).padStart(10)} → sin cambio (ya optimizado)`);
  }
}

async function compressJpg(filename) {
  const inputPath = path.join(IMAGES_DIR, filename);
  const tmpPath = inputPath + '.tmp.jpg';

  const before = fs.statSync(inputPath).size;

  await sharp(inputPath)
    .jpeg({ quality: 82, mozjpeg: true, progressive: true })
    .toFile(tmpPath);

  const after = fs.statSync(tmpPath).size;

  if (after < before) {
    fs.renameSync(tmpPath, inputPath);
    console.log(`✅ JPG  ${filename.padEnd(35)} ${formatKB(before).padStart(10)} → ${formatKB(after).padStart(10)}  (-${Math.round((1 - after / before) * 100)}%)`);
  } else {
    fs.unlinkSync(tmpPath);
    console.log(`⏭️  JPG  ${filename.padEnd(35)} ${formatKB(before).padStart(10)} → sin cambio (ya optimizado)`);
  }
}

async function main() {
  console.log('\n🔧 Iniciando compresión de imágenes...\n');
  console.log('='.repeat(75));

  console.log('\n📦 Perfumes (PNG → PNG optimizado):');
  for (const f of PERFUME_PNGS) {
    if (fs.existsSync(path.join(IMAGES_DIR, f))) {
      await compressPng(f);
    } else {
      console.log(`⚠️  No encontrado: ${f}`);
    }
  }

  console.log('\n⌚ Relojes (JPG → JPG optimizado):');
  for (const f of WATCH_JPGS) {
    if (fs.existsSync(path.join(IMAGES_DIR, f))) {
      await compressJpg(f);
    } else {
      console.log(`⚠️  No encontrado: ${f}`);
    }
  }

  console.log('\n' + '='.repeat(75));
  console.log('✅ Compresión completada.\n');
}

main().catch(console.error);
