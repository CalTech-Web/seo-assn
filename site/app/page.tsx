import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AuditChecklist from "@/components/AuditChecklist";
import KeywordQuiz from "@/components/KeywordQuiz";
import PricingGuide from "@/components/PricingGuide";
import BriefGenerator from "@/components/BriefGenerator";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AuditChecklist />
        <KeywordQuiz />
        <PricingGuide />
        <BriefGenerator />
      </main>
      <Footer />

      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "The SEO Association",
            url: "https://seoassn.com",
            description:
              "A free educational resource helping small business owners understand and invest in SEO with confidence.",
            publisher: {
              "@type": "Organization",
              name: "CalTech Web",
              url: "https://caltechweb.com",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How much does SEO cost for a small business?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "SEO for small businesses typically costs between $500 and $5,000+ per month depending on competition, scope, and goals. A one-time SEO audit ranges from $300 to $800. Local businesses in low-competition markets can start with a Starter plan at $500-$1,000/month, while businesses targeting regional or national audiences may need $2,500-$5,000+/month.",
                },
              },
              {
                "@type": "Question",
                name: "How long does SEO take to work?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "SEO typically takes 3 to 6 months to show meaningful results for local businesses, and 6 to 12 months for more competitive markets. Unlike paid ads, SEO builds lasting momentum. The results compound over time, meaning month 6 is almost always better than month 1.",
                },
              },
              {
                "@type": "Question",
                name: "Is SEO worth it for a small business?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, SEO is one of the most cost-effective long-term marketing investments for small businesses. Unlike paid advertising that stops generating leads when you stop paying, SEO builds sustainable organic traffic. Even businesses in low-competition markets can see significant returns from a modest SEO investment.",
                },
              },
              {
                "@type": "Question",
                name: "What is SEO and how does it work?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "SEO (Search Engine Optimization) is the process of improving your website so it appears higher in Google search results. It works by optimizing your site's content, technical structure, and authority signals so search engines understand what your business offers and rank it for relevant searches your customers are making.",
                },
              },
              {
                "@type": "Question",
                name: "How can I improve my Google ranking?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Start by making sure your website loads fast, works on mobile, and has unique title tags and meta descriptions for each page. Create content that answers your customers' most common questions. Set up and optimize your Google Business Profile for local searches. Build authority by getting listed in relevant directories and earning links from other websites.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
