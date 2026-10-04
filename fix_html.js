const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Replace @layer base directives to prevent PostCSS layer error
html = html.replace(/@layer\s+base\s*\{/g, '/* @layer base */ {');
html = html.replace(/@layer\s+components\s*\{/g, '/* @layer components */ {');
html = html.replace(/@layer\s+utilities\s*\{/g, '/* @layer utilities */ {');

// Inject Tailwind CDN engine
if (!html.includes('cdn.tailwindcss.com')) {
  html = html.replace('</head>', '<script src="https://cdn.tailwindcss.com"></script>\n</head>');
}

fs.writeFileSync('index.html', html, 'utf8');
console.log('✅ index.html fixed successfully!');
