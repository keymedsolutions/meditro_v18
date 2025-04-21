import SectionHeading from '@/components/ui/section-heading';
import React from 'react';
import { Accordion } from 'react-bootstrap';

const FaqData = [
    {
        question: 'What physician billing services does KeyMed Solutions provide?',
        open: true,
        answer:
            'For physician practices, we offer complete medical billing, coding, claim submission, denial management, and revenue cycle optimization.',
    },
    {
        question: 'How can your services increase the income of my practice?',
        open: false,
        answer:
            'Our sophisticated billing techniques and flawless claim submissions contribute to a decrease in denials, which speeds up reimbursements and boosts income.',
    },
    {
        question:
            'Is it possible for KeyMed to interface with my current Electronic Health Record (EHR) system?',
        open: false,
        answer:
            'Indeed! We guarantee seamless workflow automation by integrating with the majority of EHR and practice management systems.',
    },
    {
        question: 'How do you respond to questions and billing from patients?',
        open: false,
        answer:
            'We offer patient-friendly and transparent billing assistance, which lowers disputes and raises patient satisfaction.',
    },
    {
        question: 'What analytics and reporting tools are available?',
        open: false,
        answer:
            'Our cutting-edge real-time reporting and analytics offer insightful financial data that assists you in making informed decisions.',
    },
];

const FrequentlyAskedQuestions = () => {
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
                <SectionHeading title="Frequently Asked Questions" subtitle="" />

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

export default FrequentlyAskedQuestions;
