import { MediaImage } from "@/components/media/MediaImage";
import type { Industry } from "@/data/types";
import { cn } from "@/lib/cn";

type IndustryCardProps = {
  industry: Industry;
  size?: "feature" | "secondary" | "compact";
  objectPosition?: string;
};

export function IndustryCard({
  industry,
  size = "compact",
  objectPosition,
}: IndustryCardProps) {
  const fill = size !== "compact";

  return (
    <article className="flex h-full flex-col">
      {fill ? (
        <div className="relative min-h-64 flex-1 overflow-hidden lg:min-h-[22rem]">
          <MediaImage
            mediaId={industry.mediaId}
            fill
            ratio="industry"
            objectPosition={objectPosition}
            sizes={
              size === "feature"
                ? "(min-width: 1024px) 58vw, 100vw"
                : "(min-width: 1024px) 38vw, 100vw"
            }
          />
        </div>
      ) : (
        <MediaImage
          mediaId={industry.mediaId}
          ratio="industry"
          objectPosition={objectPosition}
          sizes="(min-width: 1024px) 30vw, 100vw"
        />
      )}
      <div className={cn(size === "compact" ? "mt-4" : "mt-5")}>
        <h3
          className={cn(
            "font-display font-medium leading-tight",
            size === "compact" ? "text-3xl" : "text-4xl md:text-[2.75rem]",
          )}
        >
          {industry.name}
        </h3>
        <p
          className={cn(
            "mt-2 max-w-md leading-relaxed text-muted",
            size === "compact" ? "text-sm" : "text-base",
          )}
        >
          {industry.description}
        </p>
      </div>
    </article>
  );
}
