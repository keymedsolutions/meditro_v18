"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/ui/card";
import {
  TrendingUp,
  Clock,
  Shield,
  DollarSign,
  Users,
  BarChart,
} from "lucide-react";

const benefits = [
  {
    icon: <TrendingUp className="tw-h-8 tw-w-8 tw-text-yellow-300" />,
    title: "Faster Reimbursements",
    description: "Clean submissions mean fewer resubmissions and delays.",
    stat: "40%",
    statLabel: "Faster Processing",
    colors: {
      bg: "tw-bg-indigo-900",
      text: "tw-text-yellow-300",
      border: "tw-border-yellow-300",
      stroke: "text-stroke-yellow",
    },
  },
  {
    icon: <DollarSign className="tw-h-8 tw-w-8 tw-text-emerald-300" />,
    title: "Improved Cash Flow",
    description: "Consistent income keeps your practice running smoothly.",
    stat: "25%",
    statLabel: "Revenue Increase",
    colors: {
      bg: "tw-bg-emerald-900",
      text: "tw-text-emerald-300",
      border: "tw-border-emerald-300",
      stroke: "text-stroke-emerald",
    },
  },
  {
    icon: <Shield className="tw-h-8 tw-w-8 tw-text-rose-300" />,
    title: "Fewer Denials",
    description:
      "Unnecessary losses are avoided by careful coding and strong denial management.",
    stat: "95%",
    statLabel: "Approval Rate",
    colors: {
      bg: "tw-bg-rose-900",
      text: "tw-text-rose-300",
      border: "tw-border-rose-300",
      stroke: "text-stroke-rose",
    },
  },
  {
    icon: <Clock className="tw-h-8 tw-w-8 tw-text-sky-300" />,
    title: "More Time for Patient Care",
    description: "Free your practice from billing delays and costly errors.",
    stat: "60%",
    statLabel: "Time Saved",
    colors: {
      bg: "tw-bg-sky-900",
      text: "tw-text-sky-300",
      border: "tw-border-sky-300",
      stroke: "text-stroke-sky",
    },
  },
  {
    icon: <Users className="tw-h-8 tw-w-8 tw-text-orange-300" />,
    title: "Scalable Services",
    description:
      "From small clinics to large networks, we have solutions that grow with your needs.",
    stat: "500+",
    statLabel: "Practices Served",
    colors: {
      bg: "tw-bg-orange-900",
      text: "tw-text-orange-300",
      border: "tw-border-orange-300",
      stroke: "text-stroke-orange",
    },
  },
  {
    icon: <BarChart className="tw-h-8 tw-w-8 tw-text-fuchsia-300" />,
    title: "HIPAA-Compliant Solutions",
    description: "Your data privacy and security are our top priorities.",
    stat: "100%",
    statLabel: "Compliance Rate",
    colors: {
      bg: "tw-bg-fuchsia-900",
      text: "tw-text-fuchsia-300",
      border: "tw-border-fuchsia-300",
      stroke: "text-stroke-fuchsia",
    },
  },
];

export function BenefitsSection() {
  return (
    <section className="tw-py-20 tw-bg-background">
      <div className="tw-container tw-mx-auto tw-px-4">
        <motion.div
          className="tw-text-center tw-mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="tw-text-4xl lg:tw-text-5xl tw-font-black tw-font-heading tw-text-foreground tw-mb-6">
            The Benefits of Outsourcing to{" "}
            <span className="tw-text-primary">Key MedSolutions</span>
          </h2>
          <p className="tw-text-xl tw-text-muted-foreground tw-max-w-3xl tw-mx-auto tw-font-body">
            Partnering with our Medical Claim Billing Company means unlocking
            these advantages for your practice.
          </p>
        </motion.div>

        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -5, rotate: 1, scale: 1.02 }}
              className={`${index % 2 === 0 ? "lg:tw-mt-8" : ""} tw-group`}
            >
              {/* <Card className="tw-h-full border tw-bg-gradient-to-br tw-from-card tw-to-muted/50 tw-transition-all tw-duration-500 tw-group-hover:tw-shadow-2xl tw-group-hover:tw-border-primary/50 tw-overflow-hidden tw-relative">
                <motion.div
                  className="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-primary/5 tw-to-accent/5 tw-opacity-0 tw-group-hover:tw-opacity-100 tw-transition-opacity tw-duration-300"
                  initial={false}
                />

                <CardContent className="!tw-p-8 tw-relative tw-z-10">
                  <motion.div
                    className="tw-w-16 tw-h-16 tw-bg-gradient-to-br tw-from-primary tw-to-accent tw-rounded-2xl tw-flex tw-items-center tw-justify-center tw-mb-6 tw-group-hover:tw-scale-110 tw-transition-transform tw-duration-300"
                    whileHover={{ rotate: 10 }}
                  >
                    <benefit.icon className="tw-w-8 tw-h-8 tw-text-white" />
                  </motion.div>

                  <div className="tw-mb-4">
                    <motion.div
                      className="tw-text-3xl tw-font-black tw-font-heading tw-text-primary tw-mb-1"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      {benefit.stat}
                    </motion.div>
                    <div className="tw-text-sm tw-text-muted-foreground tw-font-body tw-mb-3">{benefit.statLabel}</div>
                  </div>

                  <h3 className="tw-text-xl tw-font-bold tw-font-heading tw-text-foreground tw-mb-3 tw-group-hover:tw-text-primary tw-transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="tw-text-muted-foreground tw-font-body tw-leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card> */}
              <div className=" tw-h-full" key={index}>
                <div className="work-bx !tw-bg-indigo-900 tw-relative rcm_stat_card tw-rounded-2xl tw-shadow-xl tw-p-6">
                  <div className="tw-flex tw-items-end tw-gap-5 tw-mb-5 ">
                    <p
                      className={`!tw-m-0 tw-font-bold ${benefit.colors.text} tw-text-[20px]`}
                    >
                      {benefit.title}
                    </p>

                    {/* 👉 Dynamic Tailwind Color Class */}
                    <div
                      className={`work-num-bx  !tw-text-[60px] !tw-mb-0 ${benefit.colors.text} ${benefit.colors.stroke} `}
                    >
                      {benefit.stat}
                    </div>
                  </div>

                  <div className="work-content tw-flex tw-items-center">
                    <div>
                      <h6 className="tw-mb-1 tw-text-white">{benefit.statLabel}</h6>

                      <p className="tw-text-white tw-text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Right Chart */}
                  <div
                    className={`tw-inline-block tw-p-2  tw-rounded-lg border ${benefit.colors.border}`}
                  >
                    {benefit.icon}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
