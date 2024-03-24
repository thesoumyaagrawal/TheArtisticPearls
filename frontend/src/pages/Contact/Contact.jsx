import React from "react";
import HeaderBackground from "../../components/General/Header/HeaderBackground";
import { Scrollbars } from "react-custom-scrollbars";
import { TextField } from "@mui/material";
import Buttons from "../../components/General/Buttons/Buttons";
import Navbar from "../../components/Navbar/Navbar";
import Arrowicon from "../../components/SVGIcons/Arrowicon";
// import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import "./style.css";
const Contact = () => {
  return (
    <div>
    <div className="vl-1"> </div>
    <div className="vl-3"> </div>
    <Scrollbars style={{ height: "100vh" }}>
    <Navbar />
      <HeaderBackground heading="Contact Me" content="Raise your Queries" />
      <div className="signin-background-card">
        <div className="CHeading">
          We would love to answer your queries
        </div>
        <div className="contact-form">
          <div className="left-contact-form"> hello</div>
          <div className="right-contact-form">
            <div className="signin-block-1">
              <div className="signin-background-body">
                <TextField
                  id="standard-basic"
                  label="Name"
                  variant="standard"
                  fullWidth="true"
                />
              </div>
              <div className="signin-background-body">
                <TextField
                  id="standard-basic"
                  label="Email"
                  variant="standard"
                  fullWidth="true"
                />
              </div>
            </div>
            <div className="signin-block-1">
              <div className="signin-background-body">
                <TextField
                  id="standard-basic"
                  label="Phone"
                  variant="standard"
                  fullWidth="true"
                />
              </div>
              <div className="signin-background-body">
                <TextField
                  id="standard-basic"
                  label="Subject"
                  variant="standard"
                  fullWidth="true"
                />
              </div>
            </div>
          
            <div className="signin-background-body message">
              <TextField
                id="standard-basic"
                label="Message"
                variant="standard"
                fullWidth="true"
              />
         
     
          </div>
          </div>
        </div>
        <div className="signin-background-button-body">
     
            <Buttons
              buttonText="Send Now"
              textColor="#FFFFFF"
              buttonColor="#292F36"
              height="64px"
              width="238px"
              EndIconComponent={() => <Arrowicon color="#FFFFFF" />}
              borderRadius="18px"
            />
      
        </div>
      </div>
      <Footer />
    </Scrollbars>
    </div>
  )
}

export default Contact
