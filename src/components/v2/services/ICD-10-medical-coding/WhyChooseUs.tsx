"use client";

import { motion } from "framer-motion";

export function WhyChooseUs() {
  const highlights = [
    {
      title: "Certified Team Expertise",
      description:
        "Our certified ICD-10 Coding Specialists meet AAPC and AHIMA standards.",
    },
    {
      title: "Maximized Revenue & Error Reduction",
      description:
        "Focused on minimizing denials and optimizing every point of your revenue stream.",
    },
    {
      title: "Stringent HIPAA Compliance & Data Security",
      description:
        "A robust compliance culture ensures your practice is always protected.",
    },
    {
      title: "Multi-specialty Proficiency",
      description: "Our team handles specialty nuances with ease.",
    },
    {
      title: "Adaptable Service Models",
      description:
        "Customize your support level as your needs grow or fluctuate.",
    },
  ];

  return (
    <section className="tw-py-24 tw-px-4 tw-bg-gradient-to-br tw-from-background tw-to-card">
      <div className="sm:tw-container sm:tw-px-0 tw-px-4 tw-mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="tw-text-center tw-mb-16"
        >
          <h2 className="tw-text-4xl md:tw-text-5xl tw-font-bold tw-font-serif tw-text-foreground tw-mb-6">
            Why Choose Us as Your&nbsp;
            <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
              ICD-10 Coding Company?
            </span>
          </h2>
          <p className="sm:tw-text-xl tw-text-muted-foreground tw-max-w-3xl tw-mx-auto tw-leading-relaxed">
            Partnering with our ICD-10 Medical Coding Company gives you access
            to dedicated professionals who know the ins and outs of the ICD-10
            landscape. As a Top ICD-10 Coding Company and a recognized ICD-10
            coding company in USA, our core strengths include:
          </p>
        </motion.div>

        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8">
          {highlights.map((item, index) => (
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
              className="border tw-bg-white tw-shadow-[0px_0px_15px_rgba(0,0,0,0.09)] sm:tw-p-9 tw-p-4 tw-space-y-3 tw-relative tw-overflow-hidden tw-rounded-2xl tw-transition-transform tw-duration-300 hover:tw-scale-105"
            >
              {/* Floating Number Bubble */}
              <div className="tw-w-24 tw-h-24 tw-bg-accent-500 tw-rounded-full tw-absolute tw--right-5 tw--top-7">
                <p className="tw-absolute tw-bottom-6 tw-left-7 tw-text-white tw-text-2xl tw-mb-0">
                  {String(index + 1).padStart(2, "0")}
                </p>
              </div>

              {/* Title */}
              <h3 className="tw-font-bold tw-text-xl">{item.title}</h3>

              {/* Description */}
              <p className="tw-text-sm tw-text-zinc-500 tw-leading-6">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
