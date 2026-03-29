import type { Metadata } from 'next'

const baseUrl = 'https://www.psinathaliavicentini.com.br'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title: {
    default: 'Psicóloga Online | Nathalia Vicentini - Ansiedade, Autoestima e Relacionamentos',
    template: '%s | Psicóloga Nathalia Vicentini'
  },

  description:
    'Psicóloga online especializada em ansiedade, autoestima e relacionamentos. Atendimento humanizado e confidencial para todo o Brasil. Agende sua consulta.',

  keywords: [
    'psicóloga online',
    'terapia online',
    'psicóloga ansiedade',
    'psicóloga autoestima',
    'psicóloga relacionamentos',
    'terapia para ansiedade',
    'psicóloga São José do Rio Preto',
    'psicóloga interior de SP',
    'consulta psicológica online',
    'psicoterapia online',
    'Nathalia Vicentini',
    'psicóloga CRP',
  ],

  authors: [{ name: 'Nathalia Vicentini de Castro', url: baseUrl }],
  creator: 'Nathalia Vicentini de Castro',
  publisher: 'Nathalia Vicentini de Castro',

  alternates: {
    canonical: baseUrl,
  },

  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: baseUrl,
    siteName: 'Psicóloga Nathalia Vicentini',
    title: 'Psicóloga Online | Terapia para Ansiedade e Autoestima',
    description: 'Atendimento psicológico online humanizado em todo o Brasil.',
    images: [
      {
        url: `${baseUrl}/images/nathalia.jpg`,
        width: 1200,
        height: 630,
        alt: 'Psicóloga Nathalia Vicentini sorrindo',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Psicóloga Online Nathalia Vicentini',
    description: 'Terapia online especializada em ansiedade.',
    images: [`${baseUrl}/images/nathalia.jpg`],
  },

  robots: {
    index: true,
    follow: true,
  },

  verification: {
    google: 'SEU_CODIGO_AQUI',
  },
}