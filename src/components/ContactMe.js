import React, { Component } from 'react';


class ContactMe extends Component {
    constructor(props) {
        super(props);
        this.state = { name: null, email: null, subject: null, message: null };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubjectChange = this.handleSubjectChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        const templateId = 'template_XD5Tnq9c';

        window.emailjs.send(
            'gmail', templateId, this.state,
        ).then(res => {
            alert('Email successfully sent!')
        }).catch(err => alert('Oh well, you failed to send your email.'));

    }

    handleNameChange(event) {
        this.setState({ name: event.target.value });
    }

    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }

    handleSubjectChange(event) {
        this.setState({ subject: event.target.value });
    }

    handleMessageChange(event) {
        this.setState({ message: event.target.value });
    }

    render() {
        return (
            <div className="bg-transparent text-light" id="contact-me">
                <h1>Contact Me</h1><br />

                <div className="row">
                    <div className="col-md-9 mb-5 bg-transparent text-white">
                        <form id="contact-form" name="contact-form">

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <input type="text" id="name" name="name" className="form-control bg-transparent text-light" onChange={this.handleNameChange} required />
                                        <label for="name" className="">Your name</label>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <input type="text" id="email" name="email" className="form-control bg-transparent text-light" onChange={this.handleEmailChange} required />
                                        <label for="email" className="">Your email</label>

                                        <div className="invalid-feedback">Check this checkbox to continue.</div>
                                    </div>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-md-12">
                                    <div className="md-form mb-0">
                                        <input type="text" id="subject" name="subject" className="form-control bg-transparent text-light" onChange={this.handleSubjectChange} required />
                                        <label for="subject" className="">Subject</label>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="md-form">
                                        <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea bg-transparent text-light" onChange={this.handleMessageChange} required></textarea>
                                        <label for="message">Your message</label>
                                    </div>

                                </div>
                            </div>

                            <div className="text-center text-md-left">
                                <button className="btn btn-outline-light" onClick={this.handleSubmit} type="submit">Send</button>
                            </div>
                        </form>
                    </div>

                    <div className="col-md-3 text-center">
                        <ul className="list-unstyled mb-0">
                            <li><i className="fas fa-map-marker-alt fa-2x"></i>
                                <p>Singapore</p>
                            </li>
                            <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                                <p>joshualeekaisheng@gmail.com</p>
                            </li>
                        </ul>
                    </div>

                </div>
            </div >
        );
    }
}


export default ContactMe;