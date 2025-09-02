import { motion } from "framer-motion";
import {
  CheckCircle,
  ArrowRight,
  BarChart3,
  ShieldCheck,
  Clock,
  DollarSign,
  TrendingUp,
  Zap,
  FileText,
  PieChart,
} from "lucide-react";

const MedicalBillingAdvantages = () => {
  return (
    <div className="tw-py-16 tw-px-4 tw-bg-gradient-to-br tw-from-blue-50 tw-via-white tw-to-indigo-50 tw-relative tw-overflow-hidden">
      {/* Background decorative elements */}
      <div className="tw-absolute tw--top-24 tw--right-24 tw-w-72 tw-h-72 tw-bg-blue-200/20 tw-rounded-full tw-blur-3xl"></div>
      <div className="tw-absolute tw--bottom-24 tw--left-24 tw-w-72 tw-h-72 tw-bg-indigo-200/20 tw-rounded-full tw-blur-3xl"></div>

      <div className="tw-container tw-mx-auto tw-relative tw-z-10">
        {/* Header Section */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="tw-text-center w-full tw-flex tw-flex-col tw-items-center"
        >
          <h2 className="tw-mx-auto tw-text-center tw-text-3xl md:tw-text-5xl tw-font-bold tw-font-serif tw-text-foreground tw-mb-10">
            The Smart Advantages of&nbsp;
            <span className="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
              Outsourcing Your
              <br /> Medical Billing Services
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="tw-mt-6 tw-text-lg tw-leading-relaxed tw-max-w-4xl tw-text-center"
          >
            Choosing to outsource your medical billing services brings a host of
            benefits to your practice. By letting experienced specialists manage
            complex billing workflows, you free up valuable time and resources,
            so your team can focus on delivering exceptional patient care.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="tw-mt-6 tw-text-lg tw-leading-relaxed tw-max-w-4xl tw-text-center"
          >
            Working with a reputable Medical Billing Company USA ensures that
            every aspect of your revenue cycle is handled by certified
            professionals familiar with payer requirements, regulatory updates,
            and insurance rules. The result? Fewer billing errors, reduced claim
            denials, faster reimbursements, and better cash flow for your
            healthcare business.
          </motion.p>
        </motion.div>

        {/* Main Content - Single Column Layout */}
        <div className="tw-max-w-4xl tw-mx-auto">
          {/* Animated Cards Section */}
          <motion.div
            className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-6 tw-mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Card 1 */}
            <motion.div
              className="tw-group tw-relative tw-bg-white tw-rounded-2xl tw-shadow-xl tw-p-6 border tw-border-gray-100 tw-overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-blue-50 tw-to-indigo-50 tw-opacity-0 group-hover:tw-opacity-100 tw-transition-opacity tw-duration-300"></div>
              <div className="tw-absolute tw--right-4 tw--top-4 tw-w-24 tw-h-24 tw-bg-blue-500/5 tw-rounded-full"></div>
              <div className="tw-relative tw-z-10">
                <div className="tw-w-14 tw-h-14 tw-bg-blue-100 tw-rounded-xl tw-flex tw-items-center tw-justify-center tw-mb-4">
                  <TrendingUp className="tw-w-7 tw-h-7 tw-text-blue-600" />
                </div>
                <h3 className="tw-text-xl tw-font-semibold tw-text-gray-800 tw-mb-2">
                  Increased Revenue
                </h3>
                <p className="tw-text-gray-600">
                  Higher claim approval rates and faster reimbursements
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="tw-group tw-relative tw-bg-white tw-rounded-2xl tw-shadow-xl tw-p-6 border tw-border-gray-100 tw-overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-green-50 tw-to-emerald-50 tw-opacity-0 group-hover:tw-opacity-100 tw-transition-opacity tw-duration-300"></div>
              <div className="tw-absolute tw--right-4 tw--top-4 tw-w-24 tw-h-24 tw-bg-green-500/5 tw-rounded-full"></div>
              <div className="tw-relative tw-z-10">
                <div className="tw-w-14 tw-h-14 tw-bg-green-100 tw-rounded-xl tw-flex tw-items-center tw-justify-center tw-mb-4">
                  <ShieldCheck className="tw-w-7 tw-h-7 tw-text-green-600" />
                </div>
                <h3 className="tw-text-xl tw-font-semibold tw-text-gray-800 tw-mb-2">
                  Compliance Assurance
                </h3>
                <p className="tw-text-gray-600">
                  Stay updated with latest regulatory guidelines
                </p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="tw-group tw-relative tw-bg-white tw-rounded-2xl tw-shadow-xl tw-p-6 border tw-border-gray-100 tw-overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-amber-50 tw-to-orange-50 tw-opacity-0 group-hover:tw-opacity-100 tw-transition-opacity tw-duration-300"></div>
              <div className="tw-absolute tw--right-4 tw--top-4 tw-w-24 tw-h-24 tw-bg-amber-500/5 tw-rounded-full"></div>
              <div className="tw-relative tw-z-10">
                <div className="tw-w-14 tw-h-14 tw-bg-amber-100 tw-rounded-xl tw-flex tw-items-center tw-justify-center tw-mb-4">
                  <Clock className="tw-w-7 tw-h-7 tw-text-amber-600" />
                </div>
                <h3 className="tw-text-xl tw-font-semibold tw-text-gray-800 tw-mb-2">
                  Time Savings
                </h3>
                <p className="tw-text-gray-600">
                  Reduced administrative burden for your staff
                </p>
              </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              className="tw-group tw-relative tw-bg-white tw-rounded-2xl tw-shadow-xl tw-p-6 border tw-border-gray-100 tw-overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-purple-50 tw-to-pink-50 tw-opacity-0 group-hover:tw-opacity-100 tw-transition-opacity tw-duration-300"></div>
              <div className="tw-absolute tw--right-4 tw--top-4 tw-w-24 tw-h-24 tw-bg-purple-500/5 tw-rounded-full"></div>
              <div className="tw-relative tw-z-10">
                <div className="tw-w-14 tw-h-14 tw-bg-purple-100 tw-rounded-xl tw-flex tw-items-center tw-justify-center tw-mb-4">
                  <DollarSign className="tw-w-7 tw-h-7 tw-text-purple-600" />
                </div>
                <h3 className="tw-text-xl tw-font-semibold tw-text-gray-800 tw-mb-2">
                  Cost Efficiency
                </h3>
                <p className="tw-text-gray-600">
                  Savings compared to in-house billing departments
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Advantages List Section */}
          <motion.div
            className="tw-bg-gradient-to-r tw-from-blue-600/5 tw-to-indigo-600/5 tw-p-8 tw-rounded-2xl border tw-border-blue-100 tw-mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h3
              className="tw-text-2xl tw-font-semibold tw-text-gray-800 tw-mb-6 tw-text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              Key advantages of outsourcing medical billing include:
            </motion.h3>

            <motion.ul className="tw-space-y-4">
              {[
                "Reduced administrative burden for your staff",
                "Stay updated with the latest billing compliance standards and regulatory guidelines",
                "Increased claim approval rates and lower A/R days",
                "Increased transparency and actionable revenue cycle insights",
                "Cost savings compared to managing in-house billing departments",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="tw-flex tw-items-start tw-bg-white tw-p-4 tw-rounded-xl tw-shadow-sm border tw-border-gray-100"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: 0.1 * index + 0.7,
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ x: 5 }}
                >
                  <CheckCircle className="tw-w-6 tw-h-6 tw-text-green-500 tw-mr-4 tw-mt-0.5 tw-flex-shrink-0" />
                  <span className="tw-text-gray-700 tw-text-lg">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MedicalBillingAdvantages;
