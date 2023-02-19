import React, { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css"


const Experience = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    return (
        <div className='container' id='experience'>
            <div className='experience' >
                <h3> <span className='span' >EXPERIENCE</span></h3>
                <div data-aos="flip-up" style={{ textAlign: "start" }}>
                    <h3>GamicaCloud Software House Faisalabad <span style={{ color: "green" }}>(Pakistan)</span></h3>
                    <p>2019 - 2021</p>
                    <p>Work experience as a software Engineer</p>
                </div>

                <div data-aos="flip-up" style={{ textAlign: "start" }}>
                    <h3>Macro saor Software House Islamabad <span style={{ color: "green" }}>(Pakistan)</span></h3>
                    <p>2021 - 2022</p>
                    <p>Work experience as a Senior Software Engineer</p>
                </div>

                <div data-aos="flip-up" style={{ textAlign: "start" }}>
                    <h3>Mettlesol Software House Lahore <span style={{ color: "green" }}>(Pakistan)</span></h3>
                    <p>2022 - contineue</p>
                    <p>Work experience as a Senior software Engineer</p>
                </div>

            </div>
        </div>

    )
}

export default Experience
