"use client"
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ConatctDetailsSchema, ContactDetailsFormValues, ContactFormValues, contactSchema } from '@/validations/contact.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

const ConatctDetsilsForm1 = () => {
  const [otherInterest, setOtherInterest] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch
  } = useForm<ContactDetailsFormValues>({
    resolver: zodResolver(ConatctDetailsSchema),
  });

  const [responseMessage, setResponseMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const router = useRouter();

  const onSubmit = async (data: ContactDetailsFormValues) => {

    console.log(data)
    try {
      setResponseMessage('');
      setIsError(false);

      const res = await fetch("/api/send-email", {
        method: "POST",
        body: JSON.stringify({ ...data, usedFor: "contactus" }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await res.json();

      if (result.success) {
        setResponseMessage("Your message was sent successfully!");
        setIsError(false);
        reset()
        // router.replace("/thank-you")
        if(values.iAmA ==="Student"){
          router.replace("/student-thank-you")
        }else{
          router.replace("/doctor-thank-you")
        }
      } else {
        setResponseMessage(result.error || "Something went wrong.");
        setIsError(true);
      }
    } catch (error: any) {
      setIsError(true);
      setResponseMessage(error.message || 'Something went wrong');
    }
  };

  const values = watch()
  console.log(values) // watch input valu

  const specialties = [
    'Internal Medicine',
    'Pediatrics',
    'Orthopedics',
    'Psychiatry',
    'General Surgery',
    'Dermatology',
    'Cardiology',
    'Other'
  ];

  const studyFields = [
    'Pre-Med',
    'Nursing',
    'Health Administration',
    'Medical Billing & Coding',
    'Other'
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-wraper contact-form ajax-form">
      <div className="ajax-message">
        {responseMessage && (
          <div className={`alert ${isError ? 'alert-danger' : 'alert-success'}`}>
            <strong>{responseMessage}</strong>
          </div>
        )}
      </div>

      <div className="row">

        <div className="form-group col-md-12">
          <select
            {...register('iAmA')}
            className="form-select form-control"
          >
            <option value="">I am a</option>
            <option value="Practicing Doctor"> Practicing Doctor</option>
            <option value="Student">Student</option>
          </select>
          {errors.iAmA && <small className="text-danger">{errors.iAmA.message}</small>}
        </div>


        <div className="form-group col-md-12">
          <input
            {...register('full_name')}
            className="form-control"
            placeholder="Full Name"
          />
          {errors.full_name && <small className="text-danger">{errors.full_name.message}</small>}
        </div>
        <div className="form-group col-md-12">
          <input
            {...register("email")}
            type="email"
            className="form-control"
            placeholder="Email Address"
          />
          {errors.email && <small className="text-danger">{errors.email.message}</small>}
        </div>
        <div className="form-group col-md-12">
          <input
            {...register("phone_number")}
            className="form-control"
            placeholder="Phone Numbers"
          />
          {errors.phone_number && <small className="text-danger">{errors.phone_number.message}</small>}
        </div>


        {
          values.iAmA === "Student" ? (<>
            <div className="form-group col-md-12">
              <input
                {...register("school_name")}
                className="form-control"
                placeholder="School Name"
              />
              {errors.school_name && <small className="text-danger">{errors.school_name.message}</small>}
            </div></>) : (<div className="form-group col-md-12">
              <input
                {...register("organiztion")}
                className="form-control"
                placeholder="Organiztion"
              />
              {errors.organiztion && <small className="text-danger">{errors.organiztion.message}</small>}
            </div>)
        }




        {
          values?.iAmA !== "Student" && <><div className="form-group col-md-12">
            <select
              {...register("Specialty")}
              className="form-select form-control"
            >
              <option value="">Specialty</option>

              {
                specialties.map((specialty, index) => (
                  <option key={index} value={specialty}>{specialty}</option>
                ))
              }

            </select>
            {errors.Specialty && <small className="text-danger">{errors.Specialty.message}</small>}
          </div>




          </>
        }
        {
          values?.iAmA === "Student" && <>


            <div className="form-group col-md-12">
              <select
                {...register("field_of_study")}
                className="form-select form-control"
              >
                <option value="">Field of Study </option>

                {
                  studyFields.map((specialty, index) => (
                    <option key={index} value={specialty}>{specialty}</option>
                  ))
                }

              </select>
              {errors.field_of_study && <small className="text-danger">{errors.field_of_study.message}</small>}
            </div>

            <div className="form-group col-md-12">
              <input
                {...register("graduation_year")}
                className="form-control"
                placeholder="Graduation Year"
              />
              {errors.graduation_year && <small className="text-danger">{errors.graduation_year.message}</small>}
            </div>
          </>
        }




        <div className="form-group col-md-12">
          <div className="form-group col-md-12">
            <div className="interested-in-section">
              <p className="mb-2">Interested In:</p>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="medicalBillingServices"
                  value="Medical Billing Services (for Practice)"
                  {...register("interested_in")}
                />
                <label className="form-check-label" htmlFor="medicalBillingServices">
                  Medical Billing Services (for Practice)
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="learningBilling"
                  value="Learning about Medical Billing"
                  {...register("interested_in")}
                />
                <label className="form-check-label" htmlFor="learningBilling">
                  Learning about Medical Billing
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="internship"
                  value="Internship/Collaboration Opportunities"
                  {...register('interested_in')}
                />
                <label className="form-check-label" htmlFor="internship">
                  Internship/Collaboration Opportunities
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="otherInterest"
                  value="Other"
                  {...register('interested_in')}
                />
                <label className="form-check-label" htmlFor="otherInterest">
                  Other
                </label>
              </div>
              {values?.interested_in && values?.interested_in?.length >0 && values?.interested_in?.includes('Other') && (
                <input
                  type="text"
                  className="form-control mt-2"
                  placeholder="Please specify"
                  {...register('other_interest')}
                />
              )}
            </div>
          </div>
        </div>


        {
          values?.iAmA !== "Student" && <div className="form-group col-md-12">
            <select
              {...register("estimated_monthly_claims")}
              className="form-select form-control"
            >
              <option value="">Estimated Monthly Claims</option>

              {
                ["Under 100", "100–300", "300+"].map((specialty, index) => (
                  <option key={index} value={specialty}>{specialty}</option>
                ))
              }

            </select>
            {errors.estimated_monthly_claims && <small className="text-danger">{errors.estimated_monthly_claims.message}</small>}
          </div>
        }
        <div className="form-group col-md-12">
          <select
            {...register("preferred_contact_method")}
            className="form-select form-control"
          >
            <option value="">Preferred Contact Method</option>

            {
              ["Email", "Phone", "Text"].map((specialty, index) => (
                <option key={index} value={specialty}>{specialty}</option>
              ))
            }

          </select>
          {errors.preferred_contact_method && <small className="text-danger">{errors.preferred_contact_method.message}</small>}
        </div>

       
        <div className="form-group col-md-12">
          <textarea
            {...register("comments_or_questions")}
            className="form-control"
            placeholder="Type Message"
          ></textarea>
          {errors.comments_or_questions && <small className="text-danger">{errors.comments_or_questions.message}</small>}
        </div>
        <div className="col-lg-12">
          <button
            type="submit"
            className="btn w-100 btn-secondary btn-lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Get Started Now'}
          </button>
        </div>
      </div>
    </form >
  )
}

export default ConatctDetsilsForm1
