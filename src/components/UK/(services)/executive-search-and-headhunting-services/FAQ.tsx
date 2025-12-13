"use client";

import FAQSection from "../../common/FAQsSection";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const FAQ = () => {
  const data = [
    {
      question:
        "What is executive search, and how is it different from regular recruitment?",
      answer:
        "Executive search targets passive senior leaders using research-driven methods, unlike standard recruitment that focuses on active applicants.",
    },
    {
      question:
        "How does a headhunting agency identify senior-level candidates?",
      answer:
        "Through market mapping, competitor analysis, referrals, and targeted direct outreach.",
    },
    {
      question: "What industries do you specialise in?",
      answer:
        "Technology, finance, engineering, healthcare, professional services, renewables, and retail.",
    },
    {
      question: "How long does the executive search process take?",
      answer:
        "Most searches take 4–8 weeks depending on complexity and seniority.",
    },
    {
      question:
        "What level of roles do your executive search recruiters handle?",
      answer: "C-suite, Directors, Senior Management, and niche expert roles.",
    },
    {
      question: "How confidential is the headhunting process?",
      answer:
        "Completely confidential, protecting both your brand and candidate identity.",
    },
    {
      question:
        "Why choose your firm over other executive search firms in Global?",
      answer:
        "We combine deep sector expertise, leadership assessment, hidden talent access, and worldwide reach.",
    },
    {
      question: "Can you support cross-border and international hiring?",
      answer:
        "Yes, through our global network and UK remote staffing capability.",
    },
    {
      question: "Do you provide leadership assessments?",
      answer:
        "Yes, including psychometric, behavioural, competency, and cultural-fit evaluations.",
    },
    {
      question: "How do you evaluate cultural fit?",
      answer:
        "Through structured interviews, value assessments, profiling, and stakeholder insights.",
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
      <motion.div
        className="tw-w-full tw-max-w-4xl tw-mx-auto tw-mt-10"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div
          className="tw-relative tw-rounded-[1.75rem] tw-bg-gradient-to-r tw-from-accent-50 tw-via-white tw-to-accent-100 tw-px-6 tw-py-7 md:tw-px-8 md:tw-py-8 tw-shadow-[0_20px_60px_rgba(15,23,42,0.20)] tw-overflow-hidden"
          style={{
            border: "1px solid rgba(148,163,184,0.65)",
          }}
        >
          {/* subtle accent stripe */}
          <div
            className="tw-absolute tw-left-0 tw-top-0 tw-bottom-0 tw-w-1"
            style={{
              borderLeft: "3px solid var(--accent-400)",
            }}
          />

          <div className="tw-relative tw-z-[1] tw-flex tw-flex-col lg:tw-flex-row tw-items-start lg:tw-items-center tw-justify-between tw-gap-5">
            <div className="tw-space-y-2">
              <h3 className="tw-text-lg md:tw-text-xl tw-font-semibold tw-text-slate-900">
                Final CTA
              </h3>
              <p className="tw-text-sm md:tw-text-base tw-leading-relaxed tw-text-slate-700 tw-mb-0">
                Ready to hire transformational leaders? Contact our UK-based
                Executive Search Consultants today and access top talent across
                the UK and worldwide.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FAQ;
