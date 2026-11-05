import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gustavo Pereira | Desenvolvedor Backend e Dados",
  description:
    "Portfólio de Gustavo Pereira: APIs em Java e Spring Boot, análise de dados com Python e projetos no GitHub.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={geistSans.variable}>{children}</body>
    </html>
  );
}
