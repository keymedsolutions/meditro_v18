"use client";

import { APP_PATH } from "@/data/PATH_APP";
import { motion } from "framer-motion";
import { CheckCircle, Zap, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function MedicalBillingLanding() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState<
    {
      id: number;
      top: string;
      left: string;
      size: number;
      duration: number;
      delay: number;
    }[]
  >([]);

  const containerRef = useRef<HTMLDivElement>(null);

  // ✅ Create random floating particles only on the client
  useEffect(() => {
    const generated = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 3 + 2,
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 4,
    }));
    setParticles(generated);
  }, []);

  // ✅ Detect section visibility
  useEffect((): any => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.25 }
    );

    const current = containerRef.current;
    if (current) observer.observe(current);
    return () => current && observer.unobserve(current);
  }, []);

  // 🔧 Animations
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    whileInView: { transition: { staggerChildren: 0.1 } },
  };

  const floatingAnimation = {
    animate: {
      y: [0, -15, 0],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const pulseGlow = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.7, 1, 0.7],
      transition: { duration: 3, repeat: Infinity },
    },
  };

  return (
    <div className="tw-min-h-screen tw-overflow-hidden">
      {/* 🌟 HERO SECTION */}
      <section className="tw-relative tw-py-20 tw-px-4 before:tw-content-[''] before:tw-absolute before:tw-inset-20 before:tw-rounded-2xl before:tw-bg-purple-300 before:tw-blur-3xl before:tw-opacity-30 before:tw-z-[-1]">
        <div className="tw-max-w-7xl tw-mx-auto tw-relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
            className="tw-text-center tw-max-w-4xl tw-mx-auto"
          >
            <h2 className="tw-text-5xl md:tw-text-6xl tw-font-bold tw-text-gray-900 tw-mb-6 tw-leading-tight">
              We Handle Your <span className="tw-text-blue-600">Billing</span>{" "}
              So You Can Handle Your{" "}
              <span className="tw-text-green-600">Patients</span>
            </h2>

            <p className="tw-text-lg tw-text-gray-700 tw-mb-12 tw-max-w-3xl tw-mx-auto">
              At Key MedSolutions, we simplify your medical billing so you can
              focus on your patients. No more claim denials, delays, or
              paperwork overload.
            </p>
          </motion.div>

          {/* ✅ BENEFITS */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="tw-grid md:tw-grid-cols-3 tw-gap-6 tw-mb-12"
          >
            {[
              "Fewer Denials. Faster Payments.",
              "30% Fewer Claim Issues.",
              "20% Quicker Reimbursements.",
            ].map((text, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="tw-relative tw-group tw-flex tw-items-center tw-gap-4 tw-rounded-2xl tw-border tw-bg-white tw-p-6 tw-shadow-lg tw-transition-all tw-duration-300 hover:tw-border-green-700 hover:tw-scale-[1.02]"
              >
                <CheckCircle
                  className="tw-text-green-500 group-hover:tw-text-white tw-relative tw-z-10"
                  size={24}
                />
                <span className="tw-text-gray-800 group-hover:tw-text-white tw-font-medium tw-relative tw-z-10">
                  {text}
                </span>
                <div className="tw-absolute tw-inset-0 tw-bg-green-500 tw-scale-x-0 group-hover:tw-scale-x-100 tw-origin-left tw-transition-transform tw-duration-300 tw-z-0 tw-rounded-2xl"></div>
              </motion.div>
            ))}
          </motion.div>

          {/* ✅ CTA Buttons */}
          <div className="tw-flex tw-flex-col sm:tw-flex-row tw-gap-4 tw-justify-center tw-mt-10">
            <Link href={APP_PATH.contactus.path}>
              <button className="tw-relative tw-flex tw-items-center tw-gap-2 tw-bg-gray-900 tw-text-white tw-px-6 tw-py-3 tw-rounded-md tw-transition-colors hover:tw-bg-orange-600">
                <Phone size={18} />
                Book a Free Call
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* 💻 TECHNOLOGY INTEGRATION SECTION */}
      <section
        ref={containerRef}
        className="tw-relative tw-py-20 tw-bg-gradient-to-br tw-from-blue-900 tw-to-blue-700 tw-overflow-hidden"
      >
        {/* ✅ Floating Particles (client-side only) */}
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="tw-absolute tw-rounded-full tw-bg-white/30"
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
            }}
            animate={{ y: [0, -20, 0], opacity: [0, 0.6, 0] }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
            }}
          />
        ))}

        <div className="tw-container tw-grid lg:tw-grid-cols-2 tw-gap-12 tw-relative tw-z-10">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
            className="tw-flex tw-justify-center tw-items-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.div
              animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
              transition={{ duration: 0.5 }}
              className="tw-relative"
            >
              <Image
                src="/images/hero-lady.webp"
                alt="medical billing landing"
                width={500} // match your display size
                height={500}
                className="tw-object-cover tw-rounded-xl tw-relative tw-z-10 tw-shadow-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
              />

              {/* Floating icons */}
              <motion.div
                className="tw-absolute -tw-top-6 -tw-left-6 tw-bg-white tw-p-3 tw-rounded-full tw-shadow-lg tw-z-10"
                variants={floatingAnimation}
                animate="animate"
              >
                <CheckCircle className="tw-text-green-500" size={32} />
              </motion.div>

              <motion.div
                className="tw-absolute -tw-bottom-4 -tw-right-4 tw-bg-white tw-p-3 tw-rounded-full tw-shadow-lg tw-z-10"
                variants={floatingAnimation}
                animate="animate"
                transition={{ delay: 1 }}
              >
                <Zap className="tw-text-yellow-500" size={32} />
              </motion.div>

              {/* Glow behind image */}
              <motion.div
                className="tw-absolute tw-inset-0 tw-bg-blue-400/30 tw-rounded-xl tw-blur-xl"
                variants={pulseGlow}
                animate="animate"
              />
            </motion.div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="tw-flex tw-flex-col tw-justify-center tw-text-center md:tw-text-left"
          >
            <div className="tw-pb-4">
              <span className=" tw-px-3 tw-py-1 tw-bg-blue-400/20 tw-text-blue-200 tw-rounded-full tw-text-sm tw-mb-4">
                Next Generation Technology
              </span>
            </div>
            <h2 className="tw-text-4xl md:tw-text-5xl tw-font-bold tw-text-white tw-mb-6">
              Seamless Technology{" "}
              <span className="tw-text-blue-300">Integration</span>
            </h2>
            <p className="tw-text-lg tw-text-blue-100 tw-mb-8">
              Our advanced medical billing systems effortlessly integrate with
              your existing software, ensuring smooth and efficient operations.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
