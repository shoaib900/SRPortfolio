import React from "react";
import Typical from 'react-typical'

const Home = () => {
    return (
        <div>
            <div className="home" id="home">
                <div className="boxname">
                    <h1>Hi!</h1>
                    <h1>I am Shoaib Raza from <span style={{ color: "rgb(228, 25, 55)", fontWeight: "bolder",textDecoration:"underline" }}>PAKISTAN</span> </h1>
                    <h2>I am <Typical className="typical"
                        steps={['Web Developer', 1000,
                            'App Developer!', 1000,
                            'Freelancer', 1000,
                            'UI/UX Designer', 1000]}
                        loop={Infinity}
                        wrapper="b"
                    /></h2>
                </div>
                <img className="imgHover" src={require("../img/hi.gif")} alt="" height={190} />
                <div>
                </div>


            </div>
        </div>
    );
};

export default Home;
