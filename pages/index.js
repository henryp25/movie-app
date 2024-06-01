import React from 'react'
import Searchbar from '@/pages/searchBar/searchInput'
import ProfileCard from '@/pages/searchBar/ProfileCard'
import '../public/css/globals.css'

function index() {
  return (
    <div className='searchArea'>
      <div>
        <h1>Movie Search Page</h1>

      </div>
        <Searchbar />
        <ProfileCard />
    </div>

  )
}

export default index