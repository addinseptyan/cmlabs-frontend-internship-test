import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <Navbar />
      <main className='mx-auto p-10 sm:max-w-[80%]'>
        <Outlet />
      </main>
    </>
  )
}
