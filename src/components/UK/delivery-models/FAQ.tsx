"use client";

import FAQSection from "../common/FAQsSection";


const FAQ = () => {
  const rpoFaqs = [
  {
    question: "What are recruitment delivery models?",
    answer:
      "They’re structured ways to hire, ranging from Partial Recruitment Outsourcing to Full RPO and custom solutions, designed for flexibility, speed, and cost efficiency.",
  },
  {
    question: "How do I choose the right RPO delivery model?",
    answer:
      "It depends on your hiring volume, timeline, budget, and internal resources. Our team helps you pick the model that fits best.",
  },
  {
    question: "What’s the difference between Full RPO and Partial RPO?",
    answer:
      "Full RPO handles end-to-end hiring. Partial Recruitment Outsourcing focuses on specific tasks like sourcing or screening.",
  },
  {
    question: "Can I switch delivery models later?",
    answer:
      "Yes. Our Recruitment Delivery Models are flexible and adaptable as your business grows or changes.",
  },
  {
    question:
      "How fast can Key Medsolutions UK deploy a dedicated offshore team?",
    answer:
      "Teams can be live in days, fully integrated with your processes and timezone.",
  },
  {
    question: "Do you recruit for specialised industries?",
    answer:
      "Absolutely, IT, Healthcare, Engineering, Finance, Logistics, Education, and more.",
  },
  {
    question: "Which hiring technologies do you use?",
    answer:
      "We use ATS, AI sourcing tools, automation, and analytics for faster, smarter recruitment.",
  },
  {
    question: "How do you ensure data security for offshore teams?",
    answer:
      "We follow GDPR, ISO standards, and industry-specific compliance for secure and compliant operations.",
  },
  {
    question:
      "Is On-Demand Recruitment Support good for small businesses",
    answer:
      "Yes, ideal for urgent hires, short-term projects, or filling gaps in small TA teams.",
  },
  {
    question:
      "What makes Key Medsolutions UK different from other providers?",
    answer:
      "Key Medsolutions UK blends UK expertise, multi-industry specialists, flexible Recruitment Delivery Models, and tech-driven efficiency for faster, compliant, and cost-effective hiring.",
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
