/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, ContactFormValues } from '@/validations/contact.schema';
import { useState } from 'react';

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
    });

    const [responseMessage, setResponseMessage] = useState('');
    const [isError, setIsError] = useState(false);

    const onSubmit = async (data: ContactFormValues) => {
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

            } else {
                setResponseMessage(result.error || "Something went wrong.");
                setIsError(true);
            }
        } catch (error: any) {
            setIsError(true);
            setResponseMessage(error.message || 'Something went wrong');
        }
    };

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
                    <input
                        {...register('name')}
                        className="form-control"
                        placeholder="Your Name"
                    />
                    {errors.name && <small className="text-danger">{errors.name.message}</small>}
                </div>
                <div className="form-group col-md-12">
                    <input
                        {...register('email')}
                        type="email"
                        className="form-control"
                        placeholder="Email"
                    />
                    {errors.email && <small className="text-danger">{errors.email.message}</small>}
                </div>
                <div className="form-group col-md-12">
                    <input
                        {...register('phone')}
                        className="form-control"
                        placeholder="Phone Numbers"
                    />
                    {errors.phone && <small className="text-danger">{errors.phone.message}</small>}
                </div>
                <div className="form-group col-md-12">
                    <select
                        {...register('department')}
                        className="form-select form-control"
                    >
                        <option value="">Select Department</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    {errors.department && <small className="text-danger">{errors.department.message}</small>}
                </div>
                <div className="form-group col-md-12">
                    <textarea
                        {...register('message')}
                        className="form-control"
                        placeholder="Type Message"
                    ></textarea>
                    {errors.message && <small className="text-danger">{errors.message.message}</small>}
                </div>
                <div className="col-lg-12">
                    <button
                        type="submit"
                        className="btn w-100 btn-secondary btn-lg"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                </div>
            </div>
        </form>
    );
}
