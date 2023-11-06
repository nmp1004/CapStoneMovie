import React from 'react'
import "./PNF.css"
export default function PageNotFound() {
    return (
        <div id='PNF' className='text-center text-3xl text-red-500  mt-20 section'>
            <h1 class="error h-24">404</h1>
            <div class="page">Ooops!!! The page you are looking for is not found</div>
            <a class="back-home" href="#!">Back to home</a>
        </div>
    )
}
