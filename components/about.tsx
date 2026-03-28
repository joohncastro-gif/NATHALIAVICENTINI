"use client"

import { motion } from "framer-motion"
import { Instagram } from "lucide-react"
import Image from "next/image"

export function About() {
  return (
    <section id="sobre" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Sobre Mim
            </p>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-8 leading-tight">
              Nathalia Vicentini<br />de Castro
            </h2>
            
            <div className="space-y-5 text-muted-foreground leading-relaxed font-light">
              <p>
                Sou psicóloga clínica com abordagem comportamental, apaixonada por ajudar 
                pessoas a encontrarem seu caminho para uma vida mais plena e significativa.
              </p>
              <p>
                Acredito que cada pessoa carrega dentro de si a capacidade de transformação. 
                Meu papel é oferecer um espaço seguro, de escuta atenta e acolhimento genuíno, 
                onde você pode se expressar sem julgamentos.
              </p>
              <p>
                O processo terapêutico é uma jornada de autoconhecimento e desenvolvimento. 
                Juntos, vamos trabalhar para que você desenvolva ferramentas para lidar com 
                seus desafios e alcance seus objetivos.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-border">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                <span className="text-sm tracking-widest text-muted-foreground">
                  CRP-SP 136834
                </span>
                <a
                  href="https://www.instagram.com/psi.nathaliavicentini/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors group"
                >
                  <Instagram className="w-4 h-4" />
                  <span className="text-sm tracking-wider">@psi.nathaliavicentini</span>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="aspect-[3/4] relative overflow-hidden">
                <Image
                  src="/images/nathalia.jpg"
                  alt="Psicóloga Nathalia Vicentini de Castro"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-foreground text-background p-6 hidden md:block">
                <p className="font-serif text-lg">Psicóloga Clínica</p>
                <p className="text-sm opacity-80 tracking-wider">Abordagem Comportamental</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
