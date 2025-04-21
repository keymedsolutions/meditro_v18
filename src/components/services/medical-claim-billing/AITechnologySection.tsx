import React from 'react';
import Image from 'next/image';
import { Brain, Zap, Calendar, FileCheck, ClipboardCheck, BookOpen, LineChart, DollarSign } from 'lucide-react';
import FeatureItem from './FeatureItem';
import { motion } from 'framer-motion';

const AITechnologySection: React.FC = () => {
  // Features data
  const features = [
    {
      icon: <Calendar size={20} />,
      title: "Smooth Appointment Scheduling",
      description: "Automated, recurring appointment setup eases administrative workload."
    },
    {
      icon: <FileCheck size={20} />,
      title: "Real-Time Insurance Verification",
      description: "Verify patient eligibility and coverage information instantly."
    },
    {
      icon: <ClipboardCheck size={20} />,
      title: "Efficient Claim Processing",
      description: "Electronic claims submitted without errors result in faster payments."
    },
    {
      icon: <BookOpen size={20} />,
      title: "Complete Denial Management",
      description: "Automated monitoring and appeal of underpaid and rejected claims."
    },
    {
      icon: <DollarSign size={20} />,
      title: "Professional Charge Entry Services",
      description: "Precise charge entry and coding in every medical specialty."
    },
    {
      icon: <LineChart size={20} />,
      title: "Comprehensive Financial Reports",
      description: "Acquire knowledge via personalized reports and real-time analytics."
    }
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  };


  return (
    <section className="tw-relative  tw-overflow-hidden tw-pb-16">
      {/* Custom background elements */}
      <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-keymed-50/80 tw-to-white/90 tw-z-0"></div>
      <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-64 tw-bg-keymed-100/20 tw-transform -tw-skew-y-3 tw-z-0"></div>
      <div className="tw-absolute tw-top-0 tw-right-10 tw-w-80 tw-h-80 tw-rounded-full tw-bg-keymed-200/20 tw-blur-3xl"></div>
      <div className="tw-absolute tw-bottom-0 tw-left-0 tw-w-full tw-h-64 tw-bg-gradient-to-t tw-from-white tw-to-transparent tw-z-0"></div>
      <div className="tw-absolute tw-bottom-20 tw-left-20 tw-w-96 tw-h-96 tw-rounded-full tw-bg-keymed-100/30 tw-blur-3xl"></div>

      {/* Grid pattern */}
      <div className="tw-absolute tw-inset-0 tw-opacity-[0.015] tw-z-0">
        <div className="tw-absolute tw-inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(59, 106, 247, 0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="tw-max-w-7xl tw-mx-auto tw-px-6 tw-relative tw-z-10">
        <div className="tw-bg-gradient-to-br tw-from-white/95 tw-to-keymed-50/50 tw-p-10 tw-rounded-3xl tw-border tw-border-keymed-100/50 tw-shadow-2xl tw-mb-12 tw-relative tw-overflow-hidden tw-group tw-backdrop-blur-sm">
          <div className="tw-absolute tw-top-0 tw-right-0 tw-w-60 tw-h-60 tw-bg-gradient-to-br tw-from-keymed-200/30 tw-to-keymed-300/10 tw-rounded-full tw-translate-x-1/3 -tw-translate-y-1/3 tw-transition-transform tw-duration-700 group-hover:tw-scale-125"></div>
          <div className="tw-absolute tw-bottom-24 tw-left-24 tw-w-48 tw-h-48 tw-bg-gradient-to-br tw-from-keymed-100/20 tw-to-keymed-200/10 tw-rounded-full"></div>

          {/* Curved decorative line */}
          <svg className="tw-absolute tw-left-0 tw-bottom-0 tw-w-full tw-h-16 tw-text-white/40 tw-opacity-30" preserveAspectRatio="none" viewBox="0 0 1440 320">
            <path fill="currentColor" fillOpacity="1" d="M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,213.3C840,224,960,224,1080,208C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>

          <div className="tw-relative tw-grid md:tw-grid-cols-2 tw-gap-8 tw-items-center">
            <div>
              <div className="tw-inline-flex tw-items-center tw-gap-3 tw-mb-8">
                <div className="tw-p-3.5 tw-rounded-2xl tw-bg-gradient-to-br tw-from-keymed-500 tw-to-keymed-600 tw-text-white tw-shadow-lg tw-shadow-keymed-500/20 group-hover:tw-shadow-keymed-500/30 tw-transition-all tw-duration-500">
                  <Brain size={28} className="group-hover:tw-scale-110 tw-transition-transform tw-duration-500" />
                </div>
                <h3 className="tw-text-3xl tw-font-medium section-title">AI-Powered Technology</h3>
              </div>



              <motion.p
                variants={itemVariants}
                className="tw-text-foreground/80 tw-mb-6 tw-text-lg tw-leading-relaxed"
              >
                Our cutting-edge billing system at KeyMed Solutions uses AI-powered technology to guarantee accurate claim submissions and prompt reimbursements. We identify possible claim errors prior to submission using a database driven by millions of predictive rules, which lowers denials and increases the effectiveness of your revenue cycle.
              </motion.p>




              <p className="tw-text-foreground/80 tw-mb-6 tw-text-lg tw-leading-relaxed">
              </p>




              <motion.p
                variants={itemVariants}
                className="tw-text-foreground/80 tw-mb-6 tw-text-lg tw-leading-relaxed"
              >
                Through automated resubmission procedures, our billing specialists can recover lost revenue, minimize future denials, and improve strategies by analyzing historical claim patterns.
              </motion.p>

            </div>

            <div className="tw-relative tw-group">
              <div className="tw-overflow-hidden tw-rounded-2xl tw-shadow-xl tw-transform group-hover:tw-scale-[1.02] tw-transition-transform tw-duration-500">
                <Image
                  src="/images/gallery/ai-technology1.jpg"
                  alt="AI-Powered Medical Billing Technology"
                  width={300}
                  height={300}
                  className="tw-w-full  tw-object-contain tw-h-[350px]"
                  priority
                />
              </div>
              <div className="tw-absolute tw-inset-0 tw-rounded-2xl tw-bg-gradient-to-tr tw-from-keymed-500/20 tw-via-transparent tw-to-transparent"></div>
            </div>
          </div>
        </div>

        <h3 className="tw-text-2xl tw-font-medium tw-mb-8 tw-relative">
          <span className="tw-relative tw-z-10 section-title">Key Features of Our Smart Billing System:</span>
          <span className="tw-absolute -tw-bottom-2 tw-left-0 tw-h-1.5 tw-w-20 tw-bg-gradient-to-r tw-from-keymed-400 tw-to-keymed-300/50 tw-rounded-full"></span>
        </h3>

        <div className="tw-grid md:tw-grid-cols-2 xl:tw-grid-cols-3 tw-gap-6 tw-mb-10">
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 100}
            />
          ))}
        </div>

        <div className="tw-bg-gradient-to-r tw-from-keymed-50/80 tw-via-keymed-100/50 tw-to-keymed-50/80 tw-rounded-2xl tw-p-6 tw-border tw-border-keymed-100/80 tw-mt-10 tw-flex tw-items-center tw-gap-5 tw-shadow-lg tw-shadow-keymed-100/10 tw-backdrop-blur-sm">
          <div className="tw-p-3 tw-rounded-xl tw-bg-keymed-500 tw-text-white tw-shadow-lg tw-shadow-keymed-400/15">
            <Zap size={22} className="tw-animate-pulse" />
          </div>
          <p className="tw-text-keymed-700 tw-font-medium tw-text-lg  tw-items-center">
            KeyMed Solutions—where technology and experience meet—can help you streamline your billing process!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AITechnologySection;
