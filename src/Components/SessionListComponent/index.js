import React, { Component } from "react";
import "./SessionListComponent.css";

export class SessionListComponent extends Component {

    render() {
        return (
            <div className="containerSessionList">
                <div className="containerSessionList__item">
                    <a href="#" className="navBar__box__navItem">Section 1</a>
                </div>
                <div className="containerSessionList__item">
                    <a href="#" className="navBar__box__navItem">Section 2</a>
                </div>
                <div className="containerSessionList__item">
                    <a href="#" className="navBar__box__navItem">Section 3</a>
                </div>
                <div className="containerSessionList__item">
                    <a href="#" className="navBar__box__navItem">Section 4</a>
                </div>
                <div className="containerSessionList__item">
                    <a href="#" className="navBar__box__navItem">Section 5</a>
                </div>
                <div className="containerSessionList__item">
                    <a href="#" className="navBar__box__navItem">Section 6</a>
                </div>
                <div className="containerSessionList__item">
                    <a href="#" className="navBar__box__navItem">Section 7</a>
                </div>
                <div className="containerSessionList__item">
                    <a href="#" className="navBar__box__navItem">Section 8</a>
                </div>
                <div className="containerSessionList__item">
                    <a href="#" className="navBar__box__navItem">Section 9</a>
                </div>
            </div>
        );
    }
}