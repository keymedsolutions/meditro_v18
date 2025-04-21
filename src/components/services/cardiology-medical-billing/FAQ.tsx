
"use client"
import React from 'react';
import { Accordion } from 'react-bootstrap';


const FAQ = () => {
  const faqs = [
    {
      question: "How quickly can I see improvements in my collections?",
      answer: "Within the first few months of working with us, the majority of our cardiology clients see a 20–35% increase in collections."
    },
    {
      question: "Do you handle denied claims?",
      answer: "Yes! With our team's expertise in appeals and denial management, you can be sure that lost revenue will be successfully recovered."
    },
    {
      question: "Can I track my billing performance in real time?",
      answer: "Of course! Complete insight into claims, payments, and financial trends is possible with our sophisticated reporting tools."
    },
    {
      question: "Is my cardiology practice too small to benefit from your services?",
      answer: "Absolutely not! From solo practitioners to sizable cardiology groups, we assist practices of all sizes."
    },
    {
      question: "Do you offer support for multiple specialties?",
      answer: "Yes! Our specialty is cardiology billing, but we also offer professional billing services for primary care, orthopedics, dermatology, mental health, and other specialties, making sure that each specialty's coding and compliance are correct."
    }
  ];


  const mid = Math.ceil(faqs.length / 2);
  const firstHalf = faqs.slice(0, mid);
  const secondHalf = faqs.slice(mid);
  return (
    <section className="tw-py-24">
      <div className="tw-container tw-mx-auto tw-px-4">
        <div className="tw-text-center tw-mb-12">
          <h4 className="tw-gradient-text mb-4">Frequently Asked Questions (FAQs)</h4>
          <p className="tw-text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our cardiology billing services.
          </p>
        </div>

          {/* Responsive Grid */}
          <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-6 tw-mt-10">
                    <div>
                        <Accordion defaultActiveKey="0" className="accordion ttr-accordion1">
                            {firstHalf.map((faq, index) => (
                                <Accordion.Item eventKey={String(index)} key={index}>
                                    <Accordion.Header>{faq.question}</Accordion.Header>
                                    <Accordion.Body>{faq.answer}</Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion>
                    </div>
                    <div>
                        <Accordion defaultActiveKey="1" className="accordion1 ttr-accordion1">
                            {secondHalf.map((faq, index) => (
                                <Accordion.Item eventKey={String(index)} key={index}>
                                    <Accordion.Header>{faq.question}</Accordion.Header>
                                    <Accordion.Body>{faq.answer}</Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion>
                    </div>
                </div>

   
      </div>
    </section>
  );
};

export default FAQ;
