const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const projectRoot = path.resolve(__dirname, '..');
const imagesRoot = path.join(projectRoot, 'images');

const exts = ['.png', '.jpg', '.jpeg', '.JPG', '.PNG', '.JPEG'];
const textFileGlobs = ['.html', '.js', '.css', '.md', '.txt'];

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(full));
    } else {
      results.push(full);
    }
  });
  return results;
}

(async function main(){
  if (!fs.existsSync(imagesRoot)) {
    console.error('images folder not found:', imagesRoot);
    process.exit(1);
  }

  const allFiles = walk(imagesRoot);
  const imageFiles = allFiles.filter(f => exts.includes(path.extname(f)));
  if (imageFiles.length === 0) {
    console.log('No image files to convert');
    return;
  }

  const mapping = {};

  for (const img of imageFiles) {
    const ext = path.extname(img);
    const newPath = img.slice(0, -ext.length) + '.webp';
    try {
      await sharp(img).webp({quality: 85}).toFile(newPath);
      console.log('Converted', img, '->', newPath);
      mapping[path.relative(projectRoot, img).replace(/\\\\/g, '/')] = path.relative(projectRoot, newPath).replace(/\\\\/g, '/');
    } catch (err) {
      console.error('Failed to convert', img, err.message || err);
    }
  }

  // Update references in text files
  const projectFiles = walk(projectRoot).filter(f => textFileGlobs.includes(path.extname(f)));
  for (const file of projectFiles) {
    let content = fs.readFileSync(file, 'utf8');
    let updated = content;
    for (const [oldRel, newRel] of Object.entries(mapping)) {
      const oldEsc = oldRel.replace(/[-\\/\\^$*+?.()|[\]{}]/g, '\\$&');
      const re = new RegExp(oldEsc, 'g');
      updated = updated.replace(re, newRel);
    }
    if (updated !== content) {
      fs.writeFileSync(file, updated, 'utf8');
      console.log('Updated references in', path.relative(projectRoot, file));
    }
  }

  console.log('Done. Converted', Object.keys(mapping).length, 'files.');
})();
