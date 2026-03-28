"use client"

import { motion } from "framer-motion"
import { Brain, Heart, Sparkles, RefreshCw, Search, Shield } from "lucide-react"

const services = [
  {
    icon: Brain,
    title: "Ansiedade e Estresse",
    description: "Aprenda a lidar com pensamentos ansiosos e desenvolva estratégias para recuperar sua tranquilidade e equilíbrio."
  },
  {
    icon: Heart,
    title: "Relacionamentos",
    description: "Desenvolva relacionamentos mais saudáveis, trabalhe a comunicação assertiva e aprenda a estabelecer limites."
  },
  {
    icon: Sparkles,
    title: "Autoestima e Autoconfiança",
    description: "Reconheça seu valor, fortaleça sua autoconfiança e construa uma relação mais amorosa consigo mesmo."
  },
  {
    icon: RefreshCw,
    title: "Momentos de Transição",
    description: "Tenha apoio profissional para atravessar mudanças de carreira, luto, separações e outras fases desafiadoras."
  },
  {
    icon: Search,
    title: "Autoconhecimento",
    description: "Descubra seus valores, padrões de comportamento e encontre significado em sua jornada pessoal."
  },
  {
    icon: Shield,
    title: "Saúde Mental",
    description: "Cuide da sua saúde mental de forma preventiva, desenvolvendo hábitos e estratégias para o bem-estar."
  }
]

export function Services() {
  return (
    <section id="servicos" className="py-24 md:py-32 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Áreas de Atuação
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight max-w-2xl mx-auto text-balance">
            Como posso te ajudar nessa jornada
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 border border-border hover:border-foreground/20 hover:bg-secondary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center mb-6 border border-border group-hover:border-foreground/20 transition-colors">
                  <Icon className="w-5 h-5 text-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-light">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
