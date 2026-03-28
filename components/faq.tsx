"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "Quanto tempo dura cada sessão?",
    answer: "Cada sessão de terapia tem duração de 50 minutos. Esse tempo é dedicado exclusivamente a você, para que possamos trabalhar suas questões de forma profunda e acolhedora."
  },
  {
    question: "Como funciona o sigilo profissional?",
    answer: "O sigilo é um princípio fundamental da psicologia. Tudo o que você compartilhar nas sessões é completamente confidencial e protegido pelo Código de Ética Profissional do Psicólogo. Suas informações jamais serão compartilhadas com terceiros."
  },
  {
    question: "A terapia online é tão eficaz quanto a presencial?",
    answer: "Sim! Estudos científicos demonstram que a terapia online tem a mesma eficácia que a presencial. O importante é o vínculo terapêutico e o compromisso com o processo, que podem ser desenvolvidos perfeitamente no formato online."
  },
  {
    question: "Com que frequência devo fazer terapia?",
    answer: "O mais comum é uma sessão por semana, especialmente no início do processo. Com o tempo, podemos avaliar juntos se essa frequência se mantém adequada ou se pode ser ajustada conforme sua evolução."
  },
  {
    question: "Qual plataforma é utilizada para as sessões?",
    answer: "As sessões são realizadas por videochamada através do Google Meet, uma plataforma segura e fácil de usar. Você receberá o link antes de cada sessão. Basta ter uma conexão estável de internet."
  },
  {
    question: "Posso remarcar uma sessão?",
    answer: "Sim, sessões podem ser remarcadas com aviso prévio de pelo menos 24 horas. Cancelamentos com menos de 24 horas de antecedência serão cobrados normalmente, exceto em casos de emergência."
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Dúvidas Frequentes
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
            Perguntas comuns sobre a terapia
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="border border-border overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary/30 transition-colors"
              >
                <span className="font-serif text-lg text-foreground pr-8">{faq.question}</span>
                <span className="flex-shrink-0 text-muted-foreground">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5" strokeWidth={1.5} />
                  ) : (
                    <Plus className="w-5 h-5" strokeWidth={1.5} />
                  )}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6">
                      <p className="text-muted-foreground leading-relaxed font-light">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
