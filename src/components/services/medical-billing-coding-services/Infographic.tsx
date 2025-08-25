import { chunkArray } from "@/lib/utils";
import React from "react";
import {
  BadgeCheck,
  Settings2,
  Cpu,
  ShieldCheck,
  Headphones,
} from "lucide-react";
import { motion } from "framer-motion";

const aspects = [
  {
    id: 1,
    title: "Certified Coders",
    description:
      "Our team holds certifications from accredited institutions, ensuring industry expertise.",
    icon: BadgeCheck,
    color: "tw-bg-[#5CBFCE]", // Teal
  },
  {
    id: 2,
    title: "Customized Solutions",
    description:
      "Each solution we offer is tailored to the specific requirements of practices and providers.",
    icon: Settings2,
    color: "tw-bg-[#A9C0BD]", // Light green/gray
  },
  {
    id: 3,
    title: "Advanced Technology",
    description:
      "We utilize cutting-edge analytics tools and software for real-time data verification and claim accuracy.",
    icon: Cpu,
    color: "tw-bg-[#C8A8D1]", // Light purple
  },
  {
    id: 4,
    title: "Proactive Compliance Measures",
    description:
      "We stay updated with ICD-10 revisions, payer-specific rules, and regulatory changes to secure continuous compliance.",
    icon: ShieldCheck,
    color: "tw-bg-[#7A8BC3]", // Blue/purple
  },
  {
    id: 5,
    title: "Exceptional Customer Service",
    description:
      "Our client-first approach ensures effective communication and transparent operations.",
    icon: Headphones,
    color: "tw-bg-[#26B6C6]", // Turquoise
  },
];

const chunkAspects = chunkArray(aspects, 3);

const Infographic: React.FC = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="infographic-div">
            {chunkAspects?.map((row, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className=" figure tw-relative tw-z-10 "
                >
                  {row?.map((aspect) => (
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                      className="figure__path"
                      key={aspect.id}
                    >
                      <span className={`figure__pathStart ${aspect.color}`}>
                        <div
                          className={` tw-bg-gradient-to-r ${
                            aspect.color
                          }  figure__product ${
                            index % 2 !== 0
                              ? "figure__product--right"
                              : "figure__product--left"
                          }`}
                        >
                          <div className="figure__productContent px-3">
                            <h3 className="figure__productName tw-font-display tw-text-center tw-p-2 tw-text-lg">
                              {aspect.title}
                            </h3>
                            <p className="tw-text-wrap tw-text-gray-600">
                              {aspect.description}
                            </p>
                          </div>
                          <div className="figure__productIconBox count-num tw-font-display">
                            {aspect.id}
                          </div>
                        </div>
                      </span>
                      {Array.from({ length: 10 }).map((_, i) => (
                        <span key={i} className="figure__pathPoint"></span>
                      ))}
                    </motion.div>
                  ))}
                </motion.div>
              );
            })}
          </div>

          <div className="infographic-div infographic-div-mobile">
            {aspects.map((aspect) => (
              <div
                key={aspect.id}
                className={` tw-rounded-3xl  tw-relative tw-max-w-lg tw-mx-auto tw-mt-10 ${aspect.color}`}
              >
                <div
                  className={`tw-absolute -tw-top-7 tw-left-1/2 tw-transform -tw-translate-x-1/2 tw-z-20 tw-text-xl tw-font-bold tw-w-16 tw-h-16 tw-flex tw-items-center tw-justify-center tw-rounded-full tw-shadow-lg tw-ring-4 tw-ring-cyan-100  ${aspect.color}`}
                >
                  {aspect.id}
                </div>

                <div className="tw-text-white tw-rounded-3xl tw-p-8 tw-pt-16 tw-shadow-xl tw-text-center tw-relative tw-z-10">
                  <h2 className="tw-text-2xl tw-font-bold tw-mb-4">
                    {aspect.title}
                  </h2>
                  <p className="tw-text-base tw-text-white/90">
                    {aspect.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infographic;
