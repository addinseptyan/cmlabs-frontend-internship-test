import React from 'react'

export default function Card({ image, name, variant = 'default' }) {
  const defaultCard = (
    <div className='w-full h-48 rounded-[20px] overflow-hidden bg-gray-200 shadow-sm hover:shadow-lg hover:shadow-slate-400 hover:scale-105 transition-all relative'>
      <div className='w-full h-36 overflow-hidden bg-slate-600'>
        <img
          src={image}
          alt={`${name} thumbnail`}
          className='w-full h-full object-cover object-center'
        />
      </div>
      <p className='text-slate-600 font-semibold absolute left-1/2 bottom-4 -translate-x-1/2'>
        {name}
      </p>
    </div>
  )

  const overlayCard = (
    <div className='w-full h-48 rounded-[20px] overflow-hidden bg-green-400 shadow-sm hover:shadow-lg hover:shadow-slate-400 hover:scale-105 transition-all relative'>
      <div className='size-full bg-gradient-to-r from-black/90 to-transparent absolute' />
      <div className='w-full h-full overflow-hidden bg-slate-600'>
        <img
          src={image}
          alt={`${name} thumbnail`}
          className='w-full h-full object-cover object-center'
        />
      </div>
      <p className='text-white font-semibold absolute left-4 bottom-4'>
        {name}
      </p>
    </div>
  )

  return variant === 'default' ? defaultCard : overlayCard
}
