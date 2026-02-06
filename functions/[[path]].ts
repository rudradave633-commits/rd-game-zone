import { createPagesFunctionHandler } from "@remix-run/cloudflare-pages";

// @ts-ignore – generated at build time
import * as build from "../build/server.js";

export const onRequest = createPagesFunctionHandler({
  build,
});