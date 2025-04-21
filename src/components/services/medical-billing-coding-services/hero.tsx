"use client"
import React, { useEffect, useRef } from 'react';
import { motion } from "framer-motion"
import { Button } from "@/ui/button"
import { Phone } from "lucide-react"
import { Badge } from "@/ui/badge"

export function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              'tw-opacity-100',
              'tw-translate-y-0',
              'tw-scale-100',
              'tw-animate-fade-in'
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);

    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="tw-relative tw-pt-24 tw-pb-16 md:tw-pt-32 md:tw-pb-24 tw-overflow-hidden">
      {/* Background */}
      <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-cyan-600 tw-to-blue-800 tw-opacity-90 tw-z-0">
        <div className="tw-absolute tw-inset-0 tw-bg-[url('/grid-pattern.svg')] tw-bg-repeat tw-opacity-20" />
      </div>

      {/* Floating shapes */}
      <motion.div className="tw-absolute tw-top-1/4 tw-right-1/4 tw-w-64 tw-h-64 tw-rounded-full tw-bg-white tw-opacity-10"
        animate={{ scale: [1, 1.2, 1], x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div className="tw-absolute tw-bottom-1/3 tw-left-1/3 tw-w-48 tw-h-48 tw-rounded-full tw-bg-white tw-opacity-10"
        animate={{ scale: [1, 1.3, 1], x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div className="tw-absolute tw-top-20 tw-right-10 tw-w-20 tw-h-20 tw-bg-cyan-400 tw-opacity-20 tw-rotate-45"
        animate={{ rotate: [45, 90, 45], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div className="tw-absolute tw-bottom-20 tw-left-10 tw-w-16 tw-h-16 tw-bg-blue-400 tw-opacity-20"
        style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
        animate={{
          borderRadius: [
            "30% 70% 70% 30% / 30% 30% 70% 70%",
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "30% 70% 70% 30% / 30% 30% 70% 70%",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Content */}
      <div className="tw-container tw-mx-auto tw-px-4 tw-relative tw-z-10">
        <motion.div
          className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-12 tw-gap-10 tw-items-start"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left: Hero Text */}
          <motion.div className="lg:tw-col-span-6 tw-space-y-6 tw-max-w-3xl" variants={itemVariants}>
            <Badge variant="outline" className="tw-bg-white/80 tw-backdrop-blur-sm tw-border-keymed-200 tw-text-keymed-700 tw-px-3 tw-py-1 tw-inline-flex tw-items-center tw-gap-1">
              <span className="tw-w-2 tw-h-2 tw-rounded-full tw-bg-keymed-500" />
              Trusted by 500+ Healthcare Providers
            </Badge>

            <h1
              ref={titleRef}
              className="tw-opacity-0 tw-translate-y-6 tw-scale-95 tw-transition-all tw-duration-700 tw-ease-out tw-font-extrabold tw-tracking-tight tw-text-6xl sm:tw-text-5xl lg:tw-text-6xl tw-mb-6"
            >
              <span className=" section-title tw-text-primary-200">Medical Billing &</span><br />
              <span className="tw-inline-block tw-relative section-title tw-text-white">
              Coding Services
                <svg
                  className="tw-absolute -tw-bottom-2 tw-left-0 tw-w-full tw-h-2 tw-text-keymed-300 tw-opacity-60"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                >
                  <path d="M0,0 C20,8 50,12 80,8 L100,0 L100,12 L0,12 Z" fill="currentColor" />
                </svg>
              </span>
            </h1>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            className="lg:tw-col-span-6 tw-bg-white/10 tw-backdrop-blur-md tw-rounded-xl tw-shadow-2xl tw-p-8 tw-border tw-border-white/20"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="tw-mb-6 tw-text-white tw-font-semibold tw-text-lg">Get in Touch</div>
            <form className="tw-space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="tw-w-full tw-p-3 tw-rounded-lg tw-bg-white/30 tw-text-white tw-placeholder-white tw-border tw-border-white/30 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-cyan-400"
              />
              <input
                type="email"
                placeholder="Email"
                className="tw-w-full tw-p-3 tw-rounded-lg tw-bg-white/30 tw-text-white tw-placeholder-white tw-border tw-border-white/30 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-cyan-400"
              />
              <select
                className="tw-w-full tw-p-3 tw-rounded-lg tw-bg-white/30 tw-text-white tw-border tw-border-white/30 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-cyan-400"
              >
                <option value="">Select Service</option>
                <option value="billing">Medical Billing</option>
                <option value="coding">Medical Coding</option>
                <option value="consulting">Consultation</option>
              </select>
              <Button
                size="lg"
                type="submit"
                className="tw-w-full tw-bg-gradient-to-r tw-from-cyan-400 tw-to-blue-500 hover:tw-from-cyan-500 hover:tw-to-blue-600 tw-text-white"
              >
                <Phone className="tw-mr-2 tw-h-5 tw-w-5" />
                Submit Inquiry
              </Button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
