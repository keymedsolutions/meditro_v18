"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/ui/button"
import { Input } from "@/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/ui/select"
import { motion } from "framer-motion"
import { Send, CheckCircle } from "lucide-react"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true)
    }, 1000)
  }

  if (submitted) {
    return (
      <motion.div
        className="p-10 bg-white rounded-xl shadow-md text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-center mb-6">
          <div className="rounded-full bg-green-100 p-3">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
        </div>
        <h4 className="text-xl font-semibold text-gray-900 mb-2">Thank You!</h4>
        <p className="text-gray-600 mb-6">
          Your message has been received. Our team will get back to you within 24 hours.
        </p>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white" onClick={() => setSubmitted(false)}>
          Send Another Message
        </Button>
      </motion.div>
    )
  }

  return (
    <motion.form
      className="grid grid-cols-1 gap-6 p-8 bg-white rounded-xl shadow-md"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name*
          </label>
          <Input id="name" placeholder="John Smith" required />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address*
          </label>
          <Input id="email" type="email" placeholder="john@example.com" required />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <Input id="phone" placeholder="(123) 456-7890" />
        </div>
        <div>
          <label htmlFor="practice" className="block text-sm font-medium text-gray-700 mb-1">
            Practice Type
          </label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select practice type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="radiology">Radiology Practice</SelectItem>
              <SelectItem value="hospital">Hospital</SelectItem>
              <SelectItem value="imaging-center">Imaging Center</SelectItem>
              <SelectItem value="multi-specialty">Multi-Specialty Group</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message*
        </label>
        <Input id="message" placeholder="How can we help you?" type="textarea" required />
      </div>

      <Button className="bg-blue-600 hover:bg-blue-700 text-white justify-center" type="submit">
        <Send className="h-4 w-4 mr-2" /> Send Message
      </Button>
    </motion.form>
  )
}

