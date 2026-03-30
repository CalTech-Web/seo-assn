"use client";

import { ArrowDown, Shield } from "lucide-react";

export default function HeroSection() {
  const scrollToAudit = () => {
    document.querySelector("#audit")?.scrollIntoView({ behavior: "smooth" });
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "cta_click", { event_label: "hero_check_seo" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary-dark">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light" />
        {/* Floating search result cards */}
        <div className="absolute top-1/4 left-[10%] w-64 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 p-4 animate-float hidden lg:block">
          <div className="h-3 w-32 bg-accent/30 rounded mb-2" />
          <div className="h-2 w-48 bg-white/20 rounded mb-1" />
          <div className="h-2 w-40 bg-white/15 rounded" />
          <div className="mt-2 text-xs text-success font-medium">
            #1 on Google
          </div>
        </div>
        <div
          className="absolute top-1/3 right-[8%] w-56 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 p-4 animate-float hidden lg:block"
          style={{ animationDelay: "2s" }}
        >
          <div className="h-3 w-24 bg-white/20 rounded mb-2" />
          <div className="h-2 w-44 bg-white/15 rounded mb-1" />
          <div className="h-2 w-36 bg-white/10 rounded" />
          <div className="mt-2 text-xs text-warning font-medium">Page 2</div>
        </div>
        <div
          className="absolute bottom-1/3 left-[15%] w-48 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 p-4 animate-float hidden lg:block"
          style={{ animationDelay: "4s" }}
        >
          <div className="h-3 w-28 bg-white/20 rounded mb-2" />
          <div className="h-2 w-40 bg-white/15 rounded" />
          <div className="mt-2 text-xs text-danger font-medium">
            Not found
          </div>
        </div>
        {/* Gradient orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
        <div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
          Is Your Website Actually{" "}
          <span className="text-accent">Showing Up</span> on Google?
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
          Find out in minutes, then learn exactly what to do about it. Free
          tools, no fluff, no obligation.
        </p>

        <button
          onClick={scrollToAudit}
          className="mt-10 inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-primary-dark font-bold text-lg px-8 py-4 rounded-xl shadow-lg shadow-accent/25 hover:shadow-accent/40 transition-all duration-300 hover:-translate-y-0.5"
        >
          Check My SEO Now
          <ArrowDown className="h-5 w-5" />
        </button>

        <div className="mt-8 flex items-center justify-center gap-2 text-white/50 text-sm">
          <Shield className="h-4 w-4" />
          <span>Free Resource. No spam. No obligation. Powered by CalTech Web.</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-white/30" />
      </div>
    </section>
  );
}
