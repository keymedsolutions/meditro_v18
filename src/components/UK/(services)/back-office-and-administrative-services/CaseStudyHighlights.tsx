"use client";

import React from "react";

const CaseStudyHighlights = () => {
  const data = [
    {
      icon: "🎯",
      label: "60% average operational cost savings for our clients.",
      className:
        "!tw-border-2 !tw-border-blue-300 tw-bg-blue-100 after:!tw-bg-blue-300",
    },
    {
      icon: "🚀",
      label: "45% improvement in time efficiency for administrative tasks.",
      className:
        "!tw-border-2 !tw-border-green-300 tw-bg-green-100 after:!tw-bg-green-300",
    },
    {
      icon: "📉",
      label: "99.8% reduction in administrative and data entry errors.",
      className:
        "!tw-border-2 !tw-border-yellow-300 tw-bg-yellow-100 after:!tw-bg-yellow-300",
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

export default CaseStudyHighlights;
