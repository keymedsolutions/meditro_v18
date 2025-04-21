"use client"
import SectionHeading from '@/components/ui/section-heading';
import React from 'react';
import { Accordion } from 'react-bootstrap';

const FaqData = [
    {
        question: 'How quickly can I see improvements in my collections?',
        open: true,
        answer:
            'Within the first few months of working with us, the majority of our clients see a 20–35% increase in collections.',
    },
    {
        question: 'Do you handle denied claims?',
        open: false,
        answer:
            'Yes! To make sure you successfully recoup lost revenue, our team specializes in denial management and appeals.',
    },
    {
        question:
            'Can I track my billing performance in real time?',
        open: false,
        answer:
            'Of course! Complete insight into claims, payments, and financial trends is possible with our sophisticated reporting tools.',
    },
    {
        question: 'Is my practice too small to benefit from your services?',
        open: false,
        answer:
            'Absolutely not! We collaborate with practices of all sizes, ranging from large medical groups to solo practitioners.',
    },
    {
        question: 'Do you offer support for multiple specialties?',
        open: false,
        answer:
            'Yes! Primary care, orthopedics, cardiology, dermatology, mental health, and more are among the many medical specialties that KeyMed Solutions supports. For each specialty, our billing specialists guarantee proper coding and compliance.',
    },
];

const MedicalClamFAQ = () => {
    const mid = Math.ceil(FaqData.length / 2);
    const firstHalf = FaqData.slice(0, mid);
    const secondHalf = FaqData.slice(mid);

    return (
        <section
            className="tw-py-16 md:tw-py-24 tw-relative tw-overflow-hidden tw-bg-gradient-to-b tw-from-blue-50 tw-to-white"
            id="whyus"
        >
            {/* Decorative Circles */}
            <div className="tw-absolute tw-w-64 tw-h-64 tw-bg-orange-200 tw-opacity-20 tw-rounded-full tw-blur-3xl tw-top-0 tw-left-0"></div>
            <div className="tw-absolute tw-w-72 tw-h-72 tw-bg-blue-100 tw-opacity-20 tw-rounded-full tw-blur-2xl tw-bottom-0 tw-right-0"></div>

            <div className="tw-container tw-mx-auto tw-px-4 tw-relative tw-z-10">
                <SectionHeading title="Frequently Asked Questions" subtitle="" showUnderline={false} />

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
                <div className="tw-mt-12 tw-text-center">
                    <button className='btn btn-primary  tw-bg-gradient-to-r  tw-from-primary-500 tw-to-secondary-400 tw-text-white tw-font-semibold tw-rounded-full tw-transition-all tw-duration-300 hover:tw-scale-105 hover:tw-shadow-xl focus:tw-ring-4 focus:tw-ring-orange-300 group'>
                        Schedule a Free Consultation
                        <i className="btn-icon-bx fas fa-phone-alt"></i>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default MedicalClamFAQ;
