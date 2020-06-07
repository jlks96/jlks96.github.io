import React, { Component } from 'react';
import '../css/projects.css';


class ProjectItem extends Component {
    render() {
        const img = this.props.img;
        const title = this.props.title;
        const desc = this.props.descriptions;
        const link = this.props.link;

        return (
            <div className="card mb-3 bg-transparent text-light custom-project-card">
                <div className="card-body custom-project-card-body">
                    <h3 className="card-title">{title}</h3>
                    < img className="custom-project-image mb-3" src={img} alt="" hidden={img == null} />
                    <ul className="card-text text-muted">
                        {desc.map(function (desc) {
                            return <li className="card-text text-muted">{desc}</li>
                        })}
                    </ul>
                </div>
                <div className="custom-project-overlay container">
                    {
                        link != null ?
                            <a type="button" className="btn btn-outline-light" href={link}>Github</a> :
                            <p> Repository is private / unavailable :( </p>
                    }
                </div>
            </div>
        );
    }

}


export default ProjectItem;