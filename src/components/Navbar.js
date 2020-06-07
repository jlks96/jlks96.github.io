import React, { Component } from 'react';
import '../css/navbar.css';


class Navbar extends Component {

    render() {
        return (
            <div className="container-fluid">
                <nav className="navbar navbar-expand-md navbar-dark navbar-custom fixed-top">
                    <a className="navbar-brand bg-transparent" href="/">
                        <img className="d-inline-block align-top" src={require("../img/logo.png")} style={{ height: "30px", width: "30px" }} alt=""></img>
                    </a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#about-me">About Me</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#skills">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#work-experience">Work Experience</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#education">Education</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#projects">Selected Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact-me">Contact Me</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div >
        );
    }

}


export default Navbar;