import React from "react";
import './Projects.css'

class Projects extends React.Component {
  constructor() {
    super();
    this.modalRef = React.createRef(null);
  }

  render() {
    return (
      <div className="Projects">
        <div ref={this.modalRef} className="project-modal" onClick={(e) => e.currentTarget.classList.remove("visible")}>
          <button onClick={(e) => {
            e.stopPropagation();
          }}> Link </button>
        </div>
        <h1 className="projects-label"> Projects </h1>
        <div className="projects-container">
          <div className="project-wrapper" onClick={() => console.log(this.modalRef.current.classList.add("visible"))}> 
            <img src="https://res.cloudinary.com/storemaven/image/upload/f_auto,q_auto/v1590061617/image8_ks45h6.jpeg" alt="" />
            <div>
              <p> Test </p>
            </div>
          </div>
          <div className="project-wrapper"> 
            <img src="https://res.cloudinary.com/storemaven/image/upload/f_auto,q_auto/v1590061617/image8_ks45h6.jpeg" alt="" />
          </div>
          <div className="project-wrapper"> 
            <img src="https://res.cloudinary.com/storemaven/image/upload/f_auto,q_auto/v1590061617/image8_ks45h6.jpeg" alt="" />
          </div>
          <div className="project-wrapper"> 
            <img src="https://res.cloudinary.com/storemaven/image/upload/f_auto,q_auto/v1590061617/image8_ks45h6.jpeg" alt="" />
          </div>
          <div className="project-wrapper"> 
            <img src="https://res.cloudinary.com/storemaven/image/upload/f_auto,q_auto/v1590061617/image8_ks45h6.jpeg" alt="" />
          </div>
          <div className="project-wrapper"> 
            <img src="https://res.cloudinary.com/storemaven/image/upload/f_auto,q_auto/v1590061617/image8_ks45h6.jpeg" alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;