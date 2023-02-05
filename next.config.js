/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  compress: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/userlogin',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
