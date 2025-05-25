"use client";
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Breadcrumb from '@/components/ui/breadcrumb';
import Link from 'next/link';
import { Accordion } from 'react-bootstrap';
import WhyChooseOurMedicalBilling from '@/components/services/common/WhyChooseOurMedicalBilling';
import WhoWeServe from '@/components/services/common/WhoWeServe';
import SolutionsWeOffer from '@/components/services/common/SolutionsWeOffer';

const StreamliningMedicalARRecoveryV2 = () => {

  const services = [
    "Aging AR Follow-up (30, 60, 90, 120+ Days)",
    "Denial Management & Appeals",
    "Insurance Claims Reprocessing",
    "Patient Balance Recovery",
    "AR Workflow Optimization",
    "Revenue Cycle Audit & Strategy",
    "Claims Status Verification",
    "Insurance Eligibility Review for Denied Claims",
    "Reporting & Analytics on AR Trends",
    "HIPAA-Compliant Collections Process",
  ]

  const title = "Accelerate Collections with Comprehensive Accounts Receivable Recovery Solutions"

  const path = "/revenue-cycle-management-company"

  const mid = Math.ceil(services.length / 2);
  const firstHalf = services.slice(0, mid);
  const secondHalf = services.slice(mid);

  // Array of feature objects with Tailwind bg classes
  const WhyChooses = [
    {
      icon: "✅",
      label: "Proven Increase in Recovery Rates",
      className: "!tw-border-2 !tw-border-blue-300 tw-bg-blue-100 after:!tw-bg-blue-300"
    },
    {
      icon: "👨‍⚕️",
      label: "Specialized AR Team with Healthcare Expertise",
      className: "!tw-border-2 !tw-border-green-300 tw-bg-green-100 after:!tw-bg-green-300"
    },
    {
      icon: "🔗",
      label: "Integration with EHR/PM Systems",
      className: "!tw-border-2 !tw-border-yellow-300 tw-bg-yellow-100 after:!tw-bg-yellow-300"
    },
    {
      icon: "⏱️",
      label: "Fast Turnaround on Aging Claims",
      className: "!tw-border-2 !tw-border-red-300 tw-bg-red-100 after:!tw-bg-red-300"
    },
    {
      icon: "📣",
      label: "Transparent Reporting & Communication",
      className: "!tw-border-2 !tw-border-gray-300 tw-bg-gray-100 after:!tw-bg-gray-300"
    },
    {
      icon: "🛠️",
      label: "Customized Workflows to Fit Your Practice",
      className: "!tw-border-2 !tw-border-indigo-300 tw-bg-indigo-100 after:!tw-bg-indigo-300"
    },
    {
      icon: "💰",
      label: "Cost-Effective Solutions for All Practice Sizes",
      className: "!tw-border-2 !tw-border-secondary-400 tw-bg-secondary-200 after:!tw-bg-secondary-400"
    }
  ];




  const clientTypes = [
    { icon: "👨‍⚕️", text: "Independent Physicians & Specialty Clinics" },
    { icon: "🏥", text: "Multispecialty Practices & Diagnostic Centers" },
    { icon: "🏨", text: "Hospitals & Ambulatory Care Facilities" },
    { icon: "📑", text: "Healthcare Billing Companies & MSOs" },
    { icon: "📲", text: "Telehealth Providers & Urgent Care Centers" },
  ]

  const faqs = [
    {
      question: "What are accounts receivable recovery services?",
      answer:
        "These services aim at collection of unpaid invoices, and unpaid balances owed to providers or businesses to restore better cash flow."
    },
    {
      question: "How do accounts receivable recovery services benefit healthcare providers?",
      answer:
        "By using these services, these aged receivables can be reduced, revenue can be increased, and providers can focus on patient care rather than collecting unpaid balances."
    },
    {
      question: "What methods are used in accounts receivable recovery?",
      answer:
        "Methods include patient-friendly reminders, payment plans, insurance follow-up, and, as a last resort, professional debt collection."
    },
    {
      question: "Are these services compliant with healthcare regulations?",
      answer:
        "Yes, credible recovery services comply with HIPAA and other applicable regulations to safeguard patient data and provide ethical collections."
    },
    {
      question: "When should a healthcare provider consider accounts receivable recovery services?",
      answer:
        "When collecting payments internally is unsuccessful, and outstanding receivables are affecting the overall health of the organization."
    },
    {
      question: "Can accounts receivable recovery services be customized for different practice sizes?",
      answer:
        "Yes, these services can accommodate everything from the specific needs of individual small clinics to large-scale healthcare systems."
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
                <p>In today's healthcare environment, managing accounts receivable recovery services has become increasingly complicated. All forms of insurance are grappling with new models of case management, creating more co-pay and co-insurance options, and commonly incorporating high-deductible health plans, in turn complicating timely and complete collections. Administrative time consumed due to the reasons listed above will slow collections and complicate cash flow. Given these growing complexities, Key MedSolutions provides accounts receivable recovery services to help healthcare providers deal with particular concerns regarding the overdue accounts receivable (AR). Key MedSolutions provides timely and efficient AR recovery options that assist healthcare organizations by attaining a reduction in accounts receivable backlogs and restored revenue.</p>
                <p>We focus on the recovery of aging accounts receivable, especially any balances over 90 to 180+ days old, which regularly get written off without a concerted effort by your practice! Our highly-trained staff, focusing on denial resolution, pending claims, and appeals, employs a tracked sequence of actions specific to your practice's workflow! We use our top-of-the-line medical AR recovery methods to engage your organization in recovering revenue that would not have been pursued. You can spend more time focusing on providing quality care, and less on pursuing payment! Our service will obtain a higher claims recovery rate, while eliminating issues that can cause back-ups in your revenue cycle management.</p>
                <p>At Key MedSolutions, we don't simply collect outstanding balances, we uncover consistent problems in your accounts receivable process, address the problem, and continually enhance your regular collection operation. From individual physicians, specialty clinics, or multispecialty medical groups, we have the comprehensive AR follow-up that fits. We are a thorough AR recovery partner for medical providers in North Carolina, and throughout the USA. We deliver consistency, accuracy, and results.</p>
                <p>Recognized as the Best AR Recovery Company in North Carolina, Key MedSolutions provides tailored accounts receivable management solutions that improve your bottom line. Using proven strategies, clear reporting, and a commitment to reducing payment delays, we help healthcare providers achieve financial tranquility. Let us assist you in converting your aging receivables into revenue. Let Key MedSolutions partner with you for the industry's leading medical accounts receivable recovery services.</p>
              </div>
              {/* <div className="col"></div> */}
            </div>
          </div>



        </section>

      </div>


      <SolutionsWeOffer
        firstHalf={firstHalf}
        secondHalf={secondHalf}
        title='Comprehensive Accounts Receivable Recovery Services We Offer' />

      <WhoWeServe title='Who We Serve' data={clientTypes} />

      <WhyChooseOurMedicalBilling title='Why Choose Our Accounts Receivable Recovery Services?' data={WhyChooses} />

      <div className='container tw-pb-16'>
        <div className="info-bx tw-mt-16">
          <div className="heading-bx text-left">
            <h3 className="tw-text-2xl md:tw-text-2xl">Let's Maximize Your Revenue from Aging Claims!</h3>
          </div>
          <p>
            Maximize the cash flow potential of your practice with Key MedSolutions! Our Accounts Receivable Recovery Services can recover unpaid revenue, decrease denials and streamline your billing cycles.
          </p>

          <p>
            <Link className='tw-font-bold tw-text-black' href={"/contact-us"}> Contact us</Link> today for a free consultation to find out how our AR recovery services will help you take better control of your revenue cycle.
          </p>
        </div>


        <div className="info-bx tw-mt-16">
          <div className="heading-bx text-left">
            <h3 className="tw-text-2xl md:tw-text-2xl">FAQs - Accounts Receivable Recovery Services</h3>
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

export default StreamliningMedicalARRecoveryV2;
