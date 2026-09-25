"use client";

import { MediaImage } from "@/components/media/MediaImage";
import type { GalleryEntry } from "@/data/types";
import { useEffect, useRef } from "react";

type LightboxProps = {
  items: GalleryEntry[];
  index: number;
  onClose: () => void;
  onIndex: (index: number) => void;
};

export function Lightbox({ items, index, onClose, onIndex }: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const item = items[index];
  const touchStart = useRef<number | null>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onIndex((index + 1) % items.length);
      if (event.key === "ArrowLeft") onIndex((index - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, items.length, onClose, onIndex]);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.caption}
      className="fixed inset-0 z-50 flex flex-col bg-black text-white"
      onTouchStart={(event) => {
        touchStart.current = event.changedTouches[0]?.clientX ?? null;
      }}
      onTouchEnd={(event) => {
        const start = touchStart.current;
        const end = event.changedTouches[0]?.clientX;
        if (start == null || end == null) return;
        const delta = end - start;
        if (delta < -40) onIndex((index + 1) % items.length);
        if (delta > 40) onIndex((index - 1 + items.length) % items.length);
      }}
    >
      <div className="flex h-16 items-center justify-between px-[var(--spacing-gutter)]">
        <p className="font-sans text-label uppercase text-gold">{item.caption}</p>
        <button
          ref={closeRef}
          type="button"
          className="inline-flex min-h-11 items-center font-sans text-label uppercase"
          onClick={onClose}
        >
          Close
        </button>
      </div>
      <div className="flex flex-1 items-center px-[var(--spacing-gutter)]">
        <MediaImage mediaId={item.mediaId} sizes="100vw" className="mx-auto max-h-[70vh] w-full" />
      </div>
      <div className="flex items-center justify-between px-[var(--spacing-gutter)] py-6">
        <button
          type="button"
          className="min-h-11 font-sans text-label uppercase"
          onClick={() => onIndex((index - 1 + items.length) % items.length)}
        >
          Previous
        </button>
        <p className="font-sans text-label text-muted">
          {index + 1} / {items.length}
        </p>
        <button
          type="button"
          className="min-h-11 font-sans text-label uppercase"
          onClick={() => onIndex((index + 1) % items.length)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
