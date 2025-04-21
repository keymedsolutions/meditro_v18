import { motion } from "framer-motion";
import {
  Award,
  CheckCircle,
  Clock,
  DollarSign,
  ShieldCheck,
} from "lucide-react";

const benefits = [
  {
    icon: <Award className="tw-h-10 tw-w-10 tw-text-teal-500" />,
    title: "Experienced Professionals",
    description:
      "With years of experience in the field, our staff has extensive knowledge of healthcare billing and coding.",
    color: "#3b6af7",
  },
  {
    icon: <CheckCircle className="tw-h-10 tw-w-10 tw-text-blue-500" />,
    title: "End-to-End Services",
    description:
      "From patient collections to insurance verification and all points in between, we oversee your complete revenue cycle.",
    color: "#e75a89",
  },
  {
    icon: <DollarSign className="tw-h-10 tw-w-10 tw-text-emerald-500" />,
    title: "Improved Cash Flow",
    description:
      "By decreasing claim denials and expediting reimbursements, our services help your practice's cash flow.",
    color: "#4ade80",
  },
  {
    icon: <Clock className="tw-h-10 tw-w-10 tw-text-indigo-500" />,
    title: "Proven Track Record",
    description:
      "We have a track record of enhancing the financial performance of practices all around the US.",
    color: "#f59e0b",
  },
  {
    icon: <ShieldCheck className="tw-h-10 tw-w-10 tw-text-purple-500" />,
    title: "Compliance & Accuracy",
    description:
      "We guarantee that your practice complies with all laws and codes, lowering the possibility of audits and fines.",
    color: "#7c3aed",
  },
];

export default function BenefitsHexLayout() {
  const radius = 260;

  return (

    <>
        <section className="tw-relative tw-flex tw-items-center tw-justify-center tw-min-h-[900px] tw-bg-white tw-overflow-visible tw-py-20 tw-px-4">
      {/* Center Hex Image */}
      <div
        className="tw-w-48 tw-h-48 tw-bg-cover tw-bg-center tw-shadow-2xl tw-clip-hexagon tw-z-10"
        style={{ backgroundImage: "url('/images/gallery/pic1.jpg')" }}
      />

      {/* Connecting SVG lines */}
      <svg className="tw-absolute tw-inset-0 tw-pointer-events-none tw-z-0" width="100%" height="100%">
        {benefits.map((_, i) => {
          const angle = (360 / benefits.length) * i - 90;
          const x = 50 + Math.cos((angle * Math.PI) / 180) * (radius / 2.1);
          const y = 50 + Math.sin((angle * Math.PI) / 180) * (radius / 2.1);
          return (
            <line
              key={i}
              x1="50%"
              y1="50%"
              x2={`${x}%`}
              y2={`${y}%`}
              stroke="#cbd5e1"
              strokeWidth="2"
              strokeLinecap="round"
            />
          );
        })}
      </svg>

      {/* Benefit Cards */}
      {benefits.map((benefit, i) => {
        const angle = (360 / benefits.length) * i - 90;
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="tw-absolute tw-w-64 tw-bg-white tw-rounded-2xl tw-shadow-xl tw-p-5 tw-border-l-4 tw-z-20"
            style={{
              transform: `translate(${x}px, ${y}px)`,
              borderColor: benefit.color,
            }}
          >
            <div className="tw-mb-3">{benefit.icon}</div>
            <h3 className="tw-text-lg tw-font-semibold tw-mb-1">{benefit.title}</h3>
            <p className="tw-text-sm tw-text-gray-600">{benefit.description}</p>
          </motion.div>
        );
      })}
    </section>


    <section className="container">
            
            
            <section className="card__container">
                
                {/* <!--==================== SERVICE CARD ====================--> */}
                <div className="card__bx card__1">
                    <div className="card__data">
                        <div className="card__icon">
                            <div className="card__icon-bx">
                                <i className="fa-solid fa-pen-ruler"></i>
                            </div>
                        </div>
                        <div className="card__content">
                            <h3>Design</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="card__bx card__2 !tw-bg-red-200">
                    <div className="card__data">
                        <div className="card__icon !tw-bg-red-200">
                            <div className="card__icon-bx "><i className="fa-solid fa-code"></i></div>
                        </div>
                        <div className="card__content">
                            <h3 className="tw-text-white !tw-text-md">Revenue Cycle Reporting</h3>
                            <p className="tw-text-gray-400">We provide comprehensive reporting so you can see the financial health of your practice clearly.</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="card__bx card__3">
                    <div className="card__data">
                        <div className="card__icon">
                            <div className="card__icon-bx"><i className="fa-solid fa-rocket"></i></div>
                        </div>
                        <div className="card__content">
                            <h3>Lauch</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
                
            </section>

        </section>
    </>

  );
}
