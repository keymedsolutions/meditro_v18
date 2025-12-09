"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
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
                          <ChevronUp className="tw-w-5 tw-h-5 tw-text-accent-600 tw-transition-transform tw-duration-300" />
                        ) : (
                          <ChevronDown className="tw-w-5 tw-h-5 tw-text-gray-400 group-hover:tw-text-accent-600 tw-transition-all tw-duration-300" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Answer */}
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
  );
};

export default FAQSection;
