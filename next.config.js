/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // Removing output: 'export' and distDir for dynamic deployment
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
