import React from "react";
import "./Aboutpage.css";
import MachineLearning from "../../assets/Machine-learning.jpg";
import Programming from "../../assets/Programming.jpg";
import WebDevelopment from "../../assets/Web-development.jpg";
import Tools from "../../assets/Tools.jpg";

const Aboutpage = () => {
  return (
    <div id="about" className="about-page">
      <div className="about-header">
        <h1>About Me</h1>
        <p>
          I am a passionate Computer Science student with a strong foundation in
          programming, machine learning, and
          <br />
          web development.With hands-on experience in building projects and
          internships, I strive to create
          <br />
          impactful solutions by combining technical expertise with creativity.
        </p>
      </div>
      <div className="about-cards-container">
        <div className="about-cards">
          <img
            src={Programming}
            alt="Programming Languages Image"
            className="card-image"
          />
          <div className="about-card-text">
            <h3>Programming</h3>
            <p>
              Skilled in Java, Python, and SQL with a focus on writing clean,
              efficient, and problem-solving code. I enjoy applying logic and
              algorithms to solve real-world challenges.
            </p>
          </div>
        </div>
        <div className="about-cards">
          <img
            src={MachineLearning}
            alt="Machine Learning Image"
            className="card-image"
          />
          <div className="about-card-text">
            <h3>Machine Learning</h3>
            <p>
              Worked on projects like stock prediction and customer churn
              analysis, applying regression and classification models with high
              accuracy through data preprocessing and feature engineering.
            </p>
          </div>
        </div>
        <div className="about-cards">
          <img
            src={WebDevelopment}
            alt="Web development Image"
            className="card-image"
          />
          <div className="about-card-text">
            <h3>Web Development</h3>
            <p>
              Experienced in ReactJS, I have built dynamic web applications like
              MovieManiac, integrating APIs and databases like MongoDB and MySQL
              for real-time data-driven web apps.
            </p>
          </div>
        </div>
        <div className="about-cards">
          <img src={Tools} alt="Web development Image" className="card-image" />
          <div className="about-card-text">
            <h3>Tools</h3>
            <p>
              Experienced in using Visual Studio Code, Figma (UI design), Google
              Colab, Oracle SQL+, MySQL, and MongoDB for development and project
              work. Proficient in utilizing these tools to streamline
              development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;
