import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-copyright">
        Copyright © 2025 Abishek Sam | Built with React & Vite
      </div>

      <div className="footer-nav">
        <a href="#home">Home</a>
        <span>|</span>
        <a href="#about">About</a>
        <span>|</span>
        <a href="#projects">Projects</a>
        <span>|</span>
        <a href="#contact">Contact</a>
      </div>

      <div className="footer-social">
        <a
          href="https://linkedin.com/in/abisheksam"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/AbishekSamR"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a href="mailto:samabishek75@gmail.com">Email</a>
      </div>
    </footer>
  );
};

export default Footer;
