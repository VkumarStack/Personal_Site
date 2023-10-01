import { useRef, useEffect, useState, cloneElement } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import GithubIcon from './assets/Icons/github-mark.svg'
import LinkedInIcon from './assets/Icons/linkedin.svg'
import GmailIcon from './assets/Icons/gmail.svg'
import LeftIcon from './assets/Icons/left.svg'
import RightIcon from './assets/Icons/right.svg'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import './App.css'

const dynamicChildFactory = classNames => child => 
  cloneElement(child, {
    classNames
  });

function App() {
  const [mobile, setMobile] = useState(window.matchMedia("(max-device-width: 480px)").matches)
  const [navShowing, setNavShowing] = useState(true)
  const classNames = navShowing ? "nav-group" : "socials-group"

  const testRef = useRef(null);
  const aboutElement = useRef(null);
  const skillsElement = useRef(null);
  const projectsElement = useRef(null);
  
  useEffect(() => {
    aboutElement.current = document.getElementsByClassName('about')[0];
    skillsElement.current = document.getElementsByClassName('skills')[0];
    projectsElement.current = document.getElementsByClassName('projects')[0];
    
    window
      .matchMedia("(max-device-width: 480px)")
      .addEventListener("change", e => { 
        setMobile( e.matches) 
      });
  }, []);



  const renderNavBar = () => {
    if (mobile) {
      if (navShowing) {
        return (
          <nav>
            <TransitionGroup childFactory={dynamicChildFactory(classNames)}>
              <CSSTransition
                classNames={classNames}
                key={navShowing}
                timeout={500}>
                  <div className="page">
                    <div className="nav-content">
                      <button type="button" onClick={() => aboutElement.current.scrollIntoView({behavior: 'smooth', block: 'end'})}>About</button>
                      <button type="button" onClick={() => skillsElement.current.scrollIntoView({behavior: 'smooth', block: 'center'})}>Skills</button>
                      <button type="button" onClick={() => projectsElement.current.scrollIntoView({behavior: 'smooth'})}>Projects</button>
                    </div>
                    <img src={RightIcon} alt="Right Direction Icon" className="svg" width={40} height={40} onClick={() => setNavShowing(false)}/>
                  </div>
              </CSSTransition>
            </TransitionGroup>
          </nav>
        );
      }
      else {
        return (
          <nav>
            <TransitionGroup childFactory={dynamicChildFactory(classNames)}>
              <CSSTransition
                classNames={classNames}
                key={navShowing}
                timeout={500}>
                  <div className="page">
                    <img src={LeftIcon} alt="Left Direction Icon" className="svg" width={40} height={40} onClick={() => setNavShowing(true)}/>
                    <div className="nav-content">
                      <a href="https://www.github.com/vkumarstack"><img className={"svg"} width={40} height={40} src={GithubIcon} alt="Github Icon"/></a>
                      <a href="https://www.linkedin.com/in/vivek-kumar-5424a5222"><img className={"svg"} width={40} height={40} src={LinkedInIcon} alt="LinkedIn Icon" /></a>
                      <a href="mailto: vksogi@gmail.com"><img className={"svg"} width={40} height={40} src={GmailIcon} alt="LinkedIn Icon" /></a>
                    </div>
                  </div>
              </CSSTransition>
            </TransitionGroup>
          </nav>
        );
      }
    }
    else {
      return (
        <nav>
          <div className="pages">
            <button type="button" onClick={() => aboutElement.current.scrollIntoView({behavior: 'smooth', block: 'end'})}>About</button>
            <button type="button" onClick={() => skillsElement.current.scrollIntoView({behavior: 'smooth', block: 'center'})}>Skills</button>
            <button type="button" onClick={() => projectsElement.current.scrollIntoView({behavior: 'smooth'})}>Projects</button>
          </div>
          <div className="socials">
            <a href="https://www.github.com/vkumarstack"><img className={"svg"} width={40} height={40} src={GithubIcon} alt="Github Icon"/></a>
            <a href="https://www.linkedin.com/in/vivek-kumar-5424a5222"><img className={"svg"} width={40} height={40} src={LinkedInIcon} alt="LinkedIn Icon" /></a>
            <a href="mailto: vksogi@gmail.com"><img className={"svg"} width={40} height={40} src={GmailIcon} alt="LinkedIn Icon" /></a>
          </div>
        </nav>
      );
    }
  }

  return (
    <div>
      {renderNavBar()}
      <div className="content">
        <About ref={testRef}/>
        <Skills/>
        <Projects/>
      </div>
    </div>
  );
}

export default App