import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Result() {
    // Retrieve state data from location
    const location = useLocation();
    const counter = location.state && location.state.counter; // Number of questions answered correctly
    const total = location.state && location.state.total; // Total number of questions
    const points = location.state && location.state.points; // Total points earned
    const pTotal = location.state && location.state.pTotal; // Total possible points

    return (
        // Result container section
        <div className="section no-pad-bot" id="index-banner">
            <div className="container">
                <br /><br />
                {/* Main header */}
                <h1 className="header center teal-text main-header">lrnr</h1>
                <div className="row center">
                    {/* Display number of questions answered correctly and total questions */}
                    <p className="center header-5" id="correctAnswersBlock">Questions Right: {counter} / {total}</p>
                    {/* Display total points earned and total possible points */}
                    <p className="center header-5" id="correctAnswersBlock">Points: {points} / {pTotal}</p>
                </div>
                <div className="row center">
                    {/* Try Another Quiz button */}
                    <a id="download-button" className="btn-large waves-effect waves-light teal" href="/categories">Try Another Quiz</a>
                </div>
                <br /><br />
            </div>
        </div>
    )
}
