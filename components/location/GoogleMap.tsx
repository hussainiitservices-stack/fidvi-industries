import { facilityMap } from "@/data/location";
import { cn } from "@/lib/cn";

type GoogleMapProps = {
  className?: string;
};

export function GoogleMap({ className }: GoogleMapProps) {
  return (
    <div className={cn("aspect-[4/3] w-full overflow-hidden rounded-xs border border-border", className)}>
      <iframe
        src={facilityMap.embedSrc}
        title={facilityMap.title}
        className="h-full w-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}
