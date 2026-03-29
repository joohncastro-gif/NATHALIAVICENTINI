import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.psinathaliavicentini.com.br'
  const lastModified = new Date()

  return [
    { url: `${baseUrl}/`, lastModified },
    { url: `${baseUrl}/psicologa-online`, lastModified },
    { url: `${baseUrl}/ansiedade`, lastModified },
    { url: `${baseUrl}/relacionamentos`, lastModified },
    { url: `${baseUrl}/blog`, lastModified },
    { url: `${baseUrl}/contato`, lastModified },
  ]
}