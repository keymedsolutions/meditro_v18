"use client";

import { motion } from "framer-motion";
import { Briefcase, Sliders, BarChart3, ShieldCheck, Link } from "lucide-react";

export function WhatSetsUsApart() {
  const features = [
    {
      title: "Proven Expertise",
      description:
        "With years of experience in healthcare operations, we understand the financial challenges you face.",
      icon: Briefcase,
    },
    {
      title: "Customizable Solutions",
      description:
        "Our offerings are tailored to meet the unique needs of practices, whether you’re a solo practitioner or a large multi-specialty network.",
      icon: Sliders,
    },
    {
      title: "Tech-Driven Insights",
      description:
        "Advanced analytics inform every recommendation we make, ensuring maximized revenue and efficiency.",
      icon: BarChart3,
    },
    {
      title: "HIPAA-Compliant Processes",
      description:
        "Your data’s security and compliance are our top priorities.",
      icon: ShieldCheck,
    },
    {
      title: "Seamless Integration",
      description:
        "Our solutions integrate with your existing practice management and EHR platforms for a hassle-free experience.",
      icon: Link,
    },
  ];

  // Framer Motion Variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section className="tw-relative !tw-pt-0 tw-bg-gradient-to-br tw-from-background tw-to-muted/40 overflow-hidden">
      {/* Decorative Background Mesh / Grid */}
      <div className="tw-absolute tw-inset-0 tw-bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.1),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(236,72,153,0.1),transparent_50%)]"></div>

      <div className="container tw-relative tw-z-10 tw-mx-auto tw-px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="tw-text-center tw-mb-20 tw-pt-20"
        >
          <motion.div
            className="tw-text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="tw-mx-auto tw-text-center tw-text-3xl md:tw-text-5xl tw-font-bold tw-font-serif tw-text-foreground tw-mb-10">
              <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
                What Sets Us Apart?
              </span>
            </h2>
          </motion.div>
          <p className="tw-text-lg tw-text-muted-foreground tw-max-w-3xl tw-mx-auto tw-font-serif">
            At Key MedSolutions, we’re not just another Financial Profit
            Enhancement Company USA; we’re your trusted partner in achieving
            financial stability and growth. Here’s why healthcare providers
            nationwide choose our Healthcare Profit Enhancement Services
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="tw-grid tw-gap-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className={`tw-flex tw-flex-col lg:tw-flex-row tw-items-start tw-gap-8 ${
                index % 2 === 1 ? "lg:tw-flex-row-reverse" : ""
              }`}
            >
              {/* Icon with Gradient Glow */}
              <div className="tw-flex-shrink-0">
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.1 }}
                  className="tw-w-20 tw-h-20 tw-rounded-2xl tw-bg-gradient-to-br tw-from-primary/20 tw-to-accent/20 tw-flex tw-items-center tw-justify-center tw-shadow-lg tw-border tw-border-primary/30"
                >
                  <feature.icon className="tw-w-10 tw-h-10 tw-text-primary" />
                </motion.div>
              </div>

              {/* Content Box */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="tw-flex-1 tw-bg-card tw-p-8 tw-rounded-3xl tw-shadow-xl border tw-border-border/40 hover:tw-border-primary/60 tw-transition-all tw-duration-500 tw-relative"
              >
                {/* Subtle Glow Border */}
                <div className="tw-absolute -tw-inset-px tw-rounded-3xl tw-bg-gradient-to-r tw-from-primary/30 tw-to-accent/30 tw-opacity-0 group-hover:tw-opacity-100 tw-blur-xl tw-transition"></div>

                <h3 className="tw-text-2xl tw-font-bold tw-text-foreground tw-mb-4 tw-font-sans relative z-10">
                  {feature.title}
                </h3>
                <p className="tw-text-muted-foreground tw-leading-relaxed tw-mb-4 tw-font-serif relative z-10">
                  {feature.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
