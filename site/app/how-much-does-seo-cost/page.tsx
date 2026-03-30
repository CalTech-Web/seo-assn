import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import CTABanner from "@/components/CTABanner";
import RelatedLinks from "@/components/RelatedLinks";
import { ArrowRight, AlertTriangle, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "How Much Does SEO Cost in 2026? Pricing Guide | The SEO Association",
  description:
    "Real SEO pricing data for small businesses in 2026. Monthly plans from $500 to $5,000+, one-time audits from $300. Learn what drives costs and how to get the best value.",
  alternates: { canonical: "https://seoassn.com/how-much-does-seo-cost" },
  openGraph: {
    title: "How Much Does SEO Cost? Real Pricing for Small Businesses",
    description:
      "Transparent SEO pricing breakdown. What to expect, what drives costs, and red flags to watch out for.",
    url: "https://seoassn.com/how-much-does-seo-cost",
  },
};

const tiers = [
  {
    range: "$500 – $1,000/month",
    label: "SEO Starter",
    description:
      "Best for local businesses in low-competition markets. Covers Google Business Profile optimization, on-page SEO for core pages, local citation building, and monthly reporting. Expect results in 3 to 6 months.",
  },
  {
    range: "$1,000 – $2,500/month",
    label: "SEO Growth",
    description:
      "The sweet spot for most service businesses. Adds keyword research, content strategy, blog creation (2 posts/month), backlink outreach, and competitor analysis. This is where most businesses see the strongest ROI.",
  },
  {
    range: "$2,500 – $5,000+/month",
    label: "SEO Authority",
    description:
      "For businesses targeting regional or national audiences. Includes advanced technical SEO, 4+ content pieces per month, PR and digital authority building, and a dedicated account manager. Results typically take 6 to 12 months.",
  },
  {
    range: "$300 – $800 (one-time)",
    label: "SEO Audit",
    description:
      "A thorough examination of your website with a prioritized fix list and a 30-minute strategy call. Great starting point if you are not ready for a monthly commitment. CalTech Web credits audit cost toward any ongoing plan.",
  },
];

const redFlags = [
  "Guaranteeing #1 rankings (no one can guarantee this)",
  "Offering SEO for under $200/month (you get what you pay for)",
  "Promising results in 30 days or less",
  "Refusing to explain what they are doing",
  "Using tactics that violate Google's guidelines (link buying, keyword stuffing)",
  "Locking you into long-term contracts without clear deliverables",
];

const greenFlags = [
  "Transparent reporting on what they do each month",
  "Realistic timelines (3 to 6 months minimum)",
  "Clear deliverables tied to your goals",
  "Willing to start with an audit before a full commitment",
  "Can show case studies or results from similar businesses",
  "Focuses on your business goals, not just rankings",
];

export default function HowMuchDoesSEOCostPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <article className="mx-auto max-w-3xl px-4 sm:px-6 py-12">
          <Breadcrumb
            items={[
              { label: "Learn SEO", href: "/" },
              { label: "How Much Does SEO Cost?" },
            ]}
          />

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight mb-6">
            How Much Does SEO Cost in 2026?
          </h1>
          <p className="text-lg text-text-muted mb-10 leading-relaxed">
            The answer depends on your market, goals, and starting point. But
            here are real numbers you can use to plan, not vague ranges or
            sales-driven estimates.
          </p>

          <div className="prose max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">
                What Real SEO Costs Look Like
              </h2>
              <p className="text-text-muted leading-relaxed mb-6">
                SEO pricing varies widely because every business has different
                competition levels, website conditions, and goals. Here is
                what the typical investment looks like at each level:
              </p>
              <div className="not-prose space-y-4">
                {tiers.map((tier) => (
                  <div
                    key={tier.label}
                    className="bg-surface rounded-xl p-6 border border-border/50"
                  >
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-xl font-bold text-primary">
                        {tier.range}
                      </span>
                      <span className="text-sm font-medium text-accent-dark bg-accent/10 px-2 py-0.5 rounded">
                        {tier.label}
                      </span>
                    </div>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {tier.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">
                What Drives the Price Up or Down?
              </h2>
              <p className="text-text-muted leading-relaxed mb-4">
                <strong className="text-text">Competition level.</strong> A
                plumber in a small town faces far less competition than a
                personal injury lawyer in Los Angeles. More competition means
                more work to outrank your rivals.
              </p>
              <p className="text-text-muted leading-relaxed mb-4">
                <strong className="text-text">Geographic targeting.</strong>{" "}
                Local SEO (one city) costs less than regional or national
                campaigns because the scope of work is smaller.
              </p>
              <p className="text-text-muted leading-relaxed mb-4">
                <strong className="text-text">
                  Current state of your website.
                </strong>{" "}
                A brand-new site with no content requires more upfront work
                than an established site that just needs optimization.
              </p>
              <p className="text-text-muted leading-relaxed mb-4">
                <strong className="text-text">Content creation.</strong>{" "}
                Writing quality blog posts, service pages, and landing pages
                is time-intensive. Plans that include content creation cost
                more but typically deliver better results.
              </p>
              <p className="text-text-muted leading-relaxed">
                <strong className="text-text">Speed of results.</strong>{" "}
                Wanting faster results means more aggressive work upfront,
                which means higher monthly investment.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-6">
                Red Flags to Watch For
              </h2>
              <div className="not-prose space-y-2">
                {redFlags.map((flag) => (
                  <div
                    key={flag}
                    className="flex items-start gap-3 bg-danger/5 rounded-lg p-3 border border-danger/10"
                  >
                    <AlertTriangle className="h-4 w-4 text-danger shrink-0 mt-0.5" />
                    <span className="text-sm text-text">{flag}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-6">
                Green Flags: Signs of a Good SEO Partner
              </h2>
              <div className="not-prose space-y-2">
                {greenFlags.map((flag) => (
                  <div
                    key={flag}
                    className="flex items-start gap-3 bg-success/5 rounded-lg p-3 border border-success/10"
                  >
                    <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                    <span className="text-sm text-text">{flag}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">
                Is SEO Worth the Investment?
              </h2>
              <p className="text-text-muted leading-relaxed mb-4">
                For most small businesses, yes. SEO leads have a 14.6% close
                rate compared to 1.7% for outbound marketing. That means
                people who find you through Google are 8 times more likely to
                become customers than people you cold-call or cold-email.
              </p>
              <p className="text-text-muted leading-relaxed mb-6">
                The key is choosing the right level of investment for your
                market. A local bakery does not need a $5,000/month campaign.
                A law firm competing in a major metro area probably does. Our
                interactive pricing guide can help you see which tier matches
                your situation.
              </p>
              <div className="not-prose">
                <Link
                  href="/seo-pricing"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-primary-dark font-bold px-6 py-3 rounded-xl shadow-lg shadow-accent/25 transition-all hover:-translate-y-0.5"
                >
                  View Interactive Pricing Guide
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </section>
          </div>
        </article>

        <CTABanner
          title="Not Sure What You Need? Let Us Help"
          description="Build a free SEO brief with your business details and budget. CalTech Web will give you an honest recommendation, even if the answer is to start small."
          buttonText="Build Your Free SEO Brief"
          buttonHref="/get-started"
          variant="primary"
        />
        <RelatedLinks
          links={[
            {
              title: "SEO Pricing Guide (Interactive)",
              description:
                "Compare plans side-by-side with features and timelines.",
              href: "/seo-pricing",
            },
            {
              title: "How Long Does SEO Take?",
              description:
                "Understand the timeline so you can budget accordingly.",
              href: "/how-long-does-seo-take",
            },
            {
              title: "Do I Need SEO?",
              description:
                "Decide if SEO is right for your business first.",
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
            "@type": "Article",
            headline: "How Much Does SEO Cost in 2026?",
            description:
              "Real SEO pricing data for small businesses with plans from $500 to $5,000+/month.",
            url: "https://seoassn.com/how-much-does-seo-cost",
            publisher: {
              "@type": "Organization",
              name: "The SEO Association",
            },
            datePublished: "2026-03-30",
            dateModified: "2026-03-30",
          }),
        }}
      />
    </>
  );
}
