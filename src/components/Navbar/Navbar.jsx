import React, { useEffect, useRef } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import search from "../../assets/search_icon.svg";
import bellIcon from "../../assets/bell_icon.svg";
import profileImg from "../../assets/profile_img.png";
import dropdown from "../../assets/caret_icon.svg";
import { logout } from "../../fireBase";

const Navbar = () => {
  const navRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add("nav-dark");
      } else {
        navRef.current.classList.remove("nav-dark");
      }
    });
  }, []);
  return (
    <div className="navbar" ref={navRef}>
      <div className="navbarleft">
        <img src={logo} alt="Netflix" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbarright">
        <img src={search} alt="icon" className="icons" />
        <p>children</p>
        <img src={bellIcon} alt="icon" className="icons" />
        <div className="navbar-profile">
          <img src={profileImg} alt="icon" className="profile" />
          <img src={dropdown} alt="icon" />
          <div className="dropdown">
            <p onClick={()=>{logout()}}>Sign Out Of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
