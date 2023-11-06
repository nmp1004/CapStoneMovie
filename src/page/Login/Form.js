import React from 'react';
import { Button, Form, Input } from 'antd';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setLogin } from '../../redux/userSlice';
import { https } from '../../api/config';
import { useNavigate } from 'react-router-dom';
import { userLocalStorage } from '../../api/localService';


const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const FormLogin = () => {
  let dispatch = useDispatch()
  let navigate = useNavigate()
  const onFinish2 = (values) => {
    // axios.post(`${BASE_URL}/QuanLyNguoiDung/DangNhap`,values, {headers : configHeaders(),})
    //       .then((res) => {
    //         // Đẩy dữ liệu lên redux
    //         let action = {
    //           type: SET_INFO,
    //           payload : res.data.content
    //         }
    //         dispatch(action)
    //         userLocalStorage.set(res.data.content)
    //         navigate("/");
    //         message.success("Đăng nhập thành công")
    //         console.log(res);
    //       })
    //       .catch((err) => {
    //         message.error("Đăng nhập thất bại")
    //         console.log(err);
    //       });
    // console.log('Success:', values);
  };
  const onFinish = (values) => { 
      https.post("QuanLyNguoiDung/DangNhap",values)
      .then((res) => {
              console.log(res);
              dispatch(setLogin(res.data.content))
              userLocalStorage.set(res.data.content)
              let user = userLocalStorage.get()
              if (user.maLoaiNguoiDung == "QuanTri") {
                navigate("/admin")
              } else {
                navigate("/")
              }
            })
            .catch((err) => {
             console.log(err);
            });
   }
  return <Form
    className='w-1/2'
    layout='vertical'
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span:  20,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="taiKhoan"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="matKhau"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span:  20,
      }}
    >
      <Button type="primary" className='bg-orange-600' htmlType="submit">
        Login
      </Button>
    </Form.Item>
  </Form>
}
  ;
export default FormLogin;