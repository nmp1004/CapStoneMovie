import React, { useState } from 'react'
import { ConfigProvider, Tabs } from 'antd';
import './NewMovie.css'
import { Collapse } from 'react-collapse';
const onChange = (key) => {
    console.log(key);
};
let render24h = () => {
    return (
        <div className='grid grid-cols-6 gap-4 mt-1 !text-left'>
            <div className='col-span-3'>
                <div className='mb-2'>
                    <a target='blank' href="https://thanhnien.vn/cong-chieu-bom-tan-my-tenet-tai-viet-nam-185987738.htm">
                        <img className='rounded-md' src="https://s3img.vcdn.vn/123phim/2020/07/tenet-cong-bo-ngay-khoi-chieu-chinh-thuc-tai-viet-nam-15959320391357.png" alt="" />
                    </a>
                </div>
                <a target='blank' href="https://thanhnien.vn/cong-chieu-bom-tan-my-tenet-tai-viet-nam-185987738.htm" className='hover:text-orange-600'>
                    <p className='h-11 text-base font-medium overflow-hidden text-ellipsis mb-1' style={{ lineHeight: "20px", WebkitBoxOrient: "vertical", WebkitLineClamp: "2", display: "-webkit-box" }} >TENET công bố ngày khởi chiếu chính thức tại Việt Nam</p>
                </a>
                <p className='text-gray-600 h-14 text-justify pr-1 mb-2 overflow-hidden text-ellipsis' style={{ lineHeight: "19px", fontSize: "13px", WebkitBoxOrient: "vertical", WebkitLineClamp: "2", display: "-webkit-box" }}>Đêm qua theo giờ Việt Nam, hãng phim Warner Bros. đưa ra thông báo chính thức về ngày khởi chiếu cho bom tấn TENET tại các thị trường bên ngoài Bắc Mỹ, trong đó có Việt Nam.</p>
            </div>
            <div className='col-span-3'>
                <div className='mb-2'>
                    <a target='blank' href="https://www.google.com/search?q=Khi+ph%E1%BB%A5+n%E1%BB%AF+kh%C3%B4ng+c%C3%B2n+%E1%BB%9F+th%E1%BA%BF+tr%E1%BB%91n+ch%E1%BA%A1y+c%E1%BB%A7a+n%E1%BA%A1n+nh%C3%A2n&rlz=1C1GCEA_enVN1025VN1025&oq=Khi+ph%E1%BB%A5+n%E1%BB%AF+kh%C3%B4ng+c%C3%B2n+%E1%BB%9F+th%E1%BA%BF+tr%E1%BB%91n+ch%E1%BA%A1y+c%E1%BB%A7a+n%E1%BA%A1n+nh%C3%A2n&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBBzE2MmowajSoAgCwAgA&sourceid=chrome&ie=UTF-8">
                        <img className='rounded-md' src="https://s3img.vcdn.vn/123phim/2020/07/khi-phu-nu-khong-con-o-the-tron-chay-cua-nan-nhan-15943683481617.jpg" alt="" />
                    </a>
                </div>
                <a target='blank' href="https://www.google.com/search?q=Khi+ph%E1%BB%A5+n%E1%BB%AF+kh%C3%B4ng+c%C3%B2n+%E1%BB%9F+th%E1%BA%BF+tr%E1%BB%91n+ch%E1%BA%A1y+c%E1%BB%A7a+n%E1%BA%A1n+nh%C3%A2n&rlz=1C1GCEA_enVN1025VN1025&oq=Khi+ph%E1%BB%A5+n%E1%BB%AF+kh%C3%B4ng+c%C3%B2n+%E1%BB%9F+th%E1%BA%BF+tr%E1%BB%91n+ch%E1%BA%A1y+c%E1%BB%A7a+n%E1%BA%A1n+nh%C3%A2n&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBBzE2MmowajSoAgCwAgA&sourceid=chrome&ie=UTF-8" className='hover:text-orange-600'>
                    <p className='h-11 text-base font-medium overflow-hidden text-ellipsis mb-1' style={{ lineHeight: "20px", WebkitBoxOrient: "vertical", WebkitLineClamp: "2", display: "-webkit-box" }} >Khi phụ nữ không còn ở thế trốn chạy của nạn nhân</p>
                </a>
                <p className='text-gray-600 h-14 text-justify pr-1 mb-2 overflow-hidden text-ellipsis' style={{ lineHeight: "19px", fontSize: "13px", WebkitBoxOrient: "vertical", WebkitLineClamp: "2", display: "-webkit-box" }}>Là bộ phim tâm lý li kỳ với chủ đề tội phạm, Bằng Chứng Vô Hình mang đến một góc nhìn mới về hình ảnh những người phụ nữ thời hiện đại. Điều đó được thể hiện qua câu chuyện về hai người phụ nữ cùng hợp sức để vạch mặt tên tội phạm có sở thích bệnh hoạn với phụ nữ.</p>
            </div>
            <div className='col-span-2'>
                <div className='mb-2'>
                    <a target='blank' href="https://gamek.vn/nam-than-hanh-dong-gerard-butler-cung-bo-cu-deadpool-lap-hoi-sinh-ton-trong-phim-moi-greenland-tham-hoa-thien-thach-20200626172939372.chn">
                        <img className='rounded-md' src="https://s3img.vcdn.vn/123phim/2020/07/gerard-butler-cung-bo-cu-deadpool-tham-gia-greenland-15937528932506.png" alt="" />
                    </a>
                </div>
                <a target='blank' href="https://gamek.vn/nam-than-hanh-dong-gerard-butler-cung-bo-cu-deadpool-lap-hoi-sinh-ton-trong-phim-moi-greenland-tham-hoa-thien-thach-20200626172939372.chn" className='hover:text-orange-600'>
                    <p className='h-11 text-base font-medium overflow-hidden text-ellipsis mb-1' style={{ lineHeight: "20px", WebkitBoxOrient: "vertical", WebkitLineClamp: "2", display: "-webkit-box" }} >Gerard Butler cùng bồ cũ Deadpool tham gia Greenland</p>
                </a>
                <p className='text-gray-600 h-14 text-justify pr-1 mb-4 overflow-hidden text-ellipsis' style={{ lineHeight: "19px", fontSize: "13px", WebkitBoxOrient: "vertical", WebkitLineClamp: "2", display: "-webkit-box" }}>Bộ phim hành động mang đề tài tận thế Greenland: Thảm Họa Thiên Thạch đến từ nhà sản xuất của loạt phim John Wick đã tung ra trailer đầu tiên, hé lộ nội dung cốt truyện, dàn diễn viên, cùng hàng loạt đại cảnh cháy nổ hoành tráng.</p>
            </div>
            <div className='col-span-2'>
                <div className='mb-2'>
                    <a target='blank' href="https://thanhnien.vn/phuong-anh-dao-vuot-qua-noi-so-cho-de-dong-bang-chung-vo-hinh-1851245533.htm#:~:text=Ngo%C3%A0i%20di%E1%BB%85n%20vi%C3%AAn%20Ph%C6%B0%C6%A1ng%20Anh,gi%E1%BA%A3%20v%C3%A0o%20ng%C3%A0y%2010.7.2020.">
                        <img className='rounded-md' src="https://s3img.vcdn.vn/123phim/2020/07/dien-vien-dac-biet-cua-bang-chung-vo-hinh-15937518743844.png" alt="" />
                    </a>
                </div>
                <a target='blank' href="https://thanhnien.vn/phuong-anh-dao-vuot-qua-noi-so-cho-de-dong-bang-chung-vo-hinh-1851245533.htm#:~:text=Ngo%C3%A0i%20di%E1%BB%85n%20vi%C3%AAn%20Ph%C6%B0%C6%A1ng%20Anh,gi%E1%BA%A3%20v%C3%A0o%20ng%C3%A0y%2010.7.2020." className='hover:text-orange-600'>
                    <p className='h-11 text-base font-medium overflow-hidden text-ellipsis mb-1' style={{ lineHeight: "20px", WebkitBoxOrient: "vertical", WebkitLineClamp: "2", display: "-webkit-box" }} >Diễn viên đặc biệt của Bằng Chứng Vô Hình</p>
                </a>
                <p className='text-gray-600 h-14 text-justify pr-1 mb-4 overflow-hidden text-ellipsis' style={{ lineHeight: "19px", fontSize: "13px", WebkitBoxOrient: "vertical", WebkitLineClamp: "2", display: "-webkit-box" }}>Bằng Chứng Vô Hình tiết lộ thêm với khán giả một diễn viên vô cùng đặc biệt, đi diễn như đi chơi và không hề nghe theo sự chỉ đạo của đạo diễn Trịnh Đình Lê Minh. Đó chính là chú chó Ben – trợ thủ đắc lực của cô gái mù Thu (Phương Anh Đào).</p>
            </div>
            <div className='col-span-2'>
                <div className='flex flex-col justify-between' style={{ height: "90%" }}>
                    <div>
                        <div className='float-left h-12 w-12 mr-2'>
                            <a target='blank' href="https://danviet.vn/ngoi-den-ky-quai-2-bo-doi-tham-song-so-chet-tai-xuat-nhieu-lan-suyt-chet-vi-loi-nguyen-bi-an-20200703152924535.htm">
                                <img className='rounded' src="https://s3img.vcdn.vn/123phim/2020/07/pee-nak-2-van-kiep-thien-thu-di-tu-khong-het-nghiep-15937498464029.png" alt="" />
                            </a>
                        </div>
                        <a target='blank' href="https://danviet.vn/ngoi-den-ky-quai-2-bo-doi-tham-song-so-chet-tai-xuat-nhieu-lan-suyt-chet-vi-loi-nguyen-bi-an-20200703152924535.htm" className='h-11 text-base overflow-hidden text-ellipsis mb-1 hover:text-orange-600' style={{ lineHeight: "20px", WebkitBoxOrient: "vertical", WebkitLineClamp: "2", display: "-webkit-box" }} >Pee Nak 2 - Vạn kiếp thiên thu, đi tu không hết nghiệp!</a>
                    </div>
                    <div>
                        <div className='float-left h-12 w-12 mr-2'>
                            <a target='blank' href="https://www.bachhoaxanh.com/kinh-nghiem-hay/tong-hop-9-phim-ra-rap-thang-7-2023-bom-tan-do-bo-luu-ngay-dung-lo-1536252">
                                <img className='rounded' src="https://s3img.vcdn.vn/123phim/2020/07/loat-phim-kinh-di-khong-the-bo-lo-trong-thang-7-15937470779379.png" alt="" />
                            </a>
                        </div>
                        <a target='blank' href="https://www.bachhoaxanh.com/kinh-nghiem-hay/tong-hop-9-phim-ra-rap-thang-7-2023-bom-tan-do-bo-luu-ngay-dung-lo-1536252" className='h-11 text-base overflow-hidden text-ellipsis mb-1 hover:text-orange-600' style={{ lineHeight: "20px", WebkitBoxOrient: "vertical", WebkitLineClamp: "2", display: "-webkit-box" }} >Loạt phim kinh dị không thể bỏ lỡ trong tháng 7!</a>
                    </div>
                    <div>
                        <div className='float-left h-12 w-12 mr-2'>
                            <a target='blank' href="https://www.saostar.vn/dien-anh/rom-tung-trailer-he-lo-cuoc-song-muu-sinh-ngheo-khac-kho-7663998.html">
                                <img className='rounded' src="https://s3img.vcdn.vn/123phim/2020/06/rom-tung-trailer-he-lo-cuoc-song-cua-dan-choi-so-de-15929959532579.jpg" alt="" />
                            </a>
                        </div>
                        <a target='blank' href="https://www.saostar.vn/dien-anh/rom-tung-trailer-he-lo-cuoc-song-muu-sinh-ngheo-khac-kho-7663998.html" className='h-11 text-base overflow-hidden text-ellipsis mb-1 hover:text-orange-600' style={{ lineHeight: "20px", WebkitBoxOrient: "vertical", WebkitLineClamp: "2", display: "-webkit-box" }} >RÒM tung trailer hé lộ cuộc sống của dân chơi số đề</a>
                    </div>
                    <div>
                        <div className='float-left h-12 w-12 mr-2'>
                            <a target='blank' href="https://kenh14.vn/antebellum-bay-thuc-tai-an-tuong-day-nhung-kinh-di-cho-nao-20200905192433901.chn">
                                <img className='rounded' src="https://s3img.vcdn.vn/123phim/2020/06/antebellum-trailer-cuoi-cung-khong-he-lo-bat-cu-thong-tin-gi-them-15929866818923.jpg" alt="" />
                            </a>
                        </div>
                        <a target='blank' href="https://kenh14.vn/antebellum-bay-thuc-tai-an-tuong-day-nhung-kinh-di-cho-nao-20200905192433901.chn" className='h-11 text-base overflow-hidden text-ellipsis mb-1 hover:text-orange-600' style={{ lineHeight: "20px", WebkitBoxOrient: "vertical", WebkitLineClamp: "2", display: "-webkit-box" }} >Antebellum - Trailer cuối cùng không hé lộ bất cứ thông tin gì thêm</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

let renderReview = () => {
    return (
        <div className='grid grid-cols-6 gap-4 mt-1 !text-left'>
            <div className='col-span-3'>
                <div className='mb-2'>
                    <a target='blank' href="https://hoahoctro.tienphong.vn/review-nang-3-loi-hua-cua-cha-cam-xuc-chan-that-va-de-dang-tim-thay-su-dong-cam-post1218714.tpo">
                        <img className='rounded-md' src="https://s3img.vcdn.vn/123phim/2020/03/review-nang-3-loi-hua-cua-cha-cau-chuyen-tinh-than-cam-dong-cua-kha-nhu-va-kieu-minh-tuan-15834049872311.jpg" alt="" />
                    </a>
                </div>
                <a target='blank' href="https://hoahoctro.tienphong.vn/review-nang-3-loi-hua-cua-cha-cam-xuc-chan-that-va-de-dang-tim-thay-su-dong-cam-post1218714.tpo" className='hover:text-orange-600'>
                    <p className='h-11 text-base font-medium overflow-hidden text-ellipsis mb-1' style={{ lineHeight: "20px", WebkitBoxOrient: "vertical", WebkitLineClamp: "2", display: "-webkit-box" }} >[Review] Nắng 3: Lời Hứa Của Cha - Câu chuyện tình thân cảm động của Khả Như và Kiều Minh Tuấn</p>
                </a>
                <p className='text-gray-600 h-14 text-justify pr-1 mb-2 overflow-hidden text-ellipsis' style={{ lineHeight: "19px", fontSize: "13px", WebkitBoxOrient: "vertical", WebkitLineClamp: "2", display: "-webkit-box" }}>Như hai phần phim trước, Nắng 3 tiếp tục mang đến câu chuyện tình cha, mẹ - con đầy nước mắt của bộ ba nhân vật chính.</p>
            </div>
            <div className='col-span-3'>
                <div className='mb-2'>
                    <a target='blank' href="https://review.siu.edu.vn/vi-VN/san-khau-dien-anh/onward-khi-phep-thuat-la-suc-manh-gan-ket-tinh-than/334/6312?page=6">
                        <img className='rounded-md' src="https://s3img.vcdn.vn/123phim/2020/03/review-onward-khi-phep-thuat-manh-me-nhat-chinh-la-tinh-than-15832047938817.jpg" alt="" />
                    </a>
                </div>
                <a target='blank' href="https://review.siu.edu.vn/vi-VN/san-khau-dien-anh/onward-khi-phep-thuat-la-suc-manh-gan-ket-tinh-than/334/6312?page=6" className='hover:text-orange-600'>
                    <p className='h-11 text-base font-medium overflow-hidden text-ellipsis mb-1' style={{ lineHeight: "20px", WebkitBoxOrient: "vertical", WebkitLineClamp: "2", display: "-webkit-box" }} >[Review] Onward - Khi phép thuật mạnh mẽ nhất chính là tình thân</p>
                </a>
                <p className='text-gray-600 h-14 text-justify pr-1 mb-2 overflow-hidden text-ellipsis' style={{ lineHeight: "19px", fontSize: "13px", WebkitBoxOrient: "vertical", WebkitLineClamp: "2", display: "-webkit-box" }}>Tác phẩm mới nhất của Pixar tiếp tục là câu chuyện hài hước và cảm xúc về tình cảm gia đình.</p>
            </div>
            <div className='col-span-2'>
                <div className='mb-2'>
                    <a target='blank' href="https://kenh14.vn/review-the-invisible-man-kinh-di-gia-tuong-hay-gai-nguoi-loi-canh-tinh-cho-hoi-me-soai-ca-lam-tien-20200226190615168.chn">
                        <img className='rounded-md' src="https://s3img.vcdn.vn/123phim/2020/02/review-ke-vo-hinh-con-gi-dang-so-hon-ke-giet-nguoi-benh-hoan-vo-hinh-15828835353362.jpg" alt="" />
                    </a>
                </div>
                <a target='blank' href="https://kenh14.vn/review-the-invisible-man-kinh-di-gia-tuong-hay-gai-nguoi-loi-canh-tinh-cho-hoi-me-soai-ca-lam-tien-20200226190615168.chn" className='hover:text-orange-600'>
                    <p className='h-11 text-base font-medium overflow-hidden text-ellipsis mb-1' style={{ lineHeight: "20px", WebkitBoxOrient: "vertical", WebkitLineClamp: "2", display: "-webkit-box" }} >[Review] Kẻ Vô Hình - Còn gì đáng sợ hơn kẻ giết người bệnh hoạn vô hình?</p>
                </a>
                <p className='text-gray-600 h-14 text-justify pr-1 mb-4 overflow-hidden text-ellipsis' style={{ lineHeight: "19px", fontSize: "13px", WebkitBoxOrient: "vertical", WebkitLineClamp: "2", display: "-webkit-box" }}>Phiên bản hiện đại của The Invisible Man là một trong những phim kinh dị xuất sắc nhất năm nay.</p>
            </div>
            <div className='col-span-2'>
                <div className='mb-2'>
                    <a target='blank' href="https://stereo.vn/tin-tuc/doi-song/cau-be-ma-hap-dan-ca-nhung-ke-yeu-tim-3129.html">
                        <img className='rounded-md' src="https://s3img.vcdn.vn/123phim/2020/02/review-cau-be-ma-2-ban-trai-cua-be-beo-la-day-chu-dau-xa-15823608583110.jpg" alt="" />
                    </a>
                </div>
                <a target='blank' href="https://stereo.vn/tin-tuc/doi-song/cau-be-ma-hap-dan-ca-nhung-ke-yeu-tim-3129.html" className='hover:text-orange-600'>
                    <p className='h-11 text-base font-medium overflow-hidden text-ellipsis mb-1' style={{ lineHeight: "20px", WebkitBoxOrient: "vertical", WebkitLineClamp: "2", display: "-webkit-box" }} >[Review] Cậu Bé Ma 2 - Bạn trai của 'bé Beo' là đây chứ đâu xa</p>
                </a>
                <p className='text-gray-600 h-14 text-justify pr-1 mb-4 overflow-hidden text-ellipsis' style={{ lineHeight: "19px", fontSize: "13px", WebkitBoxOrient: "vertical", WebkitLineClamp: "2", display: "-webkit-box" }}>BBrahms: The Boy II có những màn hù dọa ấn tượng nhưng cái kết lại không tương xứng với phần mở đầu hứa hẹn.</p>
            </div>
            <div className='col-span-2'>
                <div className='flex flex-col justify-between' style={{ height: "90%" }}>
                    <div>
                        <div className='float-left h-12 w-12 mr-2'>
                            <a target='blank' href="https://kenh14.vn/review-nhim-sonic-gay-me-den-tung-soi-long-vi-ki-xao-qua-dinh-nhung-thu-thi-it-nguoi-thi-nhieu-the-nay-20200219051729233.chn">
                                <img className='rounded' src="https://s3img.vcdn.vn/123phim/2020/02/review-nhim-sonic-cuoi-tha-ga-cung-chang-nhim-sieu-thanh-lay-loi-15821907793369.jpg" alt="" />
                            </a>
                        </div>
                        <a target='blank' href="https://kenh14.vn/review-nhim-sonic-gay-me-den-tung-soi-long-vi-ki-xao-qua-dinh-nhung-thu-thi-it-nguoi-thi-nhieu-the-nay-20200219051729233.chn" className='h-11 text-base overflow-hidden text-ellipsis mb-1 hover:text-orange-600' style={{ lineHeight: "20px", WebkitBoxOrient: "vertical", WebkitLineClamp: "2", display: "-webkit-box" }} >[Review] Nhím Sonic - Cười thả ga cùng chàng nhím siêu thanh lầy lội</a>
                    </div>
                    <div>
                        <div className='float-left h-12 w-12 mr-2'>
                            <a target='blank' href="https://touchcinema.com/danh-gia-phim/thang-nam-hanh-phuc-ta-tung-co">
                                <img className='rounded' src="https://s3img.vcdn.vn/123phim/2020/02/review-thang-nam-hanh-phuc-ta-tung-co-buong-bo-chua-bao-gio-la-viec-de-dang-15817967038683.jpg" alt="" />
                            </a>
                        </div>
                        <a target='blank' href="https://touchcinema.com/danh-gia-phim/thang-nam-hanh-phuc-ta-tung-co" className='h-11 text-base overflow-hidden text-ellipsis mb-1 hover:text-orange-600' style={{ lineHeight: "20px", WebkitBoxOrient: "vertical", WebkitLineClamp: "2", display: "-webkit-box" }} >[Review] Tháng Năm Hạnh Phúc Ta Từng Có - Buông bỏ chưa bao giờ là việc dễ dàng</a>
                    </div>
                    <div>
                        <div className='float-left h-12 w-12 mr-2'>
                            <a target='blank' href="https://kenh14.vn/review-sac-dep-doi-tra-tru-dien-xuat-dan-dien-vien-co-do-co-thom-kich-ban-ngon-ngang-dang-tiec-20200213120045704.chn">
                                <img className='rounded' src="https://s3img.vcdn.vn/123phim/2020/02/review-sac-dep-doi-tra-huong-giang-ke-chuyen-doi-minh-qua-phim-anh-15817958389162.jpg" alt="" />
                            </a>
                        </div>
                        <a target='blank' href="https://kenh14.vn/review-sac-dep-doi-tra-tru-dien-xuat-dan-dien-vien-co-do-co-thom-kich-ban-ngon-ngang-dang-tiec-20200213120045704.chn" className='h-11 text-base overflow-hidden text-ellipsis mb-1 hover:text-orange-600' style={{ lineHeight: "20px", WebkitBoxOrient: "vertical", WebkitLineClamp: "2", display: "-webkit-box" }} >[Review] Sắc Đẹp Dối Trá - Hương Giang kể chuyện đời mình qua phim ảnh</a>
                    </div>
                    <div>
                        <div className='float-left h-12 w-12 mr-2'>
                            <a target='blank' href="https://kenh14.vn/review-birds-of-prey-hoi-chi-em-cay-khe-dc-doi-dau-ac-nhan-song-noi-tam-thich-khoc-tham-vu-tru-marvel-ren-di-la-vua-2020020700000202.chn">
                                <img className='rounded' src="https://s3img.vcdn.vn/123phim/2020/02/review-birds-of-prey-15809871977193.jpg" alt="" />
                            </a>
                        </div>
                        <a target='blank' href="https://kenh14.vn/review-birds-of-prey-hoi-chi-em-cay-khe-dc-doi-dau-ac-nhan-song-noi-tam-thich-khoc-tham-vu-tru-marvel-ren-di-la-vua-2020020700000202.chn" className='h-11 text-base overflow-hidden text-ellipsis mb-1 hover:text-orange-600' style={{ lineHeight: "20px", WebkitBoxOrient: "vertical", WebkitLineClamp: "2", display: "-webkit-box" }} >[Review] Birds of Prey - Màn lột xác hoành tráng của Harley Quinn và DC</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

let renderSales = () => {
    return (
        <div className='grid grid-cols-6 gap-4 mt-1 !text-left'>
            <div className='col-span-3'>
                <div className='mb-2'>
                    <a target='blank' href="https://tix.vn/khuyen-mai/7790-123phim-nhap-ma-bkt-giam-ngay-20k-khi-dat-ve-bac-kim-thang">
                        <img className='rounded-md' src="https://s3img.vcdn.vn/123phim/2019/10/123phim-nhap-ma-bkt-giam-ngay-20k-khi-dat-ve-bac-kim-thang-15712976725554.jpg" alt="" />
                    </a>
                </div>
                <a target='blank' href="https://tix.vn/khuyen-mai/7790-123phim-nhap-ma-bkt-giam-ngay-20k-khi-dat-ve-bac-kim-thang" className='hover:text-orange-600'>
                    <p className='h-11 text-base font-medium overflow-hidden text-ellipsis mb-1' style={{ lineHeight: "20px", WebkitBoxOrient: "vertical", WebkitLineClamp: "2", display: "-webkit-box" }} >[123Phim] NHẬP MÃ 'BKT' - Giảm ngay 20k khi đặt vé Bắc Kim Thang</p>
                </a>
                <p className='text-gray-600 h-14 text-justify pr-1 mb-2 overflow-hidden text-ellipsis' style={{ lineHeight: "19px", fontSize: "13px", WebkitBoxOrient: "vertical", WebkitLineClamp: "2", display: "-webkit-box" }}>123Phim đồng hành cùng phim Việt - Giảm ngay 20k mỗi giao dịch khi đặt vé Bắc Kim Thang trên ứng dụng 123Phim.</p>
            </div>
            <div className='col-span-3'>
                <div className='mb-2'>
                    <a target='blank' href="https://www.megagscinemas.vn/uu-dai/sinh-nhat-mega-gs-san-qua-cuc-da/">
                        <img className='rounded-md' src="https://s3img.vcdn.vn/123phim/2019/08/sinh-nhat-mega-gs-15663933683466.jpg" alt="" />
                    </a>
                </div>
                <a target='blank' href="https://www.megagscinemas.vn/uu-dai/sinh-nhat-mega-gs-san-qua-cuc-da/" className='hover:text-orange-600'>
                    <p className='h-11 text-base font-medium overflow-hidden text-ellipsis mb-1' style={{ lineHeight: "20px", WebkitBoxOrient: "vertical", WebkitLineClamp: "2", display: "-webkit-box" }} >Sinh Nhật Mega GS</p>
                </a>
                <p className='text-gray-600 h-14 text-justify pr-1 mb-2 overflow-hidden text-ellipsis' style={{ lineHeight: "19px", fontSize: "13px", WebkitBoxOrient: "vertical", WebkitLineClamp: "2", display: "-webkit-box" }}>Đến hẹn lại lên, vậy là một năm nữa đã trôi qua và chúng ta lại đến tháng 8, tháng sinh nhật của Mega GS Cinemas.</p>
            </div>
            <div className='col-span-2'>
                <div className='mb-2'>
                    <a target='blank' href="https://tix.vn/khuyen-mai/7741-123phim-tixshop-tro-lai-qua-xin-hon-xua">
                        <img className='rounded-md' src="https://s3img.vcdn.vn/123phim/2019/05/123phim-tixshop-tro-lai-qua-xin-hon-xua-15583511037699.jpg" alt="" />
                    </a>
                </div>
                <a target='blank' href="https://tix.vn/khuyen-mai/7741-123phim-tixshop-tro-lai-qua-xin-hon-xua" className='hover:text-orange-600'>
                    <p className='h-11 text-base font-medium overflow-hidden text-ellipsis mb-1' style={{ lineHeight: "20px", WebkitBoxOrient: "vertical", WebkitLineClamp: "2", display: "-webkit-box" }} >[123Phim] TixShop trở lại, quà ‘xịn’ hơn xưa</p>
                </a>
                <p className='text-gray-600 h-14 text-justify pr-1 mb-4 overflow-hidden text-ellipsis' style={{ lineHeight: "19px", fontSize: "13px", WebkitBoxOrient: "vertical", WebkitLineClamp: "2", display: "-webkit-box" }}>Nhiều Tix làm gì, để tiêu vào TixShop chứ còn chờ chi.</p>
            </div>
            <div className='col-span-2'>
                <div className='mb-2'>
                    <a target='blank' href="https://www.galaxycine.vn/khuyen-mai/xem-phim-hay-say-qua-tang/">
                        <img className='rounded-md' src="https://s3img.vcdn.vn/123phim/2019/05/galaxy-trang-thi-xem-phim-hay-say-qua-tang-15572160162243.jpg" alt="" />
                    </a>
                </div>
                <a target='blank' href="https://www.galaxycine.vn/khuyen-mai/xem-phim-hay-say-qua-tang/" className='hover:text-orange-600'>
                    <p className='h-11 text-base font-medium overflow-hidden text-ellipsis mb-1' style={{ lineHeight: "20px", WebkitBoxOrient: "vertical", WebkitLineClamp: "2", display: "-webkit-box" }} >[Galaxy Tràng Thi] Xem Phim Hay, Say Quà Tặng</p>
                </a>
                <p className='text-gray-600 h-14 text-justify pr-1 mb-4 overflow-hidden text-ellipsis' style={{ lineHeight: "19px", fontSize: "13px", WebkitBoxOrient: "vertical", WebkitLineClamp: "2", display: "-webkit-box" }}>Nhân dịp khai trương Galaxy Tràng Thi, Galaxy Cinema dành tặng các Stars Hà Nội loạt phần quà siêu hấp dẫn.</p>
            </div>
            <div className='col-span-2'>
                <div className='flex flex-col justify-between' style={{ height: "90%" }}>
                    <div>
                        <div className='float-left h-12 w-12 mr-2'>
                            <a target='blank' href="https://www.facebook.com/ZaloPay/posts/2228552880545040/">
                                <img className='rounded' src="https://s3img.vcdn.vn/123phim/2019/04/mua-2-ve-cinestar-qua-zalopay-chi-1-000d-ve-15563607309238.jpg" alt="" />
                            </a>
                        </div>
                        <a target='blank' href="https://www.facebook.com/ZaloPay/posts/2228552880545040/" className='h-11 text-base overflow-hidden text-ellipsis mb-1 hover:text-orange-600' style={{ lineHeight: "20px", WebkitBoxOrient: "vertical", WebkitLineClamp: "2", display: "-webkit-box" }} >Mua 2 Vé Cinestar Qua ZaloPay Chỉ 1.000đ/vé</a>
                    </div>
                    <div>
                        <div className='float-left h-12 w-12 mr-2'>
                            <a target='blank' href="https://www.zenquiz.net/vn/kquiz/lieu-ban-co-phai-la-fan-cung-cua-vu-tru-dien-anh-marvel-UIDity7fbh3Z7oEbE6B">
                                <img className='rounded' src="https://s3img.vcdn.vn/123phim/2019/04/123phim-ban-la-fan-cung-marvel-15562538560772.jpg" alt="" />
                            </a>
                        </div>
                        <a target='blank' href="https://www.zenquiz.net/vn/kquiz/lieu-ban-co-phai-la-fan-cung-cua-vu-tru-dien-anh-marvel-UIDity7fbh3Z7oEbE6B" className='h-11 text-base overflow-hidden text-ellipsis mb-1 hover:text-orange-600' style={{ lineHeight: "20px", WebkitBoxOrient: "vertical", WebkitLineClamp: "2", display: "-webkit-box" }} >[123Phim] Bạn Là Fan Cứng Marvel?</a>
                    </div>
                    <div>
                        <div className='float-left h-12 w-12 mr-2'>
                            <a target='blank' href="https://www.galaxycine.vn/khuyen-mai/galaxy-trang-thi-trai-nghiem-bom-tan-cang-dong-cang-vui/">
                                <img className='rounded' src="https://s3img.vcdn.vn/123phim/2019/04/galaxy-trang-thi-trai-nghiem-bom-tan-cang-dong-cang-vui-15561704693167.jpg" alt="" />
                            </a>
                        </div>
                        <a target='blank' href="https://www.galaxycine.vn/khuyen-mai/galaxy-trang-thi-trai-nghiem-bom-tan-cang-dong-cang-vui/" className='h-11 text-base overflow-hidden text-ellipsis mb-1 hover:text-orange-600' style={{ lineHeight: "20px", WebkitBoxOrient: "vertical", WebkitLineClamp: "2", display: "-webkit-box" }} >[Galaxy Tràng Thi] Trải Nghiệm Bom Tấn Càng Đông Càng Vui</a>
                    </div>
                    <div>
                        <div className='float-left h-12 w-12 mr-2'>
                            <a target='blank' href="https://www.facebook.com/ZaloPay/photos/a.1104211052979234/2157235997676729/?type=3&locale=hi_IN">
                                <img className='rounded' src="https://s3img.vcdn.vn/123phim/2019/04/mua-ve-bhd-star-tren-123phim-bang-zalopay-1-000d-ve-15547979641987.jpg" alt="" />
                            </a>
                        </div>
                        <a target='blank' href="https://www.facebook.com/ZaloPay/photos/a.1104211052979234/2157235997676729/?type=3&locale=hi_IN" className='h-11 text-base overflow-hidden text-ellipsis mb-1 hover:text-orange-600' style={{ lineHeight: "20px", WebkitBoxOrient: "vertical", WebkitLineClamp: "2", display: "-webkit-box" }} >Mua Vé BHD Star Trên 123Phim Bằng ZaloPay: 1.000đ/vé</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

const items = [
    {
        key: '1',
        label: 'Điện Ảnh 24h',
        children: render24h(),
    },
    {
        key: '2',
        label: 'Review',
        children: renderReview(),
    },
    {
        key: '3',
        label: 'Khuyến mãi',
        children: renderSales(),
    },
];

export default function NewsMovie() {
    const [visible, setvisible] = useState(false);
    let handleReadMore = () => {
        if (visible == true) {
            setvisible(false)
        } else {
            setvisible(true)
        }
    }
    return (
        <div className='container newsmovie text-center !mt-10' id='news'>
            <Collapse isOpened={visible}>
                <ConfigProvider
                    theme={{
                        components: {
                            Tabs: {
                                inkBarColor: "#fb4226",
                                itemSelectedColor: '#fb4226',
                                titleFontSize: 20,
                            }
                        },
                    }}
                >
                    <Tabs
                        defaultActiveKey="1"
                        centered items={items}
                        onChange={onChange} />
                </ConfigProvider>
            </Collapse>
            <div className='flex justify-center relative flex-auto' style={{display:`${!visible == true ? "flex" : "none"}`}}>
                <div className='flex newsmovie-fake'>
                    <div className='ant-tabs-tab'>
                        <button className='focus:text-[#fb4226] duration-100 ant-tabs-tab-btn font-normal' style={{textShadow:"0 0 0.25px currentColor",fontSize:"20px"}} >Điện Ảnh 24h</button>
                    </div>
                    <div className='ant-tabs-tab '>
                        <button className='focus:text-[#fb4226] duration-100 ant-tabs-tab-btn font-normal' style={{textShadow:"0 0 0.25px currentColor",fontSize:"20px"}} >Review</button>
                    </div>
                    <div className='ant-tabs-tab '>
                        <button className='focus:text-[#fb4226] duration-100 ant-tabs-tab-btn font-normal' style={{textShadow:"0 0 0.25px currentColor",fontSize:"20px"}} >Khuyến mãi</button>
                    </div>
                </div>
            </div>
            <button onClick={handleReadMore} className='mb-16 py-4 px-6 border-gray-600 text-sm font-medium text-gray-600 rounded mt-14 hover:bg-orange-600 hover:text-white duration-150' style={{ lineHeight: "7px", border: "1px solid" }}>{!visible ? "XEM THÊM" : "RÚT GỌN"}</button>
        </div>
    )
}
