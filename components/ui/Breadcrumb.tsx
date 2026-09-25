import { company } from "@/data/company";
import Link from "next/link";

type BreadcrumbProps = {
  items: { label: string; href?: string }[];
};

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="font-sans text-label uppercase text-muted">
      <ol className="flex flex-wrap gap-2">
        <li>
          <Link href="/" className="hover:text-black">
            {company.wordmark}
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.label} className="flex gap-2">
            <span aria-hidden>/</span>
            {item.href ? (
              <Link href={item.href} className="hover:text-black">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-black">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
