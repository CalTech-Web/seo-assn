import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "SEO FAQ: Common Questions About SEO | The SEO Association",
  description:
    "Answers to the most common SEO questions from small business owners. What is SEO, how much does it cost, how long does it take, and is it worth it?",
  alternates: { canonical: "https://seoassn.com/faq" },
  openGraph: {
    title: "Frequently Asked Questions About SEO | The SEO Association",
    description:
      "Plain-English answers to every SEO question small business owners ask.",
    url: "https://seoassn.com/faq",
  },
};

const faqs = [
  {
    question: "What is SEO and how does it work?",
    answer:
      'SEO stands for Search Engine Optimization. It is the process of improving your website so it appears higher in Google search results when people search for what you sell or do. Google uses hundreds of factors to decide which pages to show first, including content quality, website speed, mobile-friendliness, and how many other sites link to yours. SEO is the practice of optimizing all these factors to earn higher rankings. <a href="/what-is-seo" class="text-accent-dark hover:underline font-medium">Read our full guide &rarr;</a>',
  },
  {
    question: "How much does SEO cost for a small business?",
    answer:
      'SEO for small businesses typically costs between $500 and $5,000+ per month depending on your competition level, geographic targeting, and goals. Local businesses in low-competition markets can start with a Starter plan at $500 to $1,000/month. Service businesses in competitive markets usually invest $1,000 to $2,500/month. A one-time SEO audit costs $300 to $800. <a href="/seo-pricing" class="text-accent-dark hover:underline font-medium">See full pricing breakdown &rarr;</a>',
  },
  {
    question: "How long does SEO take to work?",
    answer:
      'Most businesses see meaningful results in 3 to 6 months, with full impact in 6 to 12 months. Local businesses in low-competition markets can see results faster. The timeline depends on your competition level, the current state of your website, and how aggressively you invest. Unlike paid ads, SEO results compound over time, meaning month 6 is almost always better than month 1. <a href="/how-long-does-seo-take" class="text-accent-dark hover:underline font-medium">See month-by-month timeline &rarr;</a>',
  },
  {
    question: "Is SEO worth it for a small business?",
    answer:
      'For most small businesses, yes. SEO leads have a 14.6% close rate compared to 1.7% for outbound marketing, meaning people who find you through Google are 8 times more likely to become customers. Unlike paid ads that stop generating leads when you stop paying, SEO builds sustainable organic traffic that keeps working. The key is choosing the right investment level for your market. <a href="/do-i-need-seo" class="text-accent-dark hover:underline font-medium">Find out if SEO is right for you &rarr;</a>',
  },
  {
    question: "What is the difference between SEO and paid ads (Google Ads)?",
    answer:
      "Paid ads give you instant visibility at the top of search results, but you pay for every click and traffic stops the moment you stop paying. SEO takes longer to build, but the results are more sustainable. You earn your spot through quality content and optimization rather than buying it. Most successful businesses use both, but SEO delivers better long-term value per dollar spent.",
  },
  {
    question: "What is local SEO?",
    answer:
      'Local SEO is the process of optimizing your online presence so you show up when people search for services near them, like "plumber near me" or "dentist in [your city]." It focuses on your Google Business Profile, local directory listings, reviews, and making sure your business information is consistent across the internet. If you serve a specific geographic area, local SEO is critical. <a href="/local-seo-guide" class="text-accent-dark hover:underline font-medium">Read the full local SEO guide &rarr;</a>',
  },
  {
    question: "Can I do SEO myself?",
    answer:
      'Yes, you can handle basic SEO yourself. Setting up a Google Business Profile, optimizing your page titles and descriptions, getting listed in directories, and asking customers for reviews are all things you can do on your own. However, more advanced SEO like technical optimization, content strategy, and link building typically requires professional expertise or a significant time investment. Our <a href="/seo-audit-checklist" class="text-accent-dark hover:underline font-medium">free audit checklist</a> is a great starting point for DIY.',
  },
  {
    question: "How do I know if my SEO is working?",
    answer:
      "Track four key metrics: organic traffic (visitors from Google), keyword rankings (are your target terms moving up?), leads and calls (are you getting more inquiries?), and Google Business Profile views. Set up Google Analytics and Google Search Console (both free) to monitor these. You should see steady improvement within 3 to 6 months if your SEO strategy is working.",
  },
  {
    question: "What is a keyword and why does it matter?",
    answer:
      'A keyword is a word or phrase that people type into Google when searching for something. For example, "plumber near me," "best dentist in Austin," or "how to fix a leaky faucet" are all keywords. Keywords matter because you want your website to show up when people search for terms related to your business. The more relevant your content is to those search terms, the higher you rank.',
  },
  {
    question: "Why does my competitor rank higher than me on Google?",
    answer:
      "Several factors could explain this: they may have been doing SEO longer, have more content on their website, have more backlinks from other sites, have better reviews on Google, or have a faster and more mobile-friendly website. The good news is that all of these factors are within your control. A focused SEO strategy can help you close the gap over time.",
  },
  {
    question: "What are backlinks and why do they matter?",
    answer:
      "Backlinks are links from other websites pointing to yours. They matter because Google treats them like votes of confidence. When a reputable website links to you, it signals to Google that your site is trustworthy and authoritative. Quality matters more than quantity. One link from a respected local news site is worth more than 100 links from random, low-quality websites.",
  },
  {
    question: "What is The SEO Association?",
    answer:
      'The SEO Association is a free educational resource created by <a href="https://caltechweb.com" target="_blank" rel="noopener noreferrer" class="text-accent-dark hover:underline font-medium">CalTech Web</a>, a professional web design and SEO company. We built these free tools and guides to help small business owners understand SEO without the jargon, pressure, or hidden agendas. Everything on this site is genuinely free.',
  },
];

export default function FAQPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Frequently Asked Questions About SEO"
          subtitle="Plain-English answers to the questions every small business owner asks about SEO."
          breadcrumbs={[{ label: "FAQ" }]}
          image={{ src: "/images/guides-section.svg", alt: "SEO guides illustration" }}
        />

        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-12">
          <FAQAccordion faqs={faqs} />

          <div className="mt-12 gradient-border rounded-2xl p-8 text-center bg-white shadow-card">
            <h2 className="text-xl font-bold text-primary mb-3">
              Have a question we did not cover?
            </h2>
            <p className="text-text-muted mb-6">
              Reach out and we will give you a straight answer.
            </p>
            <Link
              href="/contact"
              className="btn-shimmer inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white font-bold px-6 py-3 rounded-xl transition-all hover:-translate-y-0.5"
            >
              Ask Us Anything
            </Link>
          </div>
        </div>

        <CTABanner
          title="Ready to Take the Next Step?"
          description="Start with a free SEO audit or jump straight to building your personalized SEO brief."
          buttonText="Start the Free SEO Audit"
          buttonHref="/seo-audit-checklist"
        />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer.replace(/<[^>]*>/g, ""),
              },
            })),
          }),
        }}
      />
    </>
  );
}
