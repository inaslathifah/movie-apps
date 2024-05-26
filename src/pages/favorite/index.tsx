import Button from "@/components/button"
import { favoriteMovies } from "@/core/constant/movies"
import { ComponentProps, withRouter } from "@/core/utils/withRouter"
import { Component } from "react"

class Favorite extends Component<ComponentProps> {
  render() {
    const { router } = this.props

    const { location } = router

    const { pathname } = location

    const pathSegments = pathname.split("/")

    const id = pathSegments[pathSegments.length - 1]

    const selectedMovie = favoriteMovies.find(
      (movie) => movie.id === Number(id)
    )

    if (!selectedMovie) {
      return <div>Movie not found</div>
    }

    console.log(selectedMovie)

    return (
      <div className="flex gap-6 px-20 p-6 mt-44 justify-center items-center w-full">
        <div>
          <img
            className="h-[323px] w-[1000px] rounded-2xl"
            src={selectedMovie.poster_path}
          />
        </div>
        <div>
          <div className="justify-center items-center font-bold text-2xl py-4">
            {selectedMovie.title}
          </div>
          <div>Release date: {selectedMovie.release_date}</div>
          <div>Language: {selectedMovie.original_language}</div>
          <div className="flex gap-1">
            Rating:
            <div>{selectedMovie.vote_average}</div>
            <div className="py-px">{selectedMovie.backdrop_path}</div>
          </div>
          <div>Overview: {selectedMovie.overview}</div>
          <div className="py-4">
            <Button variant="contained" title="WATCH NOW" />
          </div>
        </div>
      </div>
    )
  }
}

const FavoriteWithRouter = withRouter(Favorite)

export default FavoriteWithRouter
