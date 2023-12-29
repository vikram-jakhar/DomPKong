import React, { useEffect, useState } from "react";
import imgloder from '../assets/img/footer-img.png'


const Preloader = () => {
    const [loder, setloader] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setloader(false);
        }, 3500);
    }, []);
    {
        if (loder === true) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "initial";
        }
    }
    return (
        <div>
            {loder ? (
                <section
                    style={{ zIndex: "999999999" }}
                    className="bg-black top-0 start-0 fixed h-full w-full flex flex-col justify-center items-center"
                >
                    <div className="flex justify-center items-center flex-col text-center">
                        <div>
                            <span>
                               <h2 className="xl:text-[64px] lg:text-[56px] text-[30px] sm:text-[40px] font-normal leading-[108%] text-white  text-center   m-auto font-azo ">WELCOME  <br /> TO <span className="text-[#fdda60]"> DomPKong</span></h2>
                                <div className="flex justify-center items-center mt-4">
                               <img src={imgloder} alt="" />
                               </div>
                            </span>
                        </div>
                    </div>
                </section>
            ) : (
                ""
            )}
        </div>
    )
}

export default Preloader