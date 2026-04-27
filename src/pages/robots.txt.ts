export async function GET() {
  return new Response('User-agent: *\nAllow: /\nSitemap: https://hydroseedinc-demo.vercel.app/sitemap.xml\n', {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' }
  });
}
