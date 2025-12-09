"use client";

import React from "react";
import { PiggyBank, Globe, Workflow, Layers } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="tw-w-full tw-bg-white tw-py-16">
      <div className="tw-container tw-mx-auto tw-flex tw-flex-col tw-gap-y-10">
        {/* Section Heading */}
        <div className="tw-text-center tw-space-y-3">
          <p className="tw-text-sm tw-font-semibold tw-tracking-[0.18em] tw-uppercase tw-text-accent-600">
            Why Choose Us as Your Back Office Outsourcing Partner?
          </p>

          <p className="tw-text-slate-600 tw-max-w-2xl tw-mx-auto tw-text-sm md:tw-text-base">
            As a top Global Back Office Administrative Agency, we provide expert
            support with a local focus, making us one of the top back office
            administrative service providers in the UK and worldwide.
          </p>
        </div>

        {/* 3 Feature Rows */}
        <div className="tw-flex tw-flex-col tw-gap-y-8">
          {/* Global Talent */}
          <div
            className="tw-grid md:tw-grid-cols-2 tw-grid-cols-1 tw-items-start tw-gap-6  tw-pb-6"
            style={{ borderBottom: "2px solid gray" }}
          >
            <div className="tw-flex tw-items-center tw-gap-x-3">
              <div
                className="tw-inline-flex tw-items-center tw-justify-center tw-p-2 tw-rounded-full tw-bg-blue-50"
                style={{ border: "1px solid var(--accent-500)" }}
              >
                <PiggyBank className="tw-w-8 tw-h-8 tw-text-accent-500" />
              </div>
              <span className="tw-text-2xl tw-font-semibold tw-text-accent-500">
                Cost Efficiency
              </span>
            </div>
            <p className="tw-text-sm md:tw-text-base tw-text-black tw-leading-relaxed">
              Achieve up to 60% in operational savings without the overhead of
              hiring and training.
            </p>
          </div>

          {/* Tech-Driven */}
          <div
            className="tw-grid md:tw-grid-cols-2 tw-grid-cols-1 tw-items-start tw-gap-6  tw-pb-6"
            style={{ borderBottom: "2px solid gray" }}
          >
            <div className="tw-flex tw-items-center tw-gap-x-3">
              <div
                className="tw-inline-flex tw-items-center tw-justify-center tw-p-2 tw-rounded-full tw-bg-emerald-50"
                style={{ border: "1px solid var(--accent-500)" }}
              >
                <Globe className="tw-w-8 tw-h-8 tw-text-accent-500" />
              </div>
              <span className="tw-text-2xl tw-font-semibold tw-text-accent-500">
                Global Expertise, UK Focus
              </span>
            </div>
            <p className="tw-text-sm md:tw-text-base tw-text-black tw-leading-relaxed">
              We support businesses across the UK, Canada, United States,
              Germany, France, Netherlands, India, Philippines, Poland, China,
              Japan and other major countries, with dedicated local and global
              services.
            </p>
          </div>

          {/* Partner */}
          <div
            className="tw-grid md:tw-grid-cols-2 tw-grid-cols-1 tw-items-start tw-gap-6  tw-pb-6"
            style={{ borderBottom: "2px solid gray" }}
          >
            <div className="tw-flex tw-items-center tw-gap-x-3">
              <div
                className="tw-inline-flex tw-items-center tw-justify-center tw-p-2 tw-rounded-full tw-bg-indigo-50"
                style={{ border: "1px solid var(--accent-500)" }}
              >
                <Workflow className="tw-w-8 tw-h-8  tw-text-accent-500" />
              </div>
              <span className="tw-text-2xl tw-font-semibold tw-text-accent-500">
                Seamless Integration
              </span>
            </div>
            <p className="tw-text-sm md:tw-text-base tw-text-black tw-leading-relaxed">
              Our remote teams work as a natural extension of your in-house
              staff.
            </p>
          </div>

          <div
            className="tw-grid md:tw-grid-cols-2 tw-grid-cols-1 tw-items-start tw-gap-6  tw-pb-6"
            style={{ borderBottom: "2px solid gray" }}
          >
            <div className="tw-flex tw-items-center tw-gap-x-3">
              <div
                className="tw-inline-flex tw-items-center tw-justify-center tw-p-2 tw-rounded-full tw-bg-indigo-50"
                style={{ border: "1px solid var(--accent-500)" }}
              >
                <Layers className="tw-w-8 tw-h-8  tw-text-accent-500" />
              </div>
              <span className="tw-text-2xl tw-font-semibold tw-text-accent-500">
                Scalability & Flexibility
              </span>
            </div>
            <p className="tw-text-sm md:tw-text-base tw-text-black tw-leading-relaxed">
              Easily scale your support up or down to match your business needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
