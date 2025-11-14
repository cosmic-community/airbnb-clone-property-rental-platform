const fs = require('fs');
const path = require('path');
const glob = require('glob');

const scriptTag = '<script src="/dashboard-console-capture.js"></script>';
const buildDir = path.join(process.cwd(), '.next', 'server', 'app');

function injectScript(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (content.includes('dashboard-console-capture.js')) {
    return;
  }
  
  if (content.includes('</head>')) {
    content = content.replace('</head>', `${scriptTag}</head>`);
  } else if (content.includes('<body')) {
    content = content.replace('<body', `${scriptTag}<body`);
  }
  
  fs.writeFileSync(filePath, content, 'utf8');
}

glob(path.join(buildDir, '**/*.html'), (err, files) => {
  if (err) {
    console.error('Error finding HTML files:', err);
    return;
  }
  
  files.forEach(injectScript);
  console.log(`Injected console capture script into ${files.length} files`);
});