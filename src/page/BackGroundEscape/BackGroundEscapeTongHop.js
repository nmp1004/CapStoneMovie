import React from 'react'
import BackGroundEscape from './BackGroundEscape'
import BackGroundEscapeMoblie from './BackGroundEscapeMoblie'
import { useMediaQuery } from 'react-responsive'

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
  }
  const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 0, maxWidth: 991 })
    return isTablet ? children : null
  }

export default function BackGroundEscapeTongHop() {
  return (
    <div>
        <Desktop>
            <BackGroundEscape/>
        </Desktop>
        <Tablet>
            <BackGroundEscapeMoblie/>
        </Tablet>
    </div>
  )
}
