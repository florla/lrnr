import React, { useState } from 'react';
import axios from 'axios';

// Define the QuizComponent functional component that takes 'results' as props
const QuizComponent = ({ results }) => {
    // State variables to manage current question index, user answer, evaluation result, and button visibility
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [evaluationResult, setEvaluationResult] = useState(null);
    const [showSubmitButton, setShowSubmitButton] = useState(true);
    const [showNextButton, setShowNextButton] = useState(false);

    // Function to handle moving to the next question or redirecting to the result page
    const handleNextQuestion = () => {
        if (currentQuestionIndex < results.Questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setUserAnswer('');
            setEvaluationResult(null);
            setShowSubmitButton(true); // Show submit button when moving to the next question
            setShowNextButton(false);
        } else {
            window.location.href = 'http://localhost:3000/result'; // Redirect to the result page
        }
    };

    // Function to submit the answer and get evaluation result asynchronously
    const answerQuestion = async () => {
        try {
            // Make a GET request to the evaluation endpoint with the question and user answer as parameters
            const response = await axios.get('http://localhost:5000/evaluation', {
                params: { ques: results.Questions[currentQuestionIndex], sub: userAnswer }
            });
            const data = response.data; // Extract response data
            setEvaluationResult(data); // Set evaluation result
            setShowSubmitButton(false); // Hide submit button after submitting the answer
            setShowNextButton(true); // Show next button
        } catch (error) {
            console.error('Error submitting answer:', error); // Log any errors
        }
    };

    // Get the current question based on the current index
    const currentQuestion = results.Questions[currentQuestionIndex];

    // Return the JSX for rendering the quiz component
    return (
        <>
            <div className="container">
                <div className="section">
                    <div className="row">
                        <h2 className="teal-text">Question</h2>
                        <div className="col s12 header-5 quiz-transition" id="questionBlock">
                            <p>{currentQuestion}</p>
                        </div>
                        <div className="col s12 header-5">
                            <div className="input-field">
                                <textarea
                                    id="selfAnswer"
                                    className="materialize-textarea"
                                    value={userAnswer}
                                    onChange={(e) => setUserAnswer(e.target.value)}
                                    placeholder='Answer'
                                ></textarea>
                                <label htmlFor="selfAnswer"></label>
                            </div>
                        </div>
                        <div className="col s12">
                            {/* Render submit button if it should be shown */}
                            {showSubmitButton && (
                                <button
                                    className="btn-large waves-effect waves-light teal"
                                    onClick={answerQuestion}
                                >
                                    Submit Answer
                                </button>
                            )}
                        </div>
                        {/* Render next button if it should be shown */}
                        {showNextButton && (
                            <div className="col s12">
                                <button
                                    onClick={handleNextQuestion}
                                    className="btn-large waves-effect waves-light teal"
                                >
                                    {/* If it's the last question, show 'View Results', otherwise 'Next Question' */}
                                    {currentQuestionIndex === results.Questions.length - 1 ? 'View Results' : 'Next Question'}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                <br /><br />
            </div>
            {/* Render evaluation result if it exists */}
            {evaluationResult && (
                <div className="container">
                    <div className="section">
                        <div className="row">
                            <h2 className="teal-text">Evaluation Result</h2>
                            <div className="col s12 header-5">
                                <p>Evaluation: {evaluationResult.evaluation}</p>
                                <p>Explanation: {evaluationResult.explanation}</p>
                            </div>
                        </div>
                    </div>
                    <br /><br />
                </div>
            )}
        </>
    );
};

export default QuizComponent;
