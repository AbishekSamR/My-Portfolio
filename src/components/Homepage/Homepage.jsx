import React from "react";
import "./Homepage.css";
import profile from "../../assets/Profile-Pic-Final.png";

const Homepage = () => {
  return (
    <div id="home" className="home-page">
      <div className="description">
        <span className="hello">Hello,</span>
        <br />
        <span className="content">
          I'm <span className="intro-name">Abishek Sam</span>
          <br />
          Software Engineer
        </span>
      </div>
      <img className="profile-pic" src={profile} alt="Profile Picture" />
    </div>
  );
};

export default Homepage;
