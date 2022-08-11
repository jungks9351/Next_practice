import React from 'react'
import { MovieItemType } from 'types/movieTypes'
import MovieList from './MovieList'

const MovieContainer = ({ movieList }: { movieList: MovieItemType[] }) => {
  return (
    <div className="w-full p-5">
      <MovieList movieList={movieList} />
    </div>
  )
}

export default MovieContainer
