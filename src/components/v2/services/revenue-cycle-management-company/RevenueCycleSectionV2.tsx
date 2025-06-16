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
    "End-to-End Medical Billing & Coding Services",
    "Claims Management – Submission, Follow-Up & Payment Posting",
    "Insurance Eligibility & Benefits Verification",
    "Denial Management & Resolution",
    "Patient Billing, Collections & Statement Management",
    "Accounts Receivable Recovery & Medical Debt Collection",
    "Specialty Billing Services (Radiology, Cardiology, etc.)",
    "Revenue Cycle KPIs Tracking & Performance Reporting",
    "Profitability Enhancement & Workflow Optimization",
    "HIPAA-Compliant and Secure Billing Solutions",
  ]

  const title = "Trusted Healthcare Revenue Cycle Management Solutions for Improved Financial Performance";
  const path = "/revenue-cycle-management-company"

  const mid = Math.ceil(services.length / 2);
  const firstHalf = services.slice(0, mid);
  const secondHalf = services.slice(mid);

  // Array of feature objects with Tailwind bg classes
  const WhyChooses = [
    {
      icon: "⚙️",
      label: "Complete Revenue Cycle Management from Start to Finish",
      className: "!tw-border-2 !tw-border-blue-300 tw-bg-blue-100 after:!tw-bg-blue-300"
    },
    {
      icon: "🔍",
      label: "Enhanced Claim Accuracy and Lower Denial Rates",
      className: "!tw-border-2 !tw-border-green-300 tw-bg-green-100 after:!tw-bg-green-300"
    },
    {
      icon: "💼",
      label: "Scalable Solutions Tailored to Your Practice Needs",
      className: "!tw-border-2 !tw-border-yellow-300 tw-bg-yellow-100 after:!tw-bg-yellow-300"
    },
    {
      icon: "📉",
      label: "Accelerated Reimbursements & Improved Cash Flow",
      className: "!tw-border-2 !tw-border-red-300 tw-bg-red-100 after:!tw-bg-red-300"
    },
    {
      icon: "🧠",
      label: "Experienced Team with In-depth Industry Knowledge",
      className: "!tw-border-2 !tw-border-gray-300 tw-bg-gray-100 after:!tw-bg-gray-300"
    },
    {
      icon: "📊",
      label: "Real-Time KPI Reporting for Informed Decision-Making",
      className: "!tw-border-2 !tw-border-indigo-300 tw-bg-indigo-100 after:!tw-bg-indigo-300"
    },
    {
      icon: "🛡️",
      label: "Secure, Compliant, and Transparent Operations",
      className: "!tw-border-2 !tw-border-secondary-400 tw-bg-secondary-200 after:!tw-bg-secondary-400"
    },
    {
      icon: "🤝",
      label: "Personalized Support with Dedicated Account Managers",
      className: "!tw-border-2 !tw-border-pink-300 tw-bg-pink-100 after:!tw-bg-pink-300"
    }
  ];




  const clientTypes = [
    { icon: "👨‍⚕️", text: "Independent Physicians & Solo Medical Practices" },
    { icon: "🏨", text: "Multi-Specialty Clinics & Ambulatory Surgery Centers" },
    { icon: "👨‍⚕️", text: "Specialty Providers (Radiology, Cardiology, Behavioural Health, etc.)" },
    { icon: "🏥", text: "Hospitals & Integrated Health Systems" },
    { icon: "🌎", text: "Global Providers Needing U.S. Healthcare Billing Support" },
  ]

  const faqs = [
    {
      question: "What is Revenue Cycle Management (RCM) in healthcare?",
      answer:
        "RCM is the process of overseeing the entire financial lifecycle of a healthcare provider, including insurance verification, patient registration, billing, claims processing, and payment collection."
    },
    {
      question: "Why is RCM important for healthcare providers?",
      answer:
        "While maintaining regulatory compliance, RCM assists providers in increasing cash flow, decreasing claim denials, improving billing accuracy, and preserving financial stability."
    },
    {
      question: "What are the key components of the RCM process?",
      answer:
        "Medical coding, insurance eligibility verification, claims submission, payment posting, denial management, patient registration, and AR follow-up are important elements."
    },
    {
      question: "How does outsourcing RCM services benefit medical practices?",
      answer:
        "Outsourcing increases productivity, decreases operating expenses, guarantees adherence to regulations, minimizes billing errors, expedites reimbursements, and frees up employees to concentrate on patient care."
    },
    {
      question: "What technologies are used in modern RCM solutions?",
      answer:
        "Electronic Health Records (EHR), practice management software, artificial intelligence (AI) for claims and coding, and real-time analytics tools are some of the technologies used by RCM providers."
    },
    {
      question: "How can RCM solutions reduce claim denials?",
      answer:
        "RCM solutions help reduce denials and enhance collections by guaranteeing correct patient data, appropriate coding, eligibility checks, and timely claims submission."
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
                <p>Key MedSolutions, based in North Carolina, is a premier provider of Healthcare Revenue Cycle Management (RCM) Solutions and we work with healthcare providers across the globe to improve cash flow, reduce claims denials and ease the administrative burdens we all face. We provide customized revenue cycle services specifically designed to fit the financial and operational needs of contemporary healthcare practices.</p>
                <p>With years of practical experience in the health care industry, we know the difficult reimbursement issues health systems, specialty clinics, and private practices face. We can assist you with patient registration, insurance eligibility verification, claims submission and final payment, and anything in-between. Our experienced team provides notes that support the entire revenue lifecycle process to help improve your revenue potential and reimbursements.</p>
                <p>Our RCM methodology focuses on the financial performance of your organization and the operational efficiency of your practice. We will help you find the appropriate revenue cycle management services - whole or in part (e.g., denial resolution, patient billing, insurance benefit) - that easily keep up with the growth of your organization. Our strategic and scalable services are well-designed to match your organization's growth. We also add value to the support of <Link className='tw-font-bold tw-text-black' href={"/boost-your-practices-performance-with-revenue-cycle-kpis"}>improving your practice's performance, by tracking selected Revenue Cycle KPI's</Link>  in relation to days A/R, first-pass claim resolution, denial rates, and using this for performance improvement and optimization with cash flow and operational efficiencies etc. Our RCM team aims to also support you with reduced billing errors, more optimum revenue capture and ultimately let you do what you do best; delivering quality patient care.</p>
                <p>Key MedSolutions is built on innovation, precision, and compliance. We offer HIPAA-compliant, secure, and efficient Revenue Cycle Management (RCM) solutions with cutting-edge technology, industry best practices, and a data-driven approach. Key MedSolutions empowers clients in improving Revenue Cycle KPIs like Days in A/R, First-Pass Resolution Rates, and Denial Rates to gain actionable insights, operational efficiencies, and sustainable financial growth.</p>
              </div>
              {/* <div className="col"></div> */}
            </div>
          </div>



        </section>

      </div>


      <SolutionsWeOffer
        firstHalf={firstHalf}
        secondHalf={secondHalf}
        title='Comprehensive Healthcare Revenue Cycle Management Solutions We Offer' />

      <WhoWeServe title='Who We Serve?' data={clientTypes} />

      <WhyChooseOurMedicalBilling title='Why Choose Our Medical Billing and RCM Services?' data={WhyChooses} />

      <div className='container tw-pb-16'>
        <div className="info-bx tw-mt-16">
          <div className="heading-bx text-left">
            <h3 className="tw-text-2xl md:tw-text-2xl">Let’s Optimize Your Practice Revenuee?</h3>
          </div>
          <p>


            At Key MedSolutions, we're not only managing billing, we become an extension of your team. Helping healthcare providers achieve financial excellence is what we do, with solutions that flex, adapt, and grow with you. Whether you want to cut costs, improve billing efficiency, or stop revenue leakage, we can help.
          </p>

          <p>
            <Link className='tw-font-bold tw-text-black' href={"/contact-us"}> Contact us</Link> today for a free consultation and learn how our Healthcare Revenue Cycle Management Services can help your overall financials, reduce administrative burden, and plan for your practice's future.
          </p>
        </div>


        <div className="info-bx tw-mt-16">
          <div className="heading-bx text-left">
            <h3 className="tw-text-2xl md:tw-text-2xl">FAQs – Revenue Cycle Management Solutions</h3>
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
