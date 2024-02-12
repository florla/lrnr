import React from 'react';

const NextButtonComponent = () => {
    const nextQuestion = () => {
        // nextQuestion logic here
    };

    return (
        <div className="container hide block-transition center-align" id="nextButtonContainer">
            <div className="section">
                <div className="row">
                    <div className="col">
                        <button className="btn-large waves-effect waves-light teal center-align" onClick={nextQuestion}>
                            Next
                        </button>
                    </div>
                </div>
            </div>
            <br /><br />
        </div>
    );
};

export default NextButtonComponent;
