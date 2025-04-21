/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, ChevronRight, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// Import the menu items
import { MenuItems } from "@/lib/menu-items"

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Check if we're on mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  // Close mobile menu when switching to desktop
  useEffect(() => {
    if (!isMobile) {
      setIsOpen(false)
    }
  }, [isMobile])

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <header className="tw-sticky tw-top-0 tw-z-50 tw-w-full tw-bg-white tw-shadow-sm">
      <div className="tw-container tw-mx-auto tw-px-4 tw-py-4">
        <div className="tw-flex tw-items-center tw-justify-between">
          {/* Logo */}
          <Link href="/" className="tw-flex tw-items-center">
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="tw-text-xl tw-font-bold tw-text-teal-600"
            >
              KeyMed Solutions
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="tw-hidden lg:tw-flex lg:tw-items-center lg:tw-space-x-1">
            <DesktopNavigation items={MenuItems} />

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Link
                href="https://calendly.com/key_medsolutions_inc/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="tw-ml-4 tw-rounded-md tw-bg-teal-600 tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-text-white hover:tw-bg-teal-700 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-teal-500 focus:tw-ring-offset-2"
              >
                Book an Appointment
              </Link>
            </motion.div>

            {/* Contact Us Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <Link
                href="/contact"
                className="tw-ml-4 tw-flex tw-items-center tw-rounded-md tw-border tw-border-teal-600 tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-text-teal-600 hover:tw-bg-teal-50 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-teal-500 focus:tw-ring-offset-2"
              >
                <Phone className="tw-mr-2 tw-h-4 tw-w-4" />
                Contact Us
              </Link>
            </motion.div>
          </nav>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            type="button"
            className="tw-inline-flex tw-items-center tw-justify-center tw-rounded-md tw-p-2 tw-text-gray-700 hover:tw-bg-gray-100 hover:tw-text-gray-900 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-teal-500 lg:tw-hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="tw-sr-only">Open main menu</span>
            {isOpen ? (
              <X className="tw-block tw-h-6 tw-w-6" aria-hidden="true" />
            ) : (
              <Menu className="tw-block tw-h-6 tw-w-6" aria-hidden="true" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="tw-fixed tw-inset-0 tw-top-[73px] tw-z-40 tw-flex tw-h-[calc(100vh-73px)] tw-w-full tw-flex-col tw-overflow-hidden tw-bg-white lg:tw-hidden"
          >
            <div className="tw-flex-1 tw-overflow-y-auto tw-px-4 tw-py-6">
              <MobileNavigation items={MenuItems} />

              {/* Mobile Contact Button */}
              <div className="tw-mt-6 tw-w-full">
                <Link
                  href="/contact"
                  className="tw-flex tw-w-full tw-items-center tw-justify-center tw-rounded-md tw-border tw-border-teal-600 tw-px-4 tw-py-3 tw-text-base tw-font-medium tw-text-teal-600 hover:tw-bg-teal-50 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-teal-500 focus:tw-ring-offset-2"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone className="tw-mr-2 tw-h-5 tw-w-5" />
                  Contact Us
                </Link>
              </div>

              {/* Book Appointment Button */}
              <div className="mt-4 w-full">
                <Link
                  href="https://calendly.com/key_medsolutions_inc/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center rounded-md bg-teal-600 px-4 py-3 text-base font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                  onClick={() => setIsOpen(false)}
                >
                  Book an Appointment
                </Link>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="border-t border-gray-200 bg-gray-50 px-4 py-4">
              <div className="flex items-center justify-center space-x-6">
                <motion.a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-600 hover:text-teal-600"
                >
                  <Facebook className="h-6 w-6" />
                  <span className="sr-only">Facebook</span>
                </motion.a>
                <motion.a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-600 hover:text-teal-600"
                >
                  <Twitter className="h-6 w-6" />
                  <span className="sr-only">Twitter</span>
                </motion.a>
                <motion.a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-600 hover:text-teal-600"
                >
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-600 hover:text-teal-600"
                >
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

// Desktop Navigation Component
function DesktopNavigation({ items }: { items: any[] }) {
  return (
    <>
      {items.map((item, index) => {
        // Skip the "Book an Appointment" item as it's handled separately
        if (item.label === "Book an Appointment") return null

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <DesktopMenuItem item={item} />
          </motion.div>
        )
      })}
    </>
  )
}

// Desktop Menu Item Component
function DesktopMenuItem({ item }: { item: any }) {
  const [isOpen, setIsOpen] = useState(false)

  // Handle external links
  if (item.external) {
    return (
      <a
        href={item.path}
        target="_blank"
        rel="noopener noreferrer"
        className="tw-block tw-rounded-md tw-px-3 tw-py-2 tw-text-sm tw-font-medium tw-text-gray-700 hover:tw-bg-gray-50 hover:tw-text-teal-600"
      >
        {item.label}
      </a>
    )
  }

  // Handle items with submenus
  if (item.subMenu) {
    return (
      <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
        <button
          className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-teal-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {item.label}
          <ChevronDown className="ml-1 h-4 w-4" />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 z-10 mt-1 w-64 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div className="py-1">
                {item.subMenu.map((subItem: any, subIndex: number) => (
                  <DesktopSubmenuItem key={subIndex} item={subItem} depth={1} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }

  // Handle regular menu items
  return (
    <Link
      href={item.path}
      className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-teal-600"
    >
      {item.label}
    </Link>
  )
}

// Desktop Submenu Item Component
function DesktopSubmenuItem({ item, depth }: { item: any; depth: number }) {
  const [isOpen, setIsOpen] = useState(false)

  // Handle items with nested submenus
  if (item.subMenu) {
    return (
      <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
        <button
          className="flex w-full items-center justify-between px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {item.label}
          <ChevronRight className="ml-1 h-4 w-4" />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-full top-0 z-10 -ml-1 mt-0 w-64 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div className="py-1">
                {item.subMenu.map((subItem: any, subIndex: number) => (
                  <DesktopSubmenuItem key={subIndex} item={subItem} depth={depth + 1} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }

  // Handle regular submenu items
  return (
    <Link href={item.path} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-600">
      {item.label}
    </Link>
  )
}

// Mobile Navigation Component
function MobileNavigation({ items }: { items: any[] }) {
  return (
    <div className="space-y-1">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
        >
          <MobileMenuItem item={item} />
        </motion.div>
      ))}
    </div>
  )
}

// Mobile Menu Item Component
function MobileMenuItem({ item }: { item: any }) {
  const [isOpen, setIsOpen] = useState(false)

  // Handle external links
  if (item.external) {
    return (
      <a
        href={item.path}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-teal-600"
      >
        {item.label}
      </a>
    )
  }

  // Handle items with submenus
  if (item.subMenu) {
    return (
      <div>
        <motion.button
          whileTap={{ scale: 0.98 }}
          className="flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-teal-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {item.label}
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
            <ChevronDown className="ml-1 h-5 w-5" />
          </motion.div>
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="tw-ml-4 tw-mt-1 tw-overflow-hidden tw-border-l tw-border-gray-200 tw-pl-4"
            >
              {item.subMenu.map((subItem: any, subIndex: number) => (
                <MobileSubmenuItem key={subIndex} item={subItem} depth={1} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }

  // Handle regular menu items
  return (
    <Link
      href={item.path}
      className="tw-block tw-rounded-md tw-px-3 tw-py-2 tw-text-base tw-font-medium tw-text-gray-700 hover:tw-bg-gray-50 hover:tw-text-teal-600"
    >
      {item.label}
    </Link>
  )
}

// Mobile Submenu Item Component
function MobileSubmenuItem({ item, depth }: { item: any; depth: number }) {
  const [isOpen, setIsOpen] = useState(false)

  // Handle items with nested submenus
  if (item.subMenu) {
    return (
      <div>
        <motion.button
          whileTap={{ scale: 0.98 }}
          className="tw-flex w-full tw-items-center tw-justify-between tw-rounded-md tw-px-3 tw-py-2 tw-text-base tw-font-medium tw-text-gray-700 hover:tw-bg-gray-50 hover:tw-text-teal-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {item.label}
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
            <ChevronDown className="tw-ml-1 tw-h-5 tw-w-5" />
          </motion.div>
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="tw-ml-4 tw-mt-1 tw-overflow-hidden tw-border-l tw-border-gray-200 tw-pl-4"
            >
              {item.subMenu.map((subItem: any, subIndex: number) => (
                <MobileSubmenuItem key={subIndex} item={subItem} depth={depth + 1} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }

  // Handle regular submenu items
  return (
    <Link
      href={item.path}
      className="tw-block tw-rounded-md tw-px-3 tw-py-2 tw-text-base tw-font-medium tw-text-gray-700 hover:tw-bg-gray-50 hover:tw-text-teal-600"
    >
      {item.label}
    </Link>
  )
}
