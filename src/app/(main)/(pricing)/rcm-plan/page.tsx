/* eslint-disable react/no-unescaped-entities */
import Breadcrumb from "@/components/ui/breadcrumb";
import React from "react";
import RCMPlansList from "@/components/pricing/rcm-plan";
import WhyChooseOurMedicalBilling from "@/components/services/common/WhyChooseOurMedicalBilling";

const RCMPlan = () => {
  const title = "RCM Plan";
  const path = "/rcm-plan";

  const WhyChooses = [
    {
      icon: "💡",
      label:
        " Real humans, not bots – every ticket is reviewed by a trained specialist",
      className:
        "!tw-border-2 !tw-border-blue-300 tw-bg-blue-100 after:!tw-bg-blue-300",
    },

    {
      icon: "🔄",
      label: "Faster turnaround with optional rush service",
      className:
        "!tw-border-2 !tw-border-yellow-300 tw-bg-yellow-100 after:!tw-bg-yellow-300",
    },

    {
      icon: "🧩",
      label: " Flexible pricing – pay only for what you need",
      className:
        "!tw-border-2 !tw-border-indigo-300 tw-bg-indigo-100 after:!tw-bg-indigo-300",
    },
    {
      icon: "🔒",
      label: "HIPAA-compliant processes from end to end",
      className:
        "!tw-border-2 !tw-border-gray-300 tw-bg-gray-100 after:!tw-bg-gray-300",
    },
  ];

  return (
    <div className="tw-page-content tw-bg-white">
      <Breadcrumb title={title} breadcrumb={[{ label: title, href: path }]} />

      <section
        className="section-area section-sp5 work-area"
        style={{
          backgroundImage: `url(images/background/line-bg1.png)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "100%",
          marginTop: "8rem",
        }}
      >
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
              We keep things simple: each verification request counts as one
              ticket. A ticket equals one patient verification. Whether you need
              a full breakdown or just eligibility data, our pricing adjusts
              based on the depth of information and urgency of your request.
            </p>
          </div>

          <RCMPlansList />
        </div>
        <WhyChooseOurMedicalBilling
          title="Why Practices Trust Key Medsolutions"
          data={WhyChooses}
        />
      </section>
    </div>
  );
};

export default RCMPlan;
