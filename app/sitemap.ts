import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // Verifique se este é o domínio EXATO que aparece no topo do seu Search Console
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