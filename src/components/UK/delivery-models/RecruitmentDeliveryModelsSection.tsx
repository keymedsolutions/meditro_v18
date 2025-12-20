// "use client";

// import { motion } from "framer-motion";
// import React from "react";

// const models = [
//   {
//     title: "Partial Recruitment Outsourcing (PRO)",
//     subtitle: "Flexible support where you need it most",
//     content: [
//       "What it covers: Sourcing candidates, screening, assessments, interview coordination, employer branding support, market mapping.",
//       "Best for: Startups, SMEs with limited TA resources, or seasonal hiring spikes.",
//       "Benefits: Quick deployment, cost-efficient, strengthens your internal team without overloading them.",
//     ],
//     cta: "Explore Partial Recruitment Outsourcing",
//   },
//   {
//     title: "Full RPO (Full-Cycle RPO)",
//     subtitle: "End-to-end talent acquisition",
//     content: [
//       "What it includes: Workforce planning to onboarding, dedicated recruiters, tech stack, and full compliance management.",
//       "Best for: High-volume hiring, multi-location enterprises, or fast-growing scale-ups.",
//       "Benefits: Up to 60% cost reduction per hire, consistent pipelines, improved candidate quality, mature TA processes.",
//     ],
//     cta: "Learn About Full RPO",
//   },
//   {
//     title: "On-Demand Recruitment Support",
//     subtitle: "Hire fast, scale instantly",
//     content: [
//       "When to use: Sudden hiring surges, critical roles, short-term projects, TA coverage.",
//       "Features: Rapid activation, flexible hours, no long-term commitment.",
//       "Benefits: Pay only for what you need, faster hiring without overhead.",
//     ],
//     cta: "Discover On-Demand Recruitment Support",
//   },
//   {
//     title: "Dedicated Offshore Teams",
//     subtitle: "Scale globally without complexity",
//     content: [
//       "Roles provided: Talent sourcers, recruiters, CV screeners, admin/back office, payroll & compliance teams.",
//       "Ideal for: Fast-growing companies, staffing agencies, large enterprises.",
//       "Benefits: Save up to 70%, same timezone alignment, zero compliance headaches.",
//     ],
//     cta: "Set Up Dedicated Offshore Teams",
//   },
//   {
//     title: "Project-Based Recruitment Support",
//     subtitle: "Focused hiring for defined outcomes",
//     content: [
//       "Use cases: New branches, seasonal hiring, market entry, temporary surges.",
//       "Benefits: Predictable budgets, dedicated project teams, fast turnaround.",
//     ],
//     cta: "Start Project-Based Recruitment Support",
//   },
//   {
//     title: "Custom Recruitment Services",
//     subtitle: "Designed around your TA strategy",
//     content: [
//       "Customisable elements: Sourcing, screening, headhunting, tech add-ons, market intelligence, compliance-only support.",
//       "Best for: Hybrid or unique recruitment needs, TA transformation projects.",
//       "Benefits: Full flexibility, high ROI, tailored to your goals.",
//     ],
//     cta: "Explore Custom Recruitment Services",
//   },
// ];

// const RecruitmentDeliveryModelsSection: React.FC = () => {
//   return (
//     <section className="tw-relative tw-overflow-hidden tw-bg-[#f7faff] tw-py-28">
//       {/* Accent Background */}
//       <div className="tw-absolute tw-inset-0 tw-bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.12),transparent_45%)]" />
//       <div className="tw-absolute tw-inset-0 tw-bg-[radial-gradient(circle_at_bottom_right,_rgba(99,102,241,0.14),transparent_50%)]" />

//       {/* Floating Shapes */}
//       <div className="tw-absolute tw-top-[18%] tw-left-[6%] tw-h-28 tw-w-28 tw-rounded-full tw-bg-accent-300/70 tw-blur-3xl dm-float-y" />
//       <div className="tw-absolute tw-bottom-[20%] tw-right-[10%] tw-h-36 tw-w-36 tw-rounded-full tw-bg-accent-200/70 tw-blur-3xl dm-float-x" />

//       <div className="tw-container tw-relative tw-z-10 tw-mx-auto tw-max-w-6xl tw-px-4 md:tw-px-8">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 32 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           viewport={{ once: true }}
//           className="tw-text-center tw-max-w-3xl tw-mx-auto tw-mb-20"
//         >
//           <h2 className="tw-text-2xl sm:tw-text-3xl lg:tw-text-4xl tw-font-semibold tw-text-slate-900 tw-mb-4">
//             Our Recruitment Delivery Models
//           </h2>
//           <p className="tw-text-sm sm:tw-text-base tw-text-slate-700">
//             Flexible recruitment frameworks designed to match your hiring pace,
//             scale, and complexity.
//           </p>
//         </motion.div>

//         {/* Models Grid */}
//         <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 xl:tw-grid-cols-3 tw-gap-10">
//           {models.map((model, index) => (
//             <motion.div
//               key={model.title}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.05 }}
//               viewport={{ once: true }}
//               className="tw-relative"
//             >
//               {/* Accent Halo */}
//               <div className="tw-absolute -tw-inset-1 tw-rounded-[28px] tw-bg-gradient-to-br tw-from-accent-500/20 tw-to-accent-300/20 tw-blur-xl" />

//               <div
//                 className="tw-relative tw-h-full tw-rounded-[26px] tw-bg-white tw-p-7 tw-flex tw-flex-col"
//                 style={{
//                   border: "1px solid rgba(203,213,225,0.9)",
//                   boxShadow:
//                     "0 18px 48px rgba(15,23,42,0.12), 0 0 0 1px rgba(255,255,255,0.9)",
//                 }}
//               >
//                 <h3 className="tw-text-lg sm:tw-text-xl tw-font-semibold tw-text-slate-900 tw-mb-1">
//                   {model.title}
//                 </h3>

//                 <p className="tw-text-sm tw-font-medium tw-text-accent-600 tw-mb-4">
//                   {model.subtitle}
//                 </p>

//                 <div className="tw-space-y-3 tw-text-sm sm:tw-text-base tw-text-slate-700 tw-leading-relaxed tw-flex-1">
//                   {model.content.map((line, i) => (
//                     <p key={i}>{line}</p>
//                   ))}
//                 </div>

//                 <button
//                   className="tw-mt-6 tw-inline-flex tw-items-center tw-justify-center tw-rounded-full tw-px-5 tw-py-2.5 tw-text-sm tw-font-semibold tw-bg-accent-500 tw-text-white tw-shadow-lg tw-shadow-accent-300/70 hover:tw-translate-y-[1px] tw-transition"
//                   style={{ border: "1px solid rgba(255,255,255,0.85)" }}
//                 >
//                   {model.cta}
//                 </button>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Animations */}
//       <style jsx>{`
//         .dm-float-y {
//           animation: dmFloatY 9s ease-in-out infinite;
//         }
//         .dm-float-x {
//           animation: dmFloatX 11s ease-in-out infinite;
//         }

//         @keyframes dmFloatY {
//           0%,
//           100% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(-24px);
//           }
//         }

//         @keyframes dmFloatX {
//           0%,
//           100% {
//             transform: translateX(0);
//           }
//           50% {
//             transform: translateX(28px);
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default RecruitmentDeliveryModelsSection;

"use client";

import { APP_PATH } from "@/data/PATH_APP";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const data = [
  {
    title: "Partial Recruitment Outsourcing (PRO)",
    subtitle: "Flexible support where you need it most",
    content: [
      <>
        What it covers:&nbsp;
        <Link
          href={APP_PATH.services.candidateSourcingAndScreeningServices.path}
          className="tw-font-semibold tw-text-inherit hover:tw-text-white active:tw-text-inherit focus:tw-text-inherit"
        >
          Sourcing candidates
        </Link>
        , screening, assessments, interview coordination, employer branding
        support, market mapping
      </>,
      "Best for: Startups, SMEs with limited TA resources, or seasonal hiring spikes.",
      "Benefits: Quick deployment, cost-efficient, strengthens your internal team without overloading them.",
    ],
    cta: "Explore Partial Recruitment Outsourcing",
    image: "/assets/images/industries/ind1.jpg",
  },
  {
    title: "Full RPO (Full-Cycle RPO)",
    subtitle: "End-to-end talent acquisition",
    content: [
      "What it includes: Workforce planning to onboarding, dedicated recruiters, tech stack, and full compliance management.",
      "Best for: High-volume hiring, multi-location enterprises, or fast-growing scale-ups.",
      "Benefits: Up to 60% cost reduction per hire, consistent pipelines, improved candidate quality, mature TA processes.",
    ],
    cta: "Learn About Full RPO",
    image: "/assets/images/industries/ind2.jpg",
  },
  {
    title: "On-Demand Recruitment Support",
    subtitle: "Hire fast, scale instantly",
    content: [
      "When to use: Sudden hiring surges, critical roles, short-term projects, TA coverage.",
      "Features: Rapid activation, flexible hours, no long-term commitment.",
      "Benefits: Pay only for what you need, faster hiring without overhead.",
    ],
    cta: "Discover On-Demand Recruitment Support",
    image: "/assets/images/industries/ind3.jpg",
  },
  {
    title: "Dedicated Offshore Teams",
    subtitle: "Scale globally without complexity",
    content: [
      <>
        Roles provided: Talent sourcers, recruiters, CV screeners, admin/back
        office,&nbsp;
        <Link
          href={APP_PATH.services.payrollAndFinanceOutsourcingServices.path}
          className="tw-font-semibold tw-text-inherit hover:tw-text-white active:tw-text-inherit focus:tw-text-inherit"
        >
          payroll & compliance
        </Link>
        &nbsp;teams.
      </>,
      "Ideal for: Fast-growing companies, staffing agencies, large enterprises.",
      "Benefits: Save up to 70%, same timezone alignment, zero compliance headaches.",
    ],
    cta: "Set Up Dedicated Offshore Teams",
    image: "/assets/images/industries/ind4.jpg",
  },
  {
    title: "Project-Based Recruitment Support",
    subtitle: "Focused hiring for defined outcomes",
    content: [
      "Use cases: New branches, seasonal hiring, market entry, temporary surges.",
      "Benefits: Predictable budgets, dedicated project teams, fast turnaround.",
    ],
    cta: "Start Project-Based Recruitment Support",
    image: "/assets/images/industries/ind5.jpg",
  },
  {
    title: "Custom Recruitment Services",
    subtitle: "Designed around your TA strategy",
    content: [
      <>
        Customisable elements: Sourcing, screening,&nbsp;
        <Link
          href={APP_PATH.services.executiveSearchAndHeadhuntingServices.path}
          className="tw-font-semibold tw-text-inherit hover:tw-text-white active:tw-text-inherit focus:tw-text-inherit"
        >
          headhunting
        </Link>
        , tech add-ons, market intelligence, compliance-only support.
      </>,
      "Best for: Hybrid or unique recruitment needs, TA transformation projects.",
      "Benefits: Full flexibility, high ROI, tailored to your goals.",
    ],
    cta: "Explore Custom Recruitment Services",
    image: "/assets/images/industries/ind6.jpg",
  },
];

const RecruitmentDeliveryModelsSection: React.FC = () => {
  return (
    <section className="tw-relative tw-bg-[#f7faff] tw-py-28 tw-overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="tw-absolute tw-top-[12%] tw-left-[8%] tw-h-28 tw-w-28 tw-rounded-full tw-bg-accent-200/70 tw-blur-3xl iws-float-y" />
      <div className="tw-absolute tw-bottom-[18%] tw-right-[10%] tw-h-36 tw-w-36 tw-rounded-full tw-bg-accent-300/70 tw-blur-3xl iws-float-x" />
      <div className="tw-absolute tw-top-[42%] tw-left-[3%] tw-h-16 tw-w-16 tw-border-[4px] tw-border-accent-400/60 tw-rounded-full tw-blur-sm iws-rotate" />

      <div className="tw-container tw-relative tw-z-10 tw-mx-auto tw-px-4 md:tw-px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="tw-text-center tw-max-w-3xl tw-mx-auto tw-mb-20"
        >
          <h2 className="tw-text-2xl sm:tw-text-3xl lg:tw-text-4xl tw-font-semibold tw-text-slate-900 tw-mb-4">
            Our Recruitment Delivery Models
          </h2>
        </motion.div>

        {/* Floating Cards Layout */}
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 xl:tw-grid-cols-3 tw-gap-10">
          {data.map((item, index) => (
            <div
              key={index}
              className="tw-group tw-relative tw-group tw-h-full tw-rounded-[26px] tw-overflow-hidden tw-flex tw-flex-col tw-bg-white"
              style={{
                border: "1px solid rgba(203,213,225,0.9)",
                boxShadow:
                  "0 18px 48px rgba(15,23,42,0.12), 0 0 0 1px rgba(255,255,255,0.9)",
              }}
            >
              <div className="tw-absolute tw-inset-0 tw-translate-y-full group-hover:tw-translate-y-0 tw-transition-transform tw-duration-700 tw-ease-out">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  priority
                  loading="eager"
                  className="tw-object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-t tw-from-accent-500/90 tw-via-accent-500/65 tw-to-white/95" />
              </div>

              <div className="tw-relative tw-z-10 tw-h-full tw-p-6 md:tw-p-7 tw-flex tw-flex-col">
                <h3 className="tw-text-lg sm:tw-text-xl tw-font-semibold tw-text-slate-900 tw-mb-1">
                  {item.title}
                </h3>

                <p className="tw-text-sm tw-font-medium tw-text-accent-600 group-hover:tw-text-accent-900 tw-mb-3">
                  {item.subtitle}
                </p>

                <div className="tw-flex-1 tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-slate-100/90 ">
                  {item?.content &&
                    item?.content?.map((desc, i) => (
                      <div
                        key={i}
                        className="tw-z-[3] tw-flex tw-items-start tw-gap-2"
                      >
                        <div className="tw-flex tw-h-8 tw-w-8 tw-shrink-0 tw-items-center tw-justify-center tw-rounded-full tw-bg-accent-100 tw-shadow-[0_6px_16px_rgba(56,189,248,0.35)]">
                          <span className="tw-h-2 tw-w-2 tw-rounded-full tw-bg-accent-500" />
                        </div>
                        <p className="tw-text-sm md:tw-text-base  tw-text-slate-600 group-hover:tw-text-black tw-mb-0">
                          {desc}
                        </p>
                      </div>
                    ))}
                </div>
                <button
                  className="tw-mt-6 tw-inline-flex tw-items-center tw-justify-center tw-rounded-full tw-px-5 tw-py-2.5 tw-text-sm tw-font-semibold tw-bg-accent-500 group-hover:tw-bg-white tw-text-white group-hover:tw-text-accent-500 tw-shadow-lg tw-shadow-accent-300/70 hover:tw-translate-y-[1px] tw-transition"
                  style={{ border: "1px solid rgba(255,255,255,0.85)" }}
                >
                  {item.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        .iws-float-y {
          animation: floatY 9s ease-in-out infinite;
        }
        .iws-float-x {
          animation: floatX 11s ease-in-out infinite;
        }
        .iws-rotate {
          animation: rotateSlow 18s linear infinite;
        }

        @keyframes floatY {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes floatX {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(26px);
          }
        }

        @keyframes rotateSlow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
};

export default RecruitmentDeliveryModelsSection;
