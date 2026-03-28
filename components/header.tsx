"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-background/95 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <a href="#" className="font-serif text-xl tracking-wide text-foreground">
            Nathalia V. de Castro
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm tracking-wider uppercase"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5517996273555?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-foreground text-foreground px-6 py-2.5 text-sm tracking-wider uppercase hover:bg-foreground hover:text-background transition-all duration-300"
            >
              Agendar
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center"
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-6 pb-6 border-t border-border pt-6"
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm tracking-wider uppercase"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/5517996273555?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-foreground text-foreground px-6 py-3 text-center text-sm tracking-wider uppercase hover:bg-foreground hover:text-background transition-all duration-300 mt-2"
              >
                Agendar Consulta
              </a>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}
