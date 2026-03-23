// app/page.tsx
"use client"

import * as React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { USER_DATA } from "@/constants/data";
import { SkillsSidebar } from "@/components/SkillsSidebar";

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-sans antialiased scrollbar-hide">
      <Header />
      
      {/* Hero Section */}
      <section id="about" className="relative w-full border-b pb-20 pt-20 mb-20">
        <div className="container mx-auto max-w-5xl px-6 space-y-8">
          <div className="space-y-4">
            <Badge variant="outline" className="text-[9px] font-bold uppercase tracking-widest px-3 py-1">
              👨‍💻 {USER_DATA.role}
            </Badge>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight text-slate-950 dark:text-white">
              {USER_DATA.name}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              {USER_DATA.description}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3 pt-4">
            <a href="#projects" className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-950 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium text-sm dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100">
              Ver Projetos
            </a>
            <a href={USER_DATA.links.github} target="_blank" className="inline-flex items-center gap-2 px-4 py-2.5 border border-slate-200 dark:border-zinc-700 rounded-lg hover:bg-slate-50 dark:hover:bg-zinc-900 transition-colors font-medium text-sm">
              GitHub
            </a>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 space-y-20 mb-20">
        <div id="projects" className="grid grid-cols-1 lg:grid-cols-[1fr,320px] gap-10 items-start">
          
          <section className="space-y-12 overflow-visible"> 
            {USER_DATA.projectSections.map((secao, idx) => (
              <div key={idx} className="group relative space-y-5 rounded-2xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-slate-900/50 p-6 py-8 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-3">
                    <span className="h-4 w-0.5 rounded-full bg-slate-950 dark:bg-white" />
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">{secao.categoria}</h2>
                  </div>
                  <Badge className="font-mono text-[9px] bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300">
                    {secao.projetos.length} projetos
                  </Badge>
                </div>

                <Carousel
                  opts={{ align: "start", loop: true }}
                  plugins={[Autoplay({ delay: 6000, stopOnInteraction: true })]}
                  className="w-full"
                >
                  <CarouselContent className="-ml-4">
                    {secao.projetos.map((projeto, pIdx) => (
                      <CarouselItem key={pIdx} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                        <ProjectCard {...projeto} />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="absolute -left-5 top-1/2 hidden md:flex opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-10 w-10 bg-slate-950 dark:bg-white text-white dark:text-slate-950" />
                  <CarouselNext className="absolute -right-5 top-1/2 hidden md:flex opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-10 w-10 bg-slate-950 dark:bg-white text-white dark:text-slate-950" />
                </Carousel>
              </div>
            ))}
          </section>

          <SkillsSidebar />
        </div>
      </div>

      <Footer />
    </main>
  );
}