import React from "react";
import "./About.css";
import GraduationPhoto from "../assets/Images/Graduation.jpg";

class About extends React.Component {
  handleClick(e) {
    e.target.classList.toggle("dropdown");
  }
  render() {
    return (
      <div className="about">
        <div className="about-text">
          <div className="name"> <h1> Vivek Kumar </h1></div>
          <div className="info"> 
            I am a third year UCLA student interested in full-stack software development and application design 
          </div>
          <div className="extra-info-wrapper">
            <div className="extra-info"> 
              <span onClick={this.handleClick}> Work Experience </span> 
              <p> UCLA Student Technology Center (2023 - Present) </p>
              <p> MVUSD A.S.T.E.R.I.S.K. Intern  (Summer 2020) </p>
            </div>
            <div className="extra-info"> 
              <span onClick={this.handleClick}> Achievements & Organizations</span> 
              <p> Deans Honor List (4.0 GPA) </p>
              <p> Upsilon Pi Epsilon (Computing Honors Society) </p>
              <p> ACM UCLA </p>
            </div>
            <div className="extra-info"> 
              <span onClick={this.handleClick}> Hobbies </span> 
              <p> Hiking </p>
              <p> Weightlifting </p>
              <p> Reading </p>
            </div>
          </div>
        </div>
        <div className="image-wrapper">
          <img src={GraduationPhoto} />
        </div>
      </div>
    );
  }
}

export default About