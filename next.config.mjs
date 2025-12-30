/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'logos-world.net',
            },
            {
                protocol: 'https',
                hostname: 'jpinfotech.net.in',
            },
        ],
    },
};

export default nextConfig;
