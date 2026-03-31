import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import BriefGenerator from "@/components/BriefGenerator";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title:
    "Get a Free SEO Strategy Call | SEO Brief Generator | The SEO Association",
  description:
    "Build your personalized SEO roadmap in minutes. Download an SEO brief as a PDF and send it to CalTech Web for a free strategy call.",
  alternates: { canonical: "https://seoassn.com/get-started" },
  openGraph: {
    title: "Build Your Free SEO Roadmap | The SEO Association",
    description:
      "Fill in your business details, goals, and budget. Get a personalized SEO brief you can download or send to CalTech Web for a free consultation.",
    url: "https://seoassn.com/get-started",
  },
};

export default function GetStartedPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Build Your Free SEO Brief"
          subtitle="Fill in your business details, goals, and budget. Get a personalized SEO roadmap you can download or send to CalTech Web for a free consultation."
          breadcrumbs={[{ label: "Get Started" }]}
          image={{ src: "/images/step4-brief-generator.svg", alt: "SEO brief generator illustration" }}
        />
        <BriefGenerator />
        <RelatedLinks
          title="Not Ready Yet? Learn More First"
          links={[
            {
              title: "SEO Audit Checklist",
              description:
                "Check your website across 25 SEO factors before committing.",
              href: "/seo-audit-checklist",
            },
            {
              title: "SEO Pricing Guide",
              description:
                "Understand what SEO costs so you can budget confidently.",
              href: "/seo-pricing",
            },
            {
              title: "How Long Does SEO Take?",
              description:
                "Set realistic expectations for your SEO timeline.",
              href: "/how-long-does-seo-take",
            },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
