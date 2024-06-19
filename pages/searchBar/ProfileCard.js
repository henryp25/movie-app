import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { SearchParamsContext } from 'next/dist/shared/lib/hooks-client-context.shared-runtime'



function ProfileCard({searchTerm, onClick}) {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const readAccessToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNGNmMGVkYjg1MTZmZjQzNjM0NzE4YWRjYjk4OGFmNSIsInN1YiI6IjY2MTZiYmYxN2E0ZWU3MDE2MzBhNGFhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NwHjomSj24e_eFSpivIagTQOGMB1Z7qePKGa-DssOYw"
    const [page, setPage] = useState(1)

    function nextPage(){
       setPage(page + 1)
       console.log('Page:', page)
    }
     function prevPage(){
        if(page === 1){
            setPage(1)
        } else {
            setPage(page - 1)
        }

     }

    useEffect(() => {
        async function movieDatabase(e, p){console.log('Fetching movies in getStaticProps...');
          const url = `https://api.themoviedb.org/3/search/movie?query=${e}&include_adult=false&language=en-US&page=${p}`
          const options = {
              method: 'GET',
              headers: {
                  accept: 'application/json',
                  Authorization: `Bearer ${readAccessToken}`
              }
          }   
          try {
              const movies = await axios.get(url, options)
              console.log('Fetched movies in getStaticProps:', movies);
              const movieData = movies.data // Enhanced logging
              return setMovies(movieData.results.slice(0,6))
          } catch (error) {
              console.error('Error in getStaticProps:', error);
              return setMovies([]) // Return an empty array on error
          } finally{
                setLoading(false)

          }
        }
        movieDatabase(searchTerm, page)
      }, [searchTerm,page])
    
  // DatabaseApi
  return (
    <div className='container'>

        <div className='searchBox'>
            <div>
                <div className='searchInput'>
                    <input id='userInput' type="text" placeholder="Search for a movie" />
                </div>
                <div className='searchButton'>
                    <button type='button' onClick={onClick} >Search</button>
                </div>
            </div>
      
        </div>
        <div className='profileContainer'>
            <h1>Movies searches for {searchTerm}</h1>
            <div className='profileCard'>
                    {loading && ( 
                        <h1>Loading...</h1>
                    )}
                    {!loading && (movies.map((movies)=>{
                        return (
                            <div key={movies.id}>
                                <ul className='movieCard'>
                                    <li>Title: {movies.title}</li>
                                    <li>Popularity: {movies.popularity}</li>
                                    <li>Vote Average: {movies.vote_average}</li>
                                    <li>Vote Count: {movies.vote_count}</li>
                                </ul>

                            </div>
                        )
                    }))}
            </div>
        </div>
        <div className='nextPrev'>
                <button type='button' onClick={nextPage}>Next Page</button>
                <button type='button' onClick={prevPage}>Previous Page</button>
        </div>  
    </div>
  )
}

export default ProfileCard