import { siteConfig } from "@/data/site";
import type { SeoMeta } from "@/types/site";

export function getCanonicalUrl(path: string) {
  return new URL(path, siteConfig.siteUrl).toString();
}

export function getLocalBusinessJsonLd(meta: SeoMeta) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.legalName,
    description: meta.description,
    areaServed: "Puerto Montt",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Puerto Montt",
      addressCountry: "CL",
    },
    url: getCanonicalUrl(meta.path),
    sameAs: [siteConfig.instagramUrl],
  };
}
