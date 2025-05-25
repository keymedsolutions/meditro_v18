"use client";
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Breadcrumb from '@/components/ui/breadcrumb';
import Link from 'next/link';
import { Accordion } from 'react-bootstrap';
import WhyChooseOurMedicalBilling from '@/components/services/common/WhyChooseOurMedicalBilling';
import WhoWeServe from '@/components/services/common/WhoWeServe';
import SolutionsWeOffer from '@/components/services/common/SolutionsWeOffer';

const RevenueCycleSectionV2 = () => {

    const services = [
        "Revenue Cycle Optimization & Auditing",
        "Profit Enhancement Consulting Services",
        "Medical Billing & Collection Services",
        "CPT Fee Schedule Analysis by Payer",
        "Claims Denial Management & Prevention",
        "Workflow Optimization & Automation",
        "Compliance & Risk Mitigation Strategies",
        "Reimbursement Rate Maximization",
        "Strategic Financial Planning for Practices",
        "Documentation Review & Revenue Leakage Identification",
    ]

    const title = "Improving Your Financial Health with Profit Enhancement Services";
    const path = "/revenue-cycle-management-company"

    const mid = Math.ceil(services.length / 2);
    const firstHalf = services.slice(0, mid);
    const secondHalf = services.slice(mid);

    // Array of feature objects with Tailwind bg classes
    const WhyChooses = [
        {
            icon: "📈",
            label: "Proven Record in Boosting Practice Profitability",
            className: "!tw-border-2 !tw-border-blue-300 tw-bg-blue-100 after:!tw-bg-blue-300"
        },
        {
            icon: "🧠",
            label: "Experienced Profit Enhancement Consultants",
            className: "!tw-border-2 !tw-border-green-300 tw-bg-green-100 after:!tw-bg-green-300"
        },
        {
            icon: "🔧",
            label: "Customizable Solutions for Any Practice Size",
            className: "!tw-border-2 !tw-border-yellow-300 tw-bg-yellow-100 after:!tw-bg-yellow-300"
        },
        {
            icon: "📊",
            label: "Data-Driven Approach to Revenue Optimization",
            className: "!tw-border-2 !tw-border-red-300 tw-bg-red-100 after:!tw-bg-red-300"
        },
        {
            icon: "🔐",
            label: "HIPAA-Compliant Systems & Workflows",
            className: "!tw-border-2 !tw-border-gray-300 tw-bg-gray-100 after:!tw-bg-gray-300"
        },
        {
            icon: "📞",
            label: "Personalized Support & Strategic Insight",
            className: "!tw-border-2 !tw-border-indigo-300 tw-bg-indigo-100 after:!tw-bg-indigo-300"
        },
        {
            icon: "🛠️",
            label: "Integrated with Your Existing PM/EHR Platforms",
            className: "!tw-border-2 !tw-border-secondary-400 tw-bg-secondary-200 after:!tw-bg-secondary-400"
        },
        {
            icon: "⏱️",
            label: "Faster Cash Flow & Reduced A/R Days",
            className: "!tw-border-2 !tw-border-pink-300 tw-bg-pink-100 after:!tw-bg-pink-300"
        }
    ];




    const clientTypes = [
        { icon: "🏥", text: "Independent Clinics & Specialty Practices" },
        { icon: "🏥", text: "Physician Groups & Medical Providers" },
        { icon: "🧠", text: "Multispecialty Healthcare Networks" },
        { icon: "🏨", text: "Hospitals & Health Systems" },
        { icon: "🗂️", text: "Billing & RCM Companies Seeking Optimization Support" },
    ]

    const faqs = [
        {
            question: "What are profit enhancement services?",
            answer:
                "Profit enhancement services are solutions and strategies that help improve a company's profitability by optimizing operations, reduce cost, and improving revenue cycles."
        },
        {
            question: "How do profit enhancement services benefit healthcare providers?",
            answer:
                "They help healthcare providers improve cash flow, reduce claim denials, optimize billing and collections, and improve the operational efficiency."
        },
        {
            question: "What strategies are commonly used in profit enhancement?",
            answer:
                "Typical services involve revenue cycle management optimization, cost control, automation of process and financial performance analytics."
        },
        {
            question: "Can profit enhancement services help with compliance?",
            answer:
                "Yes, these services usually offer compliance checks to avoid penalties and ensure compliance with healthcare regulations like HIPAA."
        },
        {
            question: "Are profit enhancement services customizable?",
            answer:
                "Absolutely. These services are typically customized to the health care provider or business financial and operational needs."
        },
        {
            question: "How do I choose the right profit enhancement service provider?",
            answer:
                "Look for proven industry experience, transparent reporting, customized solutions, and track record of measurable outcomes."
        }
    ];


    return (

        <>

            <div className="page-content bg-white aboutus">
                <Breadcrumb
                    title={title}
                    breadcrumb={[{ label: title, href: path }]} />

                <section>
                    <div className="container">
                        <div className="row justify-content-center">
                            {/* <div className="col"></div> */}
                            <div className="col-md-12">
                                <div className="heading-bx text-center">
                                    <h3 className="title">{title}</h3>
                                </div>
                                <p>The healthcare landscape is continuously changing—with new payer models, new regulations, and new administrative burdens that can directly impact your bottom line. Whether you are navigating HMOs, PPOs, or even your changing documentation requirements, your organization can often feel like you are working harder and making less. That's where Key MedSolutions can help. We provide profit enhancement services for healthcare organizations across the United States that can be built into your operational capabilities to capture missed revenue and enhance your financial performance—all without sacrificing patient care.</p>
                                <p>We may be your trusted revenue optimization partner but we are also an auditing service and do an annual fee schedule audit by payer to make sure you are being paid at contracted amounts. Our advanced practice management system allows us to upload and track CPT code level reimbursement data to help eliminate underpayments. Our profit enhancement consulting services will help your practice identify revenue opportunities, reduce denials, and solidify the financial foundation of your business.</p>
                                <p>Our consulting professionals will undertake a comprehensive review of your revenue cycle management (RCM) and   <Link className='tw-font-bold tw-text-black' href={"/maximize-your-reimbursement-rate-with-our-medical-billing-and-collection-services"}>  medical billing and collection services.</Link> From charge capture and coding quality to claim follow-up and collections, we will identify bottlenecks in billing workflow, improve billing productivity, and bring position improvements grounded in data. Our RCM or billing work services can be for complete end-to-end improvements, or just specific improvements on effort and time. Our profit maximization strategies will position your practice to realize its improvement objectives and deliver measurable outcomes.</p>
                                <p>With our tailored method, we help practices of all shapes and sizes - from solo providers to large multispecialty clinics - implement "Strategies for Growth", and scalable healthcare profit improvement solutions. By incorporating our processes into your daily workflows, we ensure the efficiency of their claims processing and that all revenue opportunities are identified and capitalized on. This will improve collections, reduce operational overhead, and allow for future financial viability.</p>
                            </div>
                            {/* <div className="col"></div> */}
                        </div>
                    </div>



                </section>

            </div>


            <SolutionsWeOffer
                firstHalf={firstHalf}
                secondHalf={secondHalf}
                title='Comprehensive Profit Enhancement Services We Offer' />

            <WhoWeServe title='Who We Serve' data={clientTypes} />

            <WhyChooseOurMedicalBilling title='Why Choose Our Profit Enhancement Services?' data={WhyChooses} />

            <div className='container tw-pb-16'>
                <div className="info-bx tw-mt-16">
                    <div className="heading-bx text-left">
                        <h3 className="tw-text-2xl md:tw-text-2xl">Let's Maximize Your Practice Revenue Potential!</h3>
                    </div>
                    <p>
                        Key MedSolutions provides an approach and not just another service provider to support your growth and help your practice thrive. Our profit enhancement solutions empower the providers to increase collections and tune their operations while sustaining growth.
                    </p>

                    <p>
                        <Link className='tw-font-bold tw-text-black' href={"/contact-us"}> Contact us</Link> to find out how we can create a custom plan for profit enhancement and revenue cycle consulting that will sustain your practice's fortuitous future.
                    </p>
                </div>


                <div className="info-bx tw-mt-16">
                    <div className="heading-bx text-left">
                        <h3 className="tw-text-2xl md:tw-text-2xl">FAQs - Profit Enhancement Services</h3>
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

        </>


    );
};

export default RevenueCycleSectionV2;
