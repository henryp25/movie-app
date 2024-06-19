import React, { useEffect, useState } from 'react'
import axios from 'axios'



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
         setPage(page - 1)
     }

    useEffect(() => {
        async function movieDatabase(e, p){console.log('Fetching movies in getStaticProps...');
          const url = `https://api.themoviedb.org/3/search/movie?query=${e}&include_adult=false&language=en-US&page=${p}&_limit=2`
          console.log(url)
          console.log(p)
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
              return setMovies(movieData.results.slice(0,2))
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
    <div>
        <div className='searchBox'>
        <div>
            <div className='searchInput'>
                <input id='userInput' type="text" placeholder="Search for a movie" />
            </div>
            <div className='searchButton'>
                <button type='button' onClick={onClick} >Search</button>
            </div>
        </div>
            <button type='button' onClick={nextPage}>Next Page</button>
            <button type='button' onClick={prevPage}>Previous Page</button>
        </div>
        <div className='profileCard'>
            <div className='profileInfo'>
                <h1>Profile</h1>
                <p>Username: {searchTerm}</p>
                <div className='profileImage'>

                <img src='https://via.placeholder.com/150' alt='profile' />
                </div>
                <div className='profileInfo'>
                {console.log('movies:', movies)}
                {loading && ( 
                    <h1>Loading...</h1>
                )}
                {!loading && (movies.map((movies)=>{
                    return (
                        <div key={movies.page}>
                            <h1>{movies.original_title}</h1>
                            <p>{movies.release_date}</p>
                        </div>
                    )
                }))}
            </div>
            
            </div>
        </div>
    </div>
  )
}

export default ProfileCard