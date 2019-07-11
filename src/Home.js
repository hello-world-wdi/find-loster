import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
import About from './About';
import Footer from './Footer';
import map from './img/map2.png';

const Home = () => {
    return(
        <div>
            {/* COVER SECTION */}
            <section className="cover">

                <div className="cover_text">
                    <h1>
                        Find Your Missing People  
                        <br/>
                        Easy Steps !!
                    </h1>
                    <br/>
                    <p>if you're looking for lost or missing  <br/>
                    person just post their information  <br/>
                    if you want to help to find those lost people<br/>
                    click on helper button now !!</p>
                </div>

                <div className="btn-container">
                <a className=" btnStyle more tran3s home-btn"><Link to="/lost">Helper</Link></a>
                <a className="btnStyle more tran3s home-btn"><Link to="/newLostInf">New Lost</Link></a>
                </div>

                <div>
                    <img src={map} className="map" />
                </div>

            </section>
            {/* ABOUT SECTION */}
            <About/>
        
            {/* FOOTER SECTION */}
            <Footer/>
        </div>
    )
}

export default Home; 