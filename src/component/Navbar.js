import React, { useState } from 'react'

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
                    <a className="navbar-brand logo" href="#">SRP</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="#about">About me</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="#experience">Experience</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="#skill">Skill</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="#portfolio">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="#contact">Contact</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
