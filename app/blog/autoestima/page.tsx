import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Como Desenvolver uma Autoestima Saudável",
  description: "Entenda o que é autoestima e descubra passos concretos para construir uma relação mais positiva consigo mesmo.",
}

export default function AutoestimaPage() {
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
            Autoestima
          </p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-6">
            Como desenvolver uma autoestima saudável
          </h1>
          <p className="text-muted-foreground">
            7 minutos de leitura
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-foreground leading-relaxed mb-8">
            Autoestima não é sobre achar que você é perfeito. É sobre reconhecer seu valor mesmo conhecendo suas imperfeições. É olhar para si mesmo com honestidade e, ainda assim, com carinho.
          </p>

          <p className="text-foreground leading-relaxed mb-8">
            Construir uma autoestima saudável é um processo. Não acontece da noite para o dia, nem com frases motivacionais repetidas no espelho. Acontece no dia a dia, nas pequenas escolhas, na forma como você se trata quando ninguém está olhando.
          </p>

          <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">
            Entendendo a autoestima
          </h2>
          <p className="text-foreground leading-relaxed mb-8">
            A autoestima é a avaliação que fazemos de nós mesmos. Ela se forma ao longo da vida, influenciada pelas experiências que vivemos, pelas palavras que ouvimos, pelos relacionamentos que tivemos. Quando essa avaliação é muito negativa, tendemos a nos cobrar demais, a nos comparar constantemente e a sentir que nunca somos suficientes.
          </p>

          <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">
            Observe sua voz interna
          </h2>
          <p className="text-foreground leading-relaxed mb-8">
            Preste atenção em como você fala consigo mesmo. Você se critica com frequência? Usa palavras duras? Muitas vezes, tratamos os outros com muito mais gentileza do que nos tratamos. O primeiro passo é perceber essa voz interna. Não para julgá-la, mas para começar a questioná-la. Você falaria assim com alguém que ama?
          </p>

          <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">
            Reconheça suas conquistas
          </h2>
          <p className="text-foreground leading-relaxed mb-8">
            Pessoas com baixa autoestima costumam minimizar suas conquistas e amplificar seus erros. Experimente fazer o contrário. Anote, mesmo que mentalmente, três coisas que você fez bem hoje. Podem ser coisas simples: preparou uma refeição, foi gentil com alguém, entregou um trabalho. Reconhecer o que fazemos bem nos ajuda a construir uma imagem mais equilibrada de quem somos.
          </p>

          <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">
            Estabeleça limites saudáveis
          </h2>
          <p className="text-foreground leading-relaxed mb-8">
            Dizer não quando necessário é um ato de autorrespeito. Quando aceitamos tudo, quando ignoramos nossas próprias necessidades para agradar os outros, enviamos uma mensagem para nós mesmos de que não somos importantes. Estabelecer limites não é egoísmo, é cuidado.
          </p>

          <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">
            Cuide do seu corpo
          </h2>
          <p className="text-foreground leading-relaxed mb-8">
            A relação com o corpo impacta diretamente a autoestima. Mas cuidar do corpo não significa buscar um padrão estético. Significa alimentar-se bem porque você merece nutrição. Movimentar-se porque seu corpo foi feito para isso. Descansar porque você precisa de energia. É tratar o corpo como a casa que ele é.
          </p>

          <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">
            Aceite que é um processo
          </h2>
          <p className="text-foreground leading-relaxed mb-8">
            Haverá dias em que você se sentirá confiante. Haverá outros em que as velhas inseguranças vão aparecer. Isso faz parte. Construir autoestima não é uma linha reta. É um caminho com curvas, subidas e descidas. O importante é continuar caminhando, com paciência e compaixão.
          </p>

          <div className="bg-secondary/50 p-8 rounded-lg mt-12">
            <p className="text-foreground leading-relaxed mb-6">
              Se você sente que sua autoestima tem impactado sua vida, seus relacionamentos ou sua saúde mental, a terapia pode ser um espaço valioso para esse trabalho. Juntos, podemos explorar as raízes dessas crenças e construir uma relação mais saudável com você mesmo.
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
