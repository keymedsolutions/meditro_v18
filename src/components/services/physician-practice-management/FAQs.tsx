import React from "react";
import { Accordion } from "react-bootstrap";

const FAQs = () => {
  const faqs = [
    {
      question:
        "What is Physician Practice Management, and why is it important?",
      answer:
        "Physician Practice Management involves streamlining the administrative, financial, and operational aspects of a medical practice. It ensures efficient systems, financial clarity, and reduced administrative burdens, allowing physicians to focus on delivering exceptional patient care.",
    },
    {
      question: "How can Key MedSolutions help my practice increase revenue?",
      answer:
        "Our tailored solutions optimize your financial processes, improve claim approvals through denial management services, and provide comprehensive accounting oversight to ensure you maximize profitability.",
    },
    {
      question: "What types of practices do you work with?",
      answer:
        "We work with a wide range of medical practices, including solo practitioners, group practices, and specialty clinics. Our solutions are customized to meet the unique needs of each practice.",
    },
    {
      question:
        "Do you offer support for implementing Practice Management software?",
      answer:
        "Yes, we provide full support for implementing and optimizing Practice Management software. This includes training, integration, and ongoing assistance to ensure seamless operations.",
    },
    {
      question: "How does your denial management service work?",
      answer:
        "Our denial management service identifies the root causes of claim denials, provides actionable solutions to minimize revenue loss, and improves claim approval rates to enhance your financial stability.",
    },
    {
      question: "Can you help with compliance and risk management?",
      answer:
        "Absolutely. We offer auditing and risk management services to ensure your practice adheres to industry regulations, reduces financial risks, and operates efficiently.",
    },
    {
      question: "How do I get started with Key MedSolutions?",
      answer:
        "Getting started is easy! Contact us today to schedule a consultation. We’ll assess your practice’s needs and create a customized plan to help you achieve your goals.",
    },
  ];
  return (
    <div className="container tw-pb-16">
      <div className="info-bx tw-mt-16">
        <div className="heading-bx text-left">
          <h3 className="tw-text-2xl md:tw-text-2xl">
            Frequently Asked Questions (FAQs)
          </h3>
        </div>

        <Accordion className="accordion ttr-accordion1">
          {faqs.map((faq, index) => (
            <Accordion.Item eventKey={String(index)} key={index}>
              <Accordion.Header>{faq.question}</Accordion.Header>
              <Accordion.Body>{faq.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQs;
