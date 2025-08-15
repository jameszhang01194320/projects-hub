// next.config.js（项目根目录）
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/portfolio/:path*', destination: 'https://my-portfolio-bootstrap-sigma.vercel.app/:path*', permanent: false },
      { source: '/note/:path*',      destination: 'https://sharecode-frontend.vercel.app/:path*', permanent: false },
      { source: '/repair/:path*',    destination: 'https://frontend-repair.vercel.app/:path*',     permanent: false },
    ];
  },
};

export default nextConfig;
