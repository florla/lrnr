import React from 'react'
import QuizComponent from '../components/QuizComponent'
import Evaluation from '../components/Evaluation'
import NextButtonComponent from '../components/NextButton'

export default function Questionaire() {
    return (
        <div>
            <QuizComponent />
            <Evaluation />
            <NextButtonComponent />
        </div>
    )
}
