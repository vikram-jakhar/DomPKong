import React from "react";
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

function Sec4() {
  return (
    <>
      <div className="min-h-[1124px] w-full bg-[#0A0A0A] flex flex-col items-center relative overflow-hidden">
        <div className="absolute w-[182px] md:w-[364px] h-[182px] md:h-[364px] rounded-[50%] bg-[#FDDA60] blur-[180px] top-[10%] md:top-[34%]"></div>
        <h1 className="pt-[44px] text-white text-center font-azo lg:text-[64px] sm:text-[45px] text-[36px] mb-6 not-italic font-normal leading-[108.744%]">
          THE KONGS
        </h1>
        <img
          className="max-w-[786px] translate-y-[-70px] w-full relative z-[2]"
          src={bigkong}
          alt="golden ape"
        />
        <div className="hidden md:block absolute w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] shadow-[0_0_15px_0_#FDDA60] top-0 left-[-2%]">
          <img
            className="rounded-[8px] border-none"
            src={kongred}
            alt="brown ape"
          />
        </div>
        <div className="hidden md:block absolute w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] shadow-[0_0_15px_0_#FDDA60] top-[19%] left-[4%]">
          <img
            className="rounded-[8px] border-none"
            src={konggun}
            alt="loading"
          />
        </div>
        <div className="hidden md:block absolute w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] shadow-[0_0_15px_0_#FDDA60] top-[38%] left-[12%]">
          <img
            className="rounded-[8px] border-none"
            src={kongwhite}
            alt="loading"
          />
        </div>
        <div className="hidden md:block absolute w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] shadow-[0_0_15px_0_#FDDA60] top-[57%] left-[4%]">
          <img
            className="rounded-[8px] border-none"
            src={kongPrince}
            alt="loading"
          />
        </div>
        <div className="hidden md:block absolute w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] shadow-[0_0_15px_0_#FDDA60] bottom-[8%] left-[-2%]">
          <img
            className="rounded-[8px] border-none"
            src={kongcat}
            alt="brown ape"
          />
        </div>
        <div className="hidden md:block absolute w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] top-0 right-[-2%] shadow-[0_0_15px_0_#FDDA60]">
          <img
            className="rounded-[8px] border-none"
            src={HeMan}
            alt="brown ape"
          />
        </div>
        <div className="hidden md:block absolute w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] top-[19%] right-[4%] shadow-[0_0_15px_0_#FDDA60]">
          <img
            className="rounded-[8px] border-none"
            src={Anonymous}
            alt="loading"
          />
        </div>
        <div className="hidden md:block absolute w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] top-[38%] right-[12%] shadow-[0_0_15px_0_#FDDA60]">
          <img className="rounded-[8px] border-none" src={Pac} alt="loading" />
        </div>
        <div className="hidden md:block absolute w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] shadow-[0_0_15px_0_#FDDA60] top-[57%] right-[4%]">
          <img
            className="rounded-[8px] border-none"
            src={Elvis}
            alt="loading"
          />
        </div>
        <div className="hidden md:block absolute w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] shadow-[0_0_15px_0_#FDDA60] bottom-[8%] right-[-2%]">
          <img
            className="rounded-[8px] border-none"
            src={kongred}
            alt="brown ape"
          />
        </div>

        <div className="flex flex-wrap justify-center  md:hidden gap-4 mb-12">
          <div className="w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] shadow-[0_0_15px_0_#FDDA60]">
            <img
              className="rounded-[8px] border-none"
              src={kongred}
              alt="brown ape"
            />
          </div>
          <div className="w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] shadow-[0_0_15px_0_#FDDA60]">
            <img
              className="rounded-[8px] border-none"
              src={konggun}
              alt="loading"
            />
          </div>
          <div className="w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] shadow-[0_0_15px_0_#FDDA60]">
            <img
              className="rounded-[8px] border-none"
              src={kongwhite}
              alt="loading"
            />
          </div>
          <div className="w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] shadow-[0_0_15px_0_#FDDA60]">
            <img
              className="rounded-[8px] border-none"
              src={kongPrince}
              alt="loading"
            />
          </div>
          <div className="w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] shadow-[0_0_15px_0_#FDDA60]">
            <img
              className="rounded-[8px] border-none"
              src={kongcat}
              alt="brown ape"
            />
          </div>
          <div className="w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] shadow-[0_0_15px_0_#FDDA60]">
            <img
              className="rounded-[8px] border-none"
              src={HeMan}
              alt="brown ape"
            />
          </div>
          <div className="w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] shadow-[0_0_15px_0_#FDDA60]">
            <img
              className="rounded-[8px] border-none"
              src={Anonymous}
              alt="loading"
            />
          </div>
          <div className="w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] shadow-[0_0_15px_0_#FDDA60]">
            <img
              className="rounded-[8px] border-none"
              src={Pac}
              alt="loading"
            />
          </div>
          <div className="w-[180px] h-[180px] rounded-[8px] border-4  shadow-[0_0_15px_0_#FDDA60] border-solid border-[#fdda60] ">
            <img
              className="rounded-[8px] border-none"
              src={Elvis}
              alt="loading"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sec4;
