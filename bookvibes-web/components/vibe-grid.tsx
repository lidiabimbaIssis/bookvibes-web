import Link from "next/link";
import {
  Brain,
  Cloud,
  Droplets,
  Flame,
  Heart,
  Sparkles,
  Swords,
  Target,
  type LucideIcon,
} from "lucide-react";
import { VIBES } from "@/data/books";

const ICONS: Record<(typeof VIBES)[number]["icon"], LucideIcon> = {
  flame: Flame,
  heart: Heart,
  swords: Swords,
  cloud: Cloud,
  droplets: Droplets,
  brain: Brain,
  target: Target,
  sparkles: Sparkles,
};

const VIBE_COLORS = [
  "#45b7f5",
  "#9a3cd1",
];

const ACTIVE_COLOR = "#ff4d8d";

const VIBE_PHRASES: Record<string, string> = {
  Intenso: "Algo que me atrape",
  Romántico: "Volver a creer en el amor",
  Épico: "Perderme en otro mundo",
  Ligero: "Leer sin complicarme",
  Llorar: "Llorar un poquito",
  Reflexionar: "Algo que me haga pensar",
  Aprender: "Aprender algo nuevo",
  Inspirador: "Un poco de luz",
};

export function VibeIcon({
  name,
  className,
  color,
}: {
  name: (typeof VIBES)[number]["icon"];
  className?: string;
  color?: string;
}) {
  const Icon = ICONS[name];

  return (
    <Icon
      className={className}
      strokeWidth={1.6}
      style={color ? { color } : undefined}
    />
  );
}

function SparkBurst() {
  return (
    <span className="spark-burst" aria-hidden>
      {Array.from({ length: 8 }, (_, i) => (
        <i key={i} style={{ ["--i" as string]: i }} />
      ))}
    </span>
  );
}

export function VibeGrid({ active }: { active?: string }) {
  return (
    <section
      id="vibes"
      className="mx-auto max-w-6xl px-4 py-8 sm:px-6"
    >
      <h2 className="text-center text-[28px] font-extrabold">
        ¿Qué te apetece leer?
      </h2>

      <p className="mt-1 text-center text-[14px] text-muted">
        Elige un vibe y descubre tu próxima historia
      </p>

      <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
        {VIBES.map((vibe, index) => {
          const selected = active === vibe.mood;

          const baseColor =
            VIBE_COLORS[index % VIBE_COLORS.length];

          const color = selected ? ACTIVE_COLOR : baseColor;

          return (
            <Link
              key={vibe.mood}
              href={`/libros?vibe=${encodeURIComponent(vibe.mood)}`}
              className="vibe-card group relative flex flex-col items-center gap-3 rounded-[18px] px-2 py-5 text-center no-underline"
              style={{
                ["--vibe-glow" as string]: color,

                boxShadow: selected
                  ? `0 0 0 1px ${color}, 0 0 28px ${color}66`
                  : `0 0 0 1px ${color}66`,
              }}
            >
              <SparkBurst />

              <VibeIcon
                name={vibe.icon}
                className="vibe-icon size-8"
                color={color}
              />

              <div className="relative grid w-full place-items-center">
                <span
                  className="vibe-label col-start-1 row-start-1 text-[13px] leading-tight font-bold text-fg transition-all duration-200 group-hover:opacity-0"
                >
                  {vibe.web}
                </span>

                <span
                  className="col-start-1 row-start-1 text-[12px] leading-tight font-extrabold text-fg opacity-0 transition-all duration-200 group-hover:opacity-100"
                >
                  {VIBE_PHRASES[vibe.mood]}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}