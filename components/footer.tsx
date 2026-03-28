"use client"

import Link from "next/link"
import { Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <p className="font-serif text-xl tracking-wide text-foreground">
              Nathalia Vicentini de Castro
            </p>
            <p className="text-sm text-muted-foreground tracking-wider mt-1">
              Psicóloga - CRP-SP 136834
            </p>
          </div>

          <div>
            <p className="text-sm tracking-wider uppercase text-foreground mb-4">
              Links Úteis
            </p>
            <nav className="flex flex-col gap-2">
              <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Blog
              </Link>
              <Link href="/contato" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Contato
              </Link>
              <Link href="/privacidade" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Política de Privacidade
              </Link>
            </nav>
          </div>

          <div>
            <p className="text-sm tracking-wider uppercase text-foreground mb-4">
              Redes Sociais
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/psi.nathaliavicentini/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 text-sm"
              >
                <Instagram className="w-5 h-5" />
                Instagram
              </a>
            </div>
            <a
              href="https://wa.me/5517996273555?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 border border-foreground text-foreground px-6 py-2 text-sm tracking-wider uppercase hover:bg-foreground hover:text-background transition-all duration-300"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground tracking-wider">
            {new Date().getFullYear()} Nathalia Vicentini de Castro. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            Atendimento online para todo o Brasil
          </p>
        </div>
      </div>
    </footer>
  )
}
