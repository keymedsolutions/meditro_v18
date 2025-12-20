// "use client";

// export const WhyKeyMedsolutionsUKExecutiveSearch = () => {
//   return (
//     <section className="tw-bg-white tw-py-24">
//       <div className="tw-container tw-mx-auto tw-max-w-6xl tw-px-4 md:tw-px-8">
//         <h2 className="tw-text-3xl tw-font-semibold tw-text-slate-900 tw-mb-12">
//           Why Key Medsolutions UK is a Leading Executive Search Partner for 2026?
//         </h2>

//         <div className="tw-grid md:tw-grid-cols-2 tw-gap-10 tw-text-lg tw-text-slate-700">
//           <p>
//             1. Specialist Search Expertise
//             <br />
// Our executive search team delivers high quality C suite and director
// level hires using a proven research led approach.
//           </p>

//           <p>
//             2. London and National Reach
//             <br />
//             We have strong networks across all UK regions including a dedicated
//             team of executive headhunters London who understand the country's
//             most competitive talent market.
//           </p>

//           <p>
//             3. Integrated Talent Solutions
//             <br />
//             We combine executive search, talent intelligence, and scalable RPO
//             delivery. This creates a more efficient and powerful approach to
//             long term hiring.
//           </p>

//           <p>
//             4. Partnership Focus
//             <br />
//             We work as a true extension of your brand. Transparency,
//             collaboration, and exceptional candidate experience are central to
//             our approach.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

"use client";

import { APP_PATH } from "@/data/PATH_APP";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

type Step = {
  title: string;
  text: React.ReactNode[];
  list?: string[];
};

const WhyKeyMedsolutionsUKExecutiveSearch: React.FC = () => {
  const steps: Step[] = [
    {
      title: "1. Specialist Search Expertise",
      text: [
        "Our executive search team delivers high quality C suite and director level hires using a proven research led approach.",
      ],
    },
    {
      title: "2. London and National Reach",
      text: [
        "We have strong networks across all UK regions including a dedicated team of executive headhunters London who understand the country's most competitive talent market.",
      ],
    },
    {
      title: "3. Integrated Talent Solutions",
      text: [
        "We combine executive search, talent intelligence, and scalable RPO delivery. This creates a more efficient and powerful approach to long term hiring.",
      ],
    },
    {
      title: "4. Partnership Focus",
      text: [
        "We work as a true extension of your brand. Transparency, collaboration, and exceptional candidate experience are central to our approach.",
      ],
    },
  ];

  return (
    <section className="tw-relative tw-w-full tw-overflow-hidden tw-bg-[#f6f9ff] tw-py-24">
      {/* Ambient background */}
      <div className="tw-pointer-events-none tw-absolute tw-top-[-200px] tw-left-[15%] tw-h-[520px] tw-w-[520px] tw-rounded-full tw-bg-accent-100/70 tw-blur-3xl tech-proc-float-1" />
      <div className="tw-pointer-events-none tw-absolute tw-bottom-[-220px] tw-right-[10%] tw-h-[560px] tw-w-[560px] tw-rounded-full tw-bg-accent-200/70 tw-blur-3xl tech-proc-float-2" />

      <div className="tw-container tw-relative tw-z-10 tw-mx-auto tw-max-w-7xl tw-px-4 md:tw-px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="tw-max-w-3xl tw-mb-20 tw-mx-auto"
        >
          <h2 className="tw-text-2xl sm:tw-text-3xl lg:tw-text-4xl tw-font-semibold tw-text-slate-900 tw-leading-snug tw-mb-4 tw-text-center">
            Why Key Medsolutions UK is a Leading Executive Search Partner for
            2026?
          </h2>

          <p className="tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-slate-700 tw-text-center">
            <Link
              href={APP_PATH.home.path}
              className="tw-font-semibold tw-text-inherit"
            >
              Key Medsolutions UK
            </Link>
            &nbsp;supports clients through senior level hiring, full scale
            recruitment solutions, and strategic workforce planning. Here is
            what sets us apart.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-16">
          {steps.map((step, stepIndex) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: stepIndex * 0.08,
              }}
              viewport={{ once: true }}
              className="tw-rounded-[28px] tw-bg-white/85 tw-backdrop-blur-lg tw-p-6"
              style={{ border: "1px solid rgba(226,232,240,0.9)" }}
            >
              <h3 className="tw-text-xl sm:tw-text-2xl tw-font-semibold tw-text-slate-900 tw-mb-5">
                {step.title}
              </h3>

              {step.text.map((content, index) => (
                <div
                  key={`${step.title}-text-${index}`}
                  className="tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-slate-700 tw-mb-4"
                >
                  {content}
                </div>
              ))}

              {step.list && (
                <div className="tw-grid tw-grid-cols-3 tw-gap-3">
                  {step.list.map((item) => (
                    <div
                      key={item}
                      className="tw-rounded-xl tw-bg-[#f6f9ff] tw-px-3 tw-py-3 tw-text-xs sm:tw-text-sm tw-text-slate-700"
                      style={{
                        border: "1px solid rgba(219,234,254,0.9)",
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating animation */}
      <style jsx>{`
        .tech-proc-float-1 {
          animation: techFloat1 16s ease-in-out infinite;
        }
        .tech-proc-float-2 {
          animation: techFloat2 20s ease-in-out infinite;
        }

        @keyframes techFloat1 {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(40px);
          }
        }

        @keyframes techFloat2 {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-48px);
          }
        }
      `}</style>
    </section>
  );
};

export default WhyKeyMedsolutionsUKExecutiveSearch;
