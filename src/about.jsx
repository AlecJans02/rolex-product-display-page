import React, { Component } from "react";
import Navbar from "./Components/Navbar.jsx";
import "./about.css";

class About extends Component {
    render () {
        return (
            <div>
                <Navbar />
                <div className="aboutInfo">
                    <h1>hello</h1>
                </div>
            </div>
        )
    }
}

export default About;