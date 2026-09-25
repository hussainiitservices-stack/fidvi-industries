import { AmbientFilm } from "@/components/media/AmbientFilm";
import { MediaImage } from "@/components/media/MediaImage";
import { ArrowLink } from "@/components/ui/ArrowLink";
import type { Product } from "@/data/types";
import { getMedia, getVideo } from "@/lib/media";
import { cn } from "@/lib/cn";

type ProductCardProps = {
  product: Product;
  featured?: boolean;
};

export function ProductCard({ product, featured = false }: ProductCardProps) {
  const film = featured ? getVideo("corrugated-boxes") : null;
  const poster = film?.posterId ? getMedia(film.posterId as "product-corrugated-boxes") : null;
  const showFilm = Boolean(featured && film?.src && product.slug === "corrugated-boxes");

  return (
    <article
      className={cn(
        "group",
        featured && "grid items-end gap-5 lg:grid-cols-12 lg:gap-8",
      )}
    >
      <div className={cn("overflow-hidden", featured && "lg:col-span-8")}>
        {showFilm && film?.src ? (
          <AmbientFilm
            src={film.src}
            poster={poster?.src ?? undefined}
            className="transition-transform duration-[var(--duration-hover)] ease-[var(--ease-fidvi)] group-hover:scale-[1.03]"
          />
        ) : (
          <MediaImage
            mediaId={product.mediaId}
            ratio="product"
            className="transition-transform duration-[var(--duration-hover)] ease-[var(--ease-fidvi)] group-hover:scale-[1.03]"
            sizes={featured ? "(min-width: 1024px) 60vw, 100vw" : "(min-width: 1024px) 28vw, 100vw"}
          />
        )}
      </div>
      <div className={cn(featured ? "lg:col-span-4 lg:pb-1" : "mt-3")}>
        <p className="font-sans text-label text-muted">{product.number}</p>
        <h3
          className={cn(
            "mt-1 font-display font-medium",
            featured ? "text-4xl md:text-5xl" : "text-2xl",
          )}
        >
          {product.name}
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
          {product.shortDescription}
        </p>
        <ArrowLink href={`/products/${product.slug}`} className="mt-3">
          Explore
        </ArrowLink>
      </div>
    </article>
  );
}
