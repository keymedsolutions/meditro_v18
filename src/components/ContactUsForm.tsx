/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, ContactFormValues } from '@/validations/contact.schema';
import { useRouter } from 'next/navigation';
import { ContactInfo, SocialAccountLinks } from '@/constant/constatnt';


const ContactUsForm = () => {
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

    const router = useRouter()

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
                router.replace("/thank-you")

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
        <section>
            <div className="container">
                <div className="contact-wraper">
                    <div className="row">
                        <div className="col-lg-6 mb-30">
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
                                            {...register('inquiry_for')}
                                            className="form-select form-control"
                                        >
                                            <option value="">What Are You Contacting Us About?</option>
                                            <option value="Student Inquiry">Student Inquiry</option>
                                            <option value="Medical Billing Services">Medical Billing Services</option>
                                            <option value="Other">Other</option>
                                        </select>
                                        {errors.inquiry_for && <small className="text-danger">{errors.inquiry_for.message}</small>}
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
                        </div>
                        <div className="col-lg-6 mb-30">
                            <div className="contact-info ovpr-dark" style={{ backgroundImage: `url("/images/about/pic-1.jpg")` }}>
                                <div className="info-inner">
                                    <h4 className="title mb-30">Contact Us For Any Information</h4>
                                    <div className="icon-box">
                                        <h6 className="title"><i className="ti-map-alt"></i> Location</h6>
                                        <p className='tw-text-white'>{ContactInfo.location}</p>
                                    </div>
                                    <div className="icon-box">
                                        <h6 className="title"><i className="ti-id-badge"></i> Email &amp; Phone</h6>
                                        <a href={`mailto:${ContactInfo.email}`} className="text-white">{ContactInfo.email}</a><br />
                                        <a href='tel:+13364968296' className='tw-text-white'>{ContactInfo.phone}</a>
                                    </div>
                                    <div className="icon-box">
                                        <h6 className="title"><i className="ti-world"></i> Follow Us</h6>
                                        <ul className="social-media">
                                            <li><a rel="noreferrer" target="_blank" href={SocialAccountLinks.FACEBOOK}><i className="fab fa-facebook"></i></a></li>
                                            <li><a rel="noreferrer" target="_blank" href={SocialAccountLinks.LINKEDIN}><i className="fab fa-linkedin"></i></a></li>
                                            <li><a rel="noreferrer" target="_blank" href={SocialAccountLinks.INSTAGRAM}><i className="fab fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUsForm
