import React from 'react'

import ProfileCard from '@/pages/searchBar/ProfileCard'
import '../public/css/globals.css'
import { useState } from 'react'  




function Index() {
  const [searchTerm, setSearchTerm] = useState('')
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const readAccessToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNGNmMGVkYjg1MTZmZjQzNjM0NzE4YWRjYjk4OGFmNSIsInN1YiI6IjY2MTZiYmYxN2E0ZWU3MDE2MzBhNGFhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NwHjomSj24e_eFSpivIagTQOGMB1Z7qePKGa-DssOYw"
 


  function onClick() {
    const userInput = document.getElementById('userInput')
    setSearchTerm(userInput.value)
    document.getElementsByClassName('profileCard')[0].style.display = 'flex'
  }

  return (
    <div className='searchArea'>
      <div>
        <h1>Movie Search Page</h1>
      </div>
        <ProfileCard onClick={onClick} searchTerm={searchTerm} />
    </div>

  )
}

export default Index