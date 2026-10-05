import { IndustryCard } from "@/components/industries/IndustryCard";
import type { Industry } from "@/data/types";

const crops = [
  "center 45%", // fruits & vegetables — produce in boxes
  "center 40%", // bakery — pastries in kraft box
  "center 35%", // pharmaceuticals — warehouse aisle
  "center center", // paints & chemicals — top-down cans
  "center 55%", // FMCG — palletized food shipper cartons
  "center 40%", // confectionery — sweets in box
  "center 40%", // industrial manufacturing — cartons + component bins
  "center 50%", // ecommerce & logistics — van loading
];

type IndustryGridProps = {
  industries: Industry[];
};

export function IndustryGrid({ industries }: IndustryGridProps) {
  const [featured, secondary, ...rest] = industries;

  if (!featured || !secondary) return null;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <IndustryCard industry={featured} size="feature" objectPosition={crops[0]} />
        </div>
        <div className="lg:col-span-5">
          <IndustryCard industry={secondary} size="secondary" objectPosition={crops[1]} />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-x-5 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((industry, index) => (
          <IndustryCard
            key={industry.slug}
            industry={industry}
            objectPosition={crops[index + 2]}
          />
        ))}
      </div>
    </div>
  );
}
