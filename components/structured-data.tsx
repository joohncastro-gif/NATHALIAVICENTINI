export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://nathaliavicentinidecastro.com.br/#organization",
        "name": "Psicóloga Nathalia Vicentini de Castro",
        "alternateName": "Nathalia Vicentini de Castro Psicóloga",
        "description": "Psicóloga clínica especializada em terapia online. Tratamentos personalizados para ansiedade, depressão, autoestima, relacionamentos e desenvolvimento pessoal. Atendimento com sigilo absoluto para todo o Brasil.",
        "url": "https://nathaliavicentinidecastro.com.br",
        "telephone": "+5511999999999",
        "priceRange": "$$",
        "image": "https://nathaliavicentinidecastro.com.br/images/nathalia.jpg",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "BR",
          "addressRegion": "SP"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "addressCountry": "BR"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Brasil"
        },
        "serviceType": [
          "Psicoterapia Online",
          "Terapia Cognitivo Comportamental",
          "Tratamento de Ansiedade",
          "Tratamento de Depressão",
          "Terapia de Casal",
          "Psicologia Clínica"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Serviços de Psicologia",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Terapia Online Individual",
                "description": "Sessões de psicoterapia online individuais com abordagem comportamental"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Tratamento de Ansiedade",
                "description": "Tratamento especializado para transtornos de ansiedade"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Terapia para Autoestima",
                "description": "Acompanhamento psicológico para desenvolvimento da autoestima"
              }
            }
          ]
        },
        "sameAs": [
          "https://www.instagram.com/psinathaliavicentini/"
        ]
      },
      {
        "@type": "Person",
        "@id": "https://nathaliavicentinidecastro.com.br/#person",
        "name": "Nathalia Vicentini de Castro",
        "jobTitle": "Psicóloga Clínica",
        "description": "Psicóloga clínica CRP-SP 136834 com abordagem comportamental. Especialista em terapia online, ansiedade, depressão e relacionamentos.",
        "image": "https://nathaliavicentinidecastro.com.br/images/nathalia.jpg",
        "url": "https://nathaliavicentinidecastro.com.br",
        "sameAs": [
          "https://www.instagram.com/psinathaliavicentini/"
        ],
        "hasCredential": {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Professional License",
          "name": "CRP-SP 136834"
        },
        "knowsAbout": [
          "Psicologia Clínica",
          "Terapia Cognitivo Comportamental",
          "Ansiedade",
          "Depressão",
          "Autoestima",
          "Relacionamentos",
          "Terapia Online"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://nathaliavicentinidecastro.com.br/#website",
        "url": "https://nathaliavicentinidecastro.com.br",
        "name": "Psicóloga Nathalia Vicentini de Castro",
        "description": "Site oficial da Psicóloga Nathalia Vicentini de Castro - Atendimento online para todo o Brasil",
        "publisher": {
          "@id": "https://nathaliavicentinidecastro.com.br/#person"
        },
        "inLanguage": "pt-BR"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Como funciona a terapia online?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A terapia online funciona através de videochamadas em plataformas seguras. Você recebe um link antes da sessão e pode participar de qualquer lugar com internet. As sessões têm a mesma eficácia da terapia presencial."
            }
          },
          {
            "@type": "Question",
            "name": "A terapia online é sigilosa?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sim, o sigilo é garantido pelo Código de Ética do Psicólogo. Todas as informações compartilhadas nas sessões são confidenciais e protegidas."
            }
          },
          {
            "@type": "Question",
            "name": "Quanto tempo dura uma sessão de terapia?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Cada sessão de terapia tem duração de aproximadamente 50 minutos, seguindo o padrão da psicoterapia clínica."
            }
          },
          {
            "@type": "Question",
            "name": "A psicóloga atende em todo o Brasil?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sim, por ser atendimento online, a Psicóloga Nathalia Vicentini de Castro atende pacientes de qualquer cidade do Brasil."
            }
          }
        ]
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
