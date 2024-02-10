import React from 'react'
import { useLocation } from 'react-router-dom';

export default function Result() {
    const location = useLocation();
    const counter = location.state && location.state.counter;
    const total = location.state && location.state.total;
    console.log(counter, total);
    return (
        <div class="section no-pad-bot" id="index-banner">
            <div class="container">
                <br /><br />
                <h1 class="header center teal-text main-header">lrnr</h1>
                <div class="row center">
                    <p class="center header-5" id="correctAnswersBlock">Questions Right: {counter} / {total}</p>
                </div>
                <div class="row center">
                    <a id="download-button" class="btn-large waves-effect waves-light teal" href="/categories">Try Another Quiz</a>
                </div>
                <br /><br />

            </div>
        </div>
    )
}
