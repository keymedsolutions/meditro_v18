"use client";
import React, { useState } from "react";
import RCMPlansList from "./rcm-plan";
import PricingPlans from "./PricingPlans";

const PlansAndPricing = () => {
  const [activeTab, setActiveTab] = useState("price");

  return (
    <div className="tw-w-full tw-my-8">
      <div className="tw-flex tw-justify-center">
        <ul
          className="tw-flex tw-gap-x-1 tw-px-1.5 tw-py-1.5 tw-list-none tw-rounded-full tw-bg-purple-200/70"
          role="list"
        >
          {["price", "RCM Plan"].map((tab) => (
            <li key={tab} className="tw-w-max">
              <button
                className={`tw-flex tw-font-semibold tw-text-md tw-items-center tw-justify-center tw-px-4 tw-py-2 tw-text-sm tw-transition-all tw-ease-in-out tw-border-0 tw-rounded-full tw-cursor-pointer tw-bg-inherit ${
                  activeTab === tab
                    ? "tw-text-slate-800 !tw-bg-white"
                    : "tw-text-purple-700"
                }`}
                role="tab"
                aria-selected={activeTab === tab}
                aria-controls={tab}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className=" tw-relative before:tw-content-[''] before:tw-absolute before:tw-inset-0 before:tw-rounded-2xl before:tw-bg-purple-300 before:tw-blur-3xl before:tw-opacity-30 before:tw-z-[-1]">
        {activeTab === "RCM Plan" && (
          <div id="RCM Plan" role="tabpanel">
            <div className="tw-container plan-sections">
              <div className="heading-bx text-center">
                <h6 className="title-ext text-secondary">RCM Plan</h6>
                <h2 className="tw-mb-4 tw-font-display tw-text-3xl tw-font-extrabold tw-tracking-tight sm:tw-text-3xl md:tw-text-4xl">
                  Key Medsolutions –
                  <span className="tw-bg-gradient-to-r tw-from-purple-600 tw-to-primary tw-bg-clip-text tw-text-transparent">
                    Transparent, Per-Ticket Pricing
                  </span>
                </h2>
                <p>
                  We believe in simplicity and transparency. Each verification
                  request is counted as one ticket—one ticket equals one patient
                  verification. Whether you need a comprehensive breakdown or
                  just basic eligibility details, our pricing flexes to match
                  the depth and urgency of your request.
                </p>
              </div>

              <RCMPlansList />
            </div>
          </div>
        )}
        {activeTab === "price" && (
          <div id="price" className="tw-px-2" role="tabpanel">
            <PricingPlans isHomePage={true} />
          </div>
        )}
      </div>
    </div>
  );
};

export default PlansAndPricing;
