const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withImages = require('next-images');


module.exports = withSass(withImages(withCSS({
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg)$/,
      use: {
        loader: 'file-loader',
        options: {
          limit: 1024,
          name: '[name].[hash].[ext]',
        },
      },
    });
    return config;
  },
})));
