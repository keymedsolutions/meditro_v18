"use client";

import { APP_PATH } from "@/data/PATH_APP";
import Link from "next/link";

export const ExecutiveSearchVsRPOSection = () => {
  return (
    <section className="tw-py-24 tw-bg-white">
      <div className="tw-container tw-mx-auto tw-max-w-6xl tw-px-4 md:tw-px-8">
        <div className="tw-space-y-10 tw-mb-10">
          <h2 className="tw-text-3xl tw-font-semibold tw-text-slate-900">
            Executive Search vs Recruitment Process Outsourcing (RPO)
          </h2>
          <div className="tw-text-slate-700 tw-text-sm sm:tw-text-base tw-leading-relaxed">
            Many organisations want to understand the difference between
            executive search and&nbsp;
            <Link
              href={APP_PATH.howToChooseTheBestUkRecruitmentAgency.path}
              className="tw-font-semibold tw-text-inherit focus:tw-text-inherit"
            >
              RPO
            </Link>
            &nbsp;because the services can appear similar on the surface. The
            truth is that the two serve different hiring challenges. Here is a
            clear comparison.
          </div>
          <div className="tw-text-slate-700 tw-text-sm sm:tw-text-base tw-font-semibold">
            Executive Search vs RPO Comparison Table
          </div>
        </div>

        <div className="tw-overflow-x-auto">
          <table className="tw-w-full tw-border-collapse tw-rounded-xl tw-overflow-hidden">
            <thead className="tw-bg-accent-600 tw-text-white">
              <tr>
                <th className="tw-p-4 tw-text-left">Feature</th>
                <th className="tw-p-4 tw-text-left">Executive Search</th>
                <th className="tw-p-4 tw-text-left">
                  Recruitment Process Outsourcing (RPO)
                </th>
              </tr>
            </thead>
            <tbody className="tw-bg-accent-50">
              {[
                [
                  "Focus",
                  "Senior and C level hiring",
                  "Multi level and high volume hiring",
                ],
                [
                  "Approach",
                  "Proactive headhunting",
                  "Full recruitment lifecycle delivery",
                ],
                [
                  "Talent Type",
                  "Passive and highly specialised",
                  "Mixed active and passive",
                ],
                ["Engagement", "Project based", "Ongoing partnership"],
                [
                  "Ideal Use Case",
                  "Leadership and niche skills",
                  "Growth hiring and workforce scaling",
                ],
                [
                  "Example Roles",
                  "Directors and VPs",
                  "Engineers, analysts, managers",
                ],
              ].map((row, i) => (
                <tr key={i} className="tw-border-b tw-border-accent-200">
                  {row.map((cell, j) => (
                    <td key={j} className="tw-p-4 tw-text-slate-700">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="tw-space-y-4 tw-mt-10">
          <div className="tw-text-slate-700 tw-text-sm sm:tw-text-base tw-leading-relaxed">
            At Key Medsolutions UK, we offer both services under one roof. This
            is unique compared with most executive headhunting firms and allows
            us to support clients with leadership hiring while also
            strengthening their full recruitment strategy.
          </div>
          <div className="tw-text-slate-700 tw-text-sm sm:tw-text-base tw-leading-relaxed">
            For more information, you can visit our page on&nbsp;
            <Link
              href={
                APP_PATH.services.recruitmentProcessOutsourcingServices.path
              }
              className="tw-font-semibold tw-text-inherit focus:tw-text-inherit"
            >
              recruitment process outsourcing companies.
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
