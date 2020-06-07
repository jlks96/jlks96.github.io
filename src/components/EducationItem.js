import React, { Component } from 'react';


class WorkExperienceItem extends Component {
    render() {
        const school = this.props.school;
        const level = this.props.level;
        const duration = this.props.duration;
        const desc = this.props.descriptions;

        return (
            <div className="card bg-transparent text-light">
                <div className="card-body">
                    <h3 className="card-title">{school}</h3>
                    <h5 className="card-subtitle mb-2 text-light">
                        {level}
                        <small className="text-muted float-right font-italic">{duration}</small>
                    </h5>
                    <ul className="card-text text-muted">
                        {desc.map(function (desc) {
                            return <li className="card-text text-muted">{desc}</li>
                        })}
                    </ul>

                </div>
            </div >
        );
    }

}


export default WorkExperienceItem;