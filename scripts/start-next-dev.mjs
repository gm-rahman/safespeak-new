import { spawn } from "node:child_process";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

const args = process.argv.slice(2);
const getArg = (name, fallback) => {
  const index = args.indexOf(name);
  if (index === -1 || !args[index + 1]) {
    return fallback;
  }
  return args[index + 1];
};

const port = getArg("--port", "3000");
const distDir = getArg("--dist", ".next-dev");
const useWebpack = args.includes("--webpack");
const nextBin = require.resolve("next/dist/bin/next");
const nextArgs = ["dev", "-p", port];

if (!useWebpack) {
  nextArgs.splice(1, 0, "--turbopack");
}

const child = spawn(process.execPath, [nextBin, ...nextArgs], {
  env: {
    ...process.env,
    NEXT_DIST_DIR: distDir,
  },
  stdio: "inherit",
});

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }
  process.exit(code ?? 0);
});
