import { Hono } from "hono";
import { Bird } from "./pages/bird.tsx";
import { BirdIds } from "./domain/birds.ts";
import { NotFound } from "./pages/notFound.tsx";
import { serveStatic } from "hono/deno";
import { Gallery } from "./pages/gallery.tsx";
import { About } from "./pages/about.tsx";

const app = new Hono();

app.get("/", (c) => {
  return c.html(Gallery());
});

app.get("/about", (c) => {
  return c.html(About());
});

BirdIds.forEach((birdId) => {
  app.get(`/birds/${birdId}`, (c) => {
    return c.html(Bird({ id: birdId }));
  });
});

app.get(`/:filename{.+\\.html$}`, (c) => {
  const path = c.req.path;
  return c.redirect(path.substring(0, path.indexOf(".html")));
});

app.get("*", serveStatic({ root: "./static" }));

app.notFound((c) => {
  c.status(404);
  return c.html(NotFound());
});

Deno.serve({ port: 7171 }, app.fetch);

export default app;
