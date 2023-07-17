import React, {Component} from 'react';
import "./Homepage.css";
import Navbar from "./Components/Navbar.jsx";
import Rolex from "./Components/rolex.webm";
import daytonaOyster from "./Components/onchangephotos/daytona/daytonaOyster.png";
import daytonaPlatinum from "./Components/onchangephotos/daytona/daytonaPlatinum.png";
import daytonaWhiteGold from "./Components/onchangephotos/daytona/daytonaWhiteGold.png";
import daytonaYellowGold from "./Components/onchangephotos/daytona/daytonaYellowGold.png";
import dattonaYellowGoldOyster from "./Components/onchangephotos/daytona/daytonaYellowGoldOyster.png";
import oneNineWhite from "./Components/onchangephotos/oneNine/oneNineWhiteGold.png";
import oneNineYellow from "./Components/onchangephotos/oneNine/oneNineYellowGold.png";
import dwellerWhiteGold from "./Components/onchangephotos/dweller/dwellerWhiteGold.png";
import dwellerOysterGold from "./Components/onchangephotos/dweller/dwellerOysterGold.png";
import dwellerEveroseGold from "./Components/onchangephotos/dweller/dwellerEveroseGold.png";
import masterOysterGold from "./Components/onchangephotos/master/masterOysterGold.png";
import masterYellowGold from "./Components/onchangephotos/master/masterYellowGold.png";
import dayDatePlatinum from "./Components/onchangephotos/dayDate/dayDatePlatinum.png";
import dayDateEveroseGold from "./Components/onchangephotos/dayDate/dayDateEveroseGold.png";
import dayDateYellowGold from "./Components/onchangephotos/dayDate/dayDateYellowGold.png";
import explore from "./Components/onchangephotos/explore/explorer.png";
import oyster from "./Components/onchangephotos/oyster/oyster.png";
import yacht from "./Components/onchangephotos/yacht/yacht.png";

class Homepage extends Component {
    componentDidMount () {
        
    }

    daytonaPicture = (event) => {
        console.log(event.target.value);    
    }

    render () {
        return (
            <div className="homePage">
                <Navbar />
                <div className="pageTitle">
                    <h1 className="title">2023 ROLEX COLLECTION</h1>
                </div>
                <div className="displayVideo">
                    <video autoPlay loop muted>
                        <source src={Rolex} type="video/webm"></source>
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="quickInfo">
                    <h1 className="infoH1">BELOW VEIW THE PRESTIGIOUS AND LUXURIOUS ROLEX WATCHES</h1>
                    <p className="infoP">The timeless designs along with the solid craftmanship is what seperates our iconic watches from the rest. For 2023, Rolex are delivering even more extra-ordinary timepieces to keep up with expectation and the brands ambition.
                    To view the collection in full, visit our official website below:  </p>
                    <div className="websiteCard">
                        <a href="https://www.rolex.com/en-us" className="rolexAtag" target="_blank">Rolex.com</a>
                    </div>

                </div>
                <div className="daytona">
                    <div className="daytonaInfo">
                        <h1 className="productTexth1">COSMOGRAPH DAYTONA</h1>
                        <h2 className="productTexth2" >Oyster, 40 mm</h2>
                        <a className="officialProductSite" target="_blank" href="https://www.rolex.com/en-us/watches/new-watches/new-cosmograph-daytona">View official product page</a>
                    </div>
                    <div className="daytonaPictures">
                        <div className="currentDaytonaPhoto" id="currentDaytonaPhoto"><img src={daytonaOyster} alt="Watch" className="matIMG"></img></div>
                        <form className='daytonaForm' onChange={this.daytonaPicture}>
                            <input type="radio" id="ColorA" name="colorInputDaytona" value="ColorA" defaultChecked></input>
                            <input type="radio" id="ColorB" name="colorInputDaytona" value="ColorB"></input>
                            <input type="radio" id="ColorC" name="colorInputDaytona" value="ColorC"></input>
                            <input type="radio" id="ColorD" name="colorInputDaytona" value="ColorD"></input>
                            <input type="radio" id="ColorE" name="colorInputDaytona" value="ColorE"></input>
                        </form>
                    </div>
                </div>
                <div className="oneNine">
                    <div className="oneNineInfo">
                        <h1 className="productTexth1">1908</h1>
                        <h2 className="productTexth2">39 mm, 18 kt Gold, Polished Finish</h2>
                        <a className="officialProductSite" target="_blank" href="https://www.rolex.com/watches/new-watches/new-1908">View official product page</a>
                    </div>
                    <div className="oneNinePictures">
                        <div className="currentOneNinePhoto" id="currentOneNinePhoto"></div>
                        <form className='oneNineForm'>
                            <input type="radio" id="ColorA" name="colorInputNine" value="ColorA" defaultChecked></input>
                            <input type="radio" id="ColorB" name="colorInputNine" value="ColorB"></input>
                        </form>
                    </div>
                </div>
                <div className="yacht">
                    <div className="yachtInfo">
                        <h1 className="productTexth1">YACHT-MASTER 42</h1>
                        <h2 className="productTexth2">Oyster, 42 mm, RLX Titanium</h2>
                        <a className="officialProductSite" target="_blank" href="https://www.rolex.com/watches/new-watches/new-yacht-master-42">View official product page</a>
                    </div>
                    <div className="yachtPictures">
                        <div className="currentYachtPhoto" id="currentYachtPhoto"><img src={yacht} alt="Watch" className="matIMG"></img></div>
                        <form className='yachtForm'>
                            <input type="radio" id="ColorA" name="colorInput" value="ColorA" defaultChecked></input>
                        </form>
                    </div>
                </div>
                <div className="dweller">
                    <div className="dwellerInfo">
                        <h1 className="productTexth1">SKY-DWELLER</h1>
                        <h2 className="productTexth2">Oyster, 42 mm</h2>
                        <a className="officialProductSite" target="_blank" href="https://www.rolex.com/watches/new-watches/new-sky-dweller">View official product page</a>
                    </div>
                    <div className="dwellerPictures">
                        <div className="currentDwellerPhoto" id="currentDwellerPhoto"></div>
                        <form className='dwellerForm'>
                            <input type="radio" id="ColorA" name="colorInputDweller" value="ColorA" defaultChecked></input>
                            <input type="radio" id="ColorB" name="colorInputDweller" value="ColorB"></input>
                            <input type="radio" id="ColorC" name="colorInputDweller" value="ColorC"></input>
                        </form>
                    </div>
                </div>
                <div className="master">
                    <div className="masterInfo">
                        <h1 className="productTexth1">GMT-MASTER II</h1>
                        <h2 className="productTexth2">Oyster, 40 mm, Oystersteel And Yellow Gold</h2>
                        <a className="officialProductSite" target="_blank" href="https://www.rolex.com/watches/new-watches/new-gmt-master-ii">View official product page</a>
                    </div>
                    <div className="masterPictures">
                        <div className="currentMasterPhoto" id="currentMasterPhoto"></div>
                        <form className='masterForm'>
                            <input type="radio" id="ColorA" name="colorInputMaster" value="ColorA" defaultChecked></input>
                            <input type="radio" id="ColorB" name="colorInputMaster" value="ColorB"></input>
                        </form>
                    </div>
                </div>
                <div className="explore">
                    <div className="exploreInfo">
                        <h1 className="productTexth1">EXPLORER 40</h1>
                        <h2 className="productTexth2">Oyster, 40 mm, Oystersteel</h2>
                        <a className="officialProductSite" target="_blank" href="https://www.rolex.com/watches/new-watches/new-explorer-40">View official product page</a>
                    </div>
                    <div className="explorePictures">
                        <div className="currentExplorePhoto" id="currentExplorePhoto"><img src={explore} alt="Watch" className="matIMG"></img></div>
                        <form className='exploreForm'>
                            <input type="radio" id="ColorA" name="colorInput" value="ColorA" defaultChecked></input>
                        </form>
                    </div>
                </div>
                <div className="oyster">
                    <div className="oysterInfo">
                        <h1 className="productTexth1">OYSTER PERPETUAL 41</h1>
                        <h2 className="productTexth2">Oyster, 41 mm, Oystersteel</h2>
                        <a className="officialProductSite" target="_blank" href="https://www.rolex.com/watches/new-watches/new-oyster-perpetual">View official product page</a>
                    </div>
                    <div className="oysterPictures">
                        <div className="currentOysterPhoto" id="currentOysterPhoto"><img src={oyster} alt="Watch" className="matIMG"></img></div>
                        <form className='oysterForm'>
                            <input type="radio" id="ColorA" name="colorInput" value="ColorA" defaultChecked></input>
                        </form>
                    </div>
                </div>
                <div className="dayDate">
                    <div className="dayDateInfo">
                        <h1 className="productTexth1">DAY-DATE 36</h1>
                        <h2 className="productTexth2">Oyster, 36 mm</h2>
                        <a className="officialProductSite" target="_blank" href="https://www.rolex.com/watches/new-watches/new-day-date-36">View official product page</a>
                    </div>
                    <div className="dayDatePictures">
                        <div className="currentDayDatePhoto" id="currentDayDatePhoto"></div>
                        <form className='dayDateForm'>
                            <input type="radio" id="ColorA" name="colorInputDate" value="ColorA" defaultChecked></input>
                            <input type="radio" id="ColorB" name="colorInputDate" value="ColorB"></input>
                            <input type="radio" id="ColorC" name="colorInputDate" value="ColorC"></input>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Homepage;