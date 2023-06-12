/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {  ZOHO_PASS: process.env.ZOHO_PASS  }
}

module.exports = nextConfig
