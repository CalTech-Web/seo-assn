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
      className={`py-16 ${
        variant === "primary" ? "bg-primary text-white" : "bg-accent/10"
      }`}
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
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
          className={`inline-flex items-center gap-2 font-bold px-8 py-4 rounded-xl shadow-lg transition-all hover:-translate-y-0.5 ${
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
