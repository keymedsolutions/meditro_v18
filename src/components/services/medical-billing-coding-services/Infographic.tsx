import { chunkArray } from "@/lib/utils";
import React from "react";
import { FileCode, FileX, BarChart3, ClipboardCheck, Users, DollarSign } from "lucide-react"
import { motion } from "framer-motion";


const aspects = [
  {
    id: 1,
    title: "Patient Information & Eligibility Verification",
    description:
      "To avoid claims being denied because of false information, we gather and verify patient demographics, insurance information, and coverage.",
    icon: Users,
    color: "tw-bg-[#5CBFCE]", // Teal
  },
  {
    id: 2,
    title: "Accurate Medical Coding",
    description:
      "To guarantee compliance, minimize denials, and optimize reimbursements, our certified coders assign accurate ICD-10, CPT, and HCPCS codes.",
    icon: FileCode,
    color: "tw-bg-[#A9C0BD]", // Light green/gray
  },
  {
    id: 3,
    title: "Claims Preparation & Submission",
    description:
      "After carefully checking claims for mistakes, we electronically submit them to insurance payers for expedited processing and approval.",
    icon: ClipboardCheck,
    color: "tw-bg-[#C8A8D1]", // Light purple
  },
  {
    id: 4,
    title: "Payment Posting & Reconciliation",
    description:
      "To make sure every service is billed and paid for appropriately, we keep track of payments, accurately post reimbursements, and reconcile accounts.",
    icon: DollarSign,
    color: "tw-bg-[#7A8BC3]", // Blue/purple
  },
  {
    id: 5,
    title: "Denial Management & Appeals",
    description:
      "To effectively recover lost revenue, our professionals examine rejected claims, determine the causes, and file well-supported appeals.",
    icon: FileX,
    color: "tw-bg-[#26B6C6]", // Turquoise
  },
  {
    id: 6,
    title: "Reporting & Performance Optimization",
    description:
      "We assist you in tracking financial performance and making data-driven decisions for expansion through real-time analytics and personalized reports.",
    icon: BarChart3,
    color: "tw-bg-[#E0D0A8]", // Beige
  },
]



const chunkAspects = chunkArray(aspects, 3);


const Infographic: React.FC = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="infographic-div">

            {
              chunkAspects?.map((row, index) => {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className=" figure tw-relative tw-z-10 "
                  >
                    {
                      row?.map((aspect) => (
                        <motion.div
                          whileHover={{ scale: 1.03 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }} className="figure__path" key={aspect.id}>
                          <span className={`figure__pathStart ${aspect.color}`} >
                            <div className={` tw-bg-gradient-to-r ${aspect.color}  figure__product ${index % 2 !== 0 ? 'figure__product--right' : 'figure__product--left'}`} >

                              <div className="figure__productContent px-3">
                                <h3 className="figure__productName tw-font-display tw-text-center tw-p-2 tw-text-lg">{aspect.title}</h3>
                                <p className="tw-text-wrap tw-text-gray-600">{aspect.description}</p>
                              </div>
                              <div className="figure__productIconBox count-num tw-font-display">{aspect.id}</div>
                            </div>
                          </span>
                          {
                            Array.from({ length: 10 }).map((_, i) => (
                              <span key={i} className="figure__pathPoint"></span>
                            ))
                          }

                        </motion.div>
                      ))
                    }
                  </motion.div>
                );
              })
            }




          </div>


          <div className="infographic-div infographic-div-mobile">
            {
              aspects.map((aspect) => (
                <div key={aspect.id} className={` tw-rounded-3xl  tw-relative tw-max-w-lg tw-mx-auto tw-mt-10 ${aspect.color}`}>
                  <div className={`tw-absolute -tw-top-7 tw-left-1/2 tw-transform -tw-translate-x-1/2 tw-z-20 tw-text-xl tw-font-bold tw-w-16 tw-h-16 tw-flex tw-items-center tw-justify-center tw-rounded-full tw-shadow-lg tw-ring-4 tw-ring-cyan-100  ${aspect.color}`}>
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

              ))
            }
          </div>

        </div>
      </div>
    </div>
  );
};

export default Infographic;
