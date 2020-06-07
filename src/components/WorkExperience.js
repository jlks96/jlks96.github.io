import React, { Component } from 'react';
import WorkExperienceItem from '../components/WorkExperienceItem';
import { faCcVisa } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faUniversity } from '@fortawesome/free-solid-svg-icons';


class WorkExperience extends Component {
    render() {
        return (
            <div className="card bg-transparent text-light" id="work-experience">
                <h1>Work Experience</h1><br />

                <WorkExperienceItem
                    logo={faGoogle}
                    company="Google Asia Pacific"
                    position="Software Engineer"
                    duration="Jul 2020 - present"
                    descriptions={[
                        "To be updated!!"
                    ]
                    } />

                <WorkExperienceItem
                    logo={faGoogle}
                    company="Google Asia Pacific"
                    position="Software Engineer Intern"
                    duration="May 2019 - Aug 2019"
                    descriptions={[
                        "Worked on Google Pay iOS mobile application",
                        "Developed a front-end emoji feature to enhance payment experience",
                        "Technologies: Objective-C, Swift, XCode"
                    ]
                    } />

                <WorkExperienceItem
                    logo={faCcVisa}
                    company="Visa"
                    position="Software Engineer Intern"
                    duration="May 2018 - Aug 2018"
                    descriptions={[
                        "Developed a backend job scheduling and dispatching framework for a distributed system",
                        "Developed a front-end emoji feature to enhance payment experience",
                        "Technologies: Java Technology Stack, Hadoop Hive, Hadoop MapReduce, MyBatis, JDBC, MySQL "
                    ]
                    } />


                <WorkExperienceItem
                    logo={faUniversity}
                    company="National University of Singapore"
                    position="Teaching Assistant"
                    duration="Jan 2018 – Nov 2019"
                    descriptions={[
                        "Conducted lab and tutorial sessions",
                        "Helped in grading lab submissions and providing feedback",
                        "Received highly positive feedback and nominations for Teaching Award"
                    ]
                    } />


            </div >
        );
    }

}


export default WorkExperience;