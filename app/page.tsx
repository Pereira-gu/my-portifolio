"use client"

import * as React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer"; // Importe o novo Footer
import { ProjectCard } from "@/components/ProjectCard";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Home() {
  // Dados de Exemplo (Substitua pelos seus projetos reais)
  const secoesProjetos = [
    {
      categoria: "Cloud & Infrastructure",
      projetos: [
        {
          title: "Guardian System",
          description: "Monitorização de segurança modular para processos com scores de risco.",
          stack: ["Python", "AWS", "SQLite", "psutil"],
          image_urls: ["https://images.unsplash.com/photo-1587620962725-abab7fe55159", "https://images.unsplash.com/photo-1510511459019-5dee997dd1db"],
          github_url: "https://github.com/Pereira-gu",
        },
        {
          title: "Otimização EC2",
          description: "Script de automação para redimensionamento de instâncias baseado em métricas.",
          stack: ["Boto3", "Python", "IAM", "CloudWatch"],
          image_urls: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8"],
          github_url: "https://github.com/Pereira-gu",
        }
      ]
    },
    {
      categoria: "Desenvolvimento Web & Software",
      projetos: [
        {
          title: "Saboroso Burger",
          description: "Gestão Full Stack de pedidos e inventário com PHP e MySQL.",
          stack: ["PHP", "MySQL", "JavaScript"],
          image_urls: ["https://images.unsplash.com/photo-1571091718767-18b5b1457add"],
          github_url: "https://github.com/Pereira-gu",
        }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-background font-sans antialiased scrollbar-hide">
      <Header />
      
      {/* Hero Section com Fundo Pontilhado */}
      <section id="about" className="relative w-full border-b bg-grid-pattern pb-16 pt-24 mb-16">
        <div className="container mx-auto max-w-4xl text-center space-y-6 px-6">
          <Badge variant="outline" className="text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 border-slate-300 text-slate-600">
            Gustavo Pereira - Cloud Computing
          </Badge>
          {/* TÍTULO COM GRADIENTE PROFISSIONAL */}
          <h1 className="text-6xl font-black tracking-tighter uppercase leading-[0.95] bg-gradient-to-r from-slate-950 via-slate-800 to-slate-500 bg-clip-text text-transparent dark:from-white dark:to-zinc-500">
            Projetos & <br /> <span className="text-slate-400">Evolução</span>
          </h1>
          <p className="max-w-xl mx-auto text-xl text-muted-foreground leading-relaxed italic">
            Estudante de Ciência da Computação focado em **Cloud Computing**, **Automação** e **Software de Performance**.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 space-y-24">
        {/* Grid Principal: Projetos (Esq) + Skills (Dir) */}
        <div id="projects" className="grid grid-cols-1 lg:grid-cols-[1fr,350px] gap-12 items-start">
          
          <section className="space-y-12 overflow-visible"> 
            {secoesProjetos.map((secao, idx) => (
              <div key={idx} className="group relative space-y-6 rounded-3xl border border-slate-100 bg-slate-50/50 p-7 py-9 dark:border-zinc-800/50 dark:bg-zinc-900/30 shadow-sm transition-all hover:border-slate-200 dark:hover:border-zinc-700">
                <div className="flex items-center justify-between px-2 mb-2">
                  <div className="flex items-center gap-3">
                    <span className="h-5 w-1 rounded-full bg-slate-950 dark:bg-white" />
                    <h2 className="text-lg font-bold tracking-tight text-slate-900 dark:text-zinc-100">
                      {secao.categoria}
                    </h2>
                  </div>
                  <Badge variant="outline" className="font-mono text-[10px] opacity-60">
                    {secao.projetos.length} PROJETOS
                  </Badge>
                </div>

                <Carousel
                  opts={{ align: "start", loop: true }}
                  plugins={[Autoplay({ delay: 6000, stopOnInteraction: true })]}
                  className="w-full"
                >
                  <CarouselContent className="-ml-4">
                    {secao.projetos.map((projeto, pIdx) => (
                      /* AJUSTE DE PROPORÇÃO: md:basis-1/2 faz aparecer 2 cards na tela */
                      <CarouselItem key={pIdx} className="pl-4 basis-full md:basis-1/2 lg:basis-1/2">
                        <ProjectCard {...projeto as any} />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  
                  {/* Setas Discretas ( hidden md:flex garante responsividade ) */}
                  <CarouselPrevious className="absolute -left-4 top-1/2 hidden md:flex opacity-0 group-hover:opacity-100 transition-opacity disabled:hidden" />
                  <CarouselNext className="absolute -right-4 top-1/2 hidden md:flex opacity-0 group-hover:opacity-100 transition-opacity disabled:hidden" />
                </Carousel>
              </div>
            ))}
          </section>

          {/* Sidebar de Skills Fixa (Sticky) */}
          <aside id="stack" className="lg:sticky lg:top-24 space-y-8">
            <div className="border rounded-2xl p-6 bg-card shadow-sm space-y-8 ring-1 ring-slate-100 dark:ring-zinc-800">
              <h3 className="text-lg font-bold border-b pb-2">Stack Técnica</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                    Em Aprendizado
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-[10px]">AWS Architect</Badge>
                    <Badge variant="outline" className="text-[10px]">Linguagem C</Badge>
                  </div>
                </div>

                <div>
                  <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                     <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                     Conhecimento Base
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-[10px]">Python (Pandas)</Badge>
                    <Badge variant="secondary" className="text-[10px]">SQL / SQLite</Badge>
                    <Badge variant="secondary" className="text-[10px]">Next.js / TS</Badge>
                  </div>
                </div>
              </div>

              <div id="contact" className="pt-6 border-t space-y-4 text-sm">
                <h4 className="font-bold italic text-slate-800 dark:text-zinc-200">Vamos construir algo?</h4>
                <div className="flex flex-col gap-2">
                  <a href="https://github.com/Pereira-gu" target="_blank" className="underline font-bold hover:text-primary transition-colors">GitHub</a>
                  <a href="https://linkedin.com/in/gustavospereira-dev" target="_blank" className="underline font-bold hover:text-primary transition-colors">LinkedIn</a>
                  <p className="text-[11px] text-muted-foreground leading-tight">Disponível para escala 12x36.</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </main>
  );
}