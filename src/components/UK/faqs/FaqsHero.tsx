"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    title: "Recruitment Process Outsourcing Service FAQ",
    data: [
      {
        q: "What is Recruitment Process Outsourcing?",
        a: "Recruitment Process Outsourcing, or RPO, is when a company partners with an external provider to manage part or all of its hiring process. Think of it as having a dedicated recruitment team that works alongside your business. The RPO provider takes care of everything from sourcing candidates to onboarding, using their expertise and tools to find the best talent for your needs.",
      },
      {
        q: "What are the key benefits of adopting an RPO model?",
        a: "RPO saves time and money by streamlining hiring, gives access to recruitment experts, improves quality of hire using data-driven strategies, and scales with your business. It’s designed to make recruitment faster, smarter, and more predictable.",
      },
      {
        q: "How does the recruitment process outsourcing work?",
        a: "The RPO provider starts by understanding your business, culture, and hiring needs, then manages sourcing, screening, interviews, and onboarding as an extension of your HR team using advanced technology and proven processes.",
      },
      {
        q: "What types of RPO models exist and how do they differ?",
        a: "Common models include End-to-End RPO, Project RPO, and On-Demand RPO. Each is designed for different hiring challenges, from full lifecycle recruitment to short-term or flexible support.",
      },
      {
        q: "How do I choose the right RPO partner for my business?",
        a: "Look for industry expertise, transparent pricing, scalable solutions, strong technology, cultural alignment, and proven results backed by client references.",
      },
      {
        q: "How much does RPO cost and what pricing models are used?",
        a: "Pricing depends on hiring volume, role complexity, and scope. Common models include per-hire fees, monthly management fees, or hybrid structures tailored to your needs.",
      },
    ],
  },
  {
    title: "Candidate Sourcing & Screening FAQ",
    data: [
      {
        q: "What is CV sourcing, and why is it crucial to recruitment agencies?",
        a: "CV sourcing is the process of finding and collecting resumes of potential candidates. It’s a critical step for recruitment agencies because it ensures they have a steady pipeline of qualified talent. Without effective CV sourcing, it’s much harder to fill roles quickly and efficiently.",
      },
      {
        q: "What is the cost of your CV sourcing service?",
        a: "The cost can vary depending on factors like the number of CVs you need, the industry you’re hiring for, and the complexity of the roles. We’d be happy to provide a customized quote based on your specific requirements.",
      },
      {
        q: "Which ATS is best for sourcing candidates?",
        a: "The best Applicant Tracking System (ATS) really depends on your needs. For example, Workday is great for enterprise-level hiring, Greenhouse is known for its user-friendly interface, and Bullhorn is a favorite among staffing agencies. The key is to choose an ATS that integrates well with your existing tools and supports your recruitment goals.",
      },
      {
        q: "Why is sourcing candidates important?",
        a: "Sourcing is the backbone of recruitment. It ensures you’re identifying the best talent, even for hard-to-fill roles. By proactively building a talent pipeline, you’re not just filling current vacancies, you’re also preparing for future hiring needs.",
      },
      {
        q: "What is the difference between sourcing and recruiting?",
        a: "Sourcing is all about finding and attracting potential candidates, while recruiting involves engaging with those candidates, conducting interviews, and ultimately hiring them. Think of sourcing as the first step in the recruitment process.",
      },
      {
        q: "What is a passive candidate?",
        a: "A passive candidate is someone who isn’t actively looking for a job but might be open to new opportunities if approached. These candidates often have valuable skills and experience, making them a great addition to your talent pool—if you can engage them effectively.",
      },
      {
        q: "What are the biggest challenges in CV sourcing?",
        a: "Some of the biggest challenges include finding qualified candidates in competitive industries, managing large volumes of resumes, and ensuring diversity in your talent pool. It’s a delicate balance of speed, quality, and inclusivity.",
      },
    ],
  },
  {
    title: "Back Office & Administrative FAQ",
    data: [
      {
        q: "What are back office and administrative support services?",
        a: "These services cover the essential behind-the-scenes tasks that keep your business running smoothly. This includes things like data entry, document management, scheduling, and customer support. While they’re not always visible, they’re absolutely critical to your operations.",
      },
      {
        q: "What is an admin support service?",
        a: "Admin support services handle day-to-day administrative tasks, such as managing emails, scheduling meetings, and organizing files. They free up your time so you can focus on more strategic priorities.",
      },
      {
        q: "Why should businesses choose our back office and admin support services?",
        a: "We offer reliable, cost-effective solutions tailored to your needs. Our team is experienced, efficient, and committed to maintaining high standards of accuracy and confidentiality. Plus, we’re flexible, our services can scale as your business grows.",
      },
      {
        q: "Why do companies outsource back office and administrative support?",
        a: "Outsourcing these tasks allows companies to save time and money while focusing on their core activities. It’s a great way to access specialized expertise without the overhead costs of hiring full-time staff.",
      },
      {
        q: "Is data security maintained in outsourced back office operations?",
        a: "Absolutely! We take data security very seriously. Our processes include encryption, secure access protocols, and compliance with industry regulations to ensure your information is always protected.",
      },
      {
        q: "How do I choose the right back office outsourcing partner?",
        a: "Look for a partner with a proven track record, strong security measures, and the ability to scale with your business. Communication is also key, make sure they’re transparent about their processes and responsive to your needs.",
      },
      {
        q: "What is the cost of outsourcing back office and administrative services?",
        a: "Costs depend on the scope of services and the complexity of your needs. We’d be happy to provide a tailored quote based on your requirements.",
      },
    ],
  },
  {
    title: "Payroll & Finance Outsourcing FAQ",
    data: [
      {
        q: "What is payroll and finance outsourcing?",
        a: "Payroll and finance outsourcing is when a company partners with an external provider to manage tasks like payroll processing, tax compliance, accounts payable/receivable, bookkeeping, and financial reporting. It’s like having an expert finance team working behind the scenes to ensure accuracy, compliance, and smooth operations.",
      },
      {
        q: "Why do companies outsource payroll and finance functions?",
        a: "Businesses outsource these functions to save time, reduce costs, and minimize errors. Outsourcing also ensures compliance with ever-changing regulations and gives companies access to experienced finance professionals and advanced software—without needing a full in-house team.",
      },
      {
        q: "What services are included in payroll outsourcing?",
        a: "Payroll outsourcing typically includes payroll processing, salary calculations, tax filings, statutory compliance, employee payslips, benefits administration, attendance integration, and year-end reporting. Providers may also handle reimbursements, audits, and HR/payroll system support.",
      },
      {
        q: "How much does it cost to outsource payroll and finance services?",
        a: "Costs depend on the number of employees, service scope, and the complexity of your financial processes. Some providers charge per employee per month, while others use a monthly retainer or hybrid pricing. A tailored quote is the best way to get an accurate figure based on your needs.",
      },
      {
        q: "Can small businesses or startups benefit from payroll outsourcing?",
        a: "Absolutely! Payroll outsourcing is extremely helpful for small businesses because it frees up time, prevents compliance mistakes, and eliminates the need for specialized in-house staff. It’s a cost-effective way to stay organized and focus on growth.",
      },
      {
        q: "How do I choose the right payroll or finance outsourcing partner?",
        a: "Look for a partner with strong compliance knowledge, reliable systems, transparent pricing, and experience in your industry. Security and accuracy should be top priorities. Also, check their technology stack and client reviews to ensure they’re trustworthy and efficient.",
      },
    ],
  },
  {
    title: "Market Mapping FAQ",
    data: [
      {
        q: "What are the benefits of market mapping?",
        a: "Market mapping gives you a clear picture of talent availability, competitor hiring trends, salary ranges, and organizational structures. It helps you make informed hiring decisions, plan workforce strategy, and stay ahead in competitive markets.",
      },
      {
        q: "What is the future of market mapping?",
        a: "The future of market mapping is highly data-driven. AI, automation, and predictive analytics are making maps more accurate, real-time, and strategic. Companies will use mapping not just for recruitment but for broader business planning.",
      },
      {
        q: "Why is market mapping important for recruitment?",
        a: "Market mapping helps recruiters understand where the best talent is, what skills are most in demand, and how competitors structure their teams. This insight leads to faster hiring, better decisions, and more targeted outreach.",
      },
      {
        q: "Can market mapping support diversity hiring goals?",
        a: "Definitely. Market mapping can highlight diverse talent pools, identify gaps, and help create targeted strategies to improve inclusivity. It gives companies a clearer understanding of representation across industries and regions.",
      },
      {
        q: "Is market mapping part of Recruitment Process Outsourcing (RPO)?",
        a: "Yes, many RPO providers include market mapping as part of their strategic services. It helps build better pipelines, improve forecasting, and enhance overall recruitment efficiency.",
      },
      {
        q: "Which industries benefit most from market mapping services?",
        a: "Industries with high competition for talent—such as technology, healthcare, engineering, finance, and manufacturing—benefit the most. However, any organization looking to plan long-term hiring strategies can gain value from market mapping.",
      },
      {
        q: "What is market mapping in HR?",
        a: "In HR, market mapping is the process of analyzing external talent markets to understand workforce trends, skill availability, competitor structures, and salary benchmarks. It supports strategic workforce planning and proactive recruitment.",
      },
    ],
  },
  {
    title: "Executive Search & Headhunting FAQ",
    data: [
      {
        q: "What is headhunting, and how does it work?",
        a: "Headhunting is a specialized recruitment approach focused on attracting high-level or niche professionals. Executive search firms identify, assess, and approach top candidates—often passive ones—to fill senior or critical leadership roles.",
      },
      {
        q: "When should a company use an executive search firm?",
        a: "Companies typically use these firms when hiring for senior leadership positions, highly specialized roles, confidential searches, or when internal recruitment teams lack the networks or expertise to find the right talent.",
      },
      {
        q: "What are the benefits of partnering with an executive search firm?",
        a: "You gain access to deep industry networks, thorough screening, leadership assessments, and strategic insights. Executive search firms also maintain confidentiality and ensure only the most qualified candidates are shortlisted.",
      },
      {
        q: "How long does an executive search process take?",
        a: "Most executive searches take 6–12 weeks, depending on role complexity, market availability, and required competencies. Some highly niche roles may take longer.",
      },
      {
        q: "Can executive search firms work globally or across industries?",
        a: "Yes! Many firms operate internationally and have cross-industry expertise. Their global reach helps source talent from multiple markets and ensures diverse candidate pools.",
      },
      {
        q: "What should I look for in an executive search partner?",
        a: "Seek a partner with a strong reputation, industry expertise, transparent communication, and a proven search methodology. Cultural understanding, confidentiality, and a strong candidate evaluation process are essential.",
      },
    ],
  },
  {
    title: "Virtual Staffing FAQ",
    data: [
      {
        q: "How do I get started with a Virtual Assistant?",
        a: "It’s simple, share your requirements, choose the skillset you need, and get matched with a qualified Virtual Assistant. Once onboarded, they begin handling your day-to-day tasks remotely.",
      },
      {
        q: "Do I need to sign up to take the online interview?",
        a: "Yes, most providers require a quick signup to schedule interviews and ensure your needs are properly understood. It helps match you with the right virtual staff.",
      },
      {
        q: "What are the benefits of hiring virtual staff?",
        a: "Virtual staff save time, reduce operational costs, and offer flexible support. You can hire skilled professionals without the overhead of office space, equipment, or full-time salaries.",
      },
      {
        q: "How is virtual staffing different from freelancing?",
        a: "Virtual staffing provides long-term, dedicated support, while freelancing is typically project-based. Virtual staff work like remote employees, ensuring consistency, reliability, and better alignment with your processes.",
      },
      {
        q: "Is virtual staffing secure and reliable?",
        a: "Yes, reputable providers ensure secure systems, confidentiality agreements, monitored workflows, and data protection protocols. You can rely on stable and professional support.",
      },
      {
        q: "How do I choose the right virtual staffing partner?",
        a: "Look for providers with verified talent, strong onboarding processes, transparent pricing, and reliable communication. Reviews, experience, and client testimonials are also great indicators.",
      },
      {
        q: "What is the cost of virtual staffing services?",
        a: "Costs depend on the role, skill level, working hours, and experience required. Most providers offer hourly, weekly, or monthly pricing packages. A customized quote will give the best estimate.",
      },
    ],
  },
  {
    title: "Technology and Digital Recruitment FAQ",
    data: [
      {
        q: "What is technology and digital recruitment?",
        a: "Technology and digital recruitment focuses on hiring professionals in IT, software, cybersecurity, data science, digital marketing, and emerging tech fields. It ensures companies find the right technical talent to stay competitive.",
      },
      {
        q: "What are common challenges in technology and digital recruitment?",
        a: "Key challenges include talent shortages, fast-changing skill requirements, high salary expectations, and intense competition. Technical roles also require specialized evaluation methods.",
      },
      {
        q: "How do recruiters find the best tech talent?",
        a: "Recruiters use platforms like LinkedIn, GitHub, Stack Overflow, hackathons, employee referrals, and niche tech communities. They also leverage talent mapping, AI tools, and targeted outreach to identify top candidates.",
      },
      {
        q: "How can AI and automation improve technology recruitment?",
        a: "AI streamlines sourcing, screens resumes, predicts candidate fit, reduces bias, and accelerates interview scheduling. Automation helps recruiters focus on strategy while improving speed and accuracy.",
      },
      {
        q: "What metrics should companies track in technology recruitment?",
        a: "Important metrics include time-to-hire, quality-of-hire, sourcing channel effectiveness, offer acceptance rate, candidate satisfaction, and pipeline diversity.",
      },
      {
        q: "What trends are shaping technology and digital recruitment in 2025?",
        a: "Key trends include AI-driven hiring, remote-first tech teams, skill-based hiring, gamified assessments, global talent pools, and an increased focus on cybersecurity and data roles.",
      },
      {
        q: "What are the best platforms for sourcing tech talent?",
        a: "Top platforms include LinkedIn, GitHub, Stack Overflow, AngelList, Indeed, Hired, and niche communities like Kaggle or Behance—depending on the role.",
      },
      {
        q: "Can AI and machine learning help in sourcing tech candidates?",
        a: "Absolutely. AI tools analyze large datasets to find high-potential candidates, match skills to job descriptions, and predict performance. They speed up sourcing and reduce manual workload significantly.",
      },
    ],
  },
];

const FaqsHero: React.FC = () => {
  const [active, setActive] = useState<{
    section: number;
    item: number;
  } | null>(null);

  return (
    <div className="tw-flex tw-flex-col">
      {faqs?.map((f, index) => (
        <section className="tw-relative tw-bg-[#f8fbff] tw-py-28 tw-overflow-hidden tw-isolate">
          {index == 0 && (
            <div className="tw-text-center tw-absolute tw-right-0 tw-left-0 tw-mb-16  tw-z-20">
              <p className="tw-text-sm tw-font-semibold tw-tracking-[0.18em] tw-uppercase tw-text-accent-600">
                Frequently Asked Questions (FAQs)
              </p>
            </div>
          )}
          <div
            className={`tw-pointer-events-none tw-absolute tw-inset-y-0 tw-z-0 ${
              index % 2 == 0 ? "tw-right-0" : "tw-left-0"
            }  tw-w-[50%] tw-bg-gradient-to-bl tw-from-accent-50 tw-via-accent-100 tw-to-accent-200/70`}
          />

          <div className="tw-absolute tw-top-[12%] tw-left-[6%] tw-h-36 tw-w-36 tw-rounded-full tw-bg-accent-200/60 tw-blur-3xl faq-blob-y" />
          <div className="tw-absolute tw-bottom-[18%] tw-right-[8%] tw-h-40 tw-w-40 tw-rounded-full tw-bg-accent-300/60 tw-blur-3xl faq-blob-x" />

          <div
            className={`tw-container tw-relative tw-z-10 tw-mx-auto tw-max-w-7xl tw-px-4 lg:tw-px-8  ${
              index === 0 ? "tw-mt-20" : "tw-mt-0"
            }`}
          >
            <div className="tw-flex tw-flex-col tw-space-y-20">
              <div
                key={index}
                className={`tw-grid tw-grid-cols-1  ${
                  index % 2 == 0
                    ? "lg:tw-grid-cols-[minmax(0,0.5fr)_minmax(0,1.1fr)]"
                    : "lg:tw-grid-cols-[minmax(0,1.1fr)_minmax(0,0.5fr)]"
                }  tw-gap-14 tw-items-start`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className={`tw-sticky ${
                    index % 2 == 0 ? "tw-order-1" : "lg:tw-order-2 tw-order-1"
                  }`}
                >
                  <div className="tw-rounded-[30px] tw-bg-gradient-to-br tw-from-accent-600 tw-to-accent-500 tw-p-[2px]">
                    <div className="tw-rounded-[28px] tw-bg-white tw-p-4">
                      <div className="tw-flex tw-items-start tw-gap-3">
                        <span className="tw-h-10 tw-w-10 tw-rounded-full tw-bg-accent-100 tw-flex tw-flex-shrink-0 tw-items-center tw-justify-center">
                          <HelpCircle className="tw-h-5 tw-w-5 tw-text-accent-600" />
                        </span>
                        <p className="tw-text-sm !tw-mb-0 tw-self-center tw-font-semibold tw-uppercase tw-tracking-[0.22em] tw-text-accent-600">
                          {f?.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <div
                  className={`tw-space-y-5 ${
                    index % 2 == 0 ? "tw-order-2" : "lg:tw-order-1 tw-order-2"
                  }`}
                >
                  {f?.data?.map((item, i) => {
                    const open =
                      active?.section === index && active?.item === i;

                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.6,
                          ease: "easeOut",
                          delay: i * 0.05,
                        }}
                        viewport={{ once: true }}
                        className="tw-relative"
                      >
                        <div
                          className={`tw-absolute tw-left-0 tw-top-0 tw-h-full tw-w-[4px] tw-rounded-full ${
                            open ? "tw-bg-accent-500" : "tw-bg-accent-200"
                          }`}
                        />

                        <div
                          className="tw-ml-4 tw-rounded-[22px] tw-bg-white tw-transition-all"
                          style={{
                            border: open
                              ? "1px solid rgba(59,130,246,0.5)"
                              : "1px solid rgba(203,213,225,0.9)",
                            boxShadow: open
                              ? "0 18px 40px rgba(15,23,42,0.15)"
                              : "0 8px 20px rgba(15,23,42,0.08)",
                          }}
                        >
                          <button
                            onClick={() =>
                              setActive(
                                open ? null : { section: index, item: i }
                              )
                            }
                            className="tw-w-full tw-flex tw-items-center tw-justify-between tw-gap-6 tw-px-6 tw-py-5 tw-text-left tw-rounded-[22px] tw-border-none border tw-bg-gradient-to-r tw-from-accent-100/10 tw-to-accent-500/50 tw-border-accent-500"
                          >
                            <h3 className="tw-text-base sm:tw-text-lg tw-font-semibold tw-text-slate-900">
                              {item.q}
                            </h3>

                            <span className="tw-flex tw-h-9 tw-w-9 tw-items-center tw-justify-center tw-rounded-full tw-bg-accent-100">
                              {open ? (
                                <Minus className="tw-h-4 tw-w-4 tw-text-accent-600" />
                              ) : (
                                <Plus className="tw-h-4 tw-w-4 tw-text-accent-600" />
                              )}
                            </span>
                          </button>

                          <AnimatePresence>
                            {open && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.35, ease: "easeOut" }}
                                className="tw-overflow-hidden"
                              >
                                <div className="tw-px-6 tw-pb-6 tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-slate-700">
                                  {item.a}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
      <style jsx>{`
        .faq-blob-y {
          animation: faqBlobY 10s ease-in-out infinite;
        }
        .faq-blob-x {
          animation: faqBlobX 12s ease-in-out infinite;
        }

        @keyframes faqBlobY {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-22px);
          }
        }

        @keyframes faqBlobX {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(26px);
          }
        }
      `}</style>
    </div>
  );
};

export default FaqsHero;
