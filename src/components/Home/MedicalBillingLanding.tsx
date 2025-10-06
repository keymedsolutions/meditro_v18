"use client";

import { APP_PATH } from "@/data/PATH_APP";
import { motion } from "framer-motion";
import { CheckCircle, Cpu, Database, Phone, Shield, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function MedicalBillingLanding() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };
  const staggerContainer = {
    whileInView: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const floatingAnimation = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const pulseGlow = {
    animate: {
      scale: [1, 1.05, 1],
      boxShadow: [
        "0 0 0 rgba(59, 130, 246, 0)",
        "0 0 20px rgba(59, 130, 246, 0.5)",
        "0 0 0 rgba(59, 130, 246, 0)",
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
      },
    },
  };

  const features = [
    { icon: <Database size={24} />, text: "EHR Integration" },
    { icon: <Shield size={24} />, text: "HIPAA Compliant" },
    { icon: <Cpu size={24} />, text: "AI-Powered Coding" },
    { icon: <Zap size={24} />, text: "Real-time Analytics" },
  ];
  return (
    <div className="tw-min-h-screen ">
      {/* Hero Section */}
      <section className="tw-relative  tw-py-20 tw-px-4 tw-overflow-hidden   before:tw-content-[''] before:tw-absolute before:tw-inset-20 before:tw-rounded-2xl before:tw-bg-purple-300 before:tw-blur-3xl before:tw-opacity-30 before:tw-z-[-1]">
        <div className="tw-absolute tw-inset-0 tw-bg-grid-pattern tw-opacity-5"></div>
        <div className="tw-max-w-7xl tw-mx-auto tw-relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-text-center tw-max-w-4xl tw-mx-auto"
          >
            <div className="tw-text-5xl md:tw-text-6xl tw-font-bold tw-text-gray-900 tw-mb-6 tw-leading-tight">
              We Handle Your <span className="tw-text-blue-600">Billing</span>
              &nbsp;So You Can Handle Your&nbsp;
              <span className="tw-text-green-600">Patients</span>
            </div>
            <p className="tw-text-lg tw-text-gray-600 tw-mb-8 tw-leading-relaxed">
              Smart, Simple, and Stress Free Medical Billing Services
            </p>
            <p className="tw-text-lg tw-text-gray-700 tw-mb-12  tw-max-w-3xl tw-mx-auto">
              At Key MedSolutions, we are not just a Medical Billing Company. We
              are your partner in making revenue management effortless. Leave
              behind claim denials, payment delays, and paperwork overload — and
              step into streamlined success. With our expert team and advanced
              technology, we take care of the numbers while you focus on what
              matters most, your patients.
            </p>
          </motion.div>

          {/* Key Benefits */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            className="tw-grid md:tw-grid-cols-3 tw-gap-6 tw-mb-12"
          >
            {[
              "Fewer Denials. Faster Payments.",
              "30 Percent Fewer Claim Issues.",
              "20 Percent Quicker Reimbursements.",
            ].map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                viewport={{ once: true, amount: 0.2 }}
                className="tw-relative tw-group tw-flex tw-items-center tw-gap-4 tw-overflow-hidden tw-rounded-2xl tw-border tw-border-white-222 tw-bg-white tw-p-6 tw-shadow-lg tw-cursor-pointer tw-transition-all tw-duration-300 hover:tw-border-green-700"
              >
                {/* Animated background div */}
                <div className="tw-absolute tw-left-0 tw-top-0 tw-h-full tw-w-2 tw-bg-green-500 tw-transition-all tw-duration-300 tw-z-0 group-hover:tw-w-full" />
                <CheckCircle
                  className="tw-text-green-500 group-hover:tw-text-white tw-mr-3 tw-flex-shrink-0 tw-relative tw-z-10"
                  size={24}
                />
                <span className="tw-text-gray-800 group-hover:tw-text-white tw-transition-colors tw-duration-300 tw-font-medium tw-relative tw-z-10">
                  {benefit}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-text-center tw-max-w-4xl tw-mx-auto"
          >
            <p className="tw-text-lg tw-text-gray-600 tw-mb-8 tw-leading-relaxed">
              Let us make your practice more efficient, more profitable, and a
              lot less stressful.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-flex tw-flex-col sm:tw-flex-row tw-gap-4 tw-justify-center"
          >
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                  >
                    <polyline points="13.18 1.37 13.18 9.64 21.45 9.64 10.82 22.63 10.82 14.36 2.55 14.36 13.18 1.37"></polyline>
                  </svg>
                  Get Started Today
                </span>
              </button>
            </Link>
            <Link href={APP_PATH.contactus.path}>
              <button className="tw-relative tw-inline-flex tw-items-center tw-justify-center tw-px-8 tw-py-2.5 tw-overflow-hidden tw-tracking-tighter tw-text-white tw-bg-gray-800 tw-rounded-md tw-group">
                <span className="tw-absolute tw-w-0 tw-h-0 tw-transition-all tw-duration-500 tw-ease-out tw-bg-orange-600 tw-rounded-full group-hover:tw-w-60 group-hover:tw-h-56"></span>

                <span className="tw-absolute tw-bottom-0 tw-left-0 tw-h-full tw--ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="tw-w-auto tw-h-full tw-opacity-100 tw-object-stretch"
                    viewBox="0 0 487 487"
                  >
                    <path
                      fillOpacity=".1"
                      fillRule="nonzero"
                      fill="#FFF"
                      d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                    ></path>
                  </svg>
                </span>

                <span className="tw-absolute tw-top-0 tw-right-0 tw-w-12 tw-h-full tw--mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="tw-object-cover tw-w-full tw-h-full"
                    viewBox="0 0 487 487"
                  >
                    <path
                      fillOpacity=".1"
                      fillRule="nonzero"
                      fill="#FFF"
                      d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                    ></path>
                  </svg>
                </span>

                <span className="tw-absolute tw-inset-0 tw-w-full tw-h-full tw--mt-1 tw-rounded-lg tw-opacity-30 tw-bg-gradient-to-b tw-from-transparent tw-via-transparent tw-to-gray-200"></span>

                <span className="tw-relative tw-text-base tw-font-semibold">
                  <Phone className="tw-mr-2" size={20} />
                  Book a Free Call
                </span>
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* <section className="md:tw-py-20 tw-py-10 tw-px-4 tw-bg-accent-500 tw-mb-20 ">
        <div className="tw-container tw-grid sm:tw-grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="tw-flex tw-justify-center "
          >
            <Image
              src="/images/hero-lady.png"
              alt="medical billing landing"
              width={500}
              height={500}
              className="tw-object-cover tw-rounded-lg tw-w-1/2  tw-h-auto"
            />
          </motion.div>

          <div className="tw-text-center md:tw-text-left tw-mt-12 md:tw-mt-0">
            <motion.div {...fadeInUp} viewport={{ once: true, amount: 0.2 }}>
              <h2 className="tw-text-4xl tw-font-bold tw-text-white tw-mb-6">
                Seamless Technology Integration
              </h2>
              <p className="tw-text-xl tw-text-blue-100 tw-mb-8">
                Our medical billing systems effortlessly integrate with your
                existing in-house software, including medicine billing software
                and revenue cycle management solutions, ensuring smooth and
                efficient operations.
              </p>
            </motion.div>
          </div>
        </div>
      </section> */}
      <section
        className="relative md:tw-py-20 tw-py-16 tw-px-4 tw-bg-gradient-to-br tw-from-blue-900 tw-to-blue-700 tw-mb-20 tw-overflow-hidden"
        ref={containerRef}
      >
        {/* Animated background elements */}
        <div className="tw-absolute tw-inset-0 tw-z-0">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="tw-absolute tw-rounded-full tw-bg-white/5"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        <div className="tw-container tw-grid lg:tw-grid-cols-2 tw-gap-12 tw-relative tw-z-10">
          {/* Image Section with enhanced animations */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="tw-flex tw-justify-center tw-items-center tw-relative"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <motion.div
              className="tw-relative"
              animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/images/hero-lady.png"
                alt="medical billing landing"
                width={400}
                height={400}
                className="tw-object-cover tw-rounded-xl tw-relative tw-z-10 tw-shadow-2xl"
              />

              {/* Floating elements around the image */}
              <motion.div
                className="tw-absolute -tw-top-6 -tw-left-6 tw-bg-white tw-p-3 tw-rounded-full tw-shadow-lg tw-z-10"
                variants={floatingAnimation}
                animate="animate"
              >
                <CheckCircle className="tw-text-green-500" size={32} />
              </motion.div>

              <motion.div
                className="tw-absolute -tw-bottom-4 -tw-right-4 tw-bg-white tw-p-3 tw-rounded-full tw-shadow-lg tw-z-10"
                variants={floatingAnimation}
                animate="animate"
                transition={{ delay: 1 }}
              >
                <Zap className="tw-text-yellow-500" size={32} />
              </motion.div>

              {/* Glow effect behind image */}
              <motion.div
                className="tw-absolute tw-inset-0 tw-bg-blue-400/30 tw-rounded-xl tw-blur-xl"
                variants={pulseGlow}
                animate="animate"
              />
            </motion.div>
          </motion.div>

          {/* Text Section with enhanced content */}
          <div className="tw-flex tw-flex-col tw-justify-center tw-text-center md:tw-text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="tw-mb-6"
            >
              <span className="tw-inline-block tw-px-3 tw-py-1 tw-bg-blue-400/20 tw-text-blue-200 tw-rounded-full tw-text-sm tw-mb-4">
                Next Generation Technology
              </span>
              <h2 className="tw-text-4xl md:tw-text-5xl tw-font-bold tw-text-white tw-mb-6">
                Seamless Technology{" "}
                <span className="tw-text-blue-300">Integration</span>
              </h2>
              <p className="tw-text-lg tw-text-blue-100 tw-mb-8">
                Our advanced medical billing systems effortlessly integrate with
                your existing in-house software, including medicine billing
                software and revenue cycle management solutions, ensuring smooth
                and efficient operations.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Animated floating particles */}
        <div className="tw-absolute tw-inset-0 tw-pointer-events-none tw-overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="tw-absolute tw-rounded-full tw-bg-white"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 5,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
