import React from 'react'
import { useEffect } from 'react'
import { userServ } from '../../api/api'
import { useState } from 'react';
import { Button, Table, Tag, message } from 'antd';
import Spinner from '../../component/Spinner';

export default function TableUser() {
  const [listUser, setlistUser] = useState();
  const [isLoading, setisLoading] = useState(true);


  function fetchListUser() { 
    setisLoading(true)
    userServ.getList()
    .then((res) => {
            setisLoading(false)
            console.log(res);
            setlistUser(res.data.content)
          })
          .catch((err) => {
           console.log(err);
          })
   }

  useEffect(() => { 
    fetchListUser();
   },[])
  let handleDelete = (taiKhoan) => { 
      userServ.deleteUser(taiKhoan)
      .then((res) => {
              fetchListUser();
              message.success("Xóa thành công")
              console.log(res);
            })
            .catch((err) => {
              message.error(err.response.data.content)
             console.log(err);
            });
   }
  let columnsHeader = [
    {
      title: 'Username',
      dataIndex: 'hoTen',
      key: 'hoTen',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },   {
      title: 'Type',
      dataIndex: 'maLoaiNguoiDung',
      key: 'maLoaiNguoiDung',
      render : (text) => {
        if (text == "KhachHang") {
          return <Tag color='Green'>Khách hàng</Tag>
        } else {
          return <Tag color='red'>Quản Trị</Tag>
        }
      }
    },
    {
      title: 'Action',
      render: (_, user) => {
        return (
          <Button 
          onClick={() => { 
            handleDelete(user.taiKhoan)
           }}
          className='bg-red-500 text-white'>Delete</Button>
        ) 
      }
    },
  ]

  return (
    <div>
      <Table dataSource={listUser} columns={columnsHeader} />;
    </div>
  )
}
