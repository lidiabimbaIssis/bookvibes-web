import { amazonSearch, type Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <a
      href={amazonSearch(product.query)}
      target="_blank"
      rel="noreferrer"
      className="group flex flex-col no-underline"
    >
      <div className="book-glow overflow-hidden rounded-[10px] bg-surface">
        <img
          src={product.image}
          alt={product.name}
          className="aspect-square w-full object-cover"
        />
      </div>

      <p className="mt-2 text-[12px] leading-snug font-bold text-fg group-hover:text-brass">
        {product.name}
      </p>

      <p className="mt-0.5 text-[10px] font-bold tracking-wide text-muted uppercase">
        {product.cat}
      </p>
    </a>
  );
}