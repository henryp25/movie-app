import React from 'react'

import ProfileCard from '@/app/searchBar/ProfileCard'
import PageHeader from '@/app/headerComponent/PageHeader'
import { useState } from 'react'  




function Index() {
  const [searchTerm, setSearchTerm] = useState('')

  function onClick() {
    const userInput = document.getElementById('userInput')
    setSearchTerm(userInput.value)
    document.querySelector('.searchQuery').classList.add('show');
    document.querySelector('.profileContainer').classList.add('show');
  }

  return (
    <div className='searchArea'>
      <PageHeader />
      <ProfileCard onClick={onClick} searchTerm={searchTerm} />
    </div>

  )
}

export default Index