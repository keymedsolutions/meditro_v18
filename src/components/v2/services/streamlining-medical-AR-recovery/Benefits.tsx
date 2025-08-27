"use client";

import { motion } from "framer-motion";
import { TrendingUp, ArrowUpRight, Users, ShieldCheck, Layers, Lock } from "lucide-react";

export function Benefits() {
  const benefits = [
    {
      title: "Significantly Improved Recovery Rates",
      description:
        "Our targeted efforts mean fewer accounts are written off as bad debt.",
      icon: TrendingUp, // Lucide icon
    },
    {
      title: "Accelerated Cash Flow",
      description:
        "Faster collection of aging claims to stabilize and grow your financial foundation.",
      icon: ArrowUpRight, // Lucide icon
    },
    {
      title: "Reduced Administrative Burden",
      description:
        "Let our team manage your accounts receivable so your staff can devote more time to patient care.",
      icon: Users, // Lucide icon
    },
    {
      title: "Minimized Denials",
      description:
        "We detect denial trends, address systemic causes, and resolve issues proactively.",
      icon: ShieldCheck, // Lucide icon
    },
    {
      title: "Scalable Solutions for All Practice Sizes",
      description:
        "Whether you’re a single-provider clinic or a large hospital network, our AR Recovery Solution is designed to fit your needs.",
      icon: Layers, // Lucide icon
    },
    {
      title: "Peace of Mind",
      description:
        "With industry experts and the strictest compliance standards, you are always protected.",
      icon: Lock, // Lucide icon
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
              The Benefits of&nbsp;
              <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
                Our Outstanding AR Recovery Services
              </span>
            </h2>
          </motion.div>
          <p className="tw-text-lg tw-text-muted-foreground tw-max-w-3xl tw-mx-auto tw-font-serif">
            When you choose Key MedSolutions for your&nbsp;
            <span className="tw-font-bold">AR Recovery Services,</span> you
            gain:
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="tw-grid tw-gap-12"
        >
          {benefits.map((benefit, index) => (
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
                  <benefit.icon className="tw-w-10 tw-h-10 tw-text-primary" />
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
                  {benefit.title}
                </h3>
                <p className="tw-text-muted-foreground tw-leading-relaxed tw-mb-4 tw-font-serif relative z-10">
                  {benefit.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
