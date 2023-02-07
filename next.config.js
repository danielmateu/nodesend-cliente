/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  env: {
    backendURL: 'https://obscure-bayou-61065.herokuapp.com/',
    frontEndURL: 'https://nuk-send.vercel.app'
  }
}
