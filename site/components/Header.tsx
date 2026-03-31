"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

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

const mainLinks = [
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

function Dropdown({
  label,
  links,
  scrolled,
  pathname,
}: {
  label: string;
  links: { label: string; href: string }[];
  scrolled: boolean;
  pathname: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isActive = links.some((l) => pathname === l.href);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
          scrolled
            ? isActive
              ? "text-primary bg-surface"
              : "text-text-muted hover:text-primary hover:bg-surface"
            : isActive
            ? "text-white bg-white/15"
            : "text-white/80 hover:text-white hover:bg-white/10"
        }`}
      >
        {label}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-lg border border-border/50 py-2 z-50">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block px-4 py-2.5 text-sm transition-colors ${
                pathname === link.href
                  ? "text-primary bg-surface font-medium"
                  : "text-text-muted hover:text-primary hover:bg-surface"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileToolsOpen, setMobileToolsOpen] = useState(false);
  const [mobileLearnOpen, setMobileLearnOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const showTransparent = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showTransparent
          ? "bg-transparent"
          : "bg-white/95 backdrop-blur-md border-b border-border/30 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.03)]"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <Image src="/logo.svg" alt="The SEO Association" width={36} height={36} className="h-9 w-9" />
            <span
              className={`text-lg font-bold transition-colors ${
                showTransparent ? "text-white" : "text-primary"
              }`}
            >
              The SEO Association
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            <Dropdown
              label="Free Tools"
              links={toolLinks}
              scrolled={!showTransparent}
              pathname={pathname}
            />
            <Dropdown
              label="Learn SEO"
              links={learnLinks}
              scrolled={!showTransparent}
              pathname={pathname}
            />
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  showTransparent
                    ? pathname === link.href
                      ? "text-white bg-white/15"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                    : pathname === link.href
                    ? "text-primary bg-surface"
                    : "text-text-muted hover:text-primary hover:bg-surface"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/get-started"
              className="ml-2 px-4 py-2 rounded-lg text-sm font-bold bg-accent text-primary-dark hover:bg-accent-light transition-colors"
            >
              Get Started
            </Link>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden p-2 rounded-lg ${
              showTransparent ? "text-white" : "text-primary"
            }`}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-border shadow-lg max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-3 space-y-1">
            {/* Tools accordion */}
            <button
              onClick={() => setMobileToolsOpen(!mobileToolsOpen)}
              className="flex items-center justify-between w-full px-4 py-3 text-sm font-semibold text-primary"
            >
              Free Tools
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  mobileToolsOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {mobileToolsOpen &&
              toolLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block pl-8 pr-4 py-2.5 text-sm text-text-muted hover:text-primary rounded-lg hover:bg-surface"
                >
                  {link.label}
                </Link>
              ))}

            {/* Learn accordion */}
            <button
              onClick={() => setMobileLearnOpen(!mobileLearnOpen)}
              className="flex items-center justify-between w-full px-4 py-3 text-sm font-semibold text-primary"
            >
              Learn SEO
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  mobileLearnOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {mobileLearnOpen &&
              learnLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block pl-8 pr-4 py-2.5 text-sm text-text-muted hover:text-primary rounded-lg hover:bg-surface"
                >
                  {link.label}
                </Link>
              ))}

            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-sm font-medium text-text-muted hover:text-primary rounded-lg hover:bg-surface"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/get-started"
              className="block px-4 py-3 text-sm font-bold bg-accent text-primary-dark rounded-lg text-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
