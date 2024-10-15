/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    async headers() {
        return [
            {
                source: "/:path*{/}?",
                headers: [
                    {
                        key: "X-Accel-Buffering",
                        value: "no",
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
