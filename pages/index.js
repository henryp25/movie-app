import React from 'react'
import Head from 'next/head'
import ProfileCard from '@/app/searchBar/searchBar'
import PageHeader from '@/app/headerComponent/PageHeader'
import { useState } from 'react'  


function Index() {

  return (
    <div>
      <div className='searchArea'>
        <PageHeader />
        <ProfileCard />
      </div>
    </div>

  )
}

export default Index