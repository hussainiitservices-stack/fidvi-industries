"use client";

import { mediaRatios, type MediaRatio } from "@/lib/media";
import { cn } from "@/lib/cn";
import { useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

type AmbientFilmProps = {
  src: string;
  poster?: string;
  ratio?: MediaRatio;
  className?: string;
};

export function AmbientFilm({ src, poster, ratio = "product", className }: AmbientFilmProps) {
  const reduced = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (reduced) {
      video.pause();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [reduced]);

  return (
    <video
      ref={videoRef}
      className={cn("pointer-events-none h-auto w-full object-cover", className)}
      style={{ aspectRatio: mediaRatios[ratio] }}
      muted
      loop
      playsInline
      autoPlay={!reduced}
      preload="metadata"
      poster={poster}
      tabIndex={-1}
      aria-hidden
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
