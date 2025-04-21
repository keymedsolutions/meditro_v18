"use client"
import React, { useState } from 'react';

const ContactSection: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        practice: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the form data to a server
        console.log('Form submitted:', formData);

        // Reset form
        setFormData({
            name: '',
            email: '',
            phone: '',
            practice: '',
            message: ''
        });

        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
    };

    return (
        <section id="contact" className="tw-py-16 md:tw-py-24 tw-bg-hero-gradient tw-relative">
            <div className="tw-absolute tw-top-0 tw-left-0 tw-w-96 tw-h-96 tw-bg-keymed-100 tw-rounded-full tw-filter tw-blur-3xl tw-opacity-30 -tw-translate-y-1/2 -tw-translate-x-1/3"></div>

            <div className="tw-section-container tw-relative">
                <div className="tw-max-w-5xl tw-mx-auto">
                    <h2 className="tw-text-center tw-font-medium tw-mb-2">Ready to optimize your revenue cycle?</h2>
                    <p className="tw-text-center tw-text-foreground/70 tw-mb-12">Schedule a free consultation with our billing experts today.</p>

                    <div className="tw-grid md:tw-grid-cols-2 tw-gap-8 md:tw-gap-12">
                        <div className="tw-glass-card tw-p-8 tw-animate-fade-in-left">
                            <h3 className="tw-text-2xl tw-font-medium tw-mb-6">Contact Information</h3>

                            <div className="tw-space-y-6">
                                <div className="tw-flex tw-items-start tw-gap-4">
                                    <div className="tw-min-w-8 tw-h-8 tw-rounded-full tw-bg-keymed-100 tw-text-keymed-600 tw-flex tw-items-center tw-justify-center tw-mt-0.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="tw-font-medium">Phone</div>
                                        <div className="tw-text-foreground/70">(123) 456-7890</div>
                                    </div>
                                </div>

                                <div className="tw-flex tw-items-start tw-gap-4">
                                    <div className="tw-min-w-8 tw-h-8 tw-rounded-full tw-bg-keymed-100 tw-text-keymed-600 tw-flex tw-items-center tw-justify-center tw-mt-0.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="tw-font-medium">Email</div>
                                                <div className="tw-text-foreground/70">info@keymedsolutions.com</div>
                                    </div>
                                </div>

                                <div className="tw-flex tw-items-start tw-gap-4">
                                    <div className="tw-min-w-8 tw-h-8 tw-rounded-full tw-bg-keymed-100 tw-text-keymed-600 tw-flex tw-items-center tw-justify-center tw-mt-0.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="tw-font-medium">Address</div>
                                        <div className="tw-text-foreground/70">123 Medical Plaza, Suite 200<br />Healthcare City, NY 10001</div>
                                    </div>
                                </div>
                            </div>

                            <h3 className="tw-text-xl tw-font-medium tw-mt-10 tw-mb-4">Our Hours</h3>
                            <div className="tw-space-y-2 tw-text-foreground/70">
                                <div className="tw-flex tw-justify-between">
                                    <span>Monday - Friday:</span>
                                    <span>9:00 AM - 6:00 PM</span>
                                </div>
                                <div className="tw-flex tw-justify-between">
                                    <span>Saturday:</span>
                                    <span>10:00 AM - 2:00 PM</span>
                                </div>
                                <div className="tw-flex tw-justify-between">
                                    <span>Sunday:</span>
                                    <span>Closed</span>
                                </div>
                            </div>
                        </div>

                        <div className="tw-glass-card tw-p-8 tw-animate-fade-in-right">
                            <h3 className="tw-text-2xl tw-font-medium tw-mb-6">Schedule a Consultation</h3>
                            <form onSubmit={handleSubmit} className="tw-space-y-4">
                                <div>
                                    <label htmlFor="name" className="tw-block tw-text-sm tw-font-medium tw-text-foreground/70 tw-mb-1">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="tw-w-full tw-px-4 tw-py-2 tw-rounded-lg tw-border tw-border-gray-200 focus:outline-none focus:ring-2 focus:ring-keymed-500 focus:border-transparent"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="tw-block tw-text-sm tw-font-medium tw-text-foreground/70 tw-mb-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="tw-w-full tw-px-4 tw-py-2 tw-rounded-lg tw-border tw-border-gray-200 focus:outline-none focus:ring-2 focus:ring-keymed-500 focus:border-transparent"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="tw-block tw-text-sm tw-font-medium tw-text-foreground/70 tw-mb-1">Phone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="tw-full tw-px-4 tw-py-2 tw-rounded-lg tw-border tw-border-gray-200 focus:outline-none focus:ring-2 focus:ring-keymed-500 focus:border-transparent"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="practice" className="tw-block tw-text-sm tw-font-medium tw-text-foreground/70 tw-mb-1">Practice/Specialty</label>
                                    <input
                                        type="text"
                                        id="practice"
                                        name="practice"
                                        value={formData.practice}
                                        onChange={handleChange}
                                        className="tw-w-full tw-px-4 tw-py-2 tw-rounded-lg tw-border tw-border-gray-200 focus:outline-none focus:ring-2 focus:ring-keymed-500 focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="tw-block tw-text-sm tw-font-medium tw-text-foreground/70 tw-mb-1">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="tw-w-full tw-px-4 tw-py-2 tw-rounded-lg tw-border tw-border-gray-200 focus:outline-none focus:ring-2 focus:ring-keymed-500 focus:border-transparent"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="tw-w-full tw-primary-button tw-mt-4"
                                >
                                    Schedule Consultation
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
