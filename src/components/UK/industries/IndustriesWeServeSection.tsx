// "use client";

// import { motion } from "framer-motion";
// import React from "react";

// const industries = [
//   {
//     title: "Healthcare Recruitment",
//     subtitle: "Healthcare Recruitment: Qualified Talent You Can Trust",
//     description:
//       "When you need dependable healthcare staff, you need them fast. We provide nurses, caregivers, support workers, and clinical professionals who are fully vetted, DBS-checked, and ready to go. Whether it’s urgent cover or ongoing support, we help you maintain safe, consistent patient care.",
//     cta: "Hire Healthcare Professionals",
//   },
//   {
//     title: "IT & Telecom Staffing",
//     subtitle: "IT & Telecom Staffing: Powering Digital Transformation",
//     description:
//       "Finding great tech talent shouldn’t feel impossible. We connect you with skilled developers, cybersecurity specialists, network engineers, and IT experts who can keep your business secure and innovative. Whether you’re scaling quickly or managing projects, we make recruitment simple and stress-free.",
//     cta: "Build Your Tech Team",
//   },
//   {
//     title: "Logistics & Supply Chain",
//     subtitle: "Reliable Staffing for High-Demand Operations",
//     description:
//       "Logistics moves fast, and your staffing should, too. We supply warehouse teams, inventory controllers, drivers, procurement specialists, and back-office support. Our workers are safety-aware, ready to perform, and available 24/7, especially during peak seasons when you need extra hands.",
//     cta: "Get Logistics Talent",
//   },
//   {
//     title: "Education & Training",
//     subtitle: "Talent that Shapes the Future",
//     description:
//       "Schools and academies rely on dependable people, and we help you find them. Whether you need teachers, TAs, SEN specialists, or admin professionals, we deliver candidates who meet safer recruitment standards. We’re here for planned hires and those last-minute “we need cover today” moments.",
//     cta: "Hire Education Staff",
//   },
//   {
//     title: "Customer Service & Call Centre Staffing",
//     subtitle: "Build High-Performing Support Teams",
//     description:
//       "Your customers deserve friendly, capable support, and we help you build teams that deliver just that. From call-centre agents to multilingual reps and team leads, we provide people who communicate clearly and care about customer experience. High-volume recruitment? No problem.",
//     cta: "Scale Your Support Team",
//   },
//   {
//     title: "Finance, Accounting & Payroll",
//     subtitle: "Expert Talent for Critical Financial Functions",
//     description:
//       "Finance roles require accuracy, trust, and compliance. We provide trained payroll officers, bookkeepers, accountants, and analysts familiar with UK GAAP and IFRS. Whether you need a full finance team or help with outsourced payroll, we make your operations smoother and more cost-efficient.",
//     cta: "Hire Finance & Payroll Specialists",
//   },
//   {
//     title: "Engineering & Technical Roles",
//     subtitle: "Skilled Talent for Complex Projects",
//     description:
//       "Engineering projects demand precision — so do your hires. We deliver experienced civil, mechanical, electrical, and industrial engineers, plus CAD techs, BIM specialists, project managers, and skilled trades. Perfect for manufacturing, construction, and industrial environments where quality matters.",
//     cta: "Find Engineering Talent",
//   },
// ];

// const IndustriesWeServeSection: React.FC = () => {
//   return (
//     <section className="tw-relative tw-bg-[#f6f9ff] tw-py-28 tw-overflow-hidden">
//       {/* Animated Accent Shapes */}
//       <div className="tw-absolute tw-top-[10%] tw-left-[6%] tw-h-24 tw-w-24 tw-rounded-full tw-bg-accent-200/80 tw-blur-3xl iws-float-up" />
//       <div className="tw-absolute tw-bottom-[12%] tw-right-[8%] tw-h-32 tw-w-32 tw-rounded-full tw-bg-accent-300/70 tw-blur-3xl iws-float-side" />
//       <div className="tw-absolute tw-top-[45%] tw-left-[2%] tw-h-16 tw-w-16 tw-border-[4px] tw-border-accent-400/70 tw-rounded-full tw-blur-sm iws-rotate" />
//       <div className="tw-absolute tw-top-[22%] tw-right-[18%] tw-h-12 tw-w-12 tw-rounded-xl tw-bg-accent-100/90 tw-blur-sm iws-scale" />

//       <div className="tw-container tw-relative tw-z-10 tw-mx-auto tw-max-w-6xl tw-px-4 md:tw-px-8">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           viewport={{ once: true }}
//           className="tw-text-center tw-max-w-3xl tw-mx-auto tw-mb-24"
//         >
//           <h2 className="tw-text-2xl sm:tw-text-3xl lg:tw-text-4xl tw-font-semibold tw-text-slate-900 tw-mb-4">
//             Industries We Serve
//           </h2>
//           <p className="tw-text-sm sm:tw-text-base tw-text-slate-600">
//             Industry-specialised recruitment backed by experience, technology,
//             and global reach.
//           </p>
//           <div className="tw-mx-auto tw-mt-6 tw-h-[4px] tw-w-28 tw-rounded-full tw-bg-gradient-to-r tw-from-accent-500 tw-to-accent-300" />
//         </motion.div>

//         {/* Industry Timeline */}
//         <div className="tw-relative tw-flex tw-flex-col tw-gap-20">
//           {/* Center Accent Line */}
//           <span className="tw-absolute tw-left-0 tw-top-0 tw-h-full tw-w-[5px] tw-rounded-full tw-bg-gradient-to-b tw-from-accent-500 tw-via-accent-300 tw-to-accent-200" />

//           {industries.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, ease: "easeOut" }}
//               viewport={{ once: true }}
//               className="tw-relative tw-pl-10 md:tw-pl-14"
//             >
//               {/* Highlight Dot */}
//               <span className="tw-absolute tw-left-[-11px] tw-top-2 tw-h-6 tw-w-6 tw-rounded-full tw-bg-accent-500 tw-shadow-lg tw-shadow-accent-300/60" />

//               <h3 className="tw-text-xl sm:tw-text-2xl tw-font-semibold tw-text-slate-900 tw-mb-1">
//                 {item.title}
//               </h3>

//               <p className="tw-text-sm sm:tw-text-base tw-font-medium tw-text-accent-600 tw-mb-4">
//                 {item.subtitle}
//               </p>

//               <p className="tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-slate-700 tw-max-w-3xl tw-mb-6">
//                 {item.description}
//               </p>

//               <button
//                 className="tw-inline-flex tw-items-center tw-rounded-full tw-px-6 tw-py-2.5 tw-text-sm sm:tw-text-base tw-font-semibold tw-bg-accent-500 tw-text-white tw-shadow-lg tw-shadow-accent-300/70 hover:tw-translate-y-[1px] tw-transition"
//                 style={{ border: "1px solid rgba(255,255,255,0.85)" }}
//               >
//                 {item.cta}
//               </button>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Animations */}
//       <style jsx>{`
//         .iws-float-up {
//           animation: iwsFloatUp 9s ease-in-out infinite;
//         }
//         .iws-float-side {
//           animation: iwsFloatSide 12s ease-in-out infinite;
//         }
//         .iws-rotate {
//           animation: iwsRotate 16s linear infinite;
//         }
//         .iws-scale {
//           animation: iwsScale 8s ease-in-out infinite;
//         }

//         @keyframes iwsFloatUp {
//           0%,
//           100% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(-20px);
//           }
//         }

//         @keyframes iwsFloatSide {
//           0%,
//           100% {
//             transform: translateX(0);
//           }
//           50% {
//             transform: translateX(26px);
//           }
//         }

//         @keyframes iwsRotate {
//           0% {
//             transform: rotate(0deg);
//           }
//           100% {
//             transform: rotate(360deg);
//           }
//         }

//         @keyframes iwsScale {
//           0%,
//           100% {
//             transform: scale(1);
//           }
//           50% {
//             transform: scale(1.2);
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default IndustriesWeServeSection;

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const industries = [
  {
    title: "Healthcare Recruitment",
    subtitle: "Qualified Talent You Can Trust",
    description:
      "When you need dependable healthcare staff, you need them fast. We provide nurses, caregivers, support workers, and clinical professionals who are fully vetted, DBS-checked, and ready to go. Whether it’s urgent cover or ongoing support, we help you maintain safe, consistent patient care.",
    cta: "Hire Healthcare Professionals",
    image: "/assets/images/industries/ind1.jpg",
  },
  {
    title: "IT & Telecom Staffing",
    subtitle: "Powering Digital Transformation",
    description:
      "We connect you with skilled developers, cybersecurity specialists, network engineers, and IT experts who keep your business secure and innovative. Whether you’re scaling or managing projects, recruitment becomes simple.",
    cta: "Build Your Tech Team",
    image: "/assets/images/industries/ind2.jpg",
  },
  {
    title: "Logistics & Supply Chain",
    subtitle: "Reliable Staffing for High-Demand Operations",
    description:
      "We supply warehouse teams, inventory controllers, drivers, procurement specialists, and back-office support. Safety-aware, reliable, and available 24/7 during peak seasons.",
    cta: "Get Logistics Talent",
    image: "/assets/images/industries/ind3.jpg",
  },
  {
    title: "Education & Training",
    subtitle: "Talent That Shapes the Future",
    description:
      "From teachers and TAs to SEN specialists and admin professionals, we deliver candidates who meet safer recruitment standards — even for urgent last-minute cover.",
    cta: "Hire Education Staff",
    image: "/assets/images/industries/ind4.jpg",
  },
  {
    title: "Customer Service & Call Centre Staffing",
    subtitle: "Build High-Performing Support Teams",
    description:
      "We provide call-centre agents, multilingual reps, and team leads who deliver exceptional customer experience — even for high-volume recruitment.",
    cta: "Scale Your Support Team",
    image: "/assets/images/industries/ind5.jpg",
  },
  {
    title: "Finance, Accounting & Payroll",
    subtitle: "Expert Talent for Critical Financial Functions",
    description:
      "We deliver payroll officers, bookkeepers, accountants, and analysts experienced with UK GAAP and IFRS — helping you stay accurate, compliant, and efficient.",
    cta: "Hire Finance & Payroll Specialists",
    image: "/assets/images/industries/ind6.jpg",
  },
  {
    title: "Engineering & Technical Roles",
    subtitle: "Skilled Talent for Complex Projects",
    description:
      "From civil and mechanical engineers to CAD techs, BIM specialists, and project managers — we support manufacturing, construction, and industrial environments.",
    cta: "Find Engineering Talent",
    image: "/assets/images/industries/ind7.jpg",
  },
];

const IndustriesWeServeSection: React.FC = () => {
  return (
    <section className="tw-relative tw-bg-[#f7faff] tw-py-28 tw-overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="tw-absolute tw-top-[12%] tw-left-[8%] tw-h-28 tw-w-28 tw-rounded-full tw-bg-accent-200/70 tw-blur-3xl iws-float-y" />
      <div className="tw-absolute tw-bottom-[18%] tw-right-[10%] tw-h-36 tw-w-36 tw-rounded-full tw-bg-accent-300/70 tw-blur-3xl iws-float-x" />
      <div className="tw-absolute tw-top-[42%] tw-left-[3%] tw-h-16 tw-w-16 tw-border-[4px] tw-border-accent-400/60 tw-rounded-full tw-blur-sm iws-rotate" />

      <div className="tw-container tw-relative tw-z-10 tw-mx-auto tw-max-w-6xl tw-px-4 md:tw-px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="tw-text-center tw-max-w-3xl tw-mx-auto tw-mb-20"
        >
          <h2 className="tw-text-2xl sm:tw-text-3xl lg:tw-text-4xl tw-font-semibold tw-text-slate-900 tw-mb-4">
            Industries We Serve
          </h2>
          <p className="tw-text-sm sm:tw-text-base tw-text-slate-600">
            Industry-specialised recruitment solutions built for speed,
            compliance, and long-term success.
          </p>
        </motion.div>

        {/* Floating Cards Layout */}
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 xl:tw-grid-cols-3 tw-gap-10">
          {industries.map((item, index) => (

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

                <p className="tw-text-sm sm:tw-text-base group-hover:tw-text-black tw-leading-relaxed tw-text-slate-700 tw-flex-1">
                  {item.description}
                </p>

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

export default IndustriesWeServeSection;
