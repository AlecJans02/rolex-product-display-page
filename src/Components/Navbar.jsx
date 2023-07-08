import React, {Component} from "react";
import "./Navbar.css";
import { Gradient } from "./Gradient.js";
import { Link } from "react-router-dom";

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
                    <li><Link className="navLink" to="/">HOME</Link></li>
                    <li>PRODUCTS</li>
                    <li><Link className="navLink" to="/AboutUsPage">ABOUT</Link></li>
                    <li><Link className="navLink" to="/ContactPage">CONTACT</Link></li>
                </ul>
            </div>
            </div>
        
        );
    }
}

export default Navbar;