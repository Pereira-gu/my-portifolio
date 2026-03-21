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

        {/* Links Centrais (Opcional, mas dá estrutura) */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          {["Sobre", "Projetos", "Stack", "Contato"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-foreground transition-colors">
              {item}
            </a>
          ))}
        </div>

        {/* Ações/Redes */}
        <div className="flex items-center gap-3">
          <a href="#" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
            <Github className="w-4 h-4" />
          </a>
          <Button size="sm" className="rounded-full h-9 px-5 text-xs font-semibold" asChild>
            <a href="/curriculo.pdf" target="_blank">Download CV</a>
          </Button>
        </div>
      </nav>
    </header>
  )
}