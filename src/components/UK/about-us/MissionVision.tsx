"use client";

import { motion } from "framer-motion";
import {
  Target,
  Users,
  Zap,
  CheckCircle,
  BarChart3,
  Clock,
  DollarSign,
  Search,
  Filter,
  Calendar,
  ArrowRight,
  Briefcase,
  Handshake,
  Puzzle,
  Layers,
  Cpu,
  BadgeCheck,
  ShieldCheck,
  MapPin,
} from "lucide-react";

const RecruitmentServices = () => {
  const services = [
    {
      icon: <Target className="tw-w-6 tw-h-6" />,
      title: "End-to-End RPO",
      description:
        "We’ll run your whole recruitment process, start to finish, so you don’t have to worry.",
      color: "tw-bg-blue-50 tw-border-blue-200",
      iconColor: "tw-text-blue-600",
      tag: "Most Popular",
    },
    {
      icon: <Handshake className="tw-w-6 tw-h-6" />,
      title: "Co-Sourced RPO",
      description:
        "Prefer to stay hands-on? We’ll team up with your HR, working right alongside you.",

      color: "tw-bg-purple-50 tw-border-purple-200",
      iconColor: "tw-text-purple-600",
    },
    {
      icon: <Puzzle className="tw-w-6 tw-h-6" />,
      title: "Project-Based RPO",
      description:
        "Have a specific recruitment project? We step in wherever and whenever you need us.",

      color: "tw-bg-green-50 tw-border-green-200",
      iconColor: "tw-text-green-600",
    },
  ];

  const aboutUsFeatures = [
    {
      id: 1,
      title: "UK Market Know-How",
      description:
        "We know the local talent pool, so you’ll always get the best fits for your roles.",
      icon: MapPin,
    },
    {
      id: 2,
      title: "Flexible Solutions",
      description:
        "Whether you’re a small start-up or a large company, we’ve got options that can flex with you.",
      icon: Layers,
    },
    {
      id: 3,
      title: "Embedded Teams",
      description:
        "Our team becomes part of your team, learning your company’s culture and truly caring about your success.",
      icon: Users,
    },
    {
      id: 4,
      title: "Smart Technology",
      description:
        "We use data and tech to make hiring smarter and more efficient.",
      icon: Cpu,
    },
    {
      id: 5,
      title: "Transparent Pricing",
      description: "No surprises; just clear costs and real value.",
      icon: BadgeCheck,
    },
    {
      id: 6,
      title: "Focus on Compliance and Quality",
      description:
        "We operate fully within Global employment regulations, every time, and ensure top-notch standards throughout.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="tw-py-20 sm:tw-px-4  tw-bg-gradient-to-b tw-from-white tw-to-gray-50 tw-overflow-hidden">
      {/* Background Pattern */}
      <div className="tw-absolute tw-inset-0 tw-bg-grid tw-bg-[size:40px_40px] tw-bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] tw-opacity-10" />

      <div className="tw-container sm:tw-px-[32px] tw-px-4 tw-mx-auto tw-relative tw-z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="tw-text-center tw-max-w-3xl tw-mx-auto tw-mb-16"
        >
          <div className="tw-text-center tw-space-y-3 tw-mb-8">
            <p className="tw-text-sm tw-font-semibold tw-tracking-[0.18em] tw-uppercase tw-text-accent-600">
              What We Do:
            </p>
            <h2 className="tw-text-2xl md:tw-text-3xl lg:tw-text-4xl tw-font-bold tw-text-slate-900">
              Our Recruitment Services
            </h2>
          </div>

          <p className="tw-text-xl tw-text-gray-600 tw-leading-relaxed">
            Wondering how we help? As a leading Recruitment Process Outsourcing
            Services Company (RPO Company), we manage the full recruitment
            cycle; everything from finding great candidates and thorough
            screening to streamlined interviews, offers, and day-one onboarding.
            You’ll never miss a step.
          </p>
          <p className="tw-text-xl tw-text-gray-600 tw-leading-relaxed">
            Here’s how we can work together, depending on your needs:
          </p>
        </motion.div>

        {/* Recruitment Process Flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="tw-mb-20"
        >
          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -5 }}
                className={`tw-relative tw-rounded-2xl border-2 tw-p-8 tw-h-full tw-transition-all tw-duration-300 hover:tw-shadow-xl ${service.color}`}
              >
                <div
                  className={`tw-inline-flex tw-items-center tw-justify-center tw-w-14 tw-h-14 tw-rounded-2xl tw-bg-white tw-shadow-sm tw-mb-6 ${service.iconColor}`}
                >
                  {service.icon}
                </div>

                <h4 className="tw-text-xl tw-font-bold tw-text-gray-900 tw-mb-3">
                  {service.title}
                </h4>
                <p className="tw-text-gray-700 tw-mb-6">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="tw-rounded-lg tw-p-6 border tw-border-accent-500 tw-bg-accent-500/5 tw-text-md tw-font-semibold tw-text-accent-700 tw-shadow-md tw-shadow-accent-200 tw-mt-8">
            What does that mean for you? Faster hiring, consistently strong
            candidates, and real savings, for your time and your budget.
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="tw-bg-gradient-to-r tw-from-gray-900 tw-to-accent-900 tw-rounded-2xl sm:tw-p-8 tw-p-4 md:tw-p-12"
        >
          <div className="tw-text-center tw-space-y-3 tw-mb-8">
            <p className="tw-text-sm tw-font-semibold tw-tracking-[0.18em] tw-uppercase tw-text-accent-600">
              Why Choose Key Medsolutions UK?
            </p>
            <h2 className="tw-text-2xl lg:tw-text-3xl tw-font-bold tw-text-white tw-max-w-4xl tw-mx-auto">
              Choosing a recruitment partner is a big decision, and we
              completely understand. Here’s what sets us apart:
            </h2>
          </div>

          <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-6">
            {aboutUsFeatures.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="tw-bg-white/10 tw-backdrop-blur-sm tw-rounded-xl tw-transition-all tw-duration-300 hover:tw-shadow-lg hover:tw-shadow-white/10 sm:tw-p-6 tw-p-4 border tw-border-white/20"
              >
                <div className="tw-inline-flex tw-items-center tw-justify-center tw-w-12 tw-h-12 tw-bg-gradient-to-br tw-from-accent-400 tw-to-accent-700 tw-rounded-lg tw-mb-4">
                  <benefit.icon className="tw-w-6 tw-h-6 tw-text-white" />
                </div>

                <div className="tw-flex tw-items-end tw-gap-2 tw-mb-3">
                  <h4 className="tw-text-xl tw-font-bold tw-text-white">
                    {benefit.title}
                  </h4>
                </div>

                <p className="tw-text-blue-100">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Summary Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-mt-8 tw-border-t tw-border-white/20 tw-text-center"
          >
            <p className="tw-text-lg tw-text-blue-200">
              But most of all, we build genuine partnerships. You’re never just
              a “client”; we’re here to help you reach new heights.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default RecruitmentServices;
