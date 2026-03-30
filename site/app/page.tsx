import Link from "next/link";
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
} from "lucide-react";

const tools = [
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

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />

        {/* Why SEO Matters */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary">
                Why SEO Matters for Small Businesses
              </h2>
              <p className="mt-4 text-lg text-text-muted max-w-2xl mx-auto">
                Your customers are searching for your services right now. The
                question is whether they find you or your competitor.
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-6 rounded-2xl bg-surface"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-accent-dark mb-2">
                    {stat.number}
                  </div>
                  <p className="text-sm text-text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Free Tools */}
        <section className="py-20 bg-surface">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="text-center mb-14">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent-dark text-sm font-semibold mb-4">
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
                    className={`group rounded-2xl border-2 p-6 sm:p-8 transition-all hover:shadow-lg hover:-translate-y-1 ${tool.color}`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl shrink-0 ${tool.iconColor}`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">
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
                          <ArrowRight className="h-4 w-4" />
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
        <section className="py-20 bg-primary text-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
            <Shield className="h-12 w-12 text-accent mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Honest SEO Education, Backed by Real Experts
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
              The SEO Association is powered by CalTech Web, a professional
              web design and SEO company that builds real results for real
              businesses. We created these free tools because we believe
              informed clients make the best clients.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                "No pushy sales tactics",
                "Transparent pricing always",
                "Education-first approach",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 justify-center text-white/80"
                >
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learn SEO Articles */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="text-center mb-14">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/5 text-primary text-sm font-semibold mb-4">
                Learn SEO
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary">
                SEO Guides for Small Business Owners
              </h2>
              <p className="mt-4 text-lg text-text-muted max-w-2xl mx-auto">
                Plain-English answers to the questions every business owner
                asks about SEO.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {articles.map((article) => {
                const Icon = article.icon;
                return (
                  <Link
                    key={article.href}
                    href={article.href}
                    className="group bg-surface rounded-xl border border-border/50 p-6 hover:border-accent/30 hover:shadow-md transition-all"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5 mb-4">
                      <Icon className="h-5 w-5 text-primary" />
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
        <section className="py-20 bg-accent/10">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Ready to Find Out Where You Stand?
            </h2>
            <p className="text-lg text-text-muted mb-8">
              Start with a free SEO audit checklist. It takes less than 5
              minutes and gives you a clear picture of what is working and
              what needs fixing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/seo-audit-checklist"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-primary-dark font-bold px-8 py-4 rounded-xl shadow-lg shadow-accent/25 transition-all hover:-translate-y-0.5"
              >
                Start the SEO Audit
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/get-started"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-light text-white font-bold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5"
              >
                Get a Free Strategy Call
              </Link>
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
