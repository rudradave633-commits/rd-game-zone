/** @type {import('@remix-run/dev').AppConfig} */
export default {
  serverBuildTarget: "cloudflare-workers",

  server: "./server.ts",

  ignoredRouteFiles: ["**/*.css"],

  future: {
    v2_routeConvention: true,
    v2_meta: true,
    v2_headers: true,
    v2_errorBoundary: true
  }
};