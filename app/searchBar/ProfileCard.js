import React from 'react'
import '../../public/css/profileCard.css'

function ProfileCard() {
  return (
    <div className='profileCard'>
        <div className='profileInfo'>
            <div className='profileImage'>
            <img src='https://via.placeholder.com/150' alt='profile' />
            </div>
            <div className='profileInfo'>
            <h2>John Doe</h2>
            <p>Age: 25</p>
            <p>Location: New York</p>
        </div>
        </div>
    </div>
  )
}

export default ProfileCard