/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.css";
import MenuIcon from "../SVGIcons/NavbarIcon/MenuIcon";
import CancelIcon from "../SVGIcons/NavbarIcon/CancelIcon";

const Navbar = () => {
  const showSidebar= () =>{
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display='flex'
  };
  const hideSidebar= () =>{
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display='none'
  };
  return (
    <div className="navbar">
      <nav>
        <ul className="sidebar">
          <li onClick={hideSidebar}><a href="#"> <CancelIcon /> </a></li>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Gallery</a></li>
          <li><a href="#">Online Classes</a></li>
          <li><a href="#">Contact Me</a></li>
        </ul>
        <ul>
        <li><a href="#">The Artistic Pearls</a></li>
        <li className="hideOnMobile"><a href="#">Home</a></li>
        <li className="hideOnMobile"><a href="#">About</a></li>
        <li className="hideOnMobile"><a href="#">Gallery</a></li>
        <li className="hideOnMobile"><a href="#">Online Classes</a></li>
        <li className="hideOnMobile"><a href="#">Contact Me</a></li>
        <li className="menu-button" onClick={showSidebar}><a href="#"><MenuIcon /></a></li>
      </ul>
      </nav>
    </div>
  );
};

export default Navbar;
