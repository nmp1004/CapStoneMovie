import axios from "axios"
import { BASE_URL, configHeaders, https } from "./config"

export let getListMovie = () => { 
    return axios({
        url:`${BASE_URL}/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`,
        method:"GET",
        headers:configHeaders(),
    })
 }

export let getDetailMovie = (id) => { 
    return axios({
        url:`${BASE_URL}/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
        method:"GET",
        headers:configHeaders(),
    })
 }

export let getInfoShowTime = (id) => { 
    return axios({
        url:`${BASE_URL}/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`,
        method:"GET",
        headers:configHeaders(),
    })
 }

export let getMovieByTheater = () => { 
    return axios({
        url:`${BASE_URL}/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP07`,
        method:"GET",
        headers:configHeaders(),
    })
 }

export let getListBanner = () => { 
    return axios({
        url:`${BASE_URL}/QuanLyPhim/LayDanhSachBanner`,
        method:"GET",
        headers:configHeaders(),
    })
 }

 
export let getListTicket = (id) => { 
    return axios({
        url:`${BASE_URL}/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`,
        method:"GET",
        headers:configHeaders(),
    })
 }

export let userServ = { 
    getList : () => { 
        return https.get("/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP00")
    },
    deleteUser : (taiKhoan) => https.delete(`/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`)    
 }
