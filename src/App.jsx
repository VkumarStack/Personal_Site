import { cloneElement, useState, useEffect, useRef } from 'react'
import './App.css'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Links from './components/Links'
import { SwitchTransition, CSSTransition, TransitionGroup } from 'react-transition-group'

const dynamicChildFactory = classNames => child => 
  cloneElement(child, {
    classNames
  });

function App() {
  const [currentPage, setCurrentPage] = useState(0)
  const [previousPage, setPreviousPage] = useState(0)
  const transitionDirection = currentPage > previousPage ? 'R' : 'L'
  const classNames = "page" + transitionDirection

  const pages = [Projects, Skills, Links];

  const nodeRef = useRef(null);


  const renderPage = () => {
    const Page = pages[currentPage]
    return (
      <Page/>
    );
  }

  return (
    <div>
      <div className="Menu">
        <button type='button' onClick={() => { 
          setPreviousPage(currentPage)
          setCurrentPage(0) 
          }}> Projects </button>
        <button type='button' onClick={() => { 
          setPreviousPage(currentPage)
          setCurrentPage(1)
          }}> Skills </button>
        <button type='button' onClick={() => {
          setPreviousPage(currentPage)
          setCurrentPage(2)
        }}> Links </button>
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
