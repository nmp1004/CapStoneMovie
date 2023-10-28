import React from 'react'
import bgAnimate from './animation_lnet0z31.json'
import Lottie from 'lottie-react'
export default function Banner() {
  return (
    <div className='w-1/2'>
      <div className='w-4/5'>
        <Lottie animationData={bgAnimate} loop={true}/> 
      </div>
    </div>
  )
}
