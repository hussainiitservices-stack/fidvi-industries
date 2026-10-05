import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { MediaImage } from "@/components/media/MediaImage";
import { ProductCard } from "@/components/products/ProductCard";
import { EnquiryGuide } from "@/components/sections/EnquiryGuide";
import { CrossLinks } from "@/components/sections/CrossLinks";
import { getProduct, getRelatedProducts, products } from "@/data/products";
import { customizationAreas } from "@/data/customization";
import { confirmedCapabilities } from "@/data/manufacturing";

type ProductPageProps = PageProps<"/products/[slug]">;

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product" };
  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product.slug);

  return (
    <>
      <Section spacing={false} className="pt-10">
        <Container>
          <Breadcrumb
            items={[
              { label: "Products", href: "/products" },
              { label: product.name },
            ]}
          />
          <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="font-display text-5xl text-gold">{product.number}</p>
              <h1 className="mt-3 font-display text-section font-medium">{product.name}</h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                {product.description}
              </p>
            </div>
            <div className="lg:col-span-5">
              <MediaImage
                mediaId={product.mediaId}
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl">Applications</h2>
            <ul className="mt-6 space-y-3">
              {product.applications.map((item) => (
                <li key={item} className="border-t border-border py-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-4xl">Available Options</h2>
            {product.customization.length > 0 ? (
              <ul className="mt-6 space-y-3">
                {product.customization.map((item) => (
                  <li key={item} className="border-t border-border py-3">
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-6 text-muted">
                Options for this product are confirmed against the requirement. Share
                the details in an enquiry.
              </p>
            )}
            {product.variants ? (
              <ul className="mt-6 flex flex-wrap gap-3">
                {product.variants.map((variant) => (
                  <li
                    key={variant.slug}
                    className="border border-border px-3 py-2 font-sans text-label uppercase"
                  >
                    {variant.name}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </Container>
      </Section>

      <Section tone="dark">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="font-sans text-label uppercase text-gold">Customization</p>
              <h2 className="mt-4 font-display text-section font-medium">
                Built Around Your Brief.
              </h2>
              <p className="mt-5 max-w-md leading-relaxed text-white/65">
                Size, strength, printing, structure and finishing can be discussed for
                this format. Confirmed manufacturing capabilities support the work —
                exact grades are set against the order.
              </p>
            </div>
            <dl className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
              {customizationAreas.map((area) => (
                <div key={area.id} className="border-t border-white/15 pt-4">
                  <dt className="font-sans text-label uppercase">{area.label}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-white/65">
                    {area.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <ul className="mt-12 flex flex-wrap gap-3 border-t border-white/15 pt-8">
            {confirmedCapabilities.map((item) => (
              <li
                key={item}
                className="border border-white/20 px-3 py-2 font-sans text-label uppercase text-white/80"
              >
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <EnquiryGuide />

      <Section tone="dark">
        <Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-xl font-display text-4xl md:text-5xl">
            Your Requirement. Our Manufacturing.
          </h2>
          <Button href="/contact" variant="inverse">
            Request a Quote
          </Button>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="font-display text-4xl">Related Products</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {related.map((item) => (
              <ProductCard key={item.slug} product={item} />
            ))}
          </div>
        </Container>
      </Section>

      <CrossLinks
        title="Next steps."
        links={[
          {
            href: "/industries",
            label: "Industries",
            description: "Match the format to an application.",
          },
          {
            href: "/manufacturing",
            label: "Manufacturing",
            description: "See the process behind this product.",
          },
          {
            href: "/contact",
            label: "Contact",
            description: "Send dimensions, structure and quantity.",
          },
        ]}
      />
    </>
  );
}
