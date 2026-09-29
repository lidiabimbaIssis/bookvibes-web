import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BookVibes",
  description: "Siente lo que lees. Recomendaciones de libros por mood.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "BookVibes",
    description: "Siente lo que lees. Recomendaciones de libros por mood.",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,700;1,400;1,700&family=Outfit:ital,wght@0,400;0,600;0,700;0,800;0,900;1,800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
