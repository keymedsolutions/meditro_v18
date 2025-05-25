"use client";
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Breadcrumb from '@/components/ui/breadcrumb';
import Link from 'next/link';
import { Accordion } from 'react-bootstrap';
import WhyChooseOurMedicalBilling from '@/components/services/common/WhyChooseOurMedicalBilling';
import WhoWeServe from '@/components/services/common/WhoWeServe';
import SolutionsWeOffer from '@/components/services/common/SolutionsWeOffer';


const PhysicianBillingServicesV2 = () => {
    const services = [
        "Accurate Claims Submission & Coding",
        "Denial Management & Appeals",
        "Payment Posting & Patient Billing",
        "Fee Schedule Analysis & Credentialing Support",
        "Revenue Cycle Management (RCM)",
        "Insurance Eligibility Verification",
        "KPI Monitoring & Performance Reporting",
        "HIPAA-Compliant Billing Processes",
        "Customized Solutions for Primary Care & Specialists"
    ]

    const title = "Trusted Physician Billing Solutions for Healthcare Providers";
    const path = "/revenue-cycle-management-company"

    const mid = Math.ceil(services.length / 2);
    const firstHalf = services.slice(0, mid);
    const secondHalf = services.slice(mid);

    // Array of feature objects with Tailwind bg classes
    const WhyChooses = [
        {
            icon: "⚙️",
            label: "End-to-End, Scalable Billing Services",
            className: "!tw-border-2 !tw-border-blue-300 tw-bg-blue-100 after:!tw-bg-blue-300"
        },
        {
            icon: "📉",
            label: "Reduced Claim Denials & Faster Reimbursementss",
            // className: "!tw-border-2 !tw-border-green-300 tw-bg-green-100 after:!tw-bg-green-300"
            className: "!tw-border-2 !tw-border-red-300 tw-bg-red-100 after:!tw-bg-red-300"
        },
        {
            icon: "💼",
            label: "Tailored Solutions Aligned with Your Practice Needs",
            className: "!tw-border-2 !tw-border-yellow-300 tw-bg-yellow-100 after:!tw-bg-yellow-300"
        },
        // {
        //     icon: "📉",
        //     label: "Accelerated Reimbursements & Improved Cash Flow",
        //     className: "!tw-border-2 !tw-border-red-300 tw-bg-red-100 after:!tw-bg-red-300"
        // },

        {
            icon: "📊",
            label: "Real-Time Reporting & Transparency",
            className: "!tw-border-2 !tw-border-indigo-300 tw-bg-indigo-100 after:!tw-bg-indigo-300"
        },
        {
            icon: "🤝",
            label: "Dedicated Support with Experienced Billing Experts",
            className: "!tw-border-2 !tw-border-gray-300 tw-bg-gray-100 after:!tw-bg-gray-300"
        },
        {
            icon: "🛡️",
            label: "Strict Compliance with HIPAA and Industry Standards",
            className: "!tw-border-2 !tw-border-secondary-400 tw-bg-secondary-200 after:!tw-bg-secondary-400"
        },
        {
            icon: "💡",
            label: "Technology-Driven for Efficiency & Accuracy",
            className: "!tw-border-2 !tw-border-pink-300 tw-bg-pink-100 after:!tw-bg-pink-300"
        }
    ];




    const clientTypes = [
        { icon: "👨‍⚕️", text: "Independent Physicians & Solo Practices" },
        { icon: "🏥", text: "Physician Groups & Multi-Specialty Clinicss" },
        { icon: "👨‍⚕️", text: "Specialty Providers (Cardiology, Radiology, etc.)" },
        { icon: "🏨", text: "Large Healthcare Organizations & Networks" },
        { icon: "🌎", text: "U.S.-Based Healthcare Providers Seeking Reliable Billing Support" },
    ]

    const faqs = [
        {
          question: "What are physician billing solutions?",
          answer:
            "Physician billing solutions are those who act on behalf of the doctors and require them, including charge entry, coding, submission of claims, posting of payments, and denial management."
        },
        {
          question: "How do physician billing services improve revenue?",
          answer:
            "When dealing with the billing cycle professionally, they increase revenues by reducing any errors, speeding reimbursement, increasing claim accuracy, and lowering denial rates."
        },
        {
          question: "Are physician billing solutions HIPAA-compliant?",
          answer:
            "Yes, all reputable physician billing companies operate successfully under strict HIPAA guidelines, ensure patient data protection, and meet all legal and regulatory requirements."
        },
        {
          question: "Can physician billing services be customized by specialty?",
          answer:
            "Absolutely. Billing solutions can be specialized by field so that each area receives the appropriate coding and reimbursement optimization, e.g., cardiology, radiology, internal medicine, etc."
        },
        {
          question: "What’s the difference between in-house billing and outsourcing?",
          answer:
            "In-house billing refers to billing managed by internal staff while outsourcing is the expert handling of the same process that often leads to decreased errors, time-saving, and a better collection."
        },
        {
          question: "How do I choose the right physician billing provider?",
          answer:
            "One should be looked into for relevant experience in your specialty, a proven track record, HIPAA compliance, transparent reporting, and revenue cycle support from start to finish."
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


                                <p>Are you feeling stressed with the process of medical billing and coding for your practice? Key MedSolutions aligns physician billing services so you don't have to, but we can increase the revenue your practice earns! Finances for your practice are hard work, but with the right partner it all can be smooth sailing. Let our trusted physician billing solutions support your profitability and improve your practice!</p>
                                <p>Operating a medical practice comes with wearing many hats. In addition to excellent patient care, physicians are also responsible for administrative tasks, such as  <Link className='tw-font-bold tw-text-black' href={"/medical-billing-services"}>medical billing</Link>, coding, and revenue cycle management (RCM). This typically includes reviewing fee schedules and performing credentialing, EMR (Electronic Medical Records) data migration, document management systems, and mobile charge capture—time-consuming tasks that take you away from patients. Our specialty physician billing services can help you manage those responsibilities.</p>
                                <p>With our company as a trusted physician billing company in the United States we provide trustworthy and customizable billing solutions for healthcare providers, from small solo practices to large single groups. Key MedSolutions is experienced enough to handle all aspects of the billing cycle - we handle new patient registration, claims submission, payment posting, denial management, and persistent follow up - keeping your practice financially stable.</p>
                                <p>Efficiency, compliance and transparency are key drivers of success at Key MedSolutions. Our physician billing solutions are cost-effective and help reduce claim denials, increase the speed of reimbursements, manage cashflow and reduce overhead costs. Primary care physicians and specialists alike will benefit from our scalable solutions which integrate seamlessly into your clinical workflows and meet your business objectives.</p>
                            </div>
                            {/* <div className="col"></div> */}
                        </div>
                    </div>



                </section>

            </div>


            <SolutionsWeOffer
                firstHalf={firstHalf}
                secondHalf={secondHalf}
                title='Comprehensive Physician Billing Solutions We Offer' />

            <WhoWeServe title='Who We Serve?' data={clientTypes} />

            <WhyChooseOurMedicalBilling title='Why Choose Our Medical Billing and RCM Services?' data={WhyChooses} />

            <div className='container tw-pb-16'>
                <div className="info-bx tw-mt-16">
                    <div className="heading-bx text-left">
                        <h3 className="tw-text-2xl md:tw-text-2xl">Let’s Optimize Your Practice Revenue!</h3>
                    </div>
                    <p>

                        Partner with Key MedSolutions and let us tackle your back-office billing issues so you can concentrate on what really matters—your patients. Our well-tested, proven physician billing services offer intelligent, compliant, and scalable solutions to help support your practice in today's complex healthcare environment.

                    </p>

                    <p>
                        <Link className='tw-font-bold tw-text-black' href={"/contact-us"}> Contact us</Link>  today to explore ways to help streamline your billing and boost your practice's financial health.</p>
                </div>


                <div className="info-bx tw-mt-16">
                    <div className="heading-bx text-left">
                        <h3 className="tw-text-2xl md:tw-text-2xl">FAQs – Physician Billing Solutions</h3>
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
}

export default PhysicianBillingServicesV2