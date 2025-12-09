"use client";

import React from "react";
import { Globe2, Cpu, Users } from "lucide-react";

const MeetKeyMedsolutions = () => {
  return (
    <section className="tw-w-full tw-bg-white tw-py-16">
      <div className="tw-container tw-mx-auto tw-flex tw-flex-col tw-gap-y-10">
        {/* Section Heading */}
        <div className="tw-text-center tw-space-y-3">
          <p className="tw-text-sm tw-font-semibold tw-tracking-[0.18em] tw-uppercase tw-text-accent-600">
            Meet Key Medsolutions
          </p>
          <h2 className="tw-text-2xl md:tw-text-3xl lg:tw-text-4xl tw-font-bold tw-text-slate-900">
            Modern, Scalable Talent for Global Businesses
          </h2>
          <p className="tw-text-slate-600 tw-max-w-2xl tw-mx-auto tw-text-sm md:tw-text-base">
            We combine global reach, technology, and deep partnership to build
            high-performing teams that feel truly connected to your business.
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
                <Globe2 className="tw-w-8 tw-h-8 tw-text-accent-500" />
              </div>
              <span className="tw-text-2xl tw-font-semibold tw-text-accent-500">
                Global Talent
              </span>
            </div>
            <p className="tw-text-sm md:tw-text-base tw-text-black tw-leading-relaxed">
              For us, talent knows no boundaries, and neither should your
              business. That’s why we set up Key Medsolutions: to connect global
              companies with the world’s best people, no matter where they’re
              based.
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
                <Cpu className="tw-w-8 tw-h-8 tw-text-accent-500" />
              </div>
              <span className="tw-text-2xl tw-font-semibold tw-text-accent-500">
                Tech-Driven
              </span>
            </div>
            <p className="tw-text-sm md:tw-text-base tw-text-black tw-leading-relaxed">
              We’re not the typical high-street recruitment shop. We're
              technology-focused, people-centred, and always thinking ahead.
              While many IT recruitment agencies in London focus only on local
              talent (and charge a premium for it), we open up new
              possibilities. Expect the personal touch and reliability of a
              local partner, with the muscle and reach of a global leader.
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
                <Users className="tw-w-8 tw-h-8  tw-text-accent-500" />
              </div>
              <span className="tw-text-2xl tw-font-semibold tw-text-accent-500">
                A True Partner
              </span>
            </div>
            <p className="tw-text-sm md:tw-text-base tw-text-black tw-leading-relaxed">
              Our teams blend right in with yours, keep your hours, use your
              tools, and align with your company culture. Whether you’re after
              high-volume hiring or hunting for niche talent in tech and
              digital, we know your world and get you the results you need. With
              us, you’re gaining a partner, not just another supplier.
            </p>
          </div>
        </div>
        <div className="tw-flex tw-justify-center tw-items-center">
          <button
            className=" tw-rounded-lg tw-bg-transparent"
            style={{ border: "2px solid var(--accent-500)" }}
          >
            <span className="tw-inline-block tw-font-bold tw-text-accent-500 tw-px-10 tw-py-3 tw-rounded-md tw-shadow-md tw-transition-transform tw-duration-300 hover:tw-scale-105 tw-uppercase">
              Learn More About Us
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default MeetKeyMedsolutions;
