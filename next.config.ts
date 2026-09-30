import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.1.136', '192.168.1.136:3000', '192.168.1.136:3001', 'localhost', 'localhost:3000'],
};

export default nextConfig;
