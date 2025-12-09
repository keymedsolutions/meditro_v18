"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import FAQSection from "../../common/FAQsSection";

const FAQ = () => {
  const rpoFaqs = [
    {
      question: "What is Recruitment Process Outsourcing (RPO)?",
      answer:
        "RPO is when you outsource some or all of your permanent hiring to experienced professionals. We act like an extension of your HR team, handling everything from start to finish.",
    },
    {
      question: "What does RPO stand for in recruitment?",
      answer:
        "RPO means Recruitment Process Outsourcing, long-term, strategic hiring support, not just filling occasional roles.",
    },
    {
      question: "How do Full Cycle RPO solutions work?",
      answer:
        "Full Cycle RPO solutions take care of every hiring step, from workforce planning and job design through to sourcing, interviews, offers, and onboarding, all managed by your dedicated RPO team.",
    },
    {
      question:
        "What is the difference between RPO and traditional recruitment agencies?",
      answer:
        "Traditional agencies are all about quick placements. RPO providers (like us) embed themselves in your business, bringing strategy, technology, and long-term value.",
    },
    {
      question:
        "Why choose Key Medsolutions UK over other recruitment process outsourcing companies?",
      answer:
        "We combine industry expertise with a tech-first approach, flexible models, and dedicated consultants that act as genuine partners, so you get better, faster, and more cost-effective results.",
    },
    {
      question: "Are RPO services suitable for small businesses and startups?",
      answer:
        "Absolutely. Our Project RPO and On-Demand RPO models are created with startups and SMEs in mind, offering expert support only when you need it, without hiring a full in-house team.",
    },
    {
      question: "How much do RPO solutions cost in the UK?",
      answer:
        "Our pricing is affordable and transparent. Costs depend on the level of service, but you can choose a model—like management fees or cost-per-hire—that suits your business. Get in touch for a tailored quote.",
    },
    {
      question: "Do you provide RPO for technology sector hiring?",
      answer:
        "Yes, we provide RPO services for technology sector hiring. As a global trusted RPO partner serving the UK, Europe, US, and APAC, we help companies hire top tech talent—from software developers to cybersecurity experts—with scalable and efficient recruitment solutions.",
    },
    {
      question:
        "Do you offer international or offshore RPO solutions (Asia, Europe, etc.)?",
      answer:
        "Yes, we’re a Global RPO Agency with experience in providing RPO solutions in Asia, Europe, and worldwide. Our team knows how to recruit across borders and build multinational teams.",
    },
    {
      question:
        "How quickly can Key Medsolutions UK start working on our hiring needs?",
      answer:
        "We move fast. After a quick consultation, our team can kick off your recruitment activities in just a few days, so you don’t have to wait to start attracting top talent.",
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
