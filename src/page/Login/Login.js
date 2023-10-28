import React from 'react'
import Form from './Form'
import Banner from './Banner'
export default function Login() {
  return (
    <div className='h-screen bg-orange-300 flex items-center'>
        <div className='flex container rounded-xl bg-white p-10'>
            <Banner/>
            <Form/>
        </div>
    </div>
  )
}
