import React from "react";
import img1 from "../img/p1.png";
import img2 from "../img/p2.png";
import img3 from "../img/p3.png";
import img4 from "../img/storifyme.png";
import img5 from "../img/we.PNG";
import img6 from "../img/nns.png";
import img7 from "../img/and.PNG";

const Portfolio = () => {
  return (
    <div>
      <div className="portfolio" id="portfolio">
        {/* <h1><span className="span">Portfolio</span></h1> */}
        <div class="page-header-wrapper">
          <div class="container">
            <div
              class="page-header text-center animated wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <h2 style={{color:"white"}}>PORTFOLIO</h2>
              <div class="devider"></div>
            </div>
          </div>
        </div>

        <ul
          className="page-header text-center"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            listStyle: "none",
          }}
        >
          <li className="animated wow fadeInLeft" data-wow-delay="0.3s">
            <a target="_blank" href="http://portsite.ultimatefreehost.in/addin/?i=1">
              <img className="port" src={img1} alt="" />
            </a>
          </li>
          <li className="animated wow fadeInRight" data-wow-delay="0.3s">
            <a target="_blank" href="http://portsite.ultimatefreehost.in/kasha/">
              <img className="port" src={img2} alt="" />
            </a>
          </li>
          <li className="animated wow fadeInLeft" data-wow-delay="0.3s">
            <a target="_blank" href="http://portsite.ultimatefreehost.in/Mega/" >
              <img className="port" src={img3} alt="" />
            </a>
          </li>
          <li className="animated wow fadeInRight" data-wow-delay="0.3s">
            <a target="_blank" href="https://shoaib900.github.io/storifyme/">
              <img className="port" title="just sample" src={img4} alt="" />
            </a>
          </li>
          <li className="animated wow fadeInRight" data-wow-delay="0.3s">
            <a href="#">
              <img className="port" src={img5} alt="" />
            </a>
          </li>
          <li className="animated wow fadeInRight" data-wow-delay="0.3s">
            <a href="#">
              <img className="port" src={img6} alt="" />
            </a>
          </li>
          <li className="animated wow fadeInRight" data-wow-delay="0.3s">
            <a href="#">
              <img className="port" src={img7} alt="" />
            </a>
          </li>


        </ul>
      </div>
    </div>
  );
};

export default Portfolio;
