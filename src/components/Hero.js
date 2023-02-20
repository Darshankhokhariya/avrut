import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function Hero() {

    useEffect(()=>{

            Aos.init({duration: 2000});
    },[]);
    
    return (

        <>

            <div id='myElement' className='overflow-x-hidden' >
                <div className="container mx-auto px-20 animation" data-aos="fade-up">
                    <div className="flex flex-col lg:text-start text-center w-full mt-10 sm:mt-20 lg:ml-3 ">
                        <h2 className="text-xs text-black tracking-widest font-medium title-font mb-1 lg:ml-1 dark:text-white">ABOUT</h2>
                        <h1 className="text-3xl lg:text-6xl  font-medium title-font mb-4 text-gray-900 dark:text-white">Make it simple <br /> but significant</h1>
                    </div>
                </div>
                <div className="container mx-auto px-20 grid lg:grid-cols-3 grid-cols-1 sm:justify-items-center ">
                    <div className="p-4 mb-6 animation" data-aos="fade-down">
                        <h2 className="text-xl font-medium title-font text-gray-900 mt-5 dark:text-white">Our Mission</h2>
                        <p className="text-base leading-relaxed mt-2">To reach all over the world and serve them with best and quality work. All clients should get appropriate and impose work. Delemont always try to come up with inventive things so that clients will get something new and divergent work which they have not thought about before.</p>
                    </div>
                    <div className="p-4  mb-6 animation" data-aos="fade-down">
                        <h2 className="text-xl font-medium title-font text-gray-900 mt-5 dark:text-white">Our Goals</h2>
                        <p className="text-base leading-relaxed mt-2">To increase the satisfaction of customers by providing them with the best quality of work and gain appreciation. simultaneously train employees so that they can improve their skills time to time. To cover the maximum clients all over the world.</p>
                    </div>
                    <div className="p-4  mb-6 animation" data-aos="fade-down">
                        <h2 className="text-xl font-medium title-font text-gray-900 mt-5 dark:text-white">Our Strategy</h2>
                        <p className="text-base leading-relaxed mt-2">To train employees in the best way so that they may provide conventional work. To offer the best and also to ask employees to share there ideas which we can add on to the projects of clients which will help employees to think in 360 degree and also client will get something new and innovative work.</p>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Hero