import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import PricingGuide from "@/components/PricingGuide";
import CTABanner from "@/components/CTABanner";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title:
    "How Much Does SEO Cost? SEO Pricing Guide 2026 | The SEO Association",
  description:
    "Transparent SEO pricing for small businesses. Plans from $500/month to $5,000+. Compare SEO Starter, Growth, and Authority packages. One-time audits from $300.",
  alternates: { canonical: "https://seoassn.com/seo-pricing" },
  openGraph: {
    title: "SEO Pricing Guide 2026 | What Does SEO Actually Cost?",
    description:
      "Honest SEO pricing breakdown. No bait and switch. Compare plans from $500 to $5,000+/month with clear deliverables and timelines.",
    url: "https://seoassn.com/seo-pricing",
  },
};

export default function SEOPricingPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="SEO Pricing Guide"
          subtitle="Transparent SEO pricing for small businesses. Compare plans, see what is included, and find the right investment level for your market."
          breadcrumbs={[
            { label: "Free Tools", href: "/" },
            { label: "SEO Pricing Guide" },
          ]}
          image={{ src: "/images/step3-pricing-guide.svg", alt: "SEO pricing guide illustration" }}
        />
        <PricingGuide />
        <CTABanner
          title="Get a Personalized SEO Recommendation"
          description="Not sure which plan fits? Build your free SEO brief and let CalTech Web recommend the right approach for your business and budget."
          buttonText="Build Your SEO Brief"
          buttonHref="/get-started"
          variant="primary"
        />
        <RelatedLinks
          title="Related Guides"
          links={[
            {
              title: "How Much Does SEO Cost? (Full Guide)",
              description:
                "Deep dive into what drives SEO costs and how to get the most value.",
              href: "/how-much-does-seo-cost",
            },
            {
              title: "How Long Does SEO Take?",
              description:
                "Understand the timeline so you can plan your budget accordingly.",
              href: "/how-long-does-seo-take",
            },
            {
              title: "Do I Need SEO?",
              description:
                "Decide if SEO is the right investment for your business.",
              href: "/do-i-need-seo",
            },
          ]}
        />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "SEO Pricing Guide",
            url: "https://seoassn.com/seo-pricing",
            description:
              "Transparent SEO pricing for small businesses with plans from $500 to $5,000+/month.",
            mainEntity: {
              "@type": "ItemList",
              itemListElement: [
                {
                  "@type": "Offer",
                  name: "SEO Starter",
                  description:
                    "Local businesses, low competition markets, new websites",
                  price: "500",
                  priceCurrency: "USD",
                  priceSpecification: {
                    "@type": "UnitPriceSpecification",
                    price: "500",
                    priceCurrency: "USD",
                    billingDuration: "P1M",
                  },
                },
                {
                  "@type": "Offer",
                  name: "SEO Growth",
                  description:
                    "Service businesses in competitive local markets",
                  price: "1000",
                  priceCurrency: "USD",
                  priceSpecification: {
                    "@type": "UnitPriceSpecification",
                    price: "1000",
                    priceCurrency: "USD",
                    billingDuration: "P1M",
                  },
                },
                {
                  "@type": "Offer",
                  name: "SEO Authority",
                  description:
                    "Businesses targeting regional or national audiences",
                  price: "2500",
                  priceCurrency: "USD",
                  priceSpecification: {
                    "@type": "UnitPriceSpecification",
                    price: "2500",
                    priceCurrency: "USD",
                    billingDuration: "P1M",
                  },
                },
                {
                  "@type": "Offer",
                  name: "One-Time SEO Audit",
                  description:
                    "Full technical audit with actionable fix list and strategy call",
                  price: "300",
                  priceCurrency: "USD",
                },
              ],
            },
          }),
        }}
      />
    </>
  );
}
