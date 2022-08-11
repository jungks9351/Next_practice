import axios from 'axios'

const Home = ({ data }) => {
  const movieList = data.results
  return (
    <>
      <h1 className="text-3xl underline text-red-600">Hello Next.js</h1>
      <ul>
        {movieList.map((movieData) => (
          <li key={movieData.id}>{movieData.title}</li>
        ))}
      </ul>
    </>
  )
}
Home.getInitialProps = async () => {
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
    data,
  }
}

export default Home
