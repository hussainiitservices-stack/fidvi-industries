import { company, formatAddress } from "@/data/company";
import { facilityMap } from "@/data/location";
import { footerNavigation, products } from "@/data";
import { Container } from "./Container";
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
          <address className="mt-8 text-sm not-italic leading-relaxed text-white/80">
            {formatAddress("stacked").map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <a
            href={facilityMap.directionsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-11 items-center font-sans text-label uppercase text-white/80 hover:text-gold"
          >
            View on Maps
          </a>
        </div>
      </Container>
      <Container className="border-t border-white/15 py-6 text-sm text-muted">
        © {year} {company.legalName}
      </Container>
    </footer>
  );
}
