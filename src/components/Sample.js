import Aos from 'aos';
import React from 'react';
import { useEffect } from 'react';

function Sample() {
    useEffect(()=>{
        Aos.init({duration: 2000});
},[]);
    return (
        <>
            <div className=''>
                <section className="text-gray-600 dark:text-white body-font">
                    <div className="container px-20 py-7 mx-auto">
                        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                            <div className="p-4 md:w-1/3 sm:mb-0 mb-6 animation" data-aos="zoom-in">
                                <div className="rounded-lg h-64 overflow-hidden">
                                    <img alt="content" className="object-cover object-center h-full w-full hover:scale-110 transition ease-in duration-300" src={require('../images/s1.png')} />
                                </div>
                                <h1 className='mt-4'>UI/UX Design</h1>
                                <h2 className="text-xl font-medium title-font text-gray-900 mt-2 dark:text-white">Emulsion</h2>
                            </div>
                            <div className="p-4 md:w-1/3 sm:mb-0 mb-6 animation" data-aos="zoom-in">
                                <div className="rounded-lg h-64 overflow-hidden">
                                    <img alt="content" className="object-cover object-center h-full w-full hover:scale-110 transition ease-in duration-300" src={require('../images/s2.jpg')} />
                                </div>
                                <h1 className='mt-4'>UI/UX Design</h1>
                                <h2 className="text-xl font-medium title-font text-gray-900 mt-2 dark:text-white">In Powered Lights</h2>
                            </div>
                            <div className="p-4 md:w-1/3 sm:mb-0 mb-6 animation"  data-aos="zoom-in">
                                <div className="rounded-lg h-64 overflow-hidden">
                                    <img alt="content" className="object-cover object-center h-full w-full hover:scale-110 transition ease-in duration-300" src={require('../images/s3.jpg')} />
                                </div>
                                <h1 className='mt-4'>UI/UX Design</h1>
                                <h2 className="text-xl font-medium title-font text-gray-900 mt-2 dark:text-white">Money Tap</h2>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="text-gray-600 body-font dark:text-white">
                    <div className="container px-20 py-7 mx-auto">
                        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                            <div className="p-4 md:w-1/3 sm:mb-0 mb-6 animation"  data-aos="zoom-in">
                                <div className="rounded-lg h-64 overflow-hidden">
                                    <img alt="content" className="object-cover object-center h-full w-full hover:scale-110 transition ease-in duration-300" src={require('../images/s4.jpg')} />
                                </div>
                                <h1 className='mt-4'>Web Design</h1>
                                <h2 className="text-xl font-medium title-font text-gray-900 mt-2 dark:text-white">Interviewer.AI</h2>
                            </div>
                            <div className="p-4 md:w-1/3 sm:mb-0 mb-6 animation"  data-aos="zoom-in">
                                <div className="rounded-lg h-64 overflow-hidden">
                                    <img alt="content" className="object-cover object-center h-full w-full hover:scale-110 transition ease-in duration-300" src={require('../images/s5.jpg')} />
                                </div>
                                <h1 className='mt-4'>Web Design</h1>
                                <h2 className="text-xl font-medium title-font text-gray-900 mt-2 dark:text-white">Art Stock
                                    Exchange</h2>
                            </div>
                            <div className="p-4 md:w-1/3 sm:mb-0 mb-6 animation"  data-aos="zoom-in">
                                <div className="rounded-lg h-64 overflow-hidden">
                                    <img alt="content" className="object-cover object-center h-full w-full hover:scale-110 transition ease-in duration-300" src={require('../images/s6.jpg')} />
                                </div>
                                <h1 className='mt-4'>Web Design</h1>
                                <h2 className="text-xl font-medium title-font text-gray-900 mt-2 dark:text-white">Care.Com</h2>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="text-gray-600 body-font dark:text-white">
                    <div className="container px-20 py-7 mx-auto">
                        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                            <div className="p-4 md:w-1/3 sm:mb-0 mb-6 animation"  data-aos="zoom-in">
                                <div className="rounded-lg h-64 overflow-hidden">
                                    <img alt="content" className="object-cover object-center h-full w-full hover:scale-110 transition ease-in duration-300" src={require('../images/s7.png')} />
                                </div>
                                <h1 className='mt-4'>Web Design</h1>
                                <h2 className="text-xl font-medium title-font text-gray-900 mt-2 dark:text-white">Enspyre Digital</h2>
                            </div>
                            <div className="p-4 md:w-1/3 sm:mb-0 mb-6 animation"  data-aos="zoom-in">
                                <div className="rounded-lg h-64 overflow-hidden">
                                    <img alt="content" className="object-cover object-center h-full w-full hover:scale-110 transition ease-in duration-300" src={require('../images/s8.png')} />
                                </div>
                                <h1 className='mt-4'>UI/UX Design</h1>
                                <h2 className="text-xl font-medium title-font text-gray-900 mt-2 dark:text-white">Outflue</h2>
                            </div>
                            <div className="p-4 md:w-1/3 sm:mb-0 mb-6 animation"  data-aos="zoom-in" >
                                <div className="rounded-lg h-64 overflow-hidden">
                                    <img alt="content" className="object-cover object-center h-full w-full hover:scale-110 transition ease-in duration-300" src={require('../images/s9.png')} />
                                </div>
                                <h1 className='mt-4'>Web Design</h1>
                                <h2 className="text-xl font-medium title-font text-gray-900 mt-2 dark:text-white">Momu Bank</h2>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Sample