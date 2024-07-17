import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'


function ProfileCard() {
    const [searchTerm, setSearchTerm] = useState('')
    const router = useRouter()
    
    function onClick() {
      const userInput = document.getElementById('userInput')
      setSearchTerm(userInput.value)
      if(searchTerm){
        router.push(`/movieSearch/${searchTerm}`)
      } else {
        router.push(`/`)
      }  

    }
  
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
        
    </div>
  )
}

export default ProfileCard