"use client";

import { motion } from "framer-motion";
import Infographic from "./Infographic";
import SectionHeading from "@/components/ui/section-heading";

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="tw-py-20 tw-mb-20 tw-relative tw-overflow-hidden tw-bg-white"
    >
      <div className="tw-container tw-mx-auto tw-px-4 tw-relative tw-z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="tw-text-center tw-mb-16"
        >
          <h2 className="tw-mx-auto tw-text-center tw-text-3xl md:tw-text-5xl tw-font-bold tw-font-serif tw-text-foreground tw-mb-10">
            How We Differentiate Ourselves as a&nbsp;
            <br />
            <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
              Medical Coding Services
            </span>
            &nbsp; Company in the USA
          </h2>
          <p className="tw-text-lg tw-text-muted-foreground tw-max-w-3xl tw-mx-auto tw-font-serif">
            Key MedSolutions has gained recognition as a leading&nbsp;
            <span className="tw-font-bold">
              Medical Coding Services Company in the USA
            </span>
            &nbsp;for several reasons
          </p>
        </motion.div>

        <div className="tw-relative tw-z-0">
          <Infographic />
        </div>
      </div>
    </section>
  );
}
