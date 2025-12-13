"use client";

import FAQSection from "../../common/FAQsSection";

const FAQ = () => {
  const rpoFaqs = [
    {
      question: "What is remote staffing and how does it work?",
      answer:
        "Remote staffing gives you full-time remote professionals who work directly with your team, while we manage HR, payroll, and compliance.",
    },
    {
      question: "How is remote staffing different from outsourcing?",
      answer:
        "Remote staffing gives you control over individuals, unlike outsourcing which hands full processes to external teams.",
    },
    {
      question: "What roles can I hire through Key MedSolutions for remote staffing solutions?",
      answer:
        "Admin, IT, finance, marketing, customer support, and operations roles.",
    },
    {
      question:
        "How do you ensure the quality of remote employees?",
      answer:
        "Through global sourcing, multi-stage screening, technical tests, and ongoing performance monitoring.",
    },
    {
      question:
        "Do you handle payroll and compliance for remote teams?",
      answer:
        "Yes, we manage contracts, payroll, HR support, and compliance so you don’t have to.",
    },
    {
      question: "What is a virtual assistant and what tasks can they handle?",
      answer:
        "A VA handles admin, scheduling, bookkeeping, marketing, executive support, and more.",
    },
    {
      question: "Which industries benefit most from remote staffing?",
      answer:
        "IT, finance, healthcare, ecommerce, real estate, and agencies.",
    },
    {
      question: "How long does it take to hire through your Remote Staffing Agency?",
      answer:
        "Most roles are filled within 3–10 business days depending on complexity.",
    },
    {
      question:
        "What are the costs of remote staffing in the UK or globally?",
      answer:
        "Costs vary by role and location but typically provide up to 70% savings compared to traditional UK salaries.",
    },
    {
      question:
        "Is Key MedSolutions UK a global remote staffing agency?",
      answer:
        "Yes, we’re a global virtual staffing agency supporting hiring across countries, time zones, and functions.",
    },
  ];

  return (
    <section className="tw-container tw-mx-auto tw-py-16 tw-px-4 sm:tw-px-6 lg:tw-px-8">
      <div className="tw-text-center tw-space-y-3 tw-mb-8">
        <p className="tw-text-sm tw-font-semibold tw-tracking-[0.18em] tw-uppercase tw-text-accent-600">
          Frequently Asked Questions (FAQs)
        </p>
      </div>
      <FAQSection faqs={rpoFaqs} />
    </section>
  );
};

export default FAQ;
