import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  size = "md",
  href = "/",
}: {
  size?: "sm" | "md";
  href?: string;
}) {
  const h =
    size === "md"
      ? "h-14 max-w-[360px]"
      : "h-10 max-w-[200px] sm:h-12 sm:max-w-[280px] md:h-14 md:max-w-[340px]";

  return (
    <Link href={href} className="flex min-w-0 items-center no-underline">
      <img
        src="/brand-wordmark.png"
        alt="BookVibes. Siente lo que lees"
        className={cn("w-auto object-contain object-left", h)}
      />
    </Link>
  );
}
