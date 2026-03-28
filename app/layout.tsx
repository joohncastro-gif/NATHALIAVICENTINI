import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif',
  display: 'swap',
});

const lato = Lato({ 
  subsets: ["latin"],
  weight: ['300', '400', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nathaliavicentinidecastro.com.br'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Psicóloga Nathalia Vicentini de Castro | Terapia Online - CRP-SP 136834',
    template: '%s | Psicóloga Nathalia Vicentini de Castro'
  },
  description: 'Psicóloga clínica CRP-SP 136834. Terapia online para ansiedade, depressão, autoestima e relacionamentos. Atendimento personalizado com sigilo absoluto para todo o Brasil. Agende sua consulta!',
  keywords: [
    'psicóloga',
    'psicóloga online',
    'terapia online',
    'psicologia',
    'ansiedade',
    'depressão',
    'autoestima',
    'relacionamentos',
    'psicóloga São Paulo',
    'terapia cognitivo comportamental',
    'psicoterapia',
    'saúde mental',
    'psicóloga CRP',
    'consulta psicológica online',
    'psicóloga Brasil',
    'Nathalia Vicentini de Castro'
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
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: baseUrl,
    siteName: 'Psicóloga Nathalia Vicentini de Castro',
    title: 'Psicóloga Nathalia Vicentini de Castro | Terapia Online',
    description: 'Psicóloga clínica especializada em terapia online. Tratamentos para ansiedade, depressão, autoestima e relacionamentos. Atendimento com sigilo absoluto para todo o Brasil.',
    images: [
      {
        url: '/images/nathalia.jpg',
        width: 800,
        height: 800,
        alt: 'Psicóloga Nathalia Vicentini de Castro',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Psicóloga Nathalia Vicentini de Castro | Terapia Online',
    description: 'Psicóloga clínica especializada em terapia online. Tratamentos para ansiedade, depressão e autoestima.',
    images: ['/images/nathalia.jpg'],
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
    // Adicione seu código do Google Search Console aqui
    // google: 'seu-codigo-verificacao',
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
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${playfair.variable} ${lato.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
