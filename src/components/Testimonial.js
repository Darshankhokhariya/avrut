import React from 'react';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper';

function Testimonial() {
    return (
        <>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false
                }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)} >
               

                    {/* items */}

                <SwiperSlide>
                <section className="text-black body-font bg-white dark:bg-black dark:text-white animation" data-aos="zoom-in-up">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                        <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={require('../images/t1.png')}/>      
                            <p className="leading-relaxed text-lg">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware. Man bun next level coloring book skateboard four loko knausgaard. Kitsch keffiyeh master cleanse direct trade indigo juice before they sold out gentrify plaid gastropub normcore XOXO 90's pickled cindigo jean shorts. Slow-carb next level shoindigoitch ethical authentic, yr scenester sriracha forage franzen organic drinking vinegar.</p>
                            <span className="inline-block h-1 w-10 rounded bg-white mt-8 mb-6"></span>
                            <h2 className="text-white font-medium title-font tracking-wider text-sm">Sunny Saurabh</h2>
                            <p className="text-gray-500">Senior Product Designer</p>
                        </div>
                    </div>
                </section>
                </SwiperSlide>
                <SwiperSlide>
                <section className="text-black body-font bg-white dark:bg-black dark:text-white animation" data-aos="zoom-in-up">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                        <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={require('../images/t2.jpg')}/>      
                            <p className="leading-relaxed text-lg">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware. Man bun next level coloring book skateboard four loko knausgaard. Kitsch keffiyeh master cleanse direct trade indigo juice before they sold out gentrify plaid gastropub normcore XOXO 90's pickled cindigo jean shorts. Slow-carb next level shoindigoitch ethical authentic, yr scenester sriracha forage franzen organic drinking vinegar.</p>
                            <span className="inline-block h-1 w-10 rounded bg-white mt-8 mb-6"></span>
                            <h2 className="text-white font-medium title-font tracking-wider text-sm">Bahar S.</h2>
                            <p className="text-gray-500">Senior Product Designer</p>
                        </div>
                    </div>
                </section>
                </SwiperSlide>
                <SwiperSlide>
                <section className="text-black body-font bg-white dark:bg-black dark:text-white animation" data-aos="zoom-in-up"  >
                    <div className="container px-5 py-24 mx-auto">
                        <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                        <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={require('../images/t3.jpg')}/>      
                            <p className="leading-relaxed text-lg">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware. Man bun next level coloring book skateboard four loko knausgaard. Kitsch keffiyeh master cleanse direct trade indigo juice before they sold out gentrify plaid gastropub normcore XOXO 90's pickled cindigo jean shorts. Slow-carb next level shoindigoitch ethical authentic, yr scenester sriracha forage franzen organic drinking vinegar.</p>
                            <span className="inline-block h-1 w-10 rounded bg-white mt-8 mb-6"></span>
                            <h2 className="text-white font-medium title-font tracking-wider text-sm">Xortoloco</h2>
                            <p className="text-gray-500">Senior Product Designer</p>
                        </div>
                    </div>
                </section>
                </SwiperSlide>








                </Swiper>
            </>
            )
}

            export default Testimonial