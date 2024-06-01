import React from 'react'
import '../../public/css/profileCard.css'
import DatabaseApi from '../../app/movie-app/DatabaseApi'


export async function getStaticProps() {
  const movies = await DatabaseApi()
  console.log(movies)
  return {
    props: {
      movies
    }}
}



function ProfileCard({ movies }) {
  console.log(movies)
  // DatabaseApi
  return (
    <div className='profileCard'>
        <div className='profileInfo'>
            <div className='profileImage'>
            
            <img src='https://via.placeholder.com/150' alt='profile' />
            </div>
            <div className='profileInfo'>
            {/* {movies.map((movies)=>{
                return (
                    <div key={movies.page}>
                        <h1>{movies.results.original_title}</h1>
                        <p>{movies.release_date}</p>
                    </div>
                )
            })} */}
        </div>
        </div>
    </div>
  )
}

export default ProfileCard