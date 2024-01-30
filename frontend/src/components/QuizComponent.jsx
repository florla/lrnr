import React from 'react';

const QuizComponent = () => {
    return (
        <>
            <div className="container">
                <div className="section">
                    <h1 id="ofCounter" className="header center teal-text main-header">Loading...</h1>
                    <div className="row">
                        <h2 className="teal-text">Question</h2>
                        <div className="preloader-wrapper active" id="questionLoader">
                            <div className="spinner-layer spinner-blue-only">
                                <div className="circle-clipper left">
                                    <div className="circle"></div>
                                </div>
                                <div className="gap-patch">
                                    <div className="circle"></div>
                                </div>
                                <div className="circle-clipper right">
                                    <div className="circle"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 header-5 quiz-transition" id="questionBlock">
                            {/* Add question content here */}
                        </div>
                    </div>
                </div>
                <br /><br />
            </div>
            <div className="container">
                <div className="section">
                    <div className="row">
                        <h2 className="teal-text">Your Answer</h2>
                        <div className="col s12 header-5">
                            <div className="input-field">
                                <textarea id="selfAnswer" className="materialize-textarea"></textarea>
                                <label htmlFor="selfAnswer">Answer</label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <button className="btn-large waves-effect waves-light teal" 
                            // onClick={() => answerQuestion()}
                            >
                                Submit Answer
                            </button>
                        </div>
                    </div>
                </div>
                <br /><br />
            </div>
        </>
    );
};

export default QuizComponent;
