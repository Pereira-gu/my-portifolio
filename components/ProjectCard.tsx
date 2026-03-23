"use client"

import * as React from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Image from "next/image"
import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export interface ProjectProps {
  title: string;
  description: string;
  stack: string[];
  image_urls: string[];
  github_url: string;
  live_url?: string;
}

export function ProjectCard({ title, description, stack, image_urls, github_url, live_url }: ProjectProps) {
  const plugin = React.useRef(Autoplay({ delay: 3500, stopOnInteraction: false }));

  return (
    <Card className="flex h-full flex-col overflow-hidden border bg-white dark:bg-zinc-950 hover:shadow-lg dark:hover:shadow-lg/20 transition-all duration-300 hover:border-slate-300 dark:hover:border-zinc-700 dark:border-zinc-800">
      {/* Carrossel de Imagens */}
      <div className="overflow-hidden bg-slate-100 dark:bg-zinc-900">
        <Carousel plugins={[plugin.current]} className="w-full" opts={{ loop: true }}>
          <CarouselContent>
            {image_urls.map((url, index) => (
              <CarouselItem key={index}>
                <AspectRatio ratio={16 / 9}>
                  <Image 
                    src={url} 
                    alt={`${title} - imagem ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </AspectRatio>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Conteúdo do Card */}
      <CardHeader className="p-5 pb-3 space-y-3 flex-1">
        {/* Stack de Tecnologias */}
        <div className="flex flex-wrap gap-1.5 items-center">
          {stack.slice(0, 3).map((tech) => (
            <Badge key={tech} variant="secondary" className="text-[11px] font-semibold px-2.5 py-0.5">
              {tech}
            </Badge>
          ))}
          {stack.length > 3 && (
            <Badge variant="outline" className="text-[11px] font-semibold px-2.5 py-0.5 text-slate-600 dark:text-slate-400">
              +{stack.length - 3}
            </Badge>
          )}
        </div>
        
        {/* Título */}
        <CardTitle className="text-lg font-bold leading-tight line-clamp-2 text-slate-900 dark:text-zinc-100">
          {title}
        </CardTitle>
      </CardHeader>

      {/* Descrição */}
      <CardContent className="px-5 pb-4 flex-1">
        <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {description}
        </p>
      </CardContent>

      {/* Botões de Ação */}
      <CardFooter className="flex gap-2 border-t border-slate-100 p-4 dark:border-zinc-800/50 bg-slate-50/50 dark:bg-zinc-900/30">
        <Button variant="outline" size="sm" className="flex-1 h-9 text-xs font-semibold" asChild>
          <a href={github_url} target="_blank" rel="noopener noreferrer">
            <Github className="mr-1.5 h-3.5 w-3.5" /> Ver Código
          </a>
        </Button>
        {live_url && (
          <Button size="sm" className="flex-1 h-9 text-xs font-semibold" asChild>
            <a href={live_url} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-1.5 h-3.5 w-3.5" /> Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
