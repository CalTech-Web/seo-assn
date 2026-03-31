import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

interface CTABannerProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  variant?: "accent" | "primary";
}

export default function CTABanner({
  title,
  description,
  buttonText,
  buttonHref,
  variant = "accent",
}: CTABannerProps) {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light">
      {/* Decorative orbs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/8 rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDelay: "1.5s" }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          {/* Icon badge */}
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/15 border border-accent/20 backdrop-blur-sm">
            <Sparkles className="h-7 w-7 text-accent" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight max-w-3xl">
            {title}
          </h2>
          <p className="text-lg sm:text-xl text-white/60 max-w-2xl mb-10 leading-relaxed">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={buttonHref}
              className="btn-shimmer inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-primary-dark font-bold px-8 py-4 rounded-xl shadow-lg shadow-accent/25 transition-all hover:-translate-y-0.5"
            >
              {buttonText}
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold px-8 py-4 rounded-xl backdrop-blur-sm border border-white/10 transition-all hover:-translate-y-0.5"
            >
              Get a Free Strategy Call
            </Link>
          </div>

          {/* Trust line */}
          <p className="mt-8 text-sm text-white/40">
            No commitment required. Free tools, real results.
          </p>
        </div>
      </div>
    </section>
  );
}
