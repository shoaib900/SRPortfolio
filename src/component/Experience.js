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
                    <h3>GamicaCloud Software House Faisalabad <span style={{ fontWeight:"bolder"}}>(Pakistan)</span></h3>
                    <p> <b>2019 - 2021:</b> Work experience as a software Engineer</p>
                </div>

                <div  style={{ textAlign: "start" }} class="animated wow animate__backInRight" data-wow-delay="0.3s">
                    <h3>Macro saor Software House Islamabad <span style={{ fontWeight:"bolder"}}>(Pakistan)</span></h3>
                    <p> <b>2021 - 2022:</b> Work experience as a Senior Software Engineer </p>
                </div>

                <div  style={{ textAlign: "start" }} class="animated wow animate__backInLeft" data-wow-delay="0.3s">
                    <h3>Mettlesol Software House Lahore <span style={{ fontWeight:"bolder"}}>(Pakistan)</span></h3>
                    <p><b>2022 - contineue:</b> Work experience as a Senior software Engineer</p>
                </div>

            </div>
        </div>

    )
}

export default Experience
