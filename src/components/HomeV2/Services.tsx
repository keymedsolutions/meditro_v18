"use client";
import React from 'react';
import ServiceCard from './ServiceCard';
import { FileCode, ClipboardCheck, AlertCircle, Stethoscope, RadioTower, Heart } from 'lucide-react';
import ScrollReveal from './scroll-reveal';
import CTAStripe from '../ui/CTAStripe';

const Services = () => {
  const services = [
    {
      title: 'Medical Billing & Coding Services',
      description: 'Our certified professionals do full billing and proper coding (ICD-10, CPT, HCPCS) to reduce claim processing time and increase reimbursements.',
      icon: <FileCode />,
      delay: 0.1,
      color: 'primary'
    },
    {
      title: 'Medical Claim Billing',
      description: 'We provide error-free claim submission, quicker insurance approvals, and fewer rejections to maintain a consistent revenue stream.',
      icon: <ClipboardCheck />,
      delay: 0.2,
      color: 'secondary'
    },
    {
      title: 'Denial Management Services',
      description: 'Our experts review, monitor, and appeal denied claims, restoring lost revenue and increasing claim acceptance rates.',
      icon: <AlertCircle />,
      delay: 0.3,
      color: 'danger'
    },
    {
      title: 'Revenue Cycle Management',
      description: 'From patient registration to end payment reconciliation, we oversee the complete revenue cycle to maximize cash flow and reduce financial gaps.',
      icon: <Stethoscope />,
      delay: 0.4,
      color: 'info'
    },
    {
      title: 'Radiology Billing Services',
      description: 'Specialized radiology billing solutions for diagnostic imaging centres, radiologists, and hospitals to ensure proper claim processing.',
      icon: <RadioTower />,
      delay: 0.5,
      color: 'success'
    },
    {
      title: 'Cardiology Medical Billing',
      description: 'We are experts in cardiology coding and billing, with expertise in handling complicated procedures, modifiers, and payer-specific rules for smooth reimbursements.',
      icon: <Heart />,
      delay: 0.6,
      color: 'warning'
    }
  ];

  return (
    <section className="tw-py-16 tw-bg-white tw-relative tw-overflow-hidden">
      {/* Background Decorative Circles */}
      <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-opacity-5">
        <div className="tw-absolute tw-top-0 tw-left-0 tw-w-32 tw-h-32 sm:tw-w-40 sm:tw-h-40 tw-bg-primary tw-rounded-full tw-transform tw-translate-x-10 sm:tw-translate-x-20 tw-translate-y-10 sm:tw-translate-y-20"></div>
        <div className="tw-absolute tw-bottom-0 tw-right-0 tw-w-48 tw-h-48 sm:tw-w-60 sm:tw-h-60 tw-bg-primary tw-rounded-full tw-transform tw--translate-x-10 sm:tw--translate-x-20 tw--translate-y-10 sm:tw--translate-y-20"></div>
        <div className="tw-absolute tw-top-1/2 tw-left-1/2 tw-w-64 tw-h-64 sm:tw-w-80 sm:tw-h-80 tw-bg-primary tw-rounded-full tw-transform tw--translate-x-1/2 tw--translate-y-1/2"></div>
      </div>

      <div className="tw-container tw-mx-auto tw-px-4 tw-relative tw-z-10">
        {/* Heading Section */}
        <ScrollReveal>
          <div className="tw-text-center tw-mb-10 md:tw-mb-12">
            <h2 className="tw-text-2xl sm:tw-text-3xl md:tw-text-4xl tw-font-bold tw-text-transparent tw-bg-clip-text tw-bg-gradient-to-r tw-from-dark tw-to-primary tw-mb-4">
              Key MedSolutions Provides Advanced Medical Billing & RCM Services
            </h2>
            <p className="tw-text-sm sm:tw-text-base tw-text-gray tw-max-w-2xl md:tw-max-w-3xl tw-mx-auto">
              We streamline healthcare billing and revenue cycle management with intelligent, technology-based
              solutions, assisting providers in improving efficiency, optimizing reimbursement, and minimizing claim
              denials.
            </p>
          </div>
        </ScrollReveal>

        {/* Subheading */}
        <ScrollReveal>
          <h3 className="tw-text-xl sm:tw-text-2xl tw-font-semibold tw-text-primary tw-mb-8 tw-text-center tw-font-display">
            Our Expert-Led Billing & RCM Services Include:
          </h3>
        </ScrollReveal>

        {/* Cards */}
        <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-6 sm:tw-gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={service.delay}>
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                color={service.color}
              />
            </ScrollReveal>
          ))}
        </div>

        {/* CTA Button */}


<CTAStripe />



      </div>
    </section>
  );
};

export default Services;
