import React from 'react'

function Client() {
    return (
        <div>
            <section className="text-black body-font">
                <div className="container px-10 lg:py-28 py-20 mx-auto flex items-center md:flex-row flex-col overflow-x-hidden">
                    <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full  md:text-left text-center dark:text-white animation" data-aos="fade-in-right">
                        <h2 className="text-xs tracking-widest font-medium title-font mb-1">CLIENTS & FRIENDS</h2>
                        <h1 className="md:text-5xl text-2xl font-medium title-font">We've worked with lovely clients</h1>
                    </div>
                    <div className="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4 animation" data-aos="fade-up-left">
                        <button className="bg-black text-white dark:text-black dark:bg-white  inline-flex py-3 px-5 rounded-full items-center hover:bg-transparent hover:text-black hover:border-2 border-black">
                            Become A Client
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Client