"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const TechnologyDigitalRecruitmentServices: React.FC = () => {
  const servicesSections = [
    {
      id: 1,
      title: "Full Technology Recruitment Services",
      descriptions: [
        "We recruit for permanent, contract, and interim positions across all levels.",
        "Specialisations include:",
      ],
      insideDescription: [
        "Software engineers & developers",
        "CTOs, CIOs & tech leaders",
        "Cybersecurity specialists",
        "Cloud & infrastructure engineers",
        "AI specialists, data engineers & data scientists",
        "Product managers",
        "UX/UI designers",
      ],
      footerDescription:
        "These roles require deep technical understanding, and our team knows exactly how to evaluate the right fit.",
      mainImage: "/assets/images/our-services/rpo-main.jpg",
      smallImage: "/assets/images/our-services/rpo-secondary.jpg",
    },

    {
      id: 2,
      title: "Digital Recruitment Agency Services",
      descriptions: [
        "As a dedicated Digital recruitment agency, we help businesses build strong digital teams that drive customer acquisition and brand growth.",
        "Common roles include:",
      ],
      insideDescription: [
        "Digital marketers",
        "SEO specialists",
        "E-commerce professionals",
        "Creative designers",
        "Digital strategists & content leads",
      ],
      mainImage:
        "/assets/images/technology-and-digital-recruitment-services/SEO.jpg",
      smallImage: "/assets/images/our-services/ScreeningServices.jpg",
    },

    {
      id: 3,
      title: "Technology Sales Recruitment",
      descriptions: [
        "If you sell a technology product, you already know how crucial great salespeople are. We help you hire sales talent who understand SaaS, cloud, software, and technical solutions.",
        "Roles include:",
      ],
      insideDescription: [
        "SaaS sales executives",
        "Account managers",
        "Pre-sales engineers",
        "Channel partners",
        "Business development managers",
      ],
      footerDescription:
        "If you’ve been searching for technology sales recruitment agencies, you’re in the right place.",
      mainImage:
        "/assets/images/recruitment-process-outsourcing-services/Executive-LevelRPOSupport.jpg",
      smallImage: "/assets/images/our-services/AdministrativeServices.jpg",
    },
    {
      id: 4,
      title: "Global Tech Hiring",
      descriptions: [
        "Hiring internationally or building a remote tech team? We support:",
      ],
      insideDescription: [
        "Cross-border hiring",
        "Remote-first recruitment",
        "Offshore and nearshore teams",
        "International talent mapping",
      ],
      footerDescription:
        "As one of the leading Technology Recruitment Agencies for Global Hiring, we streamline the entire global hiring process.",
      mainImage:
        "/assets/images/technology-and-digital-recruitment-services/GlobalTechHiring.jpg",
      smallImage: "/assets/images/our-services/FinanceOutsourcingService.jpg",
    },
    {
      id: 5,
      title: "Niche & Sector-Specific Hiring",
      descriptions: ["We support highly specialised tech sectors, including:"],
      insideDescription: [
        "BioTech",
        "FinTech",
        "HealthTech",
        "EdTech",
        "AI and emerging technologies",
      ],
      footerDescription:
        "Our recruiters understand these industries deeply, making hiring more accurate and efficient.",
      smallImage: "/assets/images/our-services/",
      mainImage:
        "/assets/images/technology-and-digital-recruitment-services/NicheAndSectorSpecificHiring.jpg",
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
        {item.id}. {item.title}
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

      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="tw-text-center tw-max-w-3xl tw-mx-auto tw-mb-24 lg:tw-px-0 tw-px-4    "
      >
        <h2 className="tw-text-2xl sm:tw-text-3xl lg:tw-text-4xl tw-font-semibold tw-text-slate-900 tw-mb-4">
          Technology & Digital Recruitment Services
        </h2>
        <p className="tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-slate-700">
          Our Technology and Digital Recruitment Services are built to support
          long-term growth and immediate hiring needs across technical, digital,
          and commercial roles.
        </p>
      </motion.div>
      <div className="tw-container tw-relative tw-z-10 tw-mx-auto tw-px-4 md:tw-px-8 tw-space-y-40">
        {servicesSections.map((item, index) => {
          const reverse = index % 2 !== 0;

          return (
            // <div
            //   key={item.id}
            //   className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] tw-gap-10 tw-items-center"
            // >
            //   {reverse ? (
            //     <>
            //       {TextBlock(item, reverse)}
            //       {ImageBlock(item, reverse)}
            //     </>
            //   ) : (
            //     <>
            //       {ImageBlock(item, reverse)}
            //       {TextBlock(item, reverse)}
            //     </>
            //   )}
            // </div>
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

export default TechnologyDigitalRecruitmentServices;
