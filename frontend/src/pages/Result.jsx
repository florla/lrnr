import React from 'react'

export default function Result() {
    return (
        <div class="section no-pad-bot" id="index-banner">
            <div class="container">
                <br /><br />
                <h1 class="header center teal-text main-header">lrnr</h1>
                <div class="row center">
                    <p class="center header-5" id="correctAnswersBlock">Questions Right: 0</p>
                </div>
                <div class="row center">
                    <a id="download-button" class="btn-large waves-effect waves-light teal" href="/categories">Try Another Quiz</a>
                </div>
                <br /><br />

            </div>
        </div>
    )
}
