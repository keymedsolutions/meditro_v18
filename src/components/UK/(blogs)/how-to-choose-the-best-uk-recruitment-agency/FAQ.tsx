"use client";

import FAQSection from "../../common/FAQsSection";

const FAQ = () => {
  const data = [
    {
      question:
        "What is a job recruitment agency, and how is an RPO different?",
      answer:
        "A job recruitment agency focuses on filling individual roles. An RPO provider like Key Medsolutions UK offers a long-term partnership, managing part or all of a company’s recruitment process with strategy, technology, and ongoing support.",
    },
    {
      question: "How to start a recruitment agency?",
      answer:
        "You need industry expertise, compliance registration, staffing tools, and a strong client network. Many organisations choose RPO instead because it provides instant access to an established recruitment structure.",
    },
    {
      question:
        "Are there recruitment agencies near me that offer RPO services?",
      answer:
        "Local agencies exist across the UK, but true RPO providers are more specialised. Key Medsolutions UK supports businesses nationwide with both remote and on-site recruitment services.",
    },
    {
      question:
        "What makes Key Medsolutions UK one of the best recruitment agencies in the UK?",
      answer:
        "Our industry knowledge, technology-driven approach, global reach, and flexible RPO models allow us to deliver high-quality, scalable hiring solutions that drive long-term value.",
    },
    {
      question:
        "Can Key Medsolutions UK support international or remote candidates?",
      answer:
        "Yes. Many of our clients hire globally, making us a great partner for people searching the best recruitment agencies in the UK for foreigners or the best recruitment agencies for remote jobs in the UK.",
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
