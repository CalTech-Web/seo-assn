import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import CTABanner from "@/components/CTABanner";
import { Shield, Heart, Eye, ArrowRight, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "About The SEO Association | Free SEO Resources by CalTech Web",
  description:
    "The SEO Association is a free educational resource by CalTech Web, helping small business owners understand SEO without the jargon, pressure, or hidden agendas.",
  alternates: { canonical: "https://seoassn.com/about" },
  openGraph: {
    title: "About Us | The SEO Association",
    description:
      "Free SEO education for small business owners. Powered by CalTech Web.",
    url: "https://seoassn.com/about",
  },
};

const values = [
  {
    icon: Eye,
    title: "Transparency First",
    description:
      "We show you real pricing, real timelines, and real expectations. No bait-and-switch tactics. No hidden fees. No confusing packages designed to upsell you.",
  },
  {
    icon: Heart,
    title: "Education Over Sales",
    description:
      "We believe informed clients make the best clients. Every tool and guide on this site exists to help you make a confident, educated decision about SEO, whether or not you work with us.",
  },
  {
    icon: Shield,
    title: "Honest Recommendations",
    description:
      "If SEO is not right for your business, we will tell you. If you should start small, we will say so. Our reputation depends on giving advice that actually helps.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12">
          <Breadcrumb items={[{ label: "About" }]} />

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight mb-6">
            About The SEO Association
          </h1>
          <p className="text-lg text-text-muted mb-10 leading-relaxed">
            We are a free educational resource for small business owners who
            want to understand SEO without the jargon, pressure, or
            guesswork.
          </p>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">
                Why We Built This
              </h2>
              <p className="text-text-muted leading-relaxed mb-4">
                Most small business owners know they &quot;should be doing
                SEO&quot; but have no idea what that actually means, what it
                should cost, or how to tell if an SEO company is giving them
                a fair deal.
              </p>
              <p className="text-text-muted leading-relaxed mb-4">
                We have seen too many businesses get burned by agencies that
                over-promise, under-deliver, or charge premium prices for
                work that does not move the needle. We built The SEO
                Association to change that, to give business owners the
                knowledge they need to make smart decisions about their
                online presence.
              </p>
              <p className="text-text-muted leading-relaxed">
                Every tool on this site is genuinely free. The audit
                checklist, the keyword quiz, the pricing guide, and the
                brief generator are all designed to help you whether or not
                you ever hire anyone for SEO.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-6">
                Our Values
              </h2>
              <div className="grid grid-cols-1 gap-5">
                {values.map((value) => {
                  const Icon = value.icon;
                  return (
                    <div
                      key={value.title}
                      className="bg-surface rounded-xl p-6 border border-border/50 flex gap-4"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 shrink-0">
                        <Icon className="h-5 w-5 text-accent-dark" />
                      </div>
                      <div>
                        <h3 className="font-bold text-primary mb-1">
                          {value.title}
                        </h3>
                        <p className="text-sm text-text-muted leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">
                Powered by CalTech Web
              </h2>
              <p className="text-text-muted leading-relaxed mb-4">
                The SEO Association is powered by{" "}
                <a
                  href="https://caltechweb.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-dark hover:text-accent font-medium inline-flex items-center gap-1"
                >
                  CalTech Web
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
                , a professional web design and SEO company that builds
                websites and grows online visibility for small businesses
                across the country.
              </p>
              <p className="text-text-muted leading-relaxed mb-4">
                CalTech Web is the recommended in-house SEO partner
                throughout this site. When you use our brief generator and
                opt in, your project details go directly to the CalTech Web
                team for a free, no-pressure strategy call.
              </p>
              <p className="text-text-muted leading-relaxed">
                But let us be clear: you do not have to work with CalTech
                Web to benefit from this site. The tools and guides are
                useful regardless of who (if anyone) you hire for SEO.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">
                Get in Touch
              </h2>
              <p className="text-text-muted leading-relaxed mb-6">
                Have a question about SEO or want to discuss your
                situation? We are happy to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-primary-dark font-bold px-6 py-3 rounded-xl shadow-lg shadow-accent/25 transition-all hover:-translate-y-0.5"
                >
                  Contact Us
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/get-started"
                  className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-light text-white font-bold px-6 py-3 rounded-xl transition-all hover:-translate-y-0.5"
                >
                  Get a Free Strategy Call
                </Link>
              </div>
            </section>
          </div>
        </div>

        <CTABanner
          title="Ready to Start Your SEO Journey?"
          description="Take the first step with our free SEO audit checklist. It takes less than 5 minutes."
          buttonText="Start the SEO Audit"
          buttonHref="/seo-audit-checklist"
          variant="primary"
        />
      </main>
      <Footer />
    </>
  );
}
