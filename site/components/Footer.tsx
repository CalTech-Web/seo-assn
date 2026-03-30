"use client";

import { Search, ExternalLink } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "#" },
  { label: "SEO Checklist", href: "#audit" },
  { label: "Pricing Guide", href: "#pricing" },
  { label: "Get a Free Strategy Call", href: "#brief" },
  { label: "Privacy Policy", href: "/privacy" },
];

export default function Footer() {
  const handleClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      if (href === "#") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-primary-dark text-white/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
                <Search className="h-4 w-4 text-accent" />
              </div>
              <span className="text-lg font-bold text-white">
                The SEO Association
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              A free educational resource helping small business owners
              understand and invest in SEO with confidence.
            </p>
          </div>

          {/* Center */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
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
          <p>&copy; {new Date().getFullYear()} The SEO Association. All rights reserved.</p>
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
