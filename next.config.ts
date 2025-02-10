/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["res.cloudinary.com"], // Allow Cloudinary images
		formats: ["image/avif", "image/webp"], // Enable modern image formats
	},
	reactStrictMode: true, // Optional: Enables React's strict mode
};

module.exports = nextConfig;
