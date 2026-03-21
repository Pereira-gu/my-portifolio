"use client"

import * as React from "react"
import { Flame } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-slate-100 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-950/30 mt-24">
      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
        
        {/* Lado Esquerdo: Logo + Copyright */}
        <div className="flex items-center gap-3">
          <div className="bg-foreground text-background p-1.5 rounded-lg">
            <Flame className="w-4 h-4 stroke-[2.5]" />
          </div>
          <p>© {currentYear} <span className="font-semibold text-foreground">Gustavo Pereira</span>. Todos os direitos reservados.</p>
        </div>

        {/* Lado Direito: Links/Status */}
        <div className="flex items-center gap-6">
          <p className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
            Disponível para Oportunidades
          </p>
          <div className="hidden md:flex gap-4">
            <a href="#about" className="hover:text-foreground">Sobre</a>
            <a href="#projects" className="hover:text-foreground">Projetos</a>
            <a href="#contact" className="hover:text-foreground">Contato</a>
          </div>
        </div>
      </div>
    </footer>
  )
}