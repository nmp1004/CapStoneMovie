import React, { useState } from 'react'
import { useEffect } from 'react'
import { getInfoShowTime } from '../../api/api'
import { NavLink, useParams } from 'react-router-dom'
import { ConfigProvider, Tabs } from 'antd';
import moment from 'moment';
import { useRef } from 'react';
const onChange = (key) => {
};

export default function GIoChieuDetail() {
  let ref = useRef()
  const [getSelectedNgayGio, setgetSelectedNgayGio] = useState([]);
  let params = useParams()
  const [danhsachHeThongRap, setdanhsachHeThongRap] = useState([]);
  let renderTime = (maCumRap, lichChieuPhim) => {
    if (getSelectedNgayGio.includes(maCumRap)) {
      return lichChieuPhim.map((items, index) => {
        return (
          <NavLink to={`/purchase/${items.maLichChieu}`} key={index} className='mr-4 mb-4 bg-opacity-50 bg-slate-700  text-white rounded px-4 py-2' style={{ backgroundColor: "rgba(246, 246, 246, 0.5)", border: "1px solid #e4e4e4" }}>
            <div className='flex items-center group flex-wrap' style={{ fontFamily: "sans-serif,robot,arial" }}>
              <p className='text-[#00ac4d] font-medium text-sm group-hover:font-bold'>{moment(items.ngayChieuGioChieu).format("DD-MM-YYYY")}</p>
              <p className='text-[#9e9e9e] text-base mx-1' style={{ lineHeight: "1.5" }}>~</p>
              <p className='text-[#fa5238] font-medium text-base group-hover:font-bold'>{moment(items.ngayChieuGioChieu).format("h:mm")}</p>
            </div>
          </NavLink>
        )
      })
    }
  }
  useEffect(() => {
    getInfoShowTime(params.id)
      .then((res) => {
        console.log(res);
        setdanhsachHeThongRap(res.data.content.heThongRapChieu)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])
  return (
    <div className='container bg-white shadow rounded border-2'>
      <ConfigProvider
        theme={{
          components: {
            Tabs: {
              inkBarColor: "#00ac4d",
            }
          }
        }}
      >
        <Tabs
          style={{ height: 500 }}
          tabPosition='left'
          defaultActiveKey="1"
          onChange={onChange}
          items={danhsachHeThongRap.map((item, index) => {
            return {
              key: index,
              label: <div className='py-4 px-6' onClick={() => { setgetSelectedNgayGio(item.cumRapChieu.map((item) => { return item.maCumRap })) }}>
                <img src={item.logo} className='w-16' alt="" />
              </div>,
              children: <div >
                {
                  item.cumRapChieu.map((item) => {
                    return (
                      <div className=''>
                        <p className='text-green-500 font-medium text-base py-2'>{item.tenCumRap}</p>
                        <div className='flex'>
                          {renderTime(item.maCumRap, item.lichChieuPhim)}
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            }
          })}
        />
      </ConfigProvider>
    </div>
  )
}
