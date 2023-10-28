import React, { useEffect, useState } from 'react'
import { getDetailMovie, getListMovie } from '../../api/api'
import { NavLink, useParams } from 'react-router-dom'
import moment from 'moment/moment';

export default function DetailMovie() {
    let params = useParams();
    const [detailMovie, setdetailMovie] = useState({});
    useEffect(() => {
        getDetailMovie(params.id)
            .then((res) => {
                console.log(res);
                setdetailMovie(res.data.content)
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])
    return (
        <div className='container !mb-20' style={{ lineHeight: "1.2" }}>
            <div className='text-white pb-3 text-[28px] mb-6' style={{ lineHeight: "1.2", borderBottom: "2px solid #fff" }}>
                <p>Nội Dung Phim</p>
            </div>
            <div className='h-full grid lg:grid-cols-5 grid-cols-5 justify-between'>
                <div className='lg:col-span-1 col-span-2 pr-4'>
                    <img className='w-48 h-[15rem] object-cover' src={detailMovie.hinhAnh} alt="" />
                </div>
                {/* <Progress
                        size={150}
                        type="circle"
                        strokeColor={"red"}
                        strokeWidth={8}
                        percent={detailMovie.danhGia * 10}
                        format={(percent) => (
                            <span className='text-red-600 font-medium block first-letter:'>{percent / 10} Điểm</span>
                        )} /> */}
                <div className='lg:col-span-4 col-span-3 pl-4 flex flex-col justify-start'>
                    <p className='text-white pb-4 text-[24px] mb-2' style={{ lineHeight: "1.2", borderBottom: "1px solid #d9d6c8", textTransform: "uppercase" }}>{detailMovie.tenPhim}</p>
                    <p className='text-white pb-3 text-sm ' >
                        <span className='font-medium'>Đạo diễn :</span> Nguyễn Quang Dũng
                    </p>
                    <p className='text-white pb-3 text-sm ' >
                        <span className='font-medium'>Diễn viên :</span> Hồng Ánh, Huỳnh Hạo Khang, Mai Tài Phến, Công Ninh, Hứa Vĩ Văn, Tuyền Mập, Tuấn Trần.
                    </p>
                    <p className='text-white pb-3 text-sm ' >
                        <span className='font-medium'>Thể loại :</span> Gia đình, Phiêu Lưu
                    </p>
                    <p className='text-white pb-3 text-sm ' >
                        <span className='font-medium'>Khởi chiếu :</span> {moment(detailMovie.ngayKhoiChieu).format("DD/MM/YYYY")}
                    </p>
                    <p className='text-white pb-3 text-sm ' >
                        <span className='font-medium'>Thời lượng :</span> 110 phút
                    </p>
                    <p className='text-white pb-3 text-sm ' >
                        <span className='font-medium'>Ngôn ngữ :</span> Tiếng Việt - Phụ đề Tiếng Anh
                    </p>
                    <NavLink className="text-white font-semibold text-base">
                        <button className="py-[4px] px-1 text-white bg-red-500 rounded hover:bg-orange-800 duration-150">
                            <span className='py-1 px-3 text-[13px] rounded' style={{ border: "1px solid #f07469" }}>MUA VÉ</span>
                        </button>
                    </NavLink>
                </div>
                <div className='my-4 lg:col-span-5 col-span-5'>
                    <p className='text-base text-white' style={{ letterSpacing: ".2px" }}>
                        {detailMovie.moTa}
                    </p>
                </div>
            </div>
        </div>
    )
}
