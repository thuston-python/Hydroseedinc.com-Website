import { company } from './site';

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: company.name,
  areaServed: ['South Bend', 'Mishawaka', 'Elkhart', 'Granger', 'Osceola', 'Greater Michiana'],
  telephone: company.phoneDisplay,
  description:
    'Hydroseeding, lawn installation, erosion control, and new construction lawn seeding services across Michiana.',
  url: 'https://hydroseedinc-demo.vercel.app'
};

export const makeServiceSchema = (serviceName: string, description: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: serviceName,
  provider: { '@type': 'LocalBusiness', name: company.name },
  areaServed: 'Greater Michiana',
  description
});

export const makeFaqSchema = (items: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a }
  }))
});
