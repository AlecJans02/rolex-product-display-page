import React, { Component } from "react";
import Navbar from "./Components/Navbar.jsx";
import "./about.css";
import displayVideo from "./Components/rolexDisplay.webm";
import Oysterwatch from "./Components/watches/oystersteelwatch.png";
import Titaniumwatch from "./Components/watches/rolextitanium.png";
import Everosewatch from "./Components/watches/rolexeverose.png";

class About extends Component {
    render () {
        return (
            <div>
                <Navbar />
                <div className="pageTitle">
                    <h1 className="title">ABOUT ROLEX</h1>
                </div>
                <div className="aboutInfo">
                    <div className="basicInfo">
                        <h1 className="startInfoh1">"ROLEX"</h1>
                        <p className="startInfop">With the invention of the word “Rolex” in 1908, Hans Wilsdorf did not only create a new brand. He immediately affirmed his unique vision of watchmaking and embarked on the quest for excellence that Rolex has unceasingly pursued ever since.</p>
                        <p className="startInfop">Having these exacting standards from the outset meant gradually incorporating all the know-how and every expertise into the manufacture, thus guaranteeing the brand’s autonomy and integrity.</p>
                    </div>
                    <div className="videoDiv">
                        <video autoPlay loop muted className="aboutVideo">
                            <source src={displayVideo} type="video/webm"></source>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="objectiveInfo">
                        <h2 className="objectiveh2">At Rolex, we like questions. Each one is a challenge which stimulates our inventiveness, encourages us to surpass ourselves and opens us to new perspectives.</h2>
                        <p className="objectivep">Each question requires us to take all the time necessary to reach its most apt resolution. As such, every single part of our every single watch can be equated to the sum of particular questions and their respective answers. Here, you will discover a few of those we have asked ourselves and how we went about solving them.</p>
                    </div>
                    <div className="materials">
                        <div className="materialSection">
                            <h1 className="materialH1 materialHeading">Rolex Materials</h1>
                            <div className="materialImg" ><img src={Oysterwatch} alt="Watch" className="matIMG"/></div>
                            <h1 className="materialH1">OYSTER STEEL</h1>
                            <p className="materialP">This is Oystersteel, a high performance steel of grade 904L, produced for Rolex since 1985. A stainless alloy which, once polished, will retain its brilliance and beauty in all circumstances. Among 3,500 industrial grades, only it was worthy of our standards.</p>
                        </div>
                        <div className="materialSection">
                            <div className="materialImg" ><img src={Titaniumwatch} alt="Watch" className="matIMG"/></div>
                            <h1 className="materialH1">RLX TITANIUM</h1>
                            <p className="materialP">This is RLX titanium, an alloy we use for its strength and lightness. It is a special kind of grade 5 titanium which we select with utmost care. Lighter than steel and denser than aluminium, it is also particularly robust and extremely resistant to corrosion.</p>
                        </div>
                        <div className="materialSection">
                            <div className="materialImg" ><img src={Everosewatch} alt="Watch" className="matIMG"/></div>
                            <h1 className="materialH1">EVEROSE</h1>
                            <p className="materialP">This is Everose gold, our exclusive 18 ct pink gold alloy with a unique colour. Introduced in 2005, it is of exceptional radiance and resistance. Developed by our experts, it contains at least 75% gold, 20% copper, as well as palladium and indium.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;