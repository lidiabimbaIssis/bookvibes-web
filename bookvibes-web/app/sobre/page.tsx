import { DownloadApp } from "@/components/download-app";
import { SiteFooter, SiteHeader } from "@/components/site-header";

export default function SobrePage() {
  return (
    <div className="bg-home-gradient min-h-dvh text-fg">
      <SiteHeader />
      <article className="mx-auto max-w-2xl px-4 py-14 sm:px-6">
        <p className="tagline-glow text-[11px] tracking-[0.42em] text-brass">SIENTE LO QUE LEES</p>
        <h1 className="font-display mt-4 text-4xl font-bold">Sobre BookVibes</h1>
        <p className="mt-5 text-[16px] leading-relaxed text-pretty text-muted">
          BookVibes no es una librería que lo tiene todo. Es una selección de historias
          elegidas por cómo se sienten. En la web descubres la portada, la sinopsis y
          sus vibes. El resto —el hook, el audio, el swipe— vive en la app.
        </p>
        <p className="mt-4 text-[16px] leading-relaxed text-pretty text-muted">
          Si no sabes qué leer, no empieces por el género. Empieza por el momento.
        </p>
        <div className="mt-10">
          <DownloadApp />
        </div>
      </article>
      <SiteFooter />
    </div>
  );
}