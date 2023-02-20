import React from 'react'
import Client from './Client'
import Culture from './Culture'
import Hero from './Hero'
import Sample from './Sample'
import Service from './Service'
import Slider from './Slider'
import Testimonial from './Testimonial'

function Home() {
    return (
        <>        
            <Slider/>
            <Hero/>
            <Sample/>
            {/* <Service/> */}
            <Culture/>
            {/* <Client/> */}
            <Testimonial/>
        </>
    )
}

export default Home