import React from 'react'
import img from './icons8-double-up-arrows-64.png'
export default function ScrollHeadPage() {
  return (
    <div className='fixed text-red-600 right-[4%] bottom-[3%]'>
        <a href="#Slider">
            <button  className='p-3 bg-slate-100' style={{borderRadius:"10px"}}>
                <img height={30} width={30} src={img} alt="" />
            </button>
        </a>
    </div>
  )
}
