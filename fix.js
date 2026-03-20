const fs = require('fs');
let html = fs.readFileSync('c:\\Users\\ADMIN\\Downloads\\TASK app\\index.html', 'utf8');
html = html.split('<svg viewBox=').join('<svg fill="currentColor" viewBox=');
html = html.split('<svg style="width:14px;height:14px" viewBox=').join('<svg fill="currentColor" style="width:14px;height:14px" viewBox=');
fs.writeFileSync('c:\\Users\\ADMIN\\Downloads\\TASK app\\index.html', html);
console.log('SVG replacement complete');
