import React from "react"
import { useParams } from "react-router-dom"
import MovieDetailsComponent from "@/components/moviedetails"

interface NowProps {}

const Now: React.FC<NowProps> = () => {
  const { id } = useParams<{ id: string }>()

  if (!id) {
    return <div>Movie ID not found</div>
  }

  return (
    <div className="flex gap-6 px-20 p-6 mt-24 justify-center items-center w-full">
      <MovieDetailsComponent movieId={id} />
    </div>
  )
}

export default Now
