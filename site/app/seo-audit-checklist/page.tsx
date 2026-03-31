import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import AuditChecklist from "@/components/AuditChecklist";
import CTABanner from "@/components/CTABanner";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Free SEO Audit Checklist for Small Business | The SEO Association",
  description:
    "Score your website across 25 SEO factors in 5 categories. Free interactive checklist covering visibility, on-page SEO, content, local SEO, and authority. No tools needed.",
  alternates: { canonical: "https://seoassn.com/seo-audit-checklist" },
  openGraph: {
    title: "Free SEO Audit Checklist | Score Your Website in Minutes",
    description:
      "25-point interactive SEO checklist for small business owners. Check your visibility, on-page SEO, content strategy, local SEO, and authority signals.",
    url: "https://seoassn.com/seo-audit-checklist",
  },
};

export default function SEOAuditPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="SEO Audit Checklist"
          subtitle="Score your website across 25 SEO factors in 5 categories. Free, no tools needed, just honest yes or no answers."
          breadcrumbs={[
            { label: "Free Tools", href: "/" },
            { label: "SEO Audit Checklist" },
          ]}
          image={{ src: "/images/checklist-score.svg", alt: "SEO audit score illustration" }}
        />
        <AuditChecklist />
        <CTABanner
          title="Know Your Score? Find Out if You Can Rank"
          description="Take the keyword difficulty quiz to see how competitive your market really is and what it takes to get on page 1."
          buttonText="Take the Keyword Quiz"
          buttonHref="/keyword-difficulty-quiz"
          variant="primary"
        />
        <RelatedLinks
          title="Related Guides"
          links={[
            {
              title: "What Is SEO?",
              description:
                "Learn the basics of how search engines decide which sites to show first.",
              href: "/what-is-seo",
            },
            {
              title: "How to Rank on Google",
              description:
                "Step-by-step guide to improving your Google ranking.",
              href: "/how-to-rank-on-google",
            },
            {
              title: "Local SEO Guide",
              description:
                "Everything about Google Maps and local search results.",
              href: "/local-seo-guide",
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
            "@type": "WebApplication",
            name: "SEO Audit Checklist",
            url: "https://seoassn.com/seo-audit-checklist",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            description:
              "Free 25-point interactive SEO audit checklist for small business websites.",
            provider: {
              "@type": "Organization",
              name: "The SEO Association",
              url: "https://seoassn.com",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://seoassn.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "SEO Audit Checklist",
                item: "https://seoassn.com/seo-audit-checklist",
              },
            ],
          }),
        }}
      />
    </>
  );
}
