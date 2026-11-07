import { createFileRoute } from "@tanstack/react-router";
const paths = ["/", "/elektronika", "/servis", "/e-otpad", "/usluge", "/it-support", "/drone", "/retro-elektronikk", "/kontakt", "/personvern", "/vilkar"];
export const Route = createFileRoute("/sitemap.xml")({
  server: { handlers: { GET: () => new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map(p => `  <url><loc>https://emsmujic.tech${p}</loc></url>`).join("\n")}\n</urlset>\n`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  ) } },
});
