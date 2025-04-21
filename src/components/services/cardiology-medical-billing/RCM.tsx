/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

import React from 'react';
import { Card, CardContent } from '@/ui/card';
import { CheckCircle2, Zap, FileText, HeartPulse } from 'lucide-react';

const RCM = () => {
  const benefits = [
    {
      title: "Expertise in Specialized Cardiology",
      description: "Our staff guarantees accurate claim submissions and maximum reimbursements because they are knowledgeable about the intricacies of cardiology billing and coding.",
      icon: <HeartPulse size={24} className="tw-text-cardio-600" />
    },
    {
      title: "Enhanced Revenue Development",
      description: "By reducing denials, getting rid of coding errors, and guaranteeing the best reimbursement rates, we help you increase revenue.",
      icon: <Zap size={24} className="tw-text-mint-600" />
    },
    {
      title: "Guarantee of Regulatory Compliance",
      description: "Keep up with constantly evolving regulations. Your practice remains in compliance with the most recent industry standards thanks to our billing solutions.",
      icon: <CheckCircle2 size={24} className="tw-text-cardio-600" />
    },
    {
      title: "Effective & Simplified Invoicing",
      description: "We maximize accuracy and efficiency at every stage of the cardiology revenue cycle, from charge capture to claims submission.",
      icon: <FileText size={24} className="tw-text-mint-600" />
    }
  ];

  return (
    <section className="tw-py-16">
      <div className="tw-container tw-mx-auto tw-px-4">
        <div className="tw-max-w-3xl tw-mx-auto tw-text-center tw-mb-12">
          <h3 className="gradient-text tw-mb-4">Mastering Cardiology Revenue Cycle Management (RCM) with Key MedSolutions</h3>
          <p className="tw-text-gray-600 tw-mb-8">
            A strategic approach to revenue cycle management (RCM) is necessary to maximize a cardiology practice's financial health. Our specialty at Key MedSolutions is overseeing the complete patient billing process, from making appointments to obtaining final reimbursement, guaranteeing a smooth operation that optimizes profits.
          </p>
          <div className="tw-relative tw-mb-12 tw-overflow-hidden tw-rounded-xl tw-shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80" 
              alt="Revenue Cycle Management Dashboard" 
              className="tw-w-full tw-h-auto tw-object-cover tw-transform hover:tw-scale-105 tw-transition-transform tw-duration-500"
              style={{ maxHeight: "400px" }}
            />
            <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-t tw-from-cardio-900/70 tw-to-transparent tw-pointer-events-none"></div>
            <div className="tw-absolute tw-bottom-0 tw-left-0 tw-right-0 tw-p-6 tw-text-white">
              <p className="tw-font-bold tw-text-xl">State-of-the-art RCM Dashboard</p>
              <p className="tw-text-white/80">Real-time tracking and optimization of your revenue cycle</p>
            </div>
          </div>
        </div>

        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="tw-border-0 tw-shadow-lg tw-rounded-xl tw-overflow-hidden rcm-card-hover">
              <CardContent className="tw-p-6">
                <div className="tw-flex tw-items-start tw-gap-4">
                  <div className="tw-p-2 tw-rounded-full tw-bg-gray-50">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="tw-font-semibold tw-text-gray-800 tw-mb-2">{benefit.title}</h4>
                    <p className="tw-text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="tw-mt-12 tw-bg-gradient-to-r tw-from-cardio-50 tw-to-mint-50 tw-p-6 md:tw-p-8 tw-rounded-2xl">
          <div className="tw-text-center">
            <h4 className="tw-text-cardio-800 tw-mb-4">Why Choose Key MedSolutions for Cardiology Billing and Coding?</h4>
            <p className="tw-text-gray-700 tw-mb-6">
              Simplifying important processes like medical coding, claims submission, and denial management is the main goal of our cardiology medical billing services. To avoid claim denials and guarantee appropriate payment for services provided, accurate coding is crucial.
            </p>
            <a 
              href="#" 
              className="tw-inline-block tw-bg-cardio-600 hover:tw-bg-cardio-700 tw-text-white tw-font-semibold tw-px-6 tw-py-3 tw-rounded-lg tw-transition-colors tw-animate-pulse-gentle"
            >
              Learn About Our Approach
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RCM;
