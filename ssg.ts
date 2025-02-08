import { toSSG } from "hono/deno";
import app from "./main.ts";

toSSG(app, {
  dir: "./ssg",
  beforeRequestHook: (req) => {
    if (req.url.endsWith(".html")) {
      return false;
    }
    return req;
  },
});
