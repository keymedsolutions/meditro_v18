"use client";

import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <section className="tw-w-full tw-flex md:tw-flex-row tw-flex-col tw-items-stretch tw-gap-0 tw-p-0 tw-h-full tw-bg-accent-500">
      {/* LEFT SIDE IMAGE */}
      <div className="tw-h-full tw-flex tw-align-start  tw-m-0 tw-p-0 md:tw-w-[40%] tw-w-full">
        {/* <div className="tw-relative tw-w-full tw-h-full tw-min-h-[350px] md:tw-min-h-[420px] md:tw-min-h-[480px]"> */}
        <Image
          src="/assets/images/main-banner/why-choose.png"
          alt="Why Choose Us"
          // fill
          width={100}
          height={100}
          className="!tw-h-full !tw-w-full tw-rounded-none"
          priority
          quality={100}
        />
        {/* </div> */}
      </div>

      {/* RIGHT SIDE CONTENT - aligned to top (no top padding) */}
      <div className="md:tw-w-[60%] tw-w-full tw-px-6 tw-py-6 tw-flex tw-flex-col tw-gap-y-6 tw-justify-start tw-text-white">
        <h2 className="tw-font-bold tw-text-3xl md:tw-text-4xl tw-leading-snug tw-text-white">
          Why Are So Many Global Companies Choosing Key Medsolutions?
        </h2>

        <div className="tw-flex tw-flex-col tw-gap-y-4 tw-text-base tw-leading-relaxed ">
          <p className="!tw-text-white">
            We have to admit that the old ways of hiring don't work anymore.
            They’re slow, pricey, and rarely flexible. That’s why Key
            Medsolutions has flipped the script. As your go-to Global Offshore
            Recruitment Service Provider, we blend everything you love about
            British business (high standards and honest communication) with the
            global reach and value of international talent.
          </p>

          <p className="!tw-text-white">
            We don’t just fill roles, we build teams that help your business
            thrive. Whether you want smart offshore hiring to reduce costs or a
            trusted partner to manage recruitment end-to-end, we’re here to make
            a real impact on your success.
          </p>
        </div>

        {/* Stats */}
        <div className="tw-flex tw-flex-col tw-gap-y-4 tw-mt-2">
          <p className="tw-font-medium tw-text-white">A quick look at our numbers:</p>

          <div className="tw-grid tw-grid-cols-2 tw-gap-6">
            <div className="tw-flex tw-flex-col tw-gap-y-1">
              <span className="tw-text-2xl md:tw-text-5xl tw-font-bold">10+</span>
              <span>Years’ Experience</span>
            </div>

            <div className="tw-flex tw-flex-col tw-gap-y-1">
              <span className="tw-text-2xl md:tw-text-5xl tw-font-bold">2,000+</span>
              <span>Global Hires</span>
            </div>

            <div className="tw-flex tw-flex-col tw-gap-y-1">
              <span className="tw-text-2xl md:tw-text-5xl tw-font-bold">92%</span>
              <span>Client Retention</span>
            </div>

            <div className="tw-flex tw-flex-col tw-gap-y-1">
              <span className="tw-text-2xl md:tw-text-5xl tw-font-bold">UK & Global</span>
              <span>Delivery Capability</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
