import React from "react";
import HeaderBackground from "../../components/General/Header/HeaderBackground";
import { Scrollbars } from "react-custom-scrollbars";
import { TextField } from "@mui/material";
import Buttons from "../../components/General/Buttons/Buttons";
import Arrowicon from "../../components/SVGIcons/Arrowicon";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import "./style.css";

const Login = () => {
  return (
    <div>
      <div className="vl-1"> </div>
      <div className="vl-3"> </div>
      <Scrollbars style={{ height: "100vh" }}>
        <HeaderBackground />
        <div className="login-background-card">
          <div className="CHeading">
            Hello! Welcome Again to the Artistic Pearls
          </div>
          <div className="login-background-body">
            <TextField
              id="standard-basic"
              label="Enter Your User Name"
              variant="standard"
              fullWidth="true"
            />
          </div>
          <div className="login-background-body">
            <TextField
              id="standard-basic"
              label="Enter Your Password"
              variant="standard"
              fullWidth="true"
            />
          </div>
          <div className="login-background-button-body">
          <Link to="/home">  
          <Buttons
              buttonText="Login Now"
              textColor="#FFFFFF"
              buttonColor="#292F36"
              height="64px"
              width="238px"
              EndIconComponent={() => <Arrowicon color="#FFFFFF" />}
              borderRadius="18px"
            />
          </Link>
          </div>
          <div className="login-background-body-text">Don't Have an account click in the arrow
          <Link to="/signup">  
          <Arrowicon color="#CDA274" />
          </Link>
          </div>
        </div>
        <Footer />
      </Scrollbars>
    </div>
  );
};

export default Login;
