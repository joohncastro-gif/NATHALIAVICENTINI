import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { HowItWorks } from "@/components/how-it-works"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { BlogPreview } from "@/components/blog-preview"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { StructuredData } from "@/components/structured-data"
import Link from "next/link" // Importação importante!

export default function Home() {
  return (
    <>
      <StructuredData />
      <Header />

      <main>
        {/* H1 Oculto para SEO - Perfeito */}
        <section className="hidden" aria-hidden="true">
          <h1>Psicóloga Online Nathalia Vicentini - Terapia para Ansiedade, Autoestima e Relacionamentos</h1>
        </section>

        <Hero />

        {/* Seção SEO 1 - Com espaçamento e estilo */}
        <section className="max-w-7xl mx-auto px-6 py-12 text-center md:text-left">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">Psicóloga Online para Ansiedade, Autoestima e Relacionamentos</h2>
          <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
            <p>
              A psicóloga Nathalia Vicentini oferece atendimento psicológico online para adultos que buscam melhorar sua saúde emocional.
              A terapia online é indicada para ansiedade, autoestima, dificuldades nos relacionamentos e momentos de crise emocional.
            </p>
            <p>
              Com atendimento humanizado e sigiloso, você pode iniciar seu processo terapêutico com conforto e segurança, diretamente da sua casa.
            </p>
            <p className="font-medium text-primary">
              Atendimento disponível para todo o Brasil, com foco em pacientes de São José do Rio Preto e região.
            </p>
          </div>
        </section>

        <Services />
        <About />

        {/* Seção SEO 2 - Estilizada */}
        <section className="bg-slate-50 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-slate-800 mb-6 text-center">Como funciona a terapia online?</h2>
            <div className="grid md:grid-cols-2 gap-8 text-slate-600">
              <p>
                A terapia online funciona por meio de videochamadas seguras, seguindo todas as diretrizes do Conselho Federal de Psicologia.
                O atendimento é tão eficaz quanto o presencial e permite maior flexibilidade de horários.
              </p>
              <p>
                Durante as sessões, são trabalhadas questões emocionais como ansiedade, insegurança, autoestima e conflitos nos relacionamentos.
              </p>
            </div>
          </div>
        </section>

        <Testimonials />
        <HowItWorks />
        <FAQ />

        {/* Links Internos com Link do Next.js */}
        <section className="py-12 text-center border-t">
          <p className="text-lg text-slate-700">
            Saiba mais sobre o atendimento acessando nossa página de{" "}
            <Link href="/psicologa-online" className="text-primary font-bold hover:underline">
              psicóloga online
            </Link>{" "}
            e descubra como iniciar seu processo terapêutico.
          </p>
        </section>

        <BlogPreview />
        <CTASection />
      </main>

      <Footer />
    </>
  )
}