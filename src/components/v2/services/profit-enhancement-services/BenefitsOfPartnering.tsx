"use client";

import { motion } from "framer-motion";
import { TrendingUp, Workflow, LineChart, Scissors } from "lucide-react";

export function BenefitsOfPartnering() {
  const services = [
    {
      title: "Enhanced Revenue Streams",
      description:
        "Capture missed revenue opportunities and ensure faster reimbursements through our specialized strategies.",
      icon: TrendingUp,
    },
    {
      title: "Operational Efficiency",
      description:
        "Eliminate inefficiencies in workflows and processes, allowing you and your staff to focus on delivering quality patient care.",
      icon: Workflow,
    },
    {
      title: "Strategic Financial Planning",
      description:
        "Our Profit Enhancement Consulting includes actionable financial plans to prepare your practice for the future.",
      icon: LineChart,
    },
    {
      title: "Reduced Costs",
      description:
        "Our Business Cost Reduction Services help you trim excess costs while maintaining high operational standards.",
      icon: Scissors,
    },
  ];

  return (
    <section className="tw-py-24 tw-px-4 tw-bg-gradient-to-br tw-from-background tw-to-card">
      <div className="sm:container tw-mx-auto tw-max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="tw-text-center tw-mb-16"
        >
          <h2 className="tw-text-4xl md:tw-text-5xl tw-font-bold tw-font-serif tw-text-foreground tw-mb-6">
            Benefits of&nbsp;
            <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
              Partnering with Us
            </span>
          </h2>
        </motion.div>

        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-8 tw-px-2">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="border-2 tw-border-accent-300 tw-bg-white tw-shadow-[0px_0px_15px_rgba(0,0,0,0.09)] sm:tw-p-9 tw-p-4 tw-space-y-3 tw-relative tw-overflow-hidden tw-rounded-2xl tw-transition-transform tw-duration-300 hover:tw-scale-105"
            >
              {/* Floating Number Bubble */}
              <div className="tw-w-24 tw-h-24 tw-bg-accent-500 tw-rounded-full tw-absolute tw--right-5 tw--top-7">
                <p className="tw-absolute tw-bottom-6 tw-left-7 tw-text-white tw-text-2xl tw-mb-0">
                  {String(index + 1).padStart(2, "0")}
                </p>
              </div>

              {/* Service Icon */}
              <div className="tw-w-12 tw-text-accent-500">
                <service.icon className="tw-w-12 tw-h-12 " />
              </div>

              {/* Title */}
              <h3 className="tw-font-bold tw-text-xl">{service.title}</h3>

              {/* Description */}
              <p className="tw-text-sm tw-text-zinc-500 tw-leading-6">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
