"use client";

import {
  CheckCircle,
  Globe,
  BarChart3,
  Sparkles,
  ChevronDown,
  ArrowRight,
  FileText,
  Settings,
  Type,
  MapPin,
  Search,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOAnalyzer from "@/components/SEOAnalyzer";
import FAQAccordion from "@/components/FAQAccordion";
import Link from "next/link";

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white py-16 sm:py-20 pt-24 sm:pt-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-white/80 mb-6">
          <Search className="w-4 h-4 text-accent" />
          Free SEO Analysis Tool
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
          Free SEO Analysis,{" "}
          <span className="text-accent">See Your Score Instantly</span>
        </h1>

        <p className="text-lg sm:text-xl text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
          We analyze 35+ SEO factors across 5 categories and show you exactly
          where your site needs help, plus what professional SEO would fix.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {["Instant Results", "No Signup", "Before & After", "100% Free"].map(
            (item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-sm text-white/70"
              >
                <CheckCircle className="w-3.5 h-3.5 text-success" />
                {item}
              </span>
            )
          )}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SEOAnalyzer />
      </div>
    </section>
  );
}

// ─── How It Works ───────────────────────────────────────────────────────────

const steps = [
  {
    icon: Globe,
    number: "1",
    title: "Enter Your URL",
    description:
      "Paste your website address into the tool above. No signup, no email, no account needed.",
  },
  {
    icon: BarChart3,
    number: "2",
    title: "Get Your SEO Grade",
    description:
      "Our engine analyzes 35+ factors across on-page SEO, technical SEO, content, local signals, and crawlability.",
  },
  {
    icon: Sparkles,
    number: "3",
    title: "See the Before and After",
    description:
      "Toggle between your current score and what it would look like after professional SEO addresses every issue.",
  },
];

function HowItWorks() {
  return (
    <section className="py-16 sm:py-20 bg-surface">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary">
            How It Works
          </h2>
          <p className="text-text-muted mt-3 max-w-xl mx-auto">
            Three steps. Thirty seconds. Zero cost.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8">
          {steps.map(({ icon: Icon, number, title, description }) => (
            <div key={number} className="relative text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/5 text-primary mb-4">
                <Icon className="w-7 h-7" />
              </div>
              <div className="absolute -top-2 left-1/2 -translate-x-[calc(50%+28px)] w-7 h-7 rounded-full bg-accent text-primary-dark text-xs font-bold flex items-center justify-center shadow-md">
                {number}
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">{title}</h3>
              <p className="text-sm text-text-muted leading-relaxed max-w-xs mx-auto">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── What We Check ──────────────────────────────────────────────────────────

const categories = [
  {
    icon: FileText,
    name: "On-Page SEO Fundamentals",
    checks: 8,
    description:
      "Title tags, meta descriptions, heading hierarchy, alt text, canonical URLs, URL structure, internal linking, and content length.",
    color: "bg-emerald-50 text-emerald-600 border-emerald-200",
  },
  {
    icon: Settings,
    name: "Technical SEO",
    checks: 7,
    description:
      "Response time, HTTPS, viewport meta, render-blocking resources, structured data, robots meta tag, and Open Graph tags.",
    color: "bg-blue-50 text-blue-600 border-blue-200",
  },
  {
    icon: Type,
    name: "Content & Keywords",
    checks: 7,
    description:
      "Keyword usage in title, H1 alignment, content freshness, value proposition, FAQ content, blog section, and outbound links.",
    color: "bg-purple-50 text-purple-600 border-purple-200",
  },
  {
    icon: MapPin,
    name: "Local SEO Signals",
    checks: 7,
    description:
      "Phone number, physical address, Google Maps link, NAP consistency, location content, social media, and reviews.",
    color: "bg-amber-50 text-amber-600 border-amber-200",
  },
  {
    icon: Search,
    name: "Crawlability & Indexation",
    checks: 6,
    description:
      "Sitemap reference, robots directives, favicon, mobile layout, link patterns, and page language declaration.",
    color: "bg-rose-50 text-rose-600 border-rose-200",
  },
];

function WhatWeCheck() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent-dark text-sm font-semibold mb-4 border border-accent/20">
            35+ Checks
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary">
            What We Analyze
          </h2>
          <p className="text-text-muted mt-3 max-w-xl mx-auto">
            Five categories covering every major SEO signal that search engines
            use to rank your website.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map(({ icon: Icon, name, checks, description, color }) => (
            <div
              key={name}
              className="bg-white rounded-xl border border-border/50 p-6 shadow-card hover:shadow-card-hover transition-all"
            >
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${color}`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-primary mb-1">{name}</h3>
              <div className="text-xs text-accent-dark font-semibold mb-2">
                {checks} checks
              </div>
              <p className="text-sm text-text-muted leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────

const faqs = [
  {
    question: "Is the SEO analysis really free?",
    answer:
      "Yes, 100% free. No credit card, no signup, no email required. Just enter your URL and get your results instantly.",
  },
  {
    question: "What does the SEO analysis check?",
    answer:
      "We grade your site across five categories: On-Page SEO Fundamentals (title tags, meta descriptions, headings, alt text), Technical SEO (speed, HTTPS, structured data, mobile), Content and Keywords (keyword usage, freshness, value proposition), Local SEO Signals (phone, address, Google Maps, reviews), and Crawlability (sitemap, robots, mobile layout). Over 35 individual checks in total.",
  },
  {
    question: "How accurate is the analysis?",
    answer:
      'Our tool fetches your live website and evaluates it using the same signals search engines look for. While no automated tool replaces a full manual audit, our analysis identifies the most impactful SEO issues holding back your rankings.',
  },
  {
    question: "What does the 'With Professional SEO' view show?",
    answer:
      "It shows your projected score after professional SEO work addresses each failing check. This gives you a clear picture of the potential improvement in your search visibility.",
  },
  {
    question: "How long does the scan take?",
    answer:
      "Most scans complete in under 30 seconds. The tool fetches your website, runs it through our analysis engine, and generates a full report with actionable recommendations.",
  },
  {
    question: "Can I scan any website?",
    answer:
      "You can scan any publicly accessible website. Sites behind login walls, staging environments, or localhost addresses cannot be analyzed.",
  },
];

function FAQSection() {
  return (
    <section className="py-16 sm:py-20 bg-surface">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary">
            Frequently Asked Questions
          </h2>
          <p className="text-text-muted mt-3 max-w-xl mx-auto">
            Everything you need to know about the free SEO analysis tool.
          </p>
        </div>

        <FAQAccordion faqs={faqs} />
      </div>
    </section>
  );
}

// ─── CTA ─────────────────────────────────────────────────────────────────────

function BottomCTA() {
  return (
    <section className="relative py-14 sm:py-16 lg:py-20 overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light">
      <div className="absolute top-0 right-0 w-48 sm:w-64 lg:w-80 h-48 sm:h-64 lg:h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
      <div
        className="absolute bottom-0 left-0 w-40 sm:w-52 lg:w-64 h-40 sm:h-52 lg:h-64 bg-blue-500/8 rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/15 border border-accent/20 backdrop-blur-sm">
            <Sparkles className="h-7 w-7 text-accent" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight max-w-3xl">
            Ready to Improve Your Rankings?
          </h2>
          <p className="text-lg sm:text-xl text-white/60 max-w-2xl mb-10 leading-relaxed">
            Get a personalized SEO roadmap and strategy call. We will show you
            exactly what to fix and how to start ranking higher.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/get-started"
              className="btn-shimmer inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-primary-dark font-bold px-8 py-4 rounded-xl shadow-lg shadow-accent/25 transition-all hover:-translate-y-0.5"
            >
              Get a Free Strategy Call
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/seo-pricing"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold px-8 py-4 rounded-xl backdrop-blur-sm border border-white/10 transition-all hover:-translate-y-0.5"
            >
              See SEO Pricing
            </Link>
          </div>

          <p className="mt-8 text-sm text-white/40">
            No commitment required. Free tools, real results.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function FreeSEOAnalysisPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <WhatWeCheck />
        <FAQSection />
        <BottomCTA />
      </main>
      <Footer />
    </>
  );
}
