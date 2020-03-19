require('dotenv').config();
const withFonts = require('nextjs-fonts');
const webpack = require('webpack');

module.exports = withFonts({
  webpack: config => {
    config.plugins.push(new webpack.EnvironmentPlugin(process.env));
    return config;
  },
});
