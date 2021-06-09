// This file configures the initialization of Sentry on the browser.
// The config you add here will be used whenever a page is visited.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

const prod = process.env.NODE_ENV === 'production';

if (prod) {
  Sentry.init({
    dsn: SENTRY_DSN || 'https://3752a36276ac4ad4bd08a3f335d83cb2@o368456.ingest.sentry.io/5807455',
    environment: process.env.NODE_ENV,
    release: 'spacejoy-v2-dweb' + process.env.npm_package_version,
    // Note: if you want to override the automatic release value, do not set a
    // `release` value here - use the environment variable `SENTRY_RELEASE`, so
    // that it will also get attached to your source maps
  });
}
