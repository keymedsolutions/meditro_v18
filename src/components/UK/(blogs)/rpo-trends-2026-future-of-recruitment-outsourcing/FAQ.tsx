"use client";

import FAQSection from "../../common/FAQsSection";

const FAQ = () => {
  const data = [
    {
      question: "What does an RPO provider like Key Medsolutions UK do?",
      answer:
        "An RPO provider manages all or part of your recruitment activities. This can include job advertising, sourcing, screening, interviewing, onboarding and reporting. The goal is to reduce hiring costs, improve quality and streamline the entire recruitment lifecycle.",
    },
    {
      question: "Is RPO suitable for small or medium sized businesses?",
      answer:
        "Yes, absolutely. Smaller organisations often benefit the most because RPO provides resources, expertise and recruitment technology that may be too costly to build internally.",
    },
    {
      question: "How does RPO differ from traditional recruitment agencies?",
      answer:
        "Traditional agencies focus on filling individual roles. RPO focuses on improving the whole recruitment function. It involves long term partnership, branding, technology, workforce planning and measurable performance outcomes.",
    },
    {
      question: "Does RPO support technical and specialist roles?",
      answer:
        "Yes. Key Medsolutions UK offers industry specific recruitment including a dedicated it recruitment agency service for technology, engineering and digital roles.",
    },
    {
      question:
        "How does Key Medsolutions UK ensure quality and candidate fit?",
      answer:
        "We combine data, structured assessment methods and personalised screening to make sure candidates meet both competency and cultural requirements. Our hybrid approach gives clients confidence in every hire.",
    },
  ];
  return (
    <section className="tw-container tw-mx-auto tw-pb-10 tw-px-4 sm:tw-px-6 lg:tw-px-8">
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
