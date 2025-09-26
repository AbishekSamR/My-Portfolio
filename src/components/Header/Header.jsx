import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import Menu from "../../assets/menu.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div id="header" className="app-header" ref={menuRef}>
      <header className="header">Portfolio</header>
      <img
        src={Menu}
        alt="Menu Image"
        className={`menu-icon ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      />
      <nav className={`app-nav ${isOpen ? "open" : ""}`}>
        <a href="#home" className="home">
          Home
        </a>
        <a href="#about" className="about">
          About
        </a>
        <a href="#project" className="project">
          Projects
        </a>
        <a href="#contact" className="contact">
          Contact
        </a>
      </nav>
    </div>
  );
};

export default Header;
