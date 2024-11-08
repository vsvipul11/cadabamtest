/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cadabams-diagnostics-assets.s3.ap-south-1.amazonaws.com'],
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/bangalore',
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/bangalore/center',
        destination: '/bangalore',
        permanent: false,
      },
      {
        source: '/bangalore/center/',
        destination: '/bangalore',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;