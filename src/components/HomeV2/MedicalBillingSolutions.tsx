/* eslint-disable react/no-unescaped-entities */
"use client"
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Clock, FileCheck, Shield, Users } from 'lucide-react'

const aboutThumb1 = '/images/about/pic-1.jpg';
const aboutThumb2 = '/images/about/pic-2.jpg';
const aboutThumb3 = '/images/about/pic-3.jpg';
const ptImg1 = '/images/shap/wave-orange.png';
const ptImg2 = '/images/shap/circle-small-blue.png';
const ptImg4 = '/images/shap/square-dots-orange.png';
const ptImg5 = '/images/shap/square-blue.png';

const features = [
  {
    icon: <Users className="tw-h-6 tw-w-6 tw-text-violet-600" />,
    title: "Patient Eligibility & Verification",
  },
  {
    icon: <FileCheck className="tw-h-6 tw-w-6 tw-text-violet-600" />,
    title: "Claim Scrubbing & Submission",
  },
  {
    icon: <Shield className="tw-h-6 tw-w-6 tw-text-violet-600" />,
    title: "Denial & AR Recovery Solutions",
  },
  {
    icon: <Clock className="tw-h-6 tw-w-6 tw-text-violet-600" />,
    title: "Fast & Efficient Reimbursements",
  },
]
const MedicalBillingSolutions = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  return (
    <>
  

      <section ref={sectionRef} className="tw-py-20 tw-relative tw-overflow-hidden section-sp1 about-area">
        <div className="tw-absolute tw-top-0 tw-left-0 tw-right-0 tw-h-px tw-bg-gradient-to-r tw-from-transparent tw-via-violet-200 tw-to-transparent"></div>
        <div className="tw-absolute tw-bottom-0 tw-left-0 tw-right-0 tw-h-px tw-bg-gradient-to-r tw-from-transparent tw-via-violet-200 tw-to-transparent"></div>

        {/* Geometric shapes */}
        <div className="tw-absolute tw-top-20 tw-left-10 tw-w-40 tw-h-40 tw-border tw-border-violet-100 tw-rounded-3xl tw-rotate-12 tw-opacity-30"></div>
        <div className="tw-absolute tw-bottom-20 tw-right-10 tw-w-60 tw-h-60 tw-border tw-border-cyan-100 tw-rounded-full tw-opacity-30"></div>
        <div className="tw-container tw-mx-auto tw-px-6 md:tw-px-8">
          <motion.div
            className="tw-text-center tw-max-w-3xl tw-mx-auto tw-mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="tw-mb-4 tw-font-display">Comprehensive Medical Billing Solutions – USA</h2>
          </motion.div>

        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-30">
              <div className="about-thumb-area">
                <ul>
                  <li><img className="about-thumb1" src={aboutThumb1} alt="" /></li>
                  <li><img className="about-thumb2" src={aboutThumb2} alt="" /></li>
                  <li><img className="about-thumb3" src={aboutThumb3} alt="" /></li>
                  <li><div className="exp-bx">06<span>Years of Experience</span></div></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 ">

              <div className="heading-bx tw-mt-0 tw-pt-0">
                <p>Our knowledgeable medical billing and revenue cycle management firm in the USA guarantees correct claims processing, fewer denials, and higher reimbursements.</p>
              </div>
              <div className="row">


                {
                  features.map((feature, index) => (
                    <div className="col-lg-6 col-sm-6 mb-30 mb-sm-20" key={index} >
                      <div className={`feature-container feature-bx1 feature${index + 1}`}>
                        <div className="icon-md">
                          <span className="icon-cell">
                            {feature.icon}
                          </span>
                        </div>
                        <div className="icon-content">
                          <h4 className="ttr-title">{feature.title}</h4>
                        </div>
                      </div>
                    </div>
                  ))
                }


              </div>

              {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-6"> */}
                <p>
                  <strong  className='tw-text-primary tw-font-bold'>Ready to improve your revenue cycle?</strong> Contact us today for a consultation!
                </p>

                <button className='btn btn-primary shadow'>
                Book Now <i className="btn-icon-bx fas fa-phone"></i>
                </button>
              
              {/* </motion.div> */}

            </div>
          </div>
        </div>
        <img className="pt-img1 animate-wave" src={ptImg1} alt="" />
        <img className="pt-img2 animate2" src={ptImg2} alt="" />
        <img className="pt-img3 animate-rotate" src={ptImg5} alt="" />
        <img className="pt-img4 animate-wave" src={ptImg4} alt="" />
        <img className="pt-img5 animate2" src={ptImg5} alt="" />
      </section>

    </>
  )
}

export default MedicalBillingSolutions
