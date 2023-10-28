import React from 'react'
import UngDungMovie from './UngDungMovie'
import UngDungMovieMobile from './UngDungMovieMobile'
import { useMediaQuery } from 'react-responsive'


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
export default function UngDungTongHop() {
  return (
    <div>
        <Desktop>
            <UngDungMovie/>
        </Desktop>
        <Tablet>
            <UngDungMovie/>
        </Tablet>
        <Mobile>
            <UngDungMovieMobile/>
        </Mobile>
    </div>
  )
}
