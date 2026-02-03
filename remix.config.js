/** @type {import('@remix-run/dev').AppConfig} */
export default {
  serverBuildTarget: "cloudflare",
  server: "./server/index.js",
  publicPath: "/build/",
  ignoredRouteFiles: ["**/.*"],
};