import React from 'react'
import '../../public/css/globals.css'


function PageHeader() {


  return (
    <div className='headerComponent'>
      <a href='/' style={{ textDecoration: 'none' }}>
        <h1>Movie Search App</h1>
      </a>
    </div>
  )
}

export default PageHeader