/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { Button, Modal, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";

const RCMPlanSelectModalFormModal = ({ show, handleClose, plan }: any) => {
  // Define Zod schema for form validation
  const schema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z
      .string()
      .min(1, "Email is required")
      .email("Invalid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    volumeDay:
      plan !== "Subscription-Dedicated-Verification-Agents"
        ? z.string().min(1, "Volume Day is required")
        : z.string().optional(),
    plan:
      plan !== "Subscription-Dedicated-Verification-Agents"
        ? z.string().optional()
        : z.string().min(1, "Plan is required"),
    numberOfAgent:
      plan !== "Subscription-Dedicated-Verification-Agents"
        ? z.string().optional()
        : z.string().min(1, "Number Of Agent is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    if (!show) {
      reset();
    }

    if (plan == "Subscription-Dedicated-Verification-Agents") {
      reset({
        plan: "Eligibility-And-Benefits-Check",
      });
    } else {
      reset(); // or set other default values if needed
    }
  }, [show, plan]);

  const navigate = useRouter();

  const ServicePlan = watch("plan");

  const [responseMessage, setResponseMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!show) {
      reset();
    }
  }, [show]);

  // Handle form submission
  const onSubmit = async (data: any) => {
    if (plan !== "Subscription-Dedicated-Verification-Agents") {
      delete data.plan;
    }
    setResponseMessage(""); // Reset previous message
    setIsLoading(true);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, usedFor: "rcm-plans" }),
      });

      if (response.ok) {
        setResponseMessage("✅ Your request has been submitted successfully!");
        reset(); // Reset form after successful submission
        navigate.replace("/thank-you");
      } else {
        setResponseMessage("❌ Failed to submit. Please try again.");
      }
    } catch (error) {
      setResponseMessage("❌ An error occurred. Please try again later.");
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal size="lg" show={show} onHide={handleClose} centered>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header closeButton>
          <h3 className="tw-text-2xl tw-font-bold tw-text-accent-500">
            Subscribe Plan
          </h3>
        </Modal.Header>
        <Modal.Body>
          <div className="tw-rounded-xl tw-p-3 sm:tw-p-4 md:tw-p-8">
            {/* Name Field */}
            <div className="tw-mb-4">
              <label className="tw-block tw-text-accentOrange-500 tw-font-bold tw-mb-2">
                Name
              </label>
              <input
                type="text"
                {...register("name")}
                className="tw-w-full tw-px-3 tw-py-2 tw-border tw-rounded-lg"
              />
              {errors.name && (
                <p className="tw-text-red-500 tw-text-sm">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div className="tw-mb-4">
              <label className="tw-block tw-text-accentOrange-500 tw-font-bold tw-mb-2">
                Email
              </label>
              <input
                type="email"
                {...register("email")}
                className="tw-w-full tw-px-3 tw-py-2 tw-border tw-rounded-lg"
              />
              {errors.email && (
                <p className="tw-text-red-500 tw-text-sm">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone Field */}
            <div className="tw-mb-4">
              <label className="tw-block tw-text-accentOrange-500 tw-font-bold tw-mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                {...register("phone")}
                className="tw-w-full tw-px-3 tw-py-2 tw-border tw-rounded-lg"
              />
              {errors.phone && (
                <p className="tw-text-red-500 tw-text-sm">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {plan !== "Subscription-Dedicated-Verification-Agents" && (
              <div className="tw-mb-4">
                <label className="tw-block tw-text-accentOrange-500 tw-font-bold tw-mb-2">
                  Volume/Day
                </label>
                <input
                  type="text"
                  {...register("volumeDay")}
                  className="tw-w-full tw-px-3 tw-py-2 tw-border tw-rounded-lg"
                />
                {errors.volumeDay && (
                  <p className="tw-text-red-500 tw-text-sm">
                    {errors.volumeDay.message}
                  </p>
                )}
              </div>
            )}

            {/* Service Type (Dropdown) */}
            {plan === "Subscription-Dedicated-Verification-Agents" && (
              <div className="tw-w-full tw-flex lg:tw-flex-row tw-flex-col tw-gap-x-2 tw-items-center ">
                <div className="tw-w-full tw-mb-4">
                  <label
                    htmlFor="practice"
                    className="tw-block tw-text-accentOrange-500 tw-font-bold tw-mb-2"
                  >
                    Plan
                  </label>
                  <select
                    id="practice"
                    {...register("plan")}
                    className="tw-w-full tw-px-3 tw-py-2 tw-border tw-border-gray-300 tw-bg-transparent tw-rounded-lg focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-accentOrange-500"
                  >
                    <option value="">Select a Plan</option>

                    <option value="Eligibility-And-Benefits-Check">
                      Eligibility & Benefits Check
                    </option>
                    <option value="Coding-And-Billing">Coding & Billing</option>
                    <option value="Accounts-Receivable">
                      Accounts Receivable
                    </option>
                    <option value="Payment-Posting">Payment Posting</option>
                  </select>
                  {errors.plan && (
                    <p className="tw-text-red-500 tw-text-sm tw-mt-1">
                      {errors.plan.message}
                    </p>
                  )}
                </div>
                {ServicePlan !== "" && (
                  <div className="tw-w-full tw-mb-4 lg:tw-max-w-[30%]">
                    <label className="tw-block tw-text-accentOrange-500 tw-font-bold tw-mb-2">
                      Number of Agents
                    </label>
                    <input
                      type="number"
                      {...register("numberOfAgent")}
                      className="tw-w-full tw-px-3 tw-py-2 tw-border tw-rounded-lg"
                    />
                    {errors.numberOfAgent && (
                      <p className="tw-text-red-500 tw-text-sm">
                        {errors.numberOfAgent.message}
                      </p>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          {responseMessage && (
            <p
              className={`tw-text-center tw-mt-4 ${
                responseMessage.includes("✅")
                  ? "tw-text-green-500"
                  : "tw-text-red-500"
              }`}
            >
              {responseMessage}
            </p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
            disabled={isLoading}
          >
            Close
          </Button>
          <Button variant="primary" type="submit" disabled={isLoading}>
            {isLoading ? (
              <Spinner as="span" animation="border" size="sm" />
            ) : (
              "Subscribe Now"
            )}
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default RCMPlanSelectModalFormModal;
