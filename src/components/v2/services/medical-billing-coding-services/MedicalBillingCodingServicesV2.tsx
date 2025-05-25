"use client";
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Breadcrumb from '@/components/ui/breadcrumb';
import Link from 'next/link';
import { Accordion } from 'react-bootstrap';
import WhyChooseOurMedicalBilling from '@/components/services/common/WhyChooseOurMedicalBilling';
import WhoWeServe from '@/components/services/common/WhoWeServe';
import SolutionsWeOffer from '@/components/services/common/SolutionsWeOffer';

const MedicalBillingCodingServicesV2 = () => {

  const services = [
   "ICD-10, CPT, and HCPCS Coding Services",
"Procedure & Diagnosis Documentation Review",
"Specialty-Specific Coding (Radiology, Cardiology, etc.)",
"HIPAA-Compliant Medical Coding Solutions",
"Real-Time Auditing & Compliance Review",
"EMR/EHR Meaningful Use Support",
"Denial Management & Claims Resubmission",
"Medical Billing & Coding Integration",
"Fee Schedule Review & Coding Accuracy Audits"
  ]

  const title = "Streamline Your Practice with Expert Medical Coding and Billing Solutions";
  const path = "/medical-billing-coding-services"

  const mid = Math.ceil(services.length / 2);
  const firstHalf = services.slice(0, mid);
  const secondHalf = services.slice(mid);

  // Array of feature objects with Tailwind bg classes
  const WhyChooses = [
    {
        icon: "📈",
        label: "Accurate & Timely Medical Coding for Better Reimbursement",
        className: "!tw-border-2 !tw-border-cyan-300 tw-bg-cyan-100 after:!tw-bg-cyan-300"
      },
    {
      icon: "⚙️",
      label: "Scalable Solutions Tailored to Your Practice Size",
      className: "!tw-border-2 !tw-border-blue-300 tw-bg-blue-100 after:!tw-bg-blue-300"
    },
    {
      icon: "🧑‍💼",
      label: "Certified Coders with Deep Industry Experience",
      className: "!tw-border-2 !tw-border-green-300 tw-bg-green-100 after:!tw-bg-green-300"
    },
    {
        icon: "🛡️",
        label: "Full Compliance with HIPAA, ICD-10, and Payer Guidelines",
        className: "!tw-border-2 !tw-border-secondary-400 tw-bg-secondary-200 after:!tw-bg-secondary-400"
      },
    {
      icon: "🔁",
      label: "Seamless Integration with EHR/EMR Systems",
      className: "!tw-border-2 !tw-border-yellow-300 tw-bg-yellow-100 after:!tw-bg-yellow-300"
    },
    {
      icon: "📉",
      label: "Reduced Denials and Audit Risks",
      className: "!tw-border-2 !tw-border-red-300 tw-bg-red-100 after:!tw-bg-red-300"
    },

    {
        icon: "📊",
        label: "Transparent Reporting & Regular Performance Audits",
        className: "!tw-border-2 !tw-border-indigo-300 tw-bg-indigo-100 after:!tw-bg-indigo-300"
      },
    {
      icon: "🔍",
      label: "Ongoing Training and Quality Assurance Processes",
      className: "!tw-border-2 !tw-border-gray-300 tw-bg-gray-100 after:!tw-bg-gray-300"
    }
  ];




  const clientTypes = [
    { icon: "👨‍⚕️", text: "Independent Physicians & Solo Practices" },
    { icon: "💼", text: "Multi-Specialty Clinics & Physician Groups" },
    { icon: "🏥", text: "Hospitals & Outpatient Care Facilities" },
    { icon: "🏨", text: "Medical Billing Companies Seeking Coding Support" },
    { icon: "🧠", text: "Radiology, Cardiology & Other Specialized Providersort" },
    { icon: "🌎", text: "U.S.-Based Healthcare Organizations Requiring Outsourced Coding" },
  ]

  const faqs = [
    {
      question: "What are medical coding services?",
      answer:
        "Medical coding services take the details of healthcare diagnoses, procedures, and services and turn them into standard codes used for billing and insurance."
    },
    {
      question: "Why is accurate medical coding important?",
      answer:
        "The quality of patient care is reflected in accurate coding, which also guarantees proper reimbursement, reduces claim denials, and promotes compliance."
    },
    {
      question: "What types of codes are used in medical coding?",
      answer:
        "ICD-10 (diagnoses), CPT (procedures), and HCPCS (supplies and services not covered by CPT) are examples of common code sets."
    },
    {
      question: "Are medical coding services HIPAA-compliant?",
      answer:
        "Yes, to protect the privacy and security of patient health information, professional coding providers follow to HIPAA regulations."
    },
    {
      question: "Can coding services be tailored to different specialties?",
      answer:
        "Absolutely, to guarantee precise and specialty-specific coding, services can be tailored for specialties such as cardiology, radiology, orthopaedics, and more."
    },
    {
      question: "How do outsourced medical coding services benefit healthcare providers?",
      answer:
        "Healthcare personnel can concentrate on patient care when outsourcing eases administrative load, increases claim accuracy, and expedites reimbursements."
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
               
               
               <p>Key MedSolutions is a North Carolina-based company that is a trusted leader in medical billing and coding services. We provide customized coding and documentation services to healthcare providers through the US. We provide services for physician groups, specialty practices, and clinics. We are committed to efficiency, accuracy, and compliance. Our certified medical coders will provide customized services according to your operational needs, so that you can focus more on caring for patients and less on the administrative burden of your job.</p>
               <p>We know that accurate medical coding is the best foundation to a healthy revenue cycle. Our medical coding services are designed to properly and timely document the diagnoses and procedures to establish a more reliable and healthier claim submission. Because we utilize the latest industry guidelines we ensure all HIPAA regulations, ICD-10 and EHR meaningful use guidelines are followed - providing your practice with HIPAA compliant medical coding services that eliminate errors, create better reimbursements and enhance your business profitability.</p>
               <p>Whether you're in need of   <Link className='tw-font-bold tw-text-black' href={"/ICD-10-medical-coding"}> ICD-10 coding services</Link>, procedure code audits, or medical billing and coding, our team of experts can help. We provide outsourced coding services at any stage of the coding process, from claims submission to denial management to payment reconciliation. We provide scalable outsourcing coding solutions for practices of all types and sizes. We pride ourselves on delivering quality, compliant coding services, and that's why we are a preferred coding solution partner to the U.S. healthcare system.</p>
               <p>Key MedSolutions utilizes a data-driven approach to ensure accurate claims are submitted quickly and minimize any potential claims compliance risks. Our solutions are about more than just coding—they're about empowering your practice to improve both your financial and operational health. Healthcare providers who engage with us, benefit from smarter workflows, greater accuracy, and measurable improvement in revenue cycle management.</p>
                   </div>
              {/* <div className="col"></div> */}
            </div>
          </div>



        </section>

      </div>


      <SolutionsWeOffer
        firstHalf={firstHalf}
        secondHalf={secondHalf}
        title='Comprehensive Medical Coding Services We Offer' />

      <WhoWeServe title='Who We Serve?' data={clientTypes} />

      <WhyChooseOurMedicalBilling title='Why Choose Our Medical Coding Services?' data={WhyChooses} />

      <div className='container tw-pb-16'>
        <div className="info-bx tw-mt-16">
          <div className="heading-bx text-left">
            <h3 className="tw-text-2xl md:tw-text-2xl">Enhance Accuracy, Maximize Revenue!</h3>
          </div>
          <p>


          At Key MedSolutions, our goal is to provide intelligent, compliant and dependable medical coding solutions that drive your revenue cycle. Let us handle your medical coding and billing operations so your team can focus on more important things than manual processes, reducing claim denials, and improving your financial outcomes.
          </p>

          <p>
            <Link className='tw-font-bold tw-text-black' href={"/contact-us"}> Contact us</Link> today to understand how our full suite of medical coding services and solutions are designed to build streamlined workflows, protect compliance, and improve profitability.
          </p>
        </div>


        <div className="info-bx tw-mt-16">
          <div className="heading-bx text-left">
            <h3 className="tw-text-2xl md:tw-text-2xl">FAQs – Medical Coding Services</h3>
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

export default MedicalBillingCodingServicesV2;
