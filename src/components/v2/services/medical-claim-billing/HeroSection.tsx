"use client";

import { AspectRatio } from "@/ui/aspect-ratio";
import { Badge } from "@/ui/badge";
import { Button } from "@/ui/button";
import { motion } from "framer-motion";

import { ArrowRight, TrendingUp } from "lucide-react";
import { useEffect, useRef } from "react";

export function HeroSection() {
  const refs = [
    useRef<HTMLHeadingElement>(null),
    useRef(null), // subtitleRef (not used)
    useRef(null), // ctaRef
    useRef(null), // cardRef
    useRef(null), // imageRef
  ];

  const [titleRef, , ctaRef, cardRef, imageRef] = refs;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "tw-opacity-100",
              "tw-translate-y-0",
              "tw-scale-100",
              "tw-animate-fade-in"
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    refs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
  return (
    <section className="benefits-section-home1 tw-min-h-[90vh] tw-pb-20 md:tw-pb-32 tw-bg-hero-gradient tw-overflow-hidden tw-relative">
      {/* Background Blobs */}
      <div className="tw-absolute tw-top-0 tw-right-0 tw-w-96 tw-h-96 tw-bg-keymed-100 tw-rounded-full tw-blur-3xl tw-opacity-50 -tw-translate-y-1/2 tw-translate-x-1/3"></div>
      <div className="tw-absolute tw-bottom-0 tw-left-0 tw-w-96 tw-h-96 tw-bg-keymed-100 tw-rounded-full tw-blur-3xl tw-opacity-50 tw-translate-y-1/2 -tw-translate-x-1/3"></div>
      <div className="tw-absolute tw-top-1/4 tw-left-1/4 tw-w-8 tw-h-8 tw-bg-keymed-300 tw-rounded-full tw-opacity-20 tw-animate-pulse-soft"></div>
      <div className="tw-absolute tw-bottom-1/3 tw-right-1/3 tw-w-12 tw-h-12 tw-bg-keymed-200 tw-rounded-full tw-opacity-30 tw-animate-float"></div>

      <div className="tw-container tw-mx-auto tw-px-6 md:tw-px-8 tw-relative tw-z-10">
        <motion.div
          className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-12 tw-gap-10 lg:tw-gap-8 tw-items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="lg:tw-col-span-6 tw-space-y-6 tw-max-w-3xl"
            variants={itemVariants}
          >
            <Badge
              variant="outline"
              className="tw-bg-white/80 tw-backdrop-blur-sm tw-border-keymed-200 tw-text-keymed-700 tw-px-3 tw-py-1  tw-inline-flex tw-items-center tw-gap-1"
            >
              <span className="tw-w-2 tw-h-2 tw-rounded-full tw-bg-keymed-500"></span>
              Medical Claim Billing Company
            </Badge>

            {/* Updated Heading */}
            <h1
              ref={titleRef}
              className="tw-opacity-0 tw-translate-y-6 tw-scale-95 tw-transition-all tw-duration-700 tw-ease-out tw-font-extrabold tw-tracking-tight tw-text-4xl sm:tw-text-5xl lg:tw-text-6xl tw-mb-6"
            >
              <span className="tw-text-keymed-800 section-title">
                Medical Claim Billing Company
              </span>
              &nbsp;
              <br />
              <span className="tw-inline-block tw-relative section-title">
                Streamlining Your Revenue Cycle
                <svg
                  className="tw-absolute -tw-bottom-2 tw-left-0 tw-w-full tw-h-2 tw-text-keymed-300 tw-opacity-60"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,0 C20,8 50,12 80,8 L100,0 L100,12 L0,12 Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </h1>

            <div className="tw-mt-10 tw-z-10">
              <p className=" tw-text-justify tw-text-foreground/80">
                Welcome to&nbsp;
                <span className="tw-font-bold">Key MedSolutions,</span> your
                reliable medical billing partner. We assist healthcare providers
                in submitting claims more easily, receiving more approvals, and
                receiving payment sooner. Our advanced software and expert
                services make billing simple and quick, which benefits the
                expansion of your company.
              </p>
            </div>

            <button className="star-button !tw-bg-keymed-800 !tw-text-white hover:!tw-text-[#fec195]">
              Hassle-free billing starts here - reach out now!
              <div className="star-1">
                <img
                  src="/images/icon/geomatricShape.png"
                  className="tw-h-4 tw-w-4"
                />
              </div>
              <div className="star-2">
                <img
                  src="/images/icon/geomatricShape.png"
                  className="tw-h-4 tw-w-4"
                />
              </div>
              <div className="star-3">
                <img
                  src="/images/icon/geomatricShape.png"
                  className="tw-h-4 tw-w-4"
                />
              </div>
              <div className="star-4">
                <img
                  src="/images/icon/geomatricShape.png"
                  className="tw-h-4 tw-w-4"
                />
              </div>
              <div className="star-5">
                <img
                  src="/images/icon/geomatricShape.png"
                  className="tw-h-4 tw-w-4"
                />
              </div>
              <div className="star-6">
                <img
                  src="/images/icon/geomatricShape.png"
                  className="tw-h-4 tw-w-4"
                />
              </div>
            </button>
          </motion.div>

          <motion.div className="lg:tw-col-span-6" variants={itemVariants}>
            <div className="tw-relative">
              {/* Abstract animated shapes */}
              {/* <motion.div 
                className="tw-absolute -tw-top-12 -tw-left-8 tw-w-40 tw-h-40 tw-bg-primary/20 tw-rounded-tr-[60px] tw-rounded-bl-[60px]"
                variants={floatingShapes}
                initial="initial"
                animate="animate"
              /> */}
              <motion.div
                className="tw-absolute -tw-bottom-10 -tw-right-10 tw-w-36 tw-h-36 tw-bg-secondary/30 tw-rounded-full"
                animate={{
                  y: [0, -15, 0],
                  transition: {
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              />
              <motion.div
                className="tw-absolute tw-top-1/3 -tw-right-6 tw-w-24 tw-h-24 tw-bg-info/15 tw-rounded-full"
                animate={{
                  scale: [1, 1.1, 1],
                  transition: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              />

              {/* Right Side Image with Smooth Animation */}
              <div
                ref={imageRef}
                className="tw-opacity-0 tw-translate-y-6 tw-scale-95 tw-transition-all tw-duration-700 tw-ease-out tw-relative"
              >
                <div className="tw-relative tw-rounded-2xl tw-overflow-hidden tw-border-4 tw-border-white tw-shadow-2xl tw-transform md:tw-rotate-2 hover:tw-rotate-0 tw-transition-all tw-duration-500 tw-group">
                  <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-keymed-200/30 tw-to-keymed-500/30 tw-opacity-0 group-hover:tw-opacity-100 tw-transition-opacity tw-duration-300 tw-z-10" />
                  <AspectRatio ratio={4 / 3} className="tw-bg-keymed-50">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1661374854687-365cf842e468?q=80&w=2070&auto=format&fit=crop"
                      alt="Healthcare professional"
                      className="tw-object-cover tw-w-full tw-h-full"
                    />
                  </AspectRatio>
                  <div className="tw-absolute tw-bottom-0 tw-left-0 tw-right-0 tw-bg-gradient-to-t tw-from-keymed-800/90 tw-to-transparent tw-p-6 tw-translate-y-full group-hover:tw-translate-y-0 tw-transition-transform tw-duration-300 tw-z-20">
                    <p className="tw-text-white tw-font-medium">
                      Simplify your medical billing process
                    </p>
                    <p className="tw-text-white/80 tw-text-sm tw-mt-1">
                      Optimize revenue cycle management
                    </p>
                  </div>
                </div>

                <div className="tw-absolute -tw-bottom-6 -tw-left-6 tw-w-24 tw-h-24 tw-bg-keymed-100 tw-rounded-full tw-blur-xl tw-opacity-70 -tw-z-10"></div>
                <div className="tw-absolute -tw-top-6 -tw-right-6 tw-w-24 tw-h-24 tw-bg-keymed-200 tw-rounded-full tw-blur-xl tw-opacity-50 -tw-z-10"></div>

                <div className="tw-absolute -tw-top-4 -tw-right-4 tw-bg-white tw-rounded-full tw-shadow-lg tw-p-4 tw-z-20 tw-transform tw-rotate-12 hover:tw-rotate-0 tw-transition-all tw-duration-300">
                  <div className="tw-bg-gradient-to-br tw-from-keymed-500 tw-to-keymed-600 tw-text-black tw-rounded-full tw-h-16 tw-w-16 tw-flex tw-items-center tw-justify-center tw-text-sm tw-font-bold">
                    HIPAA
                    <br />
                    Compliant
                  </div>
                </div>
              </div>
              {/* </motion.div> */}

              {/* Additional floating elements */}
              <motion.div
                className="tw-absolute -tw-top-4 tw-right-20 tw-w-10 tw-h-10 tw-rounded-lg tw-bg-secondary/10 tw-backdrop-blur-lg tw-border tw-border-white/20"
                animate={{
                  rotate: [0, 45, 0],
                  transition: {
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              />
              <motion.div
                className="tw-absolute tw-top-2/3 -tw-left-6 tw-w-12 tw-h-12 tw-rounded-full tw-bg-warning/10 tw-backdrop-blur-lg tw-border tw-border-white/10"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                  transition: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
      <img
        src="images\banner-shape.png"
        alt="herobanner-shape"
        className="tw-w-full tw-absolute tw-bottom-0 tw-rotate-180"
      />
    </section>
  );
}
