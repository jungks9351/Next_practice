import React from 'react'
import { MovieItemType } from 'types/movieTypes'
import MovieItem from './MovieItem'

const MovieList = ({ movieList }: { movieList: MovieItemType[] }) => {
  return (
    <ul className="flex flex-wrap mb-7">
      {movieList.map((movieData) => (
        <MovieItem key={movieData.id} movieData={movieData} />
      ))}
    </ul>
  )
}

export default MovieList
