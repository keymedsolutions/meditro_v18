/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useInView, motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import { useRef } from "react"
import { FloatingElements } from "./floating-elements"
import { GlassCard } from "./glass-card"
import { GradientText } from "./gradient-text"
import { MagneticButton } from "./magnetic-button"
import { ThreeDBackground } from "./three-d-background"
import { Input } from "@/ui/input"

function ContactSection({ enterButton, leaveLink }: any) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" ref={ref} className="tw-py-24 tw-relative tw-overflow-hidden">
      <div className="tw-absolute tw-inset-0">
        <ThreeDBackground />
      </div>

      <div className="tw-container tw-relative tw-z-10">
        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-16 tw-items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="tw-relative"
          >
            <FloatingElements />

            <div className="tw-inline-block tw-mb-4">
              <div className="tw-relative">
                <div className="tw-absolute tw-inset-0 tw-bg-purple-100 tw-rounded-lg tw-transform tw-rotate-3"></div>
                <div className="tw-relative tw-bg-purple-50 tw-rounded-lg tw-px-4 tw-py-1 tw-transform -tw-rotate-3">
                  <span className="tw-text-purple-600 tw-font-semibold">Get Started</span>
                </div>
              </div>
            </div>

            <h2 className="tw-text-4xl tw-font-bold tw-text-slate-900 tw-mb-6">
              Request a <GradientText>Free Consultation</GradientText> Today
            </h2>
            <p className="tw-text-xl tw-text-slate-600 tw-mb-8">
              Let's discuss how we can optimize your radiology billing process and maximize your revenue. Fill out the
              form and our team will get back to you within 24 hours.
            </p>

            <div className="tw-space-y-4 tw-mb-8">
              <div className="tw-flex tw-items-start tw-gap-3">
                <div className="tw-p-1 tw-bg-gradient-to-r tw-from-blue-600 tw-to-purple-600 tw-rounded-full tw-flex-shrink-0 tw-mt-0.5">
                  <CheckCircle className="tw-h-5 tw-w-5 tw-text-white" />
                </div>
                <p className="tw-text-slate-700">No obligation consultation</p>
              </div>
              <div className="tw-flex tw-items-start tw-gap-3">
                <div className="tw-p-1 tw-bg-gradient-to-r tw-from-blue-600 tw-to-purple-600 tw-rounded-full tw-flex-shrink-0 tw-mt-0.5">
                  <CheckCircle className="tw-h-5 tw-w-5 tw-text-white" />
                </div>
                <p className="tw-text-slate-700">Customized solutions for your practice</p>
              </div>
              <div className="tw-flex tw-items-start tw-gap-3">
                <div className="tw-p-1 tw-bg-gradient-to-r tw-from-blue-600 tw-to-purple-600 tw-rounded-full tw-flex-shrink-0 tw-mt-0.5">
                  <CheckCircle className="tw-h-5 tw-w-5 tw-text-white" />
                </div>
                <p className="tw-text-slate-700">Transparent pricing with no hidden fees</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GlassCard className="tw-p-6 tw-backdrop-blur-xl tw-border tw-border-white/20 tw-shadow-2xl">
              <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-1 tw-bg-gradient-to-r tw-from-blue-600 tw-via-purple-600 tw-to-pink-500 tw-rounded-t-2xl"></div>
              <h3 className="tw-text-xl tw-font-bold tw-mb-6">Contact Us</h3>
              <form className="tw-space-y-6">
                <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 tw-gap-6">
                  <div className="tw-space-y-2">
                    <label htmlFor="first-name" className="tw-text-sm tw-font-medium">
                      First Name
                    </label>
                    <Input
                      id="first-name"
                      placeholder="John"
                      className="tw-rounded-lg tw-bg-white/50 tw-backdrop-blur-md tw-border-white/20 focus:tw-border-white/40"
                    />
                  </div>
                  <div className="tw-space-y-2">
                    <label htmlFor="last-name" className="tw-text-sm tw-font-medium">
                      Last Name
                    </label>
                    <Input
                      id="last-name"
                      placeholder="Doe"
                      className="tw-rounded-lg tw-bg-white/50 tw-backdrop-blur-md tw-border-white/20 focus:tw-border-white/40"
                    />
                  </div>
                </div>
                <div className="tw-space-y-2">
                  <label htmlFor="email" className="tw-text-sm tw-font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    placeholder="john.doe@example.com"
                    className="tw-rounded-lg tw-bg-white/50 tw-backdrop-blur-md tw-border-white/20 focus:tw-border-white/40"
                  />
                </div>
                <div className="tw-space-y-2">
                  <label htmlFor="practice-name" className="tw-text-sm tw-font-medium">
                    Practice Name
                  </label>
                  <Input
                    id="practice-name"
                    placeholder="Radiology Associates"
                    className="tw-rounded-lg tw-bg-white/50 tw-backdrop-blur-md tw-border-white/20 focus:tw-border-white/40"
                  />
                </div>
                <div className="tw-space-y-2">
                  <label htmlFor="phone" className="tw-text-sm tw-font-medium">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    placeholder="(555) 123-4567"
                    className="tw-rounded-lg tw-bg-white/50 tw-backdrop-blur-md tw-border-white/20 focus:tw-border-white/40"
                  />
                </div>
                <div className="tw-space-y-2">
                  <label htmlFor="message" className="tw-text-sm tw-font-medium">
                    Message
                  </label>
                  <Input
                    placeholder="Tell us about your billing challenges..."
                    className="tw-min-h-[120px] tw-rounded-lg tw-bg-white/50 tw-backdrop-blur-md tw-border-white/20 focus:tw-border-white/40"
                  />
                </div>
                <MagneticButton fullWidth>
                  <button type="submit" onMouseEnter={enterButton} onMouseLeave={leaveLink} className="tw-w-full">
                    Submit Request
                  </button>
                </MagneticButton>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
