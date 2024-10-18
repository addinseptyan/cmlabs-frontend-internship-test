import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className='px-6 py-4 flex justify-between shadow-lg'>
      <Link to={'/'}>
        <h1 className='font-semibold text-xl text-slate-600'>PremiumMeal</h1>
      </Link>
    </header>
  )
}
