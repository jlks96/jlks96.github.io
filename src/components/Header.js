import React, { Component } from 'react';
import '../css/header.css';


class Header extends Component {
    render() {
        return (
            <header className="jumbotron jumbotron-fluid jumbotron-custom bg-transparent text-light">
                <div className="container">
                    <h1 className="display-3" style={{ textAlignVertical: "center", textAlign: "center" }}>Hey there, Joshua here</h1>
                    <p className="lead" style={{ textAlignVertical: "center", textAlign: "center" }}>Welcome to my personal website :)</p>
                </div>
            </header>
        );
    }

}


export default Header;