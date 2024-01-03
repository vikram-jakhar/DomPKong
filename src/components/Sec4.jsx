import React, { useEffect } from "react";
import bigkong from "../assets/img/big-kong.png";
import kongred from "../assets/img/pic-10.png";
import konggun from "../assets/img/pic-7.png";
import kongwhite from "../assets/img/pic-8.png";
import kongPrince from "../assets/img/pic-9.png";
import kongcat from "../assets/img/pic-7.png";
import HeMan from "../assets/img/pic-6.png";
import Anonymous from "../assets/img/pic-5.png";
import Pac from "../assets/img/pic-4.png";
import Elvis from "../assets/img/pic-3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Section3() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 0,
    easing: "linear",
    speed: "5000",
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
    < >
      <div className="md:min-h-[1124px] w-full bg-[#0A0A0A] flex flex-col items-center relative overflow-hidden mt-14">
        {/* main box */}
        <div className="absolute w-[182px] md:w-[364px] h-[182px] md:h-[364px] rounded-[50%] bg-[#FDDA60] blur-[180px] top-[10%] md:top-[34%]"></div>
        <h1
          className="sm:pt-[44px] text-white text-center font-azo text-[45px] sm:text-[64px] not-italic font-normal leading-[108.744%]"
          data-aos="zoom-in"
          data-aos-once="true"
        >
          THE KONGS
        </h1>
        <Slider
          className="min-[1200px]:hidden block max-w-[1416px] mx-auto px-3 w-full mt-6 overflow-hidden"
          data-aos="zoom-in"
          data-aos-once="true"
          {...settings}
        >
          <div className="h-[190px]">
            <img
              className=" h-full rounded-[8px] border-4 border-solid border-[#FDDA60] shadow-[0_0_15px_0_#FDDA60]"
              src={bigkong}
              alt="bigkong" />
          </div>
          <div className="h-[200px]">
            <img
              className="rounded-[8px] border-4 border-solid border-[#FDDA60] shadow-[0_0_15px_0_#FDDA60]"
              src={kongred}
              alt="kongred"
            />
          </div>
          <div className="h-[200px]">
            <img
              className="rounded-[8px] border-4 border-solid border-[#FDDA60] shadow-[0_0_15px_0_#FDDA60]"
              src={konggun}
              alt="konggun"
            />
          </div>
          <div className="h-[200px]">
            <img
              className="rounded-[8px] border-4 border-solid border-[#FDDA60] shadow-[0_0_15px_0_#FDDA60]"
              src={kongwhite}
              alt="kongwhite"
            />
          </div>
          <div className="h-[200px]">
            <img
              className="rounded-[8px] border-4 border-solid border-[#FDDA60] shadow-[0_0_15px_0_#FDDA60]"
              src={kongPrince}
              alt="kongPrince"
            />
          </div>
        </Slider>
        <img
          className="max-w-[786px]  w-full relative z-[2] object-cover"
          data-aos="zoom-in"
          data-aos-once="true"
          src={bigkong}
          alt="bigkong"
        />
        <Slider
          className="min-[1200px]:hidden block max-w-[1416px] mx-auto px-3 w-full mb-6"
          data-aos="zoom-in"
          data-aos-once="true"
          {...settings}
        >
          <div className="h-[200px]">
            <img
              className="rounded-[8px] border-4 border-solid border-[#FDDA60]"
              src={HeMan}
              alt="HeMan"
            />
          </div>
          <div className="h-[200px]">
            <img
              className="rounded-[8px] border-4 border-solid border-[#FDDA60]"
              src={Anonymous}
              alt="Anonymous"
            />
          </div>
          <div className="h-[200px]">
            <img
              className="rounded-[8px] border-4 border-solid border-[#FDDA60]"
              src={Pac}
              alt="Pac"
            />
          </div>
          <div className="h-[200px]]">
            <img
              className="rounded-[8px] border-solid border-4 border-[#FDDA60]"
              src={Elvis}
              alt="Elvis"
            />
          </div>
          <div className="h-[200px]">
            <img
              className="border-[#FDDA60] border-4 rounded"
              src={Pac}
              alt="Pac"
            />
          </div>
        </Slider>
        {/* side boxes left side */}
        <div
          className="hidden min-[1200px]:block absolute w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] shadow-[0_0_15px_0_#FDDA60] top-0 left-[-2%]"
          data-aos="fade-right"
          data-aos-once="true"
        >
          <img
            className="w-full h-full"
            src={kongcat}
            alt="kongcat"
          />
        </div>
        <div
          className="hidden min-[1200px]:block absolute w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] shadow-[0_0_15px_0_#FDDA60] top-[19%] left-[4%]"
          data-aos="fade-right"
          data-aos-once="true">
          <img
            className=" h-full w-full "
            src={bigkong}
            alt="bigkong"
          />
        </div>
        <div
          className="hidden min-[1200px]:block absolute w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] shadow-[0_0_15px_0_#FDDA60] top-[38%] left-[6%] min-[1350px]:left-[12%]"
          data-aos="fade-right"
          data-aos-once="true"
        >
          <img
            className="w-full h-full"
            src={kongred}
            alt="kongred "
          />
        </div>
        <div
          className="hidden min-[1200px]:block absolute w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] shadow-[0_0_15px_0_#FDDA60] top-[57%] left-[4%]"
          data-aos="fade-right"
          data-aos-once="true"
        >
          <img
            className="w-full h-full"
            src={konggun}
            alt="konggun"
          />
        </div>
        <div
          className="hidden min-[1200px]:block absolute w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] shadow-[0_0_15px_0_#FDDA60] bottom-[8%] left-[-2%]"
          data-aos="fade-right"
          data-aos-once="true"
        >
          <img
            className="w-full h-full"
            src={kongwhite}
            alt="kongwhite"
          />
        </div>
        {/* side boxes right side */}
        <div
          className="hidden min-[1200px]:block absolute w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] top-0 right-[-2%]"
          data-aos="fade-left"
          data-aos-once="true"
        >
          <img
            className="w-full h-full"
            src={HeMan}
            alt="HeMan"
          />
        </div>
        <div
          className="hidden min-[1200px]:block absolute w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] top-[19%] right-[4%]"
          data-aos="fade-left"
          data-aos-once="true"
        >
          <img
            className="w-full h-full"
            src={Anonymous}
            alt="Anonymous"
          />
        </div>
        <div
          className="hidden min-[1200px]:block absolute w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] top-[38%] right-[6%] min-[1350px]:right-[12%]"
          data-aos="fade-left"
          data-aos-once="true"
        >
          <img className="w-full h-full" src={Pac} alt="Pac" />
        </div>
        <div
          className="hidden min-[1200px]:block absolute w-[180px] h-[180px] rounded-[8px] border-4 border-[#FDDA60] border-solid shadow-[0_0_15px_0_#FDDA60] top-[57%] right-[4%]"
          data-aos="fade-left"
          data-aos-once="true"
        >
          <img
            className=" h-full"
            src={Elvis}
            alt="Elvis" />
        </div>
        <div
          className="hidden min-[1200px]:block absolute w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] shadow-[0_0_15px_0_#FDDA60] bottom-[8%] right-[-2%]"
          data-aos="fade-left"
          data-aos-once="true"
        >
          <img
            className="w-full h-full"
            src={konggun}
            alt="konggun"
          />
        </div>
      </div>
    </>
  );
}

export default Section3;
