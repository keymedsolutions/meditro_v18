'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Rocket, ArrowRight } from 'lucide-react';

const RCMPlanBanner = () => {
  return (
    <div className='tw-w-full tw-flex tw-justify-center tw-items-center tw-mt-6 tw-px-4'>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="tw-flex  tw-flex-col md:tw-flex-row tw-items-center tw-justify-center tw-gap-4 md:tw-gap-6 tw-text-center"
      >
        <p className="!tw-m-0 tw-flex tw-items-center tw-text-lg md:tw-text-xl tw-font-semibold tw-text-gray-800 tw-font-display">
          <Rocket className="tw-text-secondary tw-w-5 tw-h-5 md:tw-w-6 md:tw-h-6 tw-mr-2" />
          Unlock your future with
          <ArrowRight className='tw-ml-2 tw-w-5 tw-h-5 md:tw-w-6 md:tw-h-6' />
        </p>

        <motion.ul
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="!tw-m-0 tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-justify-center tw-gap-3 md:tw-gap-6"
        >
          <Link href="/rcm-plan">
            <motion.li
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="!tw-m-0 tw-flex tw-items-center tw-justify-center tw-px-6 tw-text-lg tw-bg-white/40 tw-rounded-full   tw-text-gray-900 border-gradient"
            >
              <span>RCM Plan and Training & Placement</span>
            </motion.li>
          </Link>
        </motion.ul>
      </motion.div>
    </div>
  );
};

export default RCMPlanBanner;
