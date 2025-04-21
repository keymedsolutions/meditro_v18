/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import { Button } from '@/ui/button';
import { Heart, TrendingUp, Clock, CheckCircle, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="tw-py-12 md:tw-py-20 tw-overflow-hidden">
      <div className="tw-container tw-mx-auto tw-px-4">
        <div className="tw-flex tw-flex-col md:tw-flex-row tw-items-center">
          <div className="md:tw-w-1/2 tw-mb-8 md:tw-mb-0 md:tw-pr-8">
            <h1 className="tw-mb-6 tw-leading-tight">
              <span className="gradient-text">Enhance Your Practice's Financial Stability</span>{' '}
              with Expert Cardiology Billing Services
            </h1>
            <p className="tw-text-lg tw-text-gray-700 tw-mb-8">
              At Key MedSolutions, we understand the complexities of cardiology medical billing and the challenges practices face with coding, compliance, and reimbursement. As a leading cardiology medical billing services company in the USA, our specialized billing solutions ensure accurate claim submission, reduced denials, and improved revenue cycle efficiency.
            </p>
            <div className="tw-flex tw-flex-col sm:tw-flex-row tw-gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="tw-flex tw-flex-col sm:tw-flex-row tw-gap-4"
              >
                <Button
                  size="lg"
                  className="tw-bg-gradient-to-r tw-from-blue-600 tw-to-cyan-500 hover:tw-from-blue-700 hover:tw-to-cyan-600 tw-text-white tw-rounded-full tw-px-8 tw-py-6 tw-text-base tw-shadow-lg hover:tw-shadow-xl tw-transition-all group"
                >
                  <span className="tw-mr-2">Schedule a Free Consultation</span>
                  <span className="group-hover:tw-translate-x-1 tw-transition-transform">
                    <Phone className="tw-h-5 tw-w-5" />
                  </span>
                </Button>

           
              </motion.div>
            </div>
          </div>
          <div className="md:tw-w-1/2 tw-relative">
            <div className="tw-bg-gradient-to-br tw-from-cardio-100 tw-to-mint-100 tw-rounded-2xl tw-p-4 tw-shadow-lg tw-relative tw-z-10 tw-animate-float">
              <img
                src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80"
                alt="Cardiology Billing Services"
                className="tw-rounded-xl tw-shadow-sm tw-w-full tw-h-auto tw-object-cover tw-mb-4"
                style={{ maxHeight: "250px" }}
              />
              <div className="tw-bg-white tw-rounded-xl tw-p-6 tw-shadow-sm">
                <div className="tw-grid md:tw-grid-cols-2 tw-gap-4">
                  {[
                    { icon: <Heart className="tw-text-cardio-600" size={24} />, text: "Specialized Cardiology Expertise" },
                    { icon: <TrendingUp className="tw-text-mint-600" size={24} />, text: "Enhanced Revenue Growth" },
                    { icon: <CheckCircle className="tw-text-cardio-600" size={24} />, text: "Regulatory Compliance" },
                    { icon: <Clock className="tw-text-mint-600" size={24} />, text: "Streamlined Billing" },
                  ].map((item, index) => (
                    <div key={index} className="tw-flex tw-items-start tw-p-3 tw-bg-gray-50 tw-rounded-lg rcm-card-hover">
                      <div className="tw-mr-3">{item.icon}</div>
                      <p className="tw-text-sm tw-font-medium">{item.text}</p>
                    </div>
                  ))}
                </div>
                <div className="tw-mt-4 tw-pt-4 tw-border-t">
                  <p className="tw-text-center tw-text-sm tw-text-gray-500">
                    <span className="tw-font-bold tw-text-cardio-700">20-35% Increase</span> in collections within first few months
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="tw-absolute tw--top-4 tw--right-4 tw-w-20 tw-h-20 tw-bg-mint-200 tw-rounded-full tw-opacity-50 tw-animate-pulse-gentle"></div>
            <div className="tw-absolute tw--bottom-6 tw--left-6 tw-w-16 tw-h-16 tw-bg-cardio-200 tw-rounded-full tw-opacity-50 tw-animate-pulse-gentle" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
