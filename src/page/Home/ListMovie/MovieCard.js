import React from 'react'
import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import imgPlay from './icons8-circled-play-100.png'
export default function MovieCard({ item }) {
  const [showButton, setshowButton] = useState({ display: "none" });
  const [showContent, setshowContent] = useState({ display: "block" });
  const [showPlay, setshowPlay] = useState(["none"]);

  return (
    <div className='py-3'>
      <Card
        style={{ height: "400px", textAlign: "center" }}
        onMouseEnter={(e) => {
          setshowButton({ display: "block" })
          setshowContent({ display: "none" })
          setshowPlay(["block"])
        }}
        onMouseLeave={(e) => {
          setshowButton({ display: "none" })
          setshowContent({ display: "block" })
          setshowPlay(["none"])
        }}
        hoverable
        cover={<img alt="example" className='h-72 object-cover relative' src={item.hinhAnh} />

        }
      >
        <a target='' className='absolute text-center w-full h-72 bg-black opacity-50' style={{ top: "0%", left: "0%", transition: "all 0.3s", display: showPlay }}>
          <img src={imgPlay} alt="" className='text-white relative' width={50} style={{ top: "30%", left: "37%", }} />
        </a>
        <div style={showContent}>
          <Meta title={item.tenPhim} className='h-11' />
          <div className='text-gray-600 font-medium w-full overflow-hidden text-left' style={{ WebkitLineClamp: "2", display: "-webkit-box", WebkitBoxOrient: "vertical" }}>{item.moTa}</div>
        </div>
        <div className='flex gap-3'>
          <div className='w-1/2'>
            <NavLink to={`/movie/${item.maPhim}`} className="text-white font-semibold text-base mb-32 ">
              <button style={showButton} className="px-2 py-4 w-full text-white bg-red-500 rounded hover:bg-orange-800 duration-150">Mua Vé</button>
            </NavLink>
          </div>
          <div className='w-1/2'>
            <NavLink to={`/movie/${item.maPhim}`} className="text-white font-semibold text-base mb-32 ">
              <button style={showButton} className="px-2 py-4 w-full text-white bg-red-500 rounded hover:bg-orange-800 duration-150">Chi Tiết</button>
            </NavLink>
          </div>
        </div>
      </Card>
      
    </div>

  )
}
