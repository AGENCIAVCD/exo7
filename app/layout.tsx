import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EXO7 Build | Engenharia integrada para obras previsíveis",
  description:
    "Planejamento e execução de obras residenciais, comerciais e ampliações com mais organização, previsibilidade e tecnologia construtiva aplicada.",
  keywords: [
    "EXO7",
    "engenharia integrada",
    "execução de obras",
    "planejamento de obras",
    "obras residenciais",
    "obras comerciais",
    "ampliações",
    "construção EPS",
    "paredes prontas",
    "steel frame",
    "alvenaria convencional"
  ],
  metadataBase: new URL("https://exo7.vercel.app"),
  openGraph: {
    title: "EXO7 Build | Planejamento, tecnologia e execução",
    description:
      "Engenharia integrada para obras com mais previsibilidade, organização e eficiência construtiva.",
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
