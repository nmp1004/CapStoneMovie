import React from 'react'
import TabMovie from './TabMovie'
import TabMovieMobile from './TabMovieMobile'
import { useMediaQuery } from 'react-responsive'


const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
  }
  const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 0, maxWidth: 991 })
    return isTablet ? children : null
  }

export default function TabMovieTongHop() {
  return (
    <div>
        <Desktop>
            <TabMovie/>
        </Desktop>
        <Tablet>
            <TabMovieMobile/>
        </Tablet>
    </div>
  )
}
