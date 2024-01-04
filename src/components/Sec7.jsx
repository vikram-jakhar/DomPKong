import React, { useEffect } from 'react'
import img1 from '../assets/img/1st-img.png'
import img2 from '../assets/img/2nd-img.png'
import img3 from '../assets/img/3rd-img.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Sec7 = () => {
    useEffect(() => {
        AOS.init();
      }, [])
      
    return (
        <div className=' overflow-hidden'>
            <div className='max-w-[1140px] mx-auto px-3'>
                <h2 className='text-white lg:text-[64px] sm:text-[45px] text-[30px]   font-azo font-normal leading-[108%] text-center pt-11 pb-4'>Meet The Team</h2>

                <div className='max-w-[1140px] h-1 rounded bg-yellow-300 mt-9 mb-6'></div>
                <div className='flex flex-wrap'>
                    <div className=' w-full md:w-1/2  md:justify-start md:items-start md:flex-start flex-col  flex justify-center items-center  '>
                        <h3 className=' text-white font-bold text-[24px] font-Montserrat leading-[108%]'>Jaylon Schleifer</h3>
                        <p className=' text-white font-normal pt-3 text-[20px] font-Montserrat leading-[108%]'>Carter Septimus</p>
                        <img src={img1} alt="loading" className='rounded-[20px] mt-5 img-g mb-7 ' />
                    </div>
                    <div className='w-full md:w-1/2'>
                        <h2 className=' text-white font-semibold     text-[24px] font-Montserrat leading-[108%]'>@Jaylon Schleifer</h2>
                        <p className=' text-white font-normal pt-3 text-[20px] font-Montserrat leading-[108%]'>Nearly two decades in Business</p>
                        <p className='text-white font-normal text-[16px] font-Montserrat  leading-[160%] pt-9'>Faucibus risus id libero interdum in nisl nibh risus molestie. Gravida purus mauris nulla duis est eleifend. Suspendisse eu iaculis odio sit. Hac orci massa habitasse congue nulla tristique. </p>
                        <p className='text-white font-normal text-[16px] font-Montserrat  leading-[160%] pt-3'>Sem posuere amet, tristique pellentesque quis erat lectus mauris, ultricies. Adipiscing pharetra lectus mauris, mi pharetra magna in tempus nisi. Sed at in nisl feugiat non in amet eu facilisis. </p>
                        <div className='flex gap-4 mt-4' data-aos="fade-left" data-aos-duration="3000">
                            <span className='hover:animate-bounce duration-500  cursor-cursor'>
                                <a href="https://www.facebook.com" target='_blank'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.9461 8.30496C20.936 7.54758 20.7942 6.79773 20.5271 6.08896C20.2954 5.49111 19.9416 4.94816 19.4883 4.49479C19.0349 4.04142 18.4919 3.68761 17.8941 3.45596C17.1944 3.19331 16.4553 3.0513 15.7081 3.03596C14.7461 2.99296 14.4411 2.98096 11.9991 2.98096C9.55709 2.98096 9.24409 2.98096 8.28909 3.03596C7.54225 3.05141 6.80344 3.19343 6.10409 3.45596C5.50615 3.68745 4.96311 4.0412 4.50973 4.49459C4.05634 4.94798 3.70258 5.49102 3.47109 6.08896C3.20792 6.78809 3.06622 7.52707 3.05209 8.27396C3.00909 9.23696 2.99609 9.54196 2.99609 11.984C2.99609 14.426 2.99609 14.738 3.05209 15.694C3.06709 16.442 3.20809 17.18 3.47109 17.881C3.70297 18.4787 4.05699 19.0215 4.51053 19.4747C4.96407 19.9279 5.50716 20.2815 6.10509 20.513C6.80253 20.7862 7.54147 20.9383 8.29009 20.963C9.25309 21.006 9.55809 21.019 12.0001 21.019C14.4421 21.019 14.7551 21.019 15.7101 20.963C16.4572 20.9482 17.1965 20.8066 17.8961 20.544C18.4938 20.312 19.0366 19.9581 19.4899 19.5048C19.9433 19.0515 20.2972 18.5086 20.5291 17.911C20.7921 17.211 20.9331 16.473 20.9481 15.724C20.9911 14.762 21.0041 14.457 21.0041 12.014C21.0021 9.57196 21.0021 9.26196 20.9461 8.30496ZM11.9931 16.602C9.43909 16.602 7.37009 14.533 7.37009 11.979C7.37009 9.42496 9.43909 7.35596 11.9931 7.35596C13.2192 7.35596 14.3951 7.84302 15.262 8.71C16.129 9.57698 16.6161 10.7529 16.6161 11.979C16.6161 13.2051 16.129 14.3809 15.262 15.2479C14.3951 16.1149 13.2192 16.602 11.9931 16.602ZM16.8001 8.26296C16.6585 8.26309 16.5183 8.2353 16.3874 8.18117C16.2566 8.12704 16.1377 8.04764 16.0375 7.94751C15.9374 7.84738 15.858 7.72849 15.8039 7.59765C15.7498 7.4668 15.722 7.32656 15.7221 7.18496C15.7221 7.04346 15.75 6.90334 15.8041 6.77262C15.8583 6.64189 15.9376 6.5231 16.0377 6.42305C16.1377 6.32299 16.2565 6.24363 16.3873 6.18948C16.518 6.13533 16.6581 6.10746 16.7996 6.10746C16.9411 6.10746 17.0812 6.13533 17.2119 6.18948C17.3427 6.24363 17.4614 6.32299 17.5615 6.42305C17.6616 6.5231 17.7409 6.64189 17.7951 6.77262C17.8492 6.90334 17.8771 7.04346 17.8771 7.18496C17.8771 7.78096 17.3951 8.26296 16.8001 8.26296Z" fill="#FDDA60" />
                                        <path d="M11.9932 14.9821C13.6517 14.9821 14.9962 13.6376 14.9962 11.9791C14.9962 10.3206 13.6517 8.97607 11.9932 8.97607C10.3347 8.97607 8.99023 10.3206 8.99023 11.9791C8.99023 13.6376 10.3347 14.9821 11.9932 14.9821Z" fill="#FDDA60" />
                                    </svg>
                                </a>
                            </span>
                            <span className='hover:animate-bounce duration-500  cursor-cursor'  data-aos="fade-left" data-aos-duration="3000">
                                <a href="https://www.twitter.com" target='_blank'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.6435 4.93708C22.8085 5.30708 21.9115 5.55708 20.9685 5.67008C21.9415 5.08787 22.6694 4.17154 23.0165 3.09208C22.1023 3.63507 21.1018 4.01727 20.0585 4.22208C19.3569 3.47294 18.4276 2.9764 17.4148 2.80955C16.4021 2.6427 15.3626 2.81487 14.4577 3.29933C13.5529 3.78379 12.8333 4.55344 12.4107 5.48878C11.988 6.42412 11.886 7.47283 12.1205 8.47208C10.2682 8.37907 8.45613 7.89763 6.80192 7.05898C5.14772 6.22034 3.68834 5.04324 2.5185 3.60408C2.1185 4.29408 1.8885 5.09408 1.8885 5.94608C1.88805 6.71307 2.07693 7.46832 2.43838 8.14481C2.79982 8.8213 3.32266 9.39812 3.9605 9.82408C3.22078 9.80054 2.49737 9.60066 1.8505 9.24108V9.30108C1.85043 10.3768 2.22253 11.4195 2.90368 12.2521C3.58483 13.0847 4.53307 13.656 5.5875 13.8691C4.90128 14.0548 4.18184 14.0821 3.4835 13.9491C3.781 14.8747 4.3605 15.6841 5.14087 16.264C5.92124 16.8439 6.86342 17.1653 7.8355 17.1831C6.18533 18.4785 4.14739 19.1812 2.0495 19.1781C1.67788 19.1782 1.30658 19.1565 0.9375 19.1131C3.06698 20.4823 5.54584 21.2089 8.0775 21.2061C16.6475 21.2061 21.3325 14.1081 21.3325 7.95208C21.3325 7.75208 21.3275 7.55008 21.3185 7.35008C22.2298 6.69105 23.0164 5.87497 23.6415 4.94008L23.6435 4.93708Z" fill="#FDDA60" />
                                    </svg>
                                </a>

                            </span>

                        </div>
                    </div>
                </div>
                <div className='max-w-[1140px] h-1 rounded bg-yellow-300 mt-6    mb-6'></div>
                <div className='flex flex-wrap'>
                    <div className='w-full md:w-1/2  md:justify-start md:items-start md:flex-start flex-col  flex justify-center items-center '>
                        <h3 className=' text-white font-bold text-[24px] font-Montserrat leading-[108%]'>Talan Passaquindici Arcand</h3>
                        <p className=' text-white font-normal pt-3 text-[20px] font-Montserrat leading-[108%]'>Jakob Ekstrom Bothman</p>
                        <img src={img2} alt="loading" className='rounded-[20px] mt-5 img-g mb-7' />
                    </div>
                    <div className='w-full md:w-1/2'>
                        <h2 className=' text-white font-semibold     text-[24px] font-Montserrat leading-[108%]'>@Talan Passaquindici Arcand</h2>
                        <p className=' text-white font-normal pt-3 text-[20px] font-Montserrat leading-[108%]'>Invester  & International Top Model</p>
                        <p className='text-white font-normal text-[16px] font-Montserrat  leading-[160%] pt-9'>Neque hendrerit lectus neque molestie facilisis. Faucibus arcu eget facilisis nisl id ultricies. Aliquet eget scelerisque posuere habitant mauris quis ridiculus rutrum consectetur. </p>
                        <p className='text-white font-normal text-[16px] font-Montserrat  leading-[160%] pt-3'>Pretium vitae nunc proin nullam turpis eu blandit. Nibh ultricies gravida vestibulum nec ultricies. Eleifend egestas non nunc, nisl tristique adipiscing non diam fermentum.  </p>
                        <div className='flex gap-4 mt-4'  data-aos="fade-left" data-aos-duration="3000">
                            <span className='hover:animate-bounce duration-500  cursor-cursor'>
                                <a href="https://www.facebook.com" target='_blank'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.9461 8.30496C20.936 7.54758 20.7942 6.79773 20.5271 6.08896C20.2954 5.49111 19.9416 4.94816 19.4883 4.49479C19.0349 4.04142 18.4919 3.68761 17.8941 3.45596C17.1944 3.19331 16.4553 3.0513 15.7081 3.03596C14.7461 2.99296 14.4411 2.98096 11.9991 2.98096C9.55709 2.98096 9.24409 2.98096 8.28909 3.03596C7.54225 3.05141 6.80344 3.19343 6.10409 3.45596C5.50615 3.68745 4.96311 4.0412 4.50973 4.49459C4.05634 4.94798 3.70258 5.49102 3.47109 6.08896C3.20792 6.78809 3.06622 7.52707 3.05209 8.27396C3.00909 9.23696 2.99609 9.54196 2.99609 11.984C2.99609 14.426 2.99609 14.738 3.05209 15.694C3.06709 16.442 3.20809 17.18 3.47109 17.881C3.70297 18.4787 4.05699 19.0215 4.51053 19.4747C4.96407 19.9279 5.50716 20.2815 6.10509 20.513C6.80253 20.7862 7.54147 20.9383 8.29009 20.963C9.25309 21.006 9.55809 21.019 12.0001 21.019C14.4421 21.019 14.7551 21.019 15.7101 20.963C16.4572 20.9482 17.1965 20.8066 17.8961 20.544C18.4938 20.312 19.0366 19.9581 19.4899 19.5048C19.9433 19.0515 20.2972 18.5086 20.5291 17.911C20.7921 17.211 20.9331 16.473 20.9481 15.724C20.9911 14.762 21.0041 14.457 21.0041 12.014C21.0021 9.57196 21.0021 9.26196 20.9461 8.30496ZM11.9931 16.602C9.43909 16.602 7.37009 14.533 7.37009 11.979C7.37009 9.42496 9.43909 7.35596 11.9931 7.35596C13.2192 7.35596 14.3951 7.84302 15.262 8.71C16.129 9.57698 16.6161 10.7529 16.6161 11.979C16.6161 13.2051 16.129 14.3809 15.262 15.2479C14.3951 16.1149 13.2192 16.602 11.9931 16.602ZM16.8001 8.26296C16.6585 8.26309 16.5183 8.2353 16.3874 8.18117C16.2566 8.12704 16.1377 8.04764 16.0375 7.94751C15.9374 7.84738 15.858 7.72849 15.8039 7.59765C15.7498 7.4668 15.722 7.32656 15.7221 7.18496C15.7221 7.04346 15.75 6.90334 15.8041 6.77262C15.8583 6.64189 15.9376 6.5231 16.0377 6.42305C16.1377 6.32299 16.2565 6.24363 16.3873 6.18948C16.518 6.13533 16.6581 6.10746 16.7996 6.10746C16.9411 6.10746 17.0812 6.13533 17.2119 6.18948C17.3427 6.24363 17.4614 6.32299 17.5615 6.42305C17.6616 6.5231 17.7409 6.64189 17.7951 6.77262C17.8492 6.90334 17.8771 7.04346 17.8771 7.18496C17.8771 7.78096 17.3951 8.26296 16.8001 8.26296Z" fill="#FDDA60" />
                                        <path d="M11.9932 14.9821C13.6517 14.9821 14.9962 13.6376 14.9962 11.9791C14.9962 10.3206 13.6517 8.97607 11.9932 8.97607C10.3347 8.97607 8.99023 10.3206 8.99023 11.9791C8.99023 13.6376 10.3347 14.9821 11.9932 14.9821Z" fill="#FDDA60" />
                                    </svg>
                                </a>
                            </span>
                            <span className='hover:animate-bounce duration-500  cursor-cursor'>
                                <a href="" target='_blank'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.6435 4.93708C22.8085 5.30708 21.9115 5.55708 20.9685 5.67008C21.9415 5.08787 22.6694 4.17154 23.0165 3.09208C22.1023 3.63507 21.1018 4.01727 20.0585 4.22208C19.3569 3.47294 18.4276 2.9764 17.4148 2.80955C16.4021 2.6427 15.3626 2.81487 14.4577 3.29933C13.5529 3.78379 12.8333 4.55344 12.4107 5.48878C11.988 6.42412 11.886 7.47283 12.1205 8.47208C10.2682 8.37907 8.45613 7.89763 6.80192 7.05898C5.14772 6.22034 3.68834 5.04324 2.5185 3.60408C2.1185 4.29408 1.8885 5.09408 1.8885 5.94608C1.88805 6.71307 2.07693 7.46832 2.43838 8.14481C2.79982 8.8213 3.32266 9.39812 3.9605 9.82408C3.22078 9.80054 2.49737 9.60066 1.8505 9.24108V9.30108C1.85043 10.3768 2.22253 11.4195 2.90368 12.2521C3.58483 13.0847 4.53307 13.656 5.5875 13.8691C4.90128 14.0548 4.18184 14.0821 3.4835 13.9491C3.781 14.8747 4.3605 15.6841 5.14087 16.264C5.92124 16.8439 6.86342 17.1653 7.8355 17.1831C6.18533 18.4785 4.14739 19.1812 2.0495 19.1781C1.67788 19.1782 1.30658 19.1565 0.9375 19.1131C3.06698 20.4823 5.54584 21.2089 8.0775 21.2061C16.6475 21.2061 21.3325 14.1081 21.3325 7.95208C21.3325 7.75208 21.3275 7.55008 21.3185 7.35008C22.2298 6.69105 23.0164 5.87497 23.6415 4.94008L23.6435 4.93708Z" fill="#FDDA60" />
                                    </svg>
                                </a>

                            </span>

                        </div>
                    </div>
                </div>
                <div className='max-w-[1140px] h-1 rounded bg-yellow-300 mt-6    mb-6'></div>
                <div className='flex flex-wrap'>
                    <div className='w-full md:w-1/2  md:justify-start md:items-start md:flex-start flex-col  flex justify-center items-center '>
                        <h3 className=' text-white font-bold text-[24px] font-Montserrat leading-[108%]'>Alfonso Franci</h3>
                        <p className=' text-white font-normal pt-3 text-[20px] font-Montserrat leading-[108%]'>Alfonso Dokidis</p>
                        <img src={img3} alt="loading" className='rounded-[20px] mt-5 img-g mb-14' />
                    </div>
                    <div className='w-full md:w-1/2'>
                        <h2 className=' text-white font-semibold     text-[24px] font-Montserrat leading-[108%]'>@Alfonso Franci</h2>
                        <p className=' text-white font-normal pt-3 text-[20px] font-Montserrat leading-[108%]'>Nearly two decades in Business</p>
                        <p className='text-white font-normal text-[16px] font-Montserrat  leading-[160%] pt-9'>A ut sagittis, purus sit integer suspendisse lacus quam auctor. Interdum venenatis, sed ligula purus erat. A hac faucibus blandit euismod molestie amet nibh scelerisque.  </p>
                        <p className='text-white font-normal text-[16px] font-Montserrat  leading-[160%] pt-3'>Fermentum aliquam fames suscipit scelerisque integer mauris sollicitudin. Tellus mattis egestas molestie elementum, elementum. Urna, in molestie ac quam nisl orci mattis.  </p>
                        <div className='flex gap-4 mt-4'>
                            <span className='hover:animate-bounce duration-500  cursor-cursor'>
                                <a href=" https://www.facebook.com" target='_blank'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.9461 8.30496C20.936 7.54758 20.7942 6.79773 20.5271 6.08896C20.2954 5.49111 19.9416 4.94816 19.4883 4.49479C19.0349 4.04142 18.4919 3.68761 17.8941 3.45596C17.1944 3.19331 16.4553 3.0513 15.7081 3.03596C14.7461 2.99296 14.4411 2.98096 11.9991 2.98096C9.55709 2.98096 9.24409 2.98096 8.28909 3.03596C7.54225 3.05141 6.80344 3.19343 6.10409 3.45596C5.50615 3.68745 4.96311 4.0412 4.50973 4.49459C4.05634 4.94798 3.70258 5.49102 3.47109 6.08896C3.20792 6.78809 3.06622 7.52707 3.05209 8.27396C3.00909 9.23696 2.99609 9.54196 2.99609 11.984C2.99609 14.426 2.99609 14.738 3.05209 15.694C3.06709 16.442 3.20809 17.18 3.47109 17.881C3.70297 18.4787 4.05699 19.0215 4.51053 19.4747C4.96407 19.9279 5.50716 20.2815 6.10509 20.513C6.80253 20.7862 7.54147 20.9383 8.29009 20.963C9.25309 21.006 9.55809 21.019 12.0001 21.019C14.4421 21.019 14.7551 21.019 15.7101 20.963C16.4572 20.9482 17.1965 20.8066 17.8961 20.544C18.4938 20.312 19.0366 19.9581 19.4899 19.5048C19.9433 19.0515 20.2972 18.5086 20.5291 17.911C20.7921 17.211 20.9331 16.473 20.9481 15.724C20.9911 14.762 21.0041 14.457 21.0041 12.014C21.0021 9.57196 21.0021 9.26196 20.9461 8.30496ZM11.9931 16.602C9.43909 16.602 7.37009 14.533 7.37009 11.979C7.37009 9.42496 9.43909 7.35596 11.9931 7.35596C13.2192 7.35596 14.3951 7.84302 15.262 8.71C16.129 9.57698 16.6161 10.7529 16.6161 11.979C16.6161 13.2051 16.129 14.3809 15.262 15.2479C14.3951 16.1149 13.2192 16.602 11.9931 16.602ZM16.8001 8.26296C16.6585 8.26309 16.5183 8.2353 16.3874 8.18117C16.2566 8.12704 16.1377 8.04764 16.0375 7.94751C15.9374 7.84738 15.858 7.72849 15.8039 7.59765C15.7498 7.4668 15.722 7.32656 15.7221 7.18496C15.7221 7.04346 15.75 6.90334 15.8041 6.77262C15.8583 6.64189 15.9376 6.5231 16.0377 6.42305C16.1377 6.32299 16.2565 6.24363 16.3873 6.18948C16.518 6.13533 16.6581 6.10746 16.7996 6.10746C16.9411 6.10746 17.0812 6.13533 17.2119 6.18948C17.3427 6.24363 17.4614 6.32299 17.5615 6.42305C17.6616 6.5231 17.7409 6.64189 17.7951 6.77262C17.8492 6.90334 17.8771 7.04346 17.8771 7.18496C17.8771 7.78096 17.3951 8.26296 16.8001 8.26296Z" fill="#FDDA60" />
                                        <path d="M11.9932 14.9821C13.6517 14.9821 14.9962 13.6376 14.9962 11.9791C14.9962 10.3206 13.6517 8.97607 11.9932 8.97607C10.3347 8.97607 8.99023 10.3206 8.99023 11.9791C8.99023 13.6376 10.3347 14.9821 11.9932 14.9821Z" fill="#FDDA60" />
                                    </svg>
                                </a>
                            </span>
                            <span className='hover:animate-bounce duration-500  cursor-cursor'>
                                <a href="https://www.twitter.com" target='_blank'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.6435 4.93708C22.8085 5.30708 21.9115 5.55708 20.9685 5.67008C21.9415 5.08787 22.6694 4.17154 23.0165 3.09208C22.1023 3.63507 21.1018 4.01727 20.0585 4.22208C19.3569 3.47294 18.4276 2.9764 17.4148 2.80955C16.4021 2.6427 15.3626 2.81487 14.4577 3.29933C13.5529 3.78379 12.8333 4.55344 12.4107 5.48878C11.988 6.42412 11.886 7.47283 12.1205 8.47208C10.2682 8.37907 8.45613 7.89763 6.80192 7.05898C5.14772 6.22034 3.68834 5.04324 2.5185 3.60408C2.1185 4.29408 1.8885 5.09408 1.8885 5.94608C1.88805 6.71307 2.07693 7.46832 2.43838 8.14481C2.79982 8.8213 3.32266 9.39812 3.9605 9.82408C3.22078 9.80054 2.49737 9.60066 1.8505 9.24108V9.30108C1.85043 10.3768 2.22253 11.4195 2.90368 12.2521C3.58483 13.0847 4.53307 13.656 5.5875 13.8691C4.90128 14.0548 4.18184 14.0821 3.4835 13.9491C3.781 14.8747 4.3605 15.6841 5.14087 16.264C5.92124 16.8439 6.86342 17.1653 7.8355 17.1831C6.18533 18.4785 4.14739 19.1812 2.0495 19.1781C1.67788 19.1782 1.30658 19.1565 0.9375 19.1131C3.06698 20.4823 5.54584 21.2089 8.0775 21.2061C16.6475 21.2061 21.3325 14.1081 21.3325 7.95208C21.3325 7.75208 21.3275 7.55008 21.3185 7.35008C22.2298 6.69105 23.0164 5.87497 23.6415 4.94008L23.6435 4.93708Z" fill="#FDDA60" />
                                    </svg>
                                </a>

                            </span>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Sec7