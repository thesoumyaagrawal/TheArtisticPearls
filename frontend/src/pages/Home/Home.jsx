import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Bgimage from "../../components/HomePage/backgroundimage";
import CardComponent from "../../components/HomePage/CardComponents";
import SideCardImage from "../../components/HomePage/SideCardImage";
import { Scrollbars } from "react-custom-scrollbars";
import Testimonial from "../../components/HomePage/testimonial";
import "./style.css";
import Typewriter from "../../components/HomePage/Typewriter";
import BrushedImpressions from "../../components/HomePage/BrushedImpressions";
const Home = () => {
  return (
    <div>
    <div className="vl-1"> </div>
    <div className="vl-2"> </div>
    <div className="vl-3"> </div>
    <div className="vl-4"> </div>
      <Scrollbars style={{ height: "100vh" }}>
        <Navbar />
        <Bgimage />
        <div className="cards-class">
          <CardComponent
            headingText="How to get into online sessions?"
            contentText="Immerse yourself in the world of creativity from the comfort of your
            space. Our step-by-step guide will navigate you through the seamless
            journey of joining our online sessions. Unleash your artistic
            potential with just a click."
          />
          <CardComponent
            headingText="Want Your Own Custom Work ?"
            contentText="Transform your vision into a masterpiece with our amazing art services. From personalized paintings to unique designs, we bring your imagination to life.  Let's collaborate and create a one-of-a-kind piece that reflects your individuality."
          />
          <CardComponent
            headingText="Gifts Ideas for your Loved Ones"
            contentText="Discover the perfect blend of emotion and artistry with our curated collection – thoughtful and amazing gifts that speak volumes. Unwrap the joy of expression and, surprise your loved ones with a touch of artistic magic."
          />
        </div>
        <SideCardImage />
        <Testimonial />
        <Typewriter />
        <BrushedImpressions />
      
      </Scrollbars>
    </div>
  );
};

export default Home;
