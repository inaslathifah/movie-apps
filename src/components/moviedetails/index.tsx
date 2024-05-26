import React, { useEffect, useState } from "react"
import axios from "axios"
import Button from "../button"
import PlayIcon from "@/core/icons/play"

interface MovieDetails {
  id: number
  title: string
  overview: string
  poster_path: string
  release_date: number
  original_language: string
  popularity: number
}

interface MovieDetailsProps {
  movieId: string
}

const MovieDetailsComponent: React.FC<MovieDetailsProps> = ({ movieId }) => {
  const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null)

  useEffect(() => {
    const apiKey = "2e26bc7dab5ad19572ab4206345714fc"
    const baseUrl = "https://api.themoviedb.org/3/movie"

    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`${baseUrl}/${movieId}`, {
          params: {
            api_key: apiKey,
          },
        })

        setMovieDetails(response.data)
      } catch (error) {
        console.error("Error fetching movie details:", error)
      }
    }

    fetchMovieDetails()
  }, [movieId])

  if (!movieDetails) {
    return <div>Loading...</div>
  }

  return (
    <div className="flex flex-wrap">
      <div className="flex items-center ">
        <div className="w-1/2 px-5">
          <img
            className="w-56 h-80"
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
          />
        </div>
        <div>
          <div className="font-bold text-3xl">{movieDetails.title}</div>
          <div className="gap-4 text-lg">
            <p>Release Date : {movieDetails.release_date}</p>
            <p>Language : {movieDetails.original_language}</p>
            <p> Popularity : {movieDetails.popularity}</p>
            <p>Overview : {movieDetails.overview}</p>
          </div>
          <div className="flex gap-20 py-6 space-x-2.5">
            <Button
              variant="contained"
              title="WATCH MOVIE"
              icon={<PlayIcon />}
            />
            <Button title="Add Favorite" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetailsComponent
