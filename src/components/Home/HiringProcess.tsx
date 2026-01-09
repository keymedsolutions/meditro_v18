"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Clock, DollarSign, Globe, Shield } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import imgFaster from "../../../public/assets/images/hiring-process/faster-hiring.webp";
import imgCost from "../../../public/assets/images/hiring-process/cost-efficient.webp";
import imgGlobal from "../../../public/assets/images/hiring-process/global-talent.webp";
import imgZero from "../../../public/assets/images/hiring-process/zero-compliance.webp";
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/ui/carousel";
import { Card, CardContent } from "@/ui/card";
import Autoplay from "embla-carousel-autoplay"; // ✅ ADD THIS

const HiringProcess = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);
  const matches = useMediaQuery("(min-width: 1024px)");
  const plugin = useRef(
    Autoplay({
      delay: 2500,
      stopOnInteraction: true,
    })
  );
  const features = [
    {
      title: "Faster Hiring",
      description:
        "Our AI-driven sourcing and expert recruiters mean you get top talent in weeks, not months.",
      icon: <Clock className="tw-w-8 tw-h-8" />,
      color: "tw-bg-gradient-to-br tw-from-blue-500 tw-to-cyan-500",
      accentColor: "tw-bg-gradient-to-r tw-from-blue-600 tw-to-cyan-500",
      textColor: "tw-text-blue-900",
      iconBg: "tw-bg-blue-100/90",
      image: imgFaster,
    },
    {
      title: "Cost-Efficient Solutions",
      description:
        "Save up to 70% with our Offshore Recruitment Services without sacrificing on quality, speed, or compliance.",
      icon: <DollarSign className="tw-w-8 tw-h-8" />,
      color: "tw-bg-gradient-to-br tw-from-emerald-500 tw-to-green-400",
      accentColor: "tw-bg-gradient-to-r tw-from-emerald-600 tw-to-green-500",
      textColor: "tw-text-emerald-900",
      iconBg: "tw-bg-emerald-100/90",
      image: imgCost,
    },
    {
      title: "Global Talent Access",
      description:
        "Don't let location limit you. We'll connect you with talent across every industry and continent.",
      icon: <Globe className="tw-w-8 tw-h-8" />,
      color: "tw-bg-gradient-to-br tw-from-violet-500 tw-to-purple-400",
      accentColor: "tw-bg-gradient-to-r tw-from-violet-600 tw-to-purple-500",
      textColor: "tw-text-violet-900",
      iconBg: "tw-bg-violet-100/90",
      image: imgGlobal,
    },
    {
      title: "Zero Compliance Burden",
      description:
        "Payroll, HR admin, onboarding, contracts? We cover it all so you can focus on what matters: growing your business.",
      icon: <Shield className="tw-w-8 tw-h-8" />,
      color: "tw-bg-gradient-to-br tw-from-amber-500 tw-to-orange-400",
      accentColor: "tw-bg-gradient-to-r tw-from-amber-600 tw-to-orange-500",
      textColor: "tw-text-amber-900",
      iconBg: "tw-bg-amber-100/90",
      image: imgZero,
    },
  ];

  // Prefetch helper
  const prefetchImage = (img: any) => {
    try {
      const url = typeof img === "string" ? img : img?.src ?? img;
      if (!url) return;

      const i = new window.Image();
      i.src = url;
    } catch (e) {
      /* ignore */
    }
  };

  // Prefetch all images on mount to reduce hover latency
  useEffect(() => {
    features.forEach((f) => prefetchImage(f.image));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="tw-relative tw-py-20  tw-bg-gradient-to-br tw-from-slate-50 tw-via-white tw-to-blue-50/50 tw-overflow-hidden">
      {/* Animated Background Elements */}
      <div className="tw-absolute tw-inset-0 tw-overflow-hidden">
        <div className="tw-absolute tw-top-20 tw-left-10 tw-w-72 tw-h-72 tw-bg-blue-300/10 tw-rounded-full tw-blur-3xl" />
        <div className="tw-absolute tw-bottom-20 tw-right-10 tw-w-96 tw-h-96 tw-bg-cyan-300/10 tw-rounded-full tw-blur-3xl" />
      </div>

      <div className="tw-text-center tw-space-y-3 tw-mb-16 tw-relative tw-z-10">
        <p className="tw-text-sm tw-font-semibold tw-tracking-[0.18em] tw-uppercase tw-text-accent-600">
          Here’s How We Make Hiring Simple (And Fast!)
        </p>
        <h2 className="tw-text-2xl md:tw-text-3xl lg:tw-text-4xl tw-max-w-5xl tw-mx-auto tw-font-bold tw-text-slate-900">
          We’re all about taking the stress out of recruitment. Here’s exactly
          how we do it:
        </h2>
      </div>

      {/* Features Grid */}
      <div className="tw-relative tw-hidden lg:tw-block">
        {/* FULL-WIDTH BACKGROUND IMAGE (behind the grid) */}
        {/* Background image layer using next/image */}
        <div className="tw-absolute tw-inset-0 tw-z-0 tw-pointer-events-none tw-select-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={hoveredIndex}
              className="tw-absolute tw-inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              aria-hidden
            >
              <Image
                src={features[hoveredIndex].image}
                alt={features[hoveredIndex].title}
                fill
                style={{ objectFit: "cover" }}
                priority={hoveredIndex === 0} // only default image gets priority
                placeholder="blur" // works with static imports
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
                quality={75}
              />
              <div className="tw-absolute tw-inset-0 tw-bg-black tw-opacity-40" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* GRID (put cards on top of bg) */}
        <div className="tw-relative tw-z-20 tw-h-[80vh]">
          <div
            className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-mb-20 tw-h-full tw-items-stretch"
            style={{ gridAutoRows: "1fr" }} // <-- key: make implicit rows stretch
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 40 }}
                whileInView={{ y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true, amount: 0.2 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(0)}
                className="tw-group tw-h-full" // cell fills the grid row
                style={{
                  borderRight:
                    index !== features.length - 1
                      ? "2px solid #e2e8f0"
                      : undefined,
                }}
              >
                {/* HOVER DARK BLUR OVERLAY */}
                {/* <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="tw-absolute tw-inset-0 tw-bg-black/40 tw-backdrop-blur-sm tw-z-20"
                /> */}

                {/* Make the card fill the cell and use absolute positioning for animated content */}
                <div
                  className={`tw-relative tw-h-full tw-overflow-hidden tw-transition-all ${
                    hoveredIndex === index
                      ? "tw-bg-black/40 tw-backdrop-blur-sm"
                      : ""
                  }`}
                >
                  {/* Content wrapper aligned at bottom */}
                  <div className="tw-absolute tw-inset-0 tw-flex tw-flex-col tw-items-center tw-justify-center tw-px-6 tw-pb-6 tw-z-30">
                    {/* TITLE */}
                    <motion.h3
                      initial={{ y: 0, opacity: 1 }}
                      animate={{
                        y: hoveredIndex === index ? 0 : 300, // move UP on hover (towards center)
                        opacity: 1,
                      }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                      className="tw-text-2xl tw-text-white tw-font-bold tw-text-center tw-uppercase"
                    >
                      {feature.title}
                    </motion.h3>

                    {/* DESCRIPTION */}
                    <motion.p
                      initial={{ y: 40, opacity: 0 }} // start slightly below & hidden
                      animate={{
                        y: hoveredIndex === index ? -0 : 200, // rises up near title
                        opacity: hoveredIndex === index ? 1 : 0,
                      }}
                      transition={{
                        duration: 0.45,
                        ease: "easeOut",
                        // delay: hoveredIndex === index ? 0.05 : 0,
                      }}
                      className="tw-mt-3 tw-text-white tw-text-lg tw-leading-relaxed tw-font-medium tw-text-center"
                    >
                      {feature.description}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="tw-mt-10 tw-z-20 lg:tw-hidden">
        <Carousel className="tw-w-full tw-max-w-md tw-mx-auto">
          <CarouselContent>
            {features.map((feature, index) => (
              <CarouselItem key={index}>
                <Card className="tw-overflow-hidden tw-bg-slate-900 !tw-p-0">
                  <CardContent className="!tw-p-0 ">
                    <div className="tw-relative md:tw-h-[500px] sm:tw-h-[350px] tw-h-[210px] tw-w-full">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                      <div className="tw-absolute tw-inset-0 tw-bg-black/60 tw-flex tw-flex-col tw-justify-center tw-px-10">
                        <h3 className="tw-text-xl tw-font-semibold tw-text-white tw-mb-2">
                          {feature.title}
                        </h3>
                        <p className="tw-text-white tw-text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default HiringProcess;
