/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:["res.cloudinary.com","images.unsplash.com"],
    },
    experimental: {
    cssChunking:"strict"
  },
};

export default nextConfig;
