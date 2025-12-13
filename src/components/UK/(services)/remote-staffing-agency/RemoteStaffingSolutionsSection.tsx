"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const RemoteStaffingSolutionsSection: React.FC = () => {
  return (
    <section className="tw-relative tw-w-full tw-overflow-hidden tw-py-24">
      {/* ================= LIGHT BACKGROUND IMAGE ================= */}
      <div className="tw-absolute tw-inset-0 tw-z-0 tw-opacity-90 tw-pointer-events-none">
        <Image
          src="/assets/images/remote-staffing-agency/remote-teams-bg.jpg" // <-- your image
          alt=""
          fill
          className="tw-object-cover"
        />
        <div className="tw-absolute tw-inset-0 tw-bg-white/70" />
      </div>

      {/* subtle gradient overlay */}
      {/* <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-[420px] tw-bg-gradient-to-b tw-from-white tw-via-white/90 tw-to-transparent" /> */}

      {/* floating accents */}
      <div className="tw-absolute tw-top-[18%] tw-left-[6%] tw-h-20 tw-w-20 tw-rounded-full tw-bg-accent-300/30 tw-blur-2xl rss-float-y" />
      <div className="tw-absolute tw-bottom-[22%] tw-right-[8%] tw-h-28 tw-w-28 tw-rounded-[40px] tw-border tw-border-accent-400/40 rss-rotate" />

      <div className="tw-container tw-relative tw-z-10 tw-mx-auto tw-max-w-6xl tw-px-6">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="tw-max-w-4xl tw-mb-16 tw-mx-auto"
        >
          <h2 className="tw-text-2xl sm:tw-text-3xl tw-text-center lg:tw-text-4xl tw-font-semibold tw-text-slate-900 tw-mb-4">
            Remote Staffing Solutions We Provide
          </h2>

          <p className="tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-center tw-text-slate-700">
            Our remote staffing solutions are designed to meet the needs of
            modern, fast-growing businesses. Whether you’re hiring one role or
            building a full department, we provide fully managed remote teams
            that deliver results.
          </p>
        </motion.div>

        {/* ================= SOLUTION MATRIX ================= */}
        <div className="tw-grid md:tw-grid-cols-2 tw-grid-cols-1 tw-gap-4">
          {/* A */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{ border: "1px solid var(--accent-300)" }}
            className="tw-grid tw-grid-cols-1 md:tw-grid-cols-[50px_1fr] tw-gap-2 tw-bg-white/20 tw-backdrop-blur  tw-rounded-xl tw-p-4"
          >
            <span className="tw-text-3xl tw-font-bold tw-text-accent-500">
              A
            </span>
            <div>
              <h3 className="tw-text-lg tw-font-semibold tw-text-slate-900 tw-mb-2">
                Administrative and Virtual Assistance
              </h3>
              <p className="tw-text-sm tw-text-slate-700">Virtual assistants</p>
              <p className="tw-text-sm tw-text-slate-700">Admin coordinators</p>
              <p className="tw-text-sm tw-text-slate-700">
                Data entry specialists
              </p>
            </div>
          </motion.div>

          {/* B */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{ border: "1px solid var(--accent-300)" }}
            className="tw-grid tw-grid-cols-1 md:tw-grid-cols-[50px_1fr] tw-gap-2 tw-bg-white/20 tw-backdrop-blur  tw-rounded-xl tw-p-4"
          >
            <span className="tw-text-3xl tw-font-bold tw-text-accent-500">
              B
            </span>
            <div>
              <h3 className="tw-text-lg tw-font-semibold tw-text-slate-900 tw-mb-2">
                Accounting and Finance Remote Teams
              </h3>
              <p className="tw-text-sm tw-text-slate-700">Bookkeepers</p>
              <p className="tw-text-sm tw-text-slate-700">Payroll processors</p>
              <p className="tw-text-sm tw-text-slate-700">
                Accounts receivable/payable specialists
              </p>
            </div>
          </motion.div>

          {/* C */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{ border: "1px solid var(--accent-300)" }}
            className="tw-grid tw-grid-cols-1 md:tw-grid-cols-[50px_1fr] tw-gap-2 tw-bg-white/20 tw-backdrop-blur  tw-rounded-xl tw-p-4"
          >
            <span className="tw-text-3xl tw-font-bold tw-text-accent-500">
              C
            </span>
            <div>
              <h3 className="tw-text-lg tw-font-semibold tw-text-slate-900 tw-mb-2">
                IT and Technology Remote Staffing
              </h3>
              <p className="tw-text-sm tw-text-slate-700">
                Software developers
              </p>
              <p className="tw-text-sm tw-text-slate-700">QA testers</p>
              <p className="tw-text-sm tw-text-slate-700">
                IT support specialists
              </p>
            </div>
          </motion.div>

          {/* D */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{ border: "1px solid var(--accent-300)" }}
            className="tw-grid tw-grid-cols-1 md:tw-grid-cols-[50px_1fr] tw-gap-2 tw-bg-white/20 tw-backdrop-blur  tw-rounded-xl tw-p-4"
          >
            <span className="tw-text-3xl tw-font-bold tw-text-accent-500">
              D
            </span>
            <div>
              <h3 className="tw-text-lg tw-font-semibold tw-text-slate-900 tw-mb-2">
                Marketing and Digital Operations
              </h3>
              <p className="tw-text-sm tw-text-slate-700">SEO specialists</p>
              <p className="tw-text-sm tw-text-slate-700">
                Social media managers
              </p>
              <p className="tw-text-sm tw-text-slate-700">Content creators</p>
            </div>
          </motion.div>

          {/* E */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{ border: "1px solid var(--accent-300)" }}
            className="tw-grid tw-grid-cols-1 md:tw-grid-cols-[50px_1fr] tw-gap-2 tw-bg-white/20 tw-backdrop-blur  tw-rounded-xl tw-p-4"
          >
            <span className="tw-text-3xl tw-font-bold tw-text-accent-500">
              E
            </span>
            <div>
              <h3 className="tw-text-lg tw-font-semibold tw-text-slate-900 tw-mb-2">
                Customer Support and Operations
              </h3>
              <p className="tw-text-sm tw-text-slate-700">
                Remote support representatives
              </p>
              <p className="tw-text-sm tw-text-slate-700">
                Logistics and operations coordinators
              </p>
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          style={{ border: "1px solid var(--accent-300)" }}
          className="tw-rounded-lg tw-mt-8 tw-p-6  tw-bg-accent-500/5 tw-text-md tw-font-semibold tw-text-accent-700 tw-shadow-md tw-shadow-accent-200"
        >
          With reliable remote professionals in these categories, you can scale
          operations without adding overhead or office space.
        </motion.p>
      </div>

      <style jsx>{`
        .rss-float-y {
          animation: rssFloatY 9s ease-in-out infinite;
        }
        .rss-rotate {
          animation: rssRotate 24s linear infinite;
        }

        @keyframes rssFloatY {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-24px);
          }
        }

        @keyframes rssRotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
};

export default RemoteStaffingSolutionsSection;
