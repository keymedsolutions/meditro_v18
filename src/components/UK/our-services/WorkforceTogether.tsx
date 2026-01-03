"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PartnerWithUs() {
  return (
    <section className="tw-relative tw-w-full tw-py-16 sm:tw-py-24 tw-flex tw-items-center tw-justify-center tw-overflow-hidden tw-mb-12">
      <div className="tw-container tw-mx-auto tw-max-w-6xl tw-px-4 md:tw-px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Card */}
          <div
            className="tw-relative tw-rounded-[32px] tw-overflow-hidden"
            style={{
              border: "1px solid rgba(203,213,225,0.9)",
              boxShadow:
                "0 24px 60px rgba(15,23,42,0.14), 0 0 0 1px rgba(255,255,255,0.9)",
            }}
          >
            {/* Background Image (FULL CARD) */}
            <div className="tw-absolute tw-inset-0">
              <Image
                src="/assets/images/about-us/PartnerWithUs.jpg"
                alt="Partner With Key Medsolutions UK"
                fill
                priority
                className="tw-object-cover"
              />
              {/* Overlay for readability */}
              <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-t tw-from-accent-500/80 tw-via-black/70 tw-to-black/90" />
            </div>

            {/* Content ON TOP of image */}
            <div className="tw-relative tw-z-10 tw-px-6 sm:tw-px-10 md:tw-px-14 tw-py-12 md:tw-py-16">
              <div className="tw-max-w-3xl tw-mx-auto tw-text-center">
                {/* Accent divider */}
                <span className="tw-inline-block tw-h-1 tw-w-16 tw-rounded-full tw-bg-accent-500 tw-mb-6" />

                <h2 className="tw-text-accent-400 tw-text-2xl sm:tw-text-3xl md:tw-text-4xl tw-font-semibold tw-leading-snug tw-mb-5">
                  Let’s Build Your Workforce Together
                </h2>

                <p className="tw-text-white/80 tw-text-base sm:tw-text-lg tw-leading-relaxed">
                  Everything we do is about helping you work smarter, not
                  harder. We combine technology, local knowledge, and a friendly
                  approach to recruitment. Your success is our success.
                </p>
                <p className="tw-text-white/80 tw-text-base sm:tw-text-lg tw-leading-relaxed">
                  If you’re ready to make hiring easier, let’s discuss your
                  needs. It all starts with a conversation. Whether you need a
                  little help or a complete solution, we’re by your side.
                  Schedule a consultation with our experts. We’ll listen, we’ll
                  plan, and we’ll deliver.
                </p>
                <p className="tw-text-white/80 tw-text-base sm:tw-text-lg tw-leading-relaxed">
                  Strong teams build strong businesses. Let’s get started,
                  together.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
