import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import evening from "../assets/img/evening-img.png";
import calender from "../assets/img/nft-img.png";
import mart from "../assets/img/furniture-img.png";
import mae from "../assets/img/fannie-img.png";

function Sec6() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 0,
    easing: 'linear',
    speed: '5000',
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="bg-[#0A0A0A]">
        <div className="max-w-[1164px] px-3 mx-auto py-6">
          <h2 className="text-white text-center font-azo text-[50px] sm:text-[64px] not-italic font-normal leading-[108.744%] pb-[52px]">
            Partners
          </h2>
          <div className="mb-[94px]">
            <Slider {...settings}>
              <div>
                <img className="h-[135px]" src={evening} alt="logo" />
              </div>
              <div>
                <img
                  className="h-[135px] ml-[22px]"
                  src={calender}
                  alt="logo"
                />
              </div>
              <div>
                <img className="h-[135px]" src={mart} alt="logo" />
              </div>
              <div>
                <img className="h-[135px]" src={mae} alt="logo" />
              </div>
              <div>
                <img className="h-[135px]" src={evening} alt="logo" />
              </div>
              <div>
                <img
                  className="h-[135px] ml-[22px]"
                  src={calender}
                  alt="logo"
                />
              </div>
              <div>
                <img className="h-[135px]" src={mart} alt="logo" />
              </div>
              <div>
                <img className="h-[135px]" src={mae} alt="logo" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sec6;