import React from "react";
import { Accordion } from "react-bootstrap";

const FAQs = () => {
  const faqs = [
    {
      question: "How is pricing calculated?",
      answer:
        "Our pricing is determined by the depth of information required and the urgency of your request. Each verification request is treated as one ticket, ensuring you only pay for what you need. This approach allows for complete flexibility and transparency, making it easy to scale up or down based on your specific needs.",
    },
    {
      question: "Are there setup fees?",
      answer:
        "No, we believe in keeping things simple, transparent, and hassle-free. There are absolutely no setup fees or hidden charges, so you can get started without any upfront costs or surprises.",
    },
    {
      question: "Is there a minimum monthly volume?",
      answer:
        "No, there’s no minimum volume requirement. Whether you need just one verification or hundreds, we’re here to support you. Our service is designed to accommodate businesses of all sizes, ensuring you get exactly what you need without unnecessary commitments.",
    },
    {
      question: "What if we want to upgrade or downgrade later?",
      answer:
        "Our plans are designed to be flexible and adaptable to your changing needs. If you wish to upgrade or downgrade, simply let us know, and we’ll make the necessary adjustments quickly and seamlessly. This ensures you always have the right plan for your business.",
    },
  ];
  return (
    <div className="container tw-pb-16">
      <div className="info-bx tw-mt-16">
        <div className="heading-bx text-left">
          <h3 className="tw-text-2xl md:tw-text-2xl">
            Frequently Asked Questions (FAQs)
          </h3>
          <p>We know you may have questions about our pricing and services.</p>
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
