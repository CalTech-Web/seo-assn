import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import KeywordQuiz from "@/components/KeywordQuiz";
import CTABanner from "@/components/CTABanner";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title:
    "Keyword Difficulty Quiz: Can You Rank on Google? | The SEO Association",
  description:
    "Answer 5 quick questions to find out how competitive your market is on Google. Free keyword difficulty assessment for small business owners. No technical knowledge needed.",
  alternates: {
    canonical: "https://seoassn.com/keyword-difficulty-quiz",
  },
  openGraph: {
    title: "Can You Actually Rank on Google? | Free Keyword Difficulty Quiz",
    description:
      "5-question quiz to assess your market competition on Google. Get a clear picture of what it takes to rank in your niche.",
    url: "https://seoassn.com/keyword-difficulty-quiz",
  },
};

export default function KeywordQuizPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Keyword Difficulty Quiz"
          subtitle="Answer 5 quick questions to find out how competitive your market is on Google. No technical knowledge needed."
          breadcrumbs={[
            { label: "Free Tools", href: "/" },
            { label: "Keyword Difficulty Quiz" },
          ]}
          image={{ src: "/images/step2-keyword-difficulty.svg", alt: "Keyword difficulty quiz illustration" }}
        />
        <KeywordQuiz />
        <CTABanner
          title="Ready to See What SEO Costs?"
          description="Now that you know how competitive your market is, check out real SEO pricing with no hidden fees and no confusing packages."
          buttonText="View SEO Pricing Guide"
          buttonHref="/seo-pricing"
        />
        <RelatedLinks
          title="Related Guides"
          links={[
            {
              title: "How Much Does SEO Cost?",
              description:
                "Detailed breakdown of SEO pricing for every budget level.",
              href: "/how-much-does-seo-cost",
            },
            {
              title: "How Long Does SEO Take?",
              description:
                "Realistic timelines so you know what to expect.",
              href: "/how-long-does-seo-take",
            },
            {
              title: "Do I Need SEO?",
              description:
                "Find out if SEO is worth the investment for your business.",
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
            "@type": "WebApplication",
            name: "Keyword Difficulty Quiz",
            url: "https://seoassn.com/keyword-difficulty-quiz",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            description:
              "Free quiz to assess keyword competition and ranking difficulty for small businesses.",
            provider: {
              "@type": "Organization",
              name: "The SEO Association",
              url: "https://seoassn.com",
            },
          }),
        }}
      />
    </>
  );
}
