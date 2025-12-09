"use client";

import { motion } from "framer-motion";
import React from "react";
import { Cpu, Zap, WalletCards, UserCheck, Globe2 } from "lucide-react";

const WhyChooseKeyMedsolutionsSection: React.FC = () => {
  const cards = [
    {
      icon: <Cpu className="tw-w-5 tw-h-5 tw-text-accent-600" />,
      title: "Technology-Led Recruitment:",
      text: "We harness AI, automation, and the best recruitment tech to deliver faster, smarter hiring.",
    },
    {
      icon: <Zap className="tw-w-5 tw-h-5 tw-text-accent-600" />,
      title: "Speed Meets Quality:",
      text: "With us, you never have to choose between moving quickly and getting great candidates,you get both.",
    },
    {
      icon: <WalletCards className="tw-w-5 tw-h-5 tw-text-accent-600" />,
      title: "Cost Efficiency:",
      text: "Looking for affordable and globally trusted recruitment process outsourcing solutions? Our transparent pricing with no hidden fees.",
    },
    {
      icon: <UserCheck className="tw-w-5 tw-h-5 tw-text-accent-600" />,
      title: "Dedicated RPO Consultants:",
      text: "You’ll always work with people who understand your sector, your culture, and what sets your business apart.",
    },
    {
      icon: <Globe2 className="tw-w-5 tw-h-5 tw-text-accent-600" />,
      title: "Industry Specialisation:",
      text: "We know what it takes to hire in tech, finance, healthcare, and more.",
    },
  ];

  return (
    <section className="tw-relative tw-w-full tw-overflow-hidden tw-bg-[#f5f7fc] tw-py-16 md:tw-py-20">
      {/* Background accents */}
      <div className="tw-pointer-events-none tw-absolute tw-top-[-3rem] tw-left-[5%] tw-h-32 tw-w-32 tw-rounded-full tw-bg-accent-100 tw-blur-3xl tw-opacity-80" />
      <div className="tw-pointer-events-none tw-absolute tw-bottom-[-3rem] tw-right-[8%] tw-h-40 tw-w-40 tw-rounded-[28px] tw-bg-accent-200 tw-blur-3xl tw-opacity-70" />
      <div className="tw-pointer-events-none tw-absolute tw-top-[30%] tw-right-[20%] tw-h-8 tw-w-8 tw-rounded-xl tw-bg-accent-300/70 tw-blur-sm why-choose-float-1" />
      <div className="tw-pointer-events-none tw-absolute tw-top-[18%] tw-left-[18%] tw-h-6 tw-w-16 tw-rounded-full tw-bg-accent-100/90 tw-blur-[1px] why-choose-float-2" />

      <div className="tw-container tw-relative tw-z-10 tw-mx-auto tw-max-w-6xl tw-px-4 md:tw-px-8">
        {/* Heading + intro */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="tw-text-center tw-space-y-3 tw-pb-8"
        >
          <p className="tw-text-sm tw-font-semibold tw-tracking-[0.18em] tw-uppercase tw-text-accent-600">
            Why Choose Key Medsolutions UK?
          </p>
          <p className="tw-text-slate-600 tw-max-w-2xl tw-mx-auto tw-text-sm md:tw-text-base">
            Let’s be honest: there are lots of recruitment process outsourcing
            companies out there. So, why go with us? We like to think it comes
            down to real results, innovation, and a genuine focus on your needs.
          </p>
          <p className="tw-text-slate-600 tw-max-w-2xl tw-mx-auto tw-text-sm md:tw-text-base">
            Here’s what makes us different:
          </p>
        </motion.div>

        {/* Cards grid (no left-right layout, centered block cards) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-6 md:tw-gap-7 tw-max-w-5xl tw-mx-auto"
        >
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.06,
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="tw-h-full"
            >
              <div
                className="tw-h-full tw-rounded-3xl tw-bg-white tw-p-5 md:tw-p-6 tw-flex tw-flex-col tw-gap-3 tw-shadow-sm"
                style={{
                  border: "1px solid rgba(203,213,225,0.7)",
                  boxShadow:
                    "0 18px 40px rgba(15,23,42,0.08), 0 0 0 1px rgba(255,255,255,0.9)",
                }}
              >
                <div className="tw-flex tw-items-center tw-justify-between tw-mb-1">
                  <div className="tw-inline-flex tw-items-center tw-justify-center tw-h-9 tw-w-9 tw-rounded-2xl tw-bg-accent-50">
                    {card.icon}
                  </div>
                  <span className="tw-h-2 tw-w-10 tw-rounded-full tw-bg-accent-100" />
                </div>

                <div className="tw-space-y-1.5">
                  <p className="tw-text-sm sm:tw-text-[15px] tw-font-semibold tw-text-slate-900">
                    {card.title}
                  </p>
                  <p className="tw-text-xs sm:tw-text-sm tw-text-slate-700 tw-leading-relaxed">
                    {card.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .why-choose-float-1 {
          animation: whyFloat1 9s ease-in-out infinite;
        }
        .why-choose-float-2 {
          animation: whyFloat2 11s ease-in-out infinite;
        }

        @keyframes whyFloat1 {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes whyFloat2 {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(16px);
          }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseKeyMedsolutionsSection;
