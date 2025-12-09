"use client";

import Image from "next/image";

export default function PartnerWithUs() {
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
          Your Invitation to Partner With Us
        </h2>

        <p className="tw-text-white/90 tw-text-base md:tw-text-lg tw-leading-relaxed">
          If you’re ready for a recruitment experience that’s truly personal,
          supportive, and straightforward, let’s connect. Key Medsolutions UK is
          the Trusted RPO Partner Across Global, and we’d love to show you what
          sets us apart. Reach out for a discovery call and let’s talk about what
          you need. Your ideal hire could be closer than you think — let’s find them
          together!
        </p>
      </div>
    </section>
  );
}
