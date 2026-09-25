import { IndustryCard } from "@/components/industries/IndustryCard";
import type { Industry } from "@/data/types";

const crops = [
  "center 30%",
  "left center",
  "center 70%",
  "right center",
  "center 20%",
  "center 60%",
  "left 40%",
  "center center",
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
