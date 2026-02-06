import { createPagesFunctionHandler } from "@remix-run/cloudflare-pages";

// @ts-ignore - generated at build time
import * as build from "../build/server/index.js";

export const onRequest = createPagesFunctionHandler({
  build,
});