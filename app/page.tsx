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
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <HowItWorks />
        <FAQ />
        <BlogPreview />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
