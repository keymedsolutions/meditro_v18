"use client";

import FAQSection from "../../common/FAQsSection";

const FAQ = () => {
  const data = [
    {
      question: "What are Payroll and Finance Outsourcing Services?",
      answer:
        "Payroll and Finance Outsourcing Services mean letting experts like us handle your payroll processing and financial accounting. This includes everything from payroll calculations to VAT filing.",
    },
    {
      question: "How much does it cost to outsource payroll in the Global?",
      answer:
        "The cost of outsourcing payroll in the Global depends on your business size, payroll frequency, and needs. You’ll usually save compared to hiring in-house and can cut costs by up to 60 percent.",
    },
    {
      question: "Why outsource finance and accounting for your global company?",
      answer:
        "Companies choose to outsource finance and accounting to reduce costs, avoid compliance risks, boost accuracy, and focus on growth.",
    },
    {
      question:
        "Do you offer Payroll Outsourcing Services for startups and small businesses?",
      answer:
        "Yes, our Payroll Outsourcing Services are offered to startups, small businesses, and enterprises in the UK and globally, with solutions that scale to any business size.",
    },
    {
      question: "Are your payroll services compliant with HMRC rules?",
      answer:
        "Yes. Our team is always on top of HMRC guidelines. We guarantee compliance with all regulations, including PAYE and National Insurance.",
    },
    {
      question: "Can you provide Global Payroll Outsourcing Services?",
      answer:
        "Yes. We’re one of the top Global Payroll Outsourcing Companies, offering Global Payroll Outsourcing Services and solutions for international teams.",
    },
    {
      question:
        "Which industries do you serve with Outsourced Finance and Accounting Services?",
      answer:
        "We provide Outsourced Finance and Accounting Services across tech, healthcare, recruitment, retail, manufacturing, and more.",
    },
    {
      question: "Is your finance outsourcing full-cycle?",
      answer:
        "Yes, we deliver end-to-end finance services, from daily bookkeeping to detailed reporting.",
    },
    {
      question: "How do you protect my financial data?",
      answer:
        "We use secure, GDPR-compliant systems to keep your data safe always.",
    },
    {
      question:
        "Why choose Key Medsolutions UK over other best payroll and finance outsourcing companies in the Global?",
      answer:
        "We offer industry-leading accuracy, local expertise, cost savings, and a personal touch. As a leading finance payroll outsourcing provider, and with our reputation as a trusted RPO company in Global, you’re in good hands.",
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
      <div className="tw-max-w-6xl tw-mx-auto tw-mt-8 tw-rounded-lg tw-p-6 border tw-border-accent-500 tw-bg-accent-500/5 tw-text-md tw-font-semibold tw-text-accent-700 tw-shadow-md tw-shadow-accent-200">
        Let’s improve your business together with our expert Payroll and Finance
        Outsourcing Services!
      </div>
    </section>
  );
};

export default FAQ;
