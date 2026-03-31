import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
    <section
      className={`relative py-16 overflow-hidden ${
        variant === "primary"
          ? "bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white"
          : "bg-gradient-to-br from-amber-50 via-accent/10 to-amber-50/50"
      }`}
    >
      {/* Decorative orbs */}
      <div
        className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl animate-pulse-slow ${
          variant === "primary" ? "bg-accent/10" : "bg-accent/15"
        }`}
      />
      <div
        className={`absolute bottom-0 left-0 w-48 h-48 rounded-full blur-3xl animate-pulse-slow ${
          variant === "primary" ? "bg-blue-500/8" : "bg-amber-300/20"
        }`}
        style={{ animationDelay: "1.5s" }}
      />
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <h2
          className={`text-2xl sm:text-3xl font-bold mb-4 ${
            variant === "primary" ? "text-white" : "text-primary"
          }`}
        >
          {title}
        </h2>
        <p
          className={`text-lg mb-8 ${
            variant === "primary" ? "text-white/70" : "text-text-muted"
          }`}
        >
          {description}
        </p>
        <Link
          href={buttonHref}
          className={`btn-shimmer inline-flex items-center gap-2 font-bold px-8 py-4 rounded-xl shadow-lg transition-all hover:-translate-y-0.5 ${
            variant === "primary"
              ? "bg-accent hover:bg-accent-light text-primary-dark shadow-accent/25"
              : "bg-primary hover:bg-primary-light text-white"
          }`}
        >
          {buttonText}
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </section>
  );
}
