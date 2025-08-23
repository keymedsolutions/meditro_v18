import { BadgeCheck, BarChart3, Headphones, PiggyBank } from "lucide-react";
import React from "react";

const ThePowerOfOutsourcedServices = () => {
  const data = [
    {
      icon: <PiggyBank className="tw-w-8 tw-h-8 tw-text-green-500" />,
      title: "Cost Savings",
      discription:
        "Reduce in-house staffing, training, and overhead costs by letting our experts handle your entire billing process.",
      percentage: "01",
      pre_lable: "Cost Savings",
      stroke: "text-stroke-sky",
      color: "tw-text-sky-400",
    },
    {
      icon: <Headphones className="tw-w-8 tw-h-8 tw-text-blue-500" />,
      title: "Expert Support",
      discription:
        "Gain access to industry-certified physician billing specialists with extensive knowledge of payer guidelines, Medicare, Medicaid, and private insurance requirements.",
      percentage: "02",
      pre_lable: "Expert Support",
      stroke: "text-stroke-green",
      color: "tw-text-green-400",
    },
    {
      icon: <BarChart3 className="tw-w-8 tw-h-8 tw-text-white" />,
      title: "Scalability",
      discription:
        " Whether your practice is growing or looking to optimize existing workflows, our solutions scale with you.",
      percentage: "03",
      pre_lable: "Scalability",
      stroke: "text-stroke-yellow",
      color: "tw-text-yellow-300",
    },
    {
      icon: <BadgeCheck className="tw-w-8 tw-h-8 tw-text-purple-500" />,
      title: "Results You Can Trust",
      discription:
        "Practices utilizing our Physician Medical Billing Outsourcing consistently see increased revenue, fewer denials, and improved cash flow—even in the most complex billing environments.",
      percentage: "04",
      pre_lable: "Results You Can Trust",
      stroke: "text-stroke-sky",
      color: "tw-text-sky-400",
    },
  ];
  return (
    <section className="tw-py-16 md:tw-py-20 tw-bg-primary/5 section-area section-sp5 work-area">
      <div className="tw-container tw-mx-auto tw-px-6 md:tw-px-8">
        <div className="tw-text-center tw-max-w-3xl tw-mx-auto tw-mb-12">
          <h3 className="tw-text-2xl md:tw-text-3xl tw-font-medium tw-mb-4 tw-font-display">
            The Power of Outsourced Physician Medical Billing Services
          </h3>
        </div>

        <div className="container">
          <div className="row justify-content-center">
            {/* CARD 1 */}

            {data.map((item, index) => (
              <div
                className="col-12 col-lg-3 col-sm-6 mb-30 tw-h-full"
                key={index}
              >
                <div className="work-bx !tw-bg-indigo-900 tw-relative rcm_stat_card tw-rounded-2xl tw-shadow-xl tw-p-6">
                  <div className="tw-flex tw-items-end tw-gap-5 tw-mb-5">
                    <p
                      className={`!tw-m-0 tw-font-bold ${item.color} tw-text-[20px]`}
                    >
                      {item.pre_lable}
                    </p>

                    {/* 👉 Dynamic Tailwind Color Class */}
                    <div
                      className={` work-num-bx  !tw-text-[60px] !tw-mb-0 ${item.color} ${item.stroke}`}
                    >
                      {item.percentage}
                    </div>
                  </div>

                  <div className="work-content tw-flex tw-items-center">
                    <div>
                      <p className="tw-text-white tw-text-sm">
                        {item.discription}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Right Chart */}
                  <div
                    className={`tw-inline-block tw-p-2  tw-rounded-lg border tw-border-[${item.color}]`}
                  >
                    {item.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThePowerOfOutsourcedServices;
