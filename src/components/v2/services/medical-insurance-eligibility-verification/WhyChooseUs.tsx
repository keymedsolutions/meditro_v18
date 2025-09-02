"use client";

import { motion } from "framer-motion";
import { Users, Headphones, BarChart3, ShieldCheck } from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    {
      icon: <Users className="tw-w-6 tw-h-6 tw-text-white" />,
      title: "Expert Insurance Verification Specialists",
      desc: "Our highly trained staff works 24/7 to support your team with unmatched responsiveness and insight.",
      gradient: "tw-bg-gradient-to-r tw-from-blue-500 tw-to-cyan-500",
    },
    {
      icon: <Headphones className="tw-w-6 tw-h-6 tw-text-white" />,
      title: "Personalized Support",
      desc: "From small practices to enterprise health systems, our solutions adapt to your exact requirements.",
      gradient: "tw-bg-gradient-to-r tw-from-purple-500 tw-to-pink-500",
    },
    {
      icon: <BarChart3 className="tw-w-6 tw-h-6 tw-text-white" />,
      title: "Measurable Results",
      desc: "Clients report fewer claim denials, shorter payment cycles, and higher up-front patient collections after switching to our service.",
      gradient: "tw-bg-gradient-to-r tw-from-pink-500 tw-to-orange-400",
    },
    {
      icon: <ShieldCheck className="tw-w-6 tw-h-6 tw-text-white" />,
      title: "Leading-Edge Security & Compliance",
      desc: "Protect patients and your business with rigorous data protocols and continuous regulatory monitoring.",
      gradient: "tw-bg-gradient-to-r tw-from-indigo-500 tw-to-blue-500",
    },
  ];

  return (
    <section className="tw-relative tw-py-28 tw-overflow-hidden">
      {/* Background diagonal clipped layer */}
      <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-blue-50 tw-via-purple-50 tw-to-pink-50" />
      <div
        className="tw-absolute tw-inset-0 tw-bg-white/40 tw-backdrop-blur-md"
        style={{
          clipPath: "polygon(0 0, 100% 10%, 100% 100%, 0 90%)",
        }}
      />

      {/* Floating animated gradient blobs */}
      <motion.div
        className="tw-absolute tw-w-72 tw-h-72 tw-bg-gradient-to-r tw-from-purple-300 tw-to-pink-300 tw-rounded-full tw-blur-3xl tw-opacity-40"
        animate={{
          x: ["0%", "15%", "0%"],
          y: ["0%", "10%", "0%"],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="tw-absolute tw-right-0 tw-w-80 tw-h-80 tw-bg-gradient-to-r tw-from-blue-200 tw-to-cyan-200 tw-rounded-full tw-blur-3xl tw-opacity-40"
        animate={{
          x: ["0%", "-10%", "0%"],
          y: ["0%", "15%", "0%"],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="tw-relative tw-z-10 tw-max-w-6xl tw-mx-auto tw-px-6">
        <motion.div
          className="tw-text-center tw-mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="tw-mx-auto tw-break-all tw-text-center tw-text-3xl md:tw-text-5xl tw-font-bold tw-font-serif tw-text-foreground tw-mb-10">
            Why Choose Us as Your
            <br />
            <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
              Insurance Verification Company USA?
            </span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="tw-mt-16 tw-grid tw-gap-10 md:tw-grid-cols-2">
          {points.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              className="tw-group tw-relative tw-bg-white/60 tw-backdrop-blur-lg tw-rounded-2xl md:tw-p-8 tw-p-4 tw-shadow-xl border tw-border-white/30 tw-transition-all tw-duration-500 hover:tw-scale-105 hover:tw-shadow-2xl hover:tw-shadow-indigo-200/60"
            >
              {/* Icon wrapper with gradient background */}
              <div
                className={`tw-inline-flex tw-items-center tw-justify-center tw-w-14 tw-h-14 tw-rounded-xl tw-shadow-lg tw-transition-transform tw-duration-500 group-hover:tw-rotate-6 ${point.gradient}`}
              >
                {point.icon}
              </div>

              <h3 className="tw-mt-6 tw-text-xl tw-font-semibold tw-text-gray-900">
                {point.title}
              </h3>
              <p className="tw-mt-3 tw-text-gray-700">{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
