require('dotenv').config();
const withFonts = require('nextjs-fonts');
const webpack = require('webpack');
const categories = require('./_ressources/categories.json');
const { saveUrlList, saveSitemap } = require('./scripts/sitemap.js');

const waitFor = ms => new Promise(r => setTimeout(r, ms));

module.exports = withFonts({
  webpack: config => {
    config.plugins.push(new webpack.EnvironmentPlugin(process.env));
    return config;
  },
  exportPathMap: async function() {
    const paths = {
      '/': { page: '/' },
      '/a-propos': { page: '/a-propos' },
      '/vie-privee': { page: '/vie-privee' },
      '/nouvelle-ressource': { page: '/nouvelle-ressource' },
      '/rejoignez-nous': { page: '/rejoignez-nous' },
      '/rechercher-une-ressource': { page: '/rechercher-une-ressource' },
      '/mentions-legales': { page: '/mentions-legales' },
      '/votre-avis': { page: '/votre-avis' },
      '/contact': { page: '/contact' },
      '/404': { page: '/404' },
    };

    // const resources = await fetchResources();
    const categoriesArray = Object.keys(categories);
    for (let i = 0; i < categoriesArray.length; i++) {
      const categ = categories[categoriesArray[i]];
      if (categ.path != 'https://www.clic-connect.fr') {
        await waitFor(1000); // waits 1 sec between each call for Airtable limitation
        paths[`/${categ.path}`] = {
          page: '/[category]',
          query: { category: categ.path },
        };
      }
    }

    saveSitemap(paths);
    saveUrlList(paths);

    return paths;
  },
});
