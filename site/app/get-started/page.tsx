import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import BriefGenerator from "@/components/BriefGenerator";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title:
    "Get a Free SEO Strategy Call | SEO Brief Generator | The SEO Association",
  description:
    "Build your personalized SEO roadmap in minutes. Download a professional SEO brief as a PDF and optionally send it to CalTech Web for a free strategy consultation.",
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
      <main className="pt-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 pt-8">
          <Breadcrumb items={[{ label: "Get Started" }]} />
        </div>
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
