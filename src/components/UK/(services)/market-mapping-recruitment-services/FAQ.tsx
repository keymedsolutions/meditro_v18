"use client";

import FAQSection from "../../common/FAQsSection";

const FAQ = () => {
  const data = [
    {
      question: "What is market mapping in recruitment?",
      answer:
        "It’s the process of analyzing talent pools, salary benchmarks, and competitor hiring trends to optimise recruitment.",
    },
    {
      question: "How does market mapping help reduce time-to-hire?",
      answer:
        "By providing pre-validated talent pools and workforce insights, it streamlines the hiring process.",
    },
    {
      question: "What types of market mapping services do you offer?",
      answer:
        "Talent analysis, competitor intelligence, salary benchmarking, and more.",
    },
    {
      question: "Which industries benefit most from market mapping?",
      answer:
        "Tech, IT, engineering, healthcare, and startups are just a few examples.",
    },
    {
      question: "How detailed are your market mapping reports?",
      answer:
        "Extremely detailed, covering everything from talent availability to salary benchmarks.",
    },
    {
      question: "Do you offer market mapping for technology and IT roles?",
      answer:
        "Absolutely! We specialise in tech, IT, AI, and engineering sectors.",
    },
    {
      question: "What tools or software do you use for market mapping?",
      answer:
        "We use advanced recruitment market mapping software to ensure accuracy.",
    },
    {
      question: "How do I compare market mapping services for recruitment?",
      answer: "Look for expertise, global coverage, and actionable insights.",
    },
    {
      question:
        "Do you provide global market mapping solutions outside the UK?",
      answer:
        "Yes, we cover Europe, Asia, North America, South America, Africa, and the Middle East.",
    },
    {
      question: "What makes you a trusted market mapping company globally?",
      answer:
        "Our experience, data-driven approach, and fast, affordable solutions.",
    },
  ];

  return (
    <section className="tw-container tw-mx-auto tw-py-16 tw-px-4 sm:tw-px-6 lg:tw-px-8">
      <div className="tw-text-center tw-space-y-3 tw-mb-8">
        <p className="tw-text-sm tw-font-semibold tw-tracking-[0.18em] tw-uppercase tw-text-accent-600">
          Frequently Asked Questions (FAQs)
        </p>
        <p className=" tw-text-gray-600">
          We know you’ve got questions. Here are the answers to the ones we hear
          most often:
        </p>
      </div>
      <FAQSection faqs={data} />
    </section>
  );
};

export default FAQ;
