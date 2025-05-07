/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { Button, Modal, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";

// Define Zod schema for form validation
const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  plan: z.string().min(1, "Plan  is required"),
});

const PlanSelectModalFormModal = ({ show, handleClose, plan }: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors, },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });


  useEffect(() => {
    if (!show) {
      reset();
    }

    if (plan) {
      reset({
        plan: plan,
      });
    }
  }, [show, plan]);
  const navigate = useRouter();

  const [responseMessage, setResponseMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!show) {
      reset();
    }
  }, [show]);

  // Handle form submission
  const onSubmit = async (data: any) => {
    setResponseMessage(""); // Reset previous message
    setIsLoading(true);
    try {
      const response = await fetch(
        "/api/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...data, "usedFor": "plans" }),
        }
      );

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

            {/* Service Type (Dropdown) */}
            <div className="tw-mb-4">
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

                <option value="Basic">Basic</option>
                <option value="Pro">Pro</option>
                <option value="Premium">Premium</option>
              </select>
              {errors.plan && (
                <p className="tw-text-red-500 tw-text-sm tw-mt-1">
                  {errors.plan.message}
                </p>
              )}
            </div>
          </div>

          {responseMessage && (
            <p
              className={`tw-text-center tw-mt-4 ${responseMessage.includes("✅")
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

export default PlanSelectModalFormModal;
