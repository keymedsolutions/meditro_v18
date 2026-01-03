// "use client";

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";

// export default function MainBanner() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   return (
//     <div className="tw-relative tw-w-full max-w-[640px]:tw-min-h-screen sm:tw-h-screen tw-overflow-hidden">
//       {/* Background Image */}
//       <div className="tw-absolute tw-inset-0 tw-z-0">
//         <Image
//           src="/assets/images/main-banner/bg-image.png" // You'll need to add your background image
//           alt="Modern talent acquisition and recruitment solutions"
//           fill
//           priority
//           sizes="(max-width: 640px) 100vw,
//          (max-width: 1024px) 100vw,
//          1200px"
//           className="tw-object-cover"
//           quality={75}
//         />

//         {/* Gradient Overlay from left to center */}
//         <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-accent-100/70 tw-via-white/60 tw-to-accent-200/60" />
//       </div>

//       <div className="tw-container tw-mx-auto tw-px-4 tw-h-full tw-relative tw-z-10 sm:tw-py-0 tw-py-28">
//         <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-12 tw-gap-8 tw-items-center tw-h-full">
//           {/* Content section - Left side with gradient */}
//           <motion.div
//             className="lg:tw-col-span-7 tw-space-y-6 tw-text-white"
//             initial={{ opacity: 0, x: -20 }}
//             animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
//             transition={{ duration: 0.6 }}
//           >
//             <h1 className="tw-text-black tw-text-3xl sm:tw-text-4xl lg:tw-text-5xl tw-font-bold tw-leading-tight">
//               Reinventing Talent Acquisition for the{" "}
//               <span className="tw-text-accent-500">Modern Workforce</span>
//             </h1>

//             <div className="tw-space-y-4 tw-text-lg tw-text-black tw-max-w-3xl">
//               <p className="tw-text-slate-700">
//                 Looking for a better way to build a top-performing team? You’ve
//                 come to the right place. At Key Medsolutions UK, we make hiring
//                 world-class talent easier, faster, and more cost-effective,
//                 right here in the UK and beyond.
//               </p>
//               <p className="tw-text-slate-700">
//                 With our recruitment, offshore support services, and remote
//                 staffing solutions, you get more speed, lower costs, and
//                 standout candidates every single time.
//               </p>
//             </div>

//             {/* Buttons */}
//             <motion.div
//               className="tw-flex tw-flex-col sm:tw-flex-row tw-gap-4 tw-mt-8"
//               initial={{ opacity: 0, y: 20 }}
//               animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//             >
//               <button className="tw-border-none tw-text-white tw-bg-accent-700 tw-px-8 tw-py-3 tw-rounded-full tw-font-semibold tw-text-lg hover:tw-bg-accent-800 tw-transition-colors tw-duration-300 tw-shadow-lg">
//                 Build Your Team
//               </button>
//               <button className="tw-border-none tw-text-white tw-bg-accent-700 tw-px-8 tw-py-3 tw-rounded-full tw-font-semibold tw-text-lg hover:tw-bg-accent-800 tw-transition-colors tw-duration-300 tw-shadow-lg">
//                 Speak to an Expert
//               </button>
//             </motion.div>
//           </motion.div>

//           {/* Right side - Optional image or decorative elements */}
//           <motion.div
//             className="lg:tw-col-span-5 tw-relative tw-hidden lg:tw-block"
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={
//               isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
//             }
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             {/* Optional decorative elements or image on the right side */}
//             <div className="tw-relative tw-h-96 tw-flex tw-items-center tw-justify-center">
//               {/* You can add an image here if needed */}
//               {/* <Image
//                 src="/images/hero/illustration.svg"
//                 alt="Team Illustration"
//                 width={400}
//                 height={400}
//                 className="tw-w-full tw-h-auto"
//               /> */}

//               {/* Decorative elements */}
//               <div className="tw-absolute tw-top-0 tw-right-0 tw-w-64 tw-h-64 tw-rounded-full tw-bg-white/10 tw-blur-3xl"></div>
//               <div className="tw-absolute tw-bottom-0 tw-left-0 tw-w-48 tw-h-48 tw-rounded-full tw-bg-blue-300/20 tw-blur-3xl"></div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function MainBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="tw-relative tw-w-full tw-min-h-screen tw-overflow-hidden">
      {/* Background Image */}
      <div className="tw-absolute tw-inset-0 tw-z-0">
        <Image
          src="/assets/images/main-banner/bg-image.png"
          alt="Modern talent acquisition and recruitment solutions"
          fill
          priority
          className="tw-object-cover"
          quality={75}
        />

        {/* DARK OVERLAY FOR READABILITY */}

        <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-t tw-from-accent-500/80 tw-via-black/70 tw-to-black/90" />
      </div>

      <div className="tw-container tw-mx-auto tw-relative tw-z-10 tw-px-4 tw-flex tw-items-center tw-min-h-screen">
        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-12 tw-gap-10 tw-w-full">
          {/* CONTENT */}
          <motion.div
            className="lg:tw-col-span-7"
            initial={{ opacity: 0, x: -24 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            {/* GLASS CARD */}
            <div className=" tw-rounded-3xl tw-p-8 sm:tw-p-12 tw-shadow-[0px_0px_100px_50px_rgba(255,_255,_255,_0.05)] tw-max-w-3xl">
              <h1 className="tw-text-3xl sm:tw-text-4xl lg:tw-text-5xl tw-font-bold tw-leading-tight tw-text-white">
                Reinventing Talent Acquisition for the{" "}
                <span className="tw-text-accent-500">Modern Workforce</span>
              </h1>

              <div className="tw-mt-6 tw-space-y-4 tw-text-base sm:tw-text-lg tw-text-slate-900">
                <p className="tw-text-white">
                  Looking for a better way to build a top-performing team?
                  You’re in the right place. We make hiring faster, smarter, and
                  cost-effective across the UK and globally.
                </p>
                <p className="tw-text-white">
                  Our recruitment, offshore support, and remote staffing
                  solutions deliver speed, savings, and standout talent — every
                  single time.
                </p>
              </div>

              {/* CTA BUTTONS */}
              <motion.div
                className="tw-mt-8 tw-flex tw-flex-col sm:tw-flex-row tw-gap-4"
                initial={{ opacity: 0, y: 16 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                <button
                  className="tw-inline-flex tw-items-center tw-justify-center tw-rounded-full tw-px-5 tw-py-2.5 tw-text-sm sm:tw-text-base tw-font-semibold tw-bg-accent-500 tw-text-white tw-shadow-lg tw-shadow-accent-300/70 tw-transition tw-duration-200 hover:tw-translate-y-[1px]"
                  style={{
                    border: "1px solid rgba(255,255,255,0.9)",
                  }}
                >
                  Build Your Team
                </button>

                <button
                  className="tw-inline-flex tw-items-center tw-justify-center tw-rounded-full tw-px-5 tw-py-2.5 tw-text-sm sm:tw-text-base tw-font-semibold tw-bg-white tw-text-slate-900 tw-shadow-sm tw-border-transparent tw-transition tw-duration-200 hover:tw-translate-y-[1px]"
                  style={{
                    border: "1px solid rgba(148,163,184,0.4)",
                  }}
                >
                  Speak to an Expert
                </button>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT DECORATIVE */}
          <motion.div
            className="lg:tw-col-span-5 tw-hidden lg:tw-flex tw-items-center tw-justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="tw-relative tw-w-96 tw-h-96">
              <div className="tw-absolute tw-inset-0 tw-rounded-full tw-bg-accent-500/20 tw-blur-3xl" />
              <div className="tw-absolute tw-inset-12 tw-rounded-full tw-bg-white/10 tw-blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
