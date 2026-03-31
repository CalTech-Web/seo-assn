import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface RelatedLink {
  title: string;
  description: string;
  href: string;
}

export default function RelatedLinks({
  title = "Continue Learning",
  links,
}: {
  title?: string;
  links: RelatedLink[];
}) {
  return (
    <section className="relative py-16 bg-gradient-to-b from-surface to-white overflow-hidden">
      {/* Subtle decorative orb */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-primary mb-8 text-center">
          {title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative bg-white rounded-xl border border-border/50 p-6 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
            >
              {/* Gradient top border accent */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent to-accent-light opacity-0 group-hover:opacity-100 transition-opacity" />
              <h3 className="font-bold text-primary mb-2 group-hover:text-accent-dark transition-colors">
                {link.title}
              </h3>
              <p className="text-sm text-text-muted mb-3 line-clamp-2">
                {link.description}
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-accent-dark group-hover:gap-2 transition-all">
                Read more
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
