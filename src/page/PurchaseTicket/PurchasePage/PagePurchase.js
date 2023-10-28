import React from 'react'
import SeatTicket from '../SeatTicket'
import InfoTicketed from '../InfoTicketed'

export default function PagePurchase() {
  return (
    <div className='!mt-20 py-10 flex container'>
        <SeatTicket/>
        <InfoTicketed/>
    </div>
  )
}
