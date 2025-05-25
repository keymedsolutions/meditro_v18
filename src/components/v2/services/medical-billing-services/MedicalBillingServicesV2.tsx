"use client";
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Breadcrumb from '@/components/ui/breadcrumb';
import Link from 'next/link';
import { Accordion } from 'react-bootstrap';
import WhyChooseOurMedicalBilling from '@/components/services/common/WhyChooseOurMedicalBilling';
import WhoWeServe from '@/components/services/common/WhoWeServe';
import SolutionsWeOffer from '@/components/services/common/SolutionsWeOffer';

const MedicalBillingServicesV2 = () => {

  const services = [
    "End-to-End Medical Billing and Coding Services",
    "Charge Capture and Claims Submission",
    "Payment Posting & Reconciliation",
    "Denial Management and Appeals",
    "AR Recovery & Follow-Up",
    "Credentialing and Provider Enrolment Support",
    "Customized Reporting & Real-Time Analytics",
    "HIPAA-Compliant Data Handling",
    "Payer Contract Review & Fee Schedule Analysis",
    "Integration with Major EHR & PM Systems",
  ]

  const title = "Reliable, Affordable, and HIPAA-Compliant Medical Billing Services for Healthcare Providers";
  const path = "/medical-billing-services"

  const mid = Math.ceil(services.length / 2);
  const firstHalf = services.slice(0, mid);
  const secondHalf = services.slice(mid);

  // Array of feature objects with Tailwind bg classes
  const WhyChooses = [
    {
      icon: "🏆",
      label: "Decades of Expertise in Medical Billing and Coding",
      className: "!tw-border-2 !tw-border-blue-300 tw-bg-blue-100 after:!tw-bg-blue-300"
    },
    {
      icon: "🔒",
      label: "HIPAA-Compliant, Secure Billing Infrastructure",
      className: "!tw-border-2 !tw-border-green-300 tw-bg-green-100 after:!tw-bg-green-300"
    },
    {
      icon: "💼",
      label: "Scalable Services for Small Clinics to Large Enterprises",
      className: "!tw-border-2 !tw-border-yellow-300 tw-bg-yellow-100 after:!tw-bg-yellow-300"
    },
    {
      icon: "⏱️",
      label: "Real-Time Claims Tracking & Transparent Reporting",
      className: "!tw-border-2 !tw-border-red-300 tw-bg-red-100 after:!tw-bg-red-300"
    },
    {
      icon: "🔄",
      label: "Seamless EHR/EMR Integration",
      className: "!tw-border-2 !tw-border-gray-300 tw-bg-gray-100 after:!tw-bg-gray-300"
    },
    {
      icon: "👨‍💼",
      label: "Dedicated Account Managers & 24/7 Support",
      className: "!tw-border-2 !tw-border-indigo-300 tw-bg-indigo-100 after:!tw-bg-indigo-300"
    },
    {
      icon: "🏥",
      label: "Specialized in Managed Billing for Medical Practices",
      className: "!tw-border-2 !tw-border-secondary-400 tw-bg-secondary-200 after:!tw-bg-secondary-400"
    },
    {
      icon: "✅",
      label: "100% US-Based Medical Billing Company",
      className: "!tw-border-2 !tw-border-pink-300 tw-bg-pink-100 after:!tw-bg-pink-300"
    },
    {
      icon: "📈",
      label: "Proven Track Record of Revenue Growth & Faster Reimbursements",
      className: "!tw-border-2 !tw-border-purple-300 tw-bg-purple-100 after:!tw-bg-purple-300"
    }
  ];




  const clientTypes = [
    { icon: "👨‍⚕️", text: "Individual Physicians and Solo Practices" },
    { icon: "🏥", text: "Multispecialty Clinics and Medical Groups" },
    { icon: "🔬", text: "Diagnostic & Imaging Centers" },
    { icon: "❤️", text: "Radiology, Cardiology, Internal Medicine Providers" },
    { icon: "👨‍⚕️", text: "Surgical Centers & Ambulatory Practices" },
    { icon: "🏥", text: "Hospital-Owned Physician Networks" },
    { icon: "📱", text: "Telehealth and Virtual Care Providers" },
    { icon: "🏢", text: "Healthcare Startups and RCM Firms" },
  ]

  const faqs = [
    {
      question: "What are medical billing services and how do they help my practice?",
      answer:
        "Medical billing services are responsible for preparing, submitting, and following up on insurance claims and payments in order to obtain provider payment in a timely manner. These services alleviate administrative burdens, improved cash flow and allows the provider to maximise their time spent on patient care."
    },
    {
      question: "Are your billing services HIPAA-compliant?",
      answer:
        "Yes, our services are strictly HIPAA compliant. Confidential patient data is handled securely and 100% protected for use along the entire billing process."
    },
    {
      question: "How do your services benefit healthcare providers in Greensboro, NC?",
      answer:
        "We provide local expertise, personal service, and customized revenue cycle management solutions to healthcare practices in Greensboro, NC."
    },
    {
      question: "Can I outsource only certain parts of the billing process?",
      answer:
        "Absolutely, we give you flexibility in your outsourcing solutions, meaning you can work with us to outsource specific tasks like claims submission, denial management, or patient billing based on your needs."
    },
    {
      question: "How does your team stay current with changing regulations?",
      answer:
        "Our billing specialists receive ongoing training and education on the latest healthcare compliance rules, regulations, and payer requirements."
    },
    {
      question: "What makes you the best medical billing company in Greensboro, USA?",
      answer:
        "We are a trusted partner for revenue maximization and billing error reduction with our local presence and expert team, transparent reporting and proven successful results."
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
                <p>In the today's complex world of healthcare billing is a vital part of keeping your practice solvent. Key MedSolutions provides professional billing services in the US that can help healthcare providers decrease denials, lower overhead, and solidify collections. Our knowledgeable medical billing consultants focus on effective medical billing allowing providers to navigate payor rule changes, work on billing efficiencies, and ensure full reimbursements for every service.</p>
                <p>As a recognized medical billing and coding company, we deliver all-inclusive revenue cycle management solutions specifically designed to meet the needs of your practice. During the revenue cycle management process, we handle everything from patient registrations, insurance verifications, claims submissions, and denials to ensure full management of your revenue cycle for maximum efficiency and profitability.</p>
                <p>Whether you are an independent provider or a multispecialty group, our outsourced medical billing services are designed to minimize administrative burden and speed up cash flow. We utilize advanced technology, regulatory knowledge, and industry best practices to provide accurate medical billing and coding services that fulfill the demands of today's rapidly changing healthcare landscape.</p>
                <p>At Key MedSolutions, we consider ourselves a valuable and reliable medical billing consulting services and company. Our tailored solutions allow you to focus more on what really matters to you: delivering quality patient care, while we can (as a premier revenue cycle management company in the USA) help you with the details - compliance and payer communications, followed up by claims submission!</p>
              </div>
              {/* <div className="col"></div> */}
            </div>
          </div>



        </section>

      </div>


      <SolutionsWeOffer
        firstHalf={firstHalf}
        secondHalf={secondHalf}
        title='Comprehensive Medical Billing Services We Offer' />

      <WhoWeServe title='Who We Serve' data={clientTypes} />

      <WhyChooseOurMedicalBilling title='Why Choose Our Medical Billing Services?' data={WhyChooses} />

      <div className='container tw-pb-16'>
        <div className="info-bx tw-mt-16">
          <div className="heading-bx text-left">
            <h3 className="tw-text-2xl md:tw-text-2xl">Ready to Unlock Full Reimbursement Potential?</h3>
          </div>
          <p>
            Join the nation's trusted medical billing and coding company, Key MedSolutions. Our medical billing services experience helps healthcare providers increase net revenue, minimize claim denials, and eliminate unproductive workflows.
          </p>

          <p>
            <Link className='tw-font-bold tw-text-black' href={"/contact-us"}> Contact us</Link> today to learn how our managed billing for medical practices can improve your collections and enhance your revenue cycle.
          </p>
        </div>


        <div className="info-bx tw-mt-16">
          <div className="heading-bx text-left">
            <h3 className="tw-text-2xl md:tw-text-2xl">FAQs – Medical Billing Services</h3>
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

export default MedicalBillingServicesV2;
