/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {  NEXT_PUBLIC_ZOHO_PASS: process.env.NEXT_PUBLIC_ZOHO_PASS  }
}

module.exports = nextConfig
