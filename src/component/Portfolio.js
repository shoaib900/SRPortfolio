import React from "react";
import img1 from "../img/and.PNG";
import img2 from "../img/we.PNG";
import img3 from "../img/p1.png";
import img4 from "../img/p2.png";
import img5 from "../img/p3.png";

const Portfolio = () => {
  return (
    <div>
      <div className="portfolio" id="portfolio">
        <h1>
          <span className="span">Portfolio</span>{" "}
        </h1>
        <div className="designPortfolio">
          <a href="" >
            <img className="port" src={img1} alt="" />
          </a>
          <a href="">
            <img className="port" src={img2} alt="" />
          </a>

          <a target="_blank" href="http://portsite.ultimatefreehost.in/addin/?i=1">
            <img className="port" src={img3} alt="" />
          </a>

          <a target="_blank" href="http://portsite.ultimatefreehost.in/kasha/">
            <img className="port" src={img4} alt="" />
          </a>

          <a target="_blank" href="http://portsite.ultimatefreehost.in/Mega/">
            <img className="port" src={img5} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
