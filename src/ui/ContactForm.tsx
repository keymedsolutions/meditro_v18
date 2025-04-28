/* eslint-disable react/no-unescaped-entities */

import React, { useState } from 'react';

interface ContactFormProps {
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ className = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className={`${className}`}>
      {isSuccess ? (
        <div className="tw-text-center tw-py-6 tw-px-4 tw-rounded-lg tw-bg-green-50 tw-text-green-700 tw-animate-fade-in">
          <p className="tw-font-medium tw-text-lg">Thank you for contacting us!</p>
          <p className="tw-mt-2">We&apos;ve received your message and will get back to you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="tw-space-y-6">
          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-6">
            <div>
              <label htmlFor="contact-name" className="tw-block tw-text-sm tw-font-medium tw-text-muted-foreground tw-mb-1">
                Name
              </label>
              <input
                type="text"
                id="contact-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="tw-w-full tw-px-4 tw-py-2 tw-border tw-border-input tw-rounded-lg focus:tw-ring-2 focus:tw-ring-primary/20 focus:tw-border-primary tw-transition-all tw-duration-200 tw-outline-none"
                placeholder="Full Name"
                required
              />
            </div>
            
            <div>
              <label htmlFor="contact-email" className="tw-block tw-text-sm tw-font-medium tw-text-muted-foreground tw-mb-1">
                Email
              </label>
              <input
                type="email"
                id="contact-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="tw-w-full tw-px-4 tw-py-2 tw-border tw-border-input tw-rounded-lg focus:tw-ring-2 focus:tw-ring-primary/20 focus:tw-border-primary tw-transition-all tw-duration-200 tw-outline-none"
                placeholder="Email Address"
                required
              />
            </div>
            
            <div>
              <label htmlFor="contact-phone" className="tw-block tw-text-sm tw-font-medium tw-text-muted-foreground tw-mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="contact-phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="tw-w-full tw-px-4 tw-py-2 tw-border tw-border-input tw-rounded-lg focus:tw-ring-2 focus:tw-ring-primary/20 focus:tw-border-primary tw-transition-all tw-duration-200 tw-outline-none"
                placeholder="(123) 456-7890"
                required
              />
            </div>
            
            <div>
              <label htmlFor="contact-company" className="tw-block tw-text-sm tw-font-medium tw-text-muted-foreground tw-mb-1">
                Healthcare Facility
              </label>
              <input
                type="text"
                id="contact-company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="tw-w-full tw-px-4 tw-py-2 tw-border tw-border-input tw-rounded-lg focus:tw-ring-2 focus:tw-ring-primary/20 focus:tw-border-primary tw-transition-all tw-duration-200 tw-outline-none"
                placeholder="Your practice name"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="contact-message" className="tw-block tw-text-sm tw-font-medium tw-text-muted-foreground tw-mb-1">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="tw-w-full tw-px-4 tw-py-2 tw-border tw-border-input tw-rounded-lg focus:tw-ring-2 focus:tw-ring-primary/20 focus:tw-border-primary tw-transition-all tw-duration-200 tw-outline-none"
              placeholder="Tell us about your needs..."
              required
            ></textarea>
          </div>
          
          <button
            type="submit"
            className={`btn btn-primary shadow tw-px-8 ${isSubmitting ? 'tw-opacity-70 tw-cursor-not-allowed' : ''}`}
            disabled={isSubmitting}
          >
            
            {isSubmitting ? (
              <span className="tw-flex tw-items-center tw-justify-center">
                <svg className="tw-animate-spin -tw-ml-1 tw-mr-2 tw-h-4 tw-w-4 tw-text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="tw-opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="tw-opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
             <>
            Send Message <i className="btn-icon-bx fas fa-chevron-right"></i>
             </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
