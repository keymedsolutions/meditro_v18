"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const ServicesDynamicSection: React.FC = () => {
  const servicesSections = [
    {
      id: 1,
      title: "Recruitment Process Outsourcing (RPO) Services",
      descriptions: [
        "Recruitment can drain your time and energy. You don’t have to do it all yourself. With our RPO services, you hand over as much of your recruitment as you want. We take care of everything with care and skill.",
        "Here’s how it works. First, we sit down together to map out your workforce planning. We look at the roles you need to fill now as well as future hires. Once the plan is set, we get to work immediately and search for candidates everywhere. We don’t stop at job boards. We use our networks, dig into referrals, and target both active and passive talent.",
        "Finding candidates is just part of the process. Every person goes through far more than a quick CV check. We run interviews, check skills, see how well each person fits with your team, and manage all necessary details from offers to contracts. We also help with induction and onboarding, so your new staff feel at home quickly.",
        "You get regular updates, stats, and insights. If you need RPO for ongoing large-scale hiring, peaks in demand, or just a short-term project, we’ve got you covered. With less stress and better value, you’ll notice the difference immediately.",
      ],
      mainImage: "/assets/images/our-services/rpo-main.jpg",
      smallImage: "/assets/images/our-services/rpo-secondary.jpg",
    },

    {
      id: 2,
      title: "Candidate Sourcing & Screening Services",
      descriptions: [
        "It all starts with the right people. Our candidate sourcing and screening services help you build a solid pool of potential hires who are ready to contribute immediately. We use every tool available. Some of it is advanced digital tools; some is traditional people skills.",
        "When we source, we search everywhere. We look at popular job boards, but also professional networks and trusted referrals. We conduct a thorough, wide-ranging search. For every candidate, we go deeper than the basics. We examine their CVs, assess skills, run tests when needed, and always consider cultural fit with your team.",
        "Screening is thorough. We check references, confirm work histories, and handle any background checks you require. Our team takes care so that every candidate we bring forward is someone who can help your company thrive.",
        "This service suits businesses that want to improve their hiring confidence and staffing agencies that need reliable screening. We’re here to support you.",
      ],
      mainImage: "/assets/images/our-services/CandidateSourcing.jpg",
      smallImage: "/assets/images/our-services/ScreeningServices.jpg",
    },

    {
      id: 3,
      title: "Back Office & Administrative Services",
      descriptions: [
        "Admin is necessary, but it shouldn’t slow you down. Our back office team takes the routine work off your hands, so your recruiters can focus on what they do best: building relationships and making smart decisions.",
        "We manage everything: updating databases, maintaining your applicant tracking system, setting schedules, sending and tracking emails, and keeping all your documents organised. Compliance paperwork? We’re on it, nothing is overlooked.",
        "You get accurate, secure, and confidential support. Trust us with administration, and you’ll free up key staff to work on the projects and people that matter. We handle the routine tasks, so you don’t have to.",
      ],
      mainImage: "/assets/images/our-services/BackOffice.jpg",
      smallImage: "/assets/images/our-services/AdministrativeServices.jpg",
    },
    {
      id: 4,
      title: "Payroll & Finance Outsourcing Services",
      descriptions: [
        "Payroll and finance matter for every business. But they can take up time you would rather use on growth. Let our skilled payroll and finance team handle it for you, and you’ll see the benefits straightaway.",
        "We take care of processing timesheets, paying salaries, handling expenses, and responding to anything HMRC needs. Got vendors or contractors? We’ll pay them on time and record every detail clearly. We do your bookkeeping, manage accounts receivable and payable, and create the financial reports you need to plan ahead.",
        "Our process is timely and transparent, with checks at every stage. You can trust that there will be fewer errors and full compliance. Best of all, you stay in the loop without having to get involved in the small details.",
      ],
      mainImage: "/assets/images/our-services/Payroll.jpg",
      smallImage: "/assets/images/our-services/FinanceOutsourcingService.jpg",
    },
    {
      id: 5,
      title: "Market Mapping Services",
      descriptions: [
        "Want to know what your competitors are doing with their teams? Curious about going rates for top talent or where the next big opportunities are emerging? Our market mapping service gives you the answers.",
        "We research the talent landscape in your field. Our reports show you what other companies are offering, where they find people, and which skills are getting harder to find. Salary benchmarking keeps your offers competitive, and our passive talent mapping builds a pool of future hires in advance of demand.",
        "This information helps you plan, budget, and stay ahead of changes. You’ll always have an edge in building your workforce.",
      ],
      mainImage: "/assets/images/our-services/MarketMappingServicesMain.jpg",
      smallImage: "/assets/images/our-services/MarketMappingServicesBottom.jpg",
    },
    {
      id: 6,
      title: "Executive Search & Headhunting Services",
      descriptions: [
        "Your business’s leaders play a key part in future success. We help you find outstanding executives and managers who are ready to take on new challenges and strategic responsibilities. Our process is discreet and focused on trust.",
        "We use our deep network to reach candidates you won’t find in ordinary searches. For each leader, we review their professional records, leadership track, achievements, and personality. We also check how their values fit with your company culture.",
        "You get a full view before you make any decision. We fill senior roles across industries and keep every search confidential. If you want a partner to help you shape your entire business, not just fill a seat, we’d love to connect.",
      ],
      mainImage: "/assets/images/our-services/Headhunting.jpg",
      smallImage: "/assets/images/our-services/ExecutiveSearch.jpg",
    },
    {
      id: 7,
      title: "Remote Staffing Services",
      descriptions: [
        "The world is your talent pool. If you want to fill roles quickly, control costs, or need specific expertise, remote staffing makes sense. Our service helps you find great people no matter where they are.",
        "We help with IT, administration, finance, creative roles, customer support, and more. Need help only for a project? Want to run your support team around the clock? We can source the right people for you, quickly and efficiently.",
        "Induction and onboarding and training are managed by us, so your new team members are up to speed quickly. Your company remains flexible and ready for any challenge, all without heavy investments in local office space or equipment.",
      ],
      mainImage: "/assets/images/our-services/RemoteStaffingMain.jpg",
      smallImage: "/assets/images/our-services/RemoteStaffingBottom.jpg",
    },
    {
      id: 8,
      title: "Technology & Digital Recruitment Services",
      descriptions: [
        "The tech world moves fast. We’re here so you never fall behind. Our team focuses on technology and digital roles, from developers and data specialists to marketing experts and security professionals.",
        "We use industry knowledge to find hard-to-reach talent. Every tech candidate is carefully reviewed for both skills and experience. We test what they can do, not just what they say they’ve done. Everything complies with UK rules, so there are no unexpected issues.",
        "If you’re planning a digital transformation or need help filling a new project team, talk to us. We’ll find the right mix of skills and energy to drive your business forward.",
      ],
      mainImage: "/assets/images/our-services/TechnologyMain.jpg",
      smallImage: "/assets/images/our-services/TechnologyBottom.jpg",
    },
  ];

  const ImageBlock = (
    item: (typeof servicesSections)[number],
    reverse: boolean
  ) => (
    <motion.div
      initial={{ opacity: 0, x: reverse ? 40 : -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="tw-relative tw-flex tw-justify-center"
    >
      <div className="tw-relative tw-w-full tw-max-w-md">
        {/* Main image card */}
        <div
          className="tw-relative tw-rounded-[32px] tw-overflow-hidden tw-shadow-2xl"
          style={{
            border: "1px solid var(--accent-500)",
            boxShadow:
              "0 32px 70px rgba(15, 23, 42, 0.75), 0 0 0 1px rgba(15,23,42,0.9)",
          }}
        >
          <div className="tw-relative tw-aspect-[4/3]">
            <Image
              src={item.mainImage}
              alt=""
              fill
              className="tw-object-cover"
            />
          </div>

          {/* Top-right accent block */}
          <div className="tw-absolute tw-top-0 tw-right-0 tw-h-16 tw-w-16 md:tw-h-20 md:tw-w-20 tw-bg-accent-400 tw-rounded-bl-[32px]" />
        </div>

        {/* Small overlay image */}
        <div
          className={`tw-absolute tw-bottom-[-18%] md:tw-bottom-[-20%] tw-w-[62%] ${
            reverse ? "-tw-left-2" : "tw-left-[40%]"
          }`}
          style={{
            filter: "drop-shadow(0 18px 45px rgba(15,23,42,0.9))",
          }}
        >
          <div
            className="tw-relative tw-rounded-[28px] tw-overflow-hidden tw-bg-[#020617]"
            style={{
              border: "1px solid var(--accent-500)",
            }}
          >
            <div className="tw-relative tw-aspect-[5/3]">
              <Image
                src={item.smallImage}
                alt=""
                fill
                className="tw-object-cover"
              />
            </div>

            {/* Small accent tab */}
            <div className="tw-absolute tw-top-0 tw-left-0 tw-h-6 tw-w-10 tw-bg-accent-500 tw-rounded-br-[20px]" />
          </div>
        </div>
      </div>
    </motion.div>
  );

  const TextBlock = (
    item: (typeof servicesSections)[number],
    reverse: boolean
  ) => (
    <motion.div
      initial={{ opacity: 0, x: reverse ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
      className="tw-text-left"
    >
      <h2 className="tw-text-xl sm:tw-text-2xl lg:tw-text-3xl tw-font-semibold tw-mb-5">
        {item.id}. {item.title}
      </h2>

      <div className="tw-space-y-4 tw-text-sm sm:tw-text-base tw-leading-relaxed tw-text-slate-100/90">
        {item.descriptions.map((desc, i) => (
          <p key={i}>{desc}</p>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section className="tw-relative tw-w-full tw-overflow-hidden tw-py-16 md:tw-py-20">
      <div className="tw-absolute tw-inset-0 tw-pointer-events-none" />

      <div className="tw-container tw-relative tw-z-10 tw-mx-auto tw-px-4 md:tw-px-8 tw-space-y-40">
        {servicesSections.map((item, index) => {
          const reverse = index % 2 !== 0;

          return (
            <div
              key={item.id}
              className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] tw-gap-10 tw-items-center"
            >
              {reverse ? (
                <>
                  {TextBlock(item, reverse)}
                  {ImageBlock(item, reverse)}
                </>
              ) : (
                <>
                  {ImageBlock(item, reverse)}
                  {TextBlock(item, reverse)}
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesDynamicSection;
