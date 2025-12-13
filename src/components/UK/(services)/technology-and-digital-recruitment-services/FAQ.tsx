"use client";

import FAQSection from "../../common/FAQsSection";

const FAQ = () => {
  const rpoFaqs = [
    {
      question: "What is Technology & Digital Recruitment?",
      answer:
        "It’s the process of hiring skilled professionals for tech and digital roles, including software development, cloud, cybersecurity, design, analytics, and more. Specialist agencies ensure faster, more accurate hiring using proven recruitment methods.",
    },
    {
      question: "What is Digital Recruitment and how does it work?",
      answer:
        "Digital recruitment uses online tools, automation, and data-driven sourcing to identify the best digital and technical candidates. It’s faster, more efficient, and ideal for modern hiring needs.",
    },
    {
      question: "Why should companies use a Technology Recruitment Agency?",
      answer:
        "A specialist agency provides better access to talent, faster sourcing, accurate technical assessments, and reduced hiring costs. It removes the guesswork and replaces it with proven recruitment expertise.",
    },
    {
      question: "What sectors do you recruit for in the technology industry?",
      answer:
        "We cover IT, SaaS, BioTech, FinTech, EdTech, HealthTech, AI, cybersecurity, and other technology-driven markets.",
    },
    {
      question: "Do you support global and remote hiring for tech roles?",
      answer:
        "Yes. As one of the top Technology Recruitment Agencies for Global Hiring, we support cross-border recruitment and help companies build fully remote or hybrid teams.",
    },
    {
      question:
        "How do you ensure the quality of candidates for technical positions?",
      answer:
        "We use structured screening methods, technical tests, coding assessments, and detailed behavioural interviews. As a leading Candidate Screening company quality control is built into every step.",
    },
    {
      question:
        "Are you one of the top technology recruitment agencies UK businesses trust?",
      answer:
        "Yes. Our clients consistently rank us among the best technology recruitment agencies UK and globally because of our results, market knowledge, and reliable hiring processes.",
    },
    {
      question: "Do you also recruit for digital marketing and creative roles?",
      answer:
        "Absolutely. As a dedicated Digital recruitment agency, we hire digital marketers, content specialists, designers, and creative professionals.",
    },
    {
      question:
        "How fast can you help us hire software developers or IT professionals?",
      answer:
        "Most shortlists are delivered in 48–72 hours. Final hires typically take 1–3 weeks depending on role difficulty and availability.",
    },
    {
      question:
        "What makes Key Medsolutions UK different from other technology recruitment agency?",
      answer:
        "We combine AI-driven sourcing, nationwide and global coverage, and deep industry. Compared to other technology recruitment agencies we offer faster hiring, global reach, and highly specialised technical screening.",
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
