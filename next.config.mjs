/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    typescript: {
        // It's better to set this to false in production to catch all TypeScript errors
        ignoreBuildErrors: false,
    },
    // Remove the `output: 'export'` since you need server-side features
};

export default nextConfig;
