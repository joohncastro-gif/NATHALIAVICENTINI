import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.psinathaliavicentini.com.br'
  const lastModified = new Date()

  return [
    // Páginas Principais
    { url: baseUrl, lastModified },
    { url: `${baseUrl}/psicologa-online`, lastModified },
    { url: `${baseUrl}/contato`, lastModified },
    { url: `${baseUrl}/privacidade`, lastModified },

    // Posts do Blog (Baseado nas pastas que você criou)
    { url: `${baseUrl}/blog/ansiedade`, lastModified },
    { url: `${baseUrl}/blog/autoestima`, lastModified },
    { url: `${baseUrl}/blog/relacionamentos`, lastModified },
  ]
}