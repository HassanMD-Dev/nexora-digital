import React from 'react'
import aboutStats from "../../../../../data/aboutStats"

const AboutStats = () => {
  return (
    <div className='grid grid-cols-2 gap-6 lg:grid-cols-4'>
      {aboutStats.map((stat) => (
        <div className='flex flex-col items-center lg:items-start' key={stat.id}>
            <p className='text-3xl font-bold text-primary'>{stat.value}</p>
            <p className='text-sm text-muted'>{stat.label}</p>
        </div>
      ))}
    </div>
  )
}

export default AboutStats
