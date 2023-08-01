/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['i.ibb.co', 'iilio.io'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'illio.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
