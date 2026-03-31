"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`rounded-xl border transition-all duration-300 overflow-hidden ${
              isOpen
                ? "border-accent/30 bg-accent/5 shadow-card"
                : "border-border/50 bg-white hover:border-border hover:shadow-sm"
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="flex items-start justify-between w-full px-5 py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="flex items-start gap-3 pr-4">
                <span
                  className={`inline-flex items-center justify-center h-6 w-6 rounded-full text-xs font-bold shrink-0 mt-0.5 transition-colors ${
                    isOpen
                      ? "bg-accent text-primary-dark"
                      : "bg-surface text-text-muted"
                  }`}
                >
                  {idx + 1}
                </span>
                <span className="font-semibold text-primary">
                  {faq.question}
                </span>
              </span>
              <ChevronDown
                className={`h-5 w-5 text-text-muted shrink-0 mt-0.5 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className="grid transition-all duration-300 ease-in-out"
              style={{
                gridTemplateRows: isOpen ? "1fr" : "0fr",
              }}
            >
              <div className="overflow-hidden">
                <div
                  className={`px-5 pb-5 pl-14 text-text-muted leading-relaxed text-sm transition-opacity duration-300 ${
                    isOpen ? "opacity-100" : "opacity-0"
                  }`}
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
