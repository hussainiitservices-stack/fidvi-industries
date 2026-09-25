import type { Metadata } from "next";
import { company } from "@/data/company";

const description =
  "FIDVI Industries manufactures corrugated and paper-based packaging from its facility in Nagzhiri Industrial Area, Ujjain, Madhya Pradesh.";

export const siteMetadata: Metadata = {
  title: {
    default: `${company.brandName}`,
    template: `%s · ${company.brandName}`,
  },
  description,
  applicationName: company.brandName,
  authors: [{ name: company.legalName }],
  openGraph: {
    title: company.brandName,
    description,
    siteName: company.brandName,
    locale: "en_IN",
    type: "website",
  },
};
