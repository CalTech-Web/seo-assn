"use client";

import { useState, useEffect } from "react";
import { Menu, X, Search } from "lucide-react";

const navLinks = [
  { label: "SEO Checklist", href: "#audit" },
  { label: "Keyword Quiz", href: "#quiz" },
  { label: "Pricing Guide", href: "#pricing" },
  { label: "Get Started", href: "#brief" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 group"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white">
              <Search className="h-5 w-5" />
            </div>
            <span
              className={`text-lg font-bold transition-colors ${
                scrolled ? "text-primary" : "text-white"
              }`}
            >
              The SEO Association
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-text-muted hover:text-primary hover:bg-surface"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                } ${
                  link.label === "Get Started"
                    ? "!bg-accent !text-primary-dark font-semibold hover:!bg-accent-light"
                    : ""
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 rounded-lg ${
              scrolled ? "text-primary" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-border shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium text-text-muted hover:text-primary hover:bg-surface transition-colors ${
                  link.label === "Get Started"
                    ? "!bg-accent !text-primary-dark font-semibold"
                    : ""
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
