/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const basePath = "";

const nextConfig = {
  output: isProd ? "export" : undefined,

  // ✅ basePath configured for both dev and prod
  basePath,

  // ✅ assetPrefix configured (if needed)
  assetPrefix: basePath,

  // Redirects are not supported in static export ('output: export')
  // For production, handle redirects in Nginx.
  // async redirects() {
  //   return [
  //     {
  //       source: "/",
  //       destination: basePath,
  //       permanent: false,
  //       basePath: false,
  //     },
  //   ];
  // },

  env: {
    // Expose basePath to the client side
    NEXT_PUBLIC_BASE_PATH: basePath,
  },

  images: {
    unoptimized: true,
    domains: [
      'images.unsplash.com',
    ],
  },

  trailingSlash: true,
};

export default nextConfig;
