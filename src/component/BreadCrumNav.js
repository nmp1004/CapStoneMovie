import { Breadcrumb } from 'antd';
import React from 'react'
import { NavLink } from 'react-router-dom';
import useBreadcrumbs from "use-react-router-breadcrumbs";

let Icondashboard = () => {
  return (
    <span>
      <i className='fa fa-home mr-1'></i>
      Trang chủ
    </span>
  )
}

let routes = [
  {
    path: '/',
    breadcrumb: Icondashboard,
  },
  {
    path: '/userPage',
    breadcrumb: "Quản lý người dùng"
  },
  {
    path: '/adminPage',
    breadcrumb: "Quản lý phim"
  }
]

export default function BreadCrumNav() {
  const breadcrumbs = useBreadcrumbs(routes);
  return (
    <Breadcrumb
      style={{
        paddingLeft: "20px",
        margin: '16px 0',
      }}
    >
      {breadcrumbs.map(({ breadcrumb, match },index ) => {
          return <Breadcrumb.Item key={index}>
            <NavLink to={match.pathname}>{breadcrumb}</NavLink>
          </Breadcrumb.Item>
        }
      )}
    </Breadcrumb>
  )
}
