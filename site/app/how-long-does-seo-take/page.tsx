import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import RelatedLinks from "@/components/RelatedLinks";
import { Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "How Long Does SEO Take to Work? Realistic Timelines | The SEO Association",
  description:
    "Honest SEO timelines for small businesses. Learn why SEO takes 3 to 12 months, what factors speed things up or slow them down, and what to expect month by month.",
  alternates: { canonical: "https://seoassn.com/how-long-does-seo-take" },
  openGraph: {
    title: "How Long Does SEO Take? Realistic Timelines for Small Business",
    description:
      "Month-by-month breakdown of what to expect from your SEO investment. No false promises, just honest timelines.",
    url: "https://seoassn.com/how-long-does-seo-take",
  },
};

const timeline = [
  {
    month: "Month 1",
    title: "Foundation & Audit",
    description:
      "Technical fixes, keyword research, Google Business Profile setup, on-page optimization of core pages. You probably will not see ranking changes yet, and that is normal.",
  },
  {
    month: "Month 2–3",
    title: "Content & Optimization",
    description:
      "New content creation, internal linking, citation building, and continued technical improvements. Some keywords start moving, but big changes are still building.",
  },
  {
    month: "Month 3–6",
    title: "Momentum Building",
    description:
      "This is where most businesses see meaningful movement. Rankings improve, organic traffic starts growing, and phone calls or leads begin increasing. Local businesses often see results in this window.",
  },
  {
    month: "Month 6–12",
    title: "Compounding Results",
    description:
      "Authority builds, backlinks accumulate, and content gains traction. Traffic and leads grow month over month. Competitive markets typically see significant results in this phase.",
  },
  {
    month: "Month 12+",
    title: "Sustained Growth",
    description:
      "SEO becomes your most cost-effective marketing channel. Maintenance keeps results strong while you expand into new keywords and markets.",
  },
];

const speedFactors = [
  {
    factor: "Low competition market",
    effect: "Faster results (3 to 4 months)",
  },
  {
    factor: "Existing website with some authority",
    effect: "Faster results",
  },
  {
    factor: "Consistent content creation",
    effect: "Faster results",
  },
  {
    factor: "High competition market",
    effect: "Slower results (6 to 12 months)",
  },
  {
    factor: "Brand new website with no history",
    effect: "Slower results",
  },
  {
    factor: "Targeting national/broad keywords",
    effect: "Slower results",
  },
];

export default function HowLongDoesSEOTakePage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="How Long Does SEO Take to Work?"
          subtitle="The honest answer: most businesses see meaningful results in 3 to 6 months, with full impact in 6 to 12 months. Here is why, and what to expect along the way."
          breadcrumbs={[
            { label: "Learn SEO", href: "/" },
            { label: "How Long Does SEO Take?" },
          ]}
          image={{ src: "/images/timeline-growth.svg", alt: "SEO timeline growth illustration" }}
        />
        <article className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
          <div className="prose max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">
                Why SEO Is Not Instant (and Why That Is a Good Thing)
              </h2>
              <p className="text-text-muted leading-relaxed mb-4">
                SEO is about building trust with Google. Every improvement you
                make, better content, faster loading, more relevant keywords,
                quality backlinks, sends a signal that your site deserves to
                rank higher. Google needs time to crawl, index, and evaluate
                those signals.
              </p>
              <p className="text-text-muted leading-relaxed">
                This is actually good news. Because SEO results are earned
                through genuine quality improvements, they are far more
                durable than paid ads. Once you rank well, you stay there
                without paying per click. Your competitors cannot simply
                outbid you. They have to outwork you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-6">
                Month-by-Month Timeline
              </h2>
              <div className="not-prose space-y-4">
                {timeline.map((phase, idx) => (
                  <div
                    key={phase.month}
                    className="flex gap-4 bg-surface rounded-xl p-5 border border-border/50"
                  >
                    <div className="flex flex-col items-center shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      {idx < timeline.length - 1 && (
                        <div className="w-0.5 h-full bg-border mt-2" />
                      )}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-accent-dark uppercase tracking-wider">
                        {phase.month}
                      </span>
                      <h3 className="text-lg font-bold text-primary mt-1 mb-1">
                        {phase.title}
                      </h3>
                      <p className="text-sm text-text-muted leading-relaxed">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-6">
                What Speeds Things Up (and Slows Them Down)
              </h2>
              <div className="not-prose">
                <div className="bg-surface rounded-xl border border-border/50 overflow-hidden">
                  <div className="grid grid-cols-2 bg-primary/5 px-5 py-3 text-sm font-bold text-primary">
                    <span>Factor</span>
                    <span>Effect on Timeline</span>
                  </div>
                  {speedFactors.map((item) => (
                    <div
                      key={item.factor}
                      className="grid grid-cols-2 px-5 py-3 border-t border-border/30 text-sm"
                    >
                      <span className="text-text">{item.factor}</span>
                      <span
                        className={`font-medium ${
                          item.effect.includes("Faster")
                            ? "text-success"
                            : "text-warning"
                        }`}
                      >
                        {item.effect}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">
                SEO vs. Paid Ads: The Timeline Difference
              </h2>
              <p className="text-text-muted leading-relaxed mb-4">
                Google Ads give you instant visibility. Turn on the campaign,
                your ad appears. Turn it off, it disappears. You pay for every
                single click whether or not that person becomes a customer.
              </p>
              <p className="text-text-muted leading-relaxed">
                SEO takes longer to ramp up, but the value compounds. Month 6
                is better than month 1. Month 12 is better than month 6. And
                the traffic keeps coming even while you sleep. Over a 12 to
                24 month period, the cost per lead from SEO is almost always
                lower than from paid ads.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">
                How to Know if Your SEO Is Working
              </h2>
              <p className="text-text-muted leading-relaxed mb-4">
                Rankings are the obvious metric, but they are not the only
                one. Here is what to track:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-text-muted">
                <li>
                  <strong className="text-text">Organic traffic</strong> (is
                  it growing month over month?)
                </li>
                <li>
                  <strong className="text-text">
                    Keyword positions
                  </strong>{" "}
                  (are your target keywords moving up?)
                </li>
                <li>
                  <strong className="text-text">
                    Leads/calls/form submissions
                  </strong>{" "}
                  (are you getting more inquiries?)
                </li>
                <li>
                  <strong className="text-text">
                    Google Business Profile views
                  </strong>{" "}
                  (are more people seeing your listing?)
                </li>
              </ul>
            </section>

            <section className="not-prose">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light p-8 sm:p-10">
                <div className="absolute top-0 right-0 w-40 sm:w-52 lg:w-64 h-40 sm:h-52 lg:h-64 bg-accent/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-32 sm:w-40 lg:w-48 h-32 sm:h-40 lg:h-48 bg-blue-500/8 rounded-full blur-3xl" />
                <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
                  <div className="shrink-0">
                    <Image
                      src="/images/flat-cta-magnifier-growth.png"
                      alt="SEO growth and progress"
                      width={360}
                      height={270}
                      className="w-48 sm:w-56 lg:w-72 rounded-xl shadow-2xl"
                    />
                  </div>
                  <div className="flex-1 text-center lg:text-left">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                      Start Tracking Your Progress Today
                    </h2>
                    <p className="text-white/70 leading-relaxed mb-6">
                      If you are not seeing any movement after 4 to 5 months, it is
                      worth asking your SEO provider what is happening. Results
                      should not take forever. Take our free audit to see where you
                      stand right now.
                    </p>
                    <Link
                      href="/seo-audit-checklist"
                      className="btn-shimmer inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-primary-dark font-bold px-6 py-3 rounded-xl shadow-lg shadow-accent/25 transition-all hover:-translate-y-0.5"
                    >
                      Check Your SEO Right Now
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </article>

        <CTABanner
          title="Ready to Start Building Momentum?"
          description="The best time to start SEO was yesterday. The second best time is today. Build your free SEO brief and get a personalized plan."
          buttonText="Get Your Free SEO Brief"
          buttonHref="/get-started"
        />
        <RelatedLinks
          links={[
            {
              title: "How Much Does SEO Cost?",
              description:
                "Plan your budget with transparent pricing data.",
              href: "/how-much-does-seo-cost",
            },
            {
              title: "What Is SEO?",
              description:
                "Start from the beginning with our plain-English guide.",
              href: "/what-is-seo",
            },
            {
              title: "Keyword Difficulty Quiz",
              description:
                "See how competitive your market is in 2 minutes.",
              href: "/keyword-difficulty-quiz",
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
            headline: "How Long Does SEO Take to Work?",
            description:
              "Realistic SEO timelines with month-by-month breakdown for small businesses.",
            url: "https://seoassn.com/how-long-does-seo-take",
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
