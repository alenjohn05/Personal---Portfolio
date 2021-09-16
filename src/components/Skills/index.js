import React, { Component } from "react";
import "./index.css";
export class Skills extends Component {
  render() {
    return (
      <div className="skill-container">
        <h1 className="title"> 🎯 Few of My Skills</h1>
        <div className="skill-bar">
          <p align="center">
            <img alt="" className="skill-image" src="https://img.shields.io/badge/JavaScript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" />
            <img alt="" className="skill-image" src="https://img.shields.io/badge/-PYTHON-blue?style=for-the-badge&logo=python&logoColor=white" />
            <img alt="" className="skill-image" src="https://img.shields.io/badge/Html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white" />
            <img alt="" className="skill-image" src="https://img.shields.io/badge/React.js%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB" />
            <img alt="" className="skill-image" src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white" />
            {/* <img alt="" className="skill-image" src="https://img.shields.io/badge/angular%20-%23DD0031.svg?&style=for-the-badge&logo=angular&logoColor=white" /> */}
            <img alt="" className="skill-image" src="https://img.shields.io/badge/Node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white" />
            <img alt="" className="skill-image" src="https://img.shields.io/badge/Redux%20-%23593d88.svg?&style=for-the-badge&logo=redux&logoColor=white" />
            <img alt="" className="skill-image" src="https://img.shields.io/badge/bootstrap%20-%23007ACC.svg?&style=for-the-badge&logo=bootstrap&logoColor=white" />
            <img alt="" className="skill-image" src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?&style=for-the-badge&logo=mongodb&logoColor=white" />
          </p>
        </div>
      </div>
    );
  }
}

export default Skills;
