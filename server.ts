import { createRequestHandler } from "@remix-run/cloudflare";
import * as build from "@remix-run/dev/server-build";

export default {
  fetch: createRequestHandler(build),
};