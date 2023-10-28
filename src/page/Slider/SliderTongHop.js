import React from 'react'

import { useMediaQuery } from 'react-responsive'
import Slider from './Slider'
import { Table } from 'antd'
import SliderMoblie from './SliderMoblie'

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  return isDesktop ? children : null
}
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  return isTablet ? children : null
}
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
  }

export default function SliderTongHop() {
  return (
    <div>
        <Desktop>
            <Slider/>
        </Desktop>
        <Tablet>
            <Slider/>
        </Tablet>
        <Mobile>
         <SliderMoblie/>
        </Mobile>
    </div>
  )
}
