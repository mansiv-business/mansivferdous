import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.mansivferdous.com'

  return [
    {
      url: baseUrl,
      lastModified: '2026-01-20', 
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `https://www.mansivferdous.com/blogs`,
      lastModified: '2026-01-20',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `https://www.mansivferdous.com/blogs/website-pricing-breakdown-2026`,
      lastModified: '2026-01-20',
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `https://www.mansivferdous.com/blogs/website-design-process`,
      lastModified: '2026-01-20',
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]
}
