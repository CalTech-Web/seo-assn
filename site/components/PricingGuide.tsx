"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  TrendingUp,
  Crown,
  ClipboardCheck,
  ArrowRight,
  Clock,
  HelpCircle,
  CheckCircle2,
} from "lucide-react";

const plans = [
  {
    title: "SEO Starter",
    price: "$500 – $1,000",
    period: "/ month",
    bestFor: "Local businesses, low competition markets, new websites",
    icon: Rocket,
    features: [
      "Google Business Profile optimization",
      "On-page SEO for up to 5 pages",
      "Local citation building",
      "Monthly performance report",
    ],
    timeline: "3–6 months",
    color: "bg-emerald-50 border-emerald-200",
    iconBg: "bg-emerald-100 text-emerald-600",
  },
  {
    title: "SEO Growth",
    price: "$1,000 – $2,500",
    period: "/ month",
    bestFor: "Service businesses in competitive local markets",
    icon: TrendingUp,
    popular: true,
    features: [
      "Everything in Starter",
      "Keyword research & content strategy",
      "Blog/content creation (2 posts/month)",
      "Backlink outreach",
      "Competitor analysis",
    ],
    timeline: "3–6 months",
    color: "bg-accent/5 border-accent/30",
    iconBg: "bg-accent/10 text-accent-dark",
  },
  {
    title: "SEO Authority",
    price: "$2,500 – $5,000+",
    period: "/ month",
    bestFor: "Businesses targeting regional or national audiences",
    icon: Crown,
    features: [
      "Everything in Growth",
      "Advanced technical SEO",
      "4+ content pieces per month",
      "PR and digital authority building",
      "Dedicated account manager",
    ],
    timeline: "6–12 months",
    color: "bg-purple-50 border-purple-200",
    iconBg: "bg-purple-100 text-purple-600",
  },
  {
    title: "One-Time SEO Audit",
    price: "$300 – $800",
    period: "",
    bestFor: "Businesses who want to know exactly what's wrong before committing",
    icon: ClipboardCheck,
    features: [
      "Full technical and on-page audit",
      "Keyword opportunity report",
      "Actionable priority fix list",
      "30-minute strategy call",
    ],
    timeline: "1–2 weeks",
    note: "Audit cost credited toward any ongoing plan with CalTech Web",
    color: "bg-sky-50 border-sky-200",
    iconBg: "bg-sky-100 text-sky-600",
  },
];

const priceFactors = [
  "How competitive your industry is",
  "Whether you're targeting local vs. national",
  "The current state of your website",
  "How fast you want to see results",
  "Whether content creation is included",
];

export default function PricingGuide() {
  const scrollToBrief = () => {
    document.querySelector("#brief")?.scrollIntoView({ behavior: "smooth" });
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "cta_click", {
        event_label: "pricing_get_recommendation",
      });
    }
  };

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent-dark text-sm font-semibold mb-4">
            Step 3
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">
            What Does SEO Actually Cost?
          </h2>
          <p className="mt-4 text-lg text-text-muted max-w-2xl mx-auto">
            Straight talk on pricing. No bait and switch, no confusing packages.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {plans.map((plan, idx) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative rounded-2xl border-2 p-6 flex flex-col ${plan.color} ${
                  plan.popular ? "ring-2 ring-accent" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-primary-dark text-xs font-bold rounded-full">
                    Most Popular
                  </div>
                )}

                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl mb-4 ${plan.iconBg}`}
                >
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="text-xl font-bold text-primary mb-1">
                  {plan.title}
                </h3>

                <div className="mb-3">
                  <span className="text-2xl font-bold text-primary">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-text-muted text-sm">
                      {plan.period}
                    </span>
                  )}
                </div>

                <p className="text-sm text-text-muted mb-5">{plan.bestFor}</p>

                <ul className="space-y-2.5 mb-6 flex-1">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-text"
                    >
                      <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-1.5 text-xs text-text-muted mb-3">
                  <Clock className="h-3.5 w-3.5" />
                  <span>Results in {plan.timeline}</span>
                </div>

                {plan.note && (
                  <p className="text-xs text-accent-dark font-medium bg-accent/10 rounded-lg px-3 py-2">
                    {plan.note}
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Why does SEO take time */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-surface rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary">
                Why Does SEO Take Time?
              </h3>
            </div>
            <p className="text-text-muted leading-relaxed">
              SEO is about building trust with Google, and trust takes time.
              Every improvement you make, better content, more links, faster
              load times, sends signals that your site deserves to rank higher.
              Unlike paid ads that disappear the moment you stop paying, SEO
              builds lasting momentum. The results compound over time, meaning
              month 6 is almost always better than month 1, and it keeps working
              even while you sleep.
            </p>
          </div>

          <div className="bg-surface rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <HelpCircle className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary">
                What Makes SEO Prices Vary?
              </h3>
            </div>
            <ul className="space-y-3">
              {priceFactors.map((factor) => (
                <li
                  key={factor}
                  className="flex items-center gap-2 text-text-muted"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                  <span>{factor}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Soft CTA */}
        <div className="mt-14 text-center">
          <p className="text-lg text-text-muted max-w-xl mx-auto mb-6">
            Not sure which plan fits your situation? CalTech Web will tell you
            honestly, even if the answer is to start small.
          </p>
          <button
            onClick={scrollToBrief}
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-primary-dark font-bold px-8 py-4 rounded-xl shadow-lg shadow-accent/25 transition-all hover:-translate-y-0.5"
          >
            Get a Recommendation
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
