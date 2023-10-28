import React, { useEffect, useState } from 'react'
import { getListMovie } from '../../../api/api'
import './listMovie.css'
import Slider from 'react-slick';
import "./slick.css";
import "./slicktheme.css";
import MovieCard from './MovieCard';
const settings = {
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  rows: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};
export default function ListMovie() {
 
  const [movieArr, setmovieArr] = useState([]);
  useEffect(() => {
    getListMovie()
      .then((res) => {
        console.log(res);
        setmovieArr(res.data.content)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])
  return (
    <div className='container pt-14 mb-12 ' id='listMovie'>
      <Slider {...settings}>
        {movieArr.map((item) => <MovieCard item={item} />
        )}
      </Slider>
    </div>
  )
}
