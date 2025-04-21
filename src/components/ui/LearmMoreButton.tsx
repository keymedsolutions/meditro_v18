import React from 'react'

type Props = {
    title: string
    showUnderline?: boolean
    icon?: React.ReactNode
    onClick?: () => void
}
const LearmMoreButton = (props: Props) => {
    const { title, showUnderline, icon, onClick } = props
    return (
        <>
            <button
                className="tw-group tw-flex tw-items-center tw-text-slate-700 tw-font-medium tw-border-none tw-bg-transparent"
                onClick={onClick}
            >
                <span className="tw-mr-2 tw-h-10 tw-w-10 tw-rounded-full tw-bg-slate-100 tw-flex tw-items-center tw-justify-center group-hover:tw-bg-slate-200 tw-transition-colors">
                    {icon}
                </span>
                <span className="tw-relative">
                    {title}
                    {showUnderline && <span className="tw-absolute -tw-bottom-1 tw-left-0 tw-w-0 tw-h-0.5 tw-bg-gradient-to-r tw-from-blue-600 tw-to-purple-600 tw-transition-all tw-duration-300 group-hover:tw-w-full"></span>}
                </span>
            </button>
        </>
    )
}

export default LearmMoreButton
