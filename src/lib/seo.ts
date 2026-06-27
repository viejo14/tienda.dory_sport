import { siteConfig } from "@/data/site";
import type { SeoMeta } from "@/types/site";

export function getCanonicalUrl(path: string) {
  return new URL(path, siteConfig.siteUrl).toString();
}

export function getLocalBusinessJsonLd(meta: SeoMeta) {
  const canonical = getCanonicalUrl(meta.path);

  return [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${siteConfig.siteUrl}/#website`,
      url: siteConfig.siteUrl,
      name: siteConfig.name,
      inLanguage: "es-CL",
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": `${siteConfig.siteUrl}/#business`,
      name: siteConfig.legalName,
      description: meta.description,
      url: canonical,
      image: siteConfig.socialImage,
      logo: siteConfig.logo,
      telephone: `+${siteConfig.whatsappNumber}`,
      areaServed: [{ "@type": "City", name: "Puerto Montt" }],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Puerto Montt",
        addressRegion: "Los Lagos",
        addressCountry: "CL",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer service",
          telephone: `+${siteConfig.whatsappNumber}`,
          availableLanguage: ["es"],
        },
      ],
      sameAs: [siteConfig.instagramUrl],
    },
  ];
}
