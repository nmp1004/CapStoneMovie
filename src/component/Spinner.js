import React from 'react'
import { useSelector } from 'react-redux'
import { PacmanLoader } from 'react-spinners'

export default function Spinner() {
  let {isLoading} = useSelector(state => state.spinnerSlicer)
  return isLoading? (
    <div
    style={{
        width:"100%",
        height:"100vh",
        background:"black",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        position:"fixed",
        top:0,
        left:0,
        zIndex:1000,  
    }}
    >
        <PacmanLoader color='#36d7b7' speedMultiplier={2}/>
    </div>
  ):<></>
}
