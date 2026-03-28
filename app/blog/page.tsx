import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Clock, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog | Artigos sobre Saúde Mental",
  description: "Artigos sobre ansiedade, autoestima, relacionamentos e saúde mental. Conteúdo escrito pela psicóloga Nathalia Vicentini de Castro.",
}

const articles = [
  {
    slug: "ansiedade",
    category: "Ansiedade",
    title: "5 técnicas para controlar a ansiedade no dia a dia",
    excerpt: "A ansiedade faz parte da vida. É uma resposta natural do nosso corpo diante de situações que exigem atenção ou nos tiram da zona de conforto. Mas quando ela começa a aparecer com frequência, mesmo sem um motivo claro, pode se tornar algo difícil de lidar.",
    readTime: "5 min de leitura",
    date: "15 de março de 2024"
  },
  {
    slug: "autoestima",
    category: "Autoestima",
    title: "Como desenvolver uma autoestima saudável",
    excerpt: "Autoestima é a forma como nos enxergamos e o valor que damos a nós mesmos. Quando está equilibrada, nos sentimos mais seguros para tomar decisões, lidar com desafios e manter relacionamentos saudáveis.",
    readTime: "7 min de leitura",
    date: "10 de março de 2024"
  },
  {
    slug: "relacionamentos",
    category: "Relacionamentos",
    title: "Comunicação assertiva: a chave para relacionamentos saudáveis",
    excerpt: "Quantas vezes você já sentiu que não foi compreendido? Ou que uma conversa simples se transformou em conflito? A comunicação é a base de qualquer relacionamento, e quando ela falha, os ruídos podem causar mágoas, distanciamento e frustração.",
    readTime: "6 min de leitura",
    date: "5 de março de 2024"
  }
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-24 md:py-32">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm tracking-wider mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para o início
        </Link>

        <div className="mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Blog
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
            Artigos sobre saúde mental
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
            Conteúdos leves e acessíveis para ajudar você a cuidar da sua saúde mental no dia a dia.
          </p>
        </div>

        <div className="space-y-12">
          {articles.map((article, index) => (
            <Link 
              key={index}
              href={`/blog/${article.slug}`}
              className="group block border-b border-border pb-12 last:border-0"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="md:w-24 shrink-0">
                  <span className="font-serif text-5xl text-muted-foreground/30">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-xs tracking-[0.2em] uppercase text-primary">
                      {article.category}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4 group-hover:text-primary transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm tracking-wider text-foreground group-hover:text-primary transition-colors">
                    Ler artigo
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-20 p-8 md:p-12 bg-secondary text-center">
          <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
            Quer mais conteúdos?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Siga meu Instagram para receber dicas semanais sobre saúde mental.
          </p>
          <a
            href="https://www.instagram.com/psi.nathaliavicentini/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-foreground text-foreground px-8 py-3 text-sm tracking-wider uppercase hover:bg-foreground hover:text-background transition-all duration-300"
          >
            Seguir no Instagram
          </a>
        </div>
      </div>
    </main>
  )
}
