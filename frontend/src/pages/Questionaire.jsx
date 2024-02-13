import React from 'react'; 
import QuizComponent from '../components/QuizComponent'; 
import { useLocation } from 'react-router-dom'; 

export default function Questionnaire() {
    const location = useLocation(); // Use useLocation hook to access the current location
    const results = location.state && location.state.results; // Extract the results from the location state

    return (
        <div>
            {/* Render the QuizComponent with results */}
            <QuizComponent results={results} />
        </div>
    );
}
