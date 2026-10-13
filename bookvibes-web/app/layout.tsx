import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://www.bookvibes.es";

export const metadata: Metadata = {
  // Dirección oficial de la web: todas las URLs (canonical, Open Graph...)
  // se construyen a partir de aquí.
  metadataBase: new URL(SITE_URL),
  title: {
    default: "BookVibes · Libros según cómo te sientes",
    template: "%s · BookVibes",
  },
  description:
    "Siente lo que lees. Descubre tu próximo libro según tu mood: romance, fantasía, thriller y mucho más. Recomendaciones de libros por vibes.",
  applicationName: "BookVibes",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    siteName: "BookVibes",
    title: "BookVibes · Libros según cómo te sientes",
    description:
      "Siente lo que lees. Descubre tu próximo libro según tu mood.",
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