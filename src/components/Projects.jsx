import React from "react";
import PixelScreenshot from '../assets/Images/Pixel_Screenshot.png'
import OCREncryptionScreenshot from '../assets/Images/OCR_Encryption_Screenshot.png'
import AdminDashboardScreenshot from '../assets/Images/Admin_Dashboard_Screenshot.png'
import WitherScreenshot from '../assets/Images/Wither_Screenshot.png'
import DigitClassifierScreenshot from '../assets/Images/Digit_Classifier_Screenshot.png'
import NoteHubScreenshot from '../assets/Images/Note_Hub_Screenshot.png'
import ProjectInformation from '../assets/Information/Project_Info.json'
import './Projects.css'

class Projects extends React.Component {
  constructor() {
    super();
    this.modalRef = React.createRef(null);
    this.state = {description: null, page: null, github: null};
  }

  handleModal(e) {
    const info = ProjectInformation[e.currentTarget.id];
    this.setState({description: info.description, page: info["page-link"], github: info["github-link"] })
    this.modalRef.current.classList.add("visible");
  }

  renderModal() {
    return (
      <div ref={this.modalRef} className="project-modal" onClick={(e) => e.currentTarget.classList.remove("visible")}>
        <div className="modal-info" onClick={(e) => e.stopPropagation()}>
          <p> {this.state.description} </p>
          <div className="modal-buttons">
            { this.state.page !== null && <a href={this.state.page} target="_blank" rel="noreferrer"> <button> Project Link </button> </a> }
            <a href={this.state.github} target="_blank" rel="noreferrer"> <button> Github Link </button> </a>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="projects">
        {this.renderModal()}
        <h1 className="projects-label"> Projects </h1>
        <div className="projects-container">
          <div className="project-wrapper" id="Pixel" onClick={this.handleModal.bind(this)}> 
            <img src={PixelScreenshot} alt="Screenshot of page of application 'Pixel'" />
            <div>
              <h1> Pixel </h1>
            </div>
          </div>
          <div className="project-wrapper" id="OCR_Encryption" onClick={this.handleModal.bind(this)}> 
            <img src={OCREncryptionScreenshot} alt="Screenshot of page of application 'OCR_Encrpytion'" />
            <div>
              <h1> OCR Encryption </h1>
            </div>
          </div>
          <div className="project-wrapper" id="Wither" onClick={this.handleModal.bind(this)}> 
            <img src={WitherScreenshot} alt="Screenshot of page of application of 'Wither'" />
            <div>
              <h1>Wither</h1>
            </div>
          </div>
          <div className="project-wrapper" id="Admin_Dashboard" onClick={this.handleModal.bind(this)}> 
            <img src={AdminDashboardScreenshot} alt="Screenshot of page of application 'Admin Dashboard'" />
            <div>
              <h1>Admin Dashboard</h1>
            </div>
          </div>
          <div className="project-wrapper" id="Digit_Classifier" onClick={this.handleModal.bind(this)}> 
            <img src={DigitClassifierScreenshot} alt="Screenshot of tab of application 'Digit Classifier'" />
            <div>
              <h1> Digit Classifier </h1>
            </div>
          </div>
          <div className="project-wrapper"> 
            <img src={NoteHubScreenshot} id="Note_Hub" alt="Screenshot of tab of 'Note Repository'" onClick={this.handleModal.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;