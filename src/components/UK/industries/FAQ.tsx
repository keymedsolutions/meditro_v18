"use client";

import FAQSection from "../common/FAQsSection";

const FAQ = () => {
  const data = [
    {
      question: "Which industries do you cover?",
      answer:
        "We support Healthcare, IT, Logistics, Engineering, Education, Customer Service, Finance, and more.",
    },
    {
      question: "Do you offer remote staff?",
      answer:
        "Yes! We offer remote, onsite, hybrid, and offshore staffing depending on what works best for you.",
    },
    {
      question: "How quickly can you fill a role?",
      answer:
        "Many roles are filled the same day, others take a few days depending on the requirements.",
    },
    {
      question: "Are candidates fully checked?",
      answer:
        "Absolutely. We handle DBS, references, right-to-work, skills testing, and compliance.",
    },
    {
      question: "Can you help with urgent or last-minute recruitment?",
      answer:
        "Yes. Our 24/7 sourcing team specialises in fast-turnaround placements.",
    },
    {
      question: "Do you recruit high-volume teams?",
      answer: "We do, especially for call centres, logistics, and healthcare.",
    },
    {
      question: "Do you offer outsourced payroll?",
      answer:
        "Yes. We manage everything from processing to compliance and reporting.",
    },
    {
      question: "What makes your recruitment process better?",
      answer:
        "Industry knowledge, strict vetting, global reach, and fast, tech-enabled recruitment.",
    },
    {
      question: "Where in the UK do you operate?",
      answer:
        "We serve businesses worldwide, including Canada, United States, Germany, France, Netherlands, India, Philippines, Poland, China, Japan and other major countries .",
    },
    {
      question: "Can you help with hard-to-fill roles?",
      answer:
        "Definitely. We specialise in sourcing niche and specialised talent quickly.",
    },
  ];

  return (
    <section className="tw-container tw-mx-auto tw-py-16 tw-px-4 sm:tw-px-6 lg:tw-px-8">
      <div className="tw-text-center tw-space-y-3 tw-mb-8">
        <p className="tw-text-sm tw-font-semibold tw-tracking-[0.18em] tw-uppercase tw-text-accent-600">
          Frequently Asked Questions (FAQs)
        </p>
      </div>
      <FAQSection faqs={data} />
    </section>
  );
};

export default FAQ;
