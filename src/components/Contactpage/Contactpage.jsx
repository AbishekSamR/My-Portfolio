import React, { useRef } from "react";
import "./Contactpage.css";
import Linkedin from "../../assets/linkedin.png";
import Github from "../../assets/github.png";
import Phone from "../../assets/telephone.png";
import Mail from "../../assets/mail.png";
import Resume from "../../assets/AbishekSam_Resume-Sept2025.pdf";
import emailjs from "@emailjs/browser";
import Arrow from "../../assets/arrow.png";

const Contactpage = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_39c704w", "template_rpnkpea", form.current, {
        publicKey: "9rRV3fUsbXFbcVH3Z",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          alert("Email Sent Succesfully !");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Submission Failed !");
        }
      );
  };

  return (
    <div id="contact" className="contact-page">
      <div className="title-container">
        <h1>Contact Me</h1>
      </div>
      <div className="contact-secion-container">
        <div className="contact-form-container">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <p>Please fill out the form to reach my email</p>
            <br />
            <input
              type="text"
              className="name"
              placeholder="Your Name"
              name="from_name"
            />
            <br />
            <input
              type="email"
              className="email"
              placeholder="Your Email"
              name="from_email"
            />
            <br />
            <textarea name="message" placeholder="Your Message"></textarea>
            <br />
            <button type="submit" className="submit-button" value="send">
              Submit
            </button>
          </form>
        </div>
        <div className="link-section-container">
          <div className="links-container">
            <h2 className="download-heading">See My Resume</h2>
            <a href={Resume} target="_blank">
              <button className="download-button">Resume</button>
            </a>
            <div className="links-images">
              <a href="https://linkedin.com/in/abisheksam" target="_blank">
                <img src={Linkedin} alt="Linkedin-Image" />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/AbishekSamR" target="_blank">
                <img src={Github} alt="Github-Image" />
                <span>GitHub</span>
              </a>
            </div>
            <div className="contact-details-container">
              <h2>Contact Details</h2>
              <div className="contact-details">
                <div>
                  <img src={Phone} alt="Phone-Image" />
                  <span>+91 8015111450</span>
                </div>
                <div>
                  <img src={Mail} alt="Email-Image" />
                  <span>samabishek75@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="#header">
        <img src={Arrow} alt="Back to Top" className="scroll-arrow" />
      </a>
    </div>
  );
};

export default Contactpage;
