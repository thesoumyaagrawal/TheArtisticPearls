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

import { useNavigate } from "react-router-dom";
const Signup = () => {

  const navigate = useNavigate();
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
  const sendRequest = async (type = "signin") => {
    const res = await axios
      .post(url+`/auth/signup`, {
        name: inputs.name,
        email: inputs.email,
        password: inputs.password,
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    console.log(data);
    return data;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
      sendRequest()
        .then((data)=>alert(data.message))
        .then(()=>navigate("/login"))
        .then((data) => console.log(data));
  };

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
                    name="name"
                    value={inputs.name}
                    onChange={handleChange}
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
                    name="email"
                    value={inputs.email}
                    onChange={handleChange}
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
                    name="password"
                    value={inputs.password}
                    onChange={handleChange}
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
              <button onClick={handleSubmit}>SignUp</button>
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
