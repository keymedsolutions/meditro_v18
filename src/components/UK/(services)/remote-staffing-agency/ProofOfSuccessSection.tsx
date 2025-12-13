// "use client";

// import { motion } from "framer-motion";
// import React from "react";

// const ProofOfSuccessSection: React.FC = () => {
//   const results = [
//     {
//       highlight: "60%",
//       text: "Reduced hiring costs by 60% for a tech company needing development support.",
//     },
//     {
//       highlight: "20+",
//       text: "Built a 20-person remote finance team for a retail group expanding operations globally.",
//     },
//     {
//       highlight: "48 hrs",
//       text: "Helped an agency scale with a 48-hour turnaround for remote marketing hires.",
//     },
//   ];

//   return (
//     <section className="tw-relative tw-w-full tw-overflow-hidden tw-bg-[#f6f9ff] tw-py-24">
//       {/* Floating ambient shapes */}
//       <div className="tw-pointer-events-none tw-absolute tw-top-[10%] tw-left-[6%] tw-h-28 tw-w-28 tw-rounded-full tw-bg-accent-200/60 tw-blur-3xl pos-float-y" />
//       <div className="tw-pointer-events-none tw-absolute tw-bottom-[14%] tw-right-[8%] tw-h-36 tw-w-36 tw-rounded-[56px] tw-border tw-border-accent-400/40 pos-rotate" />

//       <div className="tw-container tw-relative tw-z-10 tw-mx-auto tw-max-w-6xl tw-px-6">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           viewport={{ once: true }}
//           className="tw-max-w-3xl tw-mb-16"
//         >
//           <h2 className="tw-text-2xl sm:tw-text-3xl lg:tw-text-4xl tw-font-semibold tw-text-slate-900 tw-mb-4">
//             Proof of Success
//           </h2>
//           <p className="tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-slate-700">
//             Here’s what we’ve delivered for businesses across the UK and worldwide:
//           </p>
//         </motion.div>

//         {/* Results layout */}
//         <div className="tw-flex tw-flex-col tw-gap-10">
//           {results.map((item, index) => (
//             <motion.div
//               key={item.text}
//               initial={{ opacity: 0, x: -40 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{
//                 duration: 0.7,
//                 ease: "easeOut",
//                 delay: index * 0.08,
//               }}
//               viewport={{ once: true }}
//               className="tw-flex tw-items-start tw-gap-6"
//             >
//               {/* Highlight block */}
//               <div
//                 className="tw-flex-shrink-0 tw-min-w-[96px] tw-rounded-2xl tw-bg-accent-500 tw-text-white tw-flex tw-items-center tw-justify-center tw-py-6 tw-text-xl sm:tw-text-2xl tw-font-bold tw-shadow-lg"
//                 style={{
//                   boxShadow:
//                     "0 16px 40px rgba(59,130,246,0.35)",
//                 }}
//               >
//                 {item.highlight}
//               </div>

//               {/* Text */}
//               <p className="tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-slate-700 tw-max-w-2xl">
//                 {item.text}
//               </p>
//             </motion.div>
//           ))}
//         </div>

//         {/* Divider */}
//         <div className="tw-my-20 tw-h-px tw-w-full tw-bg-gradient-to-r tw-from-transparent tw-via-accent-300 tw-to-transparent" />

//         {/* CTA BLOCK */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           viewport={{ once: true }}
//           className="tw-rounded-[36px] tw-bg-white tw-px-8 tw-py-10 tw-shadow-xl tw-flex tw-flex-col lg:tw-flex-row tw-items-start lg:tw-items-center tw-justify-between tw-gap-8"
//           style={{
//             border: "1px solid rgba(203,213,225,0.9)",
//           }}
//         >
//           <div className="tw-max-w-xl">
//             <h3 className="tw-text-xl sm:tw-text-2xl tw-font-semibold tw-text-slate-900 tw-mb-3">
//               Real results, real growth.
//             </h3>
//             <p className="tw-text-sm sm:tw-text-base tw-text-slate-700">
//               Start Building Your Remote Team Today
//             </p>
//           </div>

//           <div className="tw-flex tw-flex-wrap tw-gap-4">
//             <button className="tw-inline-flex tw-items-center tw-justify-center tw-rounded-full tw-px-6 tw-py-3 tw-text-sm sm:tw-text-base tw-font-semibold tw-bg-accent-500 tw-text-white tw-shadow-lg hover:tw-translate-y-[1px] tw-transition">
//               Book a Consultation
//             </button>
//             <button
//               className="tw-inline-flex tw-items-center tw-justify-center tw-rounded-full tw-px-6 tw-py-3 tw-text-sm sm:tw-text-base tw-font-semibold tw-bg-white tw-text-slate-900 tw-shadow-sm hover:tw-translate-y-[1px] tw-transition"
//               style={{ border: "1px solid rgba(148,163,184,0.6)" }}
//             >
//               Request Talent Profiles
//             </button>
//           </div>
//         </motion.div>
//       </div>

//       {/* Animations */}
//       <style jsx>{`
//         .pos-float-y {
//           animation: posFloatY 10s ease-in-out infinite;
//         }
//         .pos-rotate {
//           animation: posRotate 30s linear infinite;
//         }

//         @keyframes posFloatY {
//           0%,
//           100% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(-24px);
//           }
//         }

//         @keyframes posRotate {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default ProofOfSuccessSection;

"use client";

import { motion } from "framer-motion";
import React from "react";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const stepCardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
  hover: {
    y: -4,
    scale: 1.01,
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

const lineVariants = {
  hidden: { width: "0%" },
  visible: {
    width: "100%",
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

const BackOfficeProcess: React.FC = () => {
  return (
    <section className="tw-relative tw-overflow-hidden tw-bg-white tw-text-slate-900 tw-py-16 md:tw-py-24 lg:tw-py-28">
      {/* Background orbits / shapes */}
      <div className="tw-pointer-events-none tw-absolute tw-inset-0 tw-flex tw-items-center tw-justify-center">
        <div
          className="tw-h-[520px] tw-w-[520px] tw-rounded-full tw-opacity-40"
          style={{
            border: "1px dashed rgba(148,163,184,0.5)",
          }}
        />
        <div
          className="tw-absolute tw-h-[360px] tw-w-[360px] tw-rounded-full tw-opacity-60"
          style={{
            border: "1px solid rgba(148,163,184,0.35)",
          }}
        />
        <div className="tw-absolute tw-h-32 tw-w-32 tw-rounded-full tw-bg-accent-50 tw-blur-3xl tw-opacity-70" />
      </div>

      <div className="tw-relative tw-z-10 tw-mx-auto tw-max-w-5xl tw-px-4 md:tw-px-6 lg:tw-px-8">
        <motion.div
          className="tw-flex tw-flex-col tw-items-center tw-gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Top copy block */}
          <motion.div
            className="tw-w-full tw-max-w-3xl tw-text-center tw-space-y-5"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div
              className="tw-inline-flex tw-items-center tw-gap-2 tw-rounded-full tw-bg-accent-50 tw-px-4 tw-py-2 tw-shadow-[0_10px_30px_rgba(15,23,42,0.08)] tw-backdrop-blur-xl"
              style={{
                border: "1px solid var(--accent-100)",
              }}
            >
              <span className="tw-h-2 tw-w-2 tw-rounded-full tw-bg-accent-500 tw-shadow-[0_0_0_6px_rgba(56,189,248,0.25)]" />
              <p className="tw-text-xs md:tw-text-sm tw-font-medium tw-text-accent-700 tw-mb-0 tw-ms-2">
                Proof of Success
              </p>
            </div>
            <p className="tw-text-sm md:tw-text-base tw-leading-relaxed tw-text-slate-600">
              Here’s what we’ve delivered for businesses across the UK and
              worldwide:
            </p>
          </motion.div>

          {/* Animated horizontal connector line */}
          <motion.div
            className="tw-relative tw-w-full tw-max-w-4xl tw-mt-2"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              className="tw-h-[2px] tw-rounded-full tw-bg-gradient-to-r tw-from-accent-100 tw-via-accent-300 tw-to-accent-200"
              variants={lineVariants}
            />
            {/* Step anchor dots */}
            <div className="tw-absolute tw-inset-0 tw-flex tw-justify-between tw-items-center">
              <div className="tw-flex tw-justify-center tw-w-1/3">
                <div className="tw-h-3 tw-w-3 tw-rounded-full tw-bg-accent-500 tw-shadow-[0_0_0_8px_rgba(56,189,248,0.25)]" />
              </div>
              <div className="tw-flex tw-justify-center tw-w-1/3">
                <div className="tw-h-3 tw-w-3 tw-rounded-full tw-bg-accent-500 tw-shadow-[0_0_0_8px_rgba(56,189,248,0.25)]" />
              </div>
              <div className="tw-flex tw-justify-center tw-w-1/3">
                <div className="tw-h-3 tw-w-3 tw-rounded-full tw-bg-accent-500 tw-shadow-[0_0_0_8px_rgba(56,189,248,0.25)]" />
              </div>
            </div>
          </motion.div>

          {/* Steps row */}
          <motion.div
            className="tw-grid tw-gap-6 md:tw-gap-8 md:tw-grid-cols-3 tw-w-full tw-max-w-5xl tw-mt-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Step 1 */}
            <motion.div
              className="tw-relative tw-flex tw-flex-col tw-gap-3 tw-rounded-3xl tw-bg-white/95 tw-backdrop-blur-xl tw-p-5 md:tw-p-6 tw-shadow-[0_18px_60px_rgba(15,23,42,0.12)]"
              style={{
                border: "1px solid rgba(148,163,184,0.35)",
              }}
              variants={stepCardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              transition={{ duration: 0.65, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="tw-flex tw-items-center tw-gap-2">
                <div className="tw-h-7 tw-w-7 tw-rounded-2xl tw-bg-accent-100 tw-flex tw-items-center tw-justify-center tw-shadow-[0_8px_24px_rgba(56,189,248,0.35)]">
                  <span className="tw-h-1.5 tw-w-1.5 tw-rounded-full tw-bg-accent-500" />
                </div>
                <span className="tw-font-semibold">60%</span>
              </div>
              <p className="tw-text-sm md:tw-text-base tw-font-medium tw-text-slate-900 tw-mb-0">
                Reduced hiring costs by 60% for a tech company needing
                development support.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              className="tw-relative tw-flex tw-flex-col tw-gap-3 tw-rounded-3xl tw-bg-white/95 tw-backdrop-blur-xl tw-p-5 md:tw-p-6 tw-shadow-[0_18px_60px_rgba(15,23,42,0.12)]"
              style={{
                border: "1px solid rgba(148,163,184,0.35)",
              }}
              variants={stepCardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="tw-flex tw-items-center tw-gap-2">
                <div className="tw-h-7 tw-w-7 tw-rounded-2xl tw-bg-accent-100 tw-flex tw-items-center tw-justify-center tw-shadow-[0_8px_24px_rgba(56,189,248,0.35)]">
                  <span className="tw-h-1.5 tw-w-1.5 tw-rounded-full tw-bg-accent-500" />
                </div>
                <div className="tw-font-semibold">20+</div>
              </div>
              <p className="tw-text-sm md:tw-text-base tw-font-medium tw-text-slate-900 tw-mb-0">
                Built a 20-person remote finance team for a retail group
                expanding operations globally.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              className="tw-relative tw-flex tw-flex-col tw-gap-3 tw-rounded-3xl tw-bg-white/95 tw-backdrop-blur-xl tw-p-5 md:tw-p-6 tw-shadow-[0_18px_60px_rgba(15,23,42,0.12)]"
              style={{
                border: "1px solid rgba(148,163,184,0.35)",
              }}
              variants={stepCardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              transition={{ duration: 0.75, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="tw-flex tw-items-center tw-gap-2">
                <div className="tw-h-7 tw-w-7 tw-rounded-2xl tw-bg-accent-100 tw-flex tw-items-center tw-justify-center tw-shadow-[0_8px_24px_rgba(56,189,248,0.35)]">
                  <span className="tw-h-1.5 tw-w-1.5 tw-rounded-full tw-bg-accent-500" />
                </div>
                <div className="tw-font-semibold">48 hrs</div>
              </div>
              <p className="tw-text-sm md:tw-text-base tw-font-medium tw-text-slate-900 tw-mb-0">
                Helped an agency scale with a 48-hour turnaround for remote
                marketing hires.
              </p>
            </motion.div>
          </motion.div>

          {/* Divider */}
          <div className="tw-my-4 tw-h-px tw-w-full tw-bg-gradient-to-r tw-from-transparent tw-via-accent-300 tw-to-transparent" />

          {/* CTA BLOCK */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="tw-w-full tw-rounded-[36px] tw-bg-white tw-px-8 tw-py-10 tw-shadow-xl tw-flex tw-flex-col lg:tw-flex-row tw-items-start lg:tw-items-center tw-justify-between tw-gap-8"
            style={{
              border: "1px solid rgba(203,213,225,0.9)",
            }}
          >
            <div className="tw-max-w-xl">
              <h3 className="tw-text-xl sm:tw-text-2xl tw-font-semibold tw-text-slate-900 tw-mb-3">
                Real results, real growth.
              </h3>
              <p className="tw-text-sm sm:tw-text-base tw-text-slate-700">
                Start Building Your Remote Team Today
              </p>
            </div>

            <div className="tw-flex tw-flex-wrap tw-gap-4">
              <motion.button
                type="button"
                className="tw-rounded-full tw-px-6 tw-py-3 tw-text-xs md:tw-text-sm tw-font-medium tw-tracking-wide tw-bg-gradient-to-r tw-from-accent-400 tw-via-accent-500 tw-to-accent-600 tw-text-white tw-shadow-[0_18px_45px_rgba(8,47,73,0.35)] tw-backdrop-blur-xl"
                style={{
                  border: "1px solid rgba(15,23,42,0.15)",
                }}
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Book a Consultation
              </motion.button>
              <motion.button
                type="button"
                className="tw-inline-flex tw-items-center tw-justify-center tw-rounded-full tw-px-6 tw-py-3 tw-text-sm sm:tw-text-base tw-font-semibold tw-bg-white tw-text-slate-900 tw-shadow-sm hover:tw-translate-y-[1px] tw-transition"
                style={{ border: "1px solid var(--accent-300)" }}
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Request Talent Profiles
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BackOfficeProcess;
