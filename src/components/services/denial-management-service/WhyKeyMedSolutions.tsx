"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Target,
  Users,
  Heart,
  ArrowRight,
  CheckCircle,
  Star,
  BarChart3,
  Zap,
} from "lucide-react";

const WhyKeyMedSolutions = () => {
  return (
    <div className="tw-py-20 tw-px-4 tw-bg-gradient-to-br tw-from-slate-900 tw-via-blue-900 tw-to-indigo-900 tw-relative tw-overflow-hidden">
      {/* Animated background elements */}
      <div className="tw-absolute tw-inset-0 tw-bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0YzAtMS4xLjktMiAyLTJzMiAuOSAyIDItLjkgMi0yIDItMi0uOS0yLTJ6TTI0IDMyYy0xLjEgMC0yLS45LTItMnMuOS0yIDItMiAyIC45IDIgMi0uOSAyLTIgMnpNMzAgMjBjLTEuMSAwLTIgLjktMiAyIDAgMS4xLjkgMiAyIDJzMi0uOSAyLTJjMC0xLjEtLjktMi0yLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] tw-opacity-10"></div>

      {/* Animated floating elements */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="tw-absolute tw-top-20 tw-left-10 tw-w-6 tw-h-6 tw-bg-blue-500 tw-rounded-full tw-opacity-20"
      ></motion.div>
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="tw-absolute tw-bottom-40 tw-right-16 tw-w-8 tw-h-8 tw-bg-indigo-500 tw-rounded-full tw-opacity-20"
      ></motion.div>
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="tw-absolute tw-top-1/3 tw-right-1/4 tw-w-10 tw-h-10 tw-bg-purple-500 tw-rounded-full tw-opacity-15"
      ></motion.div>

      <div className="tw-container tw-mx-auto tw-relative tw-z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="tw-text-center tw-mb-16"
        >
          <h2 className="tw-text-4xl md:tw-text-5xl tw-font-bold tw-text-white tw-mb-4">
            Why&nbsp;
            <span className="tw-text-transparent tw-bg-clip-text tw-bg-gradient-to-r tw-from-blue-400 tw-to-cyan-400">
              Key MedSolutions
            </span>
            ?
          </h2>
          <p className="tw-text-xl tw-text-blue-100 tw-max-w-3xl tw-mx-auto">
            Key MedSolutions is a trusted partner for healthcare providers
            seeking reliable Denial Management Services. Our team of experts is
            dedicated to delivering measurable results, helping you reduce claim
            denials, accelerate payments, and improve your practice's cash flow.
          </p>
        </motion.div>

        {/* Main content with premium layout */}
        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-16 tw-items-center tw-mb-20">
          {/* Left side - Premium visual elements */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            animate={{
              y: [0, -15, 0],
              transition: {
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
            }}
            className="tw-relative"
          >
            {/* Main glowing element */}
            <div className="tw-relative tw-w-full tw-h-96">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
                className="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-blue-600/20 tw-to-purple-600/20 tw-rounded-3xl tw-backdrop-blur-sm tw-border tw-border-white/10"
              ></motion.div>

              {/* ✅ Center image directly */}
              <motion.img
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                src="/images/denial-management-service-why-choose-us.png"
                alt="Denial Management Service"
                className="tw-absolute tw-inset-0 tw-m-auto tw-max-w-[65%] tw-max-h-[65%]  tw-object-contain tw-shadow-lg tw-rounded-2xl"
              />

              {/* Floating premium icons */}
              {[
                {
                  icon: <Target className="tw-w-8 tw-h-8 tw-text-cyan-400" />,
                  position: "tw-top-8 tw-left-8",
                },
                {
                  icon: <Users className="tw-w-8 tw-h-8 tw-text-blue-400" />,
                  position: "tw-top-8 tw-right-8",
                },
                {
                  icon: (
                    <BarChart3 className="tw-w-8 tw-h-8 tw-text-indigo-400" />
                  ),
                  position: "tw-bottom-8 tw-left-8",
                },
                {
                  icon: <Zap className="tw-w-8 tw-h-8 tw-text-purple-400" />,
                  position: "tw-bottom-8 tw-right-8",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0, opacity: 0, rotate: -180 }}
                  whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.7, delay: 1.2 + index * 0.2 }}
                  viewport={{ once: true }}
                  className={`tw-absolute ${item.position} tw-w-16 tw-h-16 tw-bg-slate-800/60 tw-rounded-2xl tw-shadow-lg tw-flex tw-items-center tw-justify-center tw-backdrop-blur-sm tw-border tw-border-white/10`}
                >
                  {item.icon}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Premium content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-space-y-8"
          >
            <p className="tw-text-xl tw-text-blue-100 tw-leading-relaxed">
              Whether you're seeking targeted denial management solutions for a
              small clinic or comprehensive solutions for a large hospital, we
              bring the expertise and advanced tools to deliver results tailored
              to your needs. With a focus on innovation, transparency, and
              customer satisfaction, we are committed to helping your practice
              thrive.
            </p>

            <div className="tw-space-y-5">
              {[
                {
                  text: "Reduce claim denials",
                  icon: (
                    <CheckCircle className="tw-w-6 tw-h-6 tw-text-green-400" />
                  ),
                },
                {
                  text: "Accelerate payments",
                  icon: <Zap className="tw-w-6 tw-h-6 tw-text-amber-400" />,
                },
                {
                  text: "Improve cash flow",
                  icon: (
                    <BarChart3 className="tw-w-6 tw-h-6 tw-text-blue-400" />
                  ),
                },
                {
                  text: "Tailored solutions for all practice sizes",
                  icon: <Users className="tw-w-6 tw-h-6 tw-text-purple-400" />,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="tw-flex tw-items-center tw-p-4 tw-bg-slate-800/40 tw-rounded-xl tw-backdrop-blur-sm tw-border tw-border-white/5 tw-group hover:tw-bg-slate-800/60 tw-transition-all tw-duration-300"
                >
                  <span className="tw-mr-4 tw-p-2 tw-bg-slate-700/50 tw-rounded-lg group-hover:tw-scale-110 tw-transition-transform tw-duration-300">
                    {item.icon}
                  </span>
                  <span className="tw-text-lg tw-text-white">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhyKeyMedSolutions;
