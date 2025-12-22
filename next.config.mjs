/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
    },
    outputFileTracingRoot: import.meta.dirname,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "*.googleusercontent.com",
                port: "",
                pathname: "/a/**",
            },
        ],
    },
    async headers() {
        return [
            {
                source: "/(.*)", // applies to all routes
                headers: [
                    {
                        key: "X-Frame-Options",
                        value: "SAMEORIGIN",
                    },
                    {
                        key: "Content-Security-Policy",
                        value: "frame-ancestors 'none';",
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
