const fs = require('fs');

function saveSitemap(paths) {
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> 
  ${Object.keys(paths)
    .map(
      path => `<url>
    <loc>https://solidarite-numerique.fr${path}</loc>
    </url>`
    )
    .join('')}
  </urlset>`;

  fs.writeFileSync('public/sitemap.xml', sitemapXml);
}
function saveUrlList(paths) {
  fs.writeFileSync('public/url-list.txt', Object.keys(paths).join(' '));
}

module.exports = { saveUrlList, saveSitemap };
