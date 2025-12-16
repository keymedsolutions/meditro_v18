"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const FAQSections = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question:
        "How is Key Medsolutions UK different from traditional agencies?",
      answer:
        "We’re focused on real partnerships, not just quick placements. Get fully managed RPO or remote teams, with lower costs and better results.",
    },
    {
      question:
        "Why do clients call you the Best Offshore Recruitment Company in the Global?",
      answer:
        "It’s our hybrid model, UK quality and Global compliance, overseas reach, and proper personal service. The best of both worlds.",
    },
    {
      question: "Can you handle tough tech and digital hires?",
      answer:
        "Absolutely! When other IT recruitment agencies reach a barrier or struggle, we find and vet top global tech talent.",
    },
    {
      question: "Do you recruit for admin and back-office roles too?",
      answer:
        "Yes, we do! From admin and finance to payroll and data entry, we build teams that plug straight into your workflow.",
    },
    {
      question: "What's your candidate vetting process?",
      answer:
        "We use smart tech and hands-on interviews, then run skills checks so only top performers make your shortlist.",
    },
    {
      question: "Who handles compliance and payroll?",
      answer:
        "That’s on us. We become the Employer of Record, so you don’t worry about tax obligations, labor laws, or monthly payments.",
    },
    {
      question: "What is Market Mapping?",
      answer:
        "It’s our way of scouting where your ideal hires are working, even if they’re not actively job hunting. Great for exec and specialist searches.",
    },
    {
      question: "How quickly can you build a team for me?",
      answer:
        "We move fast, expect shortlists within 48-72 hours for most roles. Full teams are often in place within a few weeks.",
    },
    {
      question: "Will you manage the entire recruitment cycle?",
      answer:
        "Yes! We do everything, so your HR team can focus on strategy, not admin.",
    },
    {
      question: "Will my offshore hires speak fluent English?",
      answer:
        "Definitely. We rigorously test for written and spoken English, so you’re always collaborating with clear, confident communicators.",
    },
  ];

  return (
    <section className="tw-container tw-mx-auto tw-py-16 tw-px-4 sm:tw-px-6 lg:tw-px-8">
      {/* Header */}
      <div className="tw-text-center tw-space-y-3 tw-mb-8">
        <p className="tw-text-sm tw-font-semibold tw-tracking-[0.18em] tw-uppercase tw-text-accent-600">
          FaQs:
        </p>
        <h2 className="tw-text-2xl md:tw-text-3xl lg:tw-text-4xl tw-font-bold tw-text-slate-900">
          Here’s What Companies Like Yours Ask Us
        </h2>
      </div>
      {/* FAQs Grid */}
      <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-6 tw-max-w-6xl tw-mx-auto">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`tw-group tw-cursor-pointer tw-transition-all tw-duration-300 ${
                isOpen
                  ? "tw-transform tw-scale-[1.02]"
                  : "hover:tw-transform hover:tw-scale-[1.01]"
              }`}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <div
                className={`tw-h-full border tw-rounded-2xl tw-overflow-hidden tw-shadow-sm hover:tw-shadow-lg tw-transition-all tw-duration-300 ${
                  isOpen
                    ? "tw-border-accent-300 tw-bg-gradient-to-br tw-from-accent-50 tw-to-white tw-shadow-lg"
                    : "tw-border-gray-200 tw-bg-white hover:tw-border-accent-200"
                }`}
              >
                {/* Question Header */}
                <div className="tw-p-6">
                  <div className="tw-flex tw-items-start tw-gap-4">
                    <div className="tw-flex-1">
                      <div className="tw-flex tw-items-center tw-justify-between">
                        <h3
                          className={`tw-text-lg tw-font-semibold tw-pr-4 ${
                            isOpen ? "tw-text-accent-700" : "tw-text-gray-900"
                          }`}
                        >
                          {faq.question}
                        </h3>
                        <div className="tw-flex-shrink-0">
                          {isOpen ? (
                            <ChevronUp className="tw-w-5 tw-h-5 tw-text-blue-600 tw-transition-transform tw-duration-300" />
                          ) : (
                            <ChevronDown className="tw-w-5 tw-h-5 tw-text-gray-400 group-hover:tw-text-blue-600 tw-transition-all tw-duration-300" />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Answer Content */}
                {isOpen && (
                  <div className="tw-px-6 tw-pb-6 tw-animate-in tw-fade-in tw-slide-in-from-top-1 tw-duration-300">
                    <p className="tw-text-gray-700 tw-leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQSections;
