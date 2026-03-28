"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const whatsappLink = "https://wa.me/5517996273555?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta"

  return (
    <section className="min-h-screen flex items-center px-6 pt-24 pb-16 md:pt-0 md:pb-0">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <motion.p 
              className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Psicoterapia Online
            </motion.p>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-6 tracking-tight text-balance">
              Cuidar de você é um<br />
              <span className="italic">ato de coragem</span>
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl max-w-lg mb-8 leading-relaxed font-light">
              Um espaço seguro de acolhimento e escuta para você que busca 
              autoconhecimento, equilíbrio emocional e bem-estar.
            </p>
            
            <div className="mb-10 pb-8 border-b border-border">
              <p className="font-serif text-2xl md:text-3xl text-foreground tracking-wide">
                Nathalia Vicentini de Castro
              </p>
              <p className="text-muted-foreground text-sm tracking-widest mt-2">
                CRP-SP 136834
              </p>
            </div>
            
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 text-sm tracking-widest uppercase font-medium hover:bg-primary transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Agendar Consulta
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image
                  src="/images/nathalia.jpg"
                  alt="Psicóloga Nathalia Vicentini de Castro"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-card p-6 shadow-lg hidden md:block">
                <p className="text-sm tracking-widest text-muted-foreground uppercase">Atendimento</p>
                <p className="font-serif text-lg text-foreground">100% Online</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
