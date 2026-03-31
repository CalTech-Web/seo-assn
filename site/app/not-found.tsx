import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, ArrowRight, Home, BookOpen, Wrench } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-[70vh] flex items-center justify-center py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent/10">
            <Search className="h-10 w-10 text-accent-dark" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-text-muted mb-10 max-w-md mx-auto">
            The page you are looking for does not exist or may have been moved.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <Link
              href="/"
              className="group flex flex-col items-center gap-2 rounded-xl border border-border/50 bg-white p-5 hover:border-accent/30 hover:shadow-card-hover transition-all"
            >
              <Home className="h-6 w-6 text-accent-dark" />
              <span className="text-sm font-semibold text-primary group-hover:text-accent-dark transition-colors">
                Home
              </span>
            </Link>
            <Link
              href="/seo-audit-checklist"
              className="group flex flex-col items-center gap-2 rounded-xl border border-border/50 bg-white p-5 hover:border-accent/30 hover:shadow-card-hover transition-all"
            >
              <Wrench className="h-6 w-6 text-accent-dark" />
              <span className="text-sm font-semibold text-primary group-hover:text-accent-dark transition-colors">
                Free Tools
              </span>
            </Link>
            <Link
              href="/what-is-seo"
              className="group flex flex-col items-center gap-2 rounded-xl border border-border/50 bg-white p-5 hover:border-accent/30 hover:shadow-card-hover transition-all"
            >
              <BookOpen className="h-6 w-6 text-accent-dark" />
              <span className="text-sm font-semibold text-primary group-hover:text-accent-dark transition-colors">
                Learn SEO
              </span>
            </Link>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent-dark hover:text-accent transition-colors"
          >
            Need help? Contact us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
