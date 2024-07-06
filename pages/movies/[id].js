
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import PageHeader from '@/app/headerComponent/PageHeader'


export default function MovieDetails() {
    const [movie, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const route = useRouter()
    const {id} = route.query
    const readAccessToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNGNmMGVkYjg1MTZmZjQzNjM0NzE4YWRjYjk4OGFmNSIsInN1YiI6IjY2MTZiYmYxN2E0ZWU3MDE2MzBhNGFhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NwHjomSj24e_eFSpivIagTQOGMB1Z7qePKGa-DssOYw"

    useEffect(() => {
        async function fetchMovie(){
          const url = `https://api.themoviedb.org/3/movie/${id}`
          console.log(url) 
          const options = {
              headers: {
                  accept: 'application/json',
                  Authorization: `Bearer ${readAccessToken}`
              }
          }   
          try {
              const movies = await axios.get(url, options)
              return setMovies(movies.data)
          } catch (error) {
              console.error('Error in getStaticProps:', error);
              return setMovies([]) // Return an empty array on error
          } finally{
                setLoading(false)

          }
        }
        fetchMovie()
      }, [id])
  
  return (
      <div>
        <PageHeader />
          {loading && (<h1>Loading...</h1>)}

          {!loading && movie && 
            (
              <div>
                <h1>{movie.title}</h1>
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
                <p>{movie.overview}</p>
                <ul>
                  <li>Popularity: {movie.popularity}</li>
                  <li>Vote Average: {movie.vote_average}</li>
                  <li>Vote Count: {movie.vote_count}</li>
                  <li>Release Date: {movie.release_date}</li>
                </ul>
              </div>
              )}
    </div>
  );
}