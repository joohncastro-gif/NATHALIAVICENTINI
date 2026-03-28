"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const articles = [
  {
    category: "Ansiedade",
    title: "5 técnicas para controlar a ansiedade no dia a dia",
    excerpt: "Estratégias práticas que você pode aplicar imediatamente para reduzir os sintomas de ansiedade.",
    readTime: "5 min de leitura",
    href: "/blog/ansiedade"
  },
  {
    category: "Autoestima",
    title: "Como desenvolver uma autoestima saudável",
    excerpt: "Entenda o que é autoestima e descubra passos concretos para construir uma relação mais positiva consigo mesmo.",
    readTime: "7 min de leitura",
    href: "/blog/autoestima"
  },
  {
    category: "Relacionamentos",
    title: "Comunicação assertiva: a chave para relacionamentos saudáveis",
    excerpt: "Aprenda a expressar suas necessidades de forma clara e respeitosa, melhorando suas conexões.",
    readTime: "6 min de leitura",
    href: "/blog/relacionamentos"
  }
]

export function BlogPreview() {
  return (
    <section className="py-24 md:py-32 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6"
        >
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Conteúdo
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
              Artigos sobre saúde mental
            </h2>
          </div>
          <a 
            href="/blog"
            className="group inline-flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors text-sm tracking-wider"
          >
            Ver todos os artigos
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.a
              key={index}
              href={article.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group block"
            >
              <div className="aspect-[4/3] bg-secondary mb-6 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-6xl text-muted-foreground/20">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
                {article.category}
              </p>
              <h3 className="font-serif text-xl text-foreground mb-3 group-hover:text-muted-foreground transition-colors">
                {article.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-light mb-4">
                {article.excerpt}
              </p>
              <p className="text-xs tracking-wider text-muted-foreground">
                {article.readTime}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
