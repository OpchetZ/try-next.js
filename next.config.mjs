/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "cdn.dummyjson.com",
      
    }],
  },
};

export default nextConfig;
