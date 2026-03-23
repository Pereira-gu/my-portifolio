import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gustavo Pereira | Portfólio",
  description: "Computer Science Student & Cloud Specialist",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={cn("h-full selection:bg-primary/10", geistSans.variable, geistMono.variable)}>
      <body className="font-sans min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}