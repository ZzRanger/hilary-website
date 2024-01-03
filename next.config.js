/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return {
      fallback: [
        {
          source: "/:path*",
          destination: `/rewrite/:path*`,
        },
      ],
    };
  },
  async redirects() {
    return [
      {
        source: "/s/Hilary-Nguyen-Resume-2023-Product-Design.pdf",
        destination: "/resume",
        permanent: false,
      },
      {
        source: "/graphic-design",
        destination: "/home",
        permanent: false,
      },
      {
        source: "/case-studies",
        destination: "/home",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
