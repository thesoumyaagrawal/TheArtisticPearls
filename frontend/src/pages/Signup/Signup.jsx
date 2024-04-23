import React from "react";
import HeaderBackground from "../../components/General/Header/HeaderBackground";
import { Scrollbars } from "react-custom-scrollbars";
import { TextField } from "@mui/material";
import Buttons from "../../components/General/Buttons/Buttons";
import Arrowicon from "../../components/SVGIcons/Arrowicon";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import "./style.css";
import { useState } from "react";
import axios from "axios";

const Signup = () => {

  const url = "http://localhost:5454";
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const sendRequest = async (type = "login") => {
    const res = await axios
      .post(url+`/api/user/${type}`, {
        name: inputs.name,
        email: inputs.email,
        password: inputs.password,
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    console.log(data);
    return data;
  };

  const [isSignup, setIsSignup] = useState(false);
  return (
    <div>
      <div className="vl-1"> </div>
      <div className="vl-3"> </div>
      <Scrollbars style={{ height: "100vh" }}>
        <HeaderBackground heading="Sign Up" content="For our new users" />
        <div className="signin-background-card">
          <div className="CHeading">
            We love meeting new people and serving them, Welcome to our small
            Artistic world.
          </div>
          <div className="sign-in-form">
            <div className="left-sign-in-form"> hello</div>
            <div className="right-sign-in-form">
              <div className="signin-block-1">
                <div className="signin-background-body">
                  <TextField
                    id="standard-basic"
                    label="Enter a User Name"
                    variant="standard"
                    fullWidth="true"
                  />
                </div>
                <div className="signin-background-body">
                  <TextField
                    id="standard-basic"
                    label="Enter Your Email-ID"
                    variant="standard"
                    fullWidth="true"
                  />
                </div>
              </div>
              <div className="signin-block-1">
                <div className="signin-background-body">
                  <TextField
                    id="standard-basic"
                    label="Select a Password"
                    variant="standard"
                    fullWidth="true"
                  />
                </div>
                <div className="signin-background-body">
                  <TextField
                    id="standard-basic"
                    label="Confirm Your Password"
                    variant="standard"
                    fullWidth="true"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="signin-background-button-body">
            <Link to="/home">
              <Buttons
                buttonText="signin Now"
                textColor="#FFFFFF"
                buttonColor="#292F36"
                height="64px"
                width="238px"
                EndIconComponent={() => <Arrowicon color="#FFFFFF" />}
                borderRadius="18px"
              />
            </Link>
          </div>
          <div className="signin-background-body-text">
            Already have an account, Click in the arrow.
            <Link to="/login">
              <Arrowicon color="#CDA274" />
            </Link>
          </div>
        </div>
        <Footer />
      </Scrollbars>
    </div>
  );
};

export default Signup;
