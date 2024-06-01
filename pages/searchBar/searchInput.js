import React from 'react'
import '../../public/css/searchbar.css'

function Searchbar() {
    


    

  return (
    <div className='searchBox'>
        <div>
            <div className='searchInput'>
                <input type="text" placeholder="Search for a movie" />
            </div>
            <div className='searchButton'>
                <button type='button'>Search</button>
            </div>
        </div>
  </div>
  )
}

export default Searchbar