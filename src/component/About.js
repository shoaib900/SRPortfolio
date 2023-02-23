import React, { useEffect } from 'react'
import "aos/dist/aos.css"

const About = () => {

    return (
        <div className='container'  id='about'>
            <div className='about' >
                {/* <h1 className='wow animate__bounce animate__delay-1s' > <span className='span'>ABOUT US</span></h1> */}
                <div class="page-header-wrapper">
                    <div class="container">
                        <div class="page-header text-center animated wow fadeInUp" data-wow-delay="0.3s">
                            <h2>ABOUT ME</h2>
                            <div class="devider"></div>
                        </div>
                    </div>
                </div>

                <h2 class="animated wow animate__backInLeft" data-wow-delay="0.3s">I believe in offering 100 % customer retention approach to my clients.</h2>
                <p class="animated wow animate__backInRight" data-wow-delay="0.3s">
                    I collaborate proactively with our customers to provide them with the
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

