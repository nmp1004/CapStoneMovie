import React from 'react'
import ungdung1 from './ungdung-1.jpg'
import ungdung2 from './ungdung-2.jpg'
import ungdung3 from './ungdung-3.jpg'
import ungdung4 from './ungdung-4.jpg'
import { useState } from 'react'
import { useEffect } from 'react'

const images = [ungdung1,ungdung2,ungdung3,ungdung4]
export default function AutoImg() {
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const intervalImg = setInterval(() => { 
            if (currentIndex === images.length -1 ) {
                setCurrentIndex(0)
            }   else {
                setCurrentIndex(currentIndex+ 1)
            }
         },5000)
        return () => { clearInterval(intervalImg) }
    },[currentIndex]); 
  return ( 
    <div className='w-full absolute' style={{top:"20px", left:"0",padding:"1.5% 29.2% 0 29.2%", display:"block"}}>
        <img className='' style={{borderRadius:"20px"}} src={images[currentIndex]} alt="" />
    </div>
  )
}
