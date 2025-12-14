"use client";

import FAQSection from "../common/FAQsSection";

const FAQ = () => {
  const data = [
    {
      question:
        "What makes Key Medsolutions UK different from other RPO providers?",
      answer:
        "We blend Global recruitment expertise with global delivery teams, giving you quality, speed, and cost efficiency, all in one model.",
    },
    {
      question: "Do you support specific industries?",
      answer:
        "Yes, we specialise in tech, healthcare, engineering, logistics, finance, customer service, education, and more.",
    },
    {
      question: "Can you handle high-volume or urgent recruitment?",
      answer:
        "Absolutely; we’re built for scale. Our offshore teams source 24/7 to speed up hiring.",
    },
    {
      question: "Do you offer offshore or remote teams?",
      answer:
        "Yes. We provide offshore recruiters, sourcers, admin, payroll specialists, and full back-office teams.",
    },
    {
      question: "How transparent is your pricing?",
      answer:
        "Completely. You get fixed, clear monthly pricing with no surprise add-ons or hidden markups.",
    },
    {
      question: "Are your processes GDPR compliant?",
      answer:
        "Yes, we strictly follow UK GDPR rules, data protection standards, and ethical recruitment practices.",
    },
    {
      question: "Can you work with our ATS or CRM?",
      answer:
        "Yes, we integrate with most major ATS platforms and can adapt to your current systems.",
    },
    {
      question: "How quickly can we get started?",
      answer:
        "Most clients go live in a few days. Larger teams are deployed within 1–2 weeks.",
    },
    {
      question: "Do you support small businesses or startups?",
      answer:
        "Definitely, our flexible models work perfectly for SMEs, scale-ups, and growing companies.",
    },
    {
      question: "Can we adjust or upgrade our recruitment model later?",
      answer:
        "Yes, you can scale up, down, or switch models anytime as your hiring needs evolve.",
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
