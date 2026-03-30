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
    <section className="py-16 bg-surface">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-primary mb-8 text-center">
          {title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group bg-white rounded-xl border border-border/50 p-6 hover:border-accent/30 hover:shadow-md transition-all"
            >
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
