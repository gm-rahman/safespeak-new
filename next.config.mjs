import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

/** @type {(phase: string) => import('next').NextConfig} */
const nextConfig = (phase) => ({
  typedRoutes: true,
  ...(phase === PHASE_DEVELOPMENT_SERVER
    ? { distDir: process.env.NEXT_DIST_DIR || ".next-dev" }
    : {}),
});

export default nextConfig;
