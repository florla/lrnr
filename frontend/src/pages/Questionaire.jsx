import React from 'react'
import QuizComponent from '../components/QuizComponent'
import Evaluation from '../components/Evaluation'
import NextButtonComponent from '../components/NextButton'
import SingleQ from '../components/SingleQ'
import { useLocation } from 'react-router-dom';

export default function Questionaire() {
    const location = useLocation();
    const results = location.state && location.state.results;
    console.log(results);

    return (
        <div className='quizPage'>
            <QuizComponent results={results} />
            <Evaluation />
            <NextButtonComponent />
        </div>
    )
}
