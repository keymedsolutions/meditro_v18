"use client";

import Image from "next/image";
import { NumberTicker } from "../ui/NumberTicker";

const WhyChooseUs = () => {
  return (
    <section className="tw-w-full tw-flex md:tw-flex-row tw-flex-col tw-items-stretch tw-gap-0 tw-p-0 tw-h-full tw-bg-accent-700">
      {/* LEFT SIDE IMAGE */}
      <div className="md:tw-w-[40%] tw-w-full tw-relative tw-min-h-[500px] sm:tw-min-h-[420px] md:tw-min-h-full">
        <Image
          src="/assets/images/main-banner/why-choose.png"
          alt="Why Choose Us"
          fill
          priority
          className="tw-object-cover"
          sizes="(max-width: 768px) 100vw, 40vw"
        />
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
            British business (think high standards and clear, honest
            communication) with the game-changing reach and value of global
            talent.
          </p>

          <p className="!tw-text-white">
            We don’t just fill roles, we build teams that help your business
            thrive. Maybe you want smart Offshore Recruitment Solutions to keep
            costs down. Maybe you’re looking for a trusted offshore recruitment
            partner to take charge of your hiring end-to-end. Either way, we’re
            here to make a real impact on your success.
          </p>
        </div>

        {/* Stats */}
        <div className="tw-flex tw-flex-col tw-gap-y-4 tw-mt-2">
          <p className="tw-font-medium tw-text-white">
            A quick look at our numbers:
          </p>

          <div className="tw-grid tw-grid-cols-2 tw-gap-6">
            <div className="tw-flex tw-flex-col tw-gap-y-1">
              <div className="tw-flex tw-items-center">
                <NumberTicker
                  value={10}
                  className="tw-text-2xl md:tw-text-5xl tw-font-bold"
                />
                <span className="tw-text-2xl md:tw-text-5xl tw-font-bold">
                  +
                </span>
              </div>
              <span>Years’ Experience</span>
            </div>

            <div className="tw-flex tw-flex-col tw-gap-y-1">
              <div className="tw-flex tw-items-center">
                <NumberTicker
                  value={2000}
                  className="tw-text-2xl md:tw-text-5xl tw-font-bold"
                />
                <span className="tw-text-2xl md:tw-text-5xl tw-font-bold">
                  +
                </span>
              </div>
              <span>Global Hires</span>
            </div>

            <div className="tw-flex tw-flex-col tw-gap-y-1">
              <div className="tw-flex tw-items-center">
                <NumberTicker
                  value={92}
                  className="tw-text-2xl md:tw-text-5xl tw-font-bold"
                />
                <span className="tw-text-2xl md:tw-text-5xl tw-font-bold">
                  %
                </span>
              </div>
              <span>Client Retention</span>
            </div>

            <div className="tw-flex tw-flex-col tw-gap-y-1">
              <span className="tw-text-2xl md:tw-text-5xl tw-font-bold">
                UK & Global
              </span>
              <span>Delivery Capability</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
