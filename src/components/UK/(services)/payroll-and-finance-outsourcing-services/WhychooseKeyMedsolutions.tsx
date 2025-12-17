"use client";

import { APP_PATH } from "@/data/PATH_APP";
import Link from "next/link";
import React from "react";

const WhychooseKeyMedsolutions = () => {
  const data = [
    {
      icon: "🎯",
      label: "99.5% accuracy rate for true peace of mind",
      className:
        "!tw-border-2 !tw-border-blue-300 tw-bg-blue-100 after:!tw-bg-blue-300",
    },
    {
      icon: "🚀",
      label: "Global-compliant financial experts on every project",
      className:
        "!tw-border-2 !tw-border-green-300 tw-bg-green-100 after:!tw-bg-green-300",
    },
    {
      icon: "📉",
      label: "Secure and GDPR-compliant systems to keep your data safe",
      className:
        "!tw-border-2 !tw-border-yellow-300 tw-bg-yellow-100 after:!tw-bg-yellow-300",
    },
    {
      icon: "🌍",
      label: "Dedicated account managers, so you always know who to call",
      className:
        "!tw-border-2 !tw-border-purple-300 tw-bg-purple-100 after:!tw-bg-purple-300",
    },
    {
      icon: "🏆",
      label: "Cost savings up to 60%, making your budget go further",
      className:
        "!tw-border-2 !tw-border-red-300 tw-bg-red-100 after:!tw-bg-red-300",
    },
    {
      icon: "📈",
      label: "Support that grows as you grow",
      className:
        "!tw-border-2 !tw-border-orange-300 tw-bg-orange-100 after:!tw-bg-orange-300",
    },
  ];

  return (
    <section className="container tw-py-20 ">
      <div className="tw-max-w-5xl tw-mx-auto sm:tw-px-6 tw-flex tw-flex-col tw-gap-y-16">
        <div className="tw-text-center tw-space-y-3">
          <p className="tw-text-sm tw-font-semibold tw-tracking-[0.18em] tw-uppercase tw-text-accent-600">
            Why choose Key Medsolutions UK <br />
            for payroll and finance outsourcing?
          </p>
          <p className="tw-text-slate-600 tw-max-w-2xl tw-mx-auto tw-text-sm md:tw-text-base">
            If you want to partner with a leading finance payroll outsourcing
            provider, Key Medsolutions UK is your choice. We’re a&nbsp;
            <Link
              href={
                APP_PATH.services.recruitmentProcessOutsourcingServices.path
              }
              className="tw-font-semibold tw-text-inherit"
            >
              trusted RPO company,
            </Link>
            &nbsp;and well known among the best payroll and finance outsourcing
            companies in the Global. Here’s why clients love working with us:
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

export default WhychooseKeyMedsolutions;
