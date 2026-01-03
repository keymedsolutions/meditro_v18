"use client";

import React from "react";
import { Target, Rocket, TrendingDown } from "lucide-react";

const CaseStudyHighlights = () => {
  const data = [
    {
      icon: Target,
      label: "60% average operational cost savings for our clients.",
    },
    {
      icon: Rocket,
      label: "45% improvement in time efficiency for administrative tasks.",
    },
    {
      icon: TrendingDown,
      label: "99.8% reduction in administrative and data entry errors.",
    },
  ];

  return (
    <section className="container tw-py-20 ">
      <div className="tw-max-w-5xl tw-mx-auto tw-px-6 tw-flex tw-flex-col tw-gap-y-16">
        <div className="tw-text-center tw-space-y-3">
          <p className="tw-text-sm tw-font-semibold tw-tracking-[0.18em] tw-uppercase tw-text-accent-600">
            Case Study Highlights
          </p>
        </div>

        <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 tw-gap-5 tw-mb-8">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="tw-flex tw-items-center tw-gap-3 tw-rounded-2xl tw-bg-[#f7f9ff] tw-px-4 tw-py-3.5"
                style={{ border: "1px solid rgba(226,232,240,0.9)" }}
              >
                <div className="tw-h-9 tw-w-9 tw-rounded-2xl tw-flex tw-items-center tw-justify-center tw-bg-white">
                  <item.icon className="tw-w-4 tw-h-4 tw-text-accent-600" />
                </div>

                <p className="tw-text-sm tw-text-slate-800 tw-leading-relaxed tw-mb-0">
                  <span className="tw-font-semibold">{item.label}</span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyHighlights;
