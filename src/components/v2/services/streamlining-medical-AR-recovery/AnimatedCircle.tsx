import { motion } from "framer-motion"

export function AnimatedCircle() {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0.7, x: 0, y: 0 }}
      animate={{
        scale: [0.8, 1.2, 0.9, 1.1, 0.8], // pulse effect
        x: ["0%", "-100%"], // start right → move left
        y: [0, -300], // drift upward slowly
      }}
      transition={{
        x: {
          duration: 12, // controls left ↔ right speed
          repeat: Infinity,
          repeatType: "reverse", // bounce back (right-left-right)
          ease: "easeInOut",
        },
        y: {
          duration: 30, // controls upward drift speed
          repeat: Infinity,
          repeatType: "reverse", // drift up and down
          ease: "easeInOut",
        },
        scale: {
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      }}
      className="tw-absolute tw-bottom-10 tw-right-0 tw-w-72 tw-h-72 tw-rounded-full tw-bg-gradient-to-r tw-from-blue-500/50 tw-to-purple-600/50 tw-shadow-2xl tw-blur-2xl"
    />
  )
}
