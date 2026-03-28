"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  const whatsappLink = "https://wa.me/5517996273555?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta"

  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">
            Comece Agora
          </p>
          
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
            Você merece cuidar<br />
            <span className="italic">da sua saúde mental</span>
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10 leading-relaxed font-light">
            Dar o primeiro passo pode parecer difícil, mas você não precisa fazer isso sozinho. 
            Estou aqui para te acompanhar nessa jornada.
          </p>
          
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-foreground text-background px-10 py-5 text-sm tracking-widest uppercase font-medium hover:bg-primary transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Agendar Consulta
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
