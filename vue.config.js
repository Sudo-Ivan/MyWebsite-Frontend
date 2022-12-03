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
    // Set the "Content-Security-Policy-Report-Only" header for the production build
    if (process.env.NODE_ENV === 'production') {
      config.plugin('html').tap(args => {
        args[0].cspReportOnly = "default-src 'self';";
        return args;
      });
    }

    // Fix the issue with the "public" directory not being copied to the build directory
    config.plugin('copy').tap(args => {
      const UNESCAPED_GLOB_SYMBOLS_RE = /(\\?)([()*?[\]{|}]|^!|[!+@](?=\())/g;
      const publicDir = path.resolve(process.VUE_CLI_SERVICE.context, 'public').replace(/\\/g, '/');
      const escapePublicDir= publicDir.replace(UNESCAPED_GLOB_SYMBOLS_RE, '\\$2');
      args[0].patterns[0].globOptions.ignore = args[0].patterns[0].globOptions.ignore.map(i => i.replace(publicDir, escapePublicDir));
      return args;
  });
  }
};
