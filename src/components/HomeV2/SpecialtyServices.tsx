/* eslint-disable react/no-unescaped-entities */
"use client"
import React, { useRef } from 'react';
import { Check, } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { Badge } from '@/ui/badge';
import Image from 'next/image';
import { Button } from '@/ui/button';

const SpecialtyServices = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const partnershipBenefits = [
    'Optimize reimbursements through precise coding and submission of claims.',
    'Shorten payment cycles and decrease denials',
    'Assure adherence to industry and HIPAA regulations.'
  ];

  return (
    <section ref={sectionRef} id="specialties" className="tw-py-20 tw-relative tw-overflow-hidden">
      <div className="tw-absolute tw-top-0 tw-left-0 tw-right-0 tw-h-px tw-bg-gradient-to-r tw-from-transparent tw-via-violet-200 tw-to-transparent"></div>
      <div className="tw-absolute tw-bottom-0 tw-left-0 tw-right-0 tw-h-px tw-bg-gradient-to-r tw-from-transparent tw-via-violet-200 tw-to-transparent"></div>

      <div className="tw-absolute tw-inset-0 tw-opacity-5">
        <div className="tw-absolute tw-inset-0 bg-diagonal-lines"></div>
      </div>

      <div className='container'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="tw-text-center tw-max-w-3xl tw-mx-auto tw-mb-16"
        >
          <Badge className="tw-mb-4 tw-px-3 tw-py-1 tw-text-sm tw-bg-violet-100 tw-text-violet-800 hover:tw-bg-violet-100">
            Specialties
          </Badge>
          <h2 className=" tw-text-3xl md:tw-text-4xl tw-font-bold tw-tracking-tight tw-mb-4 tw-bg-clip-text tw-text-transparent tw-bg-gradient-to-r tw-from-violet-800 tw-to-cyan-700">
            Specialty Medical Billing Services
          </h2>
          <p className="tw-text-muted-foreground">
            Our specialized medical billing solutions are made to optimize specialty provider reimbursements. Our ICD-10 coding specialists guarantee accurate claims processing catered to the particular needs of your specialty.
          </p>
        </motion.div>

        <div className='row'>
          <div className='col-md-6 tw-mb-10'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="tw-relative tw-order-2 md:tw-order-1"
            >
              <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-r tw-from-violet-600/20 tw-to-cyan-500/20 tw-rounded-2xl tw-blur-3xl tw-transform -tw-translate-x-4 tw-translate-y-4"></div>
              <motion.div
                whileHover={{ scale: 1.02, rotateY: 5, rotateX: 5 }}
                transition={{ duration: 0.5 }}
                className="tw-relative tw-bg-white tw-rounded-2xl tw-shadow-xl tw-overflow-hidden tw-border tw-border-violet-100 perspective-image"
              >
                <Image
                  src="/images/gallery/pic1.jpg"
                  alt="Specialty medical billing"
                  width={200}
                  height={200}
                  className="tw-w-full tw-h-auto"
                />
              </motion.div>
            </motion.div>
          </div>
          <div className='col-md-6'>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="tw-space-y-8 tw-order-1 md:tw-order-2"
            >
              <h3 className="tw-text-2xl tw-font-bold">Why Choose Our Specialty Billing Services?</h3>

              <div className="tw-space-y-6">
                {[
                  {
                    title: "Higher Reimbursement Rates",
                    description: "Reduce denials with accurate coding and billing.",
                  },
                  {
                    title: "Compliance Assurance",
                    description: "Stay aligned with HIPAA and payer guidelines.",
                  },
                  {
                    title: "Customized EHR Integration",
                    description: "Seamlessly sync with your practice's workflows.",
                  },
                  {
                    title: "Faster Claims Processing",
                    description: "Improve cash flow with streamlined submissions.",
                  },
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="tw-flex tw-gap-4 tw-items-start"
                  >
                    <div className="tw-shrink-0 tw-bg-gradient-to-br tw-from-violet-600 tw-to-cyan-500 tw-text-white tw-p-2 tw-rounded-lg tw-shadow-lg tw-shadow-violet-600/20">
                      <Check className="tw-h-5 tw-w-5" />
                    </div>
                    <div>
                      <h4 className="tw-font-semibold tw-text-lg">{benefit.title}</h4>
                      <p className="tw-text-muted-foreground">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>



            </motion.div></div>

          <div className='col-12'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="tw-mt-10 tw-bg-gradient-to-r tw-from-primary/5 tw-to-primary/10 tw-rounded-xl tw-p-6 md:tw-p-8 tw-relative tw-z-10"
            >
              <h4 className="tw-flex tw-items-center tw-gap-2 tw-mb-4 tw-font-display">
                <span className="tw-text-primary">💰</span> Affordable Pricing & Scalable Solutions
              </h4>
              <p className="tw-text-muted-foreground tw-mb-6">
                With our reasonable 2.49% collection rate, you can increase your revenue while lowering your overhead expenses. Our all-inclusive billing services aid in streamlining operations, and our adaptable pay-for-performance model guarantees that you only pay for outcomes.
              </p>

              <motion.div whileHover={{ scale: 1 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-700 hover:to-cyan-600 hover:shadow-lg hover:shadow-violet-600/20 transition-all duration-300">
                  Schedule a Free Consultation Today!

                </Button>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
      <div className='tw-from-primary/5 tw-to-primary/10 tw-bg-medical-pattern'>



        <motion.div
          className="tw-mt-20 tw-bg-gradient-to-r tw-from-primary/5 tw-to-primary/10 tw-rounded-2xl tw-p-8 md:tw-p-10 tw-relative tw-overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <motion.div
            className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-pattern-grid tw-opacity-50"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 0.5 } : { scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />

          <motion.div
            className="tw-text-center tw-max-w-3xl tw-mx-auto tw-mb-8 tw-relative tw-z-10"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <motion.div
              className="tw-inline-block tw-bg-white/70 tw-text-primary tw-px-4 tw-py-1 tw-rounded-full tw-text-sm tw-font-medium tw-mb-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Complete Solutions
            </motion.div>
            <motion.h2
              className="tw-mb-4 tw-font-display"
              initial={{ rotateX: -90, opacity: 0 }}
              animate={isInView ? { rotateX: 0, opacity: 1 } : { rotateX: -90, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Your Complete Medical Billing & Revenue Cycle Partner
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              We offer end-to-end billing solutions that optimize your entire revenue cycle, regardless of your size—whether you're a large healthcare organization or an independent provider...
            </motion.p>
          </motion.div>

          <motion.p
            className="tw-text-center tw-mb-8 tw-relative tw-z-10"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            Take advantage of the freedom to use our in-house system...
          </motion.p>

          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-6 tw-mb-8 tw-relative tw-z-10">
            {partnershipBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="tw-flex tw-items-start tw-gap-3 tw-bg-white/50 tw-p-5 tw-rounded-lg"
                initial={{ opacity: 0, y: 30, rotate: -3 }}
                animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : { opacity: 0, y: 30, rotate: -3 }}
                transition={{ delay: 0.1 * index + 1.4, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <span className="tw-text-primary tw-text-xl tw-flex-shrink-0">🔹</span>
                <p className="tw-text-muted-foreground">{benefit}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="tw-text-center tw-relative tw-z-10"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 1.7 }}
          >
            <motion.h4
              className="tw-text-xl tw-font-medium tw-mb-4 tw-font-display"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.5, delay: 1.8 }}
            >
              Let&apos;s optimize your revenue cycle today!
            </motion.h4>
            <motion.a
              href="#contact"
              className="tw-btn-primary btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Get a Free Consultation
              <i className='fa fa-phone btn-icon-bx'></i>
            </motion.a>
          </motion.div>
        </motion.div>

      </div>
    </section>

  );
};

export default SpecialtyServices;
