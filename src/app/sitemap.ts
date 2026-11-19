import { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { exploreSlugs } from '@/lib/explore';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tritonsfountainmalta.com';

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Add root and pages for each locale
  routing.locales.forEach((locale) => {
    sitemapEntries.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    });
    sitemapEntries.push({
      url: `${baseUrl}/${locale}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    });
    sitemapEntries.push({
      url: `${baseUrl}/${locale}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    });
    sitemapEntries.push({
      url: `${baseUrl}/${locale}/cookie-settings`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    });
    exploreSlugs.forEach(slug => sitemapEntries.push({
      url: `${baseUrl}/${locale}/explore/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.75,
    }));
  });

  return sitemapEntries;
}
