'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  CalendarClock, FileCheck2, LineChart, RefreshCcw, BadgeCheck, FileText, PieChart
} from 'lucide-react';
import SectionHeading from '@/components/ui/section-heading';

const features = [
  {
    icon: CalendarClock,
    title: 'Smooth Appointment Scheduling',
    desc: 'Automated, recurring appointment setup eases administrative workload.',
  },
  {
    icon: FileCheck2,
    title: 'Real-Time Insurance Verification',
    desc: 'Verify patient eligibility and coverage information instantly.',
  },
  {
    icon: LineChart,
    title: 'Efficient Claim Processing',
    desc: 'Electronic claims submitted without errors result in faster payments.',
  },
  {
    icon: RefreshCcw,
    title: 'Complete Denial Management',
    desc: 'Automated monitoring and appeal of underpaid and rejected claims.',
  },
  {
    icon: BadgeCheck,
    title: 'Professional Charge Entry Services',
    desc: 'Precise charge entry and coding in every medical specialty.',
  },
  {
    icon: FileText,
    title: 'Old A/R Recovery',
    desc: 'Expert methods to maximize income by recovering old receivables.',
  },
  {
    icon: PieChart,
    title: 'Comprehensive Financial Reports',
    desc: 'Acquire knowledge via personalized reports and real-time analytics.',
  },
];

const SmartBillingShowcase = () => {
  return (
    <section className="tw-relative tw-py-24 tw-bg-gradient-to-br tw-from-white tw-to-keymed-50 tw-overflow-hidden">
      <div className="tw-absolute tw-inset-0 tw-bg-noise tw-pointer-events-none"></div>

      <div className="tw-section-container tw-relative tw-z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="tw-text-center tw-mb-16"
        >
    
    <SectionHeading title="Intelligent Billing & Claims Optimization System" subtitle="" showUnderline={false} />

          <p className=" tw-max-w-2xl tw-mx-auto">
            Our AI-powered billing platform ensures precise claim submissions and faster reimbursements by identifying errors in advance using millions of predictive rules.
            It reduces denials, automates resubmissions, and enhances strategy through smart data insights.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-x-10 tw-gap-y-20">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="tw-relative group tw-transition-transform tw-duration-300 tw-hover:tw-scale-[1.03]"
              >
                {/* Floating Icon */}
                <div className="tw-absolute tw-top-0 tw-left-1/2 tw-transform -tw-translate-x-1/2 -tw-translate-y-1/2 tw-z-20">
                  <div className="tw-bg-white tw-rounded-full tw-shadow-xl tw-p-3 group-hover:tw-rotate-0 tw-rotate-12 tw-transition-transform">
                    <div className="tw-bg-gradient-to-br tw-from-keymed-500 tw-to-keymed-600 tw-text-white tw-rounded-full tw-h-16 tw-w-16 tw-flex tw-items-center tw-justify-center tw-text-2xl group-hover:tw-ring-4 group-hover:tw-ring-keymed-300/40 group-hover:tw-animate-pulse">
                      <Icon />
                    </div>
                  </div>
                </div>

                {/* Card Container */}
                <div
                  className="tw-pt-20 tw-bg-white/10 tw-backdrop-blur-xl tw-rounded-[2rem] tw-border-4 tw-border-white tw-shadow-2xl tw-overflow-hidden tw-relative tw-transition-all tw-duration-500 tw-clip-path-card group-hover:tw-shadow-keymed-300/40"
                >
                  {/* Hover Overlay */}
                  <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-keymed-200/20 tw-to-keymed-500/20 tw-opacity-0 group-hover:tw-opacity-100 tw-transition-opacity tw-duration-500 tw-z-10" />

                  {/* Content */}
                  <div className="tw-p-6 tw-relative tw-z-20 tw-text-center">
                    <h4 className="tw-text-lg tw-font-semibold tw-text-keymed-900 group-hover:tw-text-keymed-700 tw-transition-colors">
                      {item.title}
                    </h4>
                    <p className="tw-mt-2 tw-text-sm tw-text-keymed-700/80">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Glows */}
                <div className="tw-absolute -tw-bottom-6 -tw-left-6 tw-w-24 tw-h-24 tw-bg-keymed-100 tw-rounded-full tw-blur-xl tw-opacity-70 -tw-z-10"></div>
                <div className="tw-absolute -tw-top-6 -tw-right-6 tw-w-24 tw-h-24 tw-bg-keymed-200 tw-rounded-full tw-blur-xl tw-opacity-50 -tw-z-10"></div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="tw-text-center tw-mt-20"
        >
          <span className="tw-inline-block tw-text-primary tw-rounded-full tw-px-8 tw-py-3 tw-font-medium tw-shadow-md hover:tw-shadow-lg tw-transition border-gradient">
            🔹 KeyMed Solutions — Where Innovation Meets Precision
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default SmartBillingShowcase;
