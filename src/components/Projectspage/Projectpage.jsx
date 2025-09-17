import React from "react";
import "./Projectpage.css";
import StockPrediction from "../../assets/StockPricePredition.jpg";
import CustomerPrediction from "../../assets/CustomerChumPrediction.jpg";
import MovieManiac from "../../assets/MovieManiac.png";
import RPS from "../../assets/RockPaperScissors.jpg";
import TaskTrek from "../../assets/TaskTrek.jpg";

const Projectpage = () => {
  return (
    <div id="project" className="project-page">
      <div className="project-heading">
        <h1>Projects</h1>
        <p>
          Here are some of my featured projects that showcase my skills in
          programming, machine learning, and web development. <br /> Each
          project reflects my passion for building practical, creative, and
          impactful solutions
        </p>
      </div>
      {/* <div className="project-buttons-container">
        <button className="project-button-all">All</button>
        <button className="project-buttons">Machine Learning</button>
        <button className="project-buttons">Web Development</button>
      </div> */}
      <div className="project-images-container">
        <a
          href="https://colab.research.google.com/drive/1JCXuT_H-cOiHz2_v84ddtpodO1BmNH7q?usp=sharing"
          target="_blank"
          className="project-card"
        >
          <img
            src={StockPrediction}
            alt="Stock Price Prediction"
            className="project-images"
          />
          <div className="project-overlay">
            <p>Click to view the project</p>
          </div>
        </a>
        <a
          href="https://colab.research.google.com/drive/1J5B_qas1zwsH08VjgQo6vv8jbD-BXfXA?usp=sharing"
          target="_blank"
          className="project-card"
        >
          <img
            src={CustomerPrediction}
            alt="Customer Chum Prediction"
            className="project-images"
          />
          <div className="project-overlay">
            <p>Click to view the project</p>
          </div>
        </a>
        <a
          href="https://moviecmaniaccentral.netlify.app/"
          target="_blank"
          className="project-card"
        >
          <img
            src={MovieManiac}
            alt="Movie Maniac"
            className="project-images"
          />
          <div className="project-overlay">
            <p className="image-black">Click to view the project</p>
          </div>
        </a>
        <a
          href="https://taskfinder.netlify.app/"
          target="_blank"
          className="project-card"
        >
          <img src={TaskTrek} alt="Task Finder" className="project-images" />
          <div className="project-overlay">
            <p>Click to view the project</p>
          </div>
        </a>
        <a
          href="https://rockpaperscissorsarena.netlify.app/"
          target="_blank"
          className="project-card"
        >
          <img src={RPS} alt="Rock Paper Scissor" className="project-images" />
          <div className="project-overlay">
            <p>Click to view the project</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Projectpage;
