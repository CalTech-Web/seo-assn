import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free SEO Analysis Tool | The SEO Association",
  description:
    "Get a free SEO analysis of your website. We check 35+ factors across on-page SEO, technical SEO, content, local SEO, and crawlability, then show you what to fix.",
  alternates: { canonical: "https://seoassn.com/free-seo-analysis" },
  openGraph: {
    siteName: "The SEO Association",
    title: "Free SEO Analysis Tool | The SEO Association",
    description:
      "Enter your URL and instantly see your SEO score. Before and after comparison shows exactly what professional SEO would fix.",
    url: "https://seoassn.com/free-seo-analysis",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free SEO Analysis Tool | The SEO Association",
    description:
      "Enter your URL and instantly see your SEO score. Before and after comparison shows exactly what professional SEO would fix.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Free SEO Analysis Tool",
  description:
    "An instant SEO grading tool that analyzes on-page SEO, technical SEO, content and keywords, local SEO signals, and crawlability, then shows projected improvements with professional SEO.",
  url: "https://seoassn.com/free-seo-analysis",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free SEO analysis, no signup required",
  },
  provider: {
    "@type": "Organization",
    name: "The SEO Association",
    url: "https://seoassn.com",
    parentOrganization: {
      "@type": "ProfessionalService",
      name: "CalTech Web",
      url: "https://caltechweb.com",
    },
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is the SEO analysis really free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, 100% free. No credit card, no signup, no email required. Just enter your URL and get your results instantly.",
      },
    },
    {
      "@type": "Question",
      name: "What does the SEO analysis check?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We grade your site across five categories: On-Page SEO Fundamentals (title tags, meta descriptions, headings, alt text), Technical SEO (speed, HTTPS, structured data, mobile), Content and Keywords (keyword usage, freshness, value proposition), Local SEO Signals (phone, address, Google Maps, reviews), and Crawlability (sitemap, robots, mobile layout). Over 35 individual checks in total.",
      },
    },
    {
      "@type": "Question",
      name: "How accurate is the analysis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our tool fetches your live website and evaluates it using the same signals search engines look for. While no automated tool replaces a full manual audit, our analysis identifies the most impactful SEO issues holding back your rankings.",
      },
    },
    {
      "@type": "Question",
      name: "What does the 'With Professional SEO' view show?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It shows your projected score after professional SEO work addresses each failing check. This gives you a clear picture of the potential improvement in your search visibility.",
      },
    },
    {
      "@type": "Question",
      name: "How long does the scan take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most scans complete in under 30 seconds. The tool fetches your website, runs it through our analysis engine, and generates a full report with actionable recommendations.",
      },
    },
    {
      "@type": "Question",
      name: "Can I scan any website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can scan any publicly accessible website. Sites behind login walls, staging environments, or localhost addresses cannot be analyzed.",
      },
    },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://seoassn.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Free SEO Analysis",
      item: "https://seoassn.com/free-seo-analysis",
    },
  ],
};

export default function FreeSEOAnalysisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
