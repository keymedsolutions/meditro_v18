"use client"
import React, { useRef } from 'react';
import { Accordion } from 'react-bootstrap';
import { ThreeDBackground } from './three-d-background';
import { GradientText } from './gradient-text';
import { motion, useInView } from 'framer-motion';

const FaqData = [
  {
    question: "Why are medical necessity claims in radiology rejected?",
    answer:
      "If payers feel that the imaging study lacks adequate clinical support, they may reject claims. Preventing these denials requires proper coding and documentation."
  },
  {
    question: "In what ways can Key MedSolutions assist with prior authorizations?",
    answer:
      "By collecting necessary clinical data, confirming insurance requirements, and guaranteeing adherence to payer guidelines, we help obtain prior authorizations."
  },
  {
    question: "What occurs if my claim is rejected?",
    answer:
      "To increase the likelihood that a claim will be approved, our team examines the reasons for denial, drafts a compelling appeal with supporting documentation, and gets in touch with payers."
  },
  {
    question: "How can I begin using your services?",
    answer:
      "Just get in touch with us to schedule a consultation. In order to maximize your revenue cycle, we will evaluate your present billing issues and develop a solution specifically for you."
  }
];


const FAQs = () => {
  const mid = Math.ceil(FaqData.length / 2);
  const firstHalf = FaqData.slice(0, mid);
  const secondHalf = FaqData.slice(mid);

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })


  return (
    <section
      ref={ref}
      className="tw-py-16 md:tw-py-24 tw-relative tw-overflow-hidden tw-bg-gradient-to-b tw-from-blue-50 tw-to-white"
    >

      <div className="tw-absolute tw-inset-0">
        <ThreeDBackground />
      </div>
      {/* Decorative Circles */}
      <div className="tw-absolute tw-w-64 tw-h-64 tw-bg-orange-200 tw-opacity-20 tw-rounded-full tw-blur-3xl tw-top-0 tw-left-0"></div>
      <div className="tw-absolute tw-w-72 tw-h-72 tw-bg-blue-100 tw-opacity-20 tw-rounded-full tw-blur-2xl tw-bottom-0 tw-right-0"></div>

      <div className="tw-container tw-mx-auto tw-px-4 tw-relative tw-z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="tw-text-center tw-mb-16"
        >
          <div className="tw-inline-block tw-mb-4">
            <div className="tw-relative">
              <div className="tw-absolute tw-inset-0 tw-bg-blue-100 tw-rounded-lg tw-transform tw-rotate-3"></div>
              <div className="tw-relative tw-bg-blue-50 tw-rounded-lg tw-px-4 tw-py-1 tw-transform -tw-rotate-3">
                <span className="tw-text-blue-600 tw-font-semibold">FAQs</span>
              </div>
            </div>
          </div>

          <h2 className="tw-text-4xl md:tw-text-4xl tw-font-bold tw-text-slate-900 tw-mb-6">
            Frequently Asked <GradientText>Questions</GradientText>
          </h2>

        </motion.div>

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

        {/* CTA Button */}
        <div className="tw-mt-12 tw-text-center tw-mb-16">


          <button className='btn btn-primary  tw-bg-gradient-to-r tw-from-blue-600 tw-via-purple-600 tw-to-pink-500 tw-text-white tw-font-semibold tw-rounded-full tw-transition-all tw-duration-300 hover:tw-scale-105 hover:tw-shadow-xl focus:tw-ring-4 focus:tw-ring-orange-300 group'>
            Schedule a Free Consultation
            {/* <i className="btn-icon-bx fas fa-phone-alt"></i> */}
            <i className="btn-icon-bx fas fa-phone-alt"></i>
          </button>

        </div>
      </div>
    </section>
  );
};

export default FAQs;
