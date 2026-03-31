"use client";

import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const toolLinks = [
  { label: "SEO Audit Checklist", href: "/seo-audit-checklist" },
  { label: "Keyword Difficulty Quiz", href: "/keyword-difficulty-quiz" },
  { label: "SEO Pricing Guide", href: "/seo-pricing" },
  { label: "SEO Brief Generator", href: "/get-started" },
];

const learnLinks = [
  { label: "What Is SEO?", href: "/what-is-seo" },
  { label: "Do I Need SEO?", href: "/do-i-need-seo" },
  { label: "How Much Does SEO Cost?", href: "/how-much-does-seo-cost" },
  { label: "How Long Does SEO Take?", href: "/how-long-does-seo-take" },
  { label: "Local SEO Guide", href: "/local-seo-guide" },
  { label: "How to Rank on Google", href: "/how-to-rank-on-google" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
];

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-primary to-primary-dark text-white/70">
      {/* Accent top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image src="/logo.svg" alt="The SEO Association" width={32} height={32} className="h-8 w-8 brightness-0 invert" />
              <span className="text-lg font-bold text-white">
                The SEO Association
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              A free educational resource helping small business owners
              understand and invest in SEO with confidence.
            </p>
          </div>

          {/* Free Tools */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Free Tools
            </h3>
            <ul className="space-y-2">
              {toolLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn SEO */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Learn SEO
            </h3>
            <ul className="space-y-2">
              {learnLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CalTech Web */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              In-House SEO By
            </h3>
            <a
              href="https://caltechweb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors font-semibold"
            >
              CalTech Web
              <ExternalLink className="h-4 w-4" />
            </a>
            <p className="mt-3 text-sm">
              Professional website design, development, and SEO services for
              businesses that want to grow online.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>
            &copy; {new Date().getFullYear()} The SEO Association. All rights
            reserved.
          </p>
          <p>
            Built by{" "}
            <a
              href="https://caltechweb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors"
            >
              CalTech Web
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
