"use client";

import { Button } from "@/components/ui/Button";
import { company, formatAddress } from "@/data/company";
import { facilityMap } from "@/data/location";
import { cn } from "@/lib/cn";
import { useEffect, useRef, useState } from "react";

type GoogleMapProps = {
  className?: string;
};

type MapStatus = "loading" | "ready" | "fallback";

export function GoogleMap({ className }: GoogleMapProps) {
  const [status, setStatus] = useState<MapStatus>("loading");
  const [src, setSrc] = useState<string>(facilityMap.embedSrc);
  const attempt = useRef<"google" | "osm">("google");
  const readyTimer = useRef<number | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (attempt.current === "google") {
        attempt.current = "osm";
        setSrc(facilityMap.osmEmbedSrc);
        setStatus("loading");
        return;
      }
      setStatus((current) => (current === "ready" ? current : "fallback"));
    }, 4000);
    return () => {
      window.clearTimeout(timer);
      if (readyTimer.current) window.clearTimeout(readyTimer.current);
    };
  }, [src]);

  return (
    <div
      className={cn(
        "relative aspect-[4/3] w-full overflow-hidden rounded-xs border border-border bg-[#e8e4dc]",
        className,
      )}
    >
      <div className="absolute inset-0 z-0 flex flex-col justify-between bg-[linear-gradient(160deg,#f3efe6_0%,#e4dfd4_55%,#d8d2c6_100%)] p-6 md:p-8">
        <div>
          <p className="font-sans text-label uppercase text-muted">Location</p>
          <p className="mt-3 font-display text-3xl leading-tight text-black md:text-4xl">
            Nagzhiri Industrial Area
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-charcoal">
            <span className="font-medium text-black">{company.legalName}</span>
            <br />
            {formatAddress("inline")}
          </p>
        </div>
        <div className="flex flex-col items-start gap-3">
          <Button href={facilityMap.directionsHref} arrow>
            Get Directions
          </Button>
          {status === "loading" ? (
            <p className="font-sans text-label uppercase text-muted">Loading map…</p>
          ) : null}
          {status === "fallback" ? (
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              Map preview unavailable here. Use Get Directions for the live map.
            </p>
          ) : null}
        </div>
      </div>

      {status !== "fallback" ? (
        <iframe
          key={src}
          src={src}
          title={facilityMap.title}
          className={cn(
            "absolute inset-0 z-10 h-full w-full border-0 transition-opacity duration-500 ease-[var(--ease-fidvi)]",
            status === "ready" ? "opacity-100" : "opacity-0",
          )}
          allowFullScreen
          loading="eager"
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={() => {
            if (readyTimer.current) window.clearTimeout(readyTimer.current);
            readyTimer.current = window.setTimeout(() => setStatus("ready"), 500);
          }}
          onError={() => {
            if (attempt.current === "google") {
              attempt.current = "osm";
              setSrc(facilityMap.osmEmbedSrc);
              setStatus("loading");
              return;
            }
            setStatus("fallback");
          }}
        />
      ) : null}
    </div>
  );
}
