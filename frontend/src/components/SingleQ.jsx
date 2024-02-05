// import React, { useState } from 'react';

// export default function SingleQ({ results }) {
//     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

//     console.log(results);

//     if (!results || !results.Questions || results.Questions.length === 0) {
//         return <div>No questions available</div>;
//     }

//     const handleNextQuestion = () => {
//         setCurrentQuestionIndex((prevIndex) =>
//             prevIndex < results.Questions.length - 1 ? prevIndex + 1 : prevIndex
//         );
//     };

//     const currentQuestion = results.Questions[currentQuestionIndex];

//     return (
//         <div>
//             <div>
//                 <p>{currentQuestion}</p>
//             </div>
//             <div>
//                 <button
//                     onClick={handleNextQuestion}
//                     disabled={currentQuestionIndex === results.Questions.length - 1}
//                 >
//                     Next Question
//                 </button>
//             </div>
//         </div>
//     );
// }
