"use client"

import { Button } from "@/ui/button"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function HeaderMedicalClaimBilling() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.header
      className="tw-fixed tw-top-0 tw-left-0 tw-right-0 tw-z-50 tw-bg-background/80 tw-backdrop-blur-md tw-border-b tw-border-border"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="tw-container tw-mx-auto tw-px-4 tw-py-4">
        <div className="tw-flex tw-justify-between tw-items-center">
          <motion.div
            className="tw-flex tw-items-center tw-space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="tw-w-12 tw-h-12 tw-bg-gradient-to-br tw-from-primary tw-to-accent tw-rounded-xl tw-flex tw-items-center tw-justify-center">
              <span className="tw-text-white tw-font-black tw-text-xl tw-font-heading">K</span>
            </div>
            <span className="tw-text-2xl tw-font-black tw-font-heading tw-text-foreground">Key MedSolutions</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="tw-hidden lg:tw-flex tw-space-x-8">
            {["Services", "Benefits", "Process", "Contact"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="tw-text-muted-foreground hover:tw-text-primary tw-transition-colors tw-font-body tw-font-medium"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.div
            className="tw-hidden lg:tw-block"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Button className="tw-bg-primary hover:tw-bg-primary/90 tw-text-primary-foreground tw-font-semibold tw-transition-all tw-duration-300 hover:tw-scale-105">
              Get Free Quote
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button className="lg:tw-hidden tw-p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className="tw-w-6 tw-h-6 tw-text-foreground" />
            ) : (
              <Menu className="tw-w-6 tw-h-6 tw-text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            className="lg:tw-hidden tw-mt-4 tw-pb-4 tw-border-t tw-border-border tw-pt-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="tw-flex tw-flex-col tw-space-y-4">
              {["Services", "Benefits", "Process", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="tw-text-muted-foreground hover:tw-text-primary tw-transition-colors tw-font-body tw-font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <Button className="tw-bg-primary hover:tw-bg-primary/90 tw-text-primary-foreground tw-font-semibold tw-w-full">
                Get Free Quote
              </Button>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  )
}
