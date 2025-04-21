/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ReactNode } from "react"
import { Card, CardContent } from "@/ui/card"

interface ServiceCardProps {
  title: string
  description: string
  icon: any
  color: string
}

export default function ServiceCard({ title, description, icon, color }: ServiceCardProps) {
  const getColorClasses = (colorName: string) => {
    const colorMap: Record<string, { bg: string; text: string; hover: string }> = {
      primary: { bg: "tw-bg-primary/10", text: "tw-text-primary", hover: "group-hover:tw-bg-primary/20" },
      secondary: { bg: "tw-bg-secondary/10", text: "tw-text-secondary", hover: "group-hover:tw-bg-secondary/20" },
      success: { bg: "tw-bg-success/10", text: "tw-text-success", hover: "group-hover:tw-bg-success/20" },
      info: { bg: "tw-bg-info/10", text: "tw-text-info", hover: "group-hover:tw-bg-info/20" },
      warning: { bg: "tw-bg-warning/10", text: "tw-text-warning", hover: "group-hover:tw-bg-warning/20" },
      danger: { bg: "tw-bg-danger/10", text: "tw-text-danger", hover: "group-hover:tw-bg-danger/20" },
    }

    return colorMap[colorName] || colorMap.primary
  }

  const colorClasses = getColorClasses(color)

  return (
    <Card className="tw-border-none tw-shadow-lg hover:tw-shadow-xl tw-transition-all tw-transform hover:-tw-translate-y-2 tw-overflow-hidden tw-group">
      <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-white tw-to-bluelight"></div>
      <div className={`tw-absolute tw-inset-0 tw-bg-${color}/0 group-hover:tw-bg-${color}/5 tw-transition-colors tw-duration-300`}></div>
      <div className="tw-absolute -tw-bottom-32 -tw-right-32 tw-w-64 tw-h-64 tw-bg-bluelight tw-rounded-full tw-opacity-0 group-hover:tw-opacity-20 tw-transition-opacity tw-duration-500"></div>
      <CardContent className="tw-p-6 tw-relative tw-z-10">
        <div className="tw-flex tw-flex-col tw-items-center tw-text-center">
          <div
            className={`tw-mt-3 tw-w-16 tw-h-16 tw-flex tw-items-center tw-justify-center tw-rounded-full ${colorClasses.bg} tw-mb-4 ${colorClasses.text} group-hover:tw-scale-110 tw-transition-transform tw-duration-300 ${colorClasses.hover}`}
          >
            {icon}
          </div>
          <h4 className={`tw-font-display tw-text-lg tw-font-semibold tw-mb-2 group-hover:${colorClasses.text} tw-transition-colors`}>
            {title}
          </h4>
          <p className="tw-text-gray group-hover:tw-text-body-color tw-transition-colors">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
