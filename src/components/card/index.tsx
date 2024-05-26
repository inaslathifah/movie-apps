import React from "react"

type Props = {
  url?: string
  title?: string
  icon?: React.ReactNode
  rating?: number
}

const Card: React.FC<Props> = ({ url, title, icon, rating }) => {
  return (
    <div className="hover:scale-105 transition duration-300 ease-in-out w-[175px] cursor-pointer">
      <div className="">
        <img className="rounded-2xl" src={url} alt={title} />
      </div>
      <div className="mt-2">
        <div>{title}</div>
      </div>
      <div className="flex items-center gap-2">
        {icon}
        {rating}
      </div>
    </div>
  )
}

export default Card
