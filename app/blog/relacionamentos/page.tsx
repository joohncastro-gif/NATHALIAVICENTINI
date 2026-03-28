import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Comunicação Assertiva: A Chave para Relacionamentos Saudáveis",
  description: "Aprenda a expressar suas necessidades de forma clara e respeitosa, melhorando suas conexões pessoais e profissionais.",
}

export default function RelacionamentosPage() {
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
            Relacionamentos
          </p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-6">
            Comunicação assertiva: a chave para relacionamentos saudáveis
          </h1>
          <p className="text-muted-foreground">
            6 minutos de leitura
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-foreground leading-relaxed mb-8">
            A forma como nos comunicamos define a qualidade dos nossos relacionamentos. Não é apenas o que dizemos, mas como dizemos. É saber expressar o que sentimos sem agredir, e ouvir o outro sem se anular.
          </p>

          <p className="text-foreground leading-relaxed mb-8">
            A comunicação assertiva está no equilíbrio entre a passividade (quando guardamos tudo) e a agressividade (quando explodimos). É o caminho do meio, onde conseguimos ser honestos e respeitosos ao mesmo tempo.
          </p>

          <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">
            O que é ser assertivo?
          </h2>
          <p className="text-foreground leading-relaxed mb-8">
            Ser assertivo é expressar suas opiniões, sentimentos e necessidades de forma clara, direta e respeitosa. É saber dizer não quando necessário, sem culpa. É defender seus direitos sem desrespeitar os direitos dos outros. É falar com firmeza, mas sem rigidez.
          </p>

          <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">
            Use a primeira pessoa
          </h2>
          <p className="text-foreground leading-relaxed mb-8">
            {"Em vez de acusar (\"você nunca me ouve\"), experimente falar sobre o que você sente (\"eu me sinto ignorado quando falo e não recebo resposta\"). Quando usamos \"eu\" em vez de \"você\", diminuímos a chance de o outro se sentir atacado e aumentamos a chance de ser ouvido."}
          </p>

          <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">
            Seja específico
          </h2>
          <p className="text-foreground leading-relaxed mb-8">
            {"Generalizações como \"você sempre\" ou \"você nunca\" costumam gerar discussões. Prefira ser específico sobre a situação que te incomodou. Em vez de \"você nunca ajuda em casa\", tente \"ontem eu precisei lavar a louça sozinha depois de um dia cansativo, e me senti sobrecarregada\"."}
          </p>

          <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">
            Escute para entender, não para responder
          </h2>
          <p className="text-foreground leading-relaxed mb-8">
            A comunicação é uma via de mão dupla. Tão importante quanto falar é saber ouvir. E ouvir de verdade significa prestar atenção no que o outro está dizendo, sem ficar preparando mentalmente sua resposta. Significa tentar entender a perspectiva do outro, mesmo que você não concorde.
          </p>

          <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">
            Escolha o momento certo
          </h2>
          <p className="text-foreground leading-relaxed mb-8">
            Conversas importantes merecem momentos adequados. Evite abordar assuntos delicados quando você ou a outra pessoa estão cansados, com pressa ou no meio de uma discussão. Às vezes, esperar algumas horas ou um dia faz toda a diferença na qualidade do diálogo.
          </p>

          <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">
            Aceite que você não pode controlar o outro
          </h2>
          <p className="text-foreground leading-relaxed mb-8">
            Você pode se comunicar da melhor forma possível e, ainda assim, o outro pode não reagir como você esperava. E tudo bem. Cada pessoa tem seu tempo, sua história, suas dificuldades. O que você pode fazer é cuidar da sua parte, se expressar com clareza e respeito, e aceitar que o resto não está nas suas mãos.
          </p>

          <div className="bg-secondary/50 p-8 rounded-lg mt-12">
            <p className="text-foreground leading-relaxed mb-6">
              Se você sente dificuldade em se comunicar nos seus relacionamentos, ou percebe padrões que se repetem e geram sofrimento, a terapia pode ajudar. Juntos, podemos entender essas dinâmicas e desenvolver novas formas de se relacionar.
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
