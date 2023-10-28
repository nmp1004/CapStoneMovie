import React from 'react'
import FooterTongHop from '../component/FooterTongHop'
import HeaderTongHop from '../component/HeaderTongHop'
import ScrollHeadPage from '../component/ScrollHeadPage'
import SliderMoblie from '../page/Slider/SliderMoblie'

export default function Layout({children}) {
  return (
    <div className='space-y-10'>
        <HeaderTongHop/>
        {children}
        <FooterTongHop/>
        {/* <ScrollHeadPage/> */}
    </div>
  )
}
