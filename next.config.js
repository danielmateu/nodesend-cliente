/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  env: {
    backendURL: 'https://stormy-sea-94958.herokuapp.com',
    frontEndURL: 'https://nuk-send.vercel.app'
  }
}
