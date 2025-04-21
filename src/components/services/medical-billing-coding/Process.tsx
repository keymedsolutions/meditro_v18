import React from 'react';
import { Card, CardContent } from '@/ui/card';
import { UserCheck, Code, FileText, CreditCard, AlertCircle, BarChart3 } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: <UserCheck size={32} className="tw-text-primary-600" />,
      title: "Patient Information & Eligibility Verification",
      description: "To avoid claims being denied because of false information, we gather and verify patient demographics, insurance information, and coverage.",
      number: "1"
    },
    {
      icon: <Code size={32} className="tw-text-secondary-600" />,
      title: "Accurate Medical Coding",
      description: "To guarantee compliance, minimize denials, and optimize reimbursements, our certified coders assign accurate ICD-10, CPT, and HCPCS codes.",
      number: "2"
    },
    {
      icon: <FileText size={32} className="tw-text-primary-600" />,
      title: "Claims Preparation & Submission",
      description: "After carefully checking claims for mistakes, we electronically submit them to insurance payers for expedited processing and approval.",
      number: "3"
    },
    {
      icon: <CreditCard size={32} className="tw-text-secondary-600" />,
      title: "Payment Posting & Reconciliation",
      description: "To make sure every service is billed and paid for appropriately, we keep track of payments, accurately post reimbursements, and reconcile accounts.",
      number: "4"
    },
    {
      icon: <AlertCircle size={32} className="tw-text-primary-600" />,
      title: "Denial Management & Appeals",
      description: "To effectively recover lost revenue, our professionals examine rejected claims, determine the causes, and file well-supported appeals.",
      number: "5"
    },
    {
      icon: <BarChart3 size={32} className="tw-text-secondary-600" />,
      title: "Reporting & Performance Optimization",
      description: "We assist you in tracking financial performance and making data-driven decisions for expansion through real-time analytics and personalized reports.",
      number: "6"
    }
  ];

  return (
    <section className="tw-py-20 tw-relative tw-overflow-hidden">
      {/* Background decoration */}
      <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-b tw-from-white tw-to-gray-50 tw-pointer-events-none"></div>
      
      {/* Animated background elements */}
      <div className="tw-absolute tw-inset-0 tw-pointer-events-none tw-overflow-hidden">
        <div className="tw-absolute tw-top-20 tw-left-0 tw-w-64 tw-h-64 tw-rounded-full tw-bg-primary-100 tw-opacity-30 tw-blur-3xl tw-animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="tw-absolute tw-bottom-20 tw-right-0 tw-w-80 tw-h-80 tw-rounded-full tw-bg-secondary-100 tw-opacity-30 tw-blur-3xl tw-animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="tw-container tw-mx-auto tw-px-4">
        <div className="tw-max-w-3xl tw-mx-auto tw-text-center tw-mb-16">
          <h2 className="tw-text-3xl md:tw-text-4xl tw-font-bold tw-mb-6">
            How <span className="gradient-text">Key MedSolutions Medical Billing & Coding</span> Works
          </h2>
          <div className="tw-w-24 tw-h-1 tw-bg-gradient-to-r tw-from-primary-500 tw-to-secondary-500 tw-mx-auto tw-mb-6 tw-rounded-full"></div>
          <p className="tw-text-lg tw-text-gray-700">
            Our streamlined process ensures maximum efficiency and accuracy in your medical billing operations.
          </p>
        </div>
        
        {/* Process steps with connecting lines */}
        <div className="tw-relative">
          {/* Connecting line (visible on medium screens and up) */}
          <div className="tw-hidden md:tw-block tw-absolute tw-top-1/2 tw-left-0 tw-right-0 tw-h-1 tw-bg-gray-200 tw-transform -tw-translate-y-1/2 tw-z-0"></div>
          
          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="tw-group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <Card className="tw-h-full tw-border tw-border-gray-100 tw-bg-white tw-rounded-xl tw-shadow-lg hover:tw-shadow-xl tw-transition-all tw-duration-300 tw-overflow-hidden tw-relative tw-z-10">
                  <CardContent className="tw-p-8">
                    {/* Step number */}
                    <div className="tw-absolute tw-top-4 tw-right-4">
                      <div className="tw-w-10 tw-h-10 tw-rounded-full tw-bg-gray-100 tw-flex tw-items-center tw-justify-center tw-font-bold tw-text-lg tw-text-primary-600 group-hover:tw-bg-primary-100 tw-transition-colors tw-duration-300">
                        {step.number}
                      </div>
                    </div>
                    
                    <div className="tw-bg-gray-50 tw-p-4 tw-rounded-xl tw-inline-flex tw-items-center tw-justify-center tw-mb-6 group-hover:tw-bg-primary-50 tw-transition-colors tw-duration-300">
                      {step.icon}
                    </div>
                    
                    <h3 className="tw-text-xl tw-font-semibold tw-mb-3 tw-text-gray-900 group-hover:tw-text-primary-700 tw-transition-colors tw-duration-300">
                      {step.title}
                    </h3>
                    
                    <p className="tw-text-gray-600">
                      {step.description}
                    </p>
                    
                    {/* Animated hover effect */}
                    <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-r tw-from-primary-500/5 tw-to-secondary-500/5 tw-opacity-0 group-hover:tw-opacity-100 tw-transition-opacity tw-duration-500 tw-pointer-events-none"></div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
