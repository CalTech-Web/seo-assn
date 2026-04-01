"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import type { SEOReport, SEOCategory, SEOCheck, SEOAction } from "@/types/seo-report";
import {
  ArrowRight, CheckCircle, AlertTriangle, XCircle, ChevronDown, ChevronUp,
  Zap, Shield, Search, FileText, Settings, Type, MapPin, Globe,
  TrendingUp, Sparkles,
} from "lucide-react";

/* ────────────────────────────────────────────
   Helper functions
   ──────────────────────────────────────────── */

function gradeColor(grade: string): string {
  if (grade.startsWith("A")) return "text-green-600";
  if (grade.startsWith("B")) return "text-blue-600";
  if (grade.startsWith("C")) return "text-yellow-600";
  if (grade.startsWith("D")) return "text-orange-600";
  return "text-red-600";
}

function gradeBg(grade: string): string {
  if (grade.startsWith("A")) return "from-green-500 to-emerald-600";
  if (grade.startsWith("B")) return "from-blue-500 to-blue-600";
  if (grade.startsWith("C")) return "from-yellow-500 to-amber-600";
  if (grade.startsWith("D")) return "from-orange-500 to-orange-600";
  return "from-red-500 to-red-600";
}

function scoreColor(score: number): string {
  if (score >= 80) return "bg-green-500";
  if (score >= 60) return "bg-blue-500";
  if (score >= 40) return "bg-yellow-500";
  if (score >= 20) return "bg-orange-500";
  return "bg-red-500";
}

/* ────────────────────────────────────────────
   Category icon mapping
   ──────────────────────────────────────────── */

function categoryIcon(name: string) {
  switch (name) {
    case "On-Page SEO Fundamentals":
      return <FileText className="h-5 w-5" />;
    case "Technical SEO":
      return <Settings className="h-5 w-5" />;
    case "Content & Keywords":
      return <Type className="h-5 w-5" />;
    case "Local SEO Signals":
      return <MapPin className="h-5 w-5" />;
    case "Crawlability & Indexation":
      return <Globe className="h-5 w-5" />;
    default:
      return <Zap className="h-5 w-5" />;
  }
}

/* ────────────────────────────────────────────
   Scan phases
   ──────────────────────────────────────────── */

const SCAN_PHASES = [
  "Fetching your website...",
  "Analyzing on-page SEO...",
  "Checking technical signals...",
  "Evaluating content and keywords...",
  "Scanning local SEO signals...",
  "Building your SEO report...",
];

/* ────────────────────────────────────────────
   StatusIcon
   ──────────────────────────────────────────── */

function StatusIcon({ status }: { status: SEOCheck["status"] }) {
  if (status === "pass")
    return <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />;
  if (status === "warning")
    return <AlertTriangle className="h-5 w-5 text-yellow-500 shrink-0" />;
  return <XCircle className="h-5 w-5 text-red-500 shrink-0" />;
}

/* ────────────────────────────────────────────
   GradeCircle
   ──────────────────────────────────────────── */

function GradeCircle({
  score,
  grade,
  size = 160,
}: {
  score: number;
  grade: string;
  size?: number;
}) {
  const radius = (size - 16) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={8}
          fill="none"
          className="text-border"
          stroke="currentColor"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={8}
          fill="none"
          className={`score-ring ${gradeColor(grade).replace("text-", "text-")}`}
          stroke="currentColor"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className={`text-4xl font-bold bg-gradient-to-br ${gradeBg(grade)} bg-clip-text text-transparent`}>
          {grade}
        </span>
        <span className="text-sm text-text-light">{score}/100</span>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────
   ViewToggle
   ──────────────────────────────────────────── */

function ViewToggle({
  view,
  setView,
}: {
  view: "before" | "after";
  setView: (v: "before" | "after") => void;
}) {
  return (
    <div className="inline-flex rounded-xl bg-surface p-1 gap-1">
      <button
        onClick={() => setView("before")}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
          view === "before"
            ? "bg-white text-primary shadow-sm"
            : "text-text-muted hover:text-primary"
        }`}
      >
        Your Website
      </button>
      <button
        onClick={() => setView("after")}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
          view === "after"
            ? "bg-accent text-primary-dark shadow-sm"
            : "text-text-muted hover:text-primary"
        }`}
      >
        With Professional SEO
      </button>
    </div>
  );
}

/* ────────────────────────────────────────────
   ScoreComparison
   ──────────────────────────────────────────── */

function ScoreComparison({ report }: { report: SEOReport }) {
  return (
    <div className="bg-gradient-to-r from-primary-dark to-primary rounded-2xl p-6 sm:p-8 text-white">
      <div className="flex flex-col sm:flex-row items-center justify-around gap-8">
        {/* Current */}
        <div className="text-center">
          <p className="text-sm text-white/60 mb-3">Current SEO Score</p>
          <GradeCircle score={report.overallScore} grade={report.grade} />
        </div>

        {/* Arrow */}
        <div className="flex flex-col items-center gap-2">
          <ArrowRight className="h-8 w-8 text-accent" />
          <span className="text-xs text-accent font-medium">Improvement</span>
        </div>

        {/* After */}
        <div className="text-center">
          <p className="text-sm text-accent mb-3">With Professional SEO</p>
          <GradeCircle score={report.afterScore} grade={report.afterGrade} />
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────
   CategoryCard
   ──────────────────────────────────────────── */

function CategoryCard({
  category,
  view,
}: {
  category: SEOCategory;
  view: "before" | "after";
}) {
  const [expanded, setExpanded] = useState(false);
  const displayScore = view === "after" ? category.afterScore : category.score;

  return (
    <div className="bg-white rounded-2xl border border-border/50 shadow-card overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center gap-4 p-5 text-left hover:bg-surface/50 transition-colors"
      >
        <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-surface text-primary">
          {categoryIcon(category.name)}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1.5">
            <h3 className="font-semibold text-primary text-sm sm:text-base truncate pr-2">
              {category.name}
            </h3>
            <span className={`text-sm font-bold ${displayScore >= 70 ? "text-green-600" : displayScore >= 40 ? "text-yellow-600" : "text-red-600"}`}>
              {displayScore}%
            </span>
          </div>
          <div className="w-full bg-surface-alt rounded-full h-2">
            <div
              className={`h-2 rounded-full transition-all duration-700 ${scoreColor(displayScore)}`}
              style={{ width: `${displayScore}%` }}
            />
          </div>
        </div>
        <div className="text-text-muted shrink-0">
          {expanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </div>
      </button>

      {expanded && (
        <div className="border-t border-border/50 px-5 py-4 space-y-3">
          {category.checks.map((check, i) => {
            const isFixed = view === "after" && check.status !== "pass";
            return (
              <div key={i} className="flex items-start gap-3">
                {isFixed ? (
                  <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                ) : (
                  <div className="mt-0.5">
                    <StatusIcon status={check.status} />
                  </div>
                )}
                <div>
                  <p className={`text-sm font-medium ${isFixed ? "text-green-700" : "text-primary"}`}>
                    {check.label}
                  </p>
                  <p className="text-xs text-text-muted mt-0.5">
                    {isFixed
                      ? `Addressed with professional SEO, ${check.label.toLowerCase()} optimized for better rankings.`
                      : check.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

/* ────────────────────────────────────────────
   TrafficLoss
   ──────────────────────────────────────────── */

function TrafficLoss({ amount }: { amount: number }) {
  return (
    <div className="bg-gradient-to-r from-red-50 to-red-100/60 border border-red-200/50 rounded-2xl p-6 sm:p-8">
      <div className="flex items-start gap-4">
        <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-red-100 text-red-600 shrink-0">
          <TrendingUp className="h-6 w-6" />
        </div>
        <div>
          <p className="text-sm font-medium text-red-800 mb-1">Estimated Search Traffic Lost</p>
          <p className="text-3xl font-bold text-red-600">
            ~{amount.toLocaleString()} visitors/month
          </p>
          <p className="text-sm text-red-700/70 mt-2 leading-relaxed">
            Based on studies by Backlinko and Moz, sites with poor SEO fundamentals miss out on the
            majority of organic search traffic. Strong on-page SEO, technical health, and local
            signals directly impact your visibility.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────
   ActionCard
   ──────────────────────────────────────────── */

function ActionCard({ action }: { action: SEOAction }) {
  const urgencyColors: Record<string, string> = {
    Immediate: "bg-red-100 text-red-700",
    "This Month": "bg-yellow-100 text-yellow-700",
    Ongoing: "bg-blue-100 text-blue-700",
  };
  const impactColors: Record<string, string> = {
    High: "bg-green-100 text-green-700",
    Medium: "bg-blue-100 text-blue-700",
    Low: "bg-gray-100 text-gray-600",
  };

  return (
    <div className="bg-white rounded-xl border border-border/50 p-4 shadow-card">
      <div className="flex items-center gap-2 mb-2">
        <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${urgencyColors[action.urgency] || ""}`}>
          {action.urgency}
        </span>
        <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${impactColors[action.impact] || ""}`}>
          {action.impact} Impact
        </span>
      </div>
      <h4 className="font-semibold text-primary text-sm mb-1">{action.title}</h4>
      <p className="text-xs text-text-muted leading-relaxed">{action.description}</p>
    </div>
  );
}

/* ────────────────────────────────────────────
   ScanningState
   ──────────────────────────────────────────── */

function ScanningState({ phase }: { phase: number }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 sm:py-24">
      {/* Animated rings */}
      <div className="relative w-32 h-32 mb-8">
        <div className="absolute inset-0 rounded-full border-4 border-border/30 border-t-accent animate-spin" />
        <div
          className="absolute inset-3 rounded-full border-4 border-border/20 border-t-blue-500 animate-spin"
          style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
        />
        <div
          className="absolute inset-6 rounded-full border-4 border-border/10 border-t-accent/70 animate-spin"
          style={{ animationDuration: "2s" }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Search className="h-8 w-8 text-accent animate-pulse" />
        </div>
      </div>

      {/* Phase text */}
      <p className="text-lg font-semibold text-primary mb-4">{SCAN_PHASES[phase] || "Analyzing..."}</p>

      {/* Progress dots */}
      <div className="flex items-center gap-2">
        {SCAN_PHASES.map((_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${
              i <= phase ? "bg-accent scale-100" : "bg-border scale-75"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────
   ReportContactForm
   ──────────────────────────────────────────── */

function ReportContactForm({ report }: { report: SEOReport }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (window.turnstile && turnstileRef.current && !widgetIdRef.current) {
        widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
          sitekey: "0x4AAAAAACyywKjKAAq2Sq5T",
          theme: "dark",
          callback: (token: string) => setTurnstileToken(token),
        });
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const canSubmit = name.trim() && email.trim();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitting(true);
    setFormError("");

    try {
      const res = await fetch("https://forms.caltechweb.com/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          site: "seoassn.com",
          name: name.trim(),
          email: email.trim(),
          message: `SEO Analysis Request\n\nWebsite: ${report.url}\nDomain: ${report.domain}\nSEO Score: ${report.overallScore}/100 (Grade: ${report.grade})\nProjected Score: ${report.afterScore}/100 (Grade: ${report.afterGrade})\nEstimated Traffic Loss: ~${report.estimatedTrafficLoss.toLocaleString()} visitors/month`,
          source: "seo-analyzer",
          turnstileToken,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.message || "Something went wrong. Please try again.");
      }

      setSubmitted(true);

      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", "form_submit", {
          event_label: "seo_analyzer_lead",
        });
      }
    } catch (err) {
      setFormError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-gradient-to-r from-primary-dark to-primary rounded-2xl p-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/20">
          <CheckCircle className="h-7 w-7 text-accent" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">We Are On It</h3>
        <p className="text-white/70 leading-relaxed max-w-md mx-auto">
          We will review your SEO report for{" "}
          <span className="text-accent font-semibold">{report.domain}</span> and reach out with a
          strategy to improve your rankings.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-primary-dark to-primary rounded-2xl p-6 sm:p-8">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-6">
          <Sparkles className="h-8 w-8 text-accent mx-auto mb-3" />
          <h3 className="text-xl font-bold text-white mb-2">Ready to Improve Your Rankings?</h3>
          <p className="text-white/70 text-sm leading-relaxed">
            We will review your SEO report and show you exactly how to improve your rankings. No obligation.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              required
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            />
          </div>
          <div>
            <input
              type="email"
              required
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            />
          </div>

          {/* Cloudflare Turnstile */}
          <div ref={turnstileRef} className="mt-4" />

          {formError && <p className="text-sm text-red-400">{formError}</p>}

          <button
            type="submit"
            disabled={!canSubmit || submitting}
            className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-primary-dark font-bold py-3 px-6 rounded-xl transition-all disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {submitting ? (
              <div className="h-5 w-5 border-2 border-primary-dark/30 border-t-primary-dark rounded-full animate-spin" />
            ) : (
              <>
                Get My Free SEO Strategy
                <ArrowRight className="h-5 w-5" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────
   Main SEOAnalyzer Component
   ──────────────────────────────────────────── */

export default function SEOAnalyzer() {
  const [url, setUrl] = useState("");
  const [scanning, setScanning] = useState(false);
  const [phase, setPhase] = useState(0);
  const [report, setReport] = useState<SEOReport | null>(null);
  const [error, setError] = useState("");
  const [view, setView] = useState<"before" | "after">("before");

  /* Phase animation */
  useEffect(() => {
    if (!scanning) return;
    const interval = setInterval(() => {
      setPhase((prev) => {
        if (prev < SCAN_PHASES.length - 1) return prev + 1;
        return prev;
      });
    }, 1500);
    return () => clearInterval(interval);
  }, [scanning]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    setScanning(true);
    setPhase(0);
    setReport(null);
    setError("");
    setView("before");

    try {
      const res = await fetch("/api/seo-analysis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url.trim() }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Failed to analyze the website. Please try again.");
      }

      const data: SEOReport = await res.json();
      setReport(data);

      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", "seo_analysis_complete", {
          event_label: data.domain,
          value: data.overallScore,
        });
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setScanning(false);
    }
  };

  /* ── Scanning state ── */
  if (scanning) {
    return <ScanningState phase={phase} />;
  }

  /* ── Results state ── */
  if (report) {
    return (
      <div className="space-y-8 animate-fade-in">
        {/* Header */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 text-primary">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold">SEO Report for {report.domain}</h2>
              <p className="text-text-muted text-sm mt-1">{report.url}</p>
            </div>
            <ViewToggle view={view} setView={setView} />
          </div>

          {/* Score comparison */}
          <ScoreComparison report={report} />
        </div>

        {/* Traffic loss */}
        {report.estimatedTrafficLoss > 0 && view === "before" && (
          <TrafficLoss amount={report.estimatedTrafficLoss} />
        )}

        {/* Strengths and issues */}
        {view === "before" && (
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Strengths */}
            {report.strengths.length > 0 && (
              <div className="bg-white rounded-2xl border border-border/50 shadow-card p-6">
                <h3 className="font-bold text-primary mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  What You Are Doing Well
                </h3>
                <ul className="space-y-2">
                  {report.strengths.map((s, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text-muted">
                      <CheckCircle className="h-4 w-4 text-green-400 shrink-0 mt-0.5" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Top issues */}
            {report.topIssues.length > 0 && (
              <div className="bg-white rounded-2xl border border-border/50 shadow-card p-6">
                <h3 className="font-bold text-primary mb-4 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-500" />
                  Top Issues to Address
                </h3>
                <ul className="space-y-2">
                  {report.topIssues.map((issue, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text-muted">
                      <XCircle className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                      {issue}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Category cards */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-primary">Detailed Breakdown</h3>
          {report.categories.map((cat, i) => (
            <CategoryCard key={i} category={cat} view={view} />
          ))}
        </div>

        {/* Action plan */}
        {view === "before" && report.actions.length > 0 && (
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">Recommended Action Plan</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {report.actions.map((action, i) => (
                <ActionCard key={i} action={action} />
              ))}
            </div>
          </div>
        )}

        {/* After-state CTA */}
        {view === "after" && (
          <div className="bg-gradient-to-r from-amber-50 to-accent/10 border border-accent/20 rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl font-bold text-primary mb-2">Get Professional SEO Help</h3>
            <p className="text-text-muted text-sm leading-relaxed mb-4">
              The SEO Association is powered by CalTech Web, a full-service web agency that
              specializes in search engine optimization for small businesses. We can help you
              achieve the projected improvements shown above.
            </p>
            <Link
              href="/get-started"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-primary-dark font-bold px-6 py-3 rounded-xl transition-all hover:-translate-y-0.5"
            >
              Get Started
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        )}

        {/* Lead capture form */}
        <ReportContactForm report={report} />

        {/* Analyze another */}
        <div className="text-center">
          <button
            onClick={() => {
              setReport(null);
              setUrl("");
              setView("before");
            }}
            className="text-sm text-text-muted hover:text-primary transition-colors underline underline-offset-4"
          >
            Analyze another website
          </button>
        </div>
      </div>
    );
  }

  /* ── Input state ── */
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-text-light" />
          <input
            type="url"
            required
            placeholder="Enter your website URL (e.g. https://example.com)"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-xl border border-border bg-white text-primary placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent text-base"
          />
        </div>
        <button
          type="submit"
          disabled={!url.trim()}
          className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-primary-dark font-bold px-8 py-4 rounded-xl transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:-translate-y-0.5 shadow-lg shadow-accent/25 hover:shadow-accent/40"
        >
          <Search className="h-5 w-5" />
          Analyze My SEO
        </button>
      </form>

      {error && (
        <div className="mt-4 flex items-start gap-3 bg-red-50 border border-red-200/50 rounded-xl p-4">
          <XCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-red-800">{error}</p>
            <button
              onClick={() => setError("")}
              className="text-xs text-red-600 hover:text-red-800 underline mt-1"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}

      <div className="mt-6 flex items-center justify-center gap-2 text-text-muted text-sm">
        <Shield className="h-4 w-4" />
        <span>Free analysis. No spam. No obligation.</span>
      </div>
    </div>
  );
}
