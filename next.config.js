/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        async rewrites() {
            return [
                {
                    source: '/api/:path*',
                    destination: '/api/:path*',
                },
            ];
        },
    },
}

module.exports = nextConfig
