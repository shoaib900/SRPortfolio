import React, { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css"

const About = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div className='container' id='about'>
            <div className='about' >
                <h1 className='aboutus'  > <span className='span'>ABOUT US</span></h1>
                <h2>We believe in offering 100 % customer retention approach to our clients.</h2>
                <p data-aos="fade-up">
                    We collaborate proactively with our customers to provide them with the
                    best available resources and solutions to IT-related market challenges.
                    We are highly competitive, and bring value to our customers by meeting
                    their core interests. Our core principles guide us to help our consumers
                    in every aspect of their IT business journey.
                </p>
            </div>
        </div>
    )
}

export default About
