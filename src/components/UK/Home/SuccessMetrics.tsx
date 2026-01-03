"use client";

import React from "react";
import { Target, Rocket, TrendingDown, Globe, Trophy } from "lucide-react";

const SuccessMetrics = () => {
  const data = [
    {
      icon: Target,
      label: "92% Client Retention Rate",
    },
    {
      icon: Rocket,
      label: "96% Placement Success Rate",
    },
    {
      icon: TrendingDown,
      label: "Just 2.3% Turnover in our remote teams",
    },
    {
      icon: Globe,
      label: "200+ Global Teams Built",
    },
    {
      icon: Trophy,
      label: "2,000+ Successful Hires across 10+ industries",
    },
  ];

  return (
    <section className="container tw-py-20 ">
      <div className="tw-max-w-5xl tw-mx-auto tw-px-6 tw-flex tw-flex-col tw-gap-y-16">
        <div className="tw-text-center tw-space-y-3">
          <p className="tw-text-sm tw-font-semibold tw-tracking-[0.18em] tw-uppercase tw-text-accent-600">
            The Success Metrics That Prove It
          </p>
          <h2 className="tw-text-2xl md:tw-text-3xl lg:tw-text-4xl tw-font-bold tw-text-slate-900">
            The numbers tell our story:
          </h2>
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

export default SuccessMetrics;
