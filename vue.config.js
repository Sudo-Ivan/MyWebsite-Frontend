const path = require('path')

module.exports = {
  css: {
    loaderOptions: {
      css: {
        url: false,
      },
    },
  },

  devServer: {
    headers: {
      "X-XSS-Protection": "1; mode=block",
      "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
      "Content-Security-Policy-Report-Only": "default-src 'self';"
    }
  },

  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.plugin('html').tap(args => {
        args[0].cspReportOnly = "default-src 'self';";
        return args;
      });
    }
  }
};
