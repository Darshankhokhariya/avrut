import React from 'react';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper';

function Slider() {





    return (
        <>
            <Swiper
                // modules={[Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                // autoplay={{
                //     delay: 2000,
                //     disableOnInteraction: false
                // }}
                // onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}>


                <SwiperSlide>
                    <div className="lg:flex dark:bg-black animation" data-aos="fade-up">
                        <div className=' dark:text-white animation z-10  animate__animated animate__fadeInUp  animate_delay-4s absolute lg:left-[150px] top-[150px] md:left-[270px] ml-20' data-aos="fade-up">
                            <div className='lg:ml-12'>Creating What Matters</div>
                            <div className='lg:text-7xl text-4xl font-semibold leading-tight '>Growing Brands <br />
                                Through Strategy, <br />
                                Innovation And <br />
                                Creativity.</div>
                            <button className='p-3 px-4 mt-5  rounded-full bg-black text-white dark:bg-white  dark:text-black'>Get in Touch</button>
                        </div>
                        <div className='lg:ml-auto lg:w-3/5 relative'>
                            <img src={require('../images/1.jpg')} className=' object-cover  h-[700px] w-full' alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide>
                    <div className="grid lg:grid-cols-2  animate__animated animate__fadeInUp lg:justify-items-center lg:mr-20  sm:grid-cols-1  place-items-center dark:bg-black animation" data-aos="fade-up">
                        <div className='relative  lg:left-full'>
                            <img src={require('../images/2.jpg')} className='lg:h-[650px] lg:w-[700px] object-cover' alt="" />
                        </div>
                        <div className='lg:text-start animate__animated animate__fadeInUp  animate_delay-4s text-center justify-items-center absolute  lg:left-[350px] sm:left-0 dark:text-white animation' data-aos="fade-up">
                            <div className='ml-5'>Creating What Matters</div>
                            <div className='lg:text-7xl font-semibold leading-tight '>Growing Brands <br />
                                Through Strategy, <br />
                                Innovation And <br />
                                Creativity.</div>
                            <button className='p-3 px-4 mt-5 rounded-full bg-black text-white dark:bg-white  dark:text-black'>Get in Touch</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="grid lg:grid-cols-2  animate__animated animate__fadeInUp lg:justify-items-center lg:mr-20  sm:grid-cols-1  place-items-center dark:bg-black animation" data-aos="fade-up">
                        <div className='relative  lg:left-full'>
                            <img src={require('../images/3.jpg')} className='lg:h-[650px] lg:w-[700px] object-cover' alt="" />
                        </div>
                        <div className='lg:text-start animate__animated animate__fadeInUp  animate_delay-4s text-center justify-items-center absolute  lg:left-[350px] sm:left-0 dark:text-white animation' data-aos="fade-up">
                            <div className='ml-5'>Creating What Matters</div>
                            <div className='lg:text-7xl font-semibold leading-tight '>Growing Brands <br />
                                Through Strategy, <br />
                                Innovation And <br />
                                Creativity.</div>
                            <button className='p-3 px-4 mt-5 rounded-full bg-black text-white dark:bg-white  dark:text-black'>Get in Touch</button>
                        </div>
                    </div>
                </SwiperSlide> */}

            </Swiper>
        </>
    )
}

export default Slider