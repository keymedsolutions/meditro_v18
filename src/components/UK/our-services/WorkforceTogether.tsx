"use client";

import Image from "next/image";

export default function WorkforceTogether() {
  return (
    <section className="tw-relative tw-w-full sm:tw-h-[50vh] sm:tw-py-0 tw-py-10 tw-flex tw-items-center tw-justify-center tw-overflow-hidden tw-mb-10">
      {/* Background Wrapper WITH gradient */}
      <div
        className="tw-absolute tw-inset-0 tw-z-0 tw-overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #193754 0%, #193754 40%, rgba(6,42,38,0) 100%)",
          backgroundBlendMode: "multiply",
        }}
      >
        <Image
          src="/assets/images/about-us/PartnerWithUs.jpg"
          alt="Partner With Us"
          fill
          priority
          className="tw-object-cover tw-w-full tw-h-full"
          style={{ mixBlendMode: "multiply" }} // key for proper blending
        />
      </div>

      {/* Content */}
      <div className="tw-relative tw-z-10 tw-max-w-6xl tw-px-6">
        <h2 className="tw-text-white tw-text-3xl md:tw-text-5xl tw-font-semibold tw-leading-snug tw-mb-5">
          Let’s Build Your Workforce Together
        </h2>

        <p className="tw-text-white/90 tw-text-base md:tw-text-lg tw-leading-relaxed">
          Everything we do is about helping you work smarter, not harder. We
          combine technology, local knowledge, and a friendly approach to
          recruitment. Your success is our success.
        </p>
        <p className="tw-text-white/90 tw-text-base md:tw-text-lg tw-leading-relaxed">
          If you’re ready to make hiring easier, let’s discuss your needs. It
          all starts with a conversation. Whether you need a little help or a
          complete solution, we’re by your side. Schedule a consultation with
          our experts. We’ll listen, we’ll plan, and we’ll deliver.
        </p>
        <p className="tw-text-white/90 tw-text-base md:tw-text-lg tw-leading-relaxed">
          Strong teams build strong businesses. Let’s get started, together.
        </p>
      </div>
    </section>
  );
}
