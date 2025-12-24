import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Notação de Autor - Gerador de Código Cutter",
  description: "Ferramenta automatizada para gerar códigos de classificação bibliográfica. Ideal para bibliotecários, pesquisadores e desenvolvedores.",
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1",
  themeColor: "#1e3a8a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@600&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
