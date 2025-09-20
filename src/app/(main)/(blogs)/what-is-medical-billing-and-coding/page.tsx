"use client";

import Breadcrumb from "@/components/ui/breadcrumb";
import { motion } from "framer-motion";
import {
  ChevronRight,
  CheckCircle,
  FileText,
  Shield,
  Zap,
  BarChart3,
  Users,
  AlertCircle,
  Calendar,
  Cpu,
  Search,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import { Accordion } from "react-bootstrap";
const blogDefaultPic1 = "/images/blog/default/pic4.png";

const MedicalBillingGuide = () => {
  const title = "What Is Medical Billing and Coding? A Straightforward Guide";
  const path = "/what-is-medical-billing-and-coding";

  const faqs = [
    {
      question: "What’s the difference between medical billing and coding?",
      answer:
        "Medical coding translates diagnoses and treatments into standardized codes for billing and documentation purposes. Medical billing uses those codes to create insurance claims and manage reimbursements, helping providers get paid accurately and on time.",
    },
    {
      question: "Why are insurance claims denied?",
      answer:
        "Claims may be denied due to coding errors, missing documents, incorrect patient info, or payer-specific rules. A good billing team quickly identifies and resolves these issues to recover revenue.",
    },
    {
      question: "Can I keep my current software if I outsource billing?",
      answer:
        "Yes! Most billing companies, including Key MedSolutions, can integrate with your existing EHR or practice management system without disrupting your workflow or data access.",
    },
    {
      question: "Is outsourcing billing and coding secure?",
      answer:
        "Absolutely. Reputable partners follow HIPAA regulations and use encrypted, secure systems to ensure patient information stays confidential and protected throughout the billing and coding process.",
    },
    {
      question: "How does outsourcing save time and money?",
      answer:
        "Outsourcing eliminates hiring, training, and managing staff. Skilled professionals manage claims with precision, minimize denials, and boost collections, allowing your team to concentrate on patient care and daily operations.",
    },
    {
      question: "How quickly can I start with Key MedSolutions?",
      answer:
        "Most practices can get started in 1–2 weeks. Our onboarding process is smooth and tailored to your needs, ensuring minimal disruption and fast results.",
    },
  ];

  return (
    <div className="page-content bg-white">
      <Breadcrumb
        title={title}
        breadcrumb={[
          { label: "Blogs", href: "/blogs" },
          { label: title, href: path },
        ]}
      />

      <section className="section-area section-sp1 bg-white blog1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-10 col-xl-10  !tw-mx-auto mb-30 mb-md-50">
              <div className="blog-card blog-single">
                <div className="post-media">
                  <img
                    src={blogDefaultPic1}
                    alt="how-medical-coding-impactsthe-revenue-cycle"
                  />
                </div>

                <div className="tw-min-h-screen tw-py-12 ">
                  <div className="tw-mx-auto">
                    <ul className="post-meta">
                      {/* <li className="author"><Link to="/blog-details"><img src={testPic3} alt=""/> Sonar Moyna</Link></li> */}
                      <li className="date">
                        <i className="far fa-calendar-alt"></i>03 September 2025
                      </li>
                    </ul>
                    <div className="ttr-post-title">
                      <h2 className="post-title">{title}</h2>
                    </div>
                    <div className="tw-gap-8 ttr-post-text">
                      <div>
                        <p className="tw-text-gray-700 tw-mb-4">
                          When you walk into a doctor's office, you probably
                          don't think about what happens after you leave. Behind
                          the scenes, there's a lot more than just diagnosing
                          and treating, especially when it comes to getting paid
                          for those services. This is where medical billing and
                          coding play a crucial role.
                        </p>
                      </div>
                    </div>
                    {/* Intro Card */}
                    <motion.div
                      className="tw-bg-gradient-to-r tw-from-blue-500 tw-to-purple-600 tw-rounded-xl tw-shadow-xl tw-p-8 tw-text-white tw-mb-16"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      <div className="tw-flex tw-items-start">
                        <div className="tw-mr-4 tw-mt-1">
                          <Shield className="tw-w-8 tw-h-8" />
                        </div>
                        <div>
                          <h2 className="tw-text-accentOrange-500 tw-text-2xl tw-font-semibold tw-mb-4">
                            At Key MedSolutions
                          </h2>
                          <p className="tw-text-lg !tw-text-white">
                            we specialize in helping healthcare providers
                            navigate these behind-the-scenes processes so they
                            can focus on what really matters: patient care. If
                            you've ever wondered how a simple doctor's visit
                            turns into a paid insurance claim, this guide is for
                            you.
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Definition Section */}
                    <motion.section
                      className="tw-mb-16"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      <h3 className="tw-font-bold  tw-mb-6 ">
                        What Is Medical Billing and Coding?
                      </h3>
                      <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-8">
                        <div
                          style={{ borderLeft: "4px solid #3b82f6" }}
                          className="tw-bg-white tw-rounded-xl tw-shadow-lg tw-p-6 tw-border-l-4 tw-border-blue-500"
                        >
                          <div className="tw-flex tw-items-center tw-mb-4">
                            <div className="tw-p-2 tw-bg-blue-100 tw-rounded-lg tw-mr-4">
                              <FileText className="tw-w-6 tw-h-6 tw-text-blue-600" />
                            </div>
                            <h3 className="tw-text-xl tw-font-semibold tw-text-gray-800">
                              Medical Coding
                            </h3>
                          </div>
                          <p className="tw-text-gray-600">
                            Medical coding is the essential process of
                            converting your healthcare services, such as visits,
                            diagnoses, and treatments, into standardized codes
                            that ensure accurate billing, efficient processing,
                            and proper documentation.
                          </p>
                        </div>
                        <div
                          style={{ borderLeft: "4px solid #3b82f6" }}
                          className="tw-bg-white tw-rounded-xl tw-shadow-lg tw-p-6 tw-border-l-4 tw-border-purple-500"
                        >
                          <div className="tw-flex tw-items-center tw-mb-4">
                            <div className="tw-p-2 tw-bg-purple-100 tw-rounded-lg tw-mr-4">
                              <BarChart3 className="tw-w-6 tw-h-6 tw-text-purple-600" />
                            </div>
                            <h3 className="tw-text-xl tw-font-semibold tw-text-gray-800">
                              Medical Billing
                            </h3>
                          </div>
                          <p className="tw-text-gray-600">
                            Medical billing takes those codes and turns them
                            into a bill, or claim, that goes to insurance
                            companies for payment.
                          </p>
                        </div>
                      </div>
                      <div className="tw-bg-white tw-rounded-xl tw-shadow-lg tw-p-6 tw-mt-8 border tw-border-gray-100">
                        <p className="tw-text-gray-600 tw-text-center">
                          Together, these steps are essential for healthcare
                          providers to get reimbursed accurately and on time.
                          Without proper billing and coding, revenue gets stuck
                          in limbo, or worse, lost entirely.
                        </p>
                      </div>
                    </motion.section>

                    {/* Coders Section */}
                    <motion.section
                      className="tw-mb-16"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      <h3 className="tw-text-3xl tw-font-bold  tw-mb-6 ">
                        What Do Medical Coders Actually Do?
                      </h3>
                      <div className="tw-bg-white tw-rounded-xl">
                        <p className="tw-text-gray-600 tw-mb-6">
                          Think of a medical coder like a translator. They take
                          a doctor's notes about what happened during a patient
                          visit and convert that into codes that insurance
                          companies understand.
                        </p>

                        <h3 className="tw-text-xl tw-font-semibold tw-text-gray-800 tw-mb-4">
                          There are three main code sets:
                        </h3>

                        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-4 tw-mb-6">
                          <div className="tw-bg-blue-50 tw-rounded-lg tw-p-4">
                            <h4 className="tw-font-semibold tw-text-blue-700">
                              ICD-10
                            </h4>
                            <p className="tw-text-sm tw-text-gray-600">
                              for diagnoses (e.g., high blood pressure)
                            </p>
                          </div>
                          <div className="tw-bg-purple-50 tw-rounded-lg tw-p-4">
                            <h4 className="tw-font-semibold tw-text-purple-700">
                              CPT
                            </h4>
                            <p className="tw-text-sm tw-text-gray-600">
                              for procedures (e.g., a routine check-up)
                            </p>
                          </div>
                          <div className="twbg-indigo-50 tw-rounded-lg tw-p-4">
                            <h4 className="tw-font-semibold tw-text-indigo-700">
                              HCPCS
                            </h4>
                            <p className="tw-text-sm tw-text-gray-600">
                              codes are applied to bill for medical supplies,
                              equipment, and certain services that fall outside
                              the CPT system, helping ensure accurate and full
                              reimbursement.
                            </p>
                          </div>
                        </div>

                        <p className="tw-text-gray-600">
                          For example, if a patient comes in with a sprained
                          ankle and receives an X-ray, the coder assigns the
                          correct ICD-10 diagnosis and CPT procedure codes to
                          reflect that. It sounds simple, but it requires a
                          strong knowledge of medical terminology, insurance
                          policies, and compliance rules.
                        </p>
                      </div>
                    </motion.section>

                    {/* Process Flow Section */}
                    <motion.section
                      className="tw-mb-16"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      <h3 className="tw-text-3xl tw-font-bold  tw-mb-6 ">
                        What About Medical Billers?
                      </h3>

                      <div className="tw-bg-white tw-rounded-xl">
                        <p className="tw-text-gray-600 tw-mb-6">
                          After coding is finalized, our billing team takes over
                          to begin the reimbursement process promptly and
                          accurately. They use Medical Billing and Coding
                          Software to prepare claims, verify the details, and
                          send everything off to insurance companies or
                          government payers like Medicare.
                        </p>

                        <h3 className="tw-text-xl tw-font-semibold tw-text-gray-800 tw-mb-4">
                          Here's how the process unfolds in practice:
                        </h3>

                        <div className="tw-relative">
                          <div
                            style={{ left: "1.2rem" }}
                            className="tw-absolute  tw-top-0 tw-h-full tw-w-0.5 tw-bg-blue-200"
                          ></div>

                          {[
                            "Patient visit happens.",
                            "Provider documents the services.",
                            "Coder assigns the correct codes.",
                            "Biller creates and submits the insurance claim.",
                            "Payer approves (or denies) the claim.",
                            "Payment is posted, and any remaining balance is billed to the patient.",
                          ].map((step, index) => (
                            <div
                              key={index}
                              className="tw-flex tw-items-start tw-mb-6 tw-relative"
                            >
                              <div className="tw-z-10 tw-bg-blue-500 tw-rounded-full tw-p-2 tw-mr-4">
                                <div className="tw-w-6 tw-h-6 tw-rounded-full tw-bg-white tw-flex tw-items-center tw-justify-center">
                                  <span className="tw-text-blue-500 tw-font-bold">
                                    {index + 1}
                                  </span>
                                </div>
                              </div>
                              <p className="tw-text-gray-700 tw-pt-1">{step}</p>
                            </div>
                          ))}
                        </div>

                        <div className="tw-bg-yellow-50 border-l-4 tw-border-yellow-400 tw-p-4 tw-mt-6">
                          <p className="tw-text-yellow-700">
                            Seems straightforward, but even small mistakes, like
                            a missing modifier or wrong code, can lead to claim
                            denials, delays, or underpayment.
                          </p>
                        </div>

                        <p className="tw-text-gray-600 tw-mt-6">
                          That's why practices often turn to a reliable Medical
                          Billing Company like Key MedSolutions to handle it
                          all.
                        </p>
                      </div>
                    </motion.section>

                    {/* Benefits Section */}
                    <motion.section
                      className="tw-mb-16"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      <h3 className="tw-text-3xl tw-font-bold tw-mb-6 ">
                        Why Are More Clinics Outsourcing Medical Billing and
                        Coding?
                      </h3>

                      <div className="tw-bg-gradient-to-r tw-from-blue-400 tw-to-purple-500 tw-rounded-xl tw-shadow-xl tw-p-8 tw-text-white">
                        <p className="tw-text-lg tw-mb-6  tw-text-white">
                          Running a practice today is more challenging than
                          ever. Between managing patients, staffing, and
                          compliance, billing and coding can become a full-time
                          job.
                        </p>

                        <h3 className="tw-text-xl tw-font-semibold tw-mb-4">
                          That's where Outsourcing Medical Billing and Coding
                          comes in.
                        </h3>

                        <p className="tw-mb-6 tw-text-white">
                          Instead of hiring, training, and managing an in-house
                          team, many providers are choosing to outsource to
                          experts who live and breathe this stuff.
                        </p>

                        <h3 className="tw-text-xl tw-font-semibold tw-mb-4">
                          Here's what you gain:
                        </h3>

                        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-4">
                          {[
                            {
                              icon: <Zap className="tw-w-5 tw-h-5" />,
                              text: "Less Overhead: No staffing, HR costs, or tech issues.",
                            },
                            {
                              icon: <CheckCircle className="tw-w-5 tw-h-5" />,
                              text: "Faster payments: Professionals know how to avoid mistakes and resubmit denied claims fast.",
                            },
                            {
                              icon: <FileText className="tw-w-5 tw-h-5" />,
                              text: "Better accuracy: Trained coders follow the latest rules and updates.",
                            },
                            {
                              icon: <Users className="tw-w-5 tw-h-5" />,
                              text: "More time for patients: Doctors and staff can focus on care, not admin work.",
                            },
                          ].map((benefit, index) => (
                            <div key={index} className="tw-flex tw-items-start">
                              <span className="tw-mr-3 tw-mt-0.5">
                                {benefit.icon}
                              </span>
                              <span>{benefit.text}</span>
                            </div>
                          ))}
                        </div>

                        <div className="tw-bg-white tw-bg-opacity-20 tw-rounded-lg tw-p-4 tw-mt-6">
                          <p className="tw-text-white">
                            And if you're worried about giving up control, don't
                            be. With the right partner, you still have full
                            visibility into your revenue cycle and peace of mind
                            that someone's keeping an eye on every dollar.
                          </p>
                        </div>
                      </div>
                    </motion.section>

                    <motion.section
                      className="tw-mb-20"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      <h3 className="tw-text-4xl tw-font-bold tw-mb-12 tw-text-center">
                        Real-World Examples
                      </h3>

                      <div className="tw-relative  tw-overflow-hidden">
                        <p className="tw-text-lg tw-text-gray-500 tw-mb-8">
                          Let's say a patient visits a dermatologist for a skin
                          rash. The doctor documents the visit and prescribes a
                          cream.
                        </p>

                        <h3
                          style={{ borderLeft: "4px solid #22c55e" }}
                          className="tw-text-2xl tw-font-semibold tw-text-gray-500  tw-mb-8 tw-border-l-4 tw-border-green-500 tw-pl-4"
                        >
                          Here's what happens behind the scenes:
                        </h3>

                        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-6 tw-mb-10">
                          {[
                            {
                              text: "The coder reviews the doctor's notes and assigns an ICD-10 code for the diagnosis and a CPT code for the office visit.",
                              icon: (
                                <Search className="tw-w-6 tw-h-6 tw-text-white" />
                              ),
                              color: "green",
                            },
                            {
                              text: "The biller submits the claim through their Medical Billing and Coding Software to the insurance company.",
                              icon: (
                                <FileText className="tw-w-6 tw-h-6 tw-text-white" />
                              ),
                              color: "blue",
                            },
                            {
                              text: "The insurance company approves the claim and sends payment.",
                              icon: (
                                <CheckCircle className="tw-w-6 tw-h-6 tw-text-white" />
                              ),
                              color: "purple",
                            },
                            {
                              text: "If they deny it due to a missing modifier or outdated code, the team at Key MedSolutions catches it quickly and resubmits the claim with corrections.",
                              icon: (
                                <AlertCircle className="tw-w-6 tw-h-6 tw-text-white" />
                              ),
                              color: "red",
                            },
                          ].map((item, index) => (
                            <motion.div
                              key={index}
                              className={`tw-p-6 tw-rounded-xl border`}
                              whileHover={{ scale: 1.02 }}
                              transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 10,
                              }}
                            >
                              <div
                                className={`tw-p-3 tw-bg-blue-700 tw-rounded-lg tw-inline-block tw-mb-4`}
                              >
                                {item.icon}
                              </div>
                              <p className="tw-text-gray-500">{item.text}</p>
                            </motion.div>
                          ))}
                        </div>

                        <div className="tw-p-6 border tw-rounded-xl tw-border-blue-700/30">
                          <p className="tw-text-xl tw-font-semibold tw-text-gray-500 tw-text-center">
                            That's the difference between being paid in 10 days
                            versus 60, or not at all.
                          </p>
                        </div>
                      </div>
                    </motion.section>

                    {/* Tools Matter Section */}
                    <motion.section
                      className="tw-mb-20"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      <h3 className="tw-text-4xl tw-font-bold tw-mb-12 ">
                        Why Do the Right Tools Matter?
                      </h3>

                      <div className="tw-relative tw-overflow-hidden">
                        <div className="tw-absolute tw--right-10 tw--bottom-10 tw-w-40 tw-h-40 tw-bg-indigo-500 tw-rounded-full tw-opacity-10 tw-blur-3xl"></div>

                        <p className="tw-text-lg tw-text-gray-500 tw-mb-10">
                          Technology plays a huge role in how efficient and
                          accurate billing and coding can be. At Key
                          MedSolutions, we use state-of-the-art Medical Billing
                          and Coding Software to automate tasks, check for
                          errors, and track claims from start to finish.
                        </p>

                        <h3 className="tw-text-2xl tw-font-semibold tw-text-black tw-mb-8 tw-border-l-4 tw-border-indigo-500 tw-pl-4">
                          The software we use helps:
                        </h3>

                        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-6 tw-mb-10">
                          {[
                            {
                              text: "Catch coding issues before claims go out",
                              icon: <AlertCircle className="tw-w-6 tw-h-6" />,
                              color: "red",
                            },
                            {
                              text: "Track denials and appeal deadlines",
                              icon: <Calendar className="tw-w-6 tw-h-6" />,
                              color: "yellow",
                            },
                            {
                              text: "Integrate with your existing EHR/EMR system",
                              icon: <Cpu className="tw-w-6 tw-h-6" />,
                              color: "blue",
                            },
                            {
                              text: "Provide real-time reports on your revenue",
                              icon: <TrendingUp className="tw-w-6 tw-h-6" />,
                              color: "green",
                            },
                          ].map((item, index) => (
                            <motion.div
                              key={index}
                              className={`tw-flex tw-items-start tw-p-4 tw-rounded-xl border tw-border-${item.color}-700/30`}
                              whileHover={{ x: 5 }}
                              transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 10,
                              }}
                            >
                              <div
                                className={`tw-p-2 !tw-bg-${item.color}-700 tw-rounded-lg tw-mr-4 tw-flex-shrink-0`}
                              >
                                {item.icon}
                              </div>
                              <span className="tw-text-gray-500">
                                {item.text}
                              </span>
                            </motion.div>
                          ))}
                        </div>

                        <div className="tw-rounded-xl tw-p-6 border tw-border-blue-700/30">
                          <p className="tw-text-lg tw-text-gray-500 tw-text-center">
                            But tech alone isn't enough, you need a team that
                            knows how to use it. That's where our experienced
                            professionals make all the difference.
                          </p>
                        </div>
                      </div>
                    </motion.section>

                    {/* CTA Section */}
                    <motion.section
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      <h3 className="tw-text-3xl tw-font-bold  tw-mb-6">
                        How Key MedSolutions Can Help?
                      </h3>

                      <div className="tw-bg-white tw-rounded-xl tw-mb-8">
                        <p className="tw-text-gray-600 tw-mb-6">
                          At Key MedSolutions, we offer more than just billing
                          and coding, we deliver complete revenue cycle
                          solutions. We act as an extension of your team,
                          helping you grow your practice with less stress and
                          more clarity.
                        </p>

                        <h3 className="tw-text-xl tw-font-semibold tw-text-gray-800 tw-mb-4">
                          Here's what we offer:
                        </h3>

                        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-4 tw-mb-6">
                          {[
                            "AAPC-certified coders with specialty experience",
                            "A committed billing team that actively tracks each claim to secure prompt and accurate reimbursement.",
                            "Custom reports to track your performance and improve collections",
                            "Fast, friendly support to answer your questions",
                          ].map((item, index) => (
                            <div
                              key={index}
                              className="tw-flex tw-items-start tw-gap-2"
                            >
                              <CheckCircle className="!tw-w-5 !tw-h-5 tw-text-green-500 shrink-0 mt-1" />
                              <div className="tw-flex-1 tw-text-gray-700">
                                {item}
                              </div>
                            </div>
                          ))}
                        </div>

                        <p className="tw-text-gray-600">
                          Whether you need help with denied claims, missed
                          charges, or compliance, we're here to help you take
                          control of your revenue.
                        </p>
                      </div>

                      <div className="tw-bg-gradient-to-r tw-from-blue-500 tw-to-purple-600 tw-rounded-xl tw-shadow-xl tw-p-8 tw-text-white">
                        <h3 className="tw-text-2xl tw-text-accentOrange-500 tw-font-semibold tw-mb-4">
                          Final Thoughts
                        </h3>
                        <p className="tw-mb-6 tw-text-white">
                          Medical Billing and Coding might happen behind the
                          scenes, but it's at the heart of every healthcare
                          practice. It keeps your doors open, your team paid,
                          and your patients happy.
                        </p>
                        <p className="tw-mb-6 tw-text-white">
                          If you're tired of dealing with claim denials, late
                          payments, or confusing reports, you don't have to go
                          it alone. Selecting the right medical billing partner
                          can greatly enhance your practice's performance and
                          financial outcomes.
                        </p>
                        <p className="tw-mb-8 tw-text-white">
                          At Key MedSolutions, we make it easy to stay on top of
                          your revenue while you stay focused on care.
                        </p>

                        <p className="tw-mb-8 tw-text-white">
                          Let’s talk! Reach out today for a free consultation,
                          and find out how much easier your life could be with a
                          smarter, faster, and more human approach to billing
                          and coding.
                        </p>
                      </div>
                    </motion.section>

                    <div className="container ">
                      <div className="info-bx tw-mt-16">
                        <div className="heading-bx text-left">
                          <h3 className="tw-text-2xl md:tw-text-2xl">
                            Frequently Asked Question (FAQs)
                          </h3>
                        </div>

                        <Accordion className="accordion ttr-accordion1">
                          {faqs.map((faq, index) => (
                            <Accordion.Item
                              eventKey={String(index)}
                              key={index}
                            >
                              <Accordion.Header>
                                {faq.question}
                              </Accordion.Header>
                              <Accordion.Body>{faq.answer}</Accordion.Body>
                            </Accordion.Item>
                          ))}
                        </Accordion>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MedicalBillingGuide;
