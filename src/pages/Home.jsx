import React from 'react'
import Categories from './Categories'

export default function Home() {
  return (
    <div className='space-y-8'>
      <div className='w-full h-60 p-6 bg-slate-600/10 border border-slate-300 rounded-xl flex justify-center items-center'>
        <h1 className='text-2xl sm:text-4xl font-extrabold text-center text-slate-600'>
          <span className='block'>Savor Every Bite</span> Fresh Flavors, Fast
          Delivery!
        </h1>
      </div>

      <Categories />
    </div>
  )
}
