import { cn } from "@/lib/cn";
import { mediaRatios, type MediaRatio } from "@/lib/media";

type MediaFrameProps = {
  ratio: MediaRatio;
  label: string;
  className?: string;
  describedAs: string;
};

export function MediaFrame({ ratio, label, className, describedAs }: MediaFrameProps) {
  return (
    <div
      className={cn("relative bg-black-soft", className)}
      style={{ aspectRatio: mediaRatios[ratio] }}
      role="img"
      aria-label={describedAs}
    >
      <span className="absolute inset-x-0 bottom-0 border-t border-white/15 px-4 py-4 font-sans text-label uppercase text-gold">
        {label}
      </span>
    </div>
  );
}
