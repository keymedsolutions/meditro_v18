"use client";

import Breadcrumb from "@/components/ui/breadcrumb";
import React from "react";
import RCMPlansList from "@/components/pricing/rcm-plan";
import WhyChooseOurMedicalBilling from "@/components/services/common/WhyChooseOurMedicalBilling";
import MedicalBillingSolutions from "@/components/rcm-plan/MedicalBillingSolutions";
import { motion } from "framer-motion";
import { WhatIsIncluded } from "@/components/rcm-plan/WhatIsIncluded";
import TrustReasons from "@/components/rcm-plan/TrustReasons";
import RcmPlan from "@/components/rcm-plan/RcmPlan";

const RCMPlan = () => {
  const title = "RCM Plan";
  const path = "/rcm-plans";

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
   <RcmPlan/>
  );
};

export default RCMPlan;
