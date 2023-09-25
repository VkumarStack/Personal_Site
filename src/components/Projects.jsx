import React from "react";
import PixelScreenshot from '../assets/Images/Pixel_Screenshot.png'
import OCREncryptionScreenshot from '../assets/Images/OCR_Encryption_Screenshot.png'
import AdminDashboardScreenshot from '../assets/Images/Admin_Dashboard_Screenshot.png'
import WitherScreenshot from '../assets/Images/Wither_Screenshot.png'
import DigitClassifierScreenshot from '../assets/Images/Digit_Classifier_Screenshot.png'
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
          <div className="project-wrapper" onClick={() => this.modalRef.current.classList.add("visible")}> 
            <img src={PixelScreenshot} alt="Screenshot of page of application 'Pixel'" />
            <div>
              <h1> Pixel </h1>
            </div>
          </div>
          <div className="project-wrapper"> 
            <img src={OCREncryptionScreenshot} alt="Screenshot of page of application 'OCR_Encrpytion'" />
            <div>
              <h1> OCR Encryption </h1>
            </div>
          </div>
          <div className="project-wrapper"> 
            <img src={WitherScreenshot} alt="Screenshot of page of application of 'Wither'" />
            <div>
              <h1>Wither</h1>
            </div>
          </div>
          <div className="project-wrapper"> 
            <img src={AdminDashboardScreenshot} alt="Screenshot of page of application 'Admin Dashboard'" />
            <div>
              <h1>Admin Dashboard</h1>
            </div>
          </div>
          <div className="project-wrapper"> 
            <img src={DigitClassifierScreenshot} alt="Screenshot of tab of application 'Digit Classifier'" />
            <div>
              <h1> Digit Classifier </h1>
            </div>
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