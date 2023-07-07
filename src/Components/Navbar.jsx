import React, {Component} from "react";
import "./Navbar.css";
import { Gradient } from "./Gradient.js";

class Navbar extends Component {
    componentDidMount() {
        const gradient = new Gradient();

        gradient.initGradient('#gradient-canvas');
    }

    render () {
        return (
            <div>
            <div className="navBar">
                <canvas id="gradient-canvas" data-transition-in />
            </div>
            <div className="overlay">
                <ul>
                    <li>HOME</li>
                    <li>PRODUCTS</li>
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                </ul>
            </div>
            </div>
        
        );
    }
}

export default Navbar;