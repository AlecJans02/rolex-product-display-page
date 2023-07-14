import React, { Component } from "react";
import Navbar from "./Components/Navbar.jsx";
import "./contact.css";
import Facebook from "./Components/logos/facebooklogo.png";
import Instagram from "./Components/logos/instagramlogo.png";
import LinkedIn from "./Components/logos/linkedinlogo.webp";
import Pintrest from "./Components/logos/pintrestlogo.png";
import Twitter from "./Components/logos/twitterlogo.png";
import Wechat from "./Components/logos/wechatlogo.webp";
import Weibo from "./Components/logos/weibologo2.png";
import Youku from "./Components/logos/youkulogo5.webp";
import Youtube from "./Components/logos/youtubelogo.webp";

class Contact extends Component {

    
    facebookLink()  {
        window.open("https://www.facebook.com/rolex");
    }

    instagramLink() {
        window.open("https://www.instagram.com/rolex/");
    }

    youtubeLink() {
        window.open("https://www.youtube.com/rolex");
    }

    twitterLink() {
        window.open("https://twitter.com/rolex");
    }

    linkedinLink() {
        window.open("https://www.linkedin.com/company/rolex/");
    }

    pintrestLink() {
        window.open("https://www.pinterest.com.au/rolex/");
    }

    wechatLink() {
        window.open("https://www.wechat.com/");
    }

    weiboLink() {
        window.open("https://weibo.com/rolex");
    }

    youkuLink() {
        window.open("https://bigevent.youku.com/act/rolex");
    }
    


    render () {
        return (
            <div>
                <Navbar />
                <div className="pageTitle">
                    <h1 className="title">CONTACT US</h1>
                </div>
                <div className="contactInfo">
                    <div className="mediaDiv"> 
                    <div className="socialMedia">
                        <div className="mediaType" id="facebook" onClick={this.facebookLink}><img src={Facebook} alt="Logo" className="logoIMG"/></div>
                        <div className="mediaType" id="instagram" onClick={this.instagramLink}><img src={Instagram} alt="Logo" className="logoIMG"/></div>
                        <div className="mediaType" id="youtube" onClick={this.youtubeLink}><img src={Youtube} alt="Logo" className="logoIMG"/></div>
                        <div className="mediaType" id="twitter" onClick={this.twitterLink}><img src={Twitter} alt="Logo" className="logoIMG"/></div>
                        <div className="mediaType" id="linkedin" onClick={this.linkedinLink}><img src={LinkedIn} alt="Logo" className="logoIMG"/></div>
                        <div className="mediaType" id="pintrest" onClick={this.pintrestLink}><img src={Pintrest} alt="Logo" className="logoIMG"/></div>
                        <div className="mediaType" id="wechat" onClick={this.wechatLink}><img src={Wechat} alt="Logo" className="logoIMG"/></div>
                        <div className="mediaType" id="weibo" onClick={this.weiboLink}><img src={Weibo} alt="Logo" className="logoIMG"/></div>
                        <div className="mediaType" id="youku" onClick={this.youkuLink}><img src={Youku} alt="Logo" className="logoIMG"/></div>
                    </div>
                    </div>
                    <div className="storeLocations">
                        <h1 className="locationh1">Store Locations Australia</h1>
                        <table>
                            <tr>
                                <th>Location</th>
                                <th>Name</th>
                                <th>Address</th>
                            </tr>
                            <tr>
                                <td>Adelaide</td>
                                <td>J Farren-Price</td>
                                <td>46 Adelaide Arcade, Adelaide, SA 5000</td>
                            </tr>
                            <tr>
                                <td>Brisbane</td>
                                <td>Langfords Jewellers</td>
                                <td>260 Queen Street, Brisbane, QLD 4000</td>
                            </tr>
                            <tr>
                                <td>Brisbane</td>
                                <td>Langfords Jewellers</td>
                                <td>Hooker Boulevard, Broadbeach, QLD 4218</td>
                            </tr>
                            <tr>
                                <td>Brisbane</td>
                                <td>The Hour Glass</td>
                                <td>171 Edward Street, Brisbane, QLD 4000</td>
                            </tr>
                            <tr>
                                <td>Melbourne</td>
                                <td>Boutellier Montres Rolex</td>
                                <td>70 Collins Street, Melbourne, VIC 3000</td>
                            </tr>
                            <tr>
                                <td>Melbourne</td>
                                <td>Kennedy</td>
                                <td>Shop 444/1341 Dandenong Road, Melbourne, VIC 3148</td>
                            </tr>
                            <tr>
                                <td>Melbourne</td>
                                <td>The Hour Glass</td>
                                <td>252 Collins Street, Melbourne, VIC 3000</td>
                            </tr>
                            <tr>
                                <td>Melbourne</td>
                                <td>Watches Of Switzerland</td>
                                <td>L09 T2 International Terminal, Melbourne, VIC 3045</td>
                            </tr>
                            <tr>
                                <td>Melbourne</td>
                                <td>Watches Of Switzerland</td>
                                <td>247 Collins Street, Melbourne, VIC 3000</td>
                            </tr>
                            <tr>
                                <td>Perth</td>
                                <td>Kennedy</td>
                                <td>Shop 3B/201 Great Easteren Highway, Burswood, WA 6100</td>
                            </tr>
                            <tr>
                                <td>Perth</td>
                                <td>Watches Of Switzerland</td>
                                <td>300 Murray Street, Perth, WA 6000</td>
                            </tr>
                            <tr>
                                <td>Sydney</td>
                                <td>J Farren-Price</td>
                                <td>80 Castlereagh Street, Sydney, NSW 2000</td>
                            </tr>
                            <tr>
                                <td>Sydney</td>
                                <td>Kennedy</td>
                                <td>38-46 Martin Place, Sydney, NSW 2000</td>
                            </tr>
                            <tr>
                                <td>Sydney</td>
                                <td>Kennedy</td>
                                <td>Unit 3/80 Prymont Street, Prymont, NSW 2009</td>
                            </tr>
                            <tr>
                                <td>Sydney</td>
                                <td>Swiss Concept</td>
                                <td>90 Pitt Street, Sydney, NSW 2000</td>
                            </tr>
                            <tr>
                                <td>Sydney</td>
                                <td>Swiss Concept</td>
                                <td>300 Forest Road, Sydney, NSW 2220</td>
                            </tr>
                            <tr>
                                <td>Sydney</td>
                                <td>Swiss Watch Gallery</td>
                                <td>LR 10/T1 International Airport, Sydney, NSW 2020</td>
                            </tr>
                            <tr>
                                <td>Sydney</td>
                                <td>The Hour Glass</td>
                                <td>192 Pitt Street, Sydney, NSW 2000</td>
                            </tr>
                            <tr>
                                <td>Sydney</td>
                                <td>The Hour Glass</td>
                                <td>142 King Street, Sydney, NSW 2000</td>
                            </tr>
                            <tr>
                                <td>Sydney</td>
                                <td>Watches Of Switzerland</td>
                                <td>Shop 3/1 Barangaroo Avenue, Syndey, NSW 2000</td>
                            </tr>
                            </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;