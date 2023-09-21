import GithubIcon from './assets/Icons/github-mark.svg'
import LinkedInIcon from './assets/Icons/linkedin.svg'
import GmailIcon from './assets/Icons/gmail.svg'

function App() {
  return (
    <div>
      <nav>
        <div className="pages">
          <button type="button">About</button>
          <button type="button">Skills</button>
          <button type="button">Projects</button>
        </div>
        <div className="socials">
          <a href="https://www.github.com/vkumarstack"><img className={"svg"} width={40} height={40} src={GithubIcon} alt="Github Icon"/></a>
          <a href="https://www.linkedin.com/in/vivek-kumar-5424a5222"><img className={"svg"} width={40} height={40} src={LinkedInIcon} alt="LinkedIn Icon" /></a>
          <a href="mailto: vksogi@gmail.com"><img className={"svg"} width={40} height={40} src={GmailIcon} alt="LinkedIn Icon" /></a>
        </div>
      </nav>
      <div className="content">
        <p> Blah</p>
        <h1> Blah</h1>
        <h1> Blah </h1>
      </div>
    </div>
  );
}

export default App

/* 
const dynamicChildFactory = classNames => child => 
  cloneElement(child, {
    classNames
  });

function App() {
  const [currentPage, setCurrentPage] = useState(0)
  const [previousPage, setPreviousPage] = useState(0)
  const transitionDirection = currentPage > previousPage ? 'R' : 'L'
  const classNames = "page" + transitionDirection

  const pages = [About, Projects, Skills, Links];


  const renderPage = () => {
    const Page = pages[currentPage]
    return (
      <Page/>
    );
  }


  return (
    <div>
      <div className="menu">
        <div className="logo-group">
          <button type="button" className={currentPage == 0 ? 'focus' : ''} onClick={() => {
            setPreviousPage(currentPage)
            setCurrentPage(0)
          }}> About </button>
        </div>
        <div className="menu-group">
          <button type='button' className={currentPage == 1 ? 'focus' : ''} onClick={() => {
            setPreviousPage(currentPage)
            setCurrentPage(1)
            }}> Projects </button>
          <button type='button' className={currentPage == 2 ? 'focus' : ''} onClick={() => {
            setPreviousPage(currentPage)
            setCurrentPage(2)
            }}> Skills </button>
          <button type='button' className={currentPage == 3 ? 'focus' : ''} onClick={() => {
            setPreviousPage(currentPage)
            setCurrentPage(3)
          }}> Links </button>
        </div>
      </div>
      
      <TransitionGroup childFactory={dynamicChildFactory(classNames)}>
        <CSSTransition 
          classNames={classNames}
          key={currentPage}
          timeout={1000}>
            <div className="page">
              {renderPage()}
            </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  )
}

export default App
*/