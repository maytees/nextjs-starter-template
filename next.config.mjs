/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "avatars.githubusercontent.com",
                port: "",
                pathname: "/u/**",
            },
            {
                protocol: "https",
                hostname: "avatar.iran.liara.run",
                port: "",
                pathname: "/public/**",
            }
        ]
    }
};

export default nextConfig;
