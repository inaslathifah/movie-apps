import React from "react"

type Props = {
  variant?: string
  icon?: React.ReactNode
  title?: string
}

const Button: React.FC<Props> = ({ variant, icon, title }) => {
  return (
    <button
      className={`flex items-center justify-center py-[12px] px-[24px] rounded-lg ${
        variant === "contained"
          ? "bg-greenColor border border-greenColor"
          : "bg-blackColor border border-whiteColor"
      }`}
    >
      <div className="flex gap-2 items-center">
        {icon}
        <div className="text-[14px] font-bold">{title}</div>
      </div>
    </button>
  )
}

export default Button
