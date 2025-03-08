import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  locales: ['en', 'pt-BR'],
  defaultLocale: 'pt-BR',
  trailingSlash: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '',
};

export default nextConfig;
