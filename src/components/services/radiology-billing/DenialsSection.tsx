/* eslint-disable react/no-unescaped-entities */
import React, { useRef } from "react";
import { RadiologyBenefitCard } from "./radiology-benefit-card";
import {
  LucideIcon,
  Building2,
  UserCog,
  Image,
  Workflow,
  Globe,
} from "lucide-react";
import { GradientText } from "./gradient-text";
import { useInView, motion } from "framer-motion";

const DenialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const data = [
    {
      title: "Hospital Radiology Departments",
      description:
        "Handling large-scale imaging operations and complex workloads with enterprise-level processes and support.",
      Icon: (
        <div
          style={{ border: "1.5px solid gray " }}
          className="tw-p-3 tw-rounded-2xl"
        >
          <Building2 className="tw-h-14 tw-w-14 tw-text-blue-300" />
        </div>
      ),
    },
    {
      title: "Independent Radiology Practices",
      description:
        "Flexible, expert-driven billing for solo providers and group practices seeking growth.",
      Icon: (
        <div
          style={{ border: "1.5px solid gray " }}
          className="tw-p-3 tw-rounded-2xl"
        >
          <UserCog className="tw-h-14 tw-w-14 tw-text-blue-300" />
        </div>
      ),
    },
    {
      title: "Imaging Centers & Diagnostic Labs",
      description:
        "Efficient billing for routine, urgent, and specialty imaging services, ensuring consistent, strong cash flow.",
      Icon: (
        <div
          style={{ border: "1.5px solid gray " }}
          className="tw-p-3 tw-rounded-2xl"
        >
          <Image className="tw-h-14 tw-w-14 tw-text-blue-300" />
        </div>
      ),
    },
    {
      title: "Multi-Specialty Clinics",
      description:
        "Integrated support that manages imaging billing across multiple clinical disciplines, eliminating gaps and fragmentation.",
      Icon: (
        <div
          style={{ border: "1.5px solid gray " }}
          className="tw-p-3 tw-rounded-2xl"
        >
          <Workflow className="tw-h-14 tw-w-14 tw-text-blue-300" />
        </div>
      ),
    },
    {
      title: "Expanding Radiology Groups Nationwide",
      description:
        "Nationwide scalability supports mergers, acquisitions, and organic practice growth, so your billing keeps pace with your vision.",
      Icon: (
        <div
          style={{ border: "1.5px solid gray " }}
          className="tw-p-3 tw-rounded-2xl"
        >
          <Globe className="tw-h-14 tw-w-14 tw-text-blue-300" />
        </div>
      ),
    },
  ];
  return (
    <>
      {/* Denials Section */}
      <section
        ref={ref}
        className="   tw-py-16 tw-bg-gradient-to-r tw-from-primary-100 tw-to-secondary-100 tw-text-white tw-relative"
      >
        <div className="tw-absolute tw-inset-0 tw-opacity-10">
          <svg width="100%" height="100%">
            <defs>
              <pattern
                id="grid-pattern"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(45)"
              >
                <rect width="100%" height="100%" fill="none" />
                <path d="M 0,0 L 0,40" stroke="white" strokeWidth="0.5" />
                <path d="M 40,0 L 40,40" stroke="white" strokeWidth="0.5" />
                <path d="M 0,0 L 40,0" stroke="white" strokeWidth="0.5" />
                <path d="M 0,40 L 40,40" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="url(#grid-pattern)"
            />
          </svg>
        </div>
        <div className="container tw-mx-auto tw-px-4 tw-relative tw-z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="tw-text-center tw-mb-4"
          >
            <div className="tw-inline-block tw-mb-4">
              <div className="tw-relative">
                <div className="tw-absolute tw-inset-0 tw-bg-blue-100 tw-rounded-lg tw-transform tw-rotate-3"></div>
                <div className="tw-relative tw-bg-blue-50 tw-rounded-lg tw-px-4 tw-py-1 tw-transform -tw-rotate-3">
                  <span className="tw-text-blue-600 tw-font-semibold">
                    Industries We Serve
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="tw-max-w-4xl tw-mx-auto">
            <h2 className="tw-text-3xl md:tw-text-4xl tw-font-bold tw-text-slate-900 tw-mb-6 tw-text-center">
              As a leading&nbsp;
              <GradientText>
                Radiology Medical Billing Company USA,
              </GradientText>
              &nbsp;our solutions are customized to the needs of
            </h2>
          </div>

          <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 tw-gap-8 tw-mx-auto">
            {data?.map((item, index) => (
              <RadiologyBenefitCard
                icon={item?.Icon}
                title={item?.title}
                description={item?.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default DenialsSection;
