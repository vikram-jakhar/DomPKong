import React from "react";
import mintimg from "../assets/img/group-bottal.png";

const Sec5 = () => {
    let [count, setCount] = React.useState(1);

    function add() {
        setCount((prevCount) => (prevCount < 70 ? prevCount + 1 : prevCount));
    }
    function minus() {
        setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));
    }
    const setcount = count < 10 ? `0${count}` : count;
    
    return (
        <>
         
        <div className="w-[172px]  h-[173px] blur-[146px] bg-[#FDDA60] absolute top-[-23px] left-[-196px]"></div>
        <div className="w-[296px]  h-[296px] blur-[146px] bg-[#FDDA60] absolute top-[156px] right-[-346px]"></div>

        <div className="max-w-[900px] w-full mx-auto px-3">
            <div className=" grid lg:grid-cols-2 mt-14 pt-12  mb-9">
                <div className=" lg:w-[50%] w-full flex justify-center ">
                    <img src={mintimg} alt="" className="mt-9 mb-5" />
                </div>
                <div className=" w-full lg:mt-0 mt-12 ">
                    <h2 className="text-white font-azo lg:text-[64px] sm:text-[50px] text-[30px] font-normal leading-[108%]">
                        Mint NFT
                    </h2>
                    <div className=" flex justify-between">
                        <div className="pt-9 max-w-[177px] w-full">
                            <h6 className="text-white lg:text-[36px] sm:text-[28px] text-[22px] font-azo font-black leading-[108%]">
                                9999
                            </h6>
                            <p className="text-[16px] pt-3 text-white font-Montserrat font-normal leading-[160%]">
                                of 10,000 minted
                            </p>
                        </div>
                        <div className="pt-9 max-w-[177px] w-full">
                            <h6 className="text-white lg:text-[36px] sm:text-[28px] text-[22px] font-azo font-black leading-[108%] max-w-[177px]">
                                .2 ETH
                            </h6>
                            <p className="text-[16px] pt-3 text-white font-Montserrat font-normal leading-[160%] max-w-[177px]">
                                per NFT
                            </p>
                        </div>
                    </div>
                    <div className=" flex justify-between items-center">
                        <div className="pt-8 max-w-[177px] w-full">
                            <h6 className="text-white lg:text-[36px] sm:text-[28px] text-[22px] font-azo font-black leading-[108%]">
                                Max 9
                            </h6>
                            <p className="text-[16px] pt-3 text-white font-Montserrat font-normal leading-[160%]">
                                NFTs per transaction
                            </p>
                        </div>
                        <div className="pt-8">
                            <h6 className="text-white lg:text-[36px] sm:text-[28px] text-[22px] font-azo font-black leading-[108%]">
                                Max 2
                            </h6>
                            <p className="text-[16px] pt-3 text-white font-Montserrat font-normal leading-[160%]">
                                Transaction per wallet
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start gap-3 pt-12 " >
                        <div className=" hover:bg-[#FDDA60] duration-500  hover:scale-[0.9]  max-w-[75px] w-full h-[65px] rounded bg-white flex justify-center items-center cursor" onClick={minus}>
                            <p className="text-black  text-[36px] font-Montserrat font-black leading-[108%] text-center " >-</p>
                        </div>
                        <div className="sm:max-w-[320px] max-w-[200px] w-full h-[65px]  border-[2px] border-[white] flex items-center justify-center">
                            <p className="text-[36px] text-white font-Montserrat font-black leading-[108%]">{setcount} </p>
                        </div>
                        <div className=" hover:bg-[#FDDA60] duration-500  hover:scale-[0.9] max-w-[75px] w-full h-[65px] rounded bg-white flex justify-center items-center cursor" onClick={add}>
                            <p className="text-black text-[36px] font-Montserrat font-black leading-[108%] text-center ">+</p>
                        </div>
                    </div>
                    <div className="flex justify-center flex-wrap">
                        <button className="lg:text-[24px] hover:scale-105 shadow-[0px_9px_29px_0px_rgba(253,218,96,0.50)] transform-gpu duration-500 transition-transform text-[16px] text-blak font-azo font-normal bg-[#FDDA60] max-w-[494px] w-full h-[61px] mt-7 rounded flex items-center justify-center ">MINT NOW</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Sec5;
