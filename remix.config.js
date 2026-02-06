/** @type {import('@remix-run/dev').AppConfig} */
export default {
  appDirectory: "app",
  publicPath: "/build/",
  assetsBuildDirectory: "public/build",
  serverBuildDirectory: "build/server",

  // 🔒 STATIC ONLY
  server: undefined,
  serverModuleFormat: "esm",
  serverPlatform: "neutral",

  ignoredRouteFiles: ["**/*.server.*"],
};