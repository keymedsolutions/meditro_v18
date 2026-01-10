"use client";

import Link from "next/link";
import Image from "next/image";
import { ContactInfo, SocialAccountLinks } from "@/constant/constatnt";
import { sanitizePhoneNumber } from "@/lib/utils";
import { motion, type Variants } from "framer-motion";
import { useState } from "react";
import { APP_PATH } from "@/data/PATH_APP";
import type { Easing } from "framer-motion";
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const easeInOutCurve: Easing = [0.4, 0, 0.2, 1]; // similar to easeInOut
  const linearEasing: Easing = (t) => t; // true linear easing

  // Floating animation for decorative elements
  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      y: {
        repeat: Infinity,
        duration: 4,
        ease: easeInOutCurve,
      },
    },
  };

  // Rotating animation
  const rotatingAnimation = {
    rotate: 360,
    transition: {
      rotate: {
        repeat: Infinity,
        duration: 20,
        ease: linearEasing,
      },
    },
  };

  // Pulse animation
  const pulseAnimation = {
    scale: [1, 1.05, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 4,
      repeat: Infinity,
    },
  };

  // Staggered animation for list items
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
      },
    },
  };
  // Hover animation for social icons
  const socialIconHover = {
    scale: 1.2,
    rotate: 5,
    transition: { type: "spring" as const, stiffness: 300 },
  };
  return (
    <footer className="tw-relative tw-overflow-hidden tw-bg-accent-50  tw-text-slate-700  tw-pt-20 tw-pb-10">
      {/* Accent background glow (very subtle for light mode) */}
      <div className="tw-pointer-events-none tw-absolute tw-top-[-20%] tw-left-[-10%] tw-h-[420px] tw-w-[420px] tw-rounded-full tw-bg-accent-500/10 tw-blur-[120px]" />
      <div className="tw-pointer-events-none tw-absolute tw-bottom-[-25%] tw-right-[-15%] tw-h-[480px] tw-w-[480px] tw-rounded-full tw-bg-accent-400/10 tw-blur-[140px]" />

      <div className="tw-container tw-mx-auto tw-px-4 tw-relative tw-z-10">
        <motion.div
          className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 min-[1364px]:tw-grid-cols-4 tw-gap-10 tw-mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* LOGO + ABOUT */}
          <motion.div variants={itemVariants}>
            <Link href="/" className="tw-inline-block tw-mb-6">
              <Image
                src="/images/logo.webp"
                alt="Key MedSolutions UK"
                width={180}
                height={60}
              />
            </Link>

            <p className="tw-text-slate-600  tw-leading-relaxed">
              At Key MedSolutions, we make medical billing easy. We are a
              medical billing service that helps healthcare professionals focus
              on what is most important: caring for their patients. Our mission
              is to take the stress out of billing and make your revenue cycle
              work seamlessly.
            </p>

            <div className="tw-flex tw-gap-3 tw-mt-6">
              {[
                {
                  href: SocialAccountLinks.FACEBOOK,
                  label: "Follow us on Facebook",
                  icon: <Facebook size={18} className="tw-text-slate-600"/>,
                },
                {
                  href: SocialAccountLinks.LINKEDIN,
                  label: "Follow us on LinkedIn",
                  icon: <Linkedin size={18} className="tw-text-slate-600"/>,
                },
                {
                  href: SocialAccountLinks.INSTAGRAM,
                  label: "Follow us on Instagram",
                  icon: <Instagram size={18} className="tw-text-slate-600"/>,
                },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  whileHover={{ scale: 1.15 }}
                  className="tw-h-10 tw-w-10 tw-rounded-full tw-bg-white tw-border tw-border-slate-200 tw-flex tw-items-center tw-justify-center hover:tw-bg-accent-500/15"
                >
                  {/* Screen reader text */}
                  <span className="tw-sr-only">{item.label}</span>

                  {/* Icon */}
                 {item.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* QUICK LINKS */}
          <motion.div variants={itemVariants}>
            <h3 className="tw-text-slate-900  tw-text-lg tw-font-semibold tw-mb-5 tw-relative tw-pb-2 after:tw-absolute after:tw-left-0 after:tw-bottom-0 after:tw-h-[2px] after:tw-w-10 after:tw-bg-accent-500">
              Quick Links
            </h3>
            <ul className="tw-space-y-3">
              {[
                { href: APP_PATH.about.path, label: "About Us" },
                { href: APP_PATH.services.path, label: "Our Services" },
                {
                  href: APP_PATH.services.industries.path,
                  label: "Industries We Serve",
                },
                {
                  href: APP_PATH.services.deliveryModels.path,
                  label: "Delivery Models",
                },
                {
                  href: APP_PATH.services.WhyChooseUs.path,
                  label: "Why Choose Us",
                },
                {
                  href: APP_PATH.blogs.path,
                  label: "Blogs",
                },
                { href: APP_PATH.services.faqs.path, label: "faqS" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="tw-text-slate-600  hover:tw-text-slate-900 tw-flex tw-items-center"
                  >
                    <span className="tw-h-1.5 tw-w-1.5 tw-rounded-full tw-bg-accent-500 tw-mr-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* SERVICES */}
          <motion.div variants={itemVariants}>
            <h3 className="tw-text-slate-900  tw-text-lg tw-font-semibold tw-mb-5 tw-relative tw-pb-2 after:tw-absolute after:tw-left-0 after:tw-bottom-0 after:tw-h-[2px] after:tw-w-10 after:tw-bg-accent-500">
              Our Services
            </h3>
            <ul className="tw-space-y-3">
              {[
                {
                  label: "Recruitment Process Outsourcing",
                  href: APP_PATH.services.recruitmentProcessOutsourcingServices
                    .path,
                },
                {
                  label: "Candidate Sourcing & Screening",
                  href: APP_PATH.services.candidateSourcingAndScreeningServices
                    .path,
                },
                {
                  label: "Back Office & Administrative",
                  href: APP_PATH.services.backOfficeAndAdministrativeServices
                    .path,
                },
                {
                  label: "Payroll & Finance Outsourcing",
                  href: APP_PATH.services.payrollAndFinanceOutsourcingServices
                    .path,
                },
                {
                  label: "Market Mapping",
                  href: APP_PATH.services.marketMappingRecruitmentServices.path,
                },
                {
                  label: "Executive Search & Headhunting",
                  href: APP_PATH.services.executiveSearchAndHeadhuntingServices
                    .path,
                },
                {
                  label: "Remote Staffing",
                  href: APP_PATH.services.remoteStaffingAgency.path,
                },
                {
                  label: "Technology and Digital Recruitment",
                  href: APP_PATH.services
                    .technologyAndDigitalRecruitmentServices.path,
                },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="tw-text-slate-600  hover:tw-text-slate-900  tw-flex tw-items-center"
                  >
                    <span className="tw-h-1.5 tw-w-1.5 tw-rounded-full tw-bg-accent-500 tw-mr-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CONTACT */}
          <motion.div variants={itemVariants}>
            <h3 className="tw-text-slate-900  tw-text-lg tw-font-semibold tw-mb-5 tw-relative tw-pb-2 after:tw-absolute after:tw-left-0 after:tw-bottom-0 after:tw-h-[2px] after:tw-w-10 after:tw-bg-accent-500">
              Contact Us
            </h3>

            <div className="tw-bg-white  tborder tw-border-slate-200  tw-rounded-2xl tw-p-6 tw-space-y-5">
              <div className="tw-flex tw-gap-4">
                <div className="tw-h-11 tw-w-11 tw-rounded-full tw-bg-accent-500/15 tw-flex tw-items-center tw-justify-center tw-shrink-0">
                  <Phone className="tw-text-accent-600" size={18}/>
                </div>
                <div>
                  <span className="tw-text-xs tw-text-slate-500">Call us</span>
                  <a
                    href={`tel:${sanitizePhoneNumber(ContactInfo.phone)}`}
                    className="tw-block tw-text-slate-900  hover:tw-text-accent-500"
                  >
                    {ContactInfo.phone}
                  </a>
                </div>
              </div>

              <div className="tw-flex tw-gap-4 tw-flex-shrink-0">
                <div className="tw-h-11 tw-w-11 tw-rounded-full tw-bg-accent-500/15 tw-flex tw-items-center tw-justify-center tw-shrink-0">
                  {/* <i className="fas fa-envelope tw-text-accent-600" /> */}
                  <Mail className="tw-text-accent-600" size={18}/>
                </div>
                <div>
                  <span className="tw-text-xs tw-text-slate-500">Email us</span>
                  <a
                    href={`mailto:${ContactInfo.email}`}
                    className="tw-block tw-text-slate-900  hover:tw-text-accent-500"
                  >
                    {ContactInfo.email}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* FOOTER BOTTOM */}
        <div className="tw-border-t tw-border-slate-200  tw-pt-6 tw-text-center">
          <p className="tw-text-slate-600">© {currentYear} Key MedSolutions</p>
          <p className="tw-text-slate-600">
            Key MedSolutions operates under the domain{" "}
            <Link
              href="/"
              className="
    tw-text-slate-900
    tw-underline
    tw-decoration-slate-400
    tw-underline-offset-4
    hover:tw-text-accent-700
  "
            >
              keymedsolution.com
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
