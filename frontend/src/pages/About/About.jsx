import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Scrollbars } from "react-custom-scrollbars";
import HeaderBackground from "../../components/General/Header/HeaderBackground";
import { TextField } from "@mui/material";
import Footer from "../../components/Footer/Footer";
import "./style.css";
const About = () => {
  return (
    <div>
    <div className="vl-1"> </div>
    <div className="vl-2"> </div>
    <div className="vl-3"> </div>
    <div className="vl-4"> </div>
      <Scrollbars style={{ height: "100vh" }}>
        <Navbar />
        <HeaderBackground />

        <Footer />
        </Scrollbars>
    </div>
  )
}

export default About
