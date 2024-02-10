import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const QuizComponent = ({ results }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [evaluationResult, setEvaluationResult] = useState(null);
    const [showSubmitButton, setShowSubmitButton] = useState(true);
    const [showNextButton, setShowNextButton] = useState(false);
    const [message, setMessage] = useState('');
    const [counter, setCounter] = useState(0);
    const navigate = useNavigate();

    const handleNextQuestion = () => {
        if (currentQuestionIndex < results.Questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setUserAnswer('');
            setEvaluationResult(null);
            setShowSubmitButton(true); // Show submit button when moving to the next question
            setShowNextButton(false);
        } else {
            navigate('/result', { state: { counter: counter, total: results.Questions.length } });
        }
    };

    const answerQuestion = async () => {
        console.log(userAnswer)
        if (!userAnswer) {
            setMessage('Please enter an answer before submitting.');
            return;
        } else {
            try {
                setMessage('');
                const response = await axios.get('http://localhost:5000/evaluation', {
                    params: { question: results.Questions[currentQuestionIndex], submission: userAnswer }
                });
                const data = response.data;
                console.log(data);
                setEvaluationResult(data);
                setShowSubmitButton(false); // Hide submit button after submitting the answer
                setShowNextButton(true);
                if (data.evaluation === "correct") {
                    setCounter(counter + 1);

                }
                console.log(counter);
            } catch (error) {
                console.error('Error submitting answer:', error);
            }
        }
    };

    const currentQuestion = results.Questions[currentQuestionIndex];

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
                            {message && <div style={{ color: "red", fontSize: "12px" }}>{message}</div>}
                            <div className="input-field">
                                <textarea
                                    id="selfAnswer"
                                    className="materialize-textarea"
                                    value={userAnswer}
                                    onChange={(e) => setUserAnswer(e.target.value)}
                                ></textarea>
                                <label htmlFor="selfAnswer">Answer</label>
                            </div>
                        </div>
                        <div className="col s12">
                            {showSubmitButton && (
                                <button
                                    className="btn-large waves-effect waves-light teal"
                                    onClick={answerQuestion}
                                >
                                    Submit Answer
                                </button>
                            )}
                        </div>
                        {showNextButton && (
                            <div className="col s12">
                                <button
                                    onClick={handleNextQuestion}
                                    className="btn-large waves-effect waves-light teal"
                                >
                                    {currentQuestionIndex === results.Questions.length - 1 ? 'View Results' : 'Next Question'}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                <br /><br />
            </div>
            {evaluationResult && (
                <div className="container">
                    <div className="section">
                        <div className="row">
                            <h2 className="teal-text">Evaluation Result</h2>
                            <div className="col s12 header-5">
                                <p>Evaluation: {evaluationResult.evaluation}</p>
                                <p>Explanation: {evaluationResult.explanation}</p>
                                <p>Grade: {evaluationResult.grade}</p>
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
