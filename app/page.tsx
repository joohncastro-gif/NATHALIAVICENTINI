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
        <Hero /> {/* ← O H1 deve estar aqui, visível */}

        {/* Seção introdutória com bom SEO */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="max-w-3xl mx-auto text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Psicóloga Online Especializada em Ansiedade, Autoestima e Relacionamentos
            </h2>

            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Olá, sou <strong>Nathalia Vicentini</strong>, psicóloga online com foco em atender adultos que desejam superar ansiedade, melhorar a autoestima e resolver dificuldades nos relacionamentos.
              </p>
              <p>
                Ofereço atendimento psicológico humanizado, ético e totalmente online para todo o Brasil, com total sigilo e flexibilidade de horários.
              </p>
            </div>
          </div>
        </section>

        <Services />
        <About />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <BlogPreview />
        <CTASection />
      </main>

      <Footer />
    </>
  )
}