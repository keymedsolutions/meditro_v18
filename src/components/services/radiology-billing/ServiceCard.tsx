/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion"
function ServiceCard({ title, description, icon: Icon, delay = 0, gradient }: any) {

  return (
    <motion.div
    className={`tw-bg-white tw-p-6 tw-rounded-xl tw-shadow-md hover:tw-shadow-xl tw-transition-shadow tw-duration-300`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: delay * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
  >
      <div className="tw-p-2 tw-bg-blue-50 tw-rounded-lg tw-inline-block tw-mb-4">{Icon}</div>
    <h4 className="tw-text-lg tw-font-semibold tw-text-blue-900 tw-mb-2">{title}</h4>
    <p className="tw-text-gray-600">{description}</p>
  </motion.div>
  )
}

export default ServiceCard
