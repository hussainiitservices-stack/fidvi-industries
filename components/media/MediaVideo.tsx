import { MediaFrame } from "@/components/media/MediaFrame";
import { MediaImage } from "@/components/media/MediaImage";
import { getMedia, getVideo, isAssignableMedia, type MediaId, type VideoId } from "@/lib/media";

type MediaVideoProps = {
  videoId: VideoId;
  className?: string;
};

export function MediaVideo({ videoId, className }: MediaVideoProps) {
  const video = getVideo(videoId);
  const posterId = video.posterId as MediaId | null;
  const poster = posterId ? getMedia(posterId) : null;

  if (!video.src || video.origin !== "fidvi") {
    if (posterId && poster && isAssignableMedia(poster)) {
      return <MediaImage mediaId={posterId} className={className} />;
    }

    return (
      <MediaFrame
        ratio="hero"
        label={video.label}
        className={className}
        describedAs={`${video.label}. Film not yet assigned.`}
      />
    );
  }

  return (
    <video
      className={className}
      controls
      playsInline
      preload="none"
      poster={poster && isAssignableMedia(poster) ? (poster.src ?? undefined) : undefined}
      aria-label={video.label}
    >
      <source src={video.src} />
    </video>
  );
}
