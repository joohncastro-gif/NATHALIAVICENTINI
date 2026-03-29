import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.psinathaliavicentini.com.br/',
      lastModified: new Date(),
    },
    {
      url: 'https://www.psinathaliavicentini.com.br/psicologa-online',
      lastModified: new Date(),
    },
    {
      url: 'https://www.psinathaliavicentini.com.br/ansiedade',
      lastModified: new Date(),
    },
    {
      url: 'https://www.psinathaliavicentini.com.br/relacionamentos',
      lastModified: new Date(),
    },
  ]
}