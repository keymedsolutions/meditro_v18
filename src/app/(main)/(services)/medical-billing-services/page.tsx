/* eslint-disable react/no-unescaped-entities */
"use client"
import Breadcrumb from '@/components/ui/breadcrumb';
import { ContactInfo } from '@/constant/constatnt';
import { APP_PATH } from '@/data/PATH_APP';
import { sanitizePhoneNumber } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'

import { motion } from "framer-motion";
import { useMediaQuery } from "usehooks-ts";
import { Accordion } from 'react-bootstrap';
const MedicalBilingServices = () => {

    const mdMatches = useMediaQuery("(min-width: 1024px)");

    const title = "Reliable, Affordable, and HIPAA-Compliant Medical Billing Services for Healthcare Providers";
    const path = "/medical-billing-services"

    const billingFeatures = [
        {
            title: "Medical Billing and Coding Services",
            icon: "📋",
            description:
                "Our team is dedicated to accurate coding ensuring CPT, ICD-10, HCPCS codes are well mapped to reduce denials and expedite reimbursement process.",
        },
        {
            title: "Claims Submission and Follow-Up",
            icon: "🔍",
            description:
                "We are in charge from beginning to the end of the claim administration, from electronic submissions to follow ups on unpaid and rejected claims.",
        },
        {
            title: "HIPAA-Compliant Medical Billing Services",
            icon: "🔐",
            description:
                "We prioritize security and compliance in our operations. Our systems uphold or go beyond HIPAA rules.",
        },
        {
            title: "Reporting and Revenue Insights",
            icon: "📊",
            description:
                "Stay ahead of the game with comprehensive, easy-to-understand financial reports and records ready for auditing.",
        },
        {
            title: "Patient Billing and Support",
            icon: "📞",
            description:
                "We handle patient statements and deliver you friendly customer service that solves billing questions.",
        },
    ];


 const faqs = [
        {
          question: "What are medical billing services and how do they help my practice?",
          answer:
            "Medical billing services take care of the administrative work of submitting and following up on insurance claims to make sure you get paid on time and accurately.",
        },
        {
          question: "Are your billing services HIPAA-compliant?",
          answer:
            "Absolutely. We provide HIPAA-compliant medical billing services for medical facilities, using encrypted systems and strict protocols to protect patient data.",
        },
        {
          question: "How do your services benefit healthcare providers in Greensboro, NC?",
          answer:
            "We provide cost-effective medical billing services in Greensboro, NC to reduce claim denials, save money, and optimize revenue cycles with local support.",
        },
        {
          question: "Can I outsource only certain parts of the billing process?",
          answer:
            "Absolutely! We offer several flexible packages, whether you need end-to-end support or custom assistance such as medical billing and coding.",
        },
        {
          question: "How does your team stay current with changing regulations?",
          answer:
            "Our billing professionals and certified coders are under current training and using cutting-edge tools to make sure they are in gather with the rules and regulations of Medicare, Medicaid, and commercial payers.",
        },
        {
          question: "What makes you the best medical billing company in Greensboro, USA?",
          answer:
            "Our company has combined great value and benefits which is fantastic news for healthcare organizations, practices, and patients who may be considering our services.",
        },
      ];
      

    return (
        <>

            <div className="page-content bg-white">
                <Breadcrumb title={title}
                    breadcrumb={[{ label: title, href: path }]} />
                <section className="section-area section-sp1 bg-white blog1">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-12 col-lg-10 col-xl-10 mb-30 mb-md-50">
                                <div className="blog-card blog-single">
                                    <div className="info-bx">
                                        <div className="heading-bx text-center">
                                            <h3 className="title">{title}</h3>
                                        </div>
                                        <div className="ttr-post-text">
                                            <p>
                                                Our specialty at Key Medsolutions is medical billing services that streamline your revenue cycle and cut expenses. Our solutions offer unparalleled accuracy, efficiency, and support for HIPAA-compliant billing services for healthcare providers of all sizes, from solo practices to multispecialty clinics.
                                            </p>

                                            <p>

                                                We offer complete <Link className='tw-text-black tw-font-bold' href={APP_PATH.services.codingServices.path as string}>medical billing and coding services</Link> in addition to billing, making sure that all diagnoses and procedures are appropriately coded in accordance with the most recent CPT, ICD-10, and HCPCS guidelines. In order to reduce claim denials, improve compliance, and expedite reimbursements, our certified coders collaborate closely with providers.
                                            </p>

                                            <p>We offer complete, end-to-end medical billing services that are customized to meet the particular requirements of healthcare facilities. In order to decrease denials and expedite reimbursements, we provide medical billing and coding services that guarantee accurate CPT, ICD-10, and HCPCS coding.</p>

                                            <p>Furthermore, we offer medical billing solutions that have been proven to work as well as medical claims billing solutions that are intended to maximize revenue cycle performance. As the top medical billing company in Greensboro, USA, we have gained the trust of medical professionals across the country thanks to our dedication to accuracy, compliance, and individualized support.
                                            </p>
                                        </div>
                                        <div className="ttr-post-footer mx-auto text-center justify-content-center">
                                            <ul style={{ gap: "30px" }} className='tw-flex tw-justify-center tw-items-center !tw-m-0 !tw-gap-x-9'>
                                                <li className="num-bx">
                                                    <a href={`tel:${sanitizePhoneNumber(ContactInfo.phone2)}`}>
                                                        <i className="fas fa-phone-alt"></i>{ContactInfo.phone2}
                                                    </a>
                                                </li>
                                                <li className="btn-area ">
                                                    <Link href="/contact-us" className="btn btn-primary shadow">
                                                        CONTACT US <i className="btn-icon-bx fas fa-chevron-right"></i>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>


                                    </div>


                                    <div className="info-bx tw-mt-16">
                                        <div className="heading-bx text-left">
                                            <h2 className="tw-text-3xl">Why Choose Our Medical Billing Services?</h2>
                                        </div>


                                        <div className="row align-items-center">
                                            <div className="col-md-12 mb-30">
                                                <ul className="list-check-squer mb-0">
                                                    <li>Certified Experts in Medical Coding and Billing</li>
                                                    <li>Fully HIPAA-Compliant Workflows</li>
                                                    <li> Transparent Reporting and Analytics</li>
                                                    <li>Denial Management and Appeals</li>
                                                    <li>Affordable Medical Billing Services in NC, USA</li>
                                                    <li>Personalized Support from Dedicated Account Managers</li>
                                                </ul>
                                            </div>

                                        </div>


                                        <p> Whether you want to ship medical bills to save money in the United States, or you need to control bill handling for healthcare facilities, Key Medsolution is the ideal partner for you.</p>
                                    </div>


                                    <div className="info-bx tw-mt-16">
                                        <div className="heading-bx text-left">
                                            <h2 className="tw-text-3xl">Comprehensive Healthcare Billing Services We Offer</h2>
                                        </div>
                                        <div className="row">
                                            {billingFeatures.map((service, index) => {
                                                const isMd = mdMatches; // Use media query result
                                                const initialX = isMd
                                                    ? index % 3 === 0
                                                        ? -50
                                                        : index % 3 === 2
                                                            ? 50
                                                            : 0
                                                    : index % 2 === 0
                                                        ? -20
                                                        : 20;
                                                return (
                                                    <motion.div
                                                        key={index}
                                                        initial={{ opacity: 0, x: initialX }}
                                                        whileInView={{
                                                            opacity: 1,
                                                            x: 0,
                                                            transition: { duration: 0.5, delay: index * 0.1 },
                                                        }}
                                                        viewport={{ once: true }}
                                                        className="col-lg-6 col-12 mb-30 service_card"
                                                    >
                                                        <motion.div
                                                            whileHover={{ scale: 1.03 }}
                                                            transition={{ duration: 0.3 }}
                                                            className="feature-container feature-bx2 feature1"
                                                        >
                                                            <div className="feature-box-xl mb-20">
                                                                <span className="icon-cell">
                                                                    <i style={{
                                                                        fontSize: "3rem"
                                                                    }} className='!tw-text-2xl'>{service.icon}</i>
                                                                </span>
                                                            </div>
                                                            <div className="icon-content">
                                                                <h5 className="ttr-title">{service.title}</h5>
                                                                <p>{service.description}</p>
                                                                {/* <Link
                          to="/service-detail"
                          className="btn btn-primary light"
                        >
                          View More
                        </Link> */}
                                                            </div>
                                                        </motion.div>
                                                    </motion.div>
                                                );
                                            })}
                                        </div>

                                    </div>



                                    <div className="info-bx tw-mt-16">
                                        <div className="heading-bx text-left">
                                            <h2 className="tw-text-3xl">Who We Serve?</h2>
                                        </div>
                                        <p>Our <strong className='tw-font-bold'>medical billing solutions</strong> are perfect for:</p>

                                        <ul className="list-check-squer mb-4">
                                            <li>Primary Care Providers</li>
                                            <li>Specialists (Cardiology, Radiology, Orthopaedics, etc.)</li>
                                            <li>Group Practices</li>
                                            <li>Clinics and Ambulatory Surgery Centres</li>
                                            <li>Behavioural Health and Therapy Providers</li>
                                        </ul>
                                        <p>If you're seeking the <strong className='tw-font-bold'>best medical billing company in Greensboro, USA</strong>, look no further.</p>
                                    </div>
                                    <div className="info-bx tw-mt-16">
                                        <div className="heading-bx text-left">
                                            <h2 className="tw-text-3xl">Let’s Optimize Your Practice Revenuee?</h2>
                                        </div>
                                        <p>Selecting <Link className='tw-font-bold tw-text-black' href={"/"}>Key Medsolution</Link> entails working with a reputable group that lowers your overhead expenses while offering the best medical billing and coding services. Our reasonably priced medical billing and coding services in Greensboro, NC provide efficiency and compliance to regional and national healthcare providers by increasing revenue, guaranteeing correct coding, and lowering claim errors.</p>


                                        <p>📞 <Link className='tw-font-bold tw-text-black' href={"/contact-us"}>Contact us</Link> now to book a free consultation and get the best direction on how to outsource medical billing services in USA the right way!</p>
                                    </div>


                                    <div className="info-bx tw-mt-16">
                                        <div className="heading-bx text-left">
                                            <h2 className="tw-text-3xl">FAQs – Medical Billing Services</h2>
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


                            </div>

                        </div>
                    </div>
                </section >



            </div >
        </>
    )
}

export default MedicalBilingServices
