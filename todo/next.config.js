/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'localhost',
      'todo-server-svc'
    ],
    minimumCacheTTL: 60
  },
  env: {
    API_URI: process.env.API_URI
  }
}

module.exports = nextConfig
