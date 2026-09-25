"use client";

import { GalleryItem } from "@/components/gallery/GalleryItem";
import { Lightbox } from "@/components/gallery/Lightbox";
import { galleryCategories } from "@/data/gallery";
import type { GalleryEntry, GalleryFilter } from "@/data/types";
import { cn } from "@/lib/cn";
import { useCallback, useState } from "react";

type GalleryGridProps = {
  items: GalleryEntry[];
};

export function GalleryGrid({ items }: GalleryGridProps) {
  const [filter, setFilter] = useState<GalleryFilter>("all");
  const [active, setActive] = useState<number | null>(null);
  const visible = filter === "all" ? items : items.filter((item) => item.category === filter);
  const onIndex = useCallback((index: number) => setActive(index), []);
  const onClose = useCallback(() => setActive(null), []);

  return (
    <div>
      <div className="flex gap-2 overflow-x-auto pb-6" role="tablist" aria-label="Gallery categories">
        {galleryCategories.map((category) => {
          const selected = filter === category.id;
          return (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={selected}
              className={cn(
                "min-h-11 shrink-0 px-3 font-sans text-label uppercase",
                selected ? "text-black" : "text-muted",
              )}
              onClick={() => {
                setFilter(category.id);
                setActive(null);
              }}
            >
              {category.label}
            </button>
          );
        })}
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((item, index) => (
          <div
            key={item.id}
            role="button"
            tabIndex={0}
            className="cursor-pointer text-left"
            onClick={() => setActive(index)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setActive(index);
              }
            }}
          >
            <GalleryItem mediaId={item.mediaId} caption={item.caption} />
          </div>
        ))}
      </div>
      {active !== null ? (
        <Lightbox items={visible} index={active} onClose={onClose} onIndex={onIndex} />
      ) : null}
    </div>
  );
}
