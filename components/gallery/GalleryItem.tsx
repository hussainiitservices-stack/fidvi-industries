import { MediaImage } from "@/components/media/MediaImage";
import type { MediaId } from "@/lib/media";

type GalleryItemProps = {
  mediaId: MediaId;
  caption?: string;
};

export function GalleryItem({ mediaId, caption }: GalleryItemProps) {
  return (
    <figure>
      <MediaImage mediaId={mediaId} ratio="product" sizes="(min-width: 1024px) 33vw, 100vw" />
      {caption ? (
        <figcaption className="mt-3 font-sans text-label uppercase text-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
