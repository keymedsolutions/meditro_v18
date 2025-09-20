"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Users,
  Zap,
  Award,
  CheckCircle,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";

export function WhyChooseSection() {
  const features = [
    {
      icon: Shield,
      title: "Specialized Experience",
      description:
        "Our team is deeply versed in nephrology’s unique billing and coding requirements.",
    },
    {
      icon: Zap,
      title: "Full Spectrum Nephrology Billing Solutions",
      description:
        "From eligibility verification and claims management to denial appeals, we support your practice’s entire revenue cycle.",
    },
    {
      icon: TrendingUp,
      title: "Cutting-Edge Technology",
      description:
        "Our advanced billing software enables smooth EHR integration and instant access to performance analytics.",
    },
    {
      icon: CheckCircle,
      title: "Rigorous Compliance",
      description:
        "Every process meets HIPAA and payor-specific guidelines, minimizing risk for your practice.",
    },
    {
      icon: Users,
      title: "Personalized Service",
      description:
        "A dedicated account manager and responsive support tailored to your operational needs.",
    },
  ];

  return (
    <section className="tw-py-24 ">
      <div className="sm:tw-container tw-mx-auto tw-max-w-7xl ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="tw-relative tw-flex lg:tw-flex-row tw-flex-col tw-h-full tw-mb-16 tw-gap-x-4 tw-bg-accent-500 custom-background tw-rounded-2xl tw-container sm:tw-p-6 tw-p-4"
        >
          <Image
            src="/images/background/CH-S2-P1.png"
            alt="why choose Nephrology Medical Billing"
            width={400}
            height={500}
            className="tw-h-full tw-rounded-2xl tw-mx-auto lg:tw-mb-0 tw-mb-8"
          />
          <div>
            <h2 className="tw-text-3xl md:tw-text-4xl tw-font-bold tw-font-serif tw-text-white tw-mb-6">
              Why Choose&nbsp;
              <span className="tw-bg-gradient-to-r tw-from-accentOrange-500 tw-to-secondary tw-bg-clip-text tw-text-transparent">
                Key MedSolutions
              </span>
              &nbsp;for Your Nephrology Medical Billing?
            </h2>
            <p className="sm:tw-text-xl tw-text-gray-200 tw-max-w-5xl tw-mx-auto tw-leading-relaxed">
              At Key MedSolutions, we recognize the unique complexities and
              challenges involved in nephrology medical billing. Our certified
              professionals and dedicated Nephrology Billing Experts ensure each
              claim is coded and processed with industry-leading accuracy and
              compliance. By partnering with a Top Nephrology Medical Billing
              Company USA healthcare providers trust, you gain a service built
              for the complexities of renal care, including dialysis, chronic
              kidney disease management, and renal transplants.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="tw-text-center tw-mb-16"
        >
          <h2 className="tw-text-4xl md:tw-text-5xl tw-font-bold tw-font-serif tw-text-foreground tw-mb-6">
            What sets us apart as your&nbsp;
            <br />
            <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
              Nephrology Medical Billing Company?
            </span>
          </h2>
        </motion.div>

        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8">
          {features.map((feature, index) => (
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
              className="tw-group  tw-bg-white sm:tw-p-8 tw-p-4 tw-rounded-2xl tw-shadow-lg tw-hover:tw-shadow-2xl tw-transition-all tw-duration-300  hover:tw-bg-accent-500 tw-transform tw-hover:tw-scale-105"
              style={{
                borderLeft: "5px solid #565acf",
                borderRight: "0.5px solid #cacaca",
                borderTop: "0.5px solid #cacaca",
                borderBottom: "0.5px solid #cacaca",
              }}
            >
              <div className="tw-flex tw-items-center tw-justify-center tw-w-16 tw-h-16 gradient-accent  tw-rounded-2xl tw-mb-6 tw-group-hover:tw-scale-110 tw-transition-transform tw-duration-300">
                <feature.icon className="tw-w-8 tw-h-8 tw-text-white" />
              </div>
              <h3 className="tw-text-xl tw-font-bold tw-font-serif tw-text-foreground group-hover:tw-text-white tw-mb-4">
                {feature.title}
              </h3>
              <p className="tw-text-muted-foreground tw-leading-relaxed group-hover:tw-text-white">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
