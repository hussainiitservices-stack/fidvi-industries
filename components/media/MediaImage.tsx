import { MediaFrame } from "@/components/media/MediaFrame";
import { getMedia, mediaRatios, type MediaId } from "@/lib/media";
import { cn } from "@/lib/cn";
import Image from "next/image";

type MediaImageProps = {
  mediaId: MediaId;
  className?: string;
  sizes?: string;
  priority?: boolean;
  fill?: boolean;
  objectPosition?: string;
  ratio?: keyof typeof mediaRatios;
};

export function MediaImage({
  mediaId,
  className,
  sizes = "(min-width: 1024px) 40vw, 100vw",
  priority,
  fill = false,
  objectPosition,
  ratio,
}: MediaImageProps) {
  const asset = getMedia(mediaId);
  const aspect = mediaRatios[ratio ?? asset.ratio];
  const showImage = Boolean(asset.src) && asset.origin !== "unassigned" && asset.origin !== "reference";

  if (!showImage || !asset.src) {
    return (
      <MediaFrame
        ratio={ratio ?? asset.ratio}
        label={asset.category}
        className={className}
        describedAs={`${asset.alt}. Photograph not yet assigned.`}
      />
    );
  }

  if (fill) {
    return (
      <Image
        src={asset.src}
        alt={asset.alt}
        fill
        sizes={sizes}
        priority={priority ?? asset.priority}
        className={cn("object-cover", className)}
        style={objectPosition ? { objectPosition } : undefined}
      />
    );
  }

  return (
    <Image
      src={asset.src}
      alt={asset.alt}
      width={asset.width}
      height={asset.height}
      sizes={sizes}
      priority={priority ?? asset.priority}
      className={cn("h-auto w-full object-cover", className)}
      style={{
        aspectRatio: aspect,
        objectPosition,
      }}
    />
  );
}
