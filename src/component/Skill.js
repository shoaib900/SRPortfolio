import React from "react";
import "aos/dist/aos.css";

import img1 from "../img/web.png";
import img2 from "../img/gd.png";
import img3 from "../img/photoshop.png";
import img4 from "../img/android.png";

const Skill = () => {

  return (
    <div className="container-fluid" id="skill">
      <div className="skill">
        {/* <h1 className="skill1"><span className="span">SKILL</span></h1> */}
        <div class="page-header-wrapper">
                    <div class="container">
                        <div class="page-header text-center animated wow fadeInUp" data-wow-delay="0.3s">
                            <h2>SKILL</h2>
                            <div class="devider"></div>
                        </div>
                    </div>
                </div>

        <div className="mcard">
          <div className="card animated wow animate__backInLeft" data-wow-delay="0.3s">
            <div className="card-body">
              <img src={img1} alt="" height={50} />
              <h2>web Development</h2>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </div>
          <div className="card animated wow animate__backInRight" data-wow-delay="0.3s">
            <div className="card-body">
              <img src={img2} alt="" height={50} />
              <h2>UI/UX Design</h2>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </div>
          <div className="card animated wow animate__backInLeft" data-wow-delay="0.3s">
            <div className="card-body">
              <img src={img3} alt="" height={50} />
              <h2>Adobe Photoshop</h2>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </div>
          <div className="card animated wow animate__backInRight" data-wow-delay="0.3s">
            <div className="card-body">
              <img src={img4} alt="" height={50} />
              <h2>android Development</h2>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
