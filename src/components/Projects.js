import React, { Component } from 'react';
import ProjectItem from '../components/ProjectItem';


class Projects extends Component {
    render() {
        return (
            <div className="card bg-transparent text-light" id="projects">
                <h1>Selected Projects</h1><br />

                <ProjectItem
                    img={require("../img/TICC.jpg")}
                    title="Trust-Intent-Capability-Calibration Monte Carlo Planner (TICC-MCP)"
                    descriptions={[
                        "Developed a novel decision theoretic model and framework that allows a human and robot to learn more about each other to establish trust and enhance long-term cooperation",
                        "Experimented with actual human subjects using a physical robot in an item picking task",
                        "Final Year Project/ Machine Learning Research",
                        "Submitted as conference paper to International Conference on Intelligent Robots and Systems (IROS) (currently pending review)",
                        "Technologies: Python, Google Compute Engine, pypy3"
                    ]}
                />

                <ProjectItem
                    img={require("../img/graphics.png")}
                    title="Modern Computer Graphics"
                    descriptions={[
                        "Implemented Distributed Ray Tracing (left) with soft shadows and depth of field effect",
                        "Implemented Radiosity (right) on totally diffuse environment",
                        "Technologies: C++, OpenGL Shading Language (GLSL), OpenGL Mathematics (GLM)"
                    ]}
                />

                <ProjectItem
                    title="Grid Driving Planner"
                    descriptions={[
                        "Developed a DQN model with curriculum learning for a self-driving car in a large, stochastic grid world",
                        "Technologies: Python, Pytorch"
                    ]}
                    link="https://github.com/jlks96/grid-driving-planner"
                />

                <ProjectItem
                    img={require("../img/waldo.jpg")}
                    title="Where's Waldo Detector"
                    descriptions={[
                        "Designed and developed an object detection and image classification framework to detect Waldo, Waldo, Wenda and Wizard in a series of Wimmelbilder books featuring them",
                        "Impletmented Radiosity (right) on totally diffuse environment",
                        "Technologies: Python, SciPy, NumPy"
                    ]}
                    link="https://github.com/jlks96/CS4243-Project"
                />

                <ProjectItem
                    title="Breast Cancer Diagnosis with Computer Vision"
                    descriptions={[
                        "Developed a ConvNet model (VGG 16 based) to augment the diagnosis of Grade 1",
                        "Final model is able to predict with an accuracy rate of ~90% on the validation data",
                        "Technlogies: Python, Keras"
                    ]}
                    link="https://github.com/jlks96/CS3244-Project"
                />

                <ProjectItem
                    img={require("../img/poker.jpg")}
                    title="Poker AI"
                    descriptions={[
                        "Developed an AI agent to play the famous Texas Poker game using DQN",
                        "Handcrafted features to represent the states",
                        "Agent wins 97% of the games with an average stack gain of about 8700 per game",
                        "Technologies: Python, Keras, NumPy"
                    ]}
                    link="https://github.com/jlks96/CS3243PokerAIBot"
                />

                <ProjectItem
                    img={require("../img/registration.png")}
                    title="3D Model Registration"
                    descriptions={[
                        "Developed a registration solver using Iterative Closest Point method for 3D polygonal based models",
                        "Enhanced with kd-tree and basic model decimation",
                        "Technologies: C++, OpenGL"
                    ]}
                    link="https://github.com/jlks96/Registration"
                />

                <ProjectItem
                    title="Static Program Analyzer"
                    descriptions={[
                        "Developed a Static Program Analyzer for a basic programming language SIMPLE which parses an input program and provide answers to queries",
                        "Technologies: C++"
                    ]}
                />

                <ProjectItem
                    img={require("../img/addsurance.png")}
                    title="AddSurance"
                    descriptions={[
                        "Developed a comprehensive, reliable and convenient address book for insurance agents",
                        "Allow users to maintain a huge list of contacts easily, at the same time, managing their schedule efficiently",
                        "Technologies: Java"
                    ]}
                    link="https://github.com/CS2103JAN2018-W10-B4/main"
                />

                <ProjectItem
                    img={require("../img/speats.png")}
                    title="spEATS"
                    descriptions={[
                        "Developed a mobile app for diners to check availability and pre-order food before they arrive at restaurants",
                        "Customer-end application (left) for diners to place orders and business-end application (right) for restaurant owners to manage orders",
                        "Technologies: Java, Android, Firebase"
                    ]}
                />
            </div >
        );
    }

}


export default Projects;