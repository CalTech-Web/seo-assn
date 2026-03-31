"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Eye,
  FileText,
  PenTool,
  MapPin,
  Link2,
  ArrowRight,
  CheckCircle2,
  XCircle,
} from "lucide-react";

const categories = [
  {
    title: "Basic Visibility",
    icon: Eye,
    items: [
      "My website shows up when I Google my business name",
      "My business appears on Google Maps",
      "My website is listed on Google Search Console",
      "My website loads in under 3 seconds",
      "My website works properly on mobile",
    ],
  },
  {
    title: "On-Page SEO",
    icon: FileText,
    items: [
      "Each page on my site has a unique title tag",
      "Each page has a meta description",
      "My pages use heading tags (H1, H2, H3) properly",
      "My images have descriptive alt text",
      "My URLs are clean and readable (e.g., /services not /page?id=23)",
    ],
  },
  {
    title: "Content & Keywords",
    icon: PenTool,
    items: [
      "I know what keywords my customers search for",
      "My website content uses those keywords naturally",
      "I have a separate page for each main service I offer",
      "My content answers the questions my customers ask most",
      "I publish new content at least once a month",
    ],
  },
  {
    title: "Local SEO",
    icon: MapPin,
    items: [
      "I have a complete Google Business Profile",
      "My business Name, Address, Phone (NAP) is consistent across all listings",
      "I have at least 10 Google reviews",
      "I respond to Google reviews regularly",
      "My website mentions the city/region I serve",
    ],
  },
  {
    title: "Authority & Links",
    icon: Link2,
    items: [
      "Other websites link back to mine",
      "I am listed in relevant local directories",
      "My social media profiles link to my website",
      "I have no broken links on my site",
      "My website has an SSL certificate (https://)",
    ],
  },
];

type Answers = Record<string, boolean | null>;

function getResult(score: number) {
  if (score <= 8) {
    return {
      level: "Needs Work",
      color: "danger",
      emoji: "red",
      message:
        "Your website has significant gaps that are likely costing you customers. The good news: these are all fixable. CalTech Web can handle every item on this list.",
      cta: "Get a Free SEO Assessment",
      ctaHref: "/get-started",
    };
  }
  if (score <= 16) {
    return {
      level: "Getting There",
      color: "warning",
      emoji: "yellow",
      message:
        "You've got some basics in place but there are clear gaps holding you back. A focused SEO strategy could make a real difference.",
      cta: "See What's Missing",
      ctaHref: "/keyword-difficulty-quiz",
    };
  }
  return {
    level: "Solid Foundation",
    color: "success",
    emoji: "green",
    message:
      "Great foundation! Now it's about going deeper, targeting the right keywords and building authority. Let's find your next growth opportunity.",
    cta: "Find Your Keywords",
    ctaHref: "/keyword-difficulty-quiz",
  };
}

export default function AuditChecklist() {
  const [answers, setAnswers] = useState<Answers>({});
  const [showResults, setShowResults] = useState(false);

  const totalItems = 25;
  const answeredCount = Object.values(answers).filter((v) => v !== null).length;
  const yesCount = Object.values(answers).filter((v) => v === true).length;
  const allAnswered = answeredCount === totalItems;

  const scorePercent = allAnswered ? (yesCount / totalItems) * 100 : 0;
  const result = useMemo(() => getResult(yesCount), [yesCount]);

  const toggle = (key: string, value: boolean) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    setShowResults(false);
  };

  const handleShowResults = () => {
    setShowResults(true);
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "audit_complete", {
        event_label: result.level,
        value: yesCount,
      });
    }
  };

  const handleCtaClick = () => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "cta_click", {
        event_label: `audit_${result.level.toLowerCase().replace(/\s/g, "_")}`,
      });
    }
    window.location.href = result.ctaHref;
  };

  return (
    <section id="audit" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent-dark text-sm font-semibold mb-4">
            Step 1
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">
            How Does Your Website Score?
          </h2>
          <p className="mt-4 text-lg text-text-muted max-w-2xl mx-auto">
            Go through this checklist and see where you stand right now. No
            tools needed, just honest yes or no answers.
          </p>
        </div>

        {/* Live score bar */}
        <div className="mb-10 bg-surface rounded-2xl p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-text-muted">
              {answeredCount} of {totalItems} answered
            </span>
            <span className="text-sm font-bold text-primary">
              {yesCount} Yes / {answeredCount - yesCount} No
            </span>
          </div>
          <div className="h-3 bg-border rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500 ease-out"
              style={{
                width: `${(answeredCount / totalItems) * 100}%`,
                background: `linear-gradient(90deg, #22c55e ${
                  answeredCount > 0 ? (yesCount / answeredCount) * 100 : 0
                }%, #ef4444 ${
                  answeredCount > 0 ? (yesCount / answeredCount) * 100 : 0
                }%)`,
              }}
            />
          </div>
        </div>

        {/* Categories */}
        <div className="space-y-8">
          {categories.map((cat, catIdx) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className="bg-surface rounded-2xl p-6 sm:p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-primary">
                    {cat.title}
                  </h3>
                </div>
                <div className="space-y-3">
                  {cat.items.map((item, itemIdx) => {
                    const key = `${catIdx}-${itemIdx}`;
                    const val = answers[key];
                    return (
                      <div
                        key={key}
                        className="flex items-start sm:items-center justify-between gap-4 py-3 px-4 rounded-xl bg-white border border-border/50 hover:border-border transition-colors"
                      >
                        <span className="text-sm sm:text-base text-text leading-relaxed flex-1">
                          {item}
                        </span>
                        <div className="flex gap-2 shrink-0">
                          <button
                            onClick={() => toggle(key, true)}
                            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                              val === true
                                ? "bg-success/10 text-success ring-2 ring-success/30"
                                : "bg-surface text-text-muted hover:bg-success/5 hover:text-success"
                            }`}
                            aria-label="Yes"
                          >
                            <CheckCircle2 className="h-4 w-4" />
                            Yes
                          </button>
                          <button
                            onClick={() => toggle(key, false)}
                            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                              val === false
                                ? "bg-danger/10 text-danger ring-2 ring-danger/30"
                                : "bg-surface text-text-muted hover:bg-danger/5 hover:text-danger"
                            }`}
                            aria-label="No"
                          >
                            <XCircle className="h-4 w-4" />
                            No
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Show Results button */}
        {allAnswered && !showResults && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 text-center"
          >
            <button
              onClick={handleShowResults}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg transition-all hover:-translate-y-0.5"
            >
              See My Score
              <ArrowRight className="h-5 w-5" />
            </button>
          </motion.div>
        )}

        {/* Results */}
        <AnimatePresence>
          {showResults && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-10"
            >
              <div
                className={`rounded-2xl p-8 sm:p-10 text-center border-2 ${
                  result.color === "danger"
                    ? "bg-danger/5 border-danger/20"
                    : result.color === "warning"
                    ? "bg-warning/5 border-warning/20"
                    : "bg-success/5 border-success/20"
                }`}
              >
                {/* Score dial */}
                <div className="mx-auto mb-6 relative w-40 h-40">
                  <svg
                    viewBox="0 0 120 120"
                    className="w-full h-full -rotate-90"
                  >
                    <circle
                      cx="60"
                      cy="60"
                      r="52"
                      fill="none"
                      stroke="#e2e8f0"
                      strokeWidth="8"
                    />
                    <circle
                      cx="60"
                      cy="60"
                      r="52"
                      fill="none"
                      stroke={
                        result.color === "danger"
                          ? "#ef4444"
                          : result.color === "warning"
                          ? "#eab308"
                          : "#22c55e"
                      }
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={`${(scorePercent / 100) * 327} 327`}
                      className="score-ring"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold text-primary">
                      {yesCount}
                    </span>
                    <span className="text-sm text-text-muted">/ 25</span>
                  </div>
                </div>

                <div
                  className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-4 ${
                    result.color === "danger"
                      ? "bg-danger/10 text-danger"
                      : result.color === "warning"
                      ? "bg-warning/10 text-warning"
                      : "bg-success/10 text-success"
                  }`}
                >
                  {result.emoji === "red" && "🔴 "}
                  {result.emoji === "yellow" && "🟡 "}
                  {result.emoji === "green" && "🟢 "}
                  {result.level}
                </div>

                <p className="text-lg text-text max-w-xl mx-auto mb-8 leading-relaxed">
                  {result.message}
                </p>

                <button
                  onClick={handleCtaClick}
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-primary-dark font-bold px-8 py-4 rounded-xl shadow-lg shadow-accent/25 transition-all hover:-translate-y-0.5"
                >
                  {result.cta}
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
