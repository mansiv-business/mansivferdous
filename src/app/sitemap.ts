import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mansivferdous.com'

  return [
    {
      url: baseUrl,
      lastModified: '2026-01-28', 
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: '2026-01-20',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blogs/website-pricing-breakdown-2026`,
      lastModified: '2026-01-20',
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blogs/website-design-process`,
      lastModified: '2026-01-28',
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]
}
