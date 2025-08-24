"use client";

import { motion } from "framer-motion";
import { TrendingUp, Shield, Zap, Users, Globe, BarChart3 } from "lucide-react";

export function AdvantageSection() {
  const advantages = [
    {
      icon: TrendingUp,
      title: "High Clean Claims Rate",
      description:
        "Our average is over 98%, resulting in quicker collections and fewer administrative hassles.",
    },
    {
      icon: Shield,
      title: "Reduced Denial Rates",
      description:
        "Our denial rates fall well under industry averages thanks to expert coding and documentation review.",
    },
    {
      icon: Zap,
      title: "Flexible Integration",
      description:
        "Seamlessly connect with your EHR and practice management solutions for efficient workflow.",
    },
    {
      icon: BarChart3,
      title: "Transparent Communication",
      description:
        "Enjoy ongoing updates, performance reviews, and ready access to your data.",
    },
    {
      icon: Globe,
      title: "Nationwide Reach",
      description:
        "No matter where you are in the USA, our Nephrology Billing Services are tailored for your local and national needs.",
    },
    {
      icon: Users,
      title: "Scalable Support",
      description:
        "Whether you're a solo nephrologist, part of a group practice, or a large multi-specialty network, our solutions adapt to meet your needs at every level.",
    },
  ];

  return (
    <section className="tw-py-24 tw-px-4 tw-bg-gradient-to-br tw-from-card tw-to-background tw-relative tw-overflow-hidden">
      {/* Background decorative elements */}
      <div className="tw-absolute tw-top-20 tw-right-10 tw-w-40 tw-h-40 tw-bg-gradient-to-br tw-from-primary/10 tw-to-secondary/10 tw-rounded-full floating-animation"></div>
      <div
        className="tw-absolute tw-bottom-20 tw-left-10 tw-w-32 tw-h-32 tw-bg-gradient-to-br tw-from-secondary/10 tw-to-primary/10 tw-rounded-full floating-animation"
        style={{ animationDelay: "3s" }}
      ></div>

      <div className="sm:tw-container tw-mx-auto tw-max-w-7xl tw-relative tw-z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="tw-text-center tw-mb-16"
        >
          <h2 className="tw-text-4xl md:tw-text-5xl tw-font-bold tw-font-serif tw-text-foreground tw-mb-6">
            The&nbsp;
            <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
              Key MedSolutions
            </span>
            &nbsp; Advantage
          </h2>
          <p className="sm:tw-text-xl tw-text-muted-foreground tw-max-w-3xl tw-mx-auto tw-leading-relaxed">
            As a leading Nephrology Medical Billing Company USA practices rely
            on, Key MedSolutions brings significant advantages to your billing
            operations.
          </p>
        </motion.div>

        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8">
          {advantages.map((advantage, index) => {
            // Border colors cycle: 0,3,6 => emerald | 1,4,7 => amber | 2,5,8 => purple
            const borderColors = [
              "!tw-border-emerald-600",
              "!tw-border-amber-600",
              "!tw-border-purple-600",
            ];
            const borderColor = borderColors[index % 3];

            return (
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
                style={{ border: "2px solid" }}
                className={`tw-group tw-h-full ${borderColor} tw-transition-all tw-duration-1000 tw-ease-in-out 
                 tw-clip-path-custom tw-rounded-tr-[20px] tw-rounded-bl-[20px] tw-flex tw-flex-col 
                 hover:tw-scale-105 hover:tw-shadow-2xl tw-relative tw-overflow-hidden`}
              >
                {/* Shimmer effect */}
                <div className="tw-absolute tw-inset-0 tw-opacity-0 tw-group-hover:tw-opacity-100 tw-transition-opacity tw-duration-300">
                  <div className="shimmer tw-absolute tw-inset-0"></div>
                </div>

                {/* Content */}
                <div className="tw-relative tw-z-10 tw-flex tw-flex-col tw-flex-1">
                  {/* Image */}
                  <div
                    style={{ border: "2px solid" }}
                    className={`tw-w-[4.8em] tw-h-[4.8em] tw-rounded-[15px] tw-mx-auto tw-my-4 ${borderColor} tw-flex tw-justify-center tw-items-center`}
                  >
                    {
                      <advantage.icon
                        className={`tw-w-8 tw-h-8 ${borderColor.replace(
                          "tw-border-",
                          "tw-text-"
                        )}`}
                      />
                    }
                  </div>

                  {/* Title */}
                  <span className="tw-font-bold tw-text-black tw-text-center tw-block tw-text-2xl">
                    {advantage.title}
                  </span>

                  {/* Info */}
                  <p className="tw-text-gray-500 tw-text-center tw-m-4">
                    {advantage.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="tw-text-center tw-mt-16"
        >
          <div className="tw-bg-white sm:tw-p-8 tw-p-2 tw-rounded-2xl tw-shadow-lg border tw-border-border tw-max-w-4xl tw-mx-auto">
            <h2 className="tw-text-2xl md:tw-text-3xl tw-font-bold tw-font-serif tw-text-foreground tw-mb-6">
              Outsource &nbsp;
              <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
                Nephrology Billing Services
              </span>
              &nbsp;to the Best
            </h2>
            <p className="tw-text-muted-foreground tw-leading-relaxed tw-mb-6">
              Streamlining your practice’s revenue cycle shouldn’t come at the
              expense of patient care or compliance. When you Outsource
              Nephrology Billing Services to Key MedSolutions, you gain time to
              focus on what matters while our Nephrology Billing Experts
              safeguard your financial stability.
            </p>
            <p className="tw-text-muted-foreground tw-leading-relaxed tw-mb-6">
              Accurate, audit-ready billing gives you the peace of mind to grow
              with confidence. Trust the Nephrology Medical Billing Company that
              delivers results.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
