"use client";

import FAQSection from "../../common/FAQsSection";

const FAQ = () => {
  const data = [
    {
      question: "What are back office and administrative services?",
      answer:
        "Back office and administrative services include essential support tasks a business needs to operate, such as data entry, payroll, and HR administration. These functions support front-office, client-facing operations.",
    },
    {
      question:
        "What tasks can I outsource through your back office support services?",
      answer:
        "You can outsource data processing, bookkeeping, payroll, email management, customer support, and HR administration. We tailor our outsourcing services to suit your specific business needs.",
    },
    {
      question:
        "How do you choose the best back office outsourcing company globally?",
      answer:
        "Choose a provider with proven experience, strong data security, flexible service models, and expertise in your industry. Reviewing client testimonials and case studies also helps in making the right decision.",
    },
    {
      question:
        "Do you provide affordable back office outsourcing solutions for small businesses?",
      answer:
        "Yes, we offer highly affordable and scalable back office outsourcing solutions designed for small businesses. You pay only for the services you need, making it a cost-effective option.",
    },
    {
      question: "Which back office administration software do you support?",
      answer:
        "We support leading UK and global back office software including Zoho, SAP, Microsoft Dynamics, Xero, and QuickBooks, ensuring smooth integration with your existing systems.",
    },
    {
      question:
        "Are your back office services available only in the UK or globally?",
      answer:
        "We operate globally, supporting clients in the UK, Canada, USA, Germany, France, Netherlands, India, Philippines, Poland, China, Japan, and many other countries as a Global Back Office Administrative Agency.",
    },
    {
      question:
        "Can you integrate with our existing CRM, ATS, or accounting systems?",
      answer:
        "Yes. Our teams integrate seamlessly with your existing CRM, ATS, ERP, and accounting systems to ensure uninterrupted workflow and operational efficiency.",
    },
    {
      question:
        "What makes you one of the top back office administrative service providers globally?",
      answer:
        "Our UK-based specialists, advanced technology, proven cost-saving solutions, and seamless integration capabilities make us a trusted global back office service provider.",
    },
    {
      question:
        "Do you offer finance & accounting back office support as part of your services?",
      answer:
        "Yes, we provide bookkeeping, payroll, AP/AR processing, and financial reporting to help businesses maintain complete financial control.",
    },
    {
      question:
        "How safe is my company data when I outsource back office administration to you?",
      answer:
        "Your data is fully secured through strict GDPR compliance, encrypted systems, and strong security protocols to ensure complete confidentiality and protection.",
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
