"use client";

import { MediaImage } from "@/components/media/MediaImage";
import { imageReveal, reducedState } from "@/lib/motion/variants";
import type { MediaId } from "@/lib/media";
import { cn } from "@/lib/cn";
import { motion, useReducedMotion } from "motion/react";

type ImageRevealProps = {
  mediaId: MediaId;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export function ImageReveal({
  mediaId,
  className,
  sizes,
  priority,
}: ImageRevealProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={cn("overflow-hidden", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      variants={reduced ? reducedState : imageReveal}
    >
      <MediaImage mediaId={mediaId} sizes={sizes} priority={priority} />
    </motion.div>
  );
}
