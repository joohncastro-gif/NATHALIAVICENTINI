import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de privacidade e proteção de dados do consultório da psicóloga Nathalia Vicentini de Castro.",
}

export default function PrivacidadePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 py-24 md:py-32">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm tracking-wider mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para o início
        </Link>

        <div className="mb-12">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Legal
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-4">
            Política de Privacidade
          </h1>
          <p className="text-muted-foreground">
            Última atualização: {new Date().toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}
          </p>
        </div>

        <article className="prose prose-lg max-w-none">
          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="font-serif text-2xl text-foreground mb-4">1. Introdução</h2>
              <p>
                A sua privacidade é importante para mim. Esta Política de Privacidade explica como coleto, 
                uso, armazeno e protejo suas informações pessoais quando você utiliza meu site ou 
                serviços de psicoterapia.
              </p>
              <p className="mt-4">
                Ao utilizar este site ou meus serviços, você concorda com as práticas descritas nesta política.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-4">2. Informações que Coleto</h2>
              <p className="mb-4">Posso coletar os seguintes tipos de informações:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-foreground">Dados de identificação:</strong> nome, e-mail, telefone e outras informações fornecidas por você através do formulário de contato.
                </li>
                <li>
                  <strong className="text-foreground">Dados de navegação:</strong> informações sobre como você utiliza o site, incluindo páginas visitadas e tempo de permanência, coletados através de ferramentas de análise.
                </li>
                <li>
                  <strong className="text-foreground">Dados clínicos:</strong> informações compartilhadas durante as sessões de psicoterapia, protegidas pelo sigilo profissional.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-4">3. Como Uso suas Informações</h2>
              <p className="mb-4">As informações coletadas são utilizadas para:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Responder às suas solicitações e mensagens</li>
                <li>Agendar e realizar sessões de psicoterapia</li>
                <li>Melhorar a experiência de navegação no site</li>
                <li>Enviar comunicações relevantes, caso você autorize</li>
                <li>Cumprir obrigações legais e regulatórias</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-4">4. Sigilo Profissional</h2>
              <p>
                Como psicóloga registrada no CRP-SP sob o número 136834, sigo rigorosamente o 
                Código de Ética Profissional do Psicólogo. Todas as informações compartilhadas 
                durante as sessões de terapia são protegidas pelo sigilo profissional, conforme 
                previsto na legislação brasileira.
              </p>
              <p className="mt-4">
                O sigilo só pode ser quebrado nas situações previstas em lei, como risco iminente 
                à vida do paciente ou de terceiros, ou por determinação judicial.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-4">5. Proteção de Dados</h2>
              <p>
                Adoto medidas técnicas e organizacionais apropriadas para proteger suas informações 
                pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Isso inclui:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Utilização de conexão segura (HTTPS) no site</li>
                <li>Armazenamento seguro de dados clínicos</li>
                <li>Acesso restrito às informações pessoais</li>
                <li>Plataformas de videochamada seguras para atendimento online</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-4">6. Seus Direitos (LGPD)</h2>
              <p className="mb-4">
                De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem os seguintes direitos:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Confirmar a existência de tratamento de seus dados</li>
                <li>Acessar seus dados pessoais</li>
                <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
                <li>Solicitar a exclusão de dados desnecessários</li>
                <li>Revogar o consentimento dado anteriormente</li>
                <li>Solicitar a portabilidade dos dados</li>
              </ul>
              <p className="mt-4">
                Para exercer qualquer um desses direitos, entre em contato através da página de contato.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-4">7. Cookies e Análises</h2>
              <p>
                Este site utiliza o Vercel Analytics para entender como os visitantes interagem 
                com o conteúdo. Essas ferramentas coletam dados de forma anônima e agregada, 
                não sendo possível identificar visitantes individuais.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-4">8. Alterações nesta Política</h2>
              <p>
                Esta política pode ser atualizada periodicamente. Qualquer alteração significativa 
                será comunicada através do site. Recomendo que você revise esta página regularmente.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-4">9. Contato</h2>
              <p>
                Se você tiver dúvidas sobre esta Política de Privacidade ou sobre o tratamento 
                de seus dados pessoais, entre em contato:
              </p>
              <div className="mt-4 p-6 bg-secondary">
                <p className="text-foreground font-medium">Nathalia Vicentini de Castro</p>
                <p>Psicóloga - CRP-SP 136834</p>
                <p className="mt-2">
                  <Link href="/contato" className="text-primary hover:underline">
                    Página de Contato
                  </Link>
                </p>
              </div>
            </section>
          </div>
        </article>
      </div>
    </main>
  )
}
