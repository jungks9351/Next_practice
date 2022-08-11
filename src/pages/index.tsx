import axios from 'axios'
import MovieContainer from 'components/movie/MovieContainer'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

const Home = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const movieList = data.results
  return (
    <>
      <h1 className="text-3xl underline text-red-600">Hello Next.js</h1>
      <MovieContainer movieList={movieList} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await axios
    .get('https://api.themoviedb.org/3/movie/popular', {
      headers: {
        'Content-Type': 'application/json',
      },
      params: {
        api_key: 'b1f42a273f605f2b79d537a4c1929770',
        language: 'ko-kr',
        regions: 'kr',
      },
    })
    .then((res) => res.data)

  return {
    props: { data: data },
  }
}

export default Home
