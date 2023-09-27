import { useRef, useEffect } from 'react'
import GithubIcon from './assets/Icons/github-mark.svg'
import LinkedInIcon from './assets/Icons/linkedin.svg'
import GmailIcon from './assets/Icons/gmail.svg'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import './App.css'

function App() {
  const testRef = useRef(null);
  const aboutElement = useRef(null);
  const skillsElement = useRef(null);
  const projectsElement = useRef(null);
  
  useEffect(() => {
    aboutElement.current = document.getElementsByClassName('about')[0];
    skillsElement.current = document.getElementsByClassName('skills')[0];
    projectsElement.current = document.getElementsByClassName('projects')[0];
    
  }, []);

  return (
    <div>
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
      <div className="content">
        <About ref={testRef}/>
        <Skills/>
        <Projects/>
      </div>
    </div>
  );
}

export default App