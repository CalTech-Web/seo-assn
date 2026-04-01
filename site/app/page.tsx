import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import {
  ClipboardCheck,
  BarChart3,
  DollarSign,
  FileText,
  ArrowRight,
  BookOpen,
  MapPin,
  Clock,
  TrendingUp,
  HelpCircle,
  Shield,
  CheckCircle2,
  Search,
} from "lucide-react";

const tools = [
  {
    step: "Featured",
    title: "Free SEO Analysis",
    description:
      "Enter your URL and get an instant SEO score. We check 35+ factors and show you exactly what to fix, no signup required.",
    href: "/free-seo-analysis",
    icon: Search,
    color: "bg-green-50 border-green-300",
    iconColor: "bg-green-100 text-green-600",
  },
  {
    step: "Step 1",
    title: "SEO Audit Checklist",
    description:
      "Go through 25 questions across 5 categories and see exactly where your website stands. No tools needed, just honest yes or no answers.",
    href: "/seo-audit-checklist",
    icon: ClipboardCheck,
    color: "bg-emerald-50 border-emerald-200",
    iconColor: "bg-emerald-100 text-emerald-600",
  },
  {
    step: "Step 2",
    title: "Keyword Difficulty Quiz",
    description:
      "Find out how competitive your market really is. Answer 5 quick questions and get a clear picture of what it takes to rank in your niche.",
    href: "/keyword-difficulty-quiz",
    icon: BarChart3,
    color: "bg-blue-50 border-blue-200",
    iconColor: "bg-blue-100 text-blue-600",
  },
  {
    step: "Step 3",
    title: "SEO Pricing Guide",
    description:
      "Straight talk on what SEO actually costs. No bait and switch, no confusing packages. Just honest numbers so you can plan your budget.",
    href: "/seo-pricing",
    icon: DollarSign,
    color: "bg-amber-50 border-amber-200",
    iconColor: "bg-amber-100 text-amber-600",
  },
  {
    step: "Step 4",
    title: "SEO Brief Generator",
    description:
      "Build a personalized SEO roadmap you can download as a PDF. Optionally send it to CalTech Web for a free strategy call.",
    href: "/get-started",
    icon: FileText,
    color: "bg-purple-50 border-purple-200",
    iconColor: "bg-purple-100 text-purple-600",
  },
];

const articles = [
  {
    title: "What Is SEO and How Does It Work?",
    description:
      "A plain-English guide to how search engines decide which websites show up first.",
    href: "/what-is-seo",
    icon: BookOpen,
  },
  {
    title: "Do I Need SEO for My Small Business?",
    description:
      "The honest answer, plus the specific situations where SEO pays for itself.",
    href: "/do-i-need-seo",
    icon: HelpCircle,
  },
  {
    title: "How Much Does SEO Cost?",
    description:
      "Real pricing data so you know what to expect and what to watch out for.",
    href: "/how-much-does-seo-cost",
    icon: DollarSign,
  },
  {
    title: "How Long Does SEO Take?",
    description:
      "Realistic timelines based on your market, budget, and starting point.",
    href: "/how-long-does-seo-take",
    icon: Clock,
  },
  {
    title: "Local SEO: The Complete Guide",
    description:
      "Everything you need to know about showing up in Google Maps and local results.",
    href: "/local-seo-guide",
    icon: MapPin,
  },
  {
    title: "How to Rank on Google",
    description:
      "The step-by-step process that actually works, explained without jargon.",
    href: "/how-to-rank-on-google",
    icon: TrendingUp,
  },
];

const stats = [
  { number: "93%", label: "of online experiences start with a search engine" },
  { number: "75%", label: "of people never scroll past the first page" },
  { number: "14.6%", label: "close rate for SEO leads (vs 1.7% for outbound)" },
  {
    number: "3-6 mo",
    label: "typical timeline to see real SEO results",
  },
];

const articleAccents = [
  "from-amber-400 to-amber-500",
  "from-blue-400 to-blue-500",
  "from-emerald-400 to-emerald-500",
  "from-purple-400 to-purple-500",
  "from-rose-400 to-rose-500",
  "from-cyan-400 to-cyan-500",
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />

        {/* Why SEO Matters */}
        <section className="relative py-14 sm:py-16 lg:py-20 bg-white overflow-hidden">
          {/* Decorative orb */}
          <div className="absolute top-0 right-0 w-48 sm:w-64 lg:w-80 h-48 sm:h-64 lg:h-80 bg-accent/5 rounded-full blur-3xl" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex flex-col lg:flex-row items-center gap-10 mb-14">
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl font-bold text-primary">
                  Why SEO Matters for Small Businesses
                </h2>
                <p className="mt-4 text-lg text-text-muted max-w-xl">
                  Your customers are searching for your services right now. The
                  question is whether they find you or your competitor.
                </p>
              </div>
              <div className="shrink-0">
                <Image
                  src="/images/flat-stats-seo-matters.png"
                  alt="SEO statistics and impact"
                  width={280}
                  height={280}
                  className="w-36 sm:w-48 lg:w-64"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="gradient-border text-center p-6 rounded-2xl bg-white shadow-card"
                >
                  <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <p className="text-sm text-text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Free Tools */}
        <section className="relative py-14 sm:py-16 lg:py-20 bg-gradient-to-b from-surface to-white overflow-hidden">
          {/* Dot pattern */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage:
                "radial-gradient(circle, var(--color-primary) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
            <div className="text-center mb-14">
              <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-accent/15 to-accent-light/15 text-accent-dark text-sm font-semibold mb-4 border border-accent/20">
                Free Tools
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary">
                Your SEO Discovery Journey
              </h2>
              <p className="mt-4 text-lg text-text-muted max-w-2xl mx-auto">
                Four free tools that guide you from &quot;is my site even
                showing up?&quot; to a complete SEO game plan.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tools.map((tool) => {
                const Icon = tool.icon;
                return (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    className={`group relative rounded-2xl border-2 p-6 sm:p-8 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 ${tool.color}`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl shrink-0 ${tool.iconColor} shadow-sm`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <span className="inline-block px-2 py-0.5 rounded text-xs font-semibold text-text-muted uppercase tracking-wider bg-white/60">
                          {tool.step}
                        </span>
                        <h3 className="text-xl font-bold text-primary mt-1 mb-2 group-hover:text-accent-dark transition-colors">
                          {tool.title}
                        </h3>
                        <p className="text-text-muted text-sm leading-relaxed mb-4">
                          {tool.description}
                        </p>
                        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-dark group-hover:gap-2.5 transition-all">
                          Try it free
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="relative py-14 sm:py-16 lg:py-20 overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
          {/* Gradient orbs like hero */}
          <div className="absolute top-1/4 right-1/4 w-48 sm:w-60 lg:w-72 h-48 sm:h-60 lg:h-72 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
          <div
            className="absolute bottom-1/4 left-1/4 w-36 sm:w-44 lg:w-56 h-36 sm:h-44 lg:h-56 bg-blue-500/8 rounded-full blur-3xl animate-pulse-slow"
            style={{ animationDelay: "1.5s" }}
          />
          {/* Dot pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 text-center">
            <div className="relative inline-flex items-center justify-center mb-6">
              <div className="absolute inset-0 w-16 h-16 rounded-full bg-accent/20 blur-xl mx-auto" />
              <Shield className="relative h-12 w-12 text-accent" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Honest SEO Education, Backed by Real Experts
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
              The SEO Association is powered by CalTech Web, a professional
              web design and SEO company that builds real results for real
              businesses. We created these free tools because we believe
              informed clients make the best clients.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {[
                "No pushy sales tactics",
                "Transparent pricing always",
                "Education-first approach",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 justify-center px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                >
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                  <span className="text-sm font-medium text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learn SEO Articles */}
        <section className="relative py-14 sm:py-16 lg:py-20 bg-white overflow-hidden">
          <div className="absolute top-0 left-0 w-48 sm:w-60 lg:w-72 h-48 sm:h-60 lg:h-72 bg-primary/3 rounded-full blur-3xl" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
            {/* Header with illustration */}
            <div className="flex flex-col lg:flex-row items-center gap-10 mb-14">
              <div className="flex-1 text-center lg:text-left">
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/5 text-primary text-sm font-semibold mb-4 border border-primary/10">
                  Learn SEO
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-primary">
                  SEO Guides for Small Business Owners
                </h2>
                <p className="mt-4 text-lg text-text-muted max-w-xl">
                  Plain-English answers to the questions every business owner
                  asks about SEO. No jargon, no fluff, just actionable knowledge
                  you can use today.
                </p>
              </div>
              <div className="shrink-0">
                <Image
                  src="/images/learn-books.svg"
                  alt="Learn SEO guides illustration"
                  width={280}
                  height={280}
                  className="w-40 sm:w-48 lg:w-72"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {articles.map((article, idx) => {
                const Icon = article.icon;
                return (
                  <Link
                    key={article.href}
                    href={article.href}
                    className="group relative bg-white rounded-xl border border-border/50 p-6 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
                  >
                    {/* Gradient top accent bar */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${articleAccents[idx]} opacity-60 group-hover:opacity-100 transition-opacity`}
                    />
                    <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${articleAccents[idx]} mb-4 shadow-sm`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-bold text-primary mb-2 group-hover:text-accent-dark transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-text-muted mb-4 leading-relaxed">
                      {article.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-accent-dark group-hover:gap-2 transition-all">
                      Read guide
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-20 overflow-hidden bg-gradient-to-br from-amber-50 via-accent/10 to-amber-50/50">
          {/* Decorative orbs */}
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-accent/15 rounded-full blur-3xl animate-pulse-slow" />
          <div
            className="absolute bottom-0 left-1/4 w-48 h-48 bg-amber-300/20 rounded-full blur-3xl animate-pulse-slow"
            style={{ animationDelay: "1.5s" }}
          />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 flex justify-center lg:justify-start">
                <Image
                  src="/images/flat-hero-search-ranking.png"
                  alt="SEO search ranking illustration"
                  width={480}
                  height={480}
                  className="w-full max-w-md"
                />
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                  Ready to Find Out Where You Stand?
                </h2>
                <p className="text-lg text-text-muted mb-8">
                  Enter your website URL and get an instant SEO score. We check
                  35+ factors and show you exactly what to fix, completely free.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    href="/free-seo-analysis"
                    className="btn-shimmer inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-primary-dark font-bold px-8 py-4 rounded-xl shadow-lg shadow-accent/25 transition-all hover:-translate-y-0.5"
                  >
                    Scan My Website Free
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  <Link
                    href="/get-started"
                    className="btn-shimmer inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-light text-white font-bold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5"
                  >
                    Get a Free Strategy Call
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Schema Markup */}
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
            "@type": "Organization",
            name: "The SEO Association",
            url: "https://seoassn.com",
            logo: "https://seoassn.com/images/logo.png",
            sameAs: [],
            parentOrganization: {
              "@type": "Organization",
              name: "CalTech Web",
              url: "https://caltechweb.com",
            },
          }),
        }}
      />
    </>
  );
}
