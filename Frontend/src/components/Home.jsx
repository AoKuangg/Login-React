import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Home() {
  const location = useLocation();
    return (
    <h1 className='text-xs text-green-600 hover:underline'>Hi, {location.state.user.username}</h1>
  )
}