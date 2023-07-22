import React from 'react'

export default function IndustryCard({ icon, label }) {
  return (
    <div className='bg-gray-50 w-full px-6 py-4 flex flex-col gap-3 items-center justify-center rounded-3xl'>
      {icon}
        <p className='text-gray-900'>{label}</p>
    </div>
  )
}
