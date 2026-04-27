export async function GET() {
  const pages = [
    '',
    '/services',
    '/services/hydroseeding',
    '/services/lawn-installation',
    '/services/commercial-erosion-control',
    '/services/new-construction-lawn-seeding',
    '/services/lawn-maintenance',
    '/services/soil-prep-assessment',
    '/locations',
    '/locations/south-bend',
    '/locations/mishawaka',
    '/locations/elkhart',
    '/locations/granger',
    '/locations/osceola',
    '/contact',
    '/blog'
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pages
    .map((route) => `\n  <url><loc>https://hydroseedinc-demo.vercel.app${route}</loc></url>`)
    .join('')}\n</urlset>`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' }
  });
}
