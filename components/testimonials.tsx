"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    text: "A terapia com a Nathalia transformou minha forma de lidar com a ansiedade. Ela tem uma escuta acolhedora e me ajudou a desenvolver ferramentas práticas para o dia a dia.",
    author: "M.S.",
    detail: "Paciente há 8 meses"
  },
  {
    text: "Depois de anos adiando, finalmente decidi buscar ajuda. A Nathalia me fez sentir confortável desde a primeira sessão. Hoje me conheço muito melhor e tenho mais clareza sobre minhas escolhas.",
    author: "L.R.",
    detail: "Paciente há 1 ano"
  },
  {
    text: "O atendimento online funciona muito bem. Me sinto à vontade para falar de qualquer assunto. A Nathalia é uma profissional incrível, muito dedicada e atenciosa.",
    author: "C.A.",
    detail: "Paciente há 6 meses"
  }
]

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 px-6 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Depoimentos
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
            O que dizem sobre o atendimento
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-card p-8 relative"
            >
              <Quote className="w-8 h-8 text-accent mb-6" strokeWidth={1} />
              <p className="text-foreground leading-relaxed mb-8 font-light">
                {testimonial.text}
              </p>
              <div className="border-t border-border pt-6">
                <p className="font-serif text-lg text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground tracking-wider">{testimonial.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
