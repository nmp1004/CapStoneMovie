import React from 'react'
import { userLocalStorage } from '../api/localService';
import { NavLink } from 'react-router-dom';

export default function Header() {
    let user = userLocalStorage.get()
    let handleLogOut = () => {
        userLocalStorage.remove()
        window.location.reload()
    }
    let handleLogIn = () => { window.location.href = "/login" }
    let renderUserNav = () => {
        let classBtn = "flex items-center text-neutral-400 group/button px-3"
        if (user) {
            return (
                <>
                    <div className='group/span flex items-center'>
                        <div className='w-8 h-8'>
                            <img src="http://demo1.cybersoft.edu.vn/static/media/avatarTix.546c691f.jpg" alt="" className='w-full rounded-full cursor-pointer' />
                        </div>
                        <span className='h3-header px-3 group-hover/span:text-red-600 cursor-pointer'>{user.hoTen}</span>
                    </div>
                    <hr className='hr-header' />
                    <button onClick={handleLogOut} className={classBtn}>
                        <svg class="w-8 h-8 mx-2 svg-header group-hover/button:fill-red-600" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></svg>
                        <h3 className='h3-header group-hover/button:text-red-600'>Đăng xuất</h3>
                    </button>
                </>
            )
        } else {
            return (
                <>
                    <button onClick={handleLogIn} className={classBtn}>
                        <svg className="w-8 h-8 mx-2 svg-header group-hover/button:fill-red-600" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path></svg>
                        <h3 className='h3-header group-hover/button:text-red-600'>Đăng nhập</h3>
                    </button>
                    <hr className='hr-header' />
                    <button className={classBtn + " !m-0"}>
                        <svg className="w-8 h-8 mx-2 svg-header group-hover/button:fill-red-600" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path></svg>
                        <h3 className='h3-header group-hover/button:text-red-600'>Đăng ký</h3>
                    </button>
                </>
            )
        }
    }

    return (
        <div className='h-20 flex items-center shadow-xl px-20 justify-between fixed z-50 bg-white top-0 left-0 right-0 opacity-90' id='header'>
                <NavLink to={"/"}>
                    <span className='text-3xl font-medium text-red-600 animate-pulse'>CyperFlix</span>
                </NavLink>
                <div className='flex'>
                    <a href='#listMovie' className='nav-header'>
                        <h4 className='text-base'>Lịch chiếu</h4>
                    </a>
                    <a href='#cumRap' className='nav-header'>
                        <h4 className='text-base'>Cụm rạp</h4>
                    </a>
                    <a href='#news' className='nav-header'>
                        <h4 className='text-base'>Tin tức</h4>
                    </a>
                    <a href='#ungDung' className='nav-header'>
                        <h4 className='text-base'>Ứng dụng</h4>
                    </a>
                </div>
                <div className='space-x-3 flex text-gray-400'>
                    {renderUserNav()}
                    </div>
            </div>
    )
}
