import React from 'react'

function Culture() {
    return (
        <>


            <div className="grid lg:grid-cols-2   sm:grid-cols-1 mt-10  place-items-center">
                <div className="animation" data-aos="fade-right">
                    <img src={require('../images/culture.jpg')} className='lg:h-[650px] lg:w-[700px] object-cover' alt="" />
                </div>
                <div className='mt-5 animation' data-aos="fade-left">
                    <div className='lg:mb-10'>CULTURE</div>
                    <div className='lg:text-7xl text-base font-bold  leading-tight'>Approach <br/>
                        The Unknown</div>
                    <p className='lg:mt-20  sm:text-base'>
                        Delemont Studio is one of the reckoned Web & Software  <br /> Development Company in Surat. Rapidly changing <br /> business state of affairs and latest technologies being <br />  introduced day by day,always raises the requirement for <br /> change in development which suits the client requirement <br /> and also alter the existing software’s to match the latest <br /> technology by not changing the methodologies defined for <br /> good software.
                    </p>
                    <div className=''>
                        <button className='p-2 px-4 mt-5 rounded-full bg-transparent border-2 border-black dark:border-white dark:text-white text-black hover:bg-black hover:text-white'>About Us</button>
                    </div>

                </div>

            </div>


        </>
    )
}

export default Culture