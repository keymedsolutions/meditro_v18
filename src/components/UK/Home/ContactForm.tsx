"use client";

import React, { useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/ui/input";
import { Button } from "@/ui/button";

// ✅ Zod schema for validation
const ContactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  businessEmail: z.string().email("Invalid business email address"),
  company: z.string().min(1, "Company is required"),
  country: z.string().min(1, "Country is required"),
  talentType: z.string().min(1, "Please specify the type of talent needed"),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof ContactFormSchema>;

const ContactForm = () => {
  const [responseMessage, setResponseMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors,isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactFormSchema),
  });

  // const onSubmit = (data: ContactFormData) => {
  //   console.log("Form Submitted:", data);
  // };

  const onSubmit = async (data: ContactFormData) => {
    console.log(data,"Contact us page");
    try {
      setResponseMessage("");
      setIsError(false);

      const res = await fetch("/api/send-email", {
        method: "POST",
        body: JSON.stringify({ ...data, usedFor: "contactus" }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await res.json();

      console.log(result,"result _ responseeeee")
      if (result.success) {
        setResponseMessage("Your message was sent successfully!");
        setIsError(false);
        reset();
        // // router.replace("/thank-you")
        // if(values.iAmA ==="Student"){
        //   router.replace("/student-thank-you")
        // }else{
        //   router.replace("/doctor-thank-you")
        // }
      } else {
        setResponseMessage(result.error || "Something went wrong.");
        setIsError(true);
      }
    } catch (error: any) {
      setIsError(true);
      setResponseMessage(error.message || "Something went wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="tw-space-y-4 ajax-form">
      {/* Name */}
      <div>
        <div className="ajax-message">
          {responseMessage && (
            <div
              className={`alert ${isError ? "alert-danger" : "alert-success"}`}
            >
              <strong>{responseMessage}</strong>
            </div>
          )}
        </div>

        <Input
          {...register("name")}
          placeholder="Name*"
          className="sm:!tw-h-12 !tw-h-auto"
        />
        {errors.name && (
          <p className="tw-text-red-500 tw-text-sm tw-mt-1">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Business Email */}
      <div>
        <Input
          {...register("businessEmail")}
          placeholder="Business Email*"
          className="sm:!tw-h-12 !tw-h-auto"
        />
        {errors.businessEmail && (
          <p className="tw-text-red-500 tw-text-sm tw-mt-1">
            {errors.businessEmail.message}
          </p>
        )}
      </div>

      {/* Company */}
      <div>
        <Input
          {...register("company")}
          placeholder="Company*"
          className="sm:!tw-h-12 !tw-h-auto"
        />
        {errors.company && (
          <p className="tw-text-red-500 tw-text-sm tw-mt-1">
            {errors.company.message}
          </p>
        )}
      </div>

      {/* Country */}
      <div>
        <Input
          {...register("country")}
          placeholder="Country*"
          className="sm:!tw-h-12 !tw-h-auto"
        />
        {errors.country && (
          <p className="tw-text-red-500 tw-text-sm tw-mt-1">
            {errors.country.message}
          </p>
        )}
      </div>

      {/* Type of Talent Needed */}
      <div>
        <Input
          {...register("talentType")}
          placeholder="Type of Talent Needed*"
          className="sm:!tw-h-12 !tw-h-auto"
        />
        {errors.talentType && (
          <p className="tw-text-red-500 tw-text-sm tw-mt-1">
            {errors.talentType.message}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <Input
          {...register("message")}
          placeholder="Message"
          className="sm:!tw-h-12 !tw-h-auto"
        />
        {errors.message && (
          <p className="tw-text-red-500 tw-text-sm tw-mt-1">
            {errors.message.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="tw-text-lg tw-w-full tw-font-semibold !tw-bg-accent-200 !tw-text-accent-700 hover:!tw-bg-accent-600 hover:!tw-text-white sm:!tw-h-12 !tw-h-auto !tw-border-none"
      >
        {isSubmitting ? 'Submitting...' : 'Get Started'}
      </Button>
    </form>
  );
};

export default ContactForm;
