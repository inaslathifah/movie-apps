import React, { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import Card from "../card"

interface Movie {
  id: number
  title: string
  poster_path: string
}

const NowPlaying: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=2e26bc7dab5ad19572ab4206345714fc"
      )
      .then((response) => {
        setMovies(response.data.results)
      })
      .catch((error) => {
        setError("Error fetching data")
        console.error("Error fetching data:", error)
      })
  }, [])

  return (
    <div>
      <div>
        {error && <p>{error}</p>}
        <div className="my-8 grid grid-cols-5 gap-4">
          {movies.map((movie) => (
            <Link key={movie.id} to={`/now/${movie.id}`}>
              <Card
                key={movie.id}
                url={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                title={movie.title}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NowPlaying
