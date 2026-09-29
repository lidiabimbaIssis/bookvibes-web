import Image from "next/image";
import { Headphones } from "lucide-react";

export function DownloadApp({ compact = false }: { compact?: boolean }) {
  return (
    <div
      id="descargar"
      className="rounded-[22px] border border-white/10 bg-surface p-5"
      style={{ boxShadow: "0 0 0 1px rgb(69 183 245 / 0.16)" }}
    >
      <div className="flex items-start gap-3">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brass/15 text-brass">
          <Headphones className="size-5" />
        </div>

        <div>
          <p className="text-[17px] font-extrabold">
            {compact
              ? "¿Quieres sentir este libro antes de leerlo?"
              : "La experiencia completa está en BookVibes"}
          </p>

          <p className="mt-1 text-[13px] leading-relaxed text-pretty text-muted">
            Escucha el hook, descubre sus emociones y vive BookVibes. La web es
            para elegir; la app, para sentirlo.
          </p>
        </div>
      </div>

      <a
        href="https://play.google.com/store/apps/details?id=com.lidiabimba.clickbook"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-outline-brand mt-4 flex items-center justify-center gap-2 px-5 py-3 text-[13px] font-extrabold no-underline"
      >
        <Image
          src="/bookvibes-icon.png"
          alt="BookVibes"
          width={40}
          height={40}
          className="size-[22px] object-contain"
        />

        Descargar la app
      </a>

      <p className="mt-3 text-center text-[11px] text-muted">
        Android ahora · iPhone, en camino
      </p>
    </div>
  );
}