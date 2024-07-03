import React from 'react'

import ProfileCard from '@/pages/searchBar/ProfileCard'
import '../public/css/globals.css'
import { useState } from 'react'  




function Index() {
  const [searchTerm, setSearchTerm] = useState('')

  function onClick() {
    const userInput = document.getElementById('userInput')
    setSearchTerm(userInput.value)
    document.querySelector('.profileContainer').classList.add('show');
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