"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Send, Instagram, MessageCircle, CheckCircle } from "lucide-react"

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: ""
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simula envio do formulário
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsLoading(false)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md"
        >
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-primary" />
          </div>
          <h1 className="font-serif text-3xl text-foreground mb-4">
            Mensagem enviada!
          </h1>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Obrigada pelo seu contato. Responderei sua mensagem em até 24 horas.
          </p>
          <Link
            href="/"
            className="inline-block border border-foreground text-foreground px-8 py-3 text-sm tracking-wider uppercase hover:bg-foreground hover:text-background transition-all duration-300"
          >
            Voltar ao início
          </Link>
        </motion.div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm tracking-wider mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para o início
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Contato
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-6">
              Entre em contato
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Tem alguma dúvida ou quer saber mais sobre o atendimento? 
              Preencha o formulário ou entre em contato pelos canais abaixo.
            </p>

            <div className="space-y-6">
              <a
                href="https://wa.me/5517996273555?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 border border-border hover:border-primary transition-colors group"
              >
                <div className="w-12 h-12 bg-secondary flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                    WhatsApp
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Resposta mais rápida
                  </p>
                </div>
              </a>

              <a
                href="https://www.instagram.com/psi.nathaliavicentini/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 border border-border hover:border-primary transition-colors group"
              >
                <div className="w-12 h-12 bg-secondary flex items-center justify-center">
                  <Instagram className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                    Instagram
                  </p>
                  <p className="text-sm text-muted-foreground">
                    @psi.nathaliavicentini
                  </p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nome" className="block text-sm tracking-wider text-foreground mb-2">
                  Nome completo *
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  required
                  value={formData.nome}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-secondary border border-border focus:border-primary focus:outline-none transition-colors text-foreground"
                  placeholder="Seu nome"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm tracking-wider text-foreground mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-secondary border border-border focus:border-primary focus:outline-none transition-colors text-foreground"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="telefone" className="block text-sm tracking-wider text-foreground mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-secondary border border-border focus:border-primary focus:outline-none transition-colors text-foreground"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="assunto" className="block text-sm tracking-wider text-foreground mb-2">
                  Assunto *
                </label>
                <select
                  id="assunto"
                  name="assunto"
                  required
                  value={formData.assunto}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-secondary border border-border focus:border-primary focus:outline-none transition-colors text-foreground"
                >
                  <option value="">Selecione um assunto</option>
                  <option value="agendar">Agendar consulta</option>
                  <option value="informacoes">Informações sobre atendimento</option>
                  <option value="valores">Valores e formas de pagamento</option>
                  <option value="outro">Outro assunto</option>
                </select>
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-sm tracking-wider text-foreground mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  required
                  rows={5}
                  value={formData.mensagem}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-secondary border border-border focus:border-primary focus:outline-none transition-colors text-foreground resize-none"
                  placeholder="Escreva sua mensagem..."
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary text-primary-foreground px-8 py-4 text-sm tracking-wider uppercase hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isLoading ? (
                  "Enviando..."
                ) : (
                  <>
                    Enviar mensagem
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              <p className="text-xs text-muted-foreground text-center">
                Ao enviar, você concorda com nossa{" "}
                <Link href="/privacidade" className="underline hover:text-foreground">
                  Política de Privacidade
                </Link>
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
