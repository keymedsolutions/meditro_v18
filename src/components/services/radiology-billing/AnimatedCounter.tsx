/* eslint-disable @typescript-eslint/no-explicit-any */
import { useInView, motion } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import { NeuCard } from "./neu-card"

function AnimatedCounter({ value, label, icon: Icon, color, gradient }: any) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      const duration = 2000 // ms
      const frameDuration = 1000 / 60 // 60fps
      const totalFrames = Math.round(duration / frameDuration)
      let frame = 0

      const counter = setInterval(() => {
        frame++
        const progress = frame / totalFrames
        const currentCount = Math.round(value * progress)

        if (frame === totalFrames) {
          clearInterval(counter)
          setCount(value)
        } else {
          setCount(currentCount)
        }
      }, frameDuration)

      return () => clearInterval(counter)
    }
  }, [isInView, value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <NeuCard className="tw-p-6 tw-h-full">
        <div className="tw-flex tw-flex-col tw-items-center tw-text-center">
          <div className={`tw-mb-6 tw-p-4 ${gradient} tw-rounded-2xl tw-shadow-lg`}>
            <Icon className="tw-h-8 tw-w-8 tw-text-white" />
          </div>
          <div className="tw-text-5xl tw-font-bold tw-bg-gradient-to-r tw-from-blue-600 tw-via-purple-600 tw-to-pink-500 tw-bg-clip-text tw-text-transparent tw-mb-2">
            {count}
            {label.includes("%") ? "%" : ""}
          </div>
          <p className="tw-text-slate-600 tw-font-medium">{label}</p>
        </div>
      </NeuCard>
    </motion.div>
  )
}

export default AnimatedCounter
