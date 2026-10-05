import { company, formatAddress } from "@/data/company";
import { facilityMap } from "@/data/location";
import { footerNavigation, products } from "@/data";
import { Container } from "./Container";
import { MapPin, Navigation } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <Container className="grid gap-12 py-16 md:grid-cols-12 md:py-24">
        <div className="md:col-span-5">
          <p className="font-sans text-label uppercase text-gold">
            {company.legalName}
          </p>
          <p className="mt-4 max-w-sm font-display text-4xl leading-tight md:text-5xl">
            {company.tagline}
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="font-sans text-label uppercase text-muted">Navigate</p>
          <ul className="mt-4 space-y-2">
            {footerNavigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="font-sans text-label uppercase text-muted">Products</p>
          <ul className="mt-4 space-y-2">
            {products.map((product) => (
              <li key={product.slug}>
                <Link
                  href={`/products/${product.slug}`}
                  className="hover:text-gold"
                >
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
          <address className="mt-8 flex gap-3 text-sm not-italic leading-relaxed text-white/80">
            <MapPin
              aria-hidden
              className="mt-0.5 size-4 shrink-0 text-gold"
              strokeWidth={1.35}
            />
            <span>
              {formatAddress("stacked").map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </span>
          </address>
          <a
            href={facilityMap.directionsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-11 items-center gap-2 font-sans text-label uppercase text-white/80 hover:text-gold"
          >
            <Navigation aria-hidden className="size-3.5 text-gold" strokeWidth={1.35} />
            View on Maps
          </a>
        </div>
      </Container>
      <Container className="flex flex-col gap-3 border-t border-white/15 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} {company.legalName}</p>
        <p>
          Designed and developed by{" "}
          <a
            href="https://www.hussainiitservices.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 underline decoration-white/30 underline-offset-4 hover:text-gold hover:decoration-gold"
          >
            Hussaini IT Services
          </a>
        </p>
      </Container>
    </footer>
  );
}
