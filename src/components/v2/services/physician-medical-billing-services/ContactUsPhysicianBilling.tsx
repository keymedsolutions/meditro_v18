import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/card";
import { Mail, Phone } from "lucide-react";

const ContactUsPhysicianBilling = () => {
  return (
    <React.Fragment>
      <section className="tw-py-20 tw-bg-white">
        <div className="tw-container tw-mx-auto tw-px-4">
          <motion.div
            className="tw-text-center tw-mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="tw-text-3xl md:tw-text-4xl tw-font-bold tw-text-foreground tw-mb-4 font-space-grotesk">
              Contact Us Today
            </h2>
            <p className="tw-text-xl tw-text-muted-foreground tw-max-w-2xl tw-mx-auto font-dm-sans">
              Ready to experience the benefits of professional Physician Medical
              Billing Outsourcing?
            </p>
          </motion.div>

          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-8 tw-max-w-4xl tw-mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Card className="tw-h-full border">
                <CardHeader>
                  <div className="tw-flex tw-items-center tw-space-x-4">
                    <div className="tw-w-12 tw-h-12 tw-bg-[#565acf]/10 tw-rounded-lg tw-flex tw-items-center tw-justify-center">
                      <Phone className="tw-w-6 tw-h-6 tw-text-[#565acf]" />
                    </div>
                    <CardTitle className="tw-text-xl tw-font-bold tw-text-foreground font-space-grotesk">
                      Call Us
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <a href="tel:+1336499-9299" className="tw-text-2xl tw-font-bold tw-text-[#f17732] tw-mb-2 font-dm-sans">
                    +1 (336) 499-9299
                  </a>
                  <p className="tw-text-muted-foreground font-dm-sans">
                    Schedule a personalized consultation
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Card className="tw-h-full border">
                <CardHeader>
                  <div className="tw-flex tw-items-center tw-space-x-4">
                    <div className="tw-w-12 tw-h-12 tw-bg-[#f17732]/10 tw-rounded-lg tw-flex tw-items-center tw-justify-center">
                      <Mail className="tw-w-6 tw-h-6 tw-text-[#f17732]" />
                    </div>
                    <CardTitle className="tw-text-xl tw-font-bold tw-text-foreground font-space-grotesk">
                      Email Us
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <a href="mailto:info@keymedsolution.com" className="tw-break-all tw-text-2xl tw-font-bold tw-text-[#565acf] tw-mb-2 font-dm-sans">
                    info@keymedsolution.com
                  </a>
                  <p className="tw-text-muted-foreground font-dm-sans">
                    Get detailed information about our services
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="tw-py-20 tw-bg-white">
        <div className="tw-container tw-mx-auto tw-px-4">
          <motion.div
            className="tw-text-center tw-mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="tw-text-3xl md:tw-text-4xl tw-font-bold tw-text-foreground tw-mb-4 font-space-grotesk">
              Request Your Free Demo
            </h2>
            <p className="tw-text-xl tw-text-muted-foreground tw-max-w-2xl tw-mx-auto font-dm-sans">
              See how our integrated Physician Medical Billing Services and
              Revenue Cycle Management Services can transform your practice’s
              financial health; book your demo today!
            </p>
          </motion.div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ContactUsPhysicianBilling;
