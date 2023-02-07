/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  env: {
    backendURL: 'https://nuk-send-node.herokuapp.com',
    frontEndURL: 'https://nuk-send.vercel.app'
  }
}
