import React, { Component } from 'react';
import EducationItem from '../components/EducationItem';


class WorkExperience extends Component {
    render() {
        return (
            <div className="card bg-transparent text-light" id="education">
                <h1>Education</h1><br />

                <EducationItem
                    school="National University of Singapore"
                    level="Bachelor of Computing in Computer Science (Honours)"
                    duration="Aug 2016 – May 2020"
                    descriptions={[
                        "CAP Score 4.97; 4x Dean’s Lister; ASEAN Scholar",
                        "Specialised in Artificial Intelligence and Games Development",
                        "Highest scorer for CS3242 3D Modelling and Animation, CS4243 Computer Vision and Pattern Recognition",
                        "Certificate of Distinction in Artificial Intelligence Focus Area",
                        "Certificate of Distinction in Visual Computing Focus Area",
                    ]
                    } />

                <EducationItem
                    school="Victoria Junior College"
                    level="GCE ‘A’ Levels"
                    duration="Jan 2014 – Nov 2015"
                    descriptions={[
                        "Obtained ‘A’ grade for General Paper, Economics, Physics, Mathematics",
                        "Obtained Distinction for H3 Essentials of Modern Physics",
                        "ASEAN Scholar",
                    ]
                    } />


            </div >
        );
    }

}


export default WorkExperience;