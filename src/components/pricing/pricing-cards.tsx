"use client"

import { useState } from "react"
import { Check, Star } from "lucide-react"
import { Button } from "@/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/ui/card"
import { cn } from "@/lib/utils"

interface PricingTier {
  name: string
  price: string
  description: string
  features: string[]
  popular?: boolean
  ribbonLabel?: string
}

export default function PricingCards() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const pricingTiers: PricingTier[] = [
    {
      name: "Basic",
      price: "$1000.00",
      description: "Perfect for beginners looking to start their career",
      features: [
        "Resume mapping full proof for AST",
        "Interview preparation",
        "Job hunt assistance",
      ],
      ribbonLabel: "STARTER",
    },
    {
      name: "Pro",
      price: "$3000.00",
      description: "Comprehensive training for serious professionals",
      features: [
        "Training for 2 months (16 hours)",
        "Software training & web portal access",
        "Basic training for HIPAA & RCM",
        "Everything in Basic plan",
      ],
      popular: true,
      ribbonLabel: "POPULAR",
    },
    {
      name: "Premium",
      price: "$4000.00",
      description: "Complete immersion with real-world experience",
      features: [
        "Live claims experience",
        "Live client relationships for 2 months (24 hours)",
        "Current situations and denials from different insurances",
        "Everything in Pro plan",
      ],
      ribbonLabel: "BEST VALUE",
    },
  ]

  return (
    <div className="tw-grid tw-gap-10 md:tw-grid-cols-3">
      {pricingTiers.map((tier, index) => (
        <Card
          key={tier.name}
          className={cn(
            "tw-relative tw-overflow-hidden tw-transition-all tw-duration-300 tw-ease-in-out tw-h-min-[500px] tw-h-max-[500px]",
            hoveredCard === index
              ? "tw-scale-[1.03] tw-shadow-xl"
              : "tw-shadow-md",
            tier.popular
              ? "tw-border-purple-500"
              : "tw-border-slate-200"
          )}
          onMouseEnter={() => setHoveredCard(index)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          {/* Ribbon Label */}
          {tier.ribbonLabel && (
            <div className="tw-absolute -tw-left-12 tw-top-4 tw-z-20 tw-rotate-[-45deg] tw-bg-gradient-to-r tw-from-purple-600 tw-to-pink-600 tw-px-16 tw-py-1 tw-text-center tw-text-[11px] tw-font-bold tw-uppercase tw-text-white tw-shadow-lg">
              {tier.ribbonLabel}
            </div>
          )}

          {/* Star Badge */}
          {tier.popular && (
            <div className="tw-absolute tw-right-0 tw-top-0 tw-z-10">
              <div className="tw-flex tw-h-8 tw-w-8 tw-items-center tw-justify-center tw-rounded-bl-lg tw-bg-gradient-to-r tw-from-purple-600 tw-to-pink-600">
                <Star className="tw-h-4 tw-w-4 tw-text-white" fill="white" />
              </div>
            </div>
          )}

          {/* Background on hover */}
          <div
            className={cn(
              "tw-absolute tw-inset-0 -tw-z-10 tw-opacity-0 tw-transition-opacity tw-duration-300",
            //   hoveredCard === index ? "tw-opacity-100" : "",
            //   tier.popular
            //     ? "tw-bg-purple-50 dark:tw-bg-purple-950/20"
            //     : "tw-bg-slate-50 dark:tw-bg-slate-900/50"
            )}
          />

          {/* Card Content */}
          <CardHeader>
            <CardTitle className="tw-text-2xl">{tier.name}</CardTitle>
            <CardDescription>{tier.description}</CardDescription>
          </CardHeader>
          <CardContent className="tw-grid tw-gap-4">
            <div className="tw-text-4xl tw-font-bold">{tier.price}</div>
            <ul className="tw-grid tw-gap-2">
              {tier.features.map((feature) => (
                <li key={feature} className="tw-flex tw-items-center tw-gap-2">
                  <Check
                    className={cn(
                      "tw-h-4 tw-w-4",
                      tier.popular ? "tw-text-purple-600" : "tw-text-green-600"
                    )}
                  />
                  <span className="tw-text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button
              className={cn(
                "tw-relative tw-w-full tw-overflow-hidden tw-transition-all tw-duration-300",
                tier.popular
                  ? "tw-bg-gradient-to-r tw-from-purple-600 tw-to-pink-600 hover:tw-from-purple-700 hover:tw-to-pink-700"
                  : "tw-bg-slate-700 hover:tw-bg-slate-800"
              )}
            >
              <span className="tw-relative tw-z-10">Get Started</span>
              {hoveredCard === index && (
                <span className="tw-absolute tw-inset-0 -tw-z-0 tw-animate-puls" />
              )}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
