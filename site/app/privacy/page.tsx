import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy | The SEO Association",
  description:
    "Privacy policy for The SEO Association, a free SEO resource powered by CalTech Web.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Privacy Policy"
          subtitle="How we collect, use, and protect your information."
          breadcrumbs={[{ label: "Privacy Policy" }]}
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
          <div className="prose prose-slate max-w-none space-y-6 text-text-muted leading-relaxed">
          <p>
            <strong>Last updated:</strong> March 30, 2026
          </p>

          <h2 className="text-xl font-bold text-primary mt-8">
            Who We Are
          </h2>
          <p>
            The SEO Association (seoassn.com) is a free educational resource
            operated by CalTech Web. This policy explains how we collect, use,
            and protect information when you use our website and tools.
          </p>

          <h2 className="text-xl font-bold text-primary mt-8">
            What We Collect
          </h2>
          <p>
            When you use our SEO Brief Generator (Step 4), you may choose to
            provide business information, contact details, and SEO-related
            data. This information is submitted voluntarily and is only
            collected when you complete and submit the form.
          </p>
          <p>
            We also collect anonymous usage data through Google Analytics 4 to
            understand how visitors interact with our tools. This includes page
            views, button clicks, and tool completions. No personally
            identifiable information is collected through analytics.
          </p>

          <h2 className="text-xl font-bold text-primary mt-8">
            How We Use Your Information
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              To generate your personalized SEO brief (downloaded as a PDF to
              your device)
            </li>
            <li>
              To send your brief to CalTech Web for a free strategy
              consultation (only if you opt in)
            </li>
            <li>To contact you about SEO services (only with your consent)</li>
            <li>To improve our tools and user experience</li>
          </ul>

          <h2 className="text-xl font-bold text-primary mt-8">
            Data Sharing
          </h2>
          <p>
            We do not sell, rent, or share your personal information with third
            parties. Your data is only shared with CalTech Web if you
            explicitly opt in when submitting the SEO brief form.
          </p>

          <h2 className="text-xl font-bold text-primary mt-8">Cookies</h2>
          <p>
            We use essential cookies for site functionality and Google
            Analytics cookies for anonymous usage tracking. You can disable
            cookies in your browser settings at any time.
          </p>

          <h2 className="text-xl font-bold text-primary mt-8">
            Your Rights
          </h2>
          <p>
            You may request to view, update, or delete any personal information
            we hold about you by contacting us at the email below.
          </p>

          <h2 className="text-xl font-bold text-primary mt-8">Contact</h2>
          <p>
            For privacy-related questions, contact CalTech Web at{" "}
            <a
              href="mailto:saif@caltechweb.com"
              className="text-accent-dark hover:text-accent"
            >
              saif@caltechweb.com
            </a>
            .
          </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
