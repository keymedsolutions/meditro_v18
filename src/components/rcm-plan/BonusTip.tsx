import { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  ChevronDown,
  Calculator,
  Zap,
  UserCheck,
  BarChart3,
} from "lucide-react";

const BonusTip = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [specialty, setSpecialty] = useState("general");
  const [showCalculator, setShowCalculator] = useState(false);
  const [practiceSize, setPracticeSize] = useState(5);
  const [verificationVolume, setVerificationVolume] = useState(100);

  const plans: any = {
    monthly: [
      {
        name: "Basic",
        price: 299,
        features: [
          "Up to 50 verifications/month",
          "Standard turnaround (48-72 hours)",
          "Email support",
          "Basic reporting",
        ],
      },
      {
        name: "Professional",
        price: 599,
        popular: true,
        features: [
          "Up to 200 verifications/month",
          "Priority turnaround (24-48 hours)",
          "Phone & email support",
          "Advanced reporting",
          "Customizable workflows",
        ],
      },
      {
        name: "Enterprise",
        price: 999,
        features: [
          "Unlimited verifications",
          "Rush turnaround (same/next day)",
          "Dedicated account manager",
          "Custom integrations",
          "API access",
          "Training & onboarding",
        ],
      },
    ],
    annual: [
      {
        name: "Basic",
        price: 249,
        originalPrice: 299,
        features: [
          "Up to 50 verifications/month",
          "Standard turnaround (48-72 hours)",
          "Email support",
          "Basic reporting",
        ],
      },
      {
        name: "Professional",
        price: 499,
        originalPrice: 599,
        popular: true,
        features: [
          "Up to 200 verifications/month",
          "Priority turnaround (24-48 hours)",
          "Phone & email support",
          "Advanced reporting",
          "Customizable workflows",
        ],
      },
      {
        name: "Enterprise",
        price: 849,
        originalPrice: 999,
        features: [
          "Unlimited verifications",
          "Rush turnaround (same/next day)",
          "Dedicated account manager",
          "Custom integrations",
          "API access",
          "Training & onboarding",
        ],
      },
    ],
  };

  const specialties = [
    { value: "general", label: "General Practice" },
    { value: "cardiology", label: "Cardiology" },
    { value: "dentistry", label: "Dentistry" },
    { value: "orthopedics", label: "Orthopedics" },
  ];

  const addOns = [
    {
      name: "Rush Service",
      description: "Same/next-day turnaround",
      price: billingCycle === "monthly" ? 99 : 89,
      icon: Zap,
    },
    {
      name: "Dedicated Agents",
      description: "Full/part-time verification specialists",
      price: billingCycle === "monthly" ? 399 : 349,
      icon: UserCheck,
    },
    {
      name: "Advanced Reporting",
      description: "Deeper financial insights",
      price: billingCycle === "monthly" ? 149 : 129,
      icon: BarChart3,
    },
  ];

  const calculateCost = () => {
    const basePrice = plans[billingCycle][1].price;
    const volumeMultiplier = verificationVolume / 200;
    const sizeMultiplier = practiceSize / 10;

    return Math.round(basePrice * Math.max(volumeMultiplier, sizeMultiplier));
  };

  return (
    <div className="tw-min-h-screen tw-py-12 tw-px-4">
      <div className="sm:tw-container tw-mx-auto tw-max-w-6xl">
        {/* Header */}
        <motion.div
          className="tw-text-center tw-mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h1 className="tw-text-4xl tw-font-bold tw-text-gray-900 tw-mb-4">
            Transparent, Flexible Pricing
          </h1>
          <p className="tw-text-xl tw-text-gray-600 tw-max-w-3xl tw-mx-auto">
            Choose the plan that works for your practice with no hidden fees.
          </p>
        </motion.div>

        {/* Billing Toggle */}
        <motion.div
          className="tw-flex tw-justify-center tw-items-center tw-mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <span
            className={`tw-mr-4 tw-font-medium ${
              billingCycle === "monthly"
                ? "tw-text-blue-600"
                : "tw-text-gray-500"
            }`}
          >
            Monthly
          </span>
          <button
            className="tw-relative tw-w-16 tw-h-8 tw-flex tw-items-center tw-bg-gray-300 tw-rounded-full tw-p-1 tw-cursor-pointer"
            onClick={() =>
              setBillingCycle(billingCycle === "monthly" ? "annual" : "monthly")
            }
          >
            <motion.div
              className="tw-absolute tw-w-6 tw-h-6 tw-bg-white tw-rounded-full tw-shadow-md"
              animate={{
                left: billingCycle === "monthly" ? "0.25rem" : "2.25rem",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
            <div
              className={`tw-absolute tw-text-xs tw-font-bold ${
                billingCycle === "annual"
                  ? "tw-text-blue-600"
                  : "tw-text-gray-500"
              } tw-left-1`}
            >
              $
            </div>
            <div
              className={`tw-absolute tw-text-xs tw-font-bold ${
                billingCycle === "monthly"
                  ? "tw-text-blue-600"
                  : "tw-text-gray-500"
              } tw-right-1`}
            >
              $$
            </div>
          </button>
          <span
            className={`tw-ml-4 tw-font-medium ${
              billingCycle === "annual"
                ? "tw-text-blue-600"
                : "tw-text-gray-500"
            }`}
          >
            Annual{" "}
            <span className="tw-bg-green-100 tw-text-green-800 tw-text-xs tw-font-medium tw-ml-2 tw-px-2 tw-py-1 tw-rounded-full">
              Save 15%
            </span>
          </span>
        </motion.div>

        {/* Specialty Selector */}
        <motion.div
          className="tw-mb-12 tw-max-w-md tw-mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-700 tw-mb-2">
            Select Your Specialty
          </label>
          <div className="tw-relative">
            <select
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
              className="tw-appearance-none tw-w-full tw-bg-white border tw-border-gray-300 tw-rounded-lg tw-py-3 tw-px-4 tw-pr-8 tw-text-gray-700 tw-leading-tight focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-blue-500 focus:tw-border-transparent"
            >
              {specialties.map((spec) => (
                <option key={spec.value} value={spec.value}>
                  {spec.label}
                </option>
              ))}
            </select>
            <div className="tw-pointer-events-none tw-absolute tw-inset-y-0 tw-right-0 tw-flex tw-items-center tw-px-2 tw-text-gray-700">
              <ChevronDown size={20} />
            </div>
          </div>
          {specialty !== "general" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="tw-mt-4 tw-p-4 tw-bg-blue-50 tw-rounded-lg tw-text-sm"
            >
              {specialty === "cardiology" && (
                <p>
                  Cardiology plans include specialized pre-authorizations and
                  detailed breakdowns for cardiac procedures.
                </p>
              )}
              {specialty === "dentistry" && (
                <p>
                  Dental plans feature recurring benefit checks and quick
                  eligibility verification for dental codes.
                </p>
              )}
              {specialty === "orthopedics" && (
                <p>
                  Orthopedic packages include complex procedure verifications
                  and detailed treatment history tracking.
                </p>
              )}
            </motion.div>
          )}
        </motion.div>

        {/* Pricing Cards */}
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-8 tw-mb-16">
          {plans[billingCycle].map((plan:any, index:any) => (
            <motion.div
              key={plan.name}
              className={`tw-relative tw-bg-white tw-rounded-xl tw-shadow-lg ${
                plan.popular ? "tw-ring-2 tw-ring-blue-500" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {plan.popular && (
                <div className="!tw-z-20 tw-absolute tw-top-0 tw-left-1/2 tw-transform -tw-translate-x-1/2 -tw-translate-y-1/2 tw-bg-blue-600 tw-text-white tw-px-4 tw-py-1 tw-rounded-full tw-text-sm tw-font-semibold">
                  Most Popular
                </div>
              )}
              <div className="tw-p-8">
                <h3 className="tw-text-2xl tw-font-bold tw-text-gray-900">
                  {plan.name}
                </h3>
                <div className="tw-mt-4">
                  <span className="tw-text-4xl tw-font-bold tw-text-gray-900">
                    ${plan.price}
                  </span>
                  <span className="tw-text-gray-600">/month</span>
                  {plan.originalPrice && (
                    <span className="tw-ml-2 tw-text-sm tw-text-gray-500 tw-line-through">
                      ${plan.originalPrice}
                    </span>
                  )}
                </div>
                <ul className="tw-mt-6 tw-space-y-4">
                  {plan.features.map((feature:any, i:any) => (
                    <li key={i} className="tw-flex tw-items-start">
                      <Check
                        className="tw-text-green-500 tw-mr-2 tw-mt-0.5"
                        size={20}
                      />
                      <span className="tw-text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`tw-w-full tw-mt-8 tw-py-3 tw-px-4 tw-rounded-lg tw-font-medium tw-transition-all tw-duration-200 ${
                    plan.popular
                      ? "tw-bg-gradient-to-r tw-from-blue-600 tw-to-indigo-600 hover:tw-from-blue-700 hover:tw-to-indigo-700 tw-text-white"
                      : "tw-bg-gray-100 hover:tw-bg-gray-200 tw-text-gray-800"
                  }`}
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add-Ons Section */}
        <motion.div
          className="tw-mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="tw-text-3xl tw-font-bold tw-text-center tw-text-gray-900 tw-mb-8">
            Customizable Add-Ons
          </h2>
          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-6">
            {addOns.map((addOn, index) => (
              <motion.div
                key={addOn.name}
                className="tw-bg-white tw-p-6 tw-rounded-xl tw-shadow-md border tw-border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="tw-flex tw-items-center tw-mb-4">
                  <addOn.icon className="tw-text-blue-600 tw-mr-3" size={24} />
                  <h3 className="tw-text-xl tw-font-semibold tw-text-gray-900">
                    {addOn.name}
                  </h3>
                </div>
                <p className="tw-text-gray-600 tw-mb-4">{addOn.description}</p>
                <div className="tw-flex tw-justify-between tw-items-center">
                  <span className="tw-text-lg tw-font-bold tw-text-gray-900">
                    ${addOn.price}/month
                  </span>
                  <label className="tw-relative tw-inline-flex tw-items-center tw-cursor-pointer">
                    <input type="checkbox" className="tw-sr-only tw-peer" />
                    <div className="tw-w-11 tw-h-6 tw-bg-gray-200 tw-rounded-full tw-transition-colors tw-duration-200 peer-checked:tw-bg-blue-600"></div>
                    <div className="tw-absolute tw-left-0.5 tw-top-0.5 tw-w-5 tw-h-5 tw-bg-white tw-rounded-full tw-border tw-border-gray-300 tw-transition-transform peer-checked:tw-translate-x-5"></div>
                  </label>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Cost Calculator */}
        <motion.div
          className="tw-bg-white tw-rounded-xl tw-shadow-lg tw-overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <button
            className="tw-w-full tw-flex tw-justify-between tw-items-center tw-p-6 tw-bg-gray-50 hover:tw-bg-gray-100 tw-transition-colors"
            onClick={() => setShowCalculator(!showCalculator)}
          >
            <div className="tw-flex tw-items-center">
              <Calculator className="tw-text-blue-600 tw-mr-3" size={24} />
              <h2 className="tw-text-2xl tw-font-bold tw-text-gray-900">
                Transparent Cost Calculator
              </h2>
            </div>
            <ChevronDown
              className={`tw-text-gray-500 tw-transition-transform ${
                showCalculator ? "tw-rotate-180" : ""
              }`}
              size={24}
            />
          </button>

          {showCalculator && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="tw-p-6 border-t tw-border-gray-200"
            >
              <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-6 tw-mb-6">
                <div>
                  <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-700 tw-mb-2">
                    Number of Providers
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={practiceSize}
                    onChange={(e) => setPracticeSize(parseInt(e.target.value))}
                    className="tw-w-full tw-h-2 tw-bg-gray-200 tw-rounded-lg tw-appearance-none tw-cursor-pointer"
                  />
                  <div className="tw-flex tw-justify-between tw-mt-2">
                    <span className="tw-text-sm tw-text-gray-600">1</span>
                    <span className="tw-text-sm tw-font-medium tw-text-blue-600">
                      {practiceSize} providers
                    </span>
                    <span className="tw-text-sm tw-text-gray-600">50+</span>
                  </div>
                </div>
                <div>
                  <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-700 tw-mb-2">
                    Monthly Verification Volume
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="1000"
                    value={verificationVolume}
                    onChange={(e) =>
                      setVerificationVolume(parseInt(e.target.value))
                    }
                    className="tw-w-full tw-h-2 tw-bg-gray-200 tw-rounded-lg tw-appearance-none tw-cursor-pointer"
                  />
                  <div className="tw-flex tw-justify-between tw-mt-2">
                    <span className="tw-text-sm tw-text-gray-600">10</span>
                    <span className="tw-text-sm tw-font-medium tw-text-blue-600">
                      {verificationVolume} verifications
                    </span>
                    <span className="tw-text-sm tw-text-gray-600">1000+</span>
                  </div>
                </div>
              </div>

              <div className="tw-bg-blue-50 tw-p-4 tw-rounded-lg">
                <div className="tw-flex tw-justify-between tw-items-center">
                  <div>
                    <h3 className="tw-text-lg tw-font-semibold tw-text-gray-900">
                      Estimated Monthly Cost
                    </h3>
                    <p className="tw-text-gray-600">
                      Based on your practice size and volume
                    </p>
                  </div>
                  <div className="tw-text-3xl tw-font-bold tw-text-blue-600">
                    ${calculateCost()}
                  </div>
                </div>
              </div>

              <p className="tw-text-sm tw-text-gray-500 tw-mt-4">
                This is an estimate. Final pricing may vary based on your
                specific requirements and add-ons selected.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default BonusTip;
