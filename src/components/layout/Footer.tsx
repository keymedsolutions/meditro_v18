// import Link from 'next/link'; // For routing in Next.js
// import Image from 'next/image'; // For optimized image rendering
// import { ContactInfo, SocialAccountLinks } from '@/constant/constatnt';
// import { sanitizePhoneNumber } from '@/lib/utils';

// const Footer = () => {
//     return (
//         <footer
//             className="footer"
//             style={{ backgroundImage: `url(/images/background/footer.jpg)` }}
//         >
//             <div className="footer-top">
//                 <div className="container">
//                     <div className="row">
//                         {/* Logo Section */}
//                         <div className="col-xl-3 col-lg-3 col-md-6">
//                             <div className="widget widget_info">
//                                 <div className="footer-logo">
//                                     <Link href="/">
//                                         <Image
//                                             src="/images/logo.png"
//                                             alt="Logo"
//                                             width={150}
//                                             height={50}
//                                         />
//                                     </Link>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Quick Links */}
//                         <div className="col-xl-3 col-lg-3 col-6">
//                             <div className="widget footer_widget ml-50">
//                                 <h3 className="footer-title">Quick Links</h3>
//                                 <ul>
//                                     <li>
//                                         <Link href="/about-us">About Us</Link>
//                                     </li>
//                                     <li>
//                                         <Link href="/contact-us">Contact Us</Link>
//                                     </li>
//                                     <li>
//                                         <Link href="/icd-10-medical-coding-services">
//                                             ICD-10 Medical Coding
//                                         </Link>
//                                     </li>
//                                     <li>
//                                         <Link href="/pricing">
//                                             Pricing and Plans
//                                         </Link>
//                                     </li>

//                                     <li>
//                                         <Link href="/privacy-policy">
//                                             Privacy Policy
//                                         </Link>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>

//                         {/* Our Service */}
//                         <div className="col-xl-3 col-lg-3 col-6">
//                             <div className="widget footer_widget">
//                                 <h3 className="footer-title">Our Service</h3>
//                                 <ul>
//                                     <li>
//                                         <Link href="/medical-claim-billing-company">
//                                             Medical Claim Billing
//                                         </Link>
//                                     </li>
//                                     <li>
//                                         <Link href="/radiology-billing-services">
//                                             Radiology Billing Services
//                                         </Link>
//                                     </li>
//                                     <li>
//                                         <Link href="/cardiology-medical-billing">
//                                             Cardiology Medical Billing
//                                         </Link>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>

//                         {/* Contact Section */}
//                         <div className="col-xl-3 col-lg-3 col-6 ft-contact">
//                             <div className="contact-bx">
//                                 <div className="icon">
//                                     <i className="fas fa-phone-alt"></i>
//                                 </div>
//                                 <div className="contact-number">
//                                     <span>Contact Us</span>
//                                     <a href={`mailto:${ContactInfo.email}`}>
//                                         {ContactInfo.email}
//                                     </a>
//                                     <br />
//                                     <a href={`tel:${sanitizePhoneNumber(ContactInfo.phone)}`}>{ContactInfo.phone}</a>
//                                 </div>
//                             </div>
//                             <br />
//                             <div className="footer-social-link">
//                                 <ul className="social-media">
//                                     <li>
//                                         <a
//                                             rel="noreferrer"
//                                             target="_blank"
//                                             href={SocialAccountLinks.FACEBOOK}
//                                         >
//                                             <i className="fab fa-facebook"></i>
//                                         </a>
//                                     </li>
//                                     <li>
//                                         <a
//                                             rel="noreferrer"
//                                             target="_blank"
//                                             href={SocialAccountLinks.LINKEDIN}
//                                         >
//                                             <i className="fab fa-linkedin"></i>
//                                         </a>
//                                     </li>
//                                     <li>
//                                         <a
//                                             rel="noreferrer"
//                                             target="_blank"
//                                             href={SocialAccountLinks.INSTAGRAM}
//                                         >
//                                             <i className="fab fa-instagram"></i>
//                                         </a>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Footer Bottom */}
//             <div className="container">
//                 <div className="footer-bottom">
//                     <div className="row">

//                         <div className="col-12 col-md-12 col-12 text-center">
//                             <p className="copyright-text">
//                                 Copyright © {new Date().getFullYear()} Key MedSolutions
//                             </p>
//                         </div>

//                         <div className="col-12 col-md-12 col-12 text-center">
//                             <p className="copyright-text">
//                                 Key MedSolutions operates under the domain <Link href={'/'}>keymedsolution.com</Link>
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Animated Images */}
//             <Image
//                 className="pt-img1 animate-wave"
//                 src="/images/shap/wave-blue.png"
//                 alt="Wave Blue"
//                 width={100}
//                 height={100}
//             />
//             <Image
//                 className="pt-img2 animate1"
//                 src="/images/shap/circle-dots.png"
//                 alt="Circle Dots"
//                 width={100}
//                 height={100}
//             />
//             <Image
//                 className="pt-img3 animate-rotate"
//                 src="/images/shap/plus-blue.png"
//                 alt="Plus Blue"
//                 width={100}
//                 height={100}
//             />
//             <Image
//                 className="pt-img4 animate-wave"
//                 src="/images/shap/wave-blue.png"
//                 alt="Wave Blue"
//                 width={100}
//                 height={100}
//             />
//         </footer>
//     );
// };

// export default Footer;
"use client";

import Link from "next/link";
import Image from "next/image";
import { ContactInfo, SocialAccountLinks } from "@/constant/constatnt";
import { sanitizePhoneNumber } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { APP_PATH } from "@/data/PATH_APP";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  // Floating animation for decorative elements
  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      y: {
        repeat: Infinity,
        duration: 4,
        ease: "easeInOut",
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
        ease: "linear",
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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  // Hover animation for social icons
  const socialIconHover = {
    scale: 1.2,
    rotate: 5,
    transition: { type: "spring", stiffness: 300 },
  };

  return (
    <footer className="tw-relative tw-overflow-hidden tw-bg-gradient-to-br tw-from-blue-900 tw-via-blue-800 tw-to-indigo-900 tw-text-white tw-pt-16 tw-pb-8">
      {/* Animated background elements */}
      <motion.div
        className="tw-absolute tw--top-24 tw--left-24 tw-w-96 tw-h-96 tw-bg-accentOrange-200 tw-rounded-full tw-mix-blend-soft-light tw-opacity-30"
        animate={pulseAnimation}
      />

      <motion.div
        className="tw-absolute tw--bottom-24 tw--right-24 tw-w-80 tw-h-80 tw-bg-indigo-600 tw-rounded-full tw-mix-blend-soft-light tw-opacity-40"
        animate={pulseAnimation}
        transition={{ delay: 1 }}
      />

      <div className="tw-container tw-mx-auto tw-px-4 tw-relative tw-z-10">
        <motion.div
          className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 xl:tw-grid-cols-4 tw-gap-8 tw-mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Logo Section */}
          <motion.div className="tw-col-span-1" variants={itemVariants}>
            <div className="tw-widget tw-widget_info">
              <motion.div
                className="tw-footer-logo tw-mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link href="/">
                  <Image
                    src="/images/logo/footerlogo.png"
                    alt="Logo"
                    width={180}
                    height={60}
                    // className="tw-filter tw-brightness-0 tw-invert"
                  />
                </Link>
              </motion.div>
              <p className="tw-text-blue-100 tw-mb-4 tw-leading-relaxed">
                At Key MedSolutions, we make medical billing easy. We are a
                medical billing service that helps healthcare professionals
                focus on what is most important: caring for their patients. Our
                mission is to take the stress out of billing and make your
                revenue cycle work seamlessly.
              </p>
              <div className="tw-flex tw-space-x-4 tw-mt-6">
                {[
                  SocialAccountLinks.FACEBOOK,
                  SocialAccountLinks.LINKEDIN,
                  SocialAccountLinks.INSTAGRAM,
                ].map((link, index) => (
                  <motion.a
                    key={index}
                    href={link}
                    rel="noreferrer"
                    target="_blank"
                    aria-label={`${link===SocialAccountLinks.FACEBOOK?"Facebook":link===SocialAccountLinks.LINKEDIN?"LinkedIn":"Instagram"}`}
                    className="tw-w-10 tw-h-10 tw-rounded-full tw-bg-blue-700 tw-flex tw-items-center tw-justify-center"
                    whileHover={socialIconHover}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i
                      className={`fab fa-${
                        index === 0
                          ? "facebook"
                          : index === 1
                          ? "linkedin"
                          : "instagram"
                      } tw-text-white`}
                    ></i>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="tw-col-span-1" variants={itemVariants}>
            <h3 className="tw-text-white tw-text-xl tw-font-bold tw-mb-6 tw-relative tw-pb-2 after:tw-absolute after:tw-left-0 after:tw-bottom-0 after:tw-h-1 after:tw-w-12 after:tw-bg-blue-400 after:tw-rounded-full">
              Quick Links
            </h3>
            <ul className="tw-space-y-3">
              {[
                { href: "/about-us", label: "About Us" },
                { href: "/contact-us", label: "Contact Us" },
                // { href: "/pricing", label: "Pricing and Plans" },
                { href: "/privacy-policy", label: "Privacy Policy" },
              ].map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={link.href}
                    className="tw-text-blue-100 hover:tw-text-white tw-transition-colors tw-duration-300 tw-flex tw-items-center"
                  >
                    <span className="tw-w-2 tw-h-2 tw-bg-accentOrange-400 tw-rounded-full tw-mr-3"></span>
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Our Service */}
          <motion.div className="tw-col-span-1" variants={itemVariants}>
            <h3 className="tw-text-white tw-text-xl tw-font-bold tw-mb-6 tw-relative tw-pb-2 after:tw-absolute after:tw-left-0 after:tw-bottom-0 after:tw-h-1 after:tw-w-12 after:tw-bg-blue-400 after:tw-rounded-full">
              Our Services
            </h3>
            <ul className="tw-space-y-3">
              {[
                {
                  href: APP_PATH.services.physicianBilling.claimBilling.path,
                  label: "Medical Claim Billing",
                },
                {
                  href: APP_PATH.services.physicianBilling.radiologyBilling
                    .path,
                  label: "Radiology Billing Services",
                },
                {
                  href: APP_PATH.services.physicianBilling.cardiologyBilling
                    .path,
                  label: "Cardiology Medical Billing",
                },
                {
                  href: APP_PATH.services.nephrology.path,
                  label: "Nephrology Billing",
                },
                {
                  href: APP_PATH.services.codingServices.path,
                  label: "Medical Coding",
                },
                {
                  href: APP_PATH.services.codingServices.icd10Coding.path,
                  label: "ICD-10 Medical Coding",
                },
              ].map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={link.href}
                    className="tw-text-blue-100 hover:tw-text-white tw-transition-colors tw-duration-300 tw-flex tw-items-center"
                  >
                    <span className="tw-w-2 tw-h-2 tw-bg-accentOrange-400 tw-rounded-full tw-mr-3"></span>
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div className="tw-col-span-1" variants={itemVariants}>
            <h3 className="tw-text-white  tw-text-xl tw-font-bold tw-mb-6 tw-relative tw-pb-2 after:tw-absolute after:tw-left-0 after:tw-bottom-0 after:tw-h-1 after:tw-w-12 after:tw-bg-blue-400 after:tw-rounded-full">
              Contact Us
            </h3>
            <motion.div
              className="tw-contact-bx tw-p-6 tw-bg-blue-800/30 tw-rounded-xl tw-backdrop-blur-sm border tw-border-blue-700/30 tw-mb-6"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="tw-flex tw-items-start tw-mb-4">
                <motion.div
                  className="tw-icon tw-w-12 tw-h-12 tw-bg-blue-700 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-mr-4"
                  whileHover={{ rotate: 15 }}
                >
                  <i className="fas fa-phone-alt tw-text-white"></i>
                </motion.div>
                <div>
                  <span className="tw-block tw-text-blue-200 tw-text-sm">
                    Call us
                  </span>
                  <a
                    href={`tel:${sanitizePhoneNumber(ContactInfo.phone)}`}
                    className="tw-text-white tw-font-medium hover:tw-text-blue-300 tw-transition-colors"
                  >
                    {ContactInfo.phone}
                  </a>
                </div>
              </div>
              <div className="tw-flex tw-items-start">
                <motion.div
                  className="tw-icon tw-w-12 tw-h-12 tw-bg-blue-700 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-mr-4"
                  whileHover={{ rotate: 15 }}
                >
                  <i className="fas fa-envelope tw-text-white"></i>
                </motion.div>
                <div>
                  <span className="tw-block tw-text-blue-200 tw-text-sm">
                    Email us
                  </span>
                  <a
                    href={`mailto:${ContactInfo.email}`}
                    className=" tw-text-white tw-font-medium hover:tw-text-blue-300 tw-transition-colors sm:tw-break-normal tw-break-all"
                  >
                    {ContactInfo.email}
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          className="border-top tw-border-blue-700 tw-pt-8 tw-mt-8 tw-text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="tw-text-blue-200 tw-mb-2">
            Copyright © {currentYear} Key MedSolutions
          </p>
          <p className="tw-text-blue-200">
            Key MedSolutions operates under the domain&nbsp;
            <Link
              href="/"
              className="tw-text-white hover:tw-text-blue-300 tw-transition-colors tw-font-medium"
            >
              keymedsolution.com
            </Link>
          </p>
        </motion.div>
      </div>

      {/* Animated decorative elements */}
      <motion.div
        className="tw-absolute tw-bottom-10 tw-left-10 "
        animate={floatingAnimation}
      >
        <Image
          src="/images/shap/wave-orange.png"
          alt="Wave Ornage2"
          width={150}
          height={50}
        />
      </motion.div>

      <motion.div
        className="tw-absolute tw-top-20 tw-right-20 tw-opacity-50"
        animate={rotatingAnimation}
      >
        <Image
          src="/images/shap/circle-orange-2.png"
          alt="Circle Dots"
          width={80}
          height={80}
        />
      </motion.div>

      <motion.div
        className="tw-absolute tw-bottom-1/4 tw-right-1/4 tw-opacity-50"
        animate={rotatingAnimation}
        transition={{ duration: 25 }}
      >
        <Image
          src="/images/shap/plus-orange.png"
          alt="Plus Orange"
          width={60}
          height={60}
        />
      </motion.div>

      <motion.div
        className="tw-absolute tw-top-1/3 tw-left-1/4 tw-opacity-50"
        animate={floatingAnimation}
        transition={{ duration: 12, reverse: true }}
      >
        <Image
          src="/images/shap/wave-orange.png"
          alt="Wave Orange"
          width={120}
          height={40}
        />
      </motion.div>
    </footer>
  );
};

export default Footer;
