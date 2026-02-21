import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://huntr.id';

  const routes = [
    '/',
    '/use-case',
    '/news',
    '/article',
    '/our-company',
    '/our-team',
    '/privacy-policy',
    '/contact',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
