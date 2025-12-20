"use client";

import FAQSection from "../../common/FAQsSection";

const FAQ = () => {
  const data = [
  {
    question: "What is an executive search firm and how does it work?",
    answer:
      "An executive search firm is a specialist organisation that proactively identifies and approaches senior leaders. Instead of relying on job adverts, these firms research and engage passive talent through direct outreach and targeted conversations.",
  },
  {
    question: "How long does an executive search project take?",
    answer:
      "Most executive search projects take between eight and twelve weeks, depending on market conditions, role complexity, and candidate availability.",
  },
  {
    question: "Are executive search firms confidential?",
    answer:
      "Yes. Confidentiality is one of the main reasons organisations use executive search, especially for sensitive, replacement, or highly strategic leadership hires.",
  },
  {
    question: "What roles do executive headhunting firms usually recruit?",
    answer:
      "Executive headhunting firms typically recruit senior leadership positions such as C-suite executives, directors, transformation leaders, and highly skilled strategic roles.",
  },
  {
    question: "Why should we choose Key Medsolutions UK over other firms?",
    answer:
      "Key Medsolutions UK combines specialist executive search with broader recruitment and workforce solutions. This integrated approach delivers greater value than traditional search firms and supports organisations looking for a long-term strategic hiring partner.",
  },
];
  return (
    <section className="tw-container tw-mx-auto tw-py-10 tw-px-4 sm:tw-px-6 lg:tw-px-8">
      <div className="tw-text-center tw-space-y-3 tw-mb-10">
        <p className="tw-text-sm tw-font-semibold tw-tracking-[0.18em] tw-uppercase tw-text-accent-600">
          Frequently Asked Questions (FAQs)
        </p>
      </div>
      <FAQSection faqs={data} />
    </section>
  );
};

export default FAQ;
