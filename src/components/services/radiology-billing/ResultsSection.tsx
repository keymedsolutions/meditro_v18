import { useInView, motion } from "framer-motion"
import { Clock, BarChart4, CheckCircle } from "lucide-react"
import { useRef } from "react"
import { GradientText } from "./gradient-text"
import { ParticleBackground } from "./particle-background"
import { MetricCard } from "./metric-card"

function ResultsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="results" ref={ref} className="tw-py-24 tw-relative tw-overflow-hidden">
      <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-b tw-from-white tw-to-slate-50"></div>
      <div className="tw-absolute tw-inset-0 tw-opacity-30">
        <ParticleBackground />
      </div>

      <div className="tw-container tw-relative tw-z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="tw-text-center tw-mb-16"
        >
          <div className="tw-inline-block tw-mb-4">
            <div className="tw-relative">
              <div className="tw-absolute tw-inset-0 tw-bg-blue-100 tw-rounded-lg tw-transform tw-rotate-3"></div>
              <div className="tw-relative tw-bg-blue-50 tw-rounded-lg tw-px-4 tw-py-1 tw-transform -tw-rotate-3">
                <span className="tw-text-blue-600 tw-font-semibold">Proven Results That Speak for Themselves</span>
              </div>
            </div>
          </div>

          <h2 className="tw-text-4xl md:tw-text-4xl tw-font-bold tw-text-slate-900 tw-mb-6">
            The Results Will <GradientText>Amaze You!</GradientText>
          </h2>
     
        </motion.div>


        
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-8">
            <MetricCard
                        icon={<CheckCircle className="tw-h-10 tw-w-10 tw-text-blue-500" />}
                        percentage="88%"
                        title="First Pass Clean Claims Rate"
                        description="Minimize rejections and get paid faster"
                      />
                      <MetricCard
                        icon={<BarChart4 className="tw-h-10 tw-w-10 tw-text-green-500" />}
                        percentage="15-20%"
                        title="Revenue Increase"
                        description="Improved collections through optimized billing strategies"
                      />
                      <MetricCard
                        icon={<Clock className="tw-h-10 tw-w-10 tw-text-purple-500" />}
                        percentage="30%"
                        title="Reduction in A/R Days"
                        description="Faster claim processing and timely follow-ups"
                      />
          </div>

      
      </div>
    </section>
  )
}

export default ResultsSection
