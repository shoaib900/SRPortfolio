import React, { useState } from 'react'
import Logo from "../img/tlab.png"

const Navbar = () => {
    const [color, setColor] = useState(false)

    const changeColor = () => {
        if (window.scrollY >= 1) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener("scroll", changeColor);
    return (
        <div>
            <nav className={color ? "fixed-top nav-bg navbar navbar-expand-lg bg" : "fixed-top navbar navbar-light navbar-expand-lg"}>
                <div className="container">
                    <a className="navbar-brand logo" href="#"><img src={Logo} style={{height:"40px"}} alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="#home">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="#about">ABOUT ME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="#experience">EXPERIENCE</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="#skill">SKILL</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="#portfolio">PORTFOLIO</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="#contact">CONTACT</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
