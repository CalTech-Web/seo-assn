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
            className={`rounded-xl border transition-colors ${
              isOpen ? "border-accent/30 bg-accent/5" : "border-border/50 bg-white"
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="flex items-start justify-between w-full px-5 py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-primary pr-4">
                {faq.question}
              </span>
              <ChevronDown
                className={`h-5 w-5 text-text-muted shrink-0 mt-0.5 transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div
                className="px-5 pb-5 text-text-muted leading-relaxed text-sm"
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
