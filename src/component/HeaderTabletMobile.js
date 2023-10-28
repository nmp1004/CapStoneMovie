import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { userLocalStorage } from '../api/localService';

export default function HeaderTabletMobile() {
    const [visible, setvisible] = useState(false);
    // let { info } = useSelector((state) => {
    //     return state.usersReducer
    // })
    let handleLogOut = () => {
        userLocalStorage.remove()
        window.location.reload()
     }
    let handleLogIn = () => {
        window.location.href = "/login"
     }
    let renderUserNav = () => {
        let classBtn = "flex items-center text-neutral-400 group/button px-3 w-full px-4 py-2 justify-start"
        if (false) {
            return (
                <>
                    <div className='group/span flex items-center w-full px-4 py-2'>
                        <div className='w-8 h-8 '>
                            <img src="http://demo1.cybersoft.edu.vn/static/media/avatarTix.546c691f.jpg" alt="" className='w-full rounded-full cursor-pointer ml-2' />
                        </div>
                        <span className='h3-header ml-1 text-neutral-400 px-3 group-hover/span:text-red-600 cursor-pointer'>{false.hoTen}</span>
                    </div>
                    <button onClick={handleLogOut} className={classBtn}>
                        <svg class="w-8 h-8 mx-2 svg-header group-hover/button:fill-red-600" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></svg>
                        <h3 className='h3-header group-hover/button:text-red-600'>Đăng xuất</h3>
                    </button>
                    <hr className='hr-headerTablet' />
                </>
            )
        } else {
            return (
                <>
                    <div className='py-4'>
                        <button onClick={handleLogIn} className={classBtn}>
                            <svg className="w-8 h-8 mx-2 svg-header group-hover/button:fill-red-600" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path></svg>
                            <h3 className='h3-header group-hover/button:text-red-600'>Đăng nhập</h3>
                        </button>
                        <button className={classBtn + " !m-0"}>
                            <svg className="w-8 h-8 mx-2 svg-header group-hover/button:fill-red-600" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path></svg>
                            <h3 className='h3-header group-hover/button:text-red-600'>Đăng ký</h3>
                        </button>
                    </div>
                    <hr className='hr-headerTablet' />
                </>
            )
        }
    }
    return (
        <div>
            <div className='h-20 flex items-center shadow-xl px-20 justify-between fixed z-10 bg-white top-0 left-0 right-0 opacity-80'>
                <NavLink to={"/"}>
                    <span className='text-3xl font-medium text-red-600 animate-pulse'>CyperFlix</span>
                </NavLink>
                <svg onClick={() => { setvisible(!visible) }}
                 className='w-6 h-auto cursor-pointer active:bg-red-600' fill='#fb4226' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                    <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
                </svg>
            </div>
            <div  style={{display: visible ? "block" : "none"}}>
                <div className='fixed top-0 left-0 right-0 bottom-0 flex z-50 bg-black opacity-50'>
                    <div onClick={() => { setvisible(false) }} className='w-4/5 relative' style={{right:"-22.5%"}}></div>
                </div>
                <div className='fixed flex flex-col w-52 top-0 h-full left-0 z-50 bg-white'>
                    {renderUserNav()}
                    <div className='flex flex-col py-4'>
                        <a href='#' className='nav-header !px-8 !py-4'>
                            <h4 className='text-base'>Lịch chiếu</h4>
                        </a>
                        <a className='nav-header !px-8 !py-4'>
                            <h4 className='text-base'>Cụm rạp</h4>
                        </a>
                        <a className='nav-header !px-8 !py-4'>
                            <h4 className='text-base'>Tin tức</h4>
                        </a>
                        <a className='nav-header !px-8 !py-4'>
                            <h4 className='text-base'>Ứng dụng</h4>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
