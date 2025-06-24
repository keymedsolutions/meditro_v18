"use client";
/* eslint-disable react/no-unescaped-entities */
import { Badge } from "@/ui/badge";
import { Button } from "@/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/card";
import { Separator } from "@/ui/separator";
import {
  AlertTriangle,
  Calendar,
  CheckCircle,
  Clock,
  Star,
} from "lucide-react";
import RCMPlanSelectModalFormModal from "../Model/RCMPlanSelectModalFormModal";
import { useState } from "react";

const RCMPlansList = () => {
  const [open, setOpen] = useState(false);
  const [plan, setPlan] = useState("$8-Complete-Insurance-Breakdown");

  const featureList = [
    "Full plan benefits (up to 85+ data points)",
    "Detailed patient eligibility",
    "Deductibles, coverage balance, and limits",
    "Patient treatment history (last visit or past 12 months)",
    "Custom fields based on your practice needs",
  ];
  return (
    <>
      {/* Pricing Cards */}
      <div className="tw-grid lg:tw-grid-cols-3 tw-gap-8 tw-mb-16">
        {/* Complete Insurance Breakdown */}
        <Card
          // style={{
          //     border: "2px solid rgba(167,243,208,1) !important",
          // }}
          className="tw-relative tw-shadow-lg hover:tw-shadow-xl tw-transition-all tw-duration-300 border-2 tw-border-emerald-300 tw-flex tw-flex-col tw-justify-between"
        >
          <div>
            <div className="tw-absolute tw--top-4 tw-left-1/2 tw-transform tw--translate-x-1/2">
              <Badge className="!tw-bg-emerald-600 tw-text-white tw-px-4 tw-py-1 tw-text-sm tw-font-semibold">
                <Star className="tw-h-4 tw-w-4 tw-mr-1" />
                Most Popular
              </Badge>
            </div>
            <CardHeader className="tw-text-center tw-pb-4">
              <div className="tw-text-4xl tw-font-bold tw-text-emerald-600 tw-mb-2">
                $8
              </div>

              <CardTitle className="!tw-text-xl tw-mb-2 !tw-font-bold tw-bg-gradient-to-r tw-from-emerald-600 tw-to-purple-600 tw-bg-clip-text tw-text-transparent">
                Complete Insurance Breakdown
              </CardTitle>
              <CardDescription className="!tw-text-emerald-600 tw-font-bold !tw-text-[17px]">
                Plan + Patient Data
              </CardDescription>
            </CardHeader>
            <CardContent className="tw-space-y-4">
              <p className="tw-text-sm tw-text-gray-600 tw-mb-4">
                This is our most requested service. It provides a detailed,
                fully customized insurance breakdown — designed to give you
                total clarity on coverage, helping you avoid delays or denials.
              </p>

              <div className="tw-space-y-1">
                <p className="tw-text-slate-900 tw-font-bold !tw-text-md">
                  What's included:
                </p>

                {featureList.map((item, index) => (
                  <div
                    key={index}
                    className="tw-flex tw-items-start tw-gap-2 tw-rounded tw-p-2 tw-transition-colors tw-duration-200 hover:tw-bg-green-50"
                  >
                    <CheckCircle className="tw-h-5 tw-w-5 tw-text-emerald-600 tw-mt-0.5 tw-flex-shrink-0 tw-transition-transform tw-duration-200 group-hover:tw-scale-210" />
                    <span className="tw-text-sm tw-text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <Separator className="tw-my-4" />

              <div className="space-y-3">
                <p className=" tw-text-slate-900 tw-font-bold !tw-text-md">
                  This option is ideal for:
                </p>
                <div className="">
                  <ul className="tw-space-y-2 tw-text-slate-700 tw-font-medium">
                    <li className="tw-flex tw-items-center tw-gap-2">
                      <div className="tw-w-2 tw-h-2 tw-bg-emerald-500 tw-rounded-full"></div>
                      Pre-authorizations
                    </li>
                    <li className="tw-flex tw-items-center tw-gap-2">
                      <div className="tw-w-2 tw-h-2 tw-bg-purple-500 tw-rounded-full"></div>
                      High-value or complex procedures
                    </li>
                    <li className="tw-flex tw-items-center tw-gap-2">
                      <div className="tw-w-2 tw-h-2 tw-bg-emerald-500 tw-rounded-full"></div>
                      First-time patients or new plan types
                    </li>
                  </ul>
                </div>
              </div>
              <div className="tw-bg-amber-50 tw-border tw-border-amber-200 tw-rounded-lg tw-p-3 tw-mt-4">
                <div className="tw-flex tw-items-center tw-gap-2">
                  <AlertTriangle className=" tw-text-amber-600" />
                  {/* <span className=" tw-text-2xl animate-pulse">⚠️</span> */}
                  <span className="tw-text-md tw-font-bold tw-text-amber-800">
                    {" "}
                    In a rush?
                  </span>
                </div>
                <p className="tw-text-xs tw-text-amber-700 tw-mt-1 tw-font-bold">
                  Add just $3 for same or next business day turnaround
                </p>
              </div>
            </CardContent>
          </div>
          <CardContent>
            <Button
              onClick={() => {
                setPlan("$8-Complete-Insurance-Breakdown");
                setOpen(true);
              }}
              className="tw-w-full !tw-bg-emerald-600 hover:!tw-bg-emerald-700 tw-mt-6 !tw-border-0"
            >
              Get Started
            </Button>
          </CardContent>
        </Card>

        {/* Eligibility-Only Verification */}
        <Card
          // style={{
          //     border: "1px solid hsl(240 5.9% 90%)!important",
          // }}
          className="tw-shadow-lg tw-hover:shadow-xl tw-transition-all tw-duration-300 border-2 tw-border-amber-400 tw-flex tw-flex-col tw-justify-between"
        >
          <div>
            <CardHeader className="tw-text-center tw-pb-4">
              <div className="tw-text-4xl tw-font-bold tw-text-amber-600 tw-mb-2">
                $2
              </div>
              <CardTitle className="tw-text-xl tw-mb-2 !tw-font-bold tw-bg-gradient-to-r tw-from-amber-600 tw-to-primary-600 tw-bg-clip-text tw-text-transparent">
                Eligibility-Only Verification
              </CardTitle>
              <CardDescription className="!tw-text-amber-600 tw-font-bold !tw-text-[17px]">
                Patient Data Only
              </CardDescription>
            </CardHeader>
            <CardContent className="tw-space-y-4">
              <p className="tw-text-sm tw-text-gray-600 tw-mb-4">
                Need a quick coverage check? This is your go-to for returning
                patients or simple appointments.
              </p>

              <div className="tw-space-y-3">
                <p className="tw-text-slate-900 tw-font-bold !tw-text-md">
                  What you get:
                </p>
                {[
                  "Active/inactive insurance status",
                  "Deductible and out-of-pocket details",
                  "Basic treatment history (when accessible)",
                ].map((row, index) => {
                  return (
                    <div
                      key={index}
                      className="tw-flex tw-items-start tw-gap-2 tw-rounded tw-p-2 tw-transition-colors tw-duration-200 hover:tw-bg-slate-50"
                    >
                      <CheckCircle className="tw-h-5 tw-w-5 tw-text-slate-600 tw-mt-0.5 tw-flex-shrink-0 tw-transition-transform tw-duration-200 group-hover:tw-scale-210" />
                      <span className="tw-text-sm tw-text-slate-700">
                        {row}
                      </span>
                    </div>
                  );
                })}
              </div>

              <Separator className="tw-my-4" />

              <div className="space-y-3">
                <p className=" tw-text-slate-900 tw-font-bold !tw-text-md">
                  Perfect for:
                </p>
                <div className="">
                  <ul className="tw-space-y-2 tw-text-slate-700 tw-font-medium">
                    <li className="tw-flex tw-items-center tw-gap-2">
                      <div className="tw-w-2 tw-h-2 tw-bg-slate-500 tw-rounded-full"></div>
                      Follow-up visits
                    </li>
                    <li className="tw-flex tw-items-center tw-gap-2">
                      <div className="tw-w-2 tw-h-2 tw-bg-purple-500 tw-rounded-full"></div>
                      Existing plans have already been verified in detail
                    </li>
                    <li className="tw-flex tw-items-center tw-gap-2">
                      <div className="tw-w-2 tw-h-2 tw-bg-slate-500 tw-rounded-full"></div>
                      Clinics using recurring or long-term insurance plans
                    </li>
                  </ul>
                </div>
              </div>

              <div className="tw-bg-slate-50 tw-border tw-border-slate-200 tw-rounded-lg tw-p-3 tw-mt-4">
                <p className="!tw-text-sm tw-text-slate-600">
                  <strong className="tw-font-bold">Note:</strong> Data is pulled
                  from payer portals or fax-backs. Some history may vary by
                  carrier availability.
                </p>
              </div>
            </CardContent>
          </div>
          <CardContent>
            <Button
              onClick={() => {
                setPlan("$2-Eligibility-Only-Verification");
                setOpen(true);
              }}
              variant="outline"
              style={{
                border: "1px solid hsl(240 5.9% 90%)!important",
              }}
              className="tw-w-full tw-mt-6 hover:tw-bg-amber-600 tw-bg-amber-500 tw-text-white"
            >
              Get Started
            </Button>
          </CardContent>
        </Card>

        {/* Subscription Plan */}
        <Card
          // style={{
          //     border: "2px solid rgba(233, 213, 255 ,1)!important",
          // }}
          className="tw-shadow-lg hover:tw-shadow-xl tw-transition-all tw-duration-300 border-2 tw-border-purple-400 tw-flex tw-flex-col tw-justify-between"
        >
          <div>
            <CardHeader className="tw-text-center tw-pb-4">
              <div className="tw-text-2xl tw-font-bold tw-text-purple-600 tw-mb-2  ">
                Subscription
              </div>
              <CardTitle className="tw-text-xl tw-mb-2 tw-font-bold tw-bg-gradient-to-r tw-from-purple-600 tw-to-indigo-600 tw-bg-clip-text tw-text-transparent">
                Dedicated Verification Agents
              </CardTitle>
              <CardDescription className="tw-text-purple-900 tw-font-bold !tw-text-[17px]">
                High-Volume Practice Solution
              </CardDescription>
            </CardHeader>
            <CardContent className="tw-space-y-4">
              <p className="tw-text-sm tw-text-gray-600 tw-mb-4">
                Running a high-volume practice? Don’t have an in-house insurance
                expert? We’ve got you covered. Hire a dedicated verification
                specialist who works exclusively for your clinic.
              </p>

              <div className="tw-space-y-4">
                <div
                  className="tw-border tw-border-purple-200 tw-rounded-lg tw-p-4"
                  style={{
                    border: "1px solid #e9d5ff ",
                  }}
                >
                  <div className="tw-flex tw-items-center tw-gap-2 tw-mb-2">
                    <Clock className="tw-h-5 tw-w-5 tw-text-purple-600" />
                    <span className="tw-font-semibold tw-text-purple-600">
                      Full-Time Agent
                    </span>
                  </div>
                  <div className="tw-text-2xl tw-font-bold tw-text-purple-600 tw-mb-1">
                    $1,500/month
                  </div>
                  <p className="tw-text-sm tw-text-gray-600">
                    Monday–Friday, 8 AM – 5 PM
                  </p>
                  <p className="tw-text-xs tw-text-gray-500 tw-mt-1">
                    Ideal for busy offices with heavy verification loads
                  </p>
                </div>

                <div
                  className="tw-border tw-border-purple-200 tw-rounded-lg tw-p-4"
                  style={{
                    border: "1px solid #e9d5ff ",
                  }}
                >
                  <div className="tw-flex tw-items-center tw-gap-2 tw-mb-2">
                    <Calendar className="tw-h-5 tw-w-5 tw-text-purple-600" />
                    <span className="tw-font-semibold tw-text-purple-600">
                      Part-Time Agent
                    </span>
                  </div>
                  <div className="tw-text-2xl tw-font-bold tw-text-purple-600 tw-mb-1">
                    $1,000/month
                  </div>
                  <p className="tw-text-sm tw-text-gray-600">
                    4 hours/day, 20 hours/week
                  </p>
                  <p className="tw-text-xs tw-text-gray-500 tw-mt-1">
                    Perfect for smaller clinics
                  </p>
                </div>
              </div>

              <div className="tw-space-y-3">
                <p className="tw-text-slate-900 tw-font-bold !tw-text-md">
                  What's included:
                </p>
                {[
                  "Dedicated staffing – no recruiting, no training",
                  "Expert handling of verifications and follow-ups",
                  "Scalable support for billing and front desk teams",
                ].map((row, index) => {
                  return (
                    <div
                      key={index}
                      className="tw-flex tw-items-start tw-gap-2 tw-rounded tw-p-1 tw-transition-colors tw-duration-200 hover:tw-bg-purple-50"
                    >
                      <CheckCircle className="tw-h-5 tw-w-5 tw-text-purple-600 tw-mt-0.5 tw-flex-shrink-0 tw-transition-transform tw-duration-200 group-hover:tw-scale-210" />
                      <span className="tw-text-sm tw-text-slate-700">
                        {row}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="tw-bg-gradient-to-r tw-from-slate-100 tw-to-purple-100 !tw-border-2 !tw-border-slate-300 tw-rounded-xl tw-p-4 tw-shadow-inner">
                <p className="tw-text-slate-800 tw-font-bold tw-text-sm">
                  <strong>Note:</strong> Monthly agent plans are priced for
                  staffing only and do not include per-ticket verification fees.
                </p>
              </div>
            </CardContent>
          </div>
          <CardContent>
            <Button
              onClick={() => {
                setPlan("Subscription-Dedicated-Verification-Agents");
                setOpen(true);
              }}
              className="tw-w-full !tw-bg-purple-600 hover:!tw-bg-purple-700 tw-mt-6 !tw-border-0"
            >
              Get Started
            </Button>
          </CardContent>
        </Card>
      </div>

      <RCMPlanSelectModalFormModal
        show={open}
        handleClose={() => {
          setOpen(false);
        }}
        plan={plan}
      />
    </>
  );
};

export default RCMPlansList;
