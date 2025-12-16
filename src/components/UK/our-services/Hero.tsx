"use client";

import Image from "next/image";
import React from "react";

const ServicesHero: React.FC = () => {
  return (
    <section className="tw-relative tw-w-full tw-min-h-[85vh] tw-overflow-hidden tw-bg-[#f5f7fb]">
      {/* Background Image */}
      <div className="tw-absolute tw-inset-0 tw-pointer-events-none tw-overflow-hidden">
        <Image
          src="/assets/images/our-services/Hero.jpg" // 👉 change this path to your actual image
          alt="Hero image"
          fill
          priority
          className="tw-object-cover tw-opacity-70"
        />
        <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-r tw-from-accent-500/90 tw-via-black/85 tw-to-black/40" />
      </div>

      {/* Decorative orbs */}
      <div className="tw-pointer-events-none tw-absolute -tw-right-24 tw-top-10 tw-h-64 tw-w-64 tw-rounded-full tw-bg-gradient-to-br tw-from-emerald-200 tw-via-sky-200 tw-to-indigo-200 tw-opacity-80 tw-blur-3xl" />
      <div className="tw-pointer-events-none tw-absolute -tw-left-16 tw-bottom-0 tw-h-56 tw-w-56 tw-rounded-full tw-bg-gradient-to-tr tw-from-amber-200 tw-via-rose-200 tw-to-fuchsia-200 tw-opacity-70 tw-blur-3xl" />

      {/* Content */}
      <div className="tw-relative tw-z-10 tw-mx-auto tw-px-4 md:tw-px-8 tw-py-16 lg:tw-py-20">
        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] tw-gap-10 tw-items-center">
          {/* Left: Text block */}
          <div>
            <div
              className="tw-rounded-3xl tw-p-6 sm:tw-p-8"
              style={
                {
                  // boxShadow:
                  //   "0 24px 70px rgba(15, 23, 42, 0.18), 0 0 0 1px rgba(255,255,255,0.8)",
                }
              }
            >
              <div className="tw-mb-4 tw-text-xs sm:tw-text-sm tw-font-semibold tw-tracking-[0.22em] tw-uppercase tw-text-white/90">
                Our service
              </div>

              <h1 className="tw-text-2xl sm:tw-text-3xl lg:tw-text-4xl tw-font-semibold tw-leading-snug tw-text-white tw-mb-5">
                Comprehensive Talent &amp; Outsourcing Solutions for the Global
                Workforce Economy
              </h1>

              <p className="tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-white/90 tw-mb-4">
                Welcome to Key Medsolutions UK. Ready to build your ideal team
                without the headaches? You’ve come to the right place. We help
                Global businesses of every size hire more effectively and grow
                with confidence, and enjoy a recruitment process that actually
                feels seamless. Whether you’re just starting out or leading an
                established company, we’re here to guide you at every step.
              </p>

              <p className="tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-white/90 tw-mb-4">
                Think of us as your hands-on talent partner. We solve real
                hiring challenges so your company can reach its goals. Our
                services are wide-ranging yet flexible. We find great
                candidates, help with induction and onboarding, handle payroll,
                take care of admin, deliver market intelligence, and search for
                leaders when you want to reshape your business. All the complex
                stuff feels a lot simpler with us on your side.
              </p>

              <p className="tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-white/90 tw-mb-6">
                What really makes us different? It’s our focus on people as much
                as the process. Our team is friendly, accessible, and deeply
                experienced. We mix smart technology with real, human support.
                You get transparent, results-driven service every time. We save
                you time, help you control costs, and make it easier to hire
                talent here in the UK or from anywhere you need. Choose Key
                Medsolutions UK, and you get more than a service. You get a
                partner who cares about your success.
              </p>

              <div className="tw-flex tw-items-center tw-gap-4">
                <button
                  className="tw-inline-flex tw-items-center tw-justify-center tw-rounded-full tw-px-6 tw-py-2.5 tw-text-sm sm:tw-text-base tw-font-semibold tw-bg-white  tw-text-accent-500 tw-shadow-lg tw-shadow-emerald-300/60 tw-transition tw-duration-300 hover:tw-translate-y-[1px] hover:tw-shadow-xl"
                  style={{
                    border: "2px solid var(--accent-500)",
                  }}
                >
                  Start Now
                </button>
              </div>
            </div>
          </div>

          {/* Right: Floating card with background image highlight */}
          <div className="tw-hidden md:tw-flex tw-items-center tw-justify-center">
            <div className="tw-relative tw-w-full tw-max-w-sm">
              <div
                className="tw-relative tw-rounded-[28px] tw-overflow-hidden tw-bg-white/90 tw-backdrop-blur-xl tw-p-3"
                style={{
                  border: "1px solid rgba(148, 163, 184, 0.35)",
                  boxShadow:
                    "0 22px 60px rgba(15, 23, 42, 0.22), 0 0 0 1px rgba(255,255,255,0.85)",
                }}
              >
                <div className="tw-relative tw-aspect-[4/5] tw-rounded-[22px] tw-overflow-hidden">
                  <Image
                    src="/assets/images/our-services/services-hero-people.jpg" // 👉 replace with a people/teams/corporate image
                    alt=""
                    fill
                    className="tw-object-cover tw-scale-[1.02]"
                  />

                  <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-t tw-from-slate-900/65 tw-via-slate-900/10 tw-to-transparent" />

                  {/* Subtle glow circles (no text) */}
                  <div className="tw-absolute tw-bottom-5 tw-left-5 tw-h-10 tw-w-10 tw-rounded-full tw-bg-emerald-400/80 tw-blur-md tw-opacity-80" />
                  <div className="tw-absolute tw-bottom-10 tw-right-6 tw-h-14 tw-w-14 tw-rounded-full tw-bg-sky-400/80 tw-blur-lg tw-opacity-70" />
                </div>
              </div>

              {/* Small floating accent pill (no text) */}
              <div
                className="tw-absolute -tw-top-4 tw-right-6 tw-rounded-full tw-backdrop-blur-lg tw-bg-white/90 tw-h-10 tw-w-10"
                style={{
                  border: "1px solid rgba(226, 232, 240, 0.9)",
                  boxShadow: "0 12px 35px rgba(148, 163, 184, 0.55)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
