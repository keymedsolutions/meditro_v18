"use client";

import React from "react";

const SuccessMetrics = () => {
  const data = [
    {
      icon: "🎯",
      label: "92% Client Retention Rate",
      className:
        "!tw-border-2 !tw-border-blue-300 tw-bg-blue-100 after:!tw-bg-blue-300",
    },
    {
      icon: "🚀",
      label: "96% Placement Success Rate",
      className:
        "!tw-border-2 !tw-border-green-300 tw-bg-green-100 after:!tw-bg-green-300",
    },
    {
      icon: "📉",
      label: "Just 2.3% Turnover in our remote teams",
      className:
        "!tw-border-2 !tw-border-yellow-300 tw-bg-yellow-100 after:!tw-bg-yellow-300",
    },
    {
      icon: "🌍",
      label: "200+ Global Teams Built",
      className:
        "!tw-border-2 !tw-border-purple-300 tw-bg-purple-100 after:!tw-bg-purple-300",
    },
    {
      icon: "🏆",
      label: "2,000+ Successful Hires across 10+ industries",
      className:
        "!tw-border-2 !tw-border-red-300 tw-bg-red-100 after:!tw-bg-red-300",
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

        <div className="row">
          {data.map((item, index) => {
            return (
              <div key={index} className="col-12 mb-30 mb-sm-20">
                <div
                  className={`feature-container feature-bx1 feature2  ${item.className}`}
                >
                  <div className="icon-md">
                    <span className="icon-cell">
                      <span
                        style={{
                          fontSize: "3rem",
                        }}
                        className="!tw-text-4xl text-icon"
                      >
                        {item.icon}
                      </span>
                    </span>
                  </div>
                  <div className="icon-content">
                    <h4 className="ttr-title">{item.label}</h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SuccessMetrics;
