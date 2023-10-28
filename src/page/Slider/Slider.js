import React, { useEffect, useRef, useState } from 'react'
import { Carousel, message } from 'antd';
import { getDetailMovie, getInfoShowTime, getListBanner, getListMovie, getMovieByTheater } from '../../api/api';
import Slider from 'react-slick';
import imgAngleDown from './icons8-chevron-down-24.png'
import moment from 'moment';
import './slider.css'

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};
export default function Sliderr() {
  const [banner, setbanner] = useState([]);
  const [movieArr, setmovieArr] = useState([]);
  const [danhSachHeThongRap, setdanhSachHeThongRap] = useState([]);
  const [getSelectedRap, setgetSelectedRap] = useState([]);
  const [getSelectedNgayGio, setgetSelectedNgayGio] = useState([]);
  const [navHeader1, setnavHeader1] = useState();
  const [navHeader2, setnavHeader2] = useState();
  const [navHeader3, setnavHeader3] = useState();
  let navSLider1 = useRef();
  let navSLider2 = useRef();
  let navSLider3 = useRef();
  let handleSelectNgayGio = (event) => {
    setgetSelectedNgayGio(event.target.value)
  }
  let handleSelectRap = (event) => {
    setgetSelectedRap(event.target.value)
  }
  let fetchData = async () => {
    try {
      let response = await getListBanner();
      let response1 = await getListMovie();
      setbanner(response.data.content)
      setmovieArr(response1.data.content)
    }
    catch {
      message.error("dsdsds")
    }
  }
  useEffect(() => {
    getInfoShowTime(getSelectedRap)
      .then((res) => {
        console.log(res);
        setdanhSachHeThongRap(res.data.content.heThongRapChieu)
      })
      .catch((err) => {
        console.log(err);
      });
    fetchData()
  }, [getSelectedRap])
    useEffect(() => { 
      let handler = (e) => {
        if (!navSLider1.current.contains(e.target))
          setnavHeader1(false)
      }
       document.addEventListener("mousedown", handler)
        return () => {
        document.removeEventListener("mousedown", handler)
      }
     },[])
    useEffect(() => { 
      let handler = (e) => {
        if (!navSLider2.current.contains(e.target))
          setnavHeader2(false)
      }
       document.addEventListener("mousedown", handler)
        return () => {
        document.removeEventListener("mousedown", handler)
      }
     },[])
     useEffect(() => { 
      let handler = (e) => {
        if (!navSLider3.current.contains(e.target))
          setnavHeader3(false)
      }
       document.addEventListener("mousedown", handler)
        return () => {
        document.removeEventListener("mousedown", handler)
      }
     },[])
  return (
    <div className='relative' id='Slider'>
      <Slider {...settings}>
        {banner.map((item, index) => {
          return (
            <img src={item.hinhAnh} key={index} className='w-full xl:h-200 sm:h-120 h-40 object-cover ' alt="" />
          )
        })}
      </Slider>
      <div className='absolute h-20 container' style={{ boxShadow: "0 0 10px rgb(0 0 0 / 30%)", transform: "translate(-50%,50%)", bottom: "0", left: "50%" }}>
        <div className='flex bg-white h-full rounded-md' >
          <div onClick={() => { setnavHeader1(!navHeader1) }} className='relative flex h-full w-full p-5 text-base font-medium justify-between items-center cursor-pointer '>
            <div ref={navSLider1} className={`slider-son ${navHeader1 ? 'slider-after' : ""}`}>
              <select onChange={handleSelectRap} name="film" id="" style={{ WebkitAppearance: "none" }} className='w-full p-1 focus:bg-gray-100 focus:outline-none'>
                <option selected="true" disabled="disabled" value="" >Phim</option>
                {movieArr.map((item, index) => {
                  return (
                    <option key={index} value={item.maPhim}>{item.tenPhim}</option>
                  )
                })}
              </select>
            </div>
            <img src={imgAngleDown} className='h-6' alt="" />
          </div>
          <div onClick={() => { setnavHeader2(!navHeader2) }}  className='relative flex h-full w-full p-5 text-base font-medium justify-between items-center cursor-pointer'>
            <div ref={navSLider2} className={`slider-son ${navHeader2 ? 'slider-after' : ""}`}>
              <select onChange={handleSelectNgayGio} name="film" id="" style={{ WebkitAppearance: "none" }} className='w-full p-1 focus:bg-gray-100 focus:outline-none'>
                <option selected="true" value="">Rạp</option>
                {danhSachHeThongRap.map((heThongRap) => {
                  return heThongRap.cumRapChieu.map((lichChieuPhim, index) => {
                    return (
                      <option key={index} value={lichChieuPhim.maCumRap}>{lichChieuPhim.tenCumRap}</option>
                    )
                  })
                })}
              </select>
            </div>

            <img src={imgAngleDown} className='h-6' alt="" />
          </div>
          <div onClick={() => { setnavHeader3(!navHeader3) }}  className='relative flex h-full w-full p-5 text-base font-medium justify-between items-center cursor-pointer'>
            <div ref={navSLider3} className={`slider-son ${navHeader3 ? 'slider-after' : ""}`}>
              <select name="film" id="" style={{ WebkitAppearance: "none" }} className='w-full p-1 focus:bg-gray-100 focus:outline-none'>
                <option selected="true" value="">Ngày giờ chiếu</option>
                {danhSachHeThongRap.map((heThongRap) => {
                  return heThongRap.cumRapChieu.map((lichChieuPhim) => {
                    if (lichChieuPhim.maCumRap === getSelectedNgayGio) {
                      return lichChieuPhim.lichChieuPhim.map((item, index) => {
                        return (
                          <option key={index} value={item.maLichChieu}>{moment(item.ngayChieuGioChieu).format("DD/MM/YYYY ~ hh:mm")}</option>
                        )
                      })
                    }
                  })
                })}
              </select>
            </div>

            <img src={imgAngleDown} className='h-6' alt="" />
          </div>
          <div className='flex w-full h-full text-base font-medium justify-center items-center'>
            <button className='text-white bg-red-500 lg:px-4 px-2 py-3 rounded-md hover:bg-orange-800 duration-150'>MUA VÉ NGAY</button>
          </div>
        </div>
      </div>
    </div>
  )
}
