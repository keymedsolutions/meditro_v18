/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */

import React, { useRef } from 'react';
import { Shield, DollarSign, Zap, BarChart3, FileText, Cloud, ArrowRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import SectionHeading from '../ui/section-heading';
import { Card, CardContent } from '@/ui/card';
import Image from 'next/image';


const AnalyticsCard: React.FC<{
  children: React.ReactNode;
  icon: React.ReactNode;
  bgColor: string;
}> = ({ children, icon, bgColor }) => {
  return (
    <Card className="tw-bg-white tw-border-none tw-shadow-xl hover:tw-shadow-2xl tw-transition-all tw-duration-300 hover:-tw-translate-y-1 tw-relative tw-overflow-hidden tw-group">
      <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-1 tw-bg-gradient-to-r tw-transition-all tw-duration-300 group-hover:tw-h-1.5" style={{ backgroundColor: bgColor }}></div>
      <div className="tw-absolute tw-top-0 tw-right-0 tw-w-32 tw-h-32 tw-rounded-full tw-translate-x-12 -tw-translate-y-12 tw-opacity-10" style={{ backgroundColor: bgColor }}></div>
      <div className="tw-absolute tw-bottom-0 tw-left-0 tw-w-24 tw-h-24 tw-rounded-full -tw-translate-x-12 tw-translate-y-12 tw-opacity-10" style={{ backgroundColor: bgColor }}></div>

      <CardContent className="tw-p-6 tw-pt-8 tw-relative tw-z-10">
        <div className="tw-flex tw-flex-col tw-items-start tw-gap-4 tw-mb-4">
          <div className="tw-p-2.5 tw-rounded-lg tw-shadow-sm" style={{ backgroundColor: `${bgColor}20`, color: bgColor }}>
            {icon}
          </div>
          <div className="tw-flex-1">
            <p className="tw-text-foreground/80">
              {children}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};


const Benefits = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const securityBenefits = [
    { bgColor: '#3b6af7', icon: Shield, title: 'Secure Claim Data Transmission', description: 'Patient data is protected and compliant thanks to advanced encryption.' },
    { bgColor: '#e75a89', icon: DollarSign, title: 'Maximize Revenue Collection', description: 'Get paid in full by insurance companies without needless deductions.' },
    { bgColor: '#4ade80', icon: Zap, title: 'Instant Claim Submission', description: 'Filing claims electronically speeds up reimbursements by cutting down on processing delays.' },
    { bgColor: '#3b6af7', icon: BarChart3, title: 'Claim Follow-Up & Resolution', description: 'Rejected claims are successfully tracked, challenged, and recovered.' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <>

      <section id="benefits" ref={sectionRef} className="tw-py-20 md:tw-py-24 tw-bg-gradient-to-br tw-from-violet-50 tw-to-cyan-50" >
        <div className="tw-container tw-mx-auto tw-px-6 md:tw-px-8">
          <motion.div
            className="tw-text-center tw-max-w-3xl tw-mx-auto tw-mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="tw-mb-4 tw-font-display">Boost Your Healthcare Revenue with Fast, Hassle-Free Reimbursements!</h2>
          </motion.div>

          <motion.div
            className="tw-bg-white tw-rounded-2xl tw-shadow-elevation-2 tw-p-8 md:tw-p-10 tw-mb-16 tw-relative tw-overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            {/* Decorative elements */}
            <div className="tw-absolute -tw-top-16 -tw-right-16 tw-w-32 tw-h-32 tw-bg-primary/5 tw-rounded-full"></div>
            <div className="tw-absolute -tw-bottom-12 -tw-left-12 tw-w-24 tw-h-24 tw-bg-primary/10 tw-rounded-full"></div>

            <h3 className="tw-text-2xl tw-font-medium tw-mb-8 tw-text-center tw-relative tw-z-10 tw-font-display">Secure, Efficient, and Optimized Billing Solutions</h3>


            <motion.div
              className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-2 tw-gap-8 tw-relative tw-z-10"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >

              <div className="tw-flex tw-justify-center">
                <Image
                  src="/images/gallery/doctor-images.jpg"
                  alt="Medical Team"
                  width={300}
                  height={300}
                  className="tw-rounded-xl tw-w-full tw-object-cover tw-shadow-lg tw-shadow-primary/20"
                />
              </div>



              <div className="tw-flex tw-flex-col  tw-gap-y-4 tw-justify-center">
                {securityBenefits.map((benefit, index) => (


                  <div key={index}  >
                    <h5 className="tw-font-medium">{benefit.title}</h5>
                    <p className="tw-text-sm tw-text-muted-foreground">{benefit.description}</p>
                  </div>



                ))}

<motion.div
              className="tw-mt-8 tw-text-center tw-relative tw-z-10"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a href="#contact" className="tw-btn-primary btn btn-primary">Book Free Consultation
              <i className="btn-icon-bx fas fa-chevron-right"></i>
              </a>
            </motion.div>
              </div>




            </motion.div>
            {/* <motion.div
              className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-8 tw-relative tw-z-10"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {securityBenefits.map((benefit, index) => (


                <AnalyticsCard key={index} icon={<benefit.icon className="tw-text-primary" size={22} />} bgColor={benefit.bgColor}>
                  <h5 className="tw-font-medium">{benefit.title}</h5>
                  <p className="tw-text-sm tw-text-muted-foreground">{benefit.description}</p>
                </AnalyticsCard>



              ))}
            </motion.div> */}




     
          </motion.div>

          <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-12 md:tw-gap-16">
            <motion.div
              className="tw-space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <h3>The Billing Experts You Can Trust</h3>
              <p>
                Although handling claim submissions can be challenging, our dedicated billing staff makes the process simple for quicker approvals and complete reimbursements.
              </p>

              <ul className="tw-space-y-4">
                <li className="tw-flex tw-gap-3">
                  <span className="tw-text-primary tw-text-xl">🔹</span>
                  <p className="tw-text-muted-foreground">We instantly verify insurance eligibility and electronically file claims for smooth processing.</p>
                </li>
                <li className="tw-flex tw-gap-3">
                  <span className="tw-text-primary tw-text-xl">🔹</span>
                  <p className="tw-text-muted-foreground">Our billing experts guarantee 100% compliance with Medicare, Medicaid, and private insurers.</p>
                </li>
                <li className="tw-flex tw-gap-3">
                  <span className="tw-text-primary tw-text-xl">🔹</span>
                  <p className="tw-text-muted-foreground">We conveniently increase collection rates, decrease denials, and eliminate billing errors.</p>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <h3>When Standard Billing Isn't Enough, You Need Experts!</h3>
              <p>
                We guarantee that every dollar is accounted for as a top Revenue Cycle Management (RCM) company by processing and monitoring claims around-the-clock.
              </p>

              <ul className="tw-space-y-4">
                <li className="tw-flex tw-gap-3">
                  <span className="tw-text-primary tw-text-xl">💡</span>
                  <p className="tw-text-muted-foreground">To guarantee prompt reimbursements, we collaborate closely with leading payers such as Medicare, Medicaid, Aetna, and Blue Cross Blue Shield.</p>
                </li>
                <li className="tw-flex tw-gap-3">
                  <span className="tw-text-primary tw-text-xl">💡</span>
                  <p className="tw-text-muted-foreground">Our billing system ensures effective claims processing by supporting CMS-1500, UB-04, and CMS-1728-20 forms.</p>
                </li>
                <li className="tw-flex tw-gap-3">
                  <span className="tw-text-primary tw-text-xl">💡</span>
                  <p className="tw-text-muted-foreground">For healthcare providers, we simplify medical billing, transcription, and revenue cycle optimization.</p>
                </li>
              </ul>

              <div className="tw-pt-2">
                <a href="#contact" className="tw-btn-primary">Ready to increase your revenue? Let's start with a Free Billing Demo!</a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Benefits;
