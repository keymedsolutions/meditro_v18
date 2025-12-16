"use client";

import { APP_PATH } from "@/data/PATH_APP";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    title: "Our Mission and Vision",
    description:
      "So, why do we do what we do? Because we want to make scaling your team simple and effective. Our mission is to help Global businesses of all sizes find talent quickly, efficiently, and with less stress. As your Trusted RPO Partner Across Global, we’re all about honest service, measurable results you can see, and helping you stay ahead by building teams that make a real impact.",
    img: "/assets/images/about-us/Our_Mission_And_Vision.jpg",
  },

  {
    title: "Our Approach and Philosophy",
    description:
      "We believe the best recruitment happens when we’re working as one team. We’re not about ticking boxes and stepping back. We dive right in, listen carefully, share our expertise, and grow with you. Flexibility, honest feedback, and using data to make things even better, that’s how we keep your hiring process sharp and effective.",
    img: "/assets/images/about-us/Our_Approach_And_Philosophy.jpg",
  },

  {
    title: "Our Team and Expertise",
    description:
      "Who’s behind the scenes? A friendly group of experienced recruitment professionals who know the UK and Global market inside-out. We’re experienced in everything from employer branding to the latest digital hiring tools. Our mix of hard-earned knowledge and modern tech means we spot great candidates quickly, and help you hire with confidence",
    img: "/assets/images/about-us/Our_Team_And_Expertise.jpg",
  },
  {
    title: "Our Values and Commitment",
    description:
      "What drives us? Trust, integrity, transparency, and partnership. We don’t just talk about these values, we live them in every client and candidate relationship. As your Trusted RPO and Full Cycle Recruitment Partner, we’re big on fairness, diversity, and ethical recruitment. You can count on us for happy candidates, satisfied clients, and partnerships built on real care and reliability.",
    img: "/assets/images/about-us/Our_Values_And_Commitment.jpg",
  },
];

export default function Features() {
  return (
    <section className="tw-relative tw-py-20  tw-overflow-hidden">
      <div className="tw-max-w-6xl tw-mx-auto tw-px-6 tw-relative">
        {/* Zig-Zag Layout */}
        <div className="tw-space-y-10">
          {data.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-pb-10 tw-gap-10 ${
                index % 2 === 0 ? "" : "md:tw-flex-row-reverse"
              }`}
              style={{ borderBottom: "2px solid gray" }}
            >
              {/* Gradient Block */}
              <div className="tw-flex-1 tw-relative sm:tw-p-8 tw-p-4 tw-rounded-3xl tw-bg-gradient-to-tr tw-from-indigo-100 tw-via-white tw-to-purple-100 tw-shadow-lg border tw-border-gray-100">
                <h3 className="tw-text-2xl tw-font-semibold tw-text-gray-900 tw-mb-6">
                  {service.title}
                </h3>
                <ul className="tw-space-y-4">
                  <p className="tw-text-gray-600">{service.description}</p>
                </ul>
              </div>

              {/* Decorative Side Element */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  clipPath:
                    "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
                }}
                className="tw-flex-1 tw-flex tw-justify-center"
              >
                <div
                  style={{
                    clipPath:
                      "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
                  }}
                  className="tw-p-3 tw-max-w-[80%] tw-rounded-3xl tw-bg-gradient-to-br tw-from-accent-400 tw-to-accent-900 tw-shadow-xl"
                >
                  <Image
                    src={service?.img}
                    alt={`Service ${service?.title}`}
                    width={600}
                    height={800}
                    style={{
                      clipPath:
                        "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
                    }}
                    className="tw-object-cover tw-w-full sm:!tw-w-2/3 md:!tw-w-full tw-rounded-2xl"
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
