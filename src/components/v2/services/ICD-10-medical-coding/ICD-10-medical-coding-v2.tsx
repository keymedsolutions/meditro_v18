"use client";
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Breadcrumb from '@/components/ui/breadcrumb';
import Link from 'next/link';
import { Accordion } from 'react-bootstrap';
import WhyChooseOurMedicalBilling from '@/components/services/common/WhyChooseOurMedicalBilling';
import WhoWeServe from '@/components/services/common/WhoWeServe';
import SolutionsWeOffer from '@/components/services/common/SolutionsWeOffer';

const ICD10MedicalCodingV2 = () => {

  const services = [
    "ICD-10-CM & ICD-10-PCS Coding",
    "CPT & HCPCS Coding Integration",
    "Claim Preparation & Submission Support",
    "Coding Audits & Documentation Review",
    "Specialty-Specific Medical Coding Expertise",
    "Compliance with HIPAA & Payer-Specific Guidelines",
    "Denial Analysis & Coding Corrections",
    "Faster Claim Turnaround & Fewer Rejections",
    "Outsourced ICD-10 Medical Coding Services",
    "Coding for Multispecialty Practices & Clinics",
  ]

  const title = "Accurate ICD-10 Medical Coding Services for Healthcare Providers"
  const path = "/revenue-cycle-management-company"

  const mid = Math.ceil(services.length / 2);
  const firstHalf = services.slice(0, mid);
  const secondHalf = services.slice(mid);

  // Array of feature objects with Tailwind bg classes
  const WhyChooses = [
    {
      icon: "✅",
      label: "AAPC & AHIMA-Certified Medical Coders",
      className: "!tw-border-2 !tw-border-green-300 tw-bg-green-100 after:!tw-bg-green-300"
    },
    {
      icon: "📚",
      label: "Up-to-Date Knowledge of ICD-10 & CPT Guidelines",
      className: "!tw-border-2 !tw-border-blue-300 tw-bg-blue-100 after:!tw-bg-blue-300"
    },
    {
      icon: "💼",
      label: "Experience Across Multiple Specialties",
      className: "!tw-border-2 !tw-border-yellow-300 tw-bg-yellow-100 after:!tw-bg-yellow-300"
    },
    {
      icon: "📉",
      label: "Reduced Denials & Increased Revenue Accuracy",
      className: "!tw-border-2 !tw-border-red-300 tw-bg-red-100 after:!tw-bg-red-300"
    },
    {
      icon: "🔐",
      label: "100% HIPAA-Compliant Workflows",
      className: "!tw-border-2 !tw-border-gray-300 tw-bg-gray-100 after:!tw-bg-gray-300"
    },
    {
      icon: "🧮",
      label: "Data-Driven Insights & Performance Reporting",
      className: "!tw-border-2 !tw-border-indigo-300 tw-bg-indigo-100 after:!tw-bg-indigo-300"
    },
    {
      icon: "🔧",
      label: "Scalable Services for Growing Practices",
      className: "!tw-border-2 !tw-border-purple-300 tw-bg-purple-100 after:!tw-bg-purple-300"
    },
    {
      icon: "📞",
      label: "Personalized Support & Dedicated Coding Team",
      className: "!tw-border-2 !tw-border-teal-300 tw-bg-teal-100 after:!tw-bg-teal-300"
    }
  ];



  const clientTypes = [
    { icon: "🏥", text: "Hospitals & Health Systems" },
    { icon: "🏨", text: "Physician Groups & Solo Providers" },
    { icon: "🧠", text: "Specialty Clinics (Orthopedic, Cardiology, etc.)" },
    { icon: "🖼️", text: "Diagnostic Labs & Imaging Centers" },
    { icon: "🗂️", text: "Medical Billing Companies & RCM Vendors" }
  ];


  const faqs = [
    {
      question: "What is ICD-10 medical coding?",
      answer:
        "ICD-10, the 10th revision of the International Classification of Diseases, is coded into diagnoses and health-related conditions for medical charts and billing."
    },
    {
      question: "Why is ICD-10 coding important for healthcare providers?",
      answer:
        "When done correctly, ICD-10 coding provides accurate documentation of health services rendered, supports proper billing, decreases denials of payment, and is compliant with regulatory standards."
    },
    {
      question: "How does ICD-10 differ from ICD-9?",
      answer:
        "ICD-10 is more precise in its details and specificity of coded conditions than ICD-9, and eHealth must provide accurate documentation of the diagnosis and/or treatment."
    },
    {
      question: "Are ICD-10 coding services HIPAA-compliant?",
      answer:
        "Yes, qualified ICD-10 coding stop can ensure compliance with HIPAA rules and protects patient privacy and health information."
    },
    {
      question: "Can ICD-10 coding services be customized for different medical specialties?",
      answer:
        "Absolutely. ICD-10 coding can fit the specific requirements of each specialty from cardiology to radiology, orthopaedics and many others."
    },
    {
      question: "How do outsourced ICD-10 coding services benefit healthcare providers?",
      answer:
        "Outsourcing enhances coding accuracy, lessens administrative responsibilities, speeds claims payments and gives doctors more time for the patient."
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


                <p>The success of any healthcare provider is significantly linked to accurate and compliant coding. The ICD-10 coding system is recognized across the globe as the standard for specific classification of diagnoses and procedures. It enables healthcare providers the ability to accurately bill for a significant number of diagnoses and procedures resulting in faster reimbursements. With approximately 68,000 diagnosis codes and 87,000 procedure codes, ICD-10 medical coding services deliver a whole new level of detail. Key MedSolutions provides ICD-10 coding solutions that will help mitigate claim rejections, comply with regulations, and improve financial outcomes.</p>
                <p>We provide ICD-10 coding services to healthcare organizations, from one provider offices to larger multispecialty clinics. As a reputable and experienced ICD-10 coding service provider, we employ experienced certified medical coders who are well-versed in ICD-10-CM and ICD-10-PCS to provide accurate, compliant and up-to-date <Link className='tw-font-bold tw-text-black' href={"/medical-coding-services"}>medical billing and coding services</Link>  with payer and regulatory requirements in mind. Our medical coders have extensive knowledge in over 20 medical specialties, allowing us to minimize coding errors to hasten the time required to approve your claims.</p>
                <p>We are not just providing basic coding. Our comprehensive ICD-10 coding services include a documentation review, CPT/ICD coding, compliance measures, and revenue capture. Our goal is to fully code claims based on current clinical documentation standards and payer rules to alleviate audit and deny risk and get the most revenue from every claim. We offer coding services rooted in traditional, on-going coding support or project-based solutions when an external project-based solution is needed, ensuring that our services are built to the exact needs of your practice.</p>
                <p>Our highly secure and scalable solutions are perfect for practices seeking outsourced ICD-10 coding services and wish to retain full control over compliance and billing workflows. Key MedSolutions is a reliable ICD-10 coding company based in the USA and has been helping healthcare providers improve coding accuracy, realize operational efficiencies, and enhance collections.</p>

              </div>
              {/* <div className="col"></div> */}
            </div>
          </div>



        </section>

      </div>


      <SolutionsWeOffer
        firstHalf={firstHalf}
        secondHalf={secondHalf}
        title='Comprehensive ICD-10 Coding Services We Offerr' />

      <WhoWeServe title='Who We Serve?' data={clientTypes} />

      <WhyChooseOurMedicalBilling title='Why Choose Our ICD-10 Coding Services?' data={WhyChooses} />

      <div className='container tw-pb-16'>
        <div className="info-bx tw-mt-16">
          <div className="heading-bx text-left">
            <h3 className="tw-text-2xl md:tw-text-2xl">Comprehensive ICD-10 Coding Services We Offer</h3>
          </div>
          <p>


            With Key MedSolutions, your practice receives more than just outsourced coding—we provide a partnership rooted in accuracy, compliance, and financial improvement. Let us take over your ICD-10 medical coding services so you can concentrate on quality care.
          </p>

          <p>
            <Link className='tw-font-bold tw-text-black' href={"/contact-us"}> Contact us</Link> now to see how our professional ICD-10 coding solutions can improve your billing performance, decrease lag time, and optimize your revenue cycle.
          </p>
        </div>


        <div className="info-bx tw-mt-16">
          <div className="heading-bx text-left">
            <h3 className="tw-text-2xl md:tw-text-2xl">FAQs – ICD-10 Coding Services</h3>
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

export default ICD10MedicalCodingV2;
