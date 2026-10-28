import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { resolve, dirname } from 'node:path';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const data = JSON.parse(readFileSync(resolve(root, 'book-data.json'), 'utf8'));
const payload = JSON.stringify(data).replaceAll('</', '<\\/');
const file = resolve(root, 'index.html');
let html = readFileSync(file, 'utf8');
html = html.replace(/(<script id="book-data" type="application\/json">)[\s\S]*?(<\/script>)/, (_, start, end) => start + payload + end);
writeFileSync(file, html);
const offline = html.replace('<link rel="stylesheet" href="book.css">', () => '<style>' + readFileSync(resolve(root, 'book.css'), 'utf8') + '</style>')
  .replace('<script src="book.js"></script>', () => '<script>' + readFileSync(resolve(root, 'book.js'), 'utf8') + '</script>');
writeFileSync(resolve(root, 'doc-offline.html'), offline);
console.log(`Updated ${data.length} chapters in online and offline editions.`);
