import React from "react";
import ServerIcon from '../assets/Icons/server.svg';
import WebpageIcon from '../assets/Icons/webpage.svg';
import ToolIcon from '../assets/Icons/tool.svg';

import "./Skills.css"


class Skills extends React.Component {
  render() {
    return (
      <div className="skills">
        <h1> Skills </h1>
        <div className="skills-wrapper">
          <div className="frontend">
            <div className="skills-title-wrapper">
              <h1> Frontend </h1>
              <img height={40} src={WebpageIcon} alt="Web Page Icon" className="svg" />
            </div>
            <ul className="skills-list">
              <li> Javascript </li>
              <li> HTML + CSS </li>
              <li> React </li>
              <li> React Native </li>
            </ul>
          </div>
          <div className="backend">
            <div className="skills-title-wrapper">
              <h1> Backend </h1>
              <img height={40} src={ServerIcon} alt="Server Icon" className="svg" />
            </div>
            <ul className="skills-list">
              <li> Node.js + Express.js </li>
              <li> MongoDB </li>
              <li> Firebase </li>
              <li> Python + NumPy </li>
            </ul>
          </div>
          <div className="tooling">
            <div className="skills-title-wrapper">
              <h1> Tooling </h1>
              <img height={40} src={ToolIcon} alt="Tool Icon" className="svg" />
            </div>
            <ul className="skills-list">
              <li> Git CLI + Github </li>
              <li> Docker </li>
              <li> Linux + Bash/Sh </li>
              <li> Npm </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;