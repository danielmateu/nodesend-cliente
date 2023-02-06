/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  env: {
    backendURL: 'http://localhost:4000',
    frontEndURL: 'http://localhost:3000'
  }
}
