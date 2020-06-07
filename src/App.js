import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import './css/app.css';


class App extends Component {
  render() {
    return (
      <div data-spy="scroll" data-target=".navbar">
        <Navbar />

        <main>
          <div className="container-fluid">
            <Header />
          </div>
          <div className="container">
            <AboutMe />
            <hr className="my-4"></hr>
            <Skills />
            <hr className="my-4"></hr>
            <WorkExperience />
            <hr className="my-4"></hr>
            <Education />
            <hr className="my-4"></hr>
            <Projects />
            <hr className="my-4"></hr>
            <ContactMe />
            <hr className="my-4"></hr>
            <Footer />
          </div>
        </main>
      </div >

    );
  }

}


export default App;
