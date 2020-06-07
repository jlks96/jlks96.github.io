import React, { Component } from 'react';
import '../css/skills.css';


class Skills extends Component {
    render() {
        return (
            <div className="card bg-transparent text-light" id="skills">
                <h1>Skills</h1><br />

                <p className="lead">I am decent at:
                </p>
                <span>
                    <i className="devicon-java-plain icon-custom" title="Java"></i>
                    <i className="devicon-python-plain icon-custom" title="Python"></i>
                    <i className="devicon-javascript-plain icon-custom" title="Javascript"></i>
                    <i className="devicon-c-plain icon-custom" title="C"></i>
                    <i className="devicon-cplusplus-plain icon-custom" title="C++"></i>
                </span>
                <br />
                <p className="lead"> I have touched before:
                </p>
                <span>
                    <i className="devicon-android-plain icon-custom" title="Android"></i>
                    <i className="devicon-swift-plain icon-custom" title="Swift"></i>
                    <i className="devicon-react-plain icon-custom" title="React"></i>
                    <i className="devicon-bootstrap-plain icon-custom" title="Bootstrap"></i>
                    <i className="devicon-html5-plain icon-custom" title="HTML"></i>
                    <i className="devicon-mysql-plain icon-custom" title="MySQL"></i>
                </span>
                <br />
            </div >
        );
    }

}


export default Skills;