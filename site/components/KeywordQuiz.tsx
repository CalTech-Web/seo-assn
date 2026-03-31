"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, BarChart3 } from "lucide-react";

interface Question {
  question: string;
  type: "text" | "select";
  options?: string[];
  scores?: number[];
}

const questions: Question[] = [
  {
    question: "What industry or niche is your business in?",
    type: "text",
  },
  {
    question: "Where do your customers come from?",
    type: "select",
    options: [
      "Just my local city or town",
      "A regional area (multiple cities/counties)",
      "Nationwide",
      "International",
    ],
    scores: [1, 2, 3, 3],
  },
  {
    question:
      "When you Google your main service + your city, what do you see on page 1?",
    type: "select",
    options: [
      "Mostly big national companies (Yelp, HomeAdvisor, Forbes, etc.)",
      "A mix of big sites and local businesses",
      "Mostly local businesses like mine",
      "I'm not sure / haven't checked",
    ],
    scores: [3, 2, 1, 2],
  },
  {
    question:
      "How many competitors do you have locally offering the same service?",
    type: "select",
    options: [
      "Almost none — I'm one of very few",
      "A handful (3–10)",
      "A lot (10–30)",
      "It's extremely competitive",
    ],
    scores: [1, 1, 2, 3],
  },
  {
    question: "Does your business rely heavily on people finding you online?",
    type: "select",
    options: [
      "Yes — most of my leads come from search",
      "Somewhat — it's one of several channels",
      "Not really — most business is referrals",
      "I don't know yet",
    ],
    scores: [3, 2, 1, 2],
  },
];

function getCompetitionResult(score: number) {
  if (score >= 9) {
    return {
      level: "High Competition",
      color: "danger",
      message:
        "Your market is competitive, but that means there's real money in ranking here. You'll need a focused, ongoing SEO strategy to break through. CalTech Web has done this for businesses just like yours.",
      cta: "See What SEO Would Cost",
    };
  }
  if (score >= 6) {
    return {
      level: "Medium Competition",
      color: "warning",
      message:
        "Your market has real opportunity. With the right targeting, you could rank well without an enormous budget. Let's look at what makes sense for you.",
      cta: "See Pricing Options",
    };
  }
  return {
    level: "Low Competition",
    color: "success",
    message:
      "Good news: your market isn't saturated. Even a modest SEO investment could put you at the top of Google relatively quickly.",
    cta: "See How Affordable This Could Be",
  };
}

export default function KeywordQuiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<(string | number)[]>([]);
  const [textInput, setTextInput] = useState("");
  const [showResult, setShowResult] = useState(false);

  const q = questions[currentQ];
  const progress = ((currentQ + 1) / questions.length) * 100;

  const handleSelect = (idx: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQ] = idx;
    setAnswers(newAnswers);

    if (currentQ < questions.length - 1) {
      setTimeout(() => setCurrentQ(currentQ + 1), 300);
    } else {
      setTimeout(() => {
        setShowResult(true);
        if (
          typeof window !== "undefined" &&
          typeof window.gtag === "function"
        ) {
          window.gtag("event", "quiz_complete", {
            event_label: "keyword_quiz",
          });
        }
      }, 300);
    }
  };

  const handleTextSubmit = () => {
    if (!textInput.trim()) return;
    const newAnswers = [...answers];
    newAnswers[currentQ] = textInput.trim();
    setAnswers(newAnswers);
    setCurrentQ(currentQ + 1);
    setTextInput("");
  };

  const goBack = () => {
    if (showResult) {
      setShowResult(false);
    } else if (currentQ > 0) {
      setCurrentQ(currentQ - 1);
    }
  };

  const totalScore = answers.reduce((sum, ans, idx) => {
    const q = questions[idx];
    if (q.type === "select" && q.scores && typeof ans === "number") {
      return (sum as number) + q.scores[ans];
    }
    return sum as number;
  }, 0) as number;

  const result = getCompetitionResult(totalScore);

  const goToPricing = () => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "cta_click", {
        event_label: `quiz_${result.level.toLowerCase().replace(/\s/g, "_")}`,
      });
    }
    window.location.href = "/seo-pricing";
  };

  return (
    <section id="quiz" className="py-20 lg:py-28 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent-dark text-sm font-semibold mb-4">
            Step 2
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">
            Can You Actually Rank on Google?
          </h2>
          <p className="mt-4 text-lg text-text-muted max-w-2xl mx-auto">
            Not all keywords are created equal. Answer these questions and find
            out how competitive your market really is.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-border/50 p-6 sm:p-10 min-h-[400px] flex flex-col">
          {/* Progress bar */}
          {!showResult && (
            <div className="mb-8">
              <div className="flex justify-between text-sm text-text-muted mb-2">
                <span>
                  Question {currentQ + 1} of {questions.length}
                </span>
                <span>{Math.round(progress)}%</span>
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
          )}

          <div className="flex-1 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {showResult ? (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  className="text-center"
                >
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                    <BarChart3 className="h-8 w-8 text-primary" />
                  </div>

                  <div
                    className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-4 ${
                      result.color === "danger"
                        ? "bg-danger/10 text-danger"
                        : result.color === "warning"
                        ? "bg-warning/10 text-warning"
                        : "bg-success/10 text-success"
                    }`}
                  >
                    {result.level}
                  </div>

                  <p className="text-lg text-text max-w-lg mx-auto mb-6 leading-relaxed">
                    {result.message}
                  </p>

                  <div className="bg-surface rounded-xl p-5 max-w-lg mx-auto mb-8 text-left">
                    <p className="text-sm text-text-muted leading-relaxed">
                      <strong className="text-text">
                        What is keyword difficulty?
                      </strong>{" "}
                      It measures how hard it is to rank on the first page of
                      Google for a specific search term. The more businesses
                      competing for that term, and the stronger their websites
                      are, the harder it is to break through. Understanding this
                      helps you set realistic expectations and focus your budget
                      where it matters most.
                    </p>
                  </div>

                  <button
                    onClick={goToPricing}
                    className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-primary-dark font-bold px-8 py-4 rounded-xl shadow-lg shadow-accent/25 transition-all hover:-translate-y-0.5"
                  >
                    {result.cta}
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key={currentQ}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-primary mb-8">
                    {q.question}
                  </h3>

                  {q.type === "text" ? (
                    <div>
                      <input
                        type="text"
                        value={textInput}
                        onChange={(e) => setTextInput(e.target.value)}
                        onKeyDown={(e) =>
                          e.key === "Enter" && handleTextSubmit()
                        }
                        placeholder='e.g., "plumbing," "wedding photography," "accounting"'
                        className="w-full px-5 py-4 rounded-xl border border-border bg-surface text-text placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent text-lg"
                      />
                      <button
                        onClick={handleTextSubmit}
                        disabled={!textInput.trim()}
                        className="mt-4 inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white font-semibold px-6 py-3 rounded-xl transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        Continue
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {q.options?.map((opt, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSelect(idx)}
                          className={`w-full text-left px-5 py-4 rounded-xl border transition-all ${
                            answers[currentQ] === idx
                              ? "border-accent bg-accent/5 ring-2 ring-accent/30"
                              : "border-border hover:border-primary/30 hover:bg-surface"
                          }`}
                        >
                          <span className="text-base text-text">{opt}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Back button */}
          {(currentQ > 0 || showResult) && (
            <button
              onClick={goBack}
              className="mt-6 inline-flex items-center gap-1 text-sm text-text-muted hover:text-primary transition-colors self-start"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
