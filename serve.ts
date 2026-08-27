const ROOT = "out";
const PORT = Number(process.env.PORT ?? 3000);

function contentType(path: string) {
  if (path.endsWith(".html")) return "text/html; charset=utf-8";
  if (path.endsWith(".js")) return "application/javascript; charset=utf-8";
  if (path.endsWith(".css")) return "text/css; charset=utf-8";
  if (path.endsWith(".json")) return "application/json; charset=utf-8";
  if (path.endsWith(".png")) return "image/png";
  if (path.endsWith(".jpg") || path.endsWith(".jpeg")) return "image/jpeg";
  if (path.endsWith(".webp")) return "image/webp";
  if (path.endsWith(".svg")) return "image/svg+xml";
  if (path.endsWith(".ico")) return "image/x-icon";
  if (path.endsWith(".woff2")) return "font/woff2";
  if (path.endsWith(".txt")) return "text/plain; charset=utf-8";
  return "application/octet-stream";
}

async function fileFor(pathname: string) {
  const clean = decodeURIComponent(pathname).replace(/\\/g, "/");
  const candidates = [
    `${ROOT}${clean}`,
    `${ROOT}${clean}/index.html`,
    `${ROOT}${clean}.html`,
    `${ROOT}/404.html`,
  ];

  for (const candidate of candidates) {
    const file = Bun.file(candidate);
    if (await file.exists()) return { file, path: candidate };
  }
  return null;
}

const server = Bun.serve({
  port: PORT,
  async fetch(req: Request) {
    const url = new URL(req.url);
    const pathname = url.pathname === "/" ? "/index.html" : url.pathname;
    const found = await fileFor(pathname);
    if (!found) return new Response("Not found", { status: 404 });
    return new Response(found.file, {
      headers: { "Content-Type": contentType(found.path) },
    });
  },
});

console.log(`Sitio estático en http://localhost:${server.port}`);
