/* eslint-disable react/no-unescaped-entities */
"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="inmbp-section tw-bg-medical-gray">
      <div className="tw-container tw-mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="tw-text-center mb-16"
        >
          <span className="tw-inline-block tw-px-4 tw-py-1 tw-rounded-full tw-bg-medical-lightTeal tw-text-medical-teal tw-text-sm tw-font-medium mb-4">
            Contact Us
          </span>
          <h2 className="tw-text-3xl md:tw-text-4xl tw-font-bold tw-text-medical-navy mb-6">
            Schedule a Free Consultation Today!
          </h2>
          <p className="tw-max-w-2xl tw-mx-auto tw-text-medical-darkGray">
            Get in touch with our billing experts to discuss how we can help optimize your practice's revenue cycle.
          </p>
        </motion.div>

        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="tw-glass-card tw-p-8"
          >
            <h3 className="tw-text-2xl tw-font-bold tw-text-medical-navy mb-6">Get in Touch</h3>
            <p className="tw-text-medical-darkGray mb-8">
              Fill out the form and one of our billing specialists will reach out to schedule your free consultation.
            </p>
            
            <div className="tw-space-y-6">
              <div className="tw-flex tw-items-center">
                <div className="tw-w-12 tw-h-12 tw-rounded-full tw-bg-medical-lightTeal tw-flex tw-items-center tw-justify-center tw-text-medical-teal">
                  <Phone className="tw-w-5 tw-h-5" />
                </div>
                <div className="tw-ml-4">
                  <h4 className="tw-font-medium tw-text-medical-navy">Phone</h4>
                  <p className="tw-text-medical-darkGray">(800) 555-1234</p>
                </div>
              </div>
              
              <div className="tw-flex tw-items-center">
                <div className="tw-w-12 tw-h-12 tw-rounded-full tw-bg-medical-lightTeal tw-flex tw-items-center tw-justify-center tw-text-medical-teal">
                  <Mail className="tw-w-5 tw-h-5" />
                </div>
                <div className="tw-ml-4">
                  <h4 className="tw-font-medium tw-text-medical-navy">Email</h4>
                  <p className="tw-text-medical-darkGray">info@keymedsolutions.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="tw-glass-card tw-p-8"
          >
            <form className="tw-space-y-6">
              <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-6">
                <div>
                  <label className="tw-block tw-text-sm tw-font-medium tw-text-medical-darkGray mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="tw-w-full tw-px-4 tw-py-3 tw-rounded-md tw-border tw-border-gray-300 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-medical-blue/50"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="tw-block tw-text-sm tw-font-medium tw-text-medical-darkGray mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="tw-w-full tw-px-4 tw-py-3 tw-rounded-md tw-border tw-border-gray-300 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-medical-blue/50"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="tw-block tw-text-sm tw-font-medium tw-text-medical-darkGray mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="tw-w-full tw-px-4 tw-py-3 tw-rounded-md tw-border tw-border-gray-300 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-medical-blue/50"
                  placeholder="johndoe@example.com"
                />
              </div>
              
              <div>
                <label className="tw-block tw-text-sm tw-font-medium tw-text-medical-darkGray mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="tw-w-full tw-px-4 tw-py-3 tw-rounded-md tw-border tw-border-gray-300 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-medical-blue/50"
                  placeholder="(123) 456-7890"
                />
              </div>
              
              <div>
                <label className="tw-block tw-text-sm tw-font-medium tw-text-medical-darkGray mb-2">
                  Practice Type
                </label>
                <select
                  className="tw-w-full tw-px-4 tw-py-3 tw-rounded-md tw-border tw-border-gray-300 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-medical-blue/50"
                >
                  <option value="">Select Practice Type</option>
                  <option value="nephrology">Nephrology</option>
                  <option value="internal_medicine">Internal Medicine</option>
                  <option value="both">Both</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="tw-block tw-text-sm tw-font-medium tw-text-medical-darkGray mb-2">
                  Message
                </label>
                <textarea
                  className="tw-w-full tw-px-4 tw-py-3 tw-rounded-md tw-border tw-border-gray-300 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-medical-blue/50 tw-h-32"
                  placeholder="Tell us about your billing needs..."
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="tw-btn-primary tw-w-full tw-flex tw-items-center tw-justify-center"
                >
                  <Send size={18} className="tw-mr-2" />
                  Submit Request
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
