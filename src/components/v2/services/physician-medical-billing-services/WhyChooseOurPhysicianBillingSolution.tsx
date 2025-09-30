import React from "react";
import { motion } from "framer-motion";
import { DollarSign, FileCheck, Settings, ShieldCheck, Workflow } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/ui/card";
import { APP_PATH } from "@/data/PATH_APP";
import Link from "next/link";

const WhyChooseOurPhysicianBillingSolution = () => {
  const features = [
    {
      icon: <DollarSign className="tw-w-12 tw-h-12 tw-text-accent-500 group-hover:tw-text-white tw-mb-4" />,
      title: "Accelerate Your Reimbursements",
      bgColor: "tw-bg-blue-200",
      description:
        "Enjoy faster payments and fewer delays with our streamlined claims processing and proactive payer follow-up.",
    },
    {
      icon: <FileCheck className="tw-w-12 tw-h-12 tw-text-accent-500 group-hover:tw-text-white tw-mb-4" />,
      title: "Reduce Denials, Maximize Revenue",
      bgColor: "tw-bg-green-200",
      description:
        "Our error-free processes and robust denial management mean more of your claims get paid fully and promptly.",
    },
    {
      icon: <ShieldCheck className="tw-w-12 tw-h-12 tw-text-accent-500 group-hover:tw-text-white tw-mb-4" />,
      title: "Advanced Compliance",
      bgColor: "tw-bg-purple-50",
      description:
        "We adhere to the strictest HIPAA standards, ensuring patient data privacy and regulatory peace of mind.",
    },
    {
      icon: <Workflow className="tw-w-12 tw-h-12 tw-text-accent-500 group-hover:tw-text-white tw-mb-4" />,
      title: "Seamless Workflow Integration",
      bgColor: "tw-bg-orange-200",
      description:
        "Our flexible systems are designed to blend into your workflows, whether you're a solo practitioner or part of a large physician group.",
    },
    {
      icon: <Settings className="tw-w-12 tw-h-12 tw-text-accent-500 group-hover:tw-text-white tw-mb-4" />,
      title: "Customizable Billing Solutions",
      bgColor: "tw-bg-pink-200",
      description:
        "Adaptable services that scale with your needs, supporting specialties, independent practices, and multi-specialty clinics.",
    },
  ];
  return (
    <section className="tw-py-20 tw-bg-[radial-gradient(ellipse_at_center,_#e0e1fb_0%,_transparent_70%)]">
      <div className="tw-container tw-mx-auto tw-px-4">
        <motion.div
          className="tw-text-center tw-mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="tw-text-primary tw-text-3xl md:tw-text-4xl tw-font-bold  tw-mb-4 font-space-grotesk">
            Why Choose Our Physician Billing Solution?
          </h2>
          <p className="tw-text-xl tw-text-muted-foreground tw-max-w-2xl tw-mx-auto font-dm-sans">
            Partnering with&nbsp;<Link href={APP_PATH.home.path} className="tw-font-semibold">Key MedSolutions</Link>&nbsp;means gaining a reliable ally
            committed to your financial success. Our team of certified physician
            billing specialists leverages the latest in billing technology to
            ensure accuracy, efficiency, and total transparency throughout the
            billing cycle.
          </p>
        </motion.div>
        <motion.div
          className="tw-text-center tw-mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="tw-text-3xl md:tw-text-5xl tw-font-black tw-text-primary tw-mb-8 tw-leading-tight">
            Key Advantages of Our <br />
            <span className="tw-text-gradient">
              Physician Medical Billing Services
            </span>
          </h2>
        </motion.div>
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8">
          {features.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
              className=""
            >
              <Card className="tw-h-full border-2 tw-border-accent-500 hover:tw-border-white hover:tw-shadow-lg tw-transition-all tw-group hover:tw-bg-accent-500 hover:tw-text-white tw-duration-300" >
                <CardHeader className="tw-flex tw-items-center tw-gap-x-2">
                 
                    {benefit.icon}
                  
                  <CardTitle className="tw-text-xl tw-font-bold group-hover:tw-text-white tw-text-foreground font-space-grotesk tw-text-center">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="tw-text-muted-foreground group-hover:tw-text-white tw-text-center font-dm-sans">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseOurPhysicianBillingSolution;
