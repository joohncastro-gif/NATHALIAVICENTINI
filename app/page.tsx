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

export default function Home() {
  return (
    <>
      <StructuredData />
      <Header />

      <main>

        {/* 🔥 H1 PRINCIPAL (OBRIGATÓRIO PRA SEO) */}
        <section style={{ display: 'none' }}>
          <h1>Psicóloga Online Nathalia Vicentini - Terapia para Ansiedade, Autoestima e Relacionamentos</h1>
        </section>

        <Hero />

        {/* 🔥 TEXTO SEO (Google AMA ISSO) */}
        <section>
          <h2>Psicóloga Online para Ansiedade, Autoestima e Relacionamentos</h2>

          <p>
            A psicóloga Nathalia Vicentini oferece atendimento psicológico online para adultos que buscam melhorar sua saúde emocional.
            A terapia online é indicada para ansiedade, autoestima, dificuldades nos relacionamentos e momentos de crise emocional.
          </p>

          <p>
            Com atendimento humanizado e sigiloso, você pode iniciar seu processo terapêutico com conforto e segurança,
            diretamente da sua casa, com acompanhamento profissional qualificado.
          </p>

          <p>
            Atendimento disponível para todo o Brasil, com foco em pacientes de São José do Rio Preto e região.
          </p>
        </section>

        <Services />
        <About />

        {/* 🔥 MAIS CONTEÚDO SEO */}
        <section>
          <h2>Como funciona a terapia online?</h2>

          <p>
            A terapia online funciona por meio de videochamadas seguras, seguindo todas as diretrizes do Conselho Federal de Psicologia.
            O atendimento é tão eficaz quanto o presencial e permite maior flexibilidade de horários.
          </p>

          <p>
            Durante as sessões, são trabalhadas questões emocionais como ansiedade, insegurança, autoestima e conflitos nos relacionamentos.
          </p>
        </section>

        <Testimonials />
        <HowItWorks />
        <FAQ />

        {/* 🔥 LINK INTERNO (SEO FORTE) */}
        <section>
          <p>
            Saiba mais sobre o atendimento acessando nossa página de{" "}
            <a href="/psicologa-online">psicóloga online</a> e descubra como iniciar seu processo terapêutico.
          </p>
        </section>

        <BlogPreview />
        <CTASection />

      </main>

      <Footer />
    </>
  )
}