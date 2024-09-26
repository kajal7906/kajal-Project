import React from "react";
import Navbar from "./Navbar";
import BannerBackground from "./Assets/home-banner-background.png";
import { FiArrowRight } from "react-icons/fi";
import BannerImage from "./Assets/photo1.jpg";
import Card from "./Card.js";


const Home =() =>{
    return(

        <div className="home-container" id="home">
            <Navbar />
            <div className="home-banner-container">
                <div className="home-bannerImage-container" >
                <img src={BannerBackground} alt="" />
                </div>
                <div className="home-text-section">
          <h1 className="primary-heading">
           Women Jackets....
          </h1>
          <p className="primary-text">
           Explore the taste of Trendy at autrageously affordables prices.
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>

            
    )
}
export default Home