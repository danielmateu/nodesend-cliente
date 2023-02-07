/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  env: {
    backendURL: 'https://obscure-thicket-63984.herokuapp.com/',
    frontEndURL: 'https://nuk-send.vercel.app/'
  }
}
