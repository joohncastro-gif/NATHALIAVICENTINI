import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-serif',
  display: 'swap',
})

const lato = Lato({
  subsets: ["latin"],
  weight: ['300', '400', '700'],
  variable: '--font-sans',
  display: 'swap',
})

// 🔥 DOMÍNIO FIXO (evita erro de SEO)
const baseUrl = 'https://www.psinathaliavicentini.com.br'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  // 🔥 TITLE OTIMIZADO (palavra-chave no início)
  title: {
    default: 'Psicóloga Online | Nathalia Vicentini - Ansiedade, Autoestima e Relacionamentos',
    template: '%s | Psicóloga Nathalia Vicentini'
  },

  // 🔥 DESCRIPTION QUE CONVERTE + RANQUEIA
  description:
    'Psicóloga online especializada em ansiedade, autoestima e relacionamentos. Atendimento humanizado para todo o Brasil. Agende sua consulta com Nathalia Vicentini.',

  // 🔥 KEYWORDS LONG TAIL (vantagem competitiva)
  keywords: [
    'psicóloga online',
    'terapia online',
    'psicóloga ansiedade',
    'tratamento ansiedade online',
    'psicóloga relacionamento',
    'terapia autoestima',
    'psicóloga São José do Rio Preto',
    'psicóloga interior SP',
    'consulta psicológica online',
    'psicoterapia online Brasil',
    'saúde mental',
    'Nathalia Vicentini psicóloga'
  ],

  authors: [{ name: 'Nathalia Vicentini de Castro', url: baseUrl }],
  creator: 'Nathalia Vicentini de Castro',
  publisher: 'Nathalia Vicentini de Castro',

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  alternates: {
    canonical: baseUrl,
  },

  // 🔥 OPEN GRAPH (WhatsApp / redes sociais)
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: baseUrl,
    siteName: 'Psicóloga Nathalia Vicentini',
    title: 'Psicóloga Online Nathalia Vicentini | Terapia para Ansiedade',
    description:
      'Atendimento psicológico online para ansiedade, autoestima e relacionamentos. Agende sua consulta.',
    images: [
      {
        url: `${baseUrl}/images/nathalia.jpg`,
        width: 800,
        height: 800,
        alt: 'Psicóloga Nathalia Vicentini',
      },
    ],
  },

  // 🔥 TWITTER (extra SEO social)
  twitter: {
    card: 'summary_large_image',
    title: 'Psicóloga Online Nathalia Vicentini',
    description:
      'Terapia online para ansiedade, autoestima e relacionamentos.',
    images: [`${baseUrl}/images/nathalia.jpg`],
  },

  // 🔥 ROBOTS (indexação máxima)
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

  // 🔥 GEO SEO (ranking local)
  other: {
    'geo.region': 'BR-SP',
    'geo.placename': 'São José do Rio Preto',
    'geo.position': '-20.8113;-49.3758',
    'ICBM': '-20.8113, -49.3758',
  },

  // 🔥 COLOQUE SEU CÓDIGO DO GOOGLE AQUI
  verification: {
    // google: 'SEU_CODIGO_AQUI',
  },

  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f0eb' },
    { media: '(prefers-color-scheme: dark)', color: '#3d3530' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${playfair.variable} ${lato.variable} font-sans antialiased`}>

        {/* 🔥 DADOS ESTRUTURADOS (SEO FORTE) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Psychologist",
              name: "Nathalia Vicentini de Castro",
              url: baseUrl,
              image: `${baseUrl}/images/nathalia.jpg`,
              description:
                "Psicóloga online especializada em ansiedade, autoestima e relacionamentos.",
              areaServed: "Brasil",
              availableLanguage: "Português",
              sameAs: [
                "https://www.instagram.com/psi.nathaliavicentini/"
              ]
            }),
          }}
        />

        {children}

        <Analytics />
      </body>
    </html>
  )
}