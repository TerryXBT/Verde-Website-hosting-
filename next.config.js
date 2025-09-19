const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: 'export',
  basePath: isProd ? '/Verde-Website-hosting-' : '',
  assetPrefix: isProd ? '/Verde-Website-hosting-' : '',
};

module.exports = nextConfig;
