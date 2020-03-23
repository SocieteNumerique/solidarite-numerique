require('dotenv').config();
const withFonts = require('nextjs-fonts');
const webpack = require('webpack');
const data = require('./_ressources/ressources.json');

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
      '/mentions-legales': { page: '/mentions-legales' },
      '/contact': { page: '/contact' },
      '/404': { page: '/404' },
      '/ressources': { page: '/ressources' },
    };

    Object.keys(data).forEach(url => {
      paths[`/ressource/${url}`] = {
        page: '/ressource/[id]',
        query: { id: url },
      };
    });

    return paths;
  },
});
