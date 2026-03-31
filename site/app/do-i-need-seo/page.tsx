import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import RelatedLinks from "@/components/RelatedLinks";
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Do I Need SEO for My Small Business? | The SEO Association",
  description:
    "Honest answer on whether your small business needs SEO. Learn the signs that SEO will pay for itself, when to wait, and what to do first. No sales pitch, just facts.",
  alternates: { canonical: "https://seoassn.com/do-i-need-seo" },
  openGraph: {
    title: "Do I Need SEO? The Honest Answer for Small Business Owners",
    description:
      "Find out if SEO makes sense for your business, when it pays for itself, and when you might want to start with something else.",
    url: "https://seoassn.com/do-i-need-seo",
  },
};

const yesSignals = [
  "Your customers search Google for your type of service or product",
  "You serve a specific local area (city, county, or region)",
  "You have a website but it does not generate leads or calls",
  "Your competitors show up on Google and you do not",
  "You rely on word-of-mouth but want to grow beyond referrals",
  "You are paying for ads but want a more sustainable lead source",
];

const waitSignals = [
  "You do not have a website yet (build one first, then optimize it)",
  "Your business model does not involve customers finding you online",
  "You have zero budget and cannot invest at least a few hundred dollars per month",
  "Your website has fundamental usability problems (fix those first)",
];

export default function DoINeedSEOPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Do I Need SEO for My Small Business?"
          subtitle="The short answer: probably yes, but it depends on your situation. Here is the honest breakdown so you can decide for yourself."
          breadcrumbs={[
            { label: "Learn SEO", href: "/" },
            { label: "Do I Need SEO?" },
          ]}
          image={{ src: "/images/decision-path.svg", alt: "Decision path illustration" }}
        />
        <article className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
          <div className="prose max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">
                The Question Every Business Owner Should Ask
              </h2>
              <p className="text-text-muted leading-relaxed mb-4">
                Before spending a dollar on SEO, ask yourself this: &quot;Do
                my customers use Google to find businesses like mine?&quot;
              </p>
              <p className="text-text-muted leading-relaxed mb-4">
                If the answer is yes, you need some form of SEO. It does not
                mean you need a $5,000/month campaign. It might mean you need
                to set up a Google Business Profile, optimize your existing
                pages, or simply make sure your site works on mobile. The
                scale of investment depends on your competition and goals.
              </p>
              <p className="text-text-muted leading-relaxed">
                If the answer is no, if your business runs entirely on
                referrals, in-person networking, or a customer base you
                already have, SEO might not be your top priority right now.
                But even then, having a basic online presence that shows up
                when someone Googles your name is still valuable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-6">
                Signs That SEO Will Pay for Itself
              </h2>
              <div className="not-prose space-y-3">
                {yesSignals.map((signal) => (
                  <div
                    key={signal}
                    className="flex items-start gap-3 bg-success/5 rounded-xl p-4 border border-success/20"
                  >
                    <CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" />
                    <span className="text-text">{signal}</span>
                  </div>
                ))}
              </div>
              <p className="text-text-muted leading-relaxed mt-4">
                If three or more of these describe your situation, SEO is
                almost certainly worth the investment. The question is not
                &quot;if&quot; but &quot;how much.&quot;
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-6">
                When You Might Want to Wait
              </h2>
              <div className="not-prose space-y-3">
                {waitSignals.map((signal) => (
                  <div
                    key={signal}
                    className="flex items-start gap-3 bg-warning/5 rounded-xl p-4 border border-warning/20"
                  >
                    <XCircle className="h-5 w-5 text-warning shrink-0 mt-0.5" />
                    <span className="text-text">{signal}</span>
                  </div>
                ))}
              </div>
              <p className="text-text-muted leading-relaxed mt-4">
                None of these mean SEO is wrong for you forever. They just
                mean there might be a more logical first step before investing
                in search optimization.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">
                The Real Cost of Not Doing SEO
              </h2>
              <p className="text-text-muted leading-relaxed mb-4">
                Every day your website does not show up for relevant searches,
                potential customers are finding and choosing your competitors
                instead. That is not just a missed click, it is a missed sale,
                a missed relationship, and a missed referral chain.
              </p>
              <p className="text-text-muted leading-relaxed">
                Consider this: if your average customer is worth $500 to your
                business, and SEO could bring you even 5 extra customers per
                month, that is $2,500 in new revenue. Against a $1,000/month
                SEO investment, you are getting a 2.5x return. And unlike
                paid ads, those rankings keep working for you month after
                month.
              </p>
            </section>

            <section className="not-prose">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light p-8 sm:p-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/8 rounded-full blur-3xl" />
                <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
                  <div className="shrink-0">
                    <Image
                      src="/images/flat-step2-keyword-difficulty.png"
                      alt="Keyword difficulty assessment"
                      width={360}
                      height={270}
                      className="w-64 lg:w-72 rounded-xl shadow-2xl"
                    />
                  </div>
                  <div className="flex-1 text-center lg:text-left">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                      The Smart Way to Decide
                    </h2>
                    <p className="text-white/70 leading-relaxed mb-6">
                      The most efficient way to find out is to take our free SEO audit
                      checklist. It takes less than 5 minutes and evaluates your website
                      across 25 important SEO factors. From there, you can decide whether
                      to tackle the fixes yourself, hire help, or start with a one-time
                      SEO audit from CalTech Web (starting at $300, credited toward any
                      ongoing plan).
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                      <Link
                        href="/seo-audit-checklist"
                        className="btn-shimmer inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-primary-dark font-bold px-6 py-3 rounded-xl shadow-lg shadow-accent/25 transition-all hover:-translate-y-0.5"
                      >
                        Check My Website
                        <ArrowRight className="h-5 w-5" />
                      </Link>
                      <Link
                        href="/seo-pricing"
                        className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold px-6 py-3 rounded-xl backdrop-blur-sm border border-white/10 transition-all hover:-translate-y-0.5"
                      >
                        See Pricing Options
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </article>

        <CTABanner
          title="Not Sure? Let the Numbers Decide"
          description="Take our free keyword difficulty quiz to see how competitive your market is. It takes 2 minutes and gives you a clear picture."
          buttonText="Take the Keyword Quiz"
          buttonHref="/keyword-difficulty-quiz"
          variant="primary"
        />
        <RelatedLinks
          links={[
            {
              title: "What Is SEO?",
              description:
                "The complete beginner guide to how search engines work.",
              href: "/what-is-seo",
            },
            {
              title: "How Much Does SEO Cost?",
              description:
                "Transparent pricing so you can plan your budget.",
              href: "/how-much-does-seo-cost",
            },
            {
              title: "Local SEO Guide",
              description:
                "If you serve a local area, this guide is essential reading.",
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
            "@type": "Article",
            headline: "Do I Need SEO for My Small Business?",
            description:
              "Honest assessment of whether SEO is worth the investment for your small business.",
            url: "https://seoassn.com/do-i-need-seo",
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
