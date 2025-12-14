"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Services: React.FC = () => {
  const servicesSections = [
    {
      id: 1,
      title: "Global Reach: Connecting Talent Without Borders",
      descriptions: [
        "One of our biggest advantages is reach. Your talent search isn’t limited to one location,  you get access to global sourcing power, giving you better skills, more diversity, and faster hiring.",
        "We support companies with:",
      ],
      insideDescription: [
        "Multi-country talent access",
        "Niche and hard-to-find skill sets",
        "Dedicated offshore/nearshore recruitment teams",
        "Remote staffing for specialist and high-volume roles",
      ],
      footerDescription:
        "And because we source across time zones, your hiring continues even when your office is closed. That means faster shortlists, quicker placements, and less downtime.",
      mainImage: "/assets/images/why-choose-us/GlobalReach.jpg",
      smallImage: "/assets/images/our-services/rpo-secondary.jpg",
    },

    {
      id: 2,
      title: "Expertise: Recruitment Powered by Industry Specialists",
      descriptions: [
        "Every role is different, and so is every industry. That’s why we match you with recruiters who specialise in your sector, ensuring you get people who truly understand job requirements, candidate behaviour, compliance rules, and salary benchmarks.",
        "Our expertise covers:",
      ],
      insideDescription: [
        "Technology & Digital (Developers, Cybersecurity, DevOps)",
        "Healthcare (Nurses, Support Workers, Allied Health)",
        "Engineering & Technical (Mechanical, Electrical, Civil)",
        "Finance & Accounting (Payroll, Bookkeeping, Analysts)",
        "Logistics & Supply Chain (Warehouse, Procurement, Ops)",
        "Customer Support & Sales",
      ],
      footerDescription:
        "Our team brings over 10+ years of combined experience, meaning you’re never guessing, you’re guided by specialists.",
      mainImage:
        "/assets/images/our-services/rpo-main.jpg",
      smallImage: "/assets/images/our-services/ScreeningServices.jpg",
    },

    {
      id: 3,
      title: "Cost Efficiency: Reduce Hiring Costs, Improve Output",
      descriptions: [
        "Recruitment can be expensive,  but it doesn’t have to be. With Key Medsolutions UK, businesses save 60–75% compared to traditional hiring, thanks to scalable offshore teams and lean, tech-enabled processes.",
        "You save on:",
      ],
      insideDescription: [
        "Agency fees",
        "Office overheads",
        "HR and admin workload",
        "Screening, sourcing, and payroll time",
        "Recruitment infrastructure",
      ],
      footerDescription:
        "The result? Faster hiring. Lower spend. Higher quality. And a recruitment engine that grows with you.",
      mainImage:
        "/assets/images/why-choose-us/CostEfficiency.jpg",
      smallImage: "/assets/images/our-services/AdministrativeServices.jpg",
    },
    {
      id: 4,
      title: "Technology Integration: Smart, Data-Driven Recruitment",
      descriptions: [
        "We’re big believers in using technology to make hiring smoother,  not more complicated. Our systems help you make better decisions, speed up screening, and keep your pipeline organised.",
        "We combine:",
      ],
      insideDescription: [
        "AI-powered sourcing tools",
        "ATS and CRM optimisation",
        "Automated screening and skill assessments",
        "Digital onboarding",
        "Market intelligence & talent mapping",
        "Transparent dashboards and weekly analytics",
      ],
      footerDescription:
        "This tech + human blend gives you accuracy, clarity, and a much better candidate experience.",
      mainImage:
        "/assets/images/why-choose-us/TechnologyIntegration.jpg",
      smallImage: "/assets/images/our-services/FinanceOutsourcingService.jpg",
    },
    {
      id: 5,
      title: "Transparency: Clear Communication, Zero Hidden Costs",
      descriptions: [
        "No vague reports. No unclear pricing. No hard-to-reach recruiters.With us, everything is transparent:",
      ],
      insideDescription: [
        "Dedicated account manager",
        "Daily/weekly reports",
        "Full visibility into candidate pipelines",
        "Clear SLAs and performance metrics",
        "Honest pricing with no hidden charges",
      ],
      footerDescription:
        "We operate with strict UK GDPR compliance, ethical recruitment practices, and clear documentation, so you always know exactly what you’re getting.",
      smallImage: "/assets/images/our-services/",
      mainImage:
        "/assets/images/why-choose-us/Transparency.jpg",
    },
    {
      id: 6,
      title: "Scalability: Recruitment That Grows With You",
      descriptions: [
        "Whether you’re hiring for 5 roles or 500, we scale your recruitment engine exactly when you need it. Peak season? New branch opening? Sudden hiring surge? We ramp up instantly, and scale down just as smoothly.",
        "Choose from:",
      ],
      insideDescription: [
        "Partial RPO",
        "Full RPO",
        "Dedicated offshore teams",
        "On-demand recruitment",
        "Project-based hiring support",
        "Hybrid recruitment models",
      ],
      footerDescription:
        "You get total flexibility, faster time-to-hire, and zero capacity issues.",
      smallImage: "/assets/images/our-services/",
      mainImage:
        "/assets/images/technology-and-digital-recruitment-services/NicheAndSectorSpecificHiring.jpg",
    },

    {
      id: 7,
      title: "Social Proof: Results That Speak for Themselves",
      descriptions: ["Across industries, our clients consistently see:"],
      insideDescription: [
        "60–75% reduction in recruitment costs",
        "50% faster time-to-fill",
        "Better long-term retention",
        "Improved candidate quality",
        "Higher operational efficiency",
      ],
      footerDescription:
        "We’ve supported recruitment agencies, SMEs, and enterprise clients, helping them grow, scale, and operate more efficiently through world-class recruitment delivery.",
      smallImage: "/assets/images/our-services/",
      mainImage:
        "/assets/images/why-choose-us/SocialProof.jpg",
    },
  ];

  const ImageBlock = (
    item: (typeof servicesSections)[number],
    reverse: boolean
  ) => (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
      className={`tw-flex tw-items-center ${
        item?.id % 2 == 0 ? "tw-justify-end" : "tw-justify-start"
      }`}
    >
      <div className="tw-relative tw-w-full tw-max-w-md">
        {/* outer gradient frame */}
        <div
          className="tw-relative tw-rounded-[30px] tw-bg-gradient-to-br tw-from-accent-100 tw-via-accent-200 tw-to-accent-300 tw-p-[2px]"
          style={{
            border: "1px solid rgba(148,163,184,0.5)",
            boxShadow:
              "0 26px 60px rgba(15,23,42,0.25), 0 0 0 1px rgba(255,255,255,0.9)",
          }}
        >
          <div className="tw-rounded-[26px] tw-bg-white tw-p-5 tw-flex tw-flex-col tw-gap-4 tw-h-full">
            {/* mini header */}
            <div className="tw-flex tw-items-center tw-justify-between tw-mb-1">
              <div className="tw-flex tw-gap-1.5">
                <span className="tw-h-2.5 tw-w-2.5 tw-rounded-full tw-bg-accent-400" />
                <span className="tw-h-2.5 tw-w-2.5 tw-rounded-full tw-bg-accent-200" />
                <span className="tw-h-2.5 tw-w-2.5 tw-rounded-full tw-bg-slate-200" />
              </div>
              <span className="tw-h-5 tw-w-16 tw-rounded-full tw-bg-slate-100" />
            </div>

            {/* Image area */}
            <div className="tw-relative tw-rounded-2xl tw-overflow-hidden tw-aspect-[4/3] tw-bg-slate-100">
              <Image
                src={item.mainImage}
                alt=""
                fill
                className="tw-object-cover"
              />
              <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-t tw-from-slate-900/35 tw-via-transparent tw-to-transparent" />
            </div>

            {/* bottom stats / chips */}
            <div className="tw-mt-3 tw-flex tw-flex-wrap tw-gap-3 tw-items-center">
              <div className="tw-flex tw-items-center tw-gap-2 tw-rounded-full tw-bg-accent-50 tw-px-3 tw-py-1.5">
                <span className="tw-h-6 tw-w-6 tw-rounded-full tw-bg-accent-200" />
                <span className="tw-text-[11px] sm:tw-text-xs tw-font-medium tw-text-slate-800">
                  {item?.title}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const TextBlock = (
    item: (typeof servicesSections)[number],
    reverse: boolean
  ) => (
    <motion.div
      initial={{ opacity: 0, x: reverse ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
      className="tw-text-left"
    >
      <h2 className="tw-text-xl sm:tw-text-2xl lg:tw-text-3xl tw-font-semibold tw-mb-5">
        {item.title}
      </h2>

      <div className="tw-space-y-4 tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-slate-100/90">
        {item.descriptions.map((desc, i) => (
          <p key={i}>{desc}</p>
        ))}
      </div>
      <div className="tw-flex tw-flex-col tw-mt-4 tw-space-y-4 tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-slate-100/90">
        {item.insideDescription.map((desc, i) => (
          <div
            key={i}
            className="tw-relative tw-z-[3] tw-inline-flex tw-items-center tw-gap-2"
          >
            <div className="tw-flex tw-h-8 tw-w-8 tw-items-center tw-justify-center tw-rounded-2xl tw-bg-accent-100 tw-shadow-[0_10px_30px_rgba(56,189,248,0.35)]">
              <span className="tw-h-2 tw-w-2 tw-rounded-full tw-bg-accent-500" />
            </div>
            <p className="tw-text-sm md:tw-text-base tw-font-semibold tw-text-slate-900 tw-mb-0">
              {desc}
            </p>
          </div>
        ))}
      </div>
      {item?.footerDescription && (
        <p className="tw-mt-4">{item?.footerDescription}</p>
      )}
    </motion.div>
  );

  return (
    <section className="tw-relative tw-w-full tw-overflow-hidden tw-py-16 md:tw-py-20">
      <div className="tw-absolute tw-inset-0 tw-pointer-events-none" />

      <div className="tw-container tw-relative tw-z-10 tw-mx-auto tw-px-4 md:tw-px-8 tw-space-y-40">
        {servicesSections.map((item, index) => {
          const reverse = index % 2 !== 0;

          return (
            <div
              key={item.id}
              className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] tw-gap-10 tw-items-center"
            >
              {/* Image */}
              <div
                className={`tw-order-1 ${
                  reverse ? "lg:tw-order-1" : "lg:tw-order-2"
                }`}
              >
                {TextBlock(item, reverse)}
              </div>

              {/* Text */}
              <div
                className={`tw-order-2 ${
                  reverse ? "lg:tw-order-2" : "lg:tw-order-1"
                }`}
              >
                {ImageBlock(item, reverse)}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
