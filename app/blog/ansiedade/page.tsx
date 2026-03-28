import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "5 Técnicas para Controlar a Ansiedade no Dia a Dia",
  description: "Estratégias práticas que você pode aplicar imediatamente para reduzir os sintomas de ansiedade e viver com mais tranquilidade.",
}

export default function AnsiedadePage() {
  return (
    <main className="min-h-screen bg-background">
      <article className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm tracking-wider">Voltar ao início</span>
        </Link>

        <header className="mb-12">
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">
            Ansiedade
          </p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-6">
            5 técnicas para controlar a ansiedade no dia a dia
          </h1>
          <p className="text-muted-foreground">
            5 minutos de leitura
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-foreground leading-relaxed mb-8">
            A ansiedade faz parte da vida. Ela nos ajuda a ficar alertas, a nos preparar para desafios e até a nos proteger. Mas quando ela começa a aparecer com frequência demais, ou de forma intensa demais, pode se tornar um peso difícil de carregar.
          </p>

          <p className="text-foreground leading-relaxed mb-8">
            A boa notícia é que existem formas simples de acalmar a mente e trazer o corpo de volta ao momento presente. São pequenas práticas que, quando incorporadas ao dia a dia, fazem uma grande diferença.
          </p>

          <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">
            1. Respire com intenção
          </h2>
          <p className="text-foreground leading-relaxed mb-8">
            Quando a ansiedade chega, a respiração costuma ficar curta e acelerada. Inverter isso é uma das formas mais rápidas de sinalizar ao corpo que está tudo bem. Experimente inspirar lentamente pelo nariz, contando até quatro. Segure o ar por dois segundos. Depois, solte pela boca, devagar, contando até seis. Repita algumas vezes e perceba como o corpo responde.
          </p>

          <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">
            2. Volte ao presente com os sentidos
          </h2>
          <p className="text-foreground leading-relaxed mb-8">
            A ansiedade muitas vezes nos leva para o futuro, para preocupações que ainda não aconteceram. Uma técnica simples para voltar ao agora é usar os cinco sentidos: observe cinco coisas que você pode ver, quatro que pode tocar, três que pode ouvir, duas que pode cheirar e uma que pode sentir o gosto. Isso ajuda a ancorar a mente no momento presente.
          </p>

          <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">
            3. Mova o corpo
          </h2>
          <p className="text-foreground leading-relaxed mb-8">
            O corpo armazena tensão. Quando estamos ansiosos, é comum sentir os ombros travados, a mandíbula apertada, as mãos frias. Movimentar-se ajuda a liberar essa energia acumulada. Pode ser uma caminhada curta, alguns alongamentos ou até dançar uma música que você gosta. O importante é deixar o corpo se expressar.
          </p>

          <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">
            4. Escreva o que sente
          </h2>
          <p className="text-foreground leading-relaxed mb-8">
            Colocar os pensamentos no papel tem um efeito poderoso. Não precisa ser nada elaborado, apenas escreva o que está sentindo, sem filtro. Muitas vezes, ao ver as palavras escritas, conseguimos enxergar nossos medos com mais clareza e perceber que eles não são tão grandes quanto pareciam dentro da nossa cabeça.
          </p>

          <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">
            5. Seja gentil consigo
          </h2>
          <p className="text-foreground leading-relaxed mb-8">
            Talvez essa seja a técnica mais importante. A ansiedade já é difícil por si só. Se, além dela, você se cobrar por estar ansioso, o peso fica ainda maior. Permita-se sentir. Reconheça que está passando por um momento difícil e trate a si mesmo com a mesma gentileza que ofereceria a alguém que você ama.
          </p>

          <div className="bg-secondary/50 p-8 rounded-lg mt-12">
            <p className="text-foreground leading-relaxed mb-6">
              Essas técnicas são ferramentas de apoio para o dia a dia, mas se a ansiedade estiver impactando sua qualidade de vida, considere buscar ajuda profissional. O acompanhamento psicológico pode oferecer um espaço seguro para entender suas emoções e desenvolver estratégias personalizadas para lidar com elas.
            </p>
            <Link 
              href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground tracking-wider text-sm hover:bg-primary/90 transition-colors"
            >
              Agendar uma conversa
            </Link>
          </div>
        </div>
      </article>
    </main>
  )
}
