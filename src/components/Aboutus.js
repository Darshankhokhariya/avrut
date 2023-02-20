import Aos from 'aos';
import React from 'react'
import { useEffect } from 'react';
import Nav from './Nav'

function Aboutus() {
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);


    return (
        <> 
            <div className='z-10 animate__animated animate__fadeInUp dark:text-white dark:bg-black'>
                <div className='container lg:px-28 px-10 grid justify-items-center m-auto lg:grid-cols-2 grid-cols-1 py-20  animation' >
                    <div className='flex items-center lg:text-4xl text-2xl font-semibold lg:text-center'>
                        5+ years of successful projects and digital expertise that we can’t wait to share with you.
                    </div>
                    <div className='lg:px-20 mt-10'>
                        Delemont Studio is one of the reckoned Web & Software Development Company in Surat <br />
                        <p className='mt-5'>
                            Rapidly changing business state of affairs and latest technologies being introduced day by day,always raises the requirement for change in development which suits the client requirement and also alter the existing software’s to match the latest technology by not changing the methodologies defined for good software.Delemont Studio also achieved in accomplishing numerous projects by there own end with the help of innovative and enthusiastic employees.
                        </p>
                    </div>
                </div>
                <div className='container lg:px-20 px-5 '>
                    <img src={require('../images/about1.jpg')} className="object-cover h-[600px] w-full" alt="" />
                </div>
            </div>

        </>
    )
}

export default Aboutus