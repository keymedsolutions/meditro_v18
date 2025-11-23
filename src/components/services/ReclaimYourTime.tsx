// import React from "react";
// import {motion} from 'framer-motion'

// const ReclaimYourTime = () => {
//   return (
//     <section className="tw-py-20">
//       <div className="tw-max-w-7xl tw-mx-auto">
//         <motion.div
//           className="tw-text-center tw-mb-16"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true, amount: 0.2 }}
//         >
//           <h2 className="tw-text-2xl md:tw-text-3xl  tw-font-black tw-text-primary tw-mb-8 tw-leading-tight">
//             Reclaim Your Time, Boost Your Revenue, <br />
//             <span className="tw-text-gradient">
//               and Put Patients at the Heart of Everything You Do
//             </span>
//           </h2>

//           <p className="tw-text-lg tw-text-gray-700 tw-max-w-4xl tw-mx-auto tw-leading-relaxed">
//             At Key Med Solutions, we believe healthcare providers should spend
//             more time caring for patients and less time navigating
//             administrative hurdles. That's why we offer a comprehensive suite of
//             services, including Medical Billing, Medical Coding, and Healthcare
//             Revenue Cycle Management, all designed to streamline your
//             operations, boost your cash flow, and ensure full compliance.
//           </p>
//         </motion.div>

//         <motion.div
//           className="tw-text-center tw-mb-16"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           viewport={{ once: true, amount: 0.2 }}
//         >
//           <p className="tw-text-lg tw-text-gray-700 tw-mb-8">
//             When you partner with us, you're not just choosing a service
//             provider: you're gaining a dedicated ally. Whether you're a solo
//             practitioner, a specialty clinic, or a large group practice, we
//             tailor our expert-driven solutions to meet your unique needs and
//             help you achieve sustainable growth.
//           </p>

//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ReclaimYourTime;

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */

import { motion } from "framer-motion";
// import ConsultationForm from './ConsultationForm';
import { upDownAnimation } from "@/utils/animation";
import { TypewriterEffect } from "../ui/typewriter-effect";
import Link from "next/link";
import { APP_PATH } from "@/data/PATH_APP";
const doctorImg = "/images/home/doctor-bg.png";

const ReclaimYourTime = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const decorativeElements = [
    {
      top: "15%",
      left: "5%",
      size: "tw-w-6 tw-h-6",
      color: "tw-bg-primary/20",
      delay: 0.5,
    },
    {
      top: "80%",
      left: "10%",
      size: "tw-w-4 tw-h-4",
      color: "tw-bg-secondary/20",
      delay: 0.7,
    },
    {
      top: "20%",
      right: "8%",
      size: "tw-w-5 tw-h-5",
      color: "tw-bg-success/20",
      delay: 0.6,
    },
    {
      top: "70%",
      right: "12%",
      size: "tw-w-7 tw-h-7",
      color: "tw-bg-warning/20",
      delay: 0.8,
    },
  ];

  const floatingShapes = {
    initial: { scale: 1, rotate: 0 },
    animate: {
      scale: [1, 1.05, 1],
      rotate: [0, 5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const blurVariants = {
    initial: { filter: "blur(8px)", opacity: 0 },
    animate: {
      filter: "blur(0px)",
      opacity: 1,
      transition: { duration: 1.2, delay: 0.3 },
    },
  };

  const mainTitle = [
    {
      text: "End-to-end",
    },
    {
      text: "Medical",
      className: "!tw-text-accent-500 ",
    },
    {
      text: "Billing",
      className: "!tw-text-accent-500 ",
    },
    {
      text: "Services",
      className: "!tw-text-accent-500 ",
    },
    {
      text: "&",
    },
    {
      text: "RCM",
      className: "!tw-text-accent-500 ",
    },
    {
      text: "Solutions",
      className: "!tw-text-accent-500 ",
    },
    {
      text: "for",
    },
    {
      text: "Healthcare",
    },
    {
      text: "Providers:",
    },
  ];

  return (
    <section className="tw-min-h-[80vh] tw-pt-10 tw-pb-16 md:tw-pt-10 md:tw-pb-20 lg:tw-pt-10 lg:tw-pb-24 tw-bg-hero-pattern tw-relative tw-overflow-hidden">
      {/* Decorative elements */}
      {decorativeElements.map((el, index) => (
        <motion.div
          key={index}
          className={`tw-absolute tw-rounded-full ${el.size} ${el.color} tw-hidden md:tw-block`}
          style={{ top: el.top, left: el.left, right: el.right }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: el.delay, duration: 0.5 }}
        />
      ))}

      <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-gradient-to-b tw-from-blue-light/50 tw-to-transparent" />

      <div className="tw-container tw-mx-auto tw-px-6 md:tw-px-8 tw-relative tw-z-10">
        <motion.div
          className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-12 tw-gap-10 lg:tw-gap-8 tw-items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="lg:tw-col-span-7 tw-space-y-3 tw-max-w-3xl"
            variants={itemVariants}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h1 className="md:tw-text-5xl sm:tw-text-3xl tw-text-2xl tw-font-bold tw-font-serif tw-text-foreground">
                End-to-end&nbsp;
                <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
                  Medical Billing Services and RCM Solutions
                </span>
                &nbsp;for Healthcare Providers
              </h1>
            </motion.div>
            <div className="tw-space-y-4">
              <h2 className="tw-font-display tw-leading-tight">
                Reclaim Your Time, Boost&nbsp;
                <span className="tw-heading-gradient">Your Revenue</span>&nbsp;
                and Put Patients at the Heart of Everything You Do
              </h2>
            </div>
            <div>
              <p className="tw-text-muted-foreground">
                At Key Med Solutions, we believe healthcare providers should
                spend more time caring for patients and less time navigating
                administrative hurdles. That's why we offer a comprehensive
                suite of services, including&nbsp;<Link href={APP_PATH.services.billingServices.path} className="tw-font-semibold">Medical Billing</Link>, Medical Coding,
                and Healthcare Revenue Cycle Management, all designed to
                streamline your operations, boost your cash flow, and ensure
                full compliance.
              </p>
              <p className="tw-text-muted-foreground tw-mt-3">
                When you partner with us, you’re not just choosing a service
                provider: you’re gaining a dedicated ally. Whether you’re a solo
                practitioner, a specialty clinic, or a large group practice, we
                tailor our expert-driven solutions to meet your unique needs and
                help you achieve sustainable growth. Leave the complexities to
                us, so you can concentrate on caring for your patients.
              </p>
              <p className="tw-text-xl tw-font-semibold">
                Let’s transform your practice together.
              </p>
            </div>
            <Link href={APP_PATH.contactus.path}>

            <button type="button" className="button-get-started">
              <span className="fold"></span>

              <div className="points_wrapper">
                <i className="point"></i>
                <i className="point"></i>
                <i className="point"></i>
                <i className="point"></i>
                <i className="point"></i>
                <i className="point"></i>
                <i className="point"></i>
                <i className="point"></i>
                <i className="point"></i>
                <i className="point"></i>
              </div>

              <span className="inner">
                <svg
                  className="icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                >
                  <polyline points="13.18 1.37 13.18 9.64 21.45 9.64 10.82 22.63 10.82 14.36 2.55 14.36 13.18 1.37"></polyline>
                </svg>
                Get Started Today
              </span>
            </button>
            </Link>
          </motion.div>

          <motion.div className="lg:tw-col-span-5" variants={itemVariants}>
            <div className="tw-relative">
              {/* Abstract animated shapes */}
              {/* <motion.div 
                className="tw-absolute -tw-top-12 -tw-left-8 tw-w-40 tw-h-40 tw-bg-primary/20 tw-rounded-tr-[60px] tw-rounded-bl-[60px]"
                variants={floatingShapes}
                initial="initial"
                animate="animate"
              /> */}
              <motion.div
                className="tw-absolute -tw-bottom-10 -tw-right-10 tw-w-36 tw-h-36 tw-bg-secondary/30 tw-rounded-full"
                animate={{
                  y: [0, -15, 0],
                  transition: {
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              />
              <motion.div
                className="tw-absolute tw-top-1/3 -tw-right-6 tw-w-24 tw-h-24 tw-bg-info/15 tw-rounded-full"
                animate={{
                  scale: [1, 1.1, 1],
                  transition: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              />

              {/* Hero image with masked shape */}
              {/* <motion.div 
                className="tw-relative tw-z-10 tw-rounded-[2.5rem] tw-overflow-hidden tw-shadow-elevation-2 tw-border-4 tw-border-white/30"
                variants={blurVariants}
                initial="initial"
                animate="animate"
              > */}
              <div className="tw-aspect-w-4 tw-aspect-h-3">
                <motion.img
                  src={doctorImg}
                  alt="Doctor"
                  className="tw-rounded-2xl lg:tw-w-11/12 md:tw-w-4/5 tw-w-full"
                  {...upDownAnimation} // Spread animation properties here
                />
                {/* <img 
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2940&auto=format&fit=crop" 
                    alt="Healthcare professionals in a medical facility" 
                    className="tw-object-cover tw-w-full tw-h-full"
                  /> */}
                {/* <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-tr tw-from-primary/30 tw-to-transparent"></div> */}
              </div>
              {/* </motion.div> */}

              {/* Additional floating elements */}
              <motion.div
                className="tw-absolute -tw-top-4 tw-right-20 tw-w-10 tw-h-10 tw-rounded-lg tw-bg-secondary/10 tw-backdrop-blur-lg tw-border tw-border-white/20"
                animate={{
                  rotate: [0, 45, 0],
                  transition: {
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              />
              <motion.div
                className="tw-absolute tw-top-2/3 -tw-left-6 tw-w-12 tw-h-12 tw-rounded-full tw-bg-warning/10 tw-backdrop-blur-lg tw-border tw-border-white/10"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                  transition: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReclaimYourTime;
