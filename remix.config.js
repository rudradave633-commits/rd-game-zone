/** @type {import('@remix-run/cloudflare').AppConfig} */
export default {
  appDirectory: "app",
  serverBuildPath: "build/server/index.js",
  publicPath: "/build/",
  assetsBuildDirectory: "build/client",
  serverModuleFormat: "esm",
  serverPlatform: "cloudflare",
};