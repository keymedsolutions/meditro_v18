"use client";

import FAQSection from "../../common/FAQsSection";

const FAQ = () => {
  const rpoFaqs = [
    {
      question: "What are Candidate Sourcing Services?",
      answer: "Identifying and engaging potential candidates for open roles.",
    },
    {
      question: "What is Candidate Screening in Recruitment?",
      answer: "Evaluating candidates for skills, experience, and cultural fit.",
    },
    {
      question: "How does outsourced candidate sourcing work?",
      answer: "Specialists use advanced tools to source and screen candidates.",
    },
    {
      question: "What industries do you source candidates for?",
      answer: "Tech, healthcare, finance, education, and more.",
    },
    {
      question: "What tools do you use for candidate sourcing?",
      answer: "AI tools, ATS, Boolean search, and vacancy boards.",
    },
    {
      question: "How fast can you deliver shortlisted candidates?",
      answer: "Within 24–48 hours.",
    },
    {
      question: "Do you provide sourcing for tech and digital roles?",
      answer: "Yes, we specialise in tech and niche roles.",
    },
    {
      question: "Are your services suitable for startups?",
      answer: "Absolutely! We offer cost-effective solutions for startups.",
    },
    {
      question: "Why choose an International Candidate Sourcing Partner?",
      answer: "Access global talent with local expertise and compliance.",
    },
    {
      question:
        "How do you choose a reliable sourcing company in the UK or worldwide?",
      answer:
        "Look for proven expertise, advanced tools, and a track record of client success.",
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
