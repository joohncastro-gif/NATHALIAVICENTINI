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
    description: 'Atendimento psicológico online humanizado em todo o Brasil. Especialista em ansiedade, autoestima e relacionamentos.',
    images: [
      {
        url: `${baseUrl}/images/nathalia.jpg`,
        width: 1200,      // ← melhorei
        height: 630,      // ← formato ideal para OG
        alt: 'Psicóloga Nathalia Vicentini sorrindo',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Psicóloga Online Nathalia Vicentini',
    description: 'Terapia online especializada em ansiedade, autoestima e relacionamentos.',
    images: [`${baseUrl}/images/nathalia.jpg`],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  verification: {
    google: 'SEU_CODIGO_AQUI',
  },

  icons: { /* seu código está bom */ },
}