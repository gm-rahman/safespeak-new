import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

function stripTrailingSlashes(value) {
  return value.replace(/\/+$/, "");
}

/** @type {(phase: string) => import('next').NextConfig} */
const nextConfig = (phase) => ({
  typedRoutes: true,
  async rewrites() {
    const backendOrigin = stripTrailingSlashes(
      process.env.SAFESPEAK_BACKEND_ORIGIN || "http://localhost:5000"
    );
    const aiAgentOrigin = stripTrailingSlashes(
      process.env.SAFESPEAK_AI_AGENT_ORIGIN || "http://localhost:8000"
    );

    return [
      {
        source: "/api/v1/:path*",
        destination: `${backendOrigin}/api/v1/:path*`,
      },
      {
        source: "/api/auth/:path*",
        destination: `${backendOrigin}/api/auth/:path*`,
      },
      {
        source: "/api/ai-agent/v1/:path*",
        destination: `${aiAgentOrigin}/api/v1/:path*`,
      },
    ];
  },
  ...(phase === PHASE_DEVELOPMENT_SERVER
    ? { distDir: process.env.NEXT_DIST_DIR || ".next-dev" }
    : {}),
});

export default nextConfig;
