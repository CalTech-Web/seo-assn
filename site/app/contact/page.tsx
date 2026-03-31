import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { ArrowRight, ExternalLink, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | The SEO Association",
  description:
    "Get in touch with The SEO Association and CalTech Web. Ask questions about SEO, request a free strategy call, or build your personalized SEO brief.",
  alternates: { canonical: "https://seoassn.com/contact" },
  openGraph: {
    title: "Contact The SEO Association",
    description:
      "Questions about SEO? We are here to help. No pressure, no sales pitch.",
    url: "https://seoassn.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Get in Touch"
          subtitle="Have a question about SEO? Want to discuss your business situation? We are happy to help, no sales pitch required."
          breadcrumbs={[{ label: "Contact" }]}
          image={{ src: "/images/cta-magnifier-growth.svg", alt: "Contact and growth illustration" }}
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <ContactForm />
            </div>

            {/* Sidebar cards */}
            <div className="order-1 lg:order-2 space-y-6">
              <Link
                href="/get-started"
                className="group relative block bg-gradient-to-br from-amber-50/80 to-accent/5 rounded-2xl border-2 border-accent/20 p-6 hover:border-accent/40 hover:shadow-card-hover transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent/15 to-accent-light/15 mb-4 border border-accent/20">
                    <MessageSquare className="h-6 w-6 text-accent-dark" />
                  </div>
                  <h2 className="text-lg font-bold text-primary mb-2 group-hover:text-accent-dark transition-colors">
                    Free Strategy Call
                  </h2>
                  <p className="text-sm text-text-muted mb-4 leading-relaxed">
                    Build your SEO brief and get a personalized strategy
                    consultation from CalTech Web. No commitment, no pressure.
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-dark group-hover:gap-2.5 transition-all">
                    Build your SEO brief
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>

              <div className="bg-white rounded-2xl border border-border/50 p-6">
                <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-4">
                  Explore Our Free Tools
                </h3>
                <div className="space-y-2">
                  <Link href="/seo-audit-checklist" className="block text-sm font-medium text-primary hover:text-accent-dark transition-colors py-1">
                    SEO Audit Checklist
                  </Link>
                  <Link href="/keyword-difficulty-quiz" className="block text-sm font-medium text-primary hover:text-accent-dark transition-colors py-1">
                    Keyword Difficulty Quiz
                  </Link>
                  <Link href="/seo-pricing" className="block text-sm font-medium text-primary hover:text-accent-dark transition-colors py-1">
                    SEO Pricing Guide
                  </Link>
                  <Link href="/faq" className="block text-sm font-medium text-primary hover:text-accent-dark transition-colors py-1">
                    Frequently Asked Questions
                  </Link>
                </div>
              </div>

              <div className="relative rounded-2xl p-8 text-center overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light">
                <div className="absolute top-0 right-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/8 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold text-white mb-3">
                    Powered by CalTech Web
                  </h2>
                  <p className="text-white/70 mb-6 max-w-lg mx-auto">
                    The SEO Association is a free educational resource by CalTech
                    Web, a professional web design and SEO company helping small
                    businesses grow online.
                  </p>
                  <a
                    href="https://caltechweb.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-shimmer inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-primary-dark font-bold px-6 py-3 rounded-xl transition-all hover:-translate-y-0.5"
                  >
                    Visit CalTech Web
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              name: "Contact The SEO Association",
              url: "https://seoassn.com/contact",
              mainEntity: {
                "@type": "Organization",
                name: "The SEO Association",
                url: "https://seoassn.com",
                email: "brandon@caltechweb.com",
              },
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://seoassn.com",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Contact",
                    item: "https://seoassn.com/contact",
                  },
                ],
              },
            }),
          }}
        />
      </main>
      <Footer />
    </>
  );
}
