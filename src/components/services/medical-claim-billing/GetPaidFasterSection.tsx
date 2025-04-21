/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { ArrowRight, CheckCircle2, Zap } from 'lucide-react';
import SectionHeading from '@/components/ui/section-heading';
import { motion } from 'framer-motion';
const GetPaidFasterSection: React.FC = () => {
  const stats = [
    "A rise in collections of 20% to 35% in the initial months",
    "Significant decrease in A/R days and denials to expedite payments",
    "A smooth cash flow with a 98% first-pass claim acceptance rate",
    "Enhanced communication through automated patient statement dispatch",
    "Real-time reporting and total financial transparency",
    "Complete adherence to CPT and ICD-10 coding"
  ];

  return (
    <section className="tw-relative tw-py-12 md:tw-py-20 tw-overflow-hidden tw-bg-gradient-to-tl tw-from-gray-50 tw-via-white tw-to-blue-50">
      {/* Background elements */}
      <div className="tw-absolute tw-inset-0 tw-bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.05)_0%,_transparent_70%)]"></div>
      <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-1/3 tw-bg-gradient-to-b tw-from-blue-100/20 tw-to-transparent"></div>
      <div className="tw-absolute tw-bottom-0 tw-right-0 tw-w-[400px] md:tw-w-[600px] tw-h-[400px] md:tw-h-[600px] tw-bg-blue-200/10 tw-rounded-full tw-blur-[80px] tw-opacity-60"></div>

      {/* Circuit pattern */}
      <div className="tw-absolute tw-inset-0 tw-opacity-10 tw-pointer-events-none">
        <svg className="tw-w-full tw-h-full" viewBox="0 0 1000 1000" fill="none">
          <path d="M100 200 H400 V400 H600 V600 H900" stroke="#3b82f6" strokeWidth="2" strokeDasharray="10 10" />
          <path d="M200 300 H500 V500 H800" stroke="#3b82f6" strokeWidth="2" strokeDasharray="10 10" />
        </svg>
      </div>

      <div className="tw-max-w-6xl tw-mx-auto tw-px-4 sm:tw-px-6 tw-relative tw-z-10">
        <div className="tw-bg-white/90 tw-rounded-2xl md:tw-rounded-3xl tw-p-6 md:tw-p-10 tw-shadow-lg tw-border tw-border-blue-200/30 tw-backdrop-blur-sm">
          {/* Header */}
          <SectionHeading title="Get Paid Faster and Smarter with KeyMed Solutions" subtitle="" showUnderline={false} />
     

          {/* Description */}
          <p className="tw-text-gray-700 tw-text-base md:tw-text-lg tw-leading-relaxed tw-text-center tw-max-w-3xl tw-mx-auto tw-mb-8 md:tw-mb-12">
            At KeyMed Solutions, we optimize your revenue cycle to guarantee the highest possible reimbursements with the fewest possible delays. Healthcare providers can increase financial transparency, minimize denials, and maximize collections with our state-of-the-art billing solutions.
          </p>

          {/* Stats Grid */}
          <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-4 md:tw-gap-6 tw-mb-8 md:tw-mb-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="tw-group tw-bg-white tw-border tw-border-blue-100/50 tw-rounded-xl tw-p-4 md:tw-p-5 tw-text-gray-700 tw-text-sm md:tw-text-base tw-leading-relaxed tw-transform hover:tw-bg-blue-50 hover:tw-border-blue-200 tw-transition-all tw-duration-300 tw-flex tw-items-start tw-gap-3 tw-relative tw-overflow-hidden tw-shadow-sm hover:tw-shadow-md"
                style={{ animation: `pulseGlow 2s infinite ${index * 200}ms` }}
              >
                <CheckCircle2 className="tw-w-5 tw-h-5 md:tw-w-6 md:tw-h-6 tw-text-blue-500 tw-flex-shrink-0 tw-mt-0.5 group-hover:tw-text-blue-600 tw-transition-colors" />
                <span>{stat}</span>
                <div className="tw-absolute tw-inset-0 tw-bg-blue-300/10 tw-opacity-0 group-hover:tw-opacity-100 tw-transition-opacity tw-duration-300 tw-pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* CTA */}


          <motion.button
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="tw-flex tw-mx-auto tw-text-primary hover:tw-shadow-keymed-500/30 tw-transition-all tw-duration-300 hover:-tw-translate-y-1  tw-font-[500] tw-py-2 tw-items-center tw-justify-center tw-text-lg tw-bg-white/40 tw-rounded-full tw-px-6 tw-text-gray-900 border-gradient"
          >
            {/* <CheckCircle className="tw-mr-2 tw-h-6 tw-w-6 tw-text-accent" /> */}
            <span>Transform your revenue cycle with KeyMed Solutions!</span>
            <ArrowRight className="tw-ml-2 tw-h-6 tw-w-6 tw-text-primary" />
          </motion.button>
         
        </div>
      </div>

      {/* CSS Animation Keyframes */}
      <style jsx>{`
        @keyframes pulseGlow {
          0%, 100% {
            box-shadow: 0 0 5px rgba(59, 130, 246, 0.1);
          }
          50% {
            box-shadow: 0 0 15px rgba(59, 130, 246, 0.2);
          }
        }
      `}</style>
    </section>
  );
};

export default GetPaidFasterSection;