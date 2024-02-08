import React, { useState } from 'react';

export default function QuizComponent({ results }) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    console.log(results);

    if (!results || !results.Questions || results.Questions.length === 0) {
        return <div>No questions available</div>;
    }

    const handleNextQuestion = () => {
        setCurrentQuestionIndex((prevIndex) =>
            prevIndex < results.Questions.length - 1 ? prevIndex + 1 : prevIndex
        );
    };

    const currentQuestion = results.Questions[currentQuestionIndex];
    return (
        <>
            <div className="container">
                <div className="section">
                    {/* <h1 id="ofCounter" className="header center teal-text main-header">Loading...</h1> */}
                    <div className="row">
                        <h2 className="teal-text">Question</h2>
                        {/* <div className="preloader-wrapper active" id="questionLoader">
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
                        </div> */}
                        <div className="col s12 header-5 quiz-transition" id="questionBlock">
                <p>{currentQuestion}</p>
            </div>
            <div>
                <button
                    onClick={handleNextQuestion}
                    disabled={currentQuestionIndex === results.Questions.length - 1}
                >
                    Next Question
                </button>
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
