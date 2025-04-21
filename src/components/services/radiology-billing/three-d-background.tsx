"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function ThreeDBackground() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, 300])

  return (
    <div ref={containerRef} className="tw-absolute tw-inset-0 tw-overflow-hidden">
      {/* Background gradient */}
      <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-b tw-from-white tw-via-slate-50 tw-to-white"></div>

      {/* Grid pattern */}
      <div className="tw-absolute tw-inset-0 tw-bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTIxMjEiIGZpbGwtb3BhY2l0eT0iMC4wMSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptLTIgMmgtMXYxaDF2LTF6bS0yLTJoMXYxaC0xdi0xem0yLTJoMXYxaC0xdi0xem0tMiAydi0xaC0xdjFoMXptLTIgMmgtMXYxaDF2LTF6bS0yLTJoMXYxaC0xdi0xem0yLTJoMXYxaC0xdi0xem0tMiAydi0xaC0xdjFoMXptLTIgMmgtMXYxaDF2LTF6bS0yLTJoMXYxaC0xdi0xem0yLTJoMXYxaC0xdi0xem0yLTJoMXYxaC0xdi0xem0tNCAwaDFWOWgtMXYxem0wIDJoMXYxaC0xdi0xem0wIDJoMXYxaC0xdi0xem0wIDJoMXYxaC0xdi0xem0wIDJoMXYxaC0xdi0xem0wIDJoMXYxaC0xdi0xem0wIDJoMXYxaC0xdi0xem0wIDJoMXYxaC0xdi0xem0wIDJoMXYxaC0xdi0xem0wIDJoMXYxaC0xdi0xeiIvPjwvZz48L2c+PC9zdmc+')] tw-opacity-30"></div>

      {/* 3D Shapes */}
      <motion.div style={{ y }} className="tw-absolute tw-inset-0 tw-flex tw-items-center tw-justify-center">
        <div className="tw-relative tw-w-full tw-h-full tw-max-w-6xl tw-mx-auto">
          {/* Large cube */}
          <div className="tw-absolute tw-top-1/4 tw-left-1/4 tw-w-32 tw-h-32 md:tw-w-64 md:tw-h-64 tw-opacity-20">
            <div className="tw-relative tw-w-full tw-h-full transform-style-3d tw-transform tw-rotate-x-[15deg] tw-rotate-y-[45deg]">
              <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-blue-500/20 tw-to-blue-600/20 tw-transform tw-translate-z-[4rem] md:tw-translate-z-[8rem]"></div>
              <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-blue-400/20 tw-to-blue-500/20 tw-transform -tw-translate-z-[4rem] md:-tw-translate-z-[8rem]"></div>
              <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-gradient-to-br tw-from-blue-300/20 tw-to-blue-400/20 tw-transform tw-rotate-x-90 tw-translate-z-[4rem] md:tw-translate-z-[8rem]"></div>
              <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-gradient-to-br tw-from-blue-300/20 tw-to-blue-400/20 tw-transform -tw-rotate-x-90 tw-translate-z-[4rem] md:tw-translate-z-[8rem]"></div>
              <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-gradient-to-br tw-from-blue-400/20 tw-to-blue-500/20 tw-transform tw-rotate-y-90 tw-translate-z-[4rem] md:tw-translate-z-[8rem]"></div>
              <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-gradient-to-br tw-from-blue-400/20 tw-to-blue-500/20 tw-transform -tw-rotate-y-90 tw-translate-z-[4rem] md:tw-translate-z-[8rem]"></div>
            </div>
          </div>

          {/* Medium pyramid */}
          <div className="tw-absolute tw-rounded-lg tw-top-1/3 tw-right-1/4 tw-w-24 tw-h-24 md:tw-w-48 md:tw-h-48 tw-opacity-20">
            <div className="tw-relative tw-w-full tw-h-full transform-style-3d tw-transform tw-rotate-x-[15deg] tw-rotate-y-[45deg]">
              <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-gradient-to-br tw-from-purple-400/20 tw-to-purple-500/20 tw-transform-origin-bottom tw-rotate-x-[30deg]"></div>
              <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-gradient-to-br tw-from-purple-500/20 tw-to-purple-600/20 tw-transform-origin-bottom tw-rotate-x-[150deg]"></div>
              <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-gradient-to-br tw-from-purple-300/20 tw-to-purple-400/20 tw-transform-origin-bottom tw-rotate-y-[30deg] tw-rotate-x-[30deg]"></div>
              <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-gradient-to-br tw-from-purple-300/20 tw-to-purple-400/20 tw-transform-origin-bottom tw-rotate-y-[150deg] tw-rotate-x-[30deg]"></div>
            </div>
          </div>

          {/* Small sphere */}
          <div className="tw-absolute tw-bottom-1/3 tw-right-1/3 tw-w-16 tw-h-16 md:tw-w-32 md:tw-h-32 tw-rounded-full tw-bg-gradient-to-br tw-from-pink-400/20 tw-to-pink-600/20 tw-opacity-20"></div>

          {/* Tiny cubes */}
          <div className="tw-absolute tw-top-2/3 tw-left-1/3 tw-w-8 tw-h-8 md:tw-w-16 md:tw-h-16 tw-opacity-20">
            <div className="tw-relative tw-w-full tw-h-full transform-style-3d tw-transform tw-rotate-x-[15deg] tw-rotate-y-[45deg]">
              <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-blue-500/20 tw-to-purple-600/20 tw-transform tw-translate-z-[1rem] md:tw-translate-z-[2rem]"></div>
              <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-blue-400/20 tw-to-purple-500/20 tw-transform -tw-translate-z-[1rem] md:-tw-translate-z-[2rem]"></div>
              <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-gradient-to-br tw-from-blue-300/20 tw-to-purple-400/20 tw-transform tw-rotate-x-90 tw-translate-z-[1rem] md:tw-translate-z-[2rem]"></div>
              <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-gradient-to-br tw-from-blue-300/20 tw-to-purple-400/20 tw-transform -tw-rotate-x-90 tw-translate-z-[1rem] md:tw-translate-z-[2rem]"></div>
              <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-gradient-to-br tw-from-blue-400/20 tw-to-purple-500/20 tw-transform tw-rotate-y-90 tw-translate-z-[1rem] md:tw-translate-z-[2rem]"></div>
              <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-gradient-to-br tw-from-blue-400/20 tw-to-purple-500/20 tw-transform -tw-rotate-y-90 tw-translate-z-[1rem] md:tw-translate-z-[2rem]"></div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
