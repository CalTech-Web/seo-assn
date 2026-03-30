import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import CTABanner from "@/components/CTABanner";
import RelatedLinks from "@/components/RelatedLinks";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Rank on Google: Step-by-Step Guide | The SEO Association",
  description:
    "Learn how to improve your Google ranking with this actionable step-by-step guide. Covers keyword research, on-page optimization, content strategy, and link building for small businesses.",
  alternates: { canonical: "https://seoassn.com/how-to-rank-on-google" },
  openGraph: {
    title: "How to Rank on Google | Step-by-Step SEO Guide",
    description:
      "Actionable guide to improving your Google ranking. No jargon, just clear steps you can follow.",
    url: "https://seoassn.com/how-to-rank-on-google",
  },
};

const steps = [
  {
    number: "01",
    title: "Start with Keyword Research",
    content: [
      "Before you optimize anything, you need to know what your customers are actually searching for. This is not about guessing. It is about finding the exact words and phrases people type into Google when they need what you sell.",
      "Start simple: think about the questions your customers ask you most often. \"How much does [your service] cost?\" \"Best [your service] near [your city].\" \"How to fix [problem you solve].\" Those are your starting keywords.",
      "You do not need expensive tools to start. Google itself gives you hints. Type your service into Google and look at the \"People also ask\" section and the related searches at the bottom of the page. Those are real queries from real people.",
    ],
  },
  {
    number: "02",
    title: "Fix Your Technical Foundation",
    content: [
      "Google cannot rank a website it cannot properly read. Before investing in content or links, make sure your technical foundation is solid.",
      "Your site needs to load in under 3 seconds (test it at Google PageSpeed Insights). It must work perfectly on mobile devices. Every page needs to be accessible via a clean URL. Your site needs HTTPS (SSL certificate). And you should submit a sitemap to Google Search Console so Google can find all your pages.",
      "These are not optional nice-to-haves. A slow, broken, or insecure website will struggle to rank no matter how good your content is.",
    ],
  },
  {
    number: "03",
    title: "Optimize Every Page on Your Site",
    content: [
      "Each page on your website should target a specific keyword or topic. Your homepage targets your brand and primary service. Each service page targets that specific service. Your location pages target your service plus your city.",
      "For each page, optimize these elements: write a unique title tag (under 60 characters) that includes your keyword. Write a meta description (under 160 characters) that makes people want to click. Use your keyword in the H1 heading naturally. Include it in the first paragraph. Add descriptive alt text to images.",
      "The key word is \"naturally.\" Do not stuff keywords everywhere. Write for humans first, search engines second. Google is incredibly good at detecting keyword stuffing, and it will hurt you.",
    ],
  },
  {
    number: "04",
    title: "Create Content That Answers Real Questions",
    content: [
      "Google's entire mission is connecting searchers with the best answer to their question. The most effective way to rank is to create content that genuinely answers the questions your potential customers are asking.",
      "Write blog posts, guides, and FAQ pages that address real concerns. \"How much does [your service] cost in [your city]?\" \"What to look for when hiring a [your profession].\" \"[Common problem] vs. [common problem]: which needs a professional?\"",
      "Quality matters more than quantity. One thorough, well-written guide that fully answers a question will outrank ten thin posts that barely scratch the surface. Aim for depth, clarity, and genuine helpfulness.",
    ],
  },
  {
    number: "05",
    title: "Build Your Local Presence",
    content: [
      "If you serve a local market, your Google Business Profile is arguably more important than your website for generating calls and visits. Claim it, verify it, and fill out every single field. Add photos weekly. Post updates regularly. Respond to every review.",
      "Get listed in relevant local directories with consistent Name, Address, and Phone information. Yelp, Facebook Business, Apple Maps, Bing Places, and industry-specific directories all send signals that help Google trust your business.",
      "Encourage every happy customer to leave a Google review. Businesses with more reviews rank higher and convert more searchers into customers.",
    ],
  },
  {
    number: "06",
    title: "Earn Links from Other Websites",
    content: [
      "When other reputable websites link to yours, it tells Google your site is trustworthy and authoritative. This is one of the most powerful ranking factors and also one of the hardest to influence.",
      "Start with easy wins: get listed in your local Chamber of Commerce, industry associations, and supplier directories. If you sponsor local events or charities, ask for a link on their website. Create genuinely useful resources (guides, tools, data) that other sites want to reference.",
      "Never buy links or use shady link-building services. Google penalizes sites that try to manipulate their rankings through artificial link building. Quality over quantity, always.",
    ],
  },
  {
    number: "07",
    title: "Track, Measure, and Adjust",
    content: [
      "SEO is not a set-it-and-forget-it activity. You need to track your progress and adjust your strategy based on what is working. Set up Google Analytics and Google Search Console (both free) to monitor your organic traffic, keyword rankings, and click-through rates.",
      "Review your data monthly. Which pages are getting traffic? Which keywords are you ranking for? Where are people dropping off? Use these insights to double down on what works and fix what does not.",
      "SEO is a long game, but it should show steady progress. If you are doing the right things consistently, you should see measurable improvement within 3 to 6 months.",
    ],
  },
];

export default function HowToRankPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <article className="mx-auto max-w-3xl px-4 sm:px-6 py-12">
          <Breadcrumb
            items={[
              { label: "Learn SEO", href: "/" },
              { label: "How to Rank on Google" },
            ]}
          />

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight mb-6">
            How to Rank on Google: A Step-by-Step Guide
          </h1>
          <p className="text-lg text-text-muted mb-10 leading-relaxed">
            Ranking on Google is not magic. It is a process. Here are the
            specific steps that actually work, explained without jargon so
            you can understand exactly what needs to happen.
          </p>

          <div className="prose max-w-none space-y-10">
            {steps.map((step) => (
              <section key={step.number}>
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-4xl font-black text-accent/30">
                    {step.number}
                  </span>
                  <h2 className="text-2xl font-bold text-primary">
                    {step.title}
                  </h2>
                </div>
                {step.content.map((para, idx) => (
                  <p
                    key={idx}
                    className="text-text-muted leading-relaxed mb-4"
                  >
                    {para}
                  </p>
                ))}
              </section>
            ))}

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">
                Where to Start Right Now
              </h2>
              <p className="text-text-muted leading-relaxed mb-6">
                If this feels overwhelming, start with Step 1. Take our free
                SEO audit checklist to see where your website stands right
                now. It covers all the factors we discussed above and gives
                you a clear score in less than 5 minutes.
              </p>
              <div className="not-prose flex flex-col sm:flex-row gap-3">
                <Link
                  href="/seo-audit-checklist"
                  className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-primary-dark font-bold px-6 py-3 rounded-xl shadow-lg shadow-accent/25 transition-all hover:-translate-y-0.5"
                >
                  Take the Free SEO Audit
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/get-started"
                  className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-light text-white font-bold px-6 py-3 rounded-xl transition-all hover:-translate-y-0.5"
                >
                  Get Expert Help
                </Link>
              </div>
            </section>
          </div>
        </article>

        <CTABanner
          title="Want a Professional to Handle This?"
          description="CalTech Web handles every step outlined above for businesses that want results without the learning curve. Free strategy call, no obligation."
          buttonText="Get a Free Strategy Call"
          buttonHref="/get-started"
          variant="primary"
        />
        <RelatedLinks
          links={[
            {
              title: "What Is SEO?",
              description:
                "Start with the fundamentals before diving into strategy.",
              href: "/what-is-seo",
            },
            {
              title: "Local SEO Guide",
              description:
                "Deep dive into ranking in Google Maps and local results.",
              href: "/local-seo-guide",
            },
            {
              title: "SEO Pricing Guide",
              description:
                "See what professional SEO services cost.",
              href: "/seo-pricing",
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
            "@type": "HowTo",
            name: "How to Rank on Google",
            description:
              "Step-by-step guide to improving your Google ranking for small businesses.",
            url: "https://seoassn.com/how-to-rank-on-google",
            step: steps.map((s, i) => ({
              "@type": "HowToStep",
              position: i + 1,
              name: s.title,
              text: s.content.join(" "),
            })),
          }),
        }}
      />
    </>
  );
}
