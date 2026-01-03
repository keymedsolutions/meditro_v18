import { APP_PATH } from "@/data/PATH_APP";
import Link from "next/link";
import React from "react";

const IndustriesWeServe = () => {
  const industries = [
    {
      title: "Technology & IT",
    },

    { title: "Engineering" },
    { title: "Finance & Accounting" },
    { title: "Healthcare" },
    { title: "Manufacturing" },
    { title: "Retail & Ecommerce" },
    { title: "Startups & Scaleups" },
  ];

  return (
    <section className="tw-w-full tw-bg-white tw-py-16">
      <div className="tw-container tw-mx-auto tw-flex tw-flex-col tw-gap-y-16">
        {/* Section Heading */}
        <div className="tw-text-center tw-space-y-3">
          <Link
            href={APP_PATH.services.industries.path}
            className=" tw-text-inherit active:tw-text-inherit focus:tw-text-inherit"
          >
            <p className="tw-text-sm tw-font-semibold tw-tracking-[0.18em] tw-uppercase tw-text-accent-600">
              Industries We Serve
            </p>
          </Link>
          <p className="tw-text-slate-600 tw-max-w-2xl tw-mx-auto tw-text-sm md:tw-text-base">
            We’re proud to work with businesses across a variety of industries,
            including:
          </p>
        </div>

        {/* Card Grid */}
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-x-8 tw-gap-y-16 tw-items-start tw-pb-6">
          {industries.map((item, index) => (
            <div
              key={index}
              className="tw-relative tw-flex tw-flex-col tw-gap-y-4 sm:tw-p-12 tw-p-8 border tw-border-accent-500 tw-rounded-lg tw-h-full 
             tw-shadow-lg tw-shadow-accent-200"
            >
              {/* NUMBER TAG */}
              <div className="tw-bg-accent-500 tw-text-white tw-rounded-lg sm:tw-p-6 tw-p-4 tw-inline-block tw-absolute tw-top-0 sm:tw-left-[3.15rem] tw-left-[2.2rem] tw-translate-x-[-5px] tw-translate-y-[-50%]">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* TITLE */}
              <div className="tw-text-md tw-font-bold tw-text-black">
                {item.title}
              </div>
            </div>
          ))}
        </div>
        <div className="tw-rounded-lg tw-p-6 border tw-border-accent-500 tw-bg-accent-500/5 tw-text-md tw-font-semibold tw-text-accent-700 tw-shadow-md tw-shadow-accent-200">
          No matter your industry, we’ll help you find the talent you need to
          succeed.
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;
