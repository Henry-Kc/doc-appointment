import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Card from './DoctorCard'
import { doctors } from '../data/doctors'

const Doctors = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    // nextArrow: <Arrow />,
    // prevArrow: <Arrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  };
  // function Arrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{ ...style, display: "block", background: "black" }}
  //       onClick={onClick}
  //     />
  //   );
  // }
  return (
    <div id='doctor' className=' bg-clinic-color-bg w-full py-32'>
      <div className=' md:max-w-[740px] lg:max-w-[1280px] m-auto px-4 md:px-0' >
        <div className=' pb-6 flex flex-col items-center justify-center text-center'>
          <h1 className='py-3 text-3xl font-bold'>Most Popular <span className='text-clinic-color'>Doctors</span></h1>
          <p className='text-xl text-[#6D737A]'>Doctor i duh duh rawn thlang tawp rawh.</p>
        </div>

        <Slider {...settings} className='px-20 slider-container'>
          {doctors.map((dr) => {
            console.log(`Card key: ${dr.id}`);
            return (
              <div key={dr.id}>
                <Card doctor={dr} />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>

  )
}

export default Doctors