import { MetadataRoute } from 'next';
import { plugins } from '@/lib/plugins';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://amp-spot.com';

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/plugins`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/download`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/roadmap`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/social`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/youtube`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
    },
  ];

  // Plugin pages
  const pluginPages = plugins.map((plugin) => ({
    url: `${baseUrl}/plugins/${plugin.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Blog posts (would need blog data to be dynamic)
  const blogPosts = [
    'how-to-fix-muddy-mixes-eq-tutorial',
    'compression-for-beginners-masterclass',
    'amp-spot-eq-plugin-walkthrough',
    'introducing-amp-spot',
    'mid-side-processing',
    'eq-tips-cleaner-mixes',
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...pluginPages, ...blogPosts];
}
