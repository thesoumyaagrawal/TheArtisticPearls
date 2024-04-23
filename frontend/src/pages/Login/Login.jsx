import React, { useState } from "react";
import HeaderBackground from "../../components/General/Header/HeaderBackground";
import { Scrollbars } from "react-custom-scrollbars";
import { TextField } from "@mui/material";
//import Buttons from "../../components/General/Buttons/Buttons";
import Arrowicon from "../../components/SVGIcons/Arrowicon";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import {motion} from 'framer-motion';
import { fadeIn } from "../../variants";
import "./style.css";

import axios from "axios";


const Login = () => {

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
    console.log("hello");
    const res = await axios
      .post(url+`/auth/signin`, {
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
        .then((data)=>alert(data))
        .then((data) => console.log(data));
  };

  return (
    <div>
      <div className="vl-1"> </div>
      <div className="vl-3"> </div>
      <Scrollbars style={{ height: "100vh" }}>
        <HeaderBackground />
        <div className="login-background-card">
          <motion.div
          variants={fadeIn("up", 0.7)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3}}
          className="CHeading"
        >
          Hello! Welcome Again to the Artistic Pearls
        </motion.div>
         
          
          <div className="login-background-body">
            <TextField
              id="standard-basic"
              label="Enter Your User Name"
              name="name"
              value={inputs.name}
              onChange={handleChange}
              variant="standard"
              fullWidth="true"
            />
          </div>
          <div className="login-background-body">
            <TextField
              id="standard-basic"
              label="Enter Your Password"
              name="password"
              value={inputs.password}
              onChange={handleChange}
              variant="standard"
              fullWidth="true"
            />
          </div>
          <div className="login-background-button-body">
          <Link to="/home">  
          <button
              // buttonText="Login Now"
              // textColor="#FFFFFF"
              // buttonColor="#292F36"
              // height="64px"
              // width="238px"
              // EndIconComponent={() => <Arrowicon color="#FFFFFF" />}
              // borderRadius="18px"
              onClick={handleSubmit}
            >LOGIN NOW</button>
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
