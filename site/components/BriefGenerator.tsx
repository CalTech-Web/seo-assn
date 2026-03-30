"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Search,
  Target,
  DollarSign,
  MessageSquare,
  User,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Download,
  Send,
  Loader2,
} from "lucide-react";

const steps = [
  { title: "Your Business", icon: Building2 },
  { title: "SEO Situation", icon: Search },
  { title: "Your Goals", icon: Target },
  { title: "Budget & Timeline", icon: DollarSign },
  { title: "Additional Notes", icon: MessageSquare },
  { title: "Contact Info", icon: User },
];

interface FormData {
  businessName: string;
  industry: string;
  location: string;
  yearsInBusiness: string;
  websiteUrl: string;
  doneSEO: string;
  seoPastExperience: string;
  knowKeywords: string;
  targetKeywords: string;
  competitors: string;
  primaryGoal: string;
  successIn12Months: string;
  biggestFrustration: string;
  budgetRange: string;
  startTimeline: string;
  urgency: number;
  additionalNotes: string;
  fullName: string;
  email: string;
  phone: string;
  bestTime: string;
  sendToCalTech: boolean;
  agreeToContact: boolean;
}

const initialData: FormData = {
  businessName: "",
  industry: "",
  location: "",
  yearsInBusiness: "",
  websiteUrl: "",
  doneSEO: "",
  seoPastExperience: "",
  knowKeywords: "",
  targetKeywords: "",
  competitors: "",
  primaryGoal: "",
  successIn12Months: "",
  biggestFrustration: "",
  budgetRange: "",
  startTimeline: "",
  urgency: 3,
  additionalNotes: "",
  fullName: "",
  email: "",
  phone: "",
  bestTime: "",
  sendToCalTech: true,
  agreeToContact: true,
};

export default function BriefGenerator() {
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState<FormData>(initialData);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof FormData, value: string | number | boolean) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const progress = ((currentStep + 1) / steps.length) * 100;

  const canProceed = () => {
    switch (currentStep) {
      case 0:
        return data.businessName && data.industry && data.location;
      case 1:
        return data.doneSEO;
      case 2:
        return data.primaryGoal;
      case 3:
        return data.budgetRange && data.startTimeline;
      case 4:
        return true;
      case 5:
        return data.fullName && data.email && data.agreeToContact;
      default:
        return false;
    }
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const generatePDF = async () => {
    const { jsPDF } = await import("jspdf");
    const doc = new jsPDF();

    const pageWidth = doc.internal.pageSize.getWidth();
    let y = 20;

    // Header
    doc.setFillColor(15, 23, 42);
    doc.rect(0, 0, pageWidth, 40, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(20);
    doc.setFont("helvetica", "bold");
    doc.text("The SEO Association", 20, 18);
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text("SEO Brief", 20, 28);
    doc.text(`Generated: ${new Date().toLocaleDateString()}`, 20, 35);

    y = 55;
    doc.setTextColor(15, 23, 42);

    const addSection = (title: string, items: [string, string][]) => {
      if (y > 250) {
        doc.addPage();
        y = 20;
      }
      doc.setFontSize(14);
      doc.setFont("helvetica", "bold");
      doc.text(title, 20, y);
      y += 2;
      doc.setDrawColor(245, 158, 11);
      doc.setLineWidth(0.5);
      doc.line(20, y, pageWidth - 20, y);
      y += 8;

      doc.setFontSize(10);
      items.forEach(([label, value]) => {
        if (!value) return;
        if (y > 270) {
          doc.addPage();
          y = 20;
        }
        doc.setFont("helvetica", "bold");
        doc.text(`${label}:`, 20, y);
        doc.setFont("helvetica", "normal");
        const lines = doc.splitTextToSize(value, pageWidth - 80);
        doc.text(lines, 75, y);
        y += Math.max(lines.length * 5, 7);
      });
      y += 5;
    };

    addSection("Business Information", [
      ["Business Name", data.businessName],
      ["Industry", data.industry],
      ["Location", data.location],
      ["Years in Business", data.yearsInBusiness],
      ["Website", data.websiteUrl],
    ]);

    addSection("SEO Situation", [
      ["Previous SEO", data.doneSEO],
      ["Past Experience", data.seoPastExperience],
      ["Knows Keywords", data.knowKeywords],
      ["Target Keywords", data.targetKeywords],
      ["Competitors", data.competitors],
    ]);

    addSection("Goals", [
      ["Primary Goal", data.primaryGoal],
      ["Success in 12 Months", data.successIn12Months],
      ["Biggest Frustration", data.biggestFrustration],
    ]);

    addSection("Budget & Timeline", [
      ["Monthly Budget", data.budgetRange],
      ["Start Timeline", data.startTimeline],
      ["Urgency (1-5)", String(data.urgency)],
    ]);

    if (data.additionalNotes) {
      addSection("Additional Notes", [["Notes", data.additionalNotes]]);
    }

    addSection("Contact Information", [
      ["Name", data.fullName],
      ["Email", data.email],
      ["Phone", data.phone || "Not provided"],
      ["Best Time to Contact", data.bestTime],
    ]);

    // Footer
    const pageCount = doc.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFontSize(8);
      doc.setTextColor(148, 163, 184);
      doc.text(
        "Powered by CalTech Web | caltechweb.com",
        pageWidth / 2,
        doc.internal.pageSize.getHeight() - 10,
        { align: "center" }
      );
    }

    doc.save(`SEO-Brief-${data.businessName.replace(/\s+/g, "-")}.pdf`);
  };

  const handleSubmit = async () => {
    if (!canProceed()) return;
    setSubmitting(true);

    try {
      // Generate PDF
      await generatePDF();

      // Send to caltechweb-forms if checked
      if (data.sendToCalTech) {
        await fetch("https://forms.caltechweb.com/api/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            domain: "seoassn.com",
            subject: `New SEO Lead — ${data.businessName} — ${data.budgetRange}`,
            fields: {
              "Business Name": data.businessName,
              Industry: data.industry,
              Location: data.location,
              "Years in Business": data.yearsInBusiness,
              Website: data.websiteUrl,
              "Previous SEO": data.doneSEO,
              "Past SEO Experience": data.seoPastExperience,
              "Knows Target Keywords": data.knowKeywords,
              "Target Keywords": data.targetKeywords,
              Competitors: data.competitors,
              "Primary Goal": data.primaryGoal,
              "Success in 12 Months": data.successIn12Months,
              "Biggest Frustration": data.biggestFrustration,
              "Monthly Budget": data.budgetRange,
              "Start Timeline": data.startTimeline,
              "Urgency (1-5)": String(data.urgency),
              "Additional Notes": data.additionalNotes,
              Name: data.fullName,
              Email: data.email,
              Phone: data.phone || "Not provided",
              "Best Time to Contact": data.bestTime,
            },
          }),
        }).catch(() => {
          // silently handle - form still submitted locally
        });
      }

      if (
        typeof window !== "undefined" &&
        typeof window.gtag === "function"
      ) {
        window.gtag("event", "form_submit", {
          event_label: "seo_brief_complete",
          value: data.budgetRange,
        });
      }

      setSubmitted(true);
    } catch {
      // PDF was already downloaded
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section id="brief" className="py-20 lg:py-28 bg-surface">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-sm border border-border/50 p-10"
          >
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-success/10">
              <CheckCircle2 className="h-8 w-8 text-success" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">
              Your SEO Brief Is Ready!
            </h3>
            <p className="text-text-muted leading-relaxed mb-6">
              Your SEO brief has been downloaded. A CalTech Web SEO strategist
              will reach out within 1 business day to walk you through your
              options, no pressure, no commitment.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-accent-dark hover:text-accent font-medium"
            >
              Back to top
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="brief" className="py-20 lg:py-28 bg-surface">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent-dark text-sm font-semibold mb-4">
            Step 4
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">
            Let&apos;s Build Your SEO Roadmap
          </h2>
          <p className="mt-4 text-lg text-text-muted max-w-2xl mx-auto">
            Fill this in once. Get a personalized SEO brief you can download,
            and optionally send directly to CalTech Web for a free strategy
            call.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-border/50 p-6 sm:p-10">
          {/* Step indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                {(() => {
                  const Icon = steps[currentStep].icon;
                  return <Icon className="h-5 w-5 text-accent-dark" />;
                })()}
                <span className="text-sm font-semibold text-primary">
                  {steps[currentStep].title}
                </span>
              </div>
              <span className="text-sm text-text-muted">
                {currentStep + 1} of {steps.length}
              </span>
            </div>
            <div className="h-2 bg-surface rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-accent rounded-full"
                initial={false}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="min-h-[320px]"
            >
              {/* Step 0: Your Business */}
              {currentStep === 0 && (
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-text mb-1.5">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      value={data.businessName}
                      onChange={(e) => update("businessName", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text mb-1.5">
                      Industry / Type of Business *
                    </label>
                    <input
                      type="text"
                      value={data.industry}
                      onChange={(e) => update("industry", e.target.value)}
                      placeholder='e.g., "Plumbing," "Dental Practice"'
                      className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text mb-1.5">
                      Business Location (City, State) *
                    </label>
                    <input
                      type="text"
                      value={data.location}
                      onChange={(e) => update("location", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text mb-1.5">
                      How long have you been in business?
                    </label>
                    <select
                      value={data.yearsInBusiness}
                      onChange={(e) =>
                        update("yearsInBusiness", e.target.value)
                      }
                      className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                    >
                      <option value="">Select...</option>
                      <option value="Less than 1 year">Less than 1 year</option>
                      <option value="1–3 years">1–3 years</option>
                      <option value="3–10 years">3–10 years</option>
                      <option value="10+ years">10+ years</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text mb-1.5">
                      Current Website URL
                    </label>
                    <input
                      type="url"
                      value={data.websiteUrl}
                      onChange={(e) => update("websiteUrl", e.target.value)}
                      placeholder="https://example.com"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                    />
                  </div>
                </div>
              )}

              {/* Step 1: SEO Situation */}
              {currentStep === 1 && (
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-text mb-1.5">
                      Have you done any SEO before? *
                    </label>
                    <div className="flex gap-3">
                      {["Yes", "No", "Not sure"].map((opt) => (
                        <button
                          key={opt}
                          onClick={() => update("doneSEO", opt)}
                          className={`flex-1 px-4 py-3 rounded-xl border text-sm font-medium transition-all ${
                            data.doneSEO === opt
                              ? "border-accent bg-accent/5 ring-2 ring-accent/30 text-accent-dark"
                              : "border-border hover:border-primary/30"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                  {data.doneSEO === "Yes" && (
                    <div>
                      <label className="block text-sm font-medium text-text mb-1.5">
                        What happened? (optional)
                      </label>
                      <textarea
                        value={data.seoPastExperience}
                        onChange={(e) =>
                          update("seoPastExperience", e.target.value)
                        }
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent resize-none"
                      />
                    </div>
                  )}
                  <div>
                    <label className="block text-sm font-medium text-text mb-1.5">
                      Do you know what keywords you want to rank for?
                    </label>
                    <div className="flex gap-3">
                      {["Yes", "No", "Somewhat"].map((opt) => (
                        <button
                          key={opt}
                          onClick={() => update("knowKeywords", opt)}
                          className={`flex-1 px-4 py-3 rounded-xl border text-sm font-medium transition-all ${
                            data.knowKeywords === opt
                              ? "border-accent bg-accent/5 ring-2 ring-accent/30 text-accent-dark"
                              : "border-border hover:border-primary/30"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                  {(data.knowKeywords === "Yes" ||
                    data.knowKeywords === "Somewhat") && (
                    <div>
                      <label className="block text-sm font-medium text-text mb-1.5">
                        List your top 3-5 target keywords
                      </label>
                      <textarea
                        value={data.targetKeywords}
                        onChange={(e) =>
                          update("targetKeywords", e.target.value)
                        }
                        rows={3}
                        placeholder="e.g., plumber near me, emergency plumbing services"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent resize-none"
                      />
                    </div>
                  )}
                  <div>
                    <label className="block text-sm font-medium text-text mb-1.5">
                      Who are your top 2-3 competitors? (business names or URLs)
                    </label>
                    <textarea
                      value={data.competitors}
                      onChange={(e) => update("competitors", e.target.value)}
                      rows={2}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent resize-none"
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Goals */}
              {currentStep === 2 && (
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-text mb-1.5">
                      What is the #1 thing you want SEO to achieve? *
                    </label>
                    <select
                      value={data.primaryGoal}
                      onChange={(e) => update("primaryGoal", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                    >
                      <option value="">Select...</option>
                      <option value="More website traffic">
                        More website traffic
                      </option>
                      <option value="More local foot traffic">
                        More local foot traffic
                      </option>
                      <option value="More leads/inquiries">
                        More leads/inquiries
                      </option>
                      <option value="More online sales">
                        More online sales
                      </option>
                      <option value="Better brand visibility">
                        Better brand visibility
                      </option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text mb-1.5">
                      What does success look like in 12 months?
                    </label>
                    <textarea
                      value={data.successIn12Months}
                      onChange={(e) =>
                        update("successIn12Months", e.target.value)
                      }
                      rows={3}
                      placeholder="e.g., ranking on page 1 for my main service, getting 20+ leads per month..."
                      className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent resize-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text mb-1.5">
                      What is your current biggest frustration with your online
                      presence?
                    </label>
                    <textarea
                      value={data.biggestFrustration}
                      onChange={(e) =>
                        update("biggestFrustration", e.target.value)
                      }
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent resize-none"
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Budget & Timeline */}
              {currentStep === 3 && (
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-text mb-1.5">
                      Monthly SEO budget range *
                    </label>
                    <select
                      value={data.budgetRange}
                      onChange={(e) => update("budgetRange", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                    >
                      <option value="">Select...</option>
                      <option value="$300 – $800 (One-Time Audit)">
                        $300 – $800 (One-Time Audit)
                      </option>
                      <option value="$500 – $1,000/month (Starter)">
                        $500 – $1,000/month (Starter)
                      </option>
                      <option value="$1,000 – $2,500/month (Growth)">
                        $1,000 – $2,500/month (Growth)
                      </option>
                      <option value="$2,500 – $5,000+/month (Authority)">
                        $2,500 – $5,000+/month (Authority)
                      </option>
                      <option value="Not sure yet">Not sure yet</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text mb-1.5">
                      When do you want to start? *
                    </label>
                    <select
                      value={data.startTimeline}
                      onChange={(e) =>
                        update("startTimeline", e.target.value)
                      }
                      className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                    >
                      <option value="">Select...</option>
                      <option value="Immediately">Immediately</option>
                      <option value="Within 1 month">Within 1 month</option>
                      <option value="Within 3 months">Within 3 months</option>
                      <option value="Just exploring">Just exploring</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text mb-1.5">
                      How important is fast results? (1 = Patient, 5 = Urgent)
                    </label>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="text-sm text-text-muted">Patient</span>
                      <div className="flex gap-2 flex-1 justify-center">
                        {[1, 2, 3, 4, 5].map((n) => (
                          <button
                            key={n}
                            onClick={() => update("urgency", n)}
                            className={`h-12 w-12 rounded-xl text-lg font-bold transition-all ${
                              data.urgency === n
                                ? "bg-accent text-primary-dark ring-2 ring-accent/50"
                                : "bg-surface border border-border text-text-muted hover:border-primary/30"
                            }`}
                          >
                            {n}
                          </button>
                        ))}
                      </div>
                      <span className="text-sm text-text-muted">Urgent</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Additional Notes */}
              {currentStep === 4 && (
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-text mb-1.5">
                      Anything else CalTech Web should know about your business
                      or goals?
                    </label>
                    <textarea
                      value={data.additionalNotes}
                      onChange={(e) =>
                        update("additionalNotes", e.target.value)
                      }
                      rows={6}
                      placeholder="Any special circumstances, seasonal factors, specific pages you want to rank, upcoming launches..."
                      className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent resize-none"
                    />
                  </div>
                  <p className="text-sm text-text-muted">
                    This is optional. You can leave this blank if everything is
                    covered above.
                  </p>
                </div>
              )}

              {/* Step 5: Contact Info */}
              {currentStep === 5 && (
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-text mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={data.fullName}
                      onChange={(e) => update("fullName", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text mb-1.5">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      value={data.email}
                      onChange={(e) => update("email", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text mb-1.5">
                      Phone Number (optional)
                    </label>
                    <input
                      type="tel"
                      value={data.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text mb-1.5">
                      Best time to contact
                    </label>
                    <div className="flex gap-3">
                      {["Morning", "Afternoon", "Evening"].map((opt) => (
                        <button
                          key={opt}
                          onClick={() => update("bestTime", opt)}
                          className={`flex-1 px-4 py-3 rounded-xl border text-sm font-medium transition-all ${
                            data.bestTime === opt
                              ? "border-accent bg-accent/5 ring-2 ring-accent/30 text-accent-dark"
                              : "border-border hover:border-primary/30"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-3 pt-3">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={data.sendToCalTech}
                        onChange={(e) =>
                          update("sendToCalTech", e.target.checked)
                        }
                        className="mt-1 h-4 w-4 rounded border-border text-accent focus:ring-accent"
                      />
                      <span className="text-sm text-text">
                        Send my SEO brief to CalTech Web for a free strategy
                        call
                      </span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={data.agreeToContact}
                        onChange={(e) =>
                          update("agreeToContact", e.target.checked)
                        }
                        className="mt-1 h-4 w-4 rounded border-border text-accent focus:ring-accent"
                      />
                      <span className="text-sm text-text">
                        I agree to be contacted by CalTech Web regarding SEO
                        services *
                      </span>
                    </label>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-between">
            {currentStep > 0 ? (
              <button
                onClick={prevStep}
                className="inline-flex items-center gap-1 text-sm text-text-muted hover:text-primary transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </button>
            ) : (
              <div />
            )}

            {currentStep < steps.length - 1 ? (
              <button
                onClick={nextStep}
                disabled={!canProceed()}
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white font-semibold px-6 py-3 rounded-xl transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Continue
                <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!canProceed() || submitting}
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-primary-dark font-bold px-8 py-3 rounded-xl shadow-lg shadow-accent/25 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Download className="h-5 w-5" />
                    Generate My SEO Brief
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
