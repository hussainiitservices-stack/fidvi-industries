import { ProductCard } from "@/components/products/ProductCard";
import type { Product } from "@/data/types";

type ProductGridProps = {
  products: Product[];
};

export function ProductGrid({ products }: ProductGridProps) {
  const [featured, ...rest] = products;

  if (!featured) return null;

  return (
    <div className="space-y-8">
      <ProductCard product={featured} featured />
      <div className="grid grid-cols-1 gap-x-5 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
