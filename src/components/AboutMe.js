import React, { Component } from 'react';


class AboutMe extends Component {
    render() {
        return (
            <div className="card bg-transparent text-light" id="about-me">
                <div className="row">
                    <div className="col-md-3">
                        <img className="card-image img-fluid" src={require("../img/profilepic.jpg")} alt="" />
                    </div>
                    <div className="col card-block">
                        <h1 >About me</h1><br />
                        <p className="card-text">I am a Computer Scientist. I graduated with BComp (Hons)  from the National University of Singapore in Summer 2020. I currently work at Google Singapore as a Software Engineer.
                            </p><br />
                        <p className="card-text"> On the side, I enjoy music. I play the piano and compose electronic music when I am free. I am also passionate about learning finance and business management knowledge.
                            </p><br />
                    </div>
                </div >
            </div >
        );
    }

}


export default AboutMe;