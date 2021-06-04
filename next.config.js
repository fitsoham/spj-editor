const withOffline = require('next-offline');
const prod = process.env.NODE_ENV === 'production';

module.exports = withOffline({
  poweredByHeader: false,
  crossOrigin: 'anonymous',
  assetPrefix: prod ? '' : '',
  images: {
    domains: ['res.cloudinary.com', 'images.unsplash.com'],
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
