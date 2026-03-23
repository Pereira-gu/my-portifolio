"use client"

import * as React from "react"

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-slate-100 dark:border-zinc-800 bg-white dark:bg-slate-950 mt-32 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Coluna 1: Logo + Descrição */}
          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 dark:text-white">Gustavo Pereira</h3>
            <p className="text-sm text-muted-foreground">Developer & Cloud Specialist</p>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div className="space-y-2">
            <h4 className="font-semibold text-slate-900 dark:text-white text-sm">Links Rápidos</h4>
            <div className="flex flex-col gap-1">
              <a href="#about" className="text-sm text-muted-foreground hover:text-slate-900 dark:hover:text-white transition-colors">Sobre</a>
              <a href="#projects" className="text-sm text-muted-foreground hover:text-slate-900 dark:hover:text-white transition-colors">Projetos</a>
              <a href="#stack" className="text-sm text-muted-foreground hover:text-slate-900 dark:hover:text-white transition-colors">Stack</a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-slate-900 dark:hover:text-white transition-colors">Contato</a>
            </div>
          </div>

          {/* Coluna 3: Redes Sociais */}
          <div className="space-y-2">
            <h4 className="font-semibold text-slate-900 dark:text-white text-sm">Conecte-se</h4>
            <div className="flex gap-4">
              <a href="https://github.com/Pereira-gu" target="_blank" className="text-sm text-muted-foreground hover:text-slate-900 dark:hover:text-white transition-colors font-medium">
                GitHub
              </a>
              <a href="https://linkedin.com/in/gustavospereira-dev" target="_blank" className="text-sm text-muted-foreground hover:text-slate-900 dark:hover:text-white transition-colors font-medium">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-slate-100 dark:border-zinc-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
            <p>© {currentYear} Gustavo Pereira. Todos os direitos reservados.</p>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
              <p>Disponível para novas oportunidades</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}