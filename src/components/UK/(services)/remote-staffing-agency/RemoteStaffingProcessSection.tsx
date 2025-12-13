// "use client";

// import { motion } from "framer-motion";
// import React from "react";

// const RemoteStaffingProcessSection: React.FC = () => {
//   const steps = [
//     {
//       title: "1. Consultation and Requirement Mapping",
//       text: "We start by understanding your roles, KPIs, tech stack, and expectations.",
//     },
//     {
//       title: "2. Talent Sourcing and Screening",
//       text: "Using global databases, assessments, and structured screening, we find top talent anywhere in the world.",
//     },
//     {
//       title: "3. Interviews and Selection",
//       text: "We shortlist the best candidates and schedule interviews that work around your availability.",
//     },
//     {
//       title: "4. Seamless Onboarding and Setup",
//       text: "We handle contracts, IT setup, payroll, compliance, and orientation.",
//     },
//     {
//       title: "5. Ongoing Support and Performance Monitoring",
//       text: "Your remote employees receive continuous HR support, performance tracking, and communication guidance, ensuring long-term success.",
//     },
//   ];

//   return (
//     <section className="tw-relative tw-w-full tw-overflow-hidden tw-bg-[#f8faff] tw-py-24">
//       {/* subtle animated accents */}
//       <div className="tw-pointer-events-none tw-absolute tw-top-[12%] tw-left-[8%] tw-h-20 tw-w-20 tw-rounded-full tw-bg-accent-200/40 tw-blur-3xl rsp-float-y" />
//       <div className="tw-pointer-events-none tw-absolute tw-bottom-[18%] tw-right-[10%] tw-h-28 tw-w-28 tw-rounded-[40px] tw-border tw-border-accent-400/40 rsp-rotate" />

//       <div className="tw-container tw-relative tw-z-10 tw-mx-auto tw-max-w-6xl tw-px-6">
//         {/* ================= HEADER ================= */}
//         <motion.div
//           initial={{ opacity: 0, y: 28 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           viewport={{ once: true }}
//           className="tw-max-w-3xl tw-mb-20"
//         >
//           <h2 className="tw-text-2xl sm:tw-text-3xl lg:tw-text-4xl tw-font-semibold tw-text-slate-900 tw-mb-4">
//             How Our Remote Staffing Process Works
//           </h2>
//           <p className="tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-slate-700">
//             Our process is simple, structured, and designed to save you time.
//           </p>
//         </motion.div>

//         {/* ================= PROCESS FLOW ================= */}
//         <div className="tw-relative tw-max-w-4xl">
//           {/* vertical accent spine */}
//           <div className="tw-absolute tw-left-0 tw-top-0 tw-h-full tw-w-[3px] tw-bg-gradient-to-b tw-from-accent-500 tw-via-accent-300 tw-to-accent-200 tw-rounded-full" />

//           <div className="tw-space-y-16 tw-pl-10">
//             {steps.map((step, index) => (
//               <motion.div
//                 key={step.title}
//                 initial={{ opacity: 0, x: 30 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{
//                   duration: 0.7,
//                   ease: "easeOut",
//                   delay: index * 0.06,
//                 }}
//                 viewport={{ once: true }}
//                 className="tw-relative"
//               >
//                 {/* signal node */}
//                 <span className="tw-absolute -tw-left-[17px] tw-top-2 tw-h-4 tw-w-4 tw-rounded-full tw-bg-accent-500 tw-ring-4 tw-ring-accent-200/60" />

//                 <h3 className="tw-text-lg sm:tw-text-xl tw-font-semibold tw-text-slate-900 tw-mb-2">
//                   {step.title}
//                 </h3>

//                 <p className="tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-slate-700">
//                   {step.text}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* ================= FOOTER STATEMENT ================= */}
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           viewport={{ once: true }}
//           className="tw-max-w-3xl tw-mt-20 tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-slate-700"
//         >
//           This makes remote hiring clear, predictable, and scalable.
//         </motion.p>
//       </div>

//       {/* ================= ANIMATIONS ================= */}
//       <style jsx>{`
//         .rsp-float-y {
//           animation: rspFloatY 10s ease-in-out infinite;
//         }
//         .rsp-rotate {
//           animation: rspRotate 22s linear infinite;
//         }

//         @keyframes rspFloatY {
//           0%,
//           100% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(-22px);
//           }
//         }

//         @keyframes rspRotate {
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

// export default RemoteStaffingProcessSection;

"use client";

import { motion } from "framer-motion";
import { Briefcase, FileText, Globe, Search, Users } from "lucide-react";

const RemoteStaffingProcessSection = () => {
  const features = [
    {
      icon: "1",
      title: "Consultation and Requirement Mapping",
      description: (
        <>
          We start by understanding your roles, KPIs, tech stack, and
          expectations.
        </>
      ),
    },
    {
      icon: "2",
      title: "Talent Sourcing and Screening",
      description: (
        <>
          Using global databases, assessments, and structured screening, we find
          top talent anywhere in the world.
        </>
      ),
    },
    {
      icon: "3",
      title: "Interviews and Selection",
      description: (
        <>
          We shortlist the best candidates and schedule interviews that work
          around your availability.
        </>
      ),
    },
    {
      icon: "4",
      title: "Seamless Onboarding and Setup",
      description: (
        <>We handle contracts, IT setup, payroll, compliance, and orientation</>
      ),
    },
    {
      icon: "5",
      title: "Ongoing Support and Performance Monitoring",
      description: (
        <>
          Your remote employees receive continuous HR support, performance
          tracking, and communication guidance, ensuring long-term success.
        </>
      ),
    },
  ];

  return (
    <div className="tw-min-h-screen tw-py-16 tw-px-4 tw-relative tw-overflow-hidden">
      {/* Background decorative elements */}

      <div className="sm:tw-container tw-mx-auto tw-relative tw-z-10">
        <div className="tw-text-center tw-space-y-3 tw-mb-16 tw-relative tw-z-10">
          <p className="tw-text-sm tw-font-semibold tw-tracking-[0.18em] tw-uppercase tw-text-accent-600">
            How Our Remote Staffing Process Works
          </p>
          <h2 className="tw-text-2xl md:tw-text-3xl lg:tw-text-4xl tw-max-w-5xl tw-mx-auto tw-font-bold tw-text-slate-900">
            Our process is simple, structured, and designed to save you time.
          </h2>
        </div>

        {/* Benefits Timeline Layout */}
        <div className="tw-relative tw-mx-auto tw-max-w-6xl">
          {/* Vertical connector line */}
          <div className="tw-absolute tw-left-7 tw-top-4 tw-bottom-4 tw-w-0.5 tw-bg-gradient-to-b tw-from-accent-300 tw-to-accent-900 tw-hidden md:tw-block"></div>

          <div className="tw-space-y-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="tw-group tw-flex sm:tw-flex-row tw-flex-col tw-items-start tw-gap-6"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
                {/* Icon with connecting line */}
                <div className="tw-relative sm:tw-block tw-hidden">
                  <div className="tw-w-14 tw-h-14 tw-rounded-full tw-bg-gradient-to-br tw-from-accent-500 tw-to-accent-900 tw-flex tw-items-center tw-justify-center tw-text-white tw-shadow-lg tw-group-hover:tw-scale-110 tw-transition-transform tw-duration-300 tw-z-10 tw-relative">
                    {feature.icon}
                  </div>
                  <div className="tw-absolute tw-top-0 tw-left-0 tw-right-0 tw-bottom-0 tw-bg-gradient-to-br tw-from-accent-400 tw-to-accent-900 tw-rounded-full tw-animate-ping tw-opacity-30 tw-z-0"></div>
                </div>

                {/* Content */}
                <div
                  style={{ border: "1px solid var(--accent-500) !important" }}
                  className="tw-flex-1 tw-bg-accent-500/5 tw-p-6 tw-rounded-xl tw-shadow-sm border tw-border-accent-500 group-hover:tw-shadow-md group-hover:tw-border-accent-00 tw-transition-all tw-duration-300 tw-overflow-hidden"
                >
                  <div className="tw-relative sm:tw-hidden tw-block tw-mb-6">
                    <div className="tw-w-14 tw-h-14 tw-rounded-full tw-bg-gradient-to-br tw-from-accent-500 tw-to-accent-900 tw-flex tw-items-center tw-justify-center tw-text-white tw-shadow-lg tw-group-hover:tw-scale-110 tw-transition-transform tw-duration-300 tw-z-10 tw-relative">
                      {feature.icon}
                    </div>
                    <div className="tw-absolute tw-top-0 tw-left-0 tw-right-0 tw-bottom-0 tw-bg-gradient-to-br tw-from-accent-400 tw-to-accent-900 tw-rounded-full tw-animate-ping tw-opacity-30 tw-z-0"></div>
                  </div>
                  <h3 className="tw-text-xl tw-font-semibold tw-mb-3 tw-text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="tw-text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{ border: "1px solid var(--accent-300)" }}
            className="tw-mx-auto tw-max-w-6xl tw-rounded-lg tw-mt-8 tw-p-6  tw-bg-accent-500/5 tw-text-md tw-font-semibold tw-text-accent-700 tw-shadow-md tw-shadow-accent-200"
          >
            This makes remote hiring clear, predictable, and scalable.
          </motion.p>
      </div>
    </div>
  );
};

export default RemoteStaffingProcessSection;
