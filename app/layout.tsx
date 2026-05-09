import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EXO7 Build | Engenharia integrada em EPS, Steel Frame e paredes prontas",
  description:
    "Construção rápida, limpa e sustentável com EPS, painéis monolíticos, paredes prontas termoacústicas e Steel Frame.",
  keywords: [
    "EXO7",
    "engenharia integrada",
    "construção EPS",
    "paredes prontas",
    "painéis monolíticos",
    "steel frame",
    "construção sustentável"
  ],
  metadataBase: new URL("https://exo7.vercel.app"),
  openGraph: {
    title: "EXO7 Build | Engenharia integrada de alta velocidade",
    description:
      "Obras mais rápidas, limpas, econômicas e sustentáveis com tecnologias construtivas industrializadas.",
    url: "https://exo7.vercel.app",
    siteName: "EXO7 Build",
    images: [{ url: "/assets/hero.png", width: 1672, height: 941 }],
    locale: "pt_BR",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
