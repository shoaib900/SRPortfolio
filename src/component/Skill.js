import React from 'react'
import img from "../img/download.jpg";

const Skill = () => {
    return (
        <div className='container-fluid' id='skill'>
            <div className='skill' >
                <h1 className='skill1'> <span className='span'>SKILL</span></h1>
                <div className='block'>
                    <div><img src={img} alt="" height={200} />
                    </div>
                    <div style={{ width: "100%", margin: "10px", textAlign: "start" }}>
                        <p>Web development</p>
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped progress-bar-animated bg-s" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "100%" }}>100%</div>
                        </div>

                        <p>Android development</p>
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped progress-bar-animated bg-s" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "100%" }}>100%</div>
                        </div>

                        <p>UI/UX Designing</p>
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped progress-bar-animated bg-s" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "90%" }}>90%</div>
                        </div>

                        <p>Adobe Photoshop</p>
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped progress-bar-animated bg-s" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "75%" }}>75%</div>
                        </div>


                        <p>Game development</p>
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped progress-bar-animated bg-s" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "60%" }}>60%</div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Skill
