import React, { useState } from 'react'
import ListMovie from './ListMovie/ListMovie'
import SliderTongHop from '../Slider/SliderTongHop'
import BackGroundEscapeTongHop from '../BackGroundEscape/BackGroundEscapeTongHop'
import TabMovieTongHop from './TabMovie/TabMovieTongHop'
import NewsMovie from './NewsMovie/NewsMovie'
import UngDungTongHop from './UngDungMovie/UngDungTongHop'

export default function Home() {
  return (
    <div className='!mt-20'>
      <SliderTongHop/>
      <ListMovie/>
      <BackGroundEscapeTongHop/>
      <TabMovieTongHop/>
      <NewsMovie/>
      <UngDungTongHop/>
    </div>
  )
}
