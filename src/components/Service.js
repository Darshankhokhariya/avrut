import Aos from 'aos';
import React, { useEffect } from 'react';


function Service() {
    useEffect(()=>{
        Aos.init({duration: 2000});
},[]);
    return (
        <>
            <section className="text-gray-600 body-font animate__animated animate__fadeInup overflow-x-hidden">
                <div className="container px-20  py-5 mx-auto">
                    <div className="container mx-auto ">
                        <div className="flex flex-col lg:text-center text-center w-full mt-5 mb-10 sm:mt-20 lg:ml-3 ">
                            <h2 className="lg:text-xl text-black tracking-widest font-medium title-font mb-1 lg:ml-1 dark:text-white animation" data-aos="fade-right">SERVICES</h2>
                            <h1 className="lg:text-4xl  text-2xl   font-medium title-font mb-4 text-gray-900 dark:text-white animation"data-aos="fade-left">A Wide Range of <br /> Services</h1>
                        </div>
                    </div>
                    <div className="flex flex-wrap  sm:-m-4 -mx-20 -mb-10 -mt-4 md:space-y-0 space-y-6">
                        <div className="p-4 md:w-1/3 flex flex-col  text-center items-center animation" data-aos="flip-down">
                            <div className="w-20 h-20 shadow-md inline-flex animate-pulse items-center justify-center  rounded-full bg-gray-100 text-black mb-5 flex-shrink-0 animation" data-aos="flip-up">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit size-md str-width-md text-accent"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3 dark:text-white">Designing</h2>
                                <p className="leading-relaxed text-base dark:text-white">Delemont Studio is being the choice of many now as they provide a complete package and also affordable price with well designed, responsive, interactive, customized and mobile friendly website.</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 flex flex-col  text-center items-center animation" data-aos="flip-down">
                            <div className="w-20 h-20 shadow-md inline-flex animate-pulse items-center justify-center rounded-full bg-gray-100 text-black mb-5 flex-shrink-0 animation" data-aos="flip-up">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-sliders size-md str-width-md text-accent"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3 dark:text-white">Development</h2>
                                <p className="leading-relaxed text-base dark:text-white">Delemont Studio is being the choice of many now as they provide a complete package and also affordable price with well designed, responsive, interactive, customized and mobile friendly website.</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 flex flex-col  text-center items-center animation" data-aos="flip-down">
                            <div className="w-20 h-20 shadow-md inline-flex animate-pulse items-center justify-center rounded-full  bg-gray-100 text-black mb-5 flex-shrink-0 animation" data-aos="flip-up">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-feather size-md str-width-md text-accent"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line></svg>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3 dark:text-white ">Branding</h2>
                                <p className="leading-relaxed text-base dark:text-white">Delemont Studio brings a fresh perspective that helps to grow business by branding which is a way of identifying your business.In today's time where everyone is going with digital for promoting or branding.we don't just create strategies but also measure the performance as well..</p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </>
    )
}

export default Service