//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  output: 'standalone',
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/adults',
      },
      {
        source: '/production',
        destination: '/adults/production',
      },
      {
        source: '/distribution',
        destination: '/adults/distribution',
      },
      {
        source: '/audience',
        destination: '/adults/audience',
      },
      {
        source: '/contacts',
        destination: '/adults/contacts',
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
      },
    ],
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
