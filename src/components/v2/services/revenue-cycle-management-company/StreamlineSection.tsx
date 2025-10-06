// import { motion } from 'framer-motion';
// import { HeartHandshake, ArrowRight, Sparkles, Target, BarChart3, Users } from 'lucide-react';

// const StreamlineSection = () => {
//   return (
//     <div className="tw-min-h-screen tw-py-16 tw-px-4 tw-bg-gradient-to-br tw-from-blue-50 tw-via-white tw-to-indigo-50 tw-relative tw-overflow-hidden">
//       {/* Background decorative elements */}
//       <div className="tw-absolute tw-top-0 tw-left-0 tw-w-72 tw-h-72 tw-bg-blue-200 tw-rounded-full tw-filter tw-blur-3xl tw-opacity-30 tw--translate-x-1/2 tw--translate-y-1/2"></div>
//       <div className="tw-absolute tw-bottom-0 tw-right-0 tw-w-96 tw-h-96 tw-bg-purple-200 tw-rounded-full tw-filter tw-blur-3xl tw-opacity-30 tw-translate-x-1/3 tw-translate-y-1/3"></div>

//       <div className="tw-container tw-mx-auto tw-relative tw-z-10">
//         {/* Header Section */}
//         <motion.div
//           className="tw-text-center tw-mb-16"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//           viewport={{ once: true, amount: 0.2 }}
//         >
//           <div className="tw-inline-flex tw-items-center tw-gap-2 tw-bg-blue-100 tw-text-blue-700 tw-font-medium tw-px-4 tw-py-2 tw-rounded-full tw-mb-6">
//             <Sparkles className="tw-w-4 tw-h-4" />
//             <span>Practice Transformation</span>
//           </div>
//           <h2 className="tw-text-4xl md:tw-text-5xl tw-font-bold tw-mb-6 tw-text-gray-800">
//             Streamline Your Practice, Enhance Patient Care
//           </h2>
//         </motion.div>

//         {/* Main Content Section */}
//         <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-12 tw-items-center tw-mb-20">
//           {/* Text Content */}
//           <motion.div
//             className="tw-space-y-6"
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//             viewport={{ once: true, amount: 0.2 }}
//           >
//             <p className="tw-text-xl tw-text-gray-700">
//               Managing your revenue cycle can be simple and stress-free with the right support. With Key MedSolutions as your trusted partner, you gain not just a service provider but an extension of your team.
//             </p>

//             <p className="tw-text-xl tw-text-gray-700">
//               By utilizing our end-to-end Revenue Cycle Management Services, you can redirect your focus to what truly matters – providing exceptional quality care to your patients.
//             </p>

//             {/* Feature Highlights */}
//             <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 tw-gap-4 tw-mt-8">
//               <div className="tw-flex tw-items-center tw-gap-3 tw-p-4 tw-bg-white tw-rounded-xl tw-shadow-sm border tw-border-gray-100">
//                 <div className="tw-w-10 tw-h-10 tw-bg-blue-100 tw-rounded-lg tw-flex tw-items-center tw-justify-center tw-text-blue-600">
//                   <Target className="tw-w-5 tw-h-5" />
//                 </div>
//                 <span className="tw-font-medium">Focus on Patients</span>
//               </div>

//               <div className="tw-flex tw-items-center tw-gap-3 tw-p-4 tw-bg-white tw-rounded-xl tw-shadow-sm border tw-border-gray-100">
//                 <div className="tw-w-10 tw-h-10 tw-bg-purple-100 tw-rounded-lg tw-flex tw-items-center tw-justify-center tw-text-purple-600">
//                   <BarChart3 className="tw-w-5 tw-h-5" />
//                 </div>
//                 <span className="tw-font-medium">Reduce Stress</span>
//               </div>

//               <div className="tw-flex tw-items-center tw-gap-3 tw-p-4 tw-bg-white tw-rounded-xl tw-shadow-sm border tw-border-gray-100">
//                 <div className="tw-w-10 tw-h-10 tw-bg-green-100 tw-rounded-lg tw-flex tw-items-center tw-justify-center tw-text-green-600">
//                   <Users className="tw-w-5 tw-h-5" />
//                 </div>
//                 <span className="tw-font-medium">Team Extension</span>
//               </div>

//               <div className="tw-flex tw-items-center tw-gap-3 tw-p-4 tw-bg-white tw-rounded-xl tw-shadow-sm border tw-border-gray-100">
//                 <div className="tw-w-10 tw-h-10 tw-bg-orange-100 tw-rounded-lg tw-flex tw-items-center tw-justify-center tw-text-orange-600">
//                   <HeartHandshake className="tw-w-5 tw-h-5" />
//                 </div>
//                 <span className="tw-font-medium">Trusted Partnership</span>
//               </div>
//             </div>
//           </motion.div>

//           {/* Visual Element */}
//           <motion.div
//             className="tw-relative"
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//             viewport={{ once: true, amount: 0.2 }}
//           >
//             <div className="tw-relative tw-bg-gradient-to-br tw-from-blue-600 tw-to-purple-700 tw-rounded-2xl tw-p-8 tw-text-white tw-shadow-xl tw-overflow-hidden">
//               <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-1 tw-bg-gradient-to-r tw-from-blue-400 tw-to-purple-400"></div>

//               <div className="tw-absolute tw--top-4 tw--right-4 tw-w-24 tw-h-24 tw-bg-white/10 tw-rounded-full"></div>
//               <div className="tw-absolute tw--bottom-4 tw--left-4 tw-w-32 tw-h-32 tw-bg-white/5 tw-rounded-full"></div>

//               <div className="tw-relative tw-z-10">
//                 <div className="tw-w-16 tw-h-16 tw-bg-white/20 tw-rounded-2xl tw-flex tw-items-center tw-justify-center tw-mb-6 tw-backdrop-blur-sm">
//                   <HeartHandshake className="tw-w-8 tw-h-8" />
//                 </div>

//                 <h3 className="tw-text-2xl tw-font-bold tw-mb-4 tw-text-accentOrange-500">The Key MedSolutions Advantage</h3>

//                 <ul className="tw-space-y-3 tw-mb-6">
//                   <li className="tw-flex tw-items-start tw-gap-2">
//                     <div className="tw-w-5 tw-h-5 tw-bg-white tw-text-blue-600 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-mt-1 tw-flex-shrink-0">
//                       <div className="tw-w-2 tw-h-2 tw-bg-blue-600 tw-rounded-full"></div>
//                     </div>
//                     <span>Transform your financial operations</span>
//                   </li>
//                   <li className="tw-flex tw-items-start tw-gap-2">
//                     <div className="tw-w-5 tw-h-5 tw-bg-white tw-text-blue-600 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-mt-1 tw-flex-shrink-0">
//                       <div className="tw-w-2 tw-h-2 tw-bg-blue-600 tw-rounded-full"></div>
//                     </div>
//                     <span>Reduce denials significantly</span>
//                   </li>
//                   <li className="tw-flex tw-items-start tw-gap-2">
//                     <div className="tw-w-5 tw-h-5 tw-bg-white tw-text-blue-600 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-mt-1 tw-flex-shrink-0">
//                       <div className="tw-w-2 tw-h-2 tw-bg-blue-600 tw-rounded-full"></div>
//                     </div>
//                     <span>Pave the way for future growth</span>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         {/* CTA Section */}
//         <motion.div
//           className="tw-text-center"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//           viewport={{ once: true, amount: 0.2 }}
//         >
//           <h3 className="tw-text-2xl md:tw-text-3xl tw-font-bold tw-mb-6 tw-text-gray-800">
//             Ready to Transform Your Practice?
//           </h3>
//           <p className="tw-text-xl tw-text-gray-600 tw-mb-8 tw-max-w-2xl tw-mx-auto">
//             Contact us today for a free consultation and discover how our Revenue Cycle Management Services can transform your financial operations, reduce denials, and pave the way for future growth. Experience the Key MedSolutions advantage and unlock the potential of efficient, streamlined RCM.
//           </p>

//           <div className="tw-flex tw-flex-col sm:tw-flex-row tw-gap-4 tw-justify-center">
//             <button className="tw-group tw-relative tw-overflow-hidden tw-bg-gradient-to-r tw-from-blue-600 tw-to-purple-600 tw-text-white tw-font-semibold tw-px-8 tw-py-4 tw-rounded-xl tw-shadow-lg hover:tw-shadow-xl tw-transition-all tw-duration-300">
//               <span className="tw-relative tw-z-10 tw-flex tw-items-center tw-gap-2">
//                 Schedule Free Consultation
//                 <ArrowRight className="tw-w-5 tw-h-5 group-hover:tw-translate-x-1 tw-transition-transform" />
//               </span>
//               <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-r tw-from-blue-500 tw-to-purple-500 tw-transform group-hover:tw-scale-105 tw-transition-transform tw-duration-300 tw--z-0"></div>
//             </button>

//             <button className="tw-group tw-relative tw-overflow-hidden tw-bg-white tw-text-blue-600 tw-font-semibold tw-px-8 tw-py-4 tw-rounded-xl tw-shadow-lg border tw-border-blue-200 hover:tw-shadow-xl tw-transition-all tw-duration-300">
//               <span className="tw-relative tw-z-10">Learn More</span>
//               <div className="tw-absolute tw-inset-0 tw-bg-blue-50 tw-transform group-hover:tw-scale-105 tw-transition-transform tw-duration-300 tw--z-0"></div>
//             </button>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default StreamlineSection;

import { APP_PATH } from "@/data/PATH_APP";
import { motion } from "framer-motion";
import {
  HeartHandshake,
  ArrowRight,
  Sparkles,
  Target,
  BarChart3,
  Users,
  Phone,
} from "lucide-react";
import Link from "next/link";

const StreamlineSection = () => {
  return (
    <div className="tw-min-h-screen tw-py-16 tw-px-4 tw-bg-gradient-to-br tw-from-blue-50 tw-via-white tw-to-indigo-50 tw-relative tw-overflow-hidden">
      {/* Background decorative elements */}
      <div className="tw-absolute tw-top-0 tw-left-0 tw-w-72 tw-h-72 tw-bg-blue-200 tw-rounded-full tw-filter tw-blur-3xl tw-opacity-30 tw--translate-x-1/2 tw--translate-y-1/2"></div>
      <div className="tw-absolute tw-bottom-0 tw-right-0 tw-w-96 tw-h-96 tw-bg-purple-200 tw-rounded-full tw-filter tw-blur-3xl tw-opacity-30 tw-translate-x-1/3 tw-translate-y-1/3"></div>

      <div className="sm:tw-container tw-mx-auto tw-relative tw-z-10">
        {/* Header Section */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="tw-text-center tw-mb-20 tw-pt-20 "
        >
          <h2 className="tw-mx-auto tw-text-center tw-text-3xl md:tw-text-5xl tw-font-bold tw-font-serif tw-text-foreground tw-mb-10">
            Streamline Your Practice,&nbsp;
            <br />
            <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
              Enhance Patient Care
            </span>
          </h2>
        </motion.div>
        {/* Main Content Section */}
        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-12">
          {/* Text Content */}
          <motion.div
            className="tw-space-y-6 tw-py-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="tw-text-xl tw-text-gray-700">
              Managing your revenue cycle can be simple and stress-free with the
              right support. With Key MedSolutions as your trusted partner, you
              gain not just a service provider but an extension of your team.
            </p>

            <p className="tw-text-xl tw-text-gray-700">
              By utilizing our end-to-end Revenue Cycle Management Services, you
              can redirect your focus to what truly matters – providing
              exceptional quality care to your patients.
            </p>

            {/* Feature Highlights */}
            <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 tw-gap-4 tw-mt-8">
              <div className="tw-flex tw-items-center tw-gap-3 tw-p-4 tw-bg-white tw-rounded-xl tw-shadow-sm border tw-border-gray-100">
                <div className="tw-w-10 tw-h-10 tw-bg-blue-100 tw-rounded-lg tw-flex tw-items-center tw-justify-center tw-text-blue-600">
                  <Target className="tw-w-5 tw-h-5" />
                </div>
                <span className="tw-font-medium">Focus on Patients</span>
              </div>

              <div className="tw-flex tw-items-center tw-gap-3 tw-p-4 tw-bg-white tw-rounded-xl tw-shadow-sm border tw-border-gray-100">
                <div className="tw-w-10 tw-h-10 tw-bg-purple-100 tw-rounded-lg tw-flex tw-items-center tw-justify-center tw-text-purple-600">
                  <BarChart3 className="tw-w-5 tw-h-5" />
                </div>
                <span className="tw-font-medium">Reduce Stress</span>
              </div>

              <div className="tw-flex tw-items-center tw-gap-3 tw-p-4 tw-bg-white tw-rounded-xl tw-shadow-sm border tw-border-gray-100">
                <div className="tw-w-10 tw-h-10 tw-bg-green-100 tw-rounded-lg tw-flex tw-items-center tw-justify-center tw-text-green-600">
                  <Users className="tw-w-5 tw-h-5" />
                </div>
                <span className="tw-font-medium">Team Extension</span>
              </div>

              <div className="tw-flex tw-items-center tw-gap-3 tw-p-4 tw-bg-white tw-rounded-xl tw-shadow-sm border tw-border-gray-100">
                <div className="tw-w-10 tw-h-10 tw-bg-orange-100 tw-rounded-lg tw-flex tw-items-center tw-justify-center tw-text-orange-600">
                  <HeartHandshake className="tw-w-5 tw-h-5" />
                </div>
                <span className="tw-font-medium">Trusted Partnership</span>
              </div>
            </div>
          </motion.div>

          {/* Visual Element with Integrated CTA */}
          <motion.div
            className="tw-relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="tw-relative tw-bg-gradient-to-br tw-from-blue-600 tw-to-purple-700 tw-rounded-2xl tw-p-8 tw-text-white tw-shadow-xl tw-overflow-hidden">
              <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-1 tw-bg-gradient-to-r tw-from-blue-400 tw-to-purple-400"></div>

              <div className="tw-absolute tw--top-4 tw--right-4 tw-w-24 tw-h-24 tw-bg-white/10 tw-rounded-full"></div>
              <div className="tw-absolute tw--bottom-4 tw--left-4 tw-w-32 tw-h-32 tw-bg-white/5 tw-rounded-full"></div>

              <div className="tw-relative tw-z-10">
                <div className="tw-w-16 tw-h-16 tw-bg-white/20 tw-rounded-2xl tw-flex tw-items-center tw-justify-center tw-mb-6 tw-backdrop-blur-sm">
                  <HeartHandshake className="tw-w-8 tw-h-8" />
                </div>

                <h3 className="tw-text-2xl tw-font-bold tw-mb-4 tw-text-accentOrange-500">
                  The Key MedSolutions Advantage
                </h3>

                <ul className="tw-space-y-3 tw-mb-6">
                  <li className="tw-flex tw-items-start tw-gap-2">
                    <div className="tw-w-5 tw-h-5 tw-bg-white tw-text-blue-600 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-mt-1 tw-flex-shrink-0">
                      <div className="tw-w-2 tw-h-2 tw-bg-blue-600 tw-rounded-full"></div>
                    </div>
                    <span>Transform your financial operations</span>
                  </li>
                  <li className="tw-flex tw-items-start tw-gap-2">
                    <div className="tw-w-5 tw-h-5 tw-bg-white tw-text-blue-600 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-mt-1 tw-flex-shrink-0">
                      <div className="tw-w-2 tw-h-2 tw-bg-blue-600 tw-rounded-full"></div>
                    </div>
                    <span>Reduce denials significantly</span>
                  </li>
                  <li className="tw-flex tw-items-start tw-gap-2">
                    <div className="tw-w-5 tw-h-5 tw-bg-white tw-text-blue-600 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-mt-1 tw-flex-shrink-0">
                      <div className="tw-w-2 tw-h-2 tw-bg-blue-600 tw-rounded-full"></div>
                    </div>
                    <span>Pave the way for future growth</span>
                  </li>
                </ul>

                {/* Integrated CTA Section */}
                <div className="tw-pt-6 tw-mt-6 tw-border-t tw-border-white/20">
                  <h4 className="tw-text-xl tw-font-bold tw-mb-4 tw-text-accentOrange-500">
                    Ready to Transform Your Practice?
                  </h4>
                  <p className="tw-text-blue-100 tw-mb-6">
                    Contact us today for a free consultation and discover how
                    our Revenue Cycle Management Services can transform your
                    financial operations, reduce denials, and pave the way for
                    future growth. Experience the Key MedSolutions advantage and
                    unlock the potential of efficient, streamlined RCM.
                  </p>

                  <div className="tw-flex tw-flex-col tw-gap-3">
                    <Link href={APP_PATH.contactus.path}>
                      <motion.button
                        type="button"
                        className="button-get-started"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.6,
                          ease: "easeOut",
                          delay: 0.4,
                        }}
                        viewport={{ once: true, amount: 0.2 }}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="fold"></span>

                        <div className="points_wrapper">
                          <i className="point"></i>
                          <i className="point"></i>
                          <i className="point"></i>
                          <i className="point"></i>
                          <i className="point"></i>
                          <i className="point"></i>
                          <i className="point"></i>
                          <i className="point"></i>
                          <i className="point"></i>
                          <i className="point"></i>
                        </div>

                        <span className="inner">
                          <Phone className="tw-w-4 tw-h-4" />
                          Schedule Free Consultation
                          <ArrowRight className="tw-w-4 tw-h-4 group-hover:tw-translate-x-1 tw-transition-transform" />
                        </span>
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default StreamlineSection;
