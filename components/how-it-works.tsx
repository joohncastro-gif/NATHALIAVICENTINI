"use client"

import { motion } from "framer-motion"
import { MessageCircle, Video, Lock, ArrowRight } from "lucide-react"

const steps = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Entre em Contato",
    description: "Envie uma mensagem pelo WhatsApp. Vamos conversar sobre suas necessidades e agendar a primeira sessão."
  },
  {
    icon: Video,
    number: "02",
    title: "Sessão Online",
    description: "As sessões acontecem por videochamada, permitindo atendimento de qualquer lugar do Brasil, no conforto da sua casa."
  },
  {
    icon: Lock,
    number: "03",
    title: "Sigilo Total",
    description: "Suas informações são tratadas com total confidencialidade, seguindo o código de ética profissional."
  }
]

export function HowItWorks() {
  const whatsappLink = "https://wa.me/5517996273555?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta"

  return (
    <section id="como-funciona" className="py-24 md:py-32 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Atendimento
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight max-w-2xl mx-auto">
            Como funciona a terapia online
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative text-center p-8"
              >
                <div className="w-16 h-16 mx-auto mb-6 border border-border flex items-center justify-center relative">
                  <Icon className="w-6 h-6 text-foreground" strokeWidth={1.5} />
                  <span className="absolute -top-3 -right-3 bg-foreground text-background text-xs w-6 h-6 flex items-center justify-center font-medium">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-light">
                  {step.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 border border-foreground text-foreground px-8 py-4 text-sm tracking-widest uppercase font-medium hover:bg-foreground hover:text-background transition-all duration-300"
          >
            Começar Agora
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
