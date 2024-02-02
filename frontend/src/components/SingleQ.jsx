import React from 'react';

export default function SingleQ({ results }) {
    console.log(results);
    if (!results || !results.Questions) {
        return <div>No questions available</div>;
    }
    return (
        <div>
            {results.Questions && results.Questions.map((question, index) => (
                <div key={index}>
                    <p>{question}</p>
                </div>
            ))}
        </div>
    );
}


