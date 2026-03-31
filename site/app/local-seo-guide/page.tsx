import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import RelatedLinks from "@/components/RelatedLinks";
import { MapPin, Star, Building2, Globe, Phone, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Local SEO Guide: How to Rank in Google Maps | The SEO Association",
  description:
    "Complete local SEO guide for small businesses. Learn how to optimize your Google Business Profile, build citations, get reviews, and show up in the local map pack.",
  alternates: { canonical: "https://seoassn.com/local-seo-guide" },
  openGraph: {
    title: "Local SEO: The Complete Guide for Small Business Owners",
    description:
      "Everything you need to know about Google Maps rankings, local citations, reviews, and local search optimization.",
    url: "https://seoassn.com/local-seo-guide",
  },
};

const gbpChecklist = [
  "Claim and verify your Google Business Profile",
  "Fill out every single field (hours, categories, services, description)",
  "Add at least 10 high-quality photos of your business",
  "Choose the right primary and secondary categories",
  "Write a compelling business description using your main keywords",
  "Add your service area if you travel to customers",
  "Enable messaging so customers can contact you directly",
  "Post updates weekly (promotions, news, tips)",
];

const citationSources = [
  "Yelp",
  "Facebook Business",
  "Apple Maps",
  "Bing Places",
  "Yellow Pages",
  "Better Business Bureau",
  "Industry-specific directories",
  "Local Chamber of Commerce",
];

export default function LocalSEOGuidePage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Local SEO: The Complete Guide for Small Businesses"
          subtitle="If your customers come from a specific area, local SEO is the single most impactful thing you can do for your online presence. Here is everything you need to know."
          breadcrumbs={[
            { label: "Learn SEO", href: "/" },
            { label: "Local SEO Guide" },
          ]}
          image={{ src: "/images/local-map-pin.svg", alt: "Local SEO map pin illustration" }}
        />
        <article className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
          <div className="prose max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">
                What Is Local SEO?
              </h2>
              <p className="text-text-muted leading-relaxed mb-4">
                Local SEO is the process of optimizing your online presence so
                you show up when people search for services near them. When
                someone searches &quot;plumber near me&quot; or &quot;best
                dentist in [city],&quot; Google shows a map with three
                business listings (the &quot;local pack&quot;) plus regular
                search results below.
              </p>
              <p className="text-text-muted leading-relaxed">
                Getting into that local pack is the goal. Businesses in the
                local pack get significantly more clicks, calls, and visits
                than those in the regular results below.
              </p>
            </section>

            <section>
              <div className="not-prose flex items-center gap-3 mb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-primary">
                  Google Business Profile: Your #1 Priority
                </h2>
              </div>
              <p className="text-text-muted leading-relaxed mb-6">
                Your Google Business Profile (formerly Google My Business) is
                the single most important factor in local SEO. It is what
                appears in Google Maps and the local pack. If you do nothing
                else, do this.
              </p>
              <div className="not-prose space-y-2">
                {gbpChecklist.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 bg-surface rounded-lg p-3"
                  >
                    <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                    <span className="text-sm text-text">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <div className="not-prose flex items-center gap-3 mb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <Star className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-primary">
                  Reviews: Your Social Proof Engine
                </h2>
              </div>
              <p className="text-text-muted leading-relaxed mb-4">
                Google reviews directly affect your local ranking AND whether
                people choose to call you. Businesses with more reviews and
                higher ratings rank higher and convert better.
              </p>
              <p className="text-text-muted leading-relaxed mb-4">
                <strong className="text-text">How to get more reviews:</strong>{" "}
                Ask every happy customer. Make it easy by sending them a
                direct link to your Google review page. Follow up with a
                text or email after the job is done. Most people are happy
                to leave a review, they just need a nudge.
              </p>
              <p className="text-text-muted leading-relaxed">
                <strong className="text-text">Respond to every review,</strong>{" "}
                good and bad. Thank positive reviewers by name. For negative
                reviews, respond professionally and offer to make it right.
                Google (and potential customers) notice when you engage.
              </p>
            </section>

            <section>
              <div className="not-prose flex items-center gap-3 mb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <Building2 className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-primary">
                  NAP Consistency and Citations
                </h2>
              </div>
              <p className="text-text-muted leading-relaxed mb-4">
                NAP stands for Name, Address, Phone number. Google checks
                whether your business information is consistent across the
                internet. If your address is &quot;123 Main St&quot; on your
                website but &quot;123 Main Street&quot; on Yelp and
                &quot;123 Main St.&quot; on Facebook, that inconsistency
                hurts your ranking.
              </p>
              <p className="text-text-muted leading-relaxed mb-4">
                Pick one exact format and use it everywhere. Then make sure
                you are listed on these key directories:
              </p>
              <div className="not-prose grid grid-cols-2 gap-2">
                {citationSources.map((source) => (
                  <div
                    key={source}
                    className="flex items-center gap-2 bg-surface rounded-lg px-3 py-2"
                  >
                    <Globe className="h-3.5 w-3.5 text-accent-dark" />
                    <span className="text-sm text-text">{source}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <div className="not-prose flex items-center gap-3 mb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-primary">
                  On-Page Local Optimization
                </h2>
              </div>
              <p className="text-text-muted leading-relaxed mb-4">
                Your website itself needs local signals. Include your city
                and service area in page titles, headings, and content
                naturally. Create separate pages for each service you offer
                and each area you serve if you cover multiple cities.
              </p>
              <p className="text-text-muted leading-relaxed mb-4">
                Add your full address and phone number to your website footer
                so it appears on every page. Embed a Google Map on your
                contact page. Include local schema markup so Google
                understands exactly where your business is and what it does.
              </p>
              <p className="text-text-muted leading-relaxed">
                Write content that answers local questions. &quot;Best time to
                water your lawn in [city]&quot; or &quot;How to prepare your
                home for [local weather event]&quot; type content builds
                local relevance and attracts nearby searchers.
              </p>
            </section>

            <section className="not-prose">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light p-8 sm:p-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/8 rounded-full blur-3xl" />
                <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
                  <div className="shrink-0">
                    <Image
                      src="/images/flat-guides-section.png"
                      alt="Local SEO guide illustration"
                      width={360}
                      height={270}
                      className="w-64 lg:w-72 rounded-xl shadow-2xl"
                    />
                  </div>
                  <div className="flex-1 text-center lg:text-left">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                      How Competitive Is Your Local Market?
                    </h2>
                    <p className="text-white/70 leading-relaxed mb-6">
                      The amount of effort and investment you need depends heavily
                      on your local competition. A solo accountant in a small town
                      has a very different SEO challenge than a dentist in a city
                      of 500,000. Our free keyword difficulty quiz can tell you
                      where you stand in about 2 minutes.
                    </p>
                    <Link
                      href="/keyword-difficulty-quiz"
                      className="btn-shimmer inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-primary-dark font-bold px-6 py-3 rounded-xl shadow-lg shadow-accent/25 transition-all hover:-translate-y-0.5"
                    >
                      Check Your Market Competition
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </article>

        <CTABanner
          title="Ready to Dominate Your Local Market?"
          description="CalTech Web specializes in local SEO for small businesses. Get a free strategy call and find out what it would take to own your local search results."
          buttonText="Get a Free Strategy Call"
          buttonHref="/get-started"
          variant="primary"
        />
        <RelatedLinks
          links={[
            {
              title: "SEO Audit Checklist",
              description:
                "Score your website across 25 factors including local SEO.",
              href: "/seo-audit-checklist",
            },
            {
              title: "How Much Does SEO Cost?",
              description:
                "See what local SEO packages cost for small businesses.",
              href: "/how-much-does-seo-cost",
            },
            {
              title: "How to Rank on Google",
              description:
                "The complete ranking guide beyond just local search.",
              href: "/how-to-rank-on-google",
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
            headline:
              "Local SEO: The Complete Guide for Small Businesses",
            description:
              "Complete guide to local SEO including Google Business Profile, reviews, citations, and local ranking factors.",
            url: "https://seoassn.com/local-seo-guide",
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
