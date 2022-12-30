import React from "react";
import "../../../styles/banner.css";
import "../../../styles/carrouselMain.css";
import "../../../styles/bannerTwo.css";
import "../../../styles/carrouselTwo.css";
import "../../../styles/reviewMain.css";
import "../../../styles/bannerThree.css";

//components
import NavBar from "../../NavBar/NavBar";
import Banner from "./Banner1";
import Carrousel from "./Carrousel"
import BannerTwo from "./Banner2"
import ScrollToTop from "../../ScrollToTop/ScrollToTop";
import CarrouselTwo from "./Carrousel2"
import ReviewMain from "./ReviewMain"
import BannerThree from "./Banner3"


const Main = () => {
  return (
    <>
    <div className="background-index">
    <ScrollToTop />
    <NavBar />
    <Banner />
    <Carrousel />
    <BannerTwo />
    <div className="carrousel-two">
    <CarrouselTwo />
    <ReviewMain/>
    <BannerThree/>
    </div>
    </div>
    </>
  );
};

export default Main;
