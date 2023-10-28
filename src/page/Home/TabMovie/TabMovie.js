import React, { useEffect, useState } from 'react'
import { getMovieByTheater } from '../../../api/api'
import { ConfigProvider, Tabs } from 'antd';
import moment from 'moment/moment';
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: 'Tab 1',
    children: 'Content of Tab Pane 1',
  },
  {
    key: '2',
    label: 'Tab 2',
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'Tab 3',
    children: 'Content of Tab Pane 3',
  },
];

export default function TabMovie() {
  const [danhSachHeThongRap, setdanhSachHeThongRap] = useState([]);
  useEffect(() => {
    getMovieByTheater()
      .then((res) => {
        console.log(res);
        setdanhSachHeThongRap(res.data.content)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])
  let renderDSPhim = (listPhim) => {
    return listPhim.map((phim, index) => {
      return (
        <div key={index} className='flex space-x-5 px-3 pb-6 pt-0 '>
          <img className='w-28 h-[152px] object-cover' src={phim.hinhAnh} alt="" />
          <div className='flex flex-col items-start'>
            <div className='block pb-2'>
              <span className='px-1 text-base bg-[#fb4226] text-center mr-2 rounded text-white font-medium inline-block' >C18</span>
              <p className='space-x-5 font-semibold text-lg inline-block'>{phim.tenPhim}</p>
            </div>
            <div className='grid grid-cols-2'>
              {phim.lstLichChieuTheoPhim.splice(0, 4).map((lichChieu, index) => {
                return <a key={index} className='mr-4 mb-4 bg-opacity-50 bg-slate-700  text-white rounded px-4 py-2' style={{ backgroundColor: "rgba(246, 246, 246, 0.5)", border: "1px solid #e4e4e4" }}>
                  <div className='flex items-center group flex-wrap' style={{ fontFamily: "sans-serif,robot,arial" }}>
                    <p className='text-[#00ac4d] font-medium text-sm group-hover:font-bold'>{moment(lichChieu.ngayChieuGioChieu).format("DD-MM-YYYY")}</p>
                    <p className='text-[#9e9e9e] text-base mx-1' style={{ lineHeight: "1.5" }}>~</p>
                    <p className='text-[#fa5238] font-medium text-base group-hover:font-bold'>{moment(lichChieu.ngayChieuGioChieu).format("h:mm")}</p>
                  </div>
                </a>
              })}
            </div>
          </div>
        </div>
      )
    })
  }
  let handleHeThongRap = () => {
    return danhSachHeThongRap.map((heThongRap, index) => {
      return {
        key: index,
        label: <img src={heThongRap.logo} className='w-16 ' alt="" />,
        children: <Tabs
          style={{ height: 500 }}
          tabPosition='left'
          onChange={onChange} 
          defaultActiveKey="1"
          items={heThongRap.lstCumRap.map((cumRap, index) => {
            return {
              key: cumRap.tenCumRap,
              label: <div key={index} className='text-left w-44 whitespace-nowrap overflow-hidden text-ellipsis'>
                <div className='text-green-500 font-medium'>{cumRap.tenCumRap}</div>
                <div style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{cumRap.diaChi}</div>
              </div>
              ,
              children: <div
                style={{
                  height: 500,
                  overflow: "auto",
                }}
              >{renderDSPhim(cumRap.danhSachPhim)}</div>,
            }
          })}
        />,
      }
    })
  }
  return (
    <div id='cumRap' className='container mx-auto !mb-10 p-3 shadow rounded border-2'>
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
          items={handleHeThongRap()}
          onChange={onChange} />
      </ConfigProvider>
    </div>
  )
}
