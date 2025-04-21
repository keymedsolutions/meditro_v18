/* eslint-disable @next/next/no-img-element */

import SectionHeading from '@/components/ui/section-heading';
import { motion } from 'framer-motion';

const WhyUsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  };

  return (
    <section className="tw-py-16 md:tw-py-24 tw-relative tw-overflow-hidden tw-bg-gradient-to-b tw-from-white tw-to-blue-50" id="whyus">
      <div className="tw-text-center">
        <SectionHeading title="What Sets Us Apart" subtitle="About Us" />



      </div>

      <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-overflow-hidden tw-z-0">
        <motion.div
          className="tw-absolute tw-top-10 tw-left-10 tw-w-80 tw-h-80 tw-bg-primary-200 tw-rounded-full tw-opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          className="tw-absolute tw-bottom-10 tw-right-10 tw-w-96 tw-h-96 tw-bg-primary-100 tw-rounded-full tw-opacity-10"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      <div className="tw-container tw-relative tw-z-10">
        <div className="tw-grid md:tw-grid-cols-2 tw-gap-12 tw-items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="tw-order-2 md:tw-order-1"
          >
            <img
              src="/images/gallery/pic1.jpg"
              alt="Medical professional working"
              className="tw-rounded-xl tw-shadow-xl tw-w-full tw-object-cover"
            />
          </motion.div>

          <motion.div
            className="tw-order-1 md:tw-order-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >




            <motion.p
              variants={itemVariants}
              className="tw-text-lg tw-text-gray-600 tw-mb-8"
            >
              Our physician billing services at KeyMed Solutions are powered by a combination of innovation, technology, and experience. We have a thorough understanding of the particular needs and challenges of your practice because, unlike generic billing vendors, we specialize in a variety of medical specialties.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="tw-text-lg tw-text-gray-600 tw-mb-8"
            >
              Our technology-driven strategy is what really sets us apart. We use data-driven tactics and a smooth integration with your Electronic Health Record (EHR) system to improve revenue cycle management, decrease denials, and increase claim accuracy.
            </motion.p>


            <motion.p
              variants={itemVariants}
              className="tw-text-lg tw-text-gray-600 tw-mb-8"
            >
              More than just billing services are provided by KeyMed Solutions; you also get a reliable partner committed to your financial success. 🚀            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
