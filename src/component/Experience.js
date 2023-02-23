import React, { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css"


const Experience = () => {

    return (
        <div className='container' id='experience'>
            <div className='experience' >
                {/* <h3> <span className='span' >EXPERIENCE</span></h3> */}
                <div class="page-header-wrapper">
                    <div class="container">
                        <div class="page-header text-center animated wow fadeInUp" data-wow-delay="0.3s">
                            <h2>EXPERIENCE</h2>
                            <div class="devider"></div>
                        </div>
                    </div>
                </div>

                <div style={{ textAlign: "start" }} class="animated wow animate__backInLeft" data-wow-delay="0.3s">
                    <h3>GamicaCloud Software House Faisalabad <span style={{ color: "green" }}>(Pakistan)</span></h3>
                    <p>2019 - 2021</p>
                    <p>Work experience as a software Engineer</p>
                </div>

                <div  style={{ textAlign: "start" }} class="animated wow animate__backInRight" data-wow-delay="0.3s">
                    <h3>Macro saor Software House Islamabad <span style={{ color: "green" }}>(Pakistan)</span></h3>
                    <p>2021 - 2022</p>
                    <p>Work experience as a Senior Software Engineer</p>
                </div>

                <div  style={{ textAlign: "start" }} class="animated wow animate__backInLeft" data-wow-delay="0.3s">
                    <h3>Mettlesol Software House Lahore <span style={{ color: "green" }}>(Pakistan)</span></h3>
                    <p>2022 - contineue</p>
                    <p>Work experience as a Senior software Engineer</p>
                </div>

            </div>
        </div>

    )
}

export default Experience
