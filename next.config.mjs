/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "image.tmdb.org",
        pathname: "/t/p/**",
        port: "",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
