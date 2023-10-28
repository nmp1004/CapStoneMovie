import React from 'react'
import DetailMovie from '../detailMovie';
import GIoChieuDetail from '../GIoChieuDetail';
import '../Detail.css'


export default function PageDetail() {
    return (
        <div className='bg-[#0a2029] !mt-20 py-20 pageDetails'>
            <DetailMovie/>
            <GIoChieuDetail/>
        </div>
       
    )
}
