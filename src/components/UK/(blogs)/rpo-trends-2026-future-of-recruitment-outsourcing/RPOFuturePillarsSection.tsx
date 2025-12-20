"use client";

import { APP_PATH } from "@/data/PATH_APP";
import { motion } from "framer-motion";
import Link from "next/link";

const pillars = [
  {
    title: "Global Reach and the Demand for Global RPO Solutions",
    text: (
      <>
        Businesses are no longer hiring talent only in the UK. Skills shortages,
        remote work acceptance and international expansion mean that many
        companies now need&nbsp;
        <Link
          href={APP_PATH.services.recruitmentProcessOutsourcingServices.path}
          className="tw-font-semibold tw-text-inherit focus:tw-text-inherit"
        >
          Global RPO Solutions
        </Link>
        &nbsp;that can support recruitment across borders. This includes
        compliance, global sourcing strategies, multilingual engagement and
        cross country onboarding. Key Medsolutions UK provides exactly this type
        of global support. Whether a business needs talent in London, Lisbon or
        Bangalore, our team is equipped to navigate the complexities of
        international hiring with ease and accuracy.
      </>
    ),
  },
  {
    title: "Skills Based and Agile Hiring Approaches",
    text: "More companies now value practical skills, certifications and hands on experience over traditional degree based requirements. This change is especially important in fast moving sectors like technology, digital marketing, cybersecurity and data analytics. RPO providers like Key Medsolutions UK help employers pivot to skills first recruitment. This means new assessment methods, targeted sourcing strategies, and selecting candidates who can generate impact from day one. It is also a great way to open doors to more diverse talent.",
  },
  {
    title: "DE&I Driven Recruitment Strategies",
    text: "Diversity, Equity and Inclusion continue to be top priorities for HR teams. Businesses want to build balanced teams, improve employer branding and support ethical hiring practices. RPO partners now have a responsibility to deliver measurable DE&I outcomes, not just promises. At Key Medsolutions UK, DE&I is part of every stage of our recruitment approach. This includes inclusive sourcing channels, unbiased screening tools, structured interviews and meaningful data reporting.",
  },
  {
    title: "Data Transparency and Real Time Hiring Insights",
    text: "Gone are the days of waiting for monthly reports. Organisations now want real time visibility of hiring metrics. This includes time to hire, source of hire, retention, quality of hire and candidate satisfaction. Key Medsolutions UK gives clients access to clear dashboards and reports so they can make confident decisions and evaluate what is working. This helps businesses plan workforce needs more effectively and adapt their hiring strategy quickly.",
  },
  {
    title: "Hybrid and Remote First Recruitment Models",
    text: (
      <>
        Remote and hybrid work have changed how recruitment works. Virtual
        interviews, remote assessments, digital onboarding and distributed teams
        are now standard processes. Key Medsolutions UK supports remote first
        hiring by offering digital tools, global talent sourcing and fully
        &nbsp;
        <Link
          href={APP_PATH.services.remoteStaffingAgency.path}
          className="tw-font-semibold tw-text-inherit focus:tw-text-inherit"
        >
          virtual recruitment
        </Link>
        &nbsp;operations. For many clients, this means they can hire the best
        person for the role, no matter where that person lives.
      </>
    ),
  },
];

export const RPOFuturePillarsSection = () => {
  return (
    <section className="tw-relative tw-bg-accent-50 tw-py-24">
      {/* Decorative accent blur */}
      <div className="tw-pointer-events-none tw-absolute -tw-top-32 -tw-right-32 tw-h-[420px] tw-w-[420px] tw-rounded-full tw-bg-accent-200/40 tw-blur-3xl" />

      <div className="tw-container tw-relative tw-z-10 tw-mx-auto tw-max-w-6xl tw-px-4 md:tw-px-8">
        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-10">
          {pillars.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.05 }}
              viewport={{ once: true }}
              className="tw-relative"
            >
              {/* Accent glow */}
              <div className="tw-absolute -tw-inset-1 tw-rounded-3xl tw-bg-gradient-to-br tw-from-accent-400/30 tw-to-accent-200/30 tw-blur-lg" />

              {/* Card */}
              <div
                className="tw-relative tw-h-full tw-rounded-3xl tw-bg-white tw-p-8"
                style={{
                  border: "1px solid rgba(203,213,225,0.9)",
                  boxShadow:
                    "0 18px 45px rgba(15,23,42,0.12), 0 0 0 1px rgba(255,255,255,0.9)",
                }}
              >
                {/* Accent bar */}
                <span className="tw-inline-block tw-h-1 tw-w-16 tw-rounded-full tw-bg-accent-500 tw-mb-5" />

                <h3 className="tw-text-xl sm:tw-text-2xl tw-font-semibold tw-text-slate-900 tw-mb-4">
                  {item.title}
                </h3>

                <p className="tw-text-slate-700 tw-text-base sm:tw-text-lg tw-leading-relaxed">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
