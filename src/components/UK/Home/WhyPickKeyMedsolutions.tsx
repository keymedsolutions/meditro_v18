"use client";

import React from "react";
import {
  Settings,
  MessageSquare,
  Globe2,
  Zap,
  ShieldCheck,
} from "lucide-react";

const WhyPickKeyMedsolutions = () => {
  const data = [
    {
      icon: <Settings className="tw-w-6 tw-h-6" />,
      title: "Tailored, Transparent Recruitment",
      description:
        "No one-size-fits-all here. You get hiring solutions built for your business, with absolute clarity and zero hidden fees.",
    },
    {
      icon: <MessageSquare className="tw-w-6 tw-h-6" />,
      title: "Communication You Can Rely On",
      description:
        "We’re always in touch with updates you actually want and real-time dashboards you’ll love, so you’re always in control.",
    },
    {
      icon: <Globe2 className="tw-w-6 tw-h-6" />,
      title: "UK Quality, Worldwide",
      description:
        "It doesn’t matter where your next hire is based. We vet every candidate for Global compliance and cultural fit, so there are no surprises.",
    },
    {
      icon: <Zap className="tw-w-6 tw-h-6" />,
      title: "Flexible and Fast",
      description:
        "Need someone tomorrow? Need to build a team over a month? Whether it’s contract, project, or permanent, you set the terms.",
    },
    {
      icon: <ShieldCheck className="tw-w-6 tw-h-6" />,
      title: "Zero Compliance Headaches",
      description:
        "HR, payroll, onboarding, legal paperwork? We’ve got it covered so you can focus on moving your business forward.",
    },
  ];
  return (
    <section className="tw-w-full tw-bg-white tw-py-16">
      <div className="tw-container tw-mx-auto tw-flex tw-flex-col tw-gap-y-16">
        {/* Section Heading */}
        <div className="tw-text-center tw-space-y-3">
          <p className="tw-text-sm tw-font-semibold tw-tracking-[0.18em] tw-uppercase tw-text-accent-600">
            Why Pick Key Medsolutions?
          </p>
          <p className="tw-text-slate-600 tw-max-w-2xl tw-mx-auto tw-text-sm md:tw-text-base">
            So what sets Key Medsolutions apart as the Best Offshore Recruitment
            Agency for UK and international businesses? Let’s break it down:
          </p>
        </div>

        {/* Card Grid */}
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-x-8 tw-gap-y-16 tw-items-start tw-pb-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="tw-w-full tw-bg-white tw-shadow-[0px_0px_15px_rgba(0,0,0,0.09)] tw-p-9 tw-space-y-3 tw-relative tw-overflow-hidden border tw-border-accent-500"
            >
              {/* Background Circle */}
              <div className="tw-w-24 tw-h-24 tw-bg-accent-500 tw-rounded-full tw-absolute -tw-right-5 -tw-top-7">
                <p className="tw-absolute tw-bottom-6 tw-left-7 tw-text-white tw-text-2xl tw-m-0">
                  {item.icon}
                </p>
              </div>

              {/* Title */}
              <div className="tw-font-bold tw-text-accent-500 tw-text-xl tw-pt-6">
                {item.title}
              </div>

              {/* Description */}
              <p className="tw-text-sm tw-text-zinc-500 tw-leading-6">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="tw-flex tw-justify-center tw-items-center">
        <button
          className=" tw-rounded-lg tw-bg-transparent"
          style={{ border: "2px solid var(--accent-500)" }}
        >
          <span className="tw-inline-block tw-font-bold tw-text-accent-500 tw-px-10 tw-py-3 tw-rounded-md tw-shadow-md tw-transition-transform tw-duration-300 hover:tw-scale-105 tw-uppercase">
            Start Hiring Now
          </span>
        </button>
      </div>
    </section>
  );
};

export default WhyPickKeyMedsolutions;
