"use client";

import { APP_PATH } from "@/data/PATH_APP";
import Link from "next/link";
import React from "react";
import {
  Target,
  Rocket,
  ShieldCheck,
  Globe,
  Trophy,
  TrendingUp,
} from "lucide-react";


const WhychooseKeyMedsolutions = () => {
  const data = [
    {
    icon: Target,
      label: "99.5% accuracy rate for true peace of mind",
      className:
        "!tw-border-2 !tw-border-blue-300 tw-bg-blue-100 after:!tw-bg-blue-300",
    },
    {
      icon: Rocket,
      label: "Global-compliant financial experts on every project",
      className:
        "!tw-border-2 !tw-border-green-300 tw-bg-green-100 after:!tw-bg-green-300",
    },
    {
      icon: ShieldCheck,
      label: "Secure and GDPR-compliant systems to keep your data safe",
      className:
        "!tw-border-2 !tw-border-yellow-300 tw-bg-yellow-100 after:!tw-bg-yellow-300",
    },
    {
      icon: Globe,
      label: "Dedicated account managers, so you always know who to call",
      className:
        "!tw-border-2 !tw-border-purple-300 tw-bg-purple-100 after:!tw-bg-purple-300",
    },
    {
      icon: Trophy,
      label: "Cost savings up to 60%, making your budget go further",
      className:
        "!tw-border-2 !tw-border-red-300 tw-bg-red-100 after:!tw-bg-red-300",
    },
    {
      icon: TrendingUp,
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

export default WhychooseKeyMedsolutions;
