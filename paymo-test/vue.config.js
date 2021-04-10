const path = require('path');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',

  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@/style.constants.scss";',
      },
    },
  },
};
