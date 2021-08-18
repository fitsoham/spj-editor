const { withSentryConfig } = require('@sentry/nextjs');
const withOffline = require('next-offline');

const moduleExports = withOffline({
  poweredByHeader: false,
  crossOrigin: 'anonymous',
  images: {
    domains: ['res.cloudinary.com', 'images.unsplash.com', 'i.pinimg.com'],
  },
  workboxOpts: {
    swDest: process.env.NEXT_EXPORT ? 'service-worker.js' : 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'offlineCache',
          expiration: {
            maxEntries: 200,
          },
        },
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/service-worker.js',
        destination: '/_next/static/service-worker.js',
      },
    ];
  },
});

const SentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

module.exports = withSentryConfig(moduleExports, SentryWebpackPluginOptions);
