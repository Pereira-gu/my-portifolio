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
    <Card className="flex h-full flex-col overflow-hidden border bg-white shadow-none transition-all hover:border-slate-400 hover:-translate-y-1 dark:bg-zinc-950 dark:border-zinc-800 dark:hover:border-zinc-700">
      {/* Carrossel de Imagens Interno */}
      <Carousel plugins={[plugin.current]} className="w-full" opts={{ loop: true }}>
        <CarouselContent>
          {image_urls.map((url, index) => (
            <CarouselItem key={index}>
              <AspectRatio ratio={16 / 9} className="overflow-hidden bg-slate-100 dark:bg-zinc-900">
                <Image 
                  src={url} 
                  alt={title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </AspectRatio>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Conteúdo do Card Refinado (Tamanhos compactos) */}
      <CardHeader className="p-4 pb-1 space-y-2">
        <div className="flex flex-wrap gap-1">
          {stack.slice(0, 3).map((tech) => (
            <Badge key={tech} variant="secondary" className="rounded-sm bg-slate-100 text-[8px] font-bold uppercase tracking-wider text-slate-500 dark:bg-zinc-800 dark:text-zinc-400 px-1.5 py-0">
              {tech}
            </Badge>
          ))}
        </div>
        <CardTitle className="text-sm font-bold leading-tight line-clamp-1 text-slate-900 dark:text-zinc-100">{title}</CardTitle>
      </CardHeader>

      <CardContent className="px-4 pb-4">
        <p className="text-[11px] leading-relaxed text-muted-foreground line-clamp-2 italic">
          {description}
        </p>
      </CardContent>

      <CardFooter className="mt-auto flex gap-2 border-t border-slate-100 p-3 dark:border-zinc-800/50">
        <Button variant="outline" size="sm" className="h-7 w-full text-[9px] font-bold uppercase tracking-widest px-0" asChild>
          <a href={github_url} target="_blank" rel="noopener noreferrer">
            <Github className="mr-1.5 h-3 w-3" /> Código
          </a>
        </Button>
        {live_url && (
          <Button size="sm" className="h-7 w-full text-[9px] font-bold uppercase tracking-widest px-0" asChild>
            <a href={live_url} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-1.5 h-3 w-3" /> Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}