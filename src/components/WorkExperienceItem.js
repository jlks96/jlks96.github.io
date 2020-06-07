import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class WorkExperienceItem extends Component {
    render() {
        const logo = this.props.logo;
        const company = this.props.company;
        const position = this.props.position;
        const duration = this.props.duration;
        const desc = this.props.descriptions;

        return (
            <div className="card bg-transparent text-light">
                <div className="card-body">
                    <h3 className="card-title"><FontAwesomeIcon className="mr-2" icon={logo} />{company}</h3>
                    <h5 className="card-subtitle mb-2 text-light">
                        {position}
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