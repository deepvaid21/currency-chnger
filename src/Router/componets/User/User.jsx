import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {UserId}=useParams()
  return (
    <div className='py-4 font-extrabold 
     font-bold text-center text-orange-800'>
      <h1>User:{UserId}</h1>
    </div>
  )
}

export default User
