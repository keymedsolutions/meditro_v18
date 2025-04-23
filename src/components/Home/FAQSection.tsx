"use client";
import React from 'react'
import { Accordion } from 'react-bootstrap';

const FAQSection = () => {

    const faqs = [
        {
            question: "What services does Key MedSolutions provide?",
            answer: "We provide end-to-end medical billing and revenue cycle management (RCM) services such as claim submission, denial management, AR follow-up, and patient billing.",
        },
        {
            question: "Why should I outsource my medical billing?",
            answer: "Outsourcing saves you from administrative hassles, decreases operating expenses, and enhances billing precision—so you can attend more to patient care.",
        },
        {
            question: "Is my patient data secure with Key MedSolutions?",
            answer: "Yes, we are HIPAA-compliant and use strict data security procedures to safeguard confidential health and billing data.",
        },
        {
            question: "Do you support multiple medical specialties?",
            answer: "Yes, indeed! We offer specialty-specific billing services for various practices such as internal medicine, cardiology, orthopedics, and others.",
        },
        {
            question: "Can you integrate with my existing EHR/EMR system?",
            answer: "Yes, we are well-integrated with most of the large-scale EHR/EMR systems to maintain seamless workflow and precise data transfer.",
        },
        {
            question: "How do I get started with your services?",
            answer: "It is as simple as getting started! Let us schedule a free consultation or demo, and our support team will take you through the onboarding process.",
        }
    ];


    const mid = Math.ceil(faqs.length / 2);
    const firstHalf = faqs.slice(0, mid);
    const secondHalf = faqs.slice(mid);
    return (
        <>
            <section className="section-sp1 service-wraper2">
                <div className="container">
                    <div className="heading-bx text-center">
                        <h6 className="title-ext text-secondary">FAQs</h6>
                        <h2 className="title">Frequently Asked Questions (FAQs)</h2>
                    </div>

                    <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-6 tw-mt-10">
                        <div>
                            <Accordion className="accordion ttr-accordion1">
                                {firstHalf.map((faq, index) => (
                                    <Accordion.Item eventKey={String(index)} key={index}>
                                        <Accordion.Header>{faq.question}</Accordion.Header>
                                        <Accordion.Body>{faq.answer}</Accordion.Body>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                        </div>
                        <div>
                            <Accordion  className="accordion1 ttr-accordion1">
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

        </>
    )
}

export default FAQSection