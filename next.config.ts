import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig = {
  // Required by @opennextjs/cloudflare: it packages the cache assets from
  // .next/standalone (see @opennextjs/aws createAssets.js). Without this,
  // the OpenNext build step fails with ENOENT on pages-manifest.json.
  output: 'standalone' as const,
  outputFileTracingRoot: process.cwd(),
  images: {
    remotePatterns: [
      { protocol: 'https' as const, hostname: 'images.unsplash.com' },
      { protocol: 'https' as const, hostname: 'maps.google.com' },
      { protocol: 'https' as const, hostname: 'lh3.googleusercontent.com' },
      { protocol: 'https' as const, hostname: '*.google.com' },
    ],
  },
};

export default withNextIntl(nextConfig);
