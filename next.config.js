/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
        port: '8080',
        pathname: '/1611048159421075456/_hJhdfJa_400x400.jpg',
      },
    ],
  },
}
module.exports = nextConfig
