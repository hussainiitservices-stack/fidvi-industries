import { Container } from "@/components/layout/Container";
import Link from "next/link";

export default function NotFound() {
  return (
    <Container className="py-24">
      <p className="font-sans text-label uppercase text-muted">404</p>
      <h1 className="mt-4 font-display text-section font-medium">This page is not on the site.</h1>
      <Link href="/" className="mt-8 inline-flex min-h-11 items-center font-sans text-label uppercase">
        Back to home
      </Link>
    </Container>
  );
}
