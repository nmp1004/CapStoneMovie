import React from 'react'

import { useMediaQuery } from 'react-responsive'
import HeaderTabletMobile from './HeaderTabletMobile'
import Header from './Header'

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  return isDesktop ? children : null
}
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 0, maxWidth: 991 })
  return isTablet ? children : null
}
export default function HeaderTongHop() {
  return (
    <div className=''>
        <Desktop>
            <Header/>
        </Desktop>
        <Tablet>
            <HeaderTabletMobile/>
        </Tablet>
    </div>
  )
}
