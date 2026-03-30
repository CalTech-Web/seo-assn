import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Mail, ArrowRight, ExternalLink, MessageSquare } from "lucide-react";

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
      <main className="pt-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12">
          <Breadcrumb items={[{ label: "Contact" }]} />

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight mb-6">
            Get in Touch
          </h1>
          <p className="text-lg text-text-muted mb-10 leading-relaxed">
            Have a question about SEO? Want to discuss your business
            situation? We are happy to help, no sales pitch required.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            <Link
              href="/get-started"
              className="group bg-accent/5 rounded-2xl border-2 border-accent/20 p-6 hover:border-accent/40 hover:shadow-lg transition-all"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 mb-4">
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
            </Link>

            <a
              href="mailto:saif@caltechweb.com"
              className="group bg-surface rounded-2xl border-2 border-border/50 p-6 hover:border-primary/20 hover:shadow-lg transition-all"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-lg font-bold text-primary mb-2 group-hover:text-accent-dark transition-colors">
                Email Us
              </h2>
              <p className="text-sm text-text-muted mb-4 leading-relaxed">
                Send us your question directly and we will get back to you
                within 1 business day.
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                saif@caltechweb.com
                <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          </div>

          <div className="bg-primary rounded-2xl p-8 text-center">
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
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-primary-dark font-bold px-6 py-3 rounded-xl transition-all hover:-translate-y-0.5"
            >
              Visit CalTech Web
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
