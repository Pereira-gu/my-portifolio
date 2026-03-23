"use client"

import * as React from "react"
import { Flame, Linkedin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="glass-header">
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo/Nome */}
        <div className="flex items-center gap-2.5">
          <div className="bg-foreground text-background p-1.5 rounded-xl shadow-inner">
            <Flame className="w-5 h-5 stroke-[2.5]" />
          </div>
          <span className="font-bold tracking-tight text-base">GUSTAVO <span className="text-slate-500">PEREIRA</span></span>
        </div>

        {/* Links Centrais */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">Sobre</a>
          <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Projetos</a>
          <a href="#stack" className="text-muted-foreground hover:text-foreground transition-colors">Stack</a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contato</a>
        </div>

        {/* Ações/Redes */}
        <div className="flex items-center gap-2">
          <a href="https://github.com/Pereira-gu" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors text-muted-foreground hover:text-foreground">
            <Github className="w-4 h-4" />
          </a>
          <a href="https://linkedin.com/in/gustavospereira-dev" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors text-muted-foreground hover:text-foreground">
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </nav>
    </header>
  )
}