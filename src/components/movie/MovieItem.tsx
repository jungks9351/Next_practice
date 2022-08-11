import Image from 'next/image'
import React from 'react'
import { MovieItemType } from 'types/movieTypes'

const Loader = ({ src }: { src: string }) => {
  return `https://www.themoviedb.org/t/p/w440_and_h660_face${src}`
}

const MovieItem = ({ movieData }: { movieData: MovieItemType }) => {
  return (
    <div>
      <div>
        {/* <Image
          loader={Loader}
          src={movieData.poster_path}
          alt="poster_image"
          width={300}
          height={300}
        /> */}
        <Image
          src={`https://www.themoviedb.org/t/p/w440_and_h660_face${movieData.poster_path}`}
          alt="poster_image"
          width={300}
          height={300}
        />
      </div>
    </div>
  )
}

export default MovieItem
