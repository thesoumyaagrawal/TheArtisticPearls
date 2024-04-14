/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.css";
import MenuIcon from "../SVGIcons/NavbarIcon/MenuIcon";
import CancelIcon from "../SVGIcons/NavbarIcon/CancelIcon";
import { Link } from "react-router-dom";
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
          <li><a href="/home">Home</a></li>
          <li><Link to="/about">About</Link></li>
          <li><a href="/gallery">Gallery</a></li>
          <li><a href="/product">Products</a></li>
          <li><a href="/contact">Contact Me</a></li>
          <li><a href="/login">LogOut</a></li>
        </ul>
        <ul>
        <li><a href="#">The Artistic Pearls</a></li>
        <li className="hideOnMobile"><Link to="/home">Home</Link></li>
        <li className="hideOnMobile"><Link to="/about">About</Link></li>
        <li className="hideOnMobile"><a href="/gallery">Gallery</a></li>
        <li className="hideOnMobile"><a href="/product">Products</a></li>
        <li className="hideOnMobile"><a href="/contact">Contact Me</a></li>
        <li className="hideOnMobile"><Link to="/login">Logout</Link></li>
        <li className="menu-button" onClick={showSidebar}><a href="#"><MenuIcon /></a></li>
      </ul>
      </nav>
    </div>
  );
};

export default Navbar;
