// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      { source: '/portfolio/:path*', destination: 'https://my-portfolio-bootstrap-sigma.vercel.app/:path*' },
      { source: '/note/:path*',   destination: 'https://sharecode-frontend.vercel.app/:path*' },
      { source: '/repair/:path*', destination: 'https://frontend-repair.vercel.app/:path*' },
    ];
  },
};
export default nextConfig;
