"use client";
import PricingPlans from "@/components/pricing/PricingPlans";
import ProcessSteps from "@/components/services/ProcessSteps";
import ScrollReveal from "@/components/services/ScrollReveal";
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Breadcrumb from "@/components/ui/breadcrumb";
import { services } from "@/data/services";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BarChart3,
  Brain,
  Calendar,
  CheckCircle,
  Clock,
  Globe,
  Heart,
  Mail,
  Phone,
  Rocket,
  Shield,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { useMediaQuery } from "usehooks-ts";
import ReclaimYourTime from "./ReclaimYourTime";
import ExpansiveServices from "./ExpansiveServices";
import ProcessSection from "./ProcessSection";
import BoostRevenue from "./BoostRevenue";
import AccelerateYourRevenue from "./AccelerateYourRevenue";

const Services = () => {
  const title =
    "End-to-end Medical Billing Services and RCM Solutions for Healthcare Providers";
  const path = "/our-services";

  return (
    <>
      <div className="page-content bg-white aboutus tw-overflow-hidden">
        {/* <Breadcrumb title={title} breadcrumb={[{ label: title, href: path }]} /> */}

        <section className="section-area section-sp1">
          <div className="tw-min-h-screen tw-bg-background tw-overflow-hidden tw-px-4">
            {/* Main Content Section */}
            <ReclaimYourTime />
            <ExpansiveServices />
            {/* Process Section */}
            <ProcessSection />
            <BoostRevenue />
            <AccelerateYourRevenue />
          </div>
          {/* <PricingPlans /> */}
        </section>
      </div>
    </>
  );
};

export default Services;
