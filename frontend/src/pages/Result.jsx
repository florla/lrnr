import React from 'react'
import { useLocation } from 'react-router-dom';

export default function Result() {
    const location = useLocation();
    const counter = location.state && location.state.counter;
    const total = location.state && location.state.total;
    const points = location.state && location.state.points;
    const pTotal = location.state && location.state.pTotal;
    return (
        <div class="results">
        <div class="section no-pad-bot" id="index-banner">
            <div class="container">
                <br /><br />
                <h1 class="header center teal-text main-header">lrnr</h1>
                <div class="row center">
                    <p class="center header-5" id="correctAnswersBlock">Questions Right: {counter} / {total}</p>
                    <p class="center header-5" id="correctAnswersBlock">Points: {points} / {pTotal}</p>
                </div>
                <div class="row center">
                    <a id="download-button" class="btn-large waves-effect waves-light teal" href="/categories">Try Another Quiz</a>
                </div>
                <br /><br />

            </div>
        </div>
        </div>
    )
}
