import React from "react";
import { Scrollbars } from "react-custom-scrollbars";
import Navbar from "../../components/Navbar/Navbar";
// import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import HomeSectionCarousel from "../../components/Gallery/HomeSectionCarousel";
import "./style.css";
const Gallery = () => {
  return (
    <div>
     
      <Scrollbars style={{ height: "100vh" }}>
        <Navbar />
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
         <HomeSectionCarousel />
         <HomeSectionCarousel />
         <HomeSectionCarousel />
         <HomeSectionCarousel />
         <HomeSectionCarousel />
         <HomeSectionCarousel />
         </div>

        <Footer />
      </Scrollbars>
    </div>
  );
};

export default Gallery;
