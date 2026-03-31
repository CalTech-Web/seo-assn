import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import RelatedLinks from "@/components/RelatedLinks";
import { Search, FileText, Link2, Globe, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "What Is SEO and How Does It Work? | The SEO Association",
  description:
    "Learn what SEO is in plain English. Understand how search engines work, why SEO matters for small businesses, and the core components that affect your Google ranking.",
  alternates: { canonical: "https://seoassn.com/what-is-seo" },
  openGraph: {
    title: "What Is SEO? A Plain-English Guide for Business Owners",
    description:
      "SEO explained simply. Learn how Google decides which websites to show first and what you can do about it.",
    url: "https://seoassn.com/what-is-seo",
  },
};

const pillars = [
  {
    icon: FileText,
    title: "On-Page SEO",
    description:
      "Everything on your website that you control: page titles, headings, content quality, keywords, image descriptions, and URL structure. This is the foundation.",
    accent: "from-emerald-400 to-emerald-500",
  },
  {
    icon: Search,
    title: "Technical SEO",
    description:
      "The behind-the-scenes stuff: how fast your site loads, whether it works on phones, if Google can actually find and read all your pages, and your site security (HTTPS).",
    accent: "from-blue-400 to-blue-500",
  },
  {
    icon: Link2,
    title: "Off-Page SEO",
    description:
      "Signals from outside your website: other sites linking to you, your social media presence, directory listings, and online reviews. These build your reputation.",
    accent: "from-purple-400 to-purple-500",
  },
  {
    icon: Globe,
    title: "Local SEO",
    description:
      "If you serve a specific area, this is critical: your Google Business Profile, local directory listings, reviews, and making sure your name, address, and phone number are consistent everywhere.",
    accent: "from-amber-400 to-amber-500",
  },
];

export default function WhatIsSEOPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="What Is SEO and How Does It Work?"
          subtitle="SEO stands for Search Engine Optimization. In plain English, it means making your website easier for Google to understand so it shows up when people search for what you sell or do."
          breadcrumbs={[
            { label: "Learn SEO", href: "/" },
            { label: "What Is SEO?" },
          ]}
          image={{ src: "/images/seo-explained.svg", alt: "SEO explained illustration" }}
        />

        <article className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
          <div className="prose max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">
                How Search Engines Actually Work
              </h2>
              <p className="text-text-muted leading-relaxed mb-4">
                Google uses automated programs called &quot;crawlers&quot; that
                visit billions of web pages, read their content, and store
                that information in a massive index. When someone types a
                search query, Google looks through that index and tries to
                return the most relevant, trustworthy results. Google explains
                this entire process in their{" "}
                <a
                  href="https://www.google.com/search/howsearchworks/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-dark hover:text-accent font-medium underline underline-offset-2"
                >
                  How Search Works
                </a>{" "}
                guide.
              </p>
              <p className="text-text-muted leading-relaxed mb-4">
                Google considers hundreds of factors when deciding which pages
                to show first. The most important ones include how well your
                content matches what the person searched for, how trustworthy
                and authoritative your website is, how fast your pages load,
                and whether your site works well on mobile devices.
              </p>
              <p className="text-text-muted leading-relaxed">
                SEO is the process of optimizing your website so it scores
                well on these factors. The better you score, the higher you
                rank, and the more people find your business.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">
                Why SEO Matters for Your Business
              </h2>
              <p className="text-text-muted leading-relaxed mb-4">
                Think about how you find businesses yourself. If your sink is
                leaking, you probably Google &quot;plumber near me.&quot; If
                you need an accountant, you search &quot;accountant in
                [your city].&quot; Your customers do the same thing.
              </p>
              <p className="text-text-muted leading-relaxed mb-4">
                Here is the key statistic: 75% of people never scroll past
                the first page of Google results. If your website is on page 2
                or beyond, most potential customers will never see it. They
                will click on your competitor instead.
              </p>
              <p className="text-text-muted leading-relaxed">
                Unlike paid advertising, where you pay for every click and
                traffic stops the moment you stop paying, SEO builds lasting
                visibility. Once you rank well, you continue getting traffic
                without paying per visit. It is one of the highest-ROI
                marketing investments a small business can make. If you want
                a deeper dive into how SEO works,{" "}
                <a
                  href="https://moz.com/beginners-guide-to-seo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-dark hover:text-accent font-medium underline underline-offset-2"
                >
                  Moz&apos;s Beginner&apos;s Guide to SEO
                </a>{" "}
                is one of the best free resources available.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-6">
                The Four Pillars of SEO
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 not-prose">
                {pillars.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={pillar.title}
                      className="relative bg-white rounded-xl p-6 border border-border/50 shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden"
                    >
                      {/* Gradient top border */}
                      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${pillar.accent}`} />
                      <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${pillar.accent} mb-3 shadow-sm`}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="font-bold text-primary mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-text-muted leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  );
                })}
              </div>
              <p className="text-text-muted leading-relaxed mt-5">
                Each of these pillars plays a role in how search engines
                evaluate your site. For a comprehensive look at technical
                best practices and how Google interprets your pages, explore{" "}
                <a
                  href="https://developers.google.com/search/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-dark hover:text-accent font-medium underline underline-offset-2"
                >
                  Google Search Central documentation
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">
                SEO vs. Paid Ads: What Is the Difference?
              </h2>
              <p className="text-text-muted leading-relaxed mb-4">
                Paid ads (Google Ads) put you at the top of search results
                instantly, but you pay every time someone clicks. The moment
                you stop paying, you disappear. SEO takes longer to build, but
                the results are more sustainable. You earn your spot through
                quality content and website optimization rather than buying it.
              </p>
              <p className="text-text-muted leading-relaxed">
                Most successful businesses use both, but SEO delivers better
                long-term value per dollar spent. SEO leads also convert at a
                higher rate (14.6%) compared to outbound marketing leads
                (1.7%) because people who find you through search are actively
                looking for what you offer.{" "}
                <a
                  href="https://www.searchenginejournal.com/seo-vs-ppc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-dark hover:text-accent font-medium underline underline-offset-2"
                >
                  Search Engine Journal breaks down the full comparison
                </a>{" "}
                if you want to weigh both options side by side.
              </p>
            </section>

            <section className="not-prose">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light p-8 sm:p-10">
                <div className="absolute top-0 right-0 w-40 sm:w-52 lg:w-64 h-40 sm:h-52 lg:h-64 bg-accent/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-32 sm:w-40 lg:w-48 h-32 sm:h-40 lg:h-48 bg-blue-500/8 rounded-full blur-3xl" />
                <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
                  <div className="shrink-0">
                    <Image
                      src="/images/flat-step1-audit-checklist.png"
                      alt="SEO audit checklist preview"
                      width={360}
                      height={270}
                      className="w-48 sm:w-56 lg:w-72 rounded-xl shadow-2xl"
                    />
                  </div>
                  <div className="flex-1 text-center lg:text-left">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                      How to Get Started with SEO
                    </h2>
                    <p className="text-white/70 leading-relaxed mb-6">
                      The first step is understanding where you stand right now. You
                      do not need expensive tools or technical knowledge to start.
                      Our free SEO audit checklist walks you through 25 key factors
                      so you can see exactly what is working and what needs
                      attention.
                    </p>
                    <Link
                      href="/seo-audit-checklist"
                      className="btn-shimmer inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-primary-dark font-bold px-6 py-3 rounded-xl shadow-lg shadow-accent/25 transition-all hover:-translate-y-0.5"
                    >
                      Take the Free SEO Audit
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </article>

        <CTABanner
          title="See Where Your Website Stands"
          description="Our free 25-point SEO checklist takes less than 5 minutes and gives you a clear score across visibility, content, local SEO, and more."
          buttonText="Start the SEO Audit"
          buttonHref="/seo-audit-checklist"
          variant="primary"
        />
        <RelatedLinks
          links={[
            {
              title: "Do I Need SEO for My Small Business?",
              description:
                "Find out if SEO is the right investment for your situation.",
              href: "/do-i-need-seo",
            },
            {
              title: "How Much Does SEO Cost?",
              description:
                "Real pricing data so you know what to expect.",
              href: "/how-much-does-seo-cost",
            },
            {
              title: "How to Rank on Google",
              description:
                "The step-by-step process that actually works.",
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
            headline: "What Is SEO and How Does It Work?",
            description:
              "A plain-English guide to Search Engine Optimization for small business owners.",
            url: "https://seoassn.com/what-is-seo",
            publisher: {
              "@type": "Organization",
              name: "The SEO Association",
              url: "https://seoassn.com",
            },
            datePublished: "2026-03-30",
            dateModified: "2026-03-30",
          }),
        }}
      />
    </>
  );
}
