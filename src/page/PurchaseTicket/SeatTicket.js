import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getListTicket } from '../../api/api';
import { useState } from 'react';

export default function SeatTicket() {
  let params = useParams()
  const [backGroundBtn, setbackGroundBtn] = useState(false);
  const [listTicket, setlistTicket] = useState([]);
  const [getValueBtn, setgetValueBtn] = useState([]);
  console.log(getValueBtn);
  let handleChangeBg = (e) => { 
    setgetValueBtn(e.target.value)
   } 
  useEffect(() => { 
    getListTicket(params.maLichChieu)
    .then((res) => {
            console.log(res);
            setlistTicket(res.data.content.danhSachGhe)
          })
          .catch((err) => {
           console.log(err);
          });
   },[])
  return (
    <div className='w-[71%] flex flex-wrap'>
      {listTicket.map((item,index) => { 
          return (        
              <button
                onClick={handleChangeBg}
                value={item.maGhe}
                className='!w-[35px] !h-[35px] m-[5px] rounded font-medium uppercase hover:bg-[#0000000a] duration-150 ' 
                style={{fontFamily:"Roboto,Helvetica,Arial",lineHeight:"1.75",letterSpacing:"0.02857em",backgroundColor:`${item.maGhe == getValueBtn  ? "green" : item.daDat  == true ? "#767676" : item.loaiGhe == "Vip" ? "orange" : "#e9e9e9"}`}}>
                  {item.daDat == false ? `${item.stt}` : "X"}
                </button>
          )
       })}
    </div>
  )
}
