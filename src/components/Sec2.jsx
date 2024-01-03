import React from "react";
import boats from "../assets/img/boats-imgs.png";
const Sec2 = () => {
    return (
        <div className="max-w-[1140px] mx-auto px-3 flex flex-wrap lg:pt-[129px] pt-9">
            <div className="w-full  lg:w-1/2  justify-center items-center lg:items-start flex flex-col">
                <h2 className="lg:text-[64px] sm:text-[45px] text-[36px] font-normal lg:mb-0 mb-3 leading-[108%] text-white font-azo">
                    About
                </h2>
                <p className="text-base font-normal text-white max-w-[506px] font-Montserrat">
                    Turpis et tortor vel pharetra nibh. Mauris nisl sit vitae viverra amet
                    et. Erat nam molestie. Vitae mollis lacus senectus mattis nisl. Porta
                    , adipiscing sed mus diam amet, ac sed tellus.{" "}
                </p>
            </div>
            <div className="w-full  lg:w-1/2  relative mb-10 lg:mt-0 mt-14">
                <img className="w-full" src={boats} alt="secthree" />
                <div className="w-[216px] h-[216px] bg-[#FDDA60] blur-[131px] absolute bottom-2 hidden md:block z-[-2] left-[23%]"></div>
            </div>
        </div>
    );
};

export default Sec2;