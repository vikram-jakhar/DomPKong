import React from "react";
import section5ape from "../assets/img/2Pac-man.png";
import semicircle from "../assets/img/circle12.webp";

function Roadmap() {
  return (
    <>
      <div className="bg-[#0A0A0A] min-h-[1044px] pb-6 xl:pb-0">
        <h2 className="text-white text-center font-azo lg:text-[64px] sm:text-[45px] text-[30px]    not-italic font-normal leading-[108.744%] pt-[94px] pb-[71px]">
          Roadmap
        </h2>
        <div className="max-w-[1234px] mx-auto px-3 min-h-[558px] flex flex-wrap justify-center">
          <div className="w-[100%] xl:w-[36%] pb-6 xl:pb-0 xl:min-h-[558px] flex items-center relative justify-center xl:justify-start">
            <img src={section5ape} alt="ape" />
            <img
              className="absolute left-[-15%] top-[1%] w-[550px] h-[550px] xl:block hidden"
              src={semicircle}
              alt="semicircle"
            />
          </div>
          <div className="w-[100%] xl:w-[64%] relative flex flex-col gap-y-6">
            <div className="flex items-center xl:max-w-[903px] xl:absolute xl:top-[1%] xl:left-[-24%] group">
              <svg
                className="shrink-0 hidden xl:block"
                xmlns="http://www.w3.org/2000/svg"
                width="179"
                height="12"
                viewBox="0 0 179 12"
                fill="none"
              >
                <path
                  className="group-hover:fill-[#FDDA60]"
                  d="M0.666667 6C0.666666 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666666 0.666667 3.05448 0.666667 6ZM167.667 6.00001C167.667 8.94553 170.054 11.3333 173 11.3333C175.946 11.3333 178.333 8.94553 178.333 6.00002C178.333 3.0545 175.946 0.666681 173 0.666681C170.054 0.666681 167.667 3.0545 167.667 6.00001ZM6 7L173 7.00001L173 5.00001L6 5L6 7Z"
                  fill="white"
                />
              </svg>
              <div className="w-[76px] h-[76px] bg-white text-black font-montserrat text-[20px] not-italic font-black rounded-[50%] flex justify-center items-center leading-[108.744%] xl:ml-6 mr-[43px] shrink-0 group-hover:bg-[#FDDA60] group-hover:shadow-[0px_4px_21px_rgba(253,218,96,0.70)]">
                20%
              </div>
              <div className="flex flex-col gap-y-2 xl:max-w-[593px]">
                <h3 className="text-white font-azo text-[20px] not-italic font-normal leading-[108.744%]">
                  Phase 1
                </h3>
                <p className="text-white font-montserrat text-base not-italic font-normal leading-[160%]">
                  Mi amet elementum, posuere tempus odio eu lacinia. Natoque
                  arcu viverra ullamcorper condimentum massa laoree
                </p>
              </div>
            </div>

            <div className="flex items-center w-full xl:max-w-[806px] xl:absolute xl:top-[20%] xl:left-[-8%] group">
              <svg
                className="shrink-0 hidden xl:block"
                xmlns="http://www.w3.org/2000/svg"
                width="109"
                height="12"
                viewBox="0 0 109 12"
                fill="none"
              >
                <path
                  className="group-hover:fill-[#FDDA60]"
                  d="M0.666667 6C0.666666 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666666 0.666667 3.05448 0.666667 6ZM97.6667 6.00001C97.6667 8.94553 100.054 11.3333 103 11.3333C105.946 11.3333 108.333 8.94553 108.333 6.00001C108.333 3.05449 105.946 0.666675 103 0.666675C100.054 0.666675 97.6667 3.05449 97.6667 6.00001ZM6 7L103 7.00001L103 5.00001L6 5L6 7Z"
                  fill="white"
                />
              </svg>
              <div className="w-[76px] h-[76px] bg-white text-black font-montserrat text-[20px] not-italic font-black rounded-[50%] flex justify-center items-center leading-[108.744%] xl:ml-[41px] mr-[43px] shrink-0 group-hover:bg-[#FDDA60] group-hover:shadow-[0px_4px_21px_rgba(253,218,96,0.70)]">
                40%
              </div>
              <div className="flex flex-col gap-y-2 xl:max-w-[593px]">
                <h3 className="text-white font-azo text-[20px] not-italic font-normal leading-[108.744%]">
                  Phase 2
                </h3>
                <p className="text-white font-montserrat text-base not-italic font-normal leading-[160%]">
                  Amet viverra diam netus aenean at mauris, facilisis quis. Urna
                  euismod sed ultricies arcu ullamcorper
                </p>
              </div>
            </div>

            <div className="flex items-center w-full xl:max-w-[779px] xl:absolute xl:top-[41%] xl:left-[-4%] group">
              <svg
                className="shrink-0 hidden xl:block"
                xmlns="http://www.w3.org/2000/svg"
                width="123"
                height="12"
                viewBox="0 0 123 12"
                fill="none"
              >
                <path
                  className="group-hover:fill-[#FDDA60]"
                  d="M0.666667 6C0.666667 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666667 0.666667 3.05448 0.666667 6ZM111.667 6C111.667 8.94552 114.054 11.3333 117 11.3333C119.946 11.3333 122.333 8.94552 122.333 6C122.333 3.05448 119.946 0.666667 117 0.666667C114.054 0.666667 111.667 3.05448 111.667 6ZM6 7H117V5H6V7Z"
                  fill="white"
                />
              </svg>
              <div className="w-[76px] h-[76px] bg-white text-black font-montserrat text-[20px] not-italic font-black rounded-[50%] flex justify-center items-center leading-[108.744%] xl:ml-[54px] mr-[43px] shrink-0 group-hover:bg-[#FDDA60] group-hover:shadow-[0px_4px_21px_rgba(253,218,96,0.70)]">
                60%
              </div>
              <div className="flex flex-col gap-y-2 xl:max-w-[593px]">
                <h3 className="text-white font-azo text-[20px] not-italic font-normal leading-[108.744%]">
                  Phase 3
                </h3>
                <p className="text-white font-montserrat text-base not-italic font-normal leading-[160%]">
                  Hendrerit massa non sed sit. Lobortis in pulvinar lectus ut in
                  elit nibh faucibus mauris.
                </p>
              </div>
            </div>

            <div className="flex items-center w-full xl:max-w-[794px] xl:absolute xl:bottom-[24%] xl:left-[-7%] group">
              <svg
                className="shrink-0 hidden xl:block"
                xmlns="http://www.w3.org/2000/svg"
                width="97"
                height="12"
                viewBox="0 0 97 12"
                fill="none"
              >
                <path
                  className="group-hover:fill-[#FDDA60]"
                  d="M0.666667 6C0.666666 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666666 0.666667 3.05448 0.666667 6ZM85.6667 6.00001C85.6667 8.94553 88.0545 11.3333 91 11.3333C93.9455 11.3333 96.3333 8.94553 96.3333 6.00001C96.3333 3.05449 93.9455 0.666674 91 0.666674C88.0545 0.666674 85.6667 3.05449 85.6667 6.00001ZM6 7L91 7.00001L91 5.00001L6 5L6 7Z"
                  fill="white"
                />
              </svg>
              <div className="w-[76px] h-[76px] bg-white text-black font-montserrat text-[20px] not-italic font-black rounded-[50%] flex justify-center items-center leading-[108.744%] xl:ml-[41px] mr-[43px] shrink-0 group-hover:bg-[#FDDA60] group-hover:shadow-[0px_4px_21px_rgba(253,218,96,0.70)]">
                80%
              </div>
              <div className="flex flex-col gap-y-2 xl:max-w-[593px]">
                <h3 className="text-white font-azo text-[20px] not-italic font-normal leading-[108.744%]">
                  Phase4
                </h3>
                <p className="text-white font-montserrat text-base not-italic font-normal leading-[160%]">
                  Ut egestas lacus nec varius blandit volutpat, malesuada nunc,
                  nisl. Nisl mattis convallis lacus tristique.
                </p>
              </div>
            </div>

            <div className="flex items-center w-full xl:max-w-[857px] xl:absolute xl:bottom-[5%] xl:left-[-19%] group">
              <svg
                className="shrink-0 hidden xl:block"
                xmlns="http://www.w3.org/2000/svg"
                width="133"
                height="12"
                viewBox="0 0 133 12"
                fill="none"
              >
                <path
                  className="group-hover:fill-[#FDDA60]"
                  d="M0.666667 6C0.666666 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666666 0.666667 3.05448 0.666667 6ZM121.667 6.00001C121.667 8.94553 124.054 11.3333 127 11.3333C129.946 11.3333 132.333 8.94553 132.333 6.00001C132.333 3.05449 129.946 0.666677 127 0.666677C124.054 0.666677 121.667 3.05449 121.667 6.00001ZM6 7L127 7.00001L127 5.00001L6 5L6 7Z"
                  fill="white"
                />
              </svg>
              <div className="w-[76px] h-[76px] bg-white text-black font-montserrat text-[20px] not-italic font-black rounded-[50%] flex justify-center items-center leading-[108.744%] xl:ml-[24px] mr-[43px] shrink-0 group-hover:bg-[#FDDA60] group-hover:shadow-[0px_4px_21px_rgba(253,218,96,0.70)]">
                100%
              </div>
              <div className="flex flex-col gap-y-2 xl:max-w-[593px]">
                <h3 className="text-white font-azo text-[20px] not-italic font-normal leading-[108.744%]">
                  Phase 5
                </h3>
                <p className="text-white font-montserrat text-base not-italic font-normal leading-[160%]">
                  Faucibus congue risus nisl dictum. A, viverra malesuada nunc
                  varius. Ut dignissim mauris eu sed nisl neque.
                </p>
              </div>
            </div>
          </div>
         
         <button></button>
        </div>
      </div>
    </>
  );
}

export default Roadmap;