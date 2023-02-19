import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import img1 from "../img/web.png";
import img2 from "../img/gd.png";
import img3 from "../img/photoshop.png";
import img4 from "../img/android.png";

const Skill = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="container-fluid" id="skill">
      <div className="skill">
        <h1 className="skill1">
          <span className="span">SKILL</span>
        </h1>

        <div className="mcard">
          <div className="card" data-aos="flip-up">
            <div className="card-body">
              <img src={img1} alt="" height={50} />
              <h2>web Development</h2>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </div>
          <div className="card" data-aos="flip-up">
            <div className="card-body">
              <img src={img2} alt="" height={50} />
              <h2>UI/UX Design</h2>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </div>
          <div className="card" data-aos="flip-up">
            <div className="card-body">
              <img src={img3} alt="" height={50} />
              <h2>Adobe Photoshop</h2>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </div>
          <div className="card" data-aos="flip-up">
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
