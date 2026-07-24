import React from 'react'
import whyChooseData from "../../../../../data/whyChooseData"
import WhyChooseCard from './WhyChooseCard'

const WhyChooseGrid = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
      {whyChooseData.map((whyChoose) => (
        <WhyChooseCard key={whyChoose.id} whyChoose={whyChoose}/>
      ))}
    </div>
  )
}

export default WhyChooseGrid
