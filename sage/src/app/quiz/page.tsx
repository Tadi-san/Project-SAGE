"use client";
import React, { useState, useEffect } from "react";
import ChoiceCardFullPicture from "../../components/ChoiceCardFullPicture";
const quizData = {
  quiz: [
    {
      question: "What is the sum of 2+2?",
      imageurl: "https://images.unsplash.com/photo-1626820000000-4b3b3b3b3b3b",
      answers: {
        a: "1",
        b: "2",
        c: "3",
        d: "4",
      },
      correct: "d",
    },
    {
      question: "What is the product of 3*5?",
      answers: {
        a: "10",
        b: "12",
        c: "15",
        d: "20",
      },
      correct: "c",
    },
    {
      question: "What is the result of 7-3?",
      answers: {
        a: "2",
        b: "3",
        c: "4",
        d: "6",
      },
      correct: "c",
    },
    {
      question: "What is the quotient of 12/3?",
      answers: {
        a: "2",
        b: "3",
        c: "4",
        d: "6",
      },
      correct: "c",
    },
    {
      question: "What is the value of x in the equation 2x = 6?",
      answers: {
        a: "1",
        b: "3",
        c: "2",
        d: "4",
      },
      correct: "b",
    },
    {
      question: "What is the result of 9+1?",
      answers: {
        a: "8",
        b: "9",
        c: "10",
        d: "11",
      },
      correct: "c",
    },
    {
      question: "What is the product of 4*4?",
      answers: {
        a: "12",
        b: "13",
        c: "16",
        d: "20",
      },
      correct: "c",
    },
    {
      question: "What is the result of 8-2?",
      answers: {
        a: "6",
        b: "5",
        c: "4",
        d: "7",
      },
      correct: "a",
    },
    {
      question: "What is the quotient of 24/4?",
      answers: {
        a: "6",
        b: "5",
        c: "9",
        d: "8",
      },
      correct: "a",
    },
    {
      question: "What is the value of y in the equation y+2 = 8?",
      answers: {
        a: "6",
        b: "7",
        c: "8",
        d: "9",
      },
      correct: "a",
    },
  ],
};

const CapitalQuiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState(0);
  const [time, setTime] = useState(0);

  const handleChoiceSelect = (choice) => {
    // console.log(choice);
    setSelectedChoice(choice);
  };

  const handleCheckClick = (e) => {
    e.preventDefault();
    const correctAnswer = quizData.quiz[currentQuestionIndex].correct;
    if (selectedChoice === correctAnswer) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < quizData.quiz.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedChoice(null);
      setTime(0);
    } else {
      setProgress(currentQuestionIndex + 1);
      alert(
        `Quiz finished! Your score is ${score + (selectedChoice === correctAnswer ? 1 : 0)
        }/${quizData.quiz.length}`
      );

    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [time]);


  useEffect(() => {
    setProgress(currentQuestionIndex);
  }, [currentQuestionIndex]);

  const currentQuestion = quizData.quiz[currentQuestionIndex];

  return (
    <div className="flex flex-row justify-center items-center h-screen bg-gradient-to-b from-gray-200 to-white font-sans">
      <div className="bg-white rounded-lg shadow-md p-6  w-full max-w-4xl">
        <ProgressBar
          value={progress}
          max={quizData.quiz.length}
        // className="w-full mb-4"
        />
        <div className="mt-4 text-xl">Score: {score}</div>
        <div className="mt-2 text-md">Time: {time} seconds</div>
        <ChoiceCardFullPicture
          imageurl={currentQuestion.imageurl}
          question={currentQuestion.question}
          answers={currentQuestion.answers}
          selectedChoice={selectedChoice}
          onChoiceSelect={handleChoiceSelect}
        />
        <button
          className="block w-full bg-green-500 hover:bg-green-600 text-white rounded-md py-3 px-4 mt-6 cursor-pointer transition-colors"
          onClick={handleCheckClick}
        >
          Check
        </button>

      </div>
    </div>
  );
};

export default CapitalQuiz;
const ProgressBar = ({ value, max }: { value: number, max: number }) => {
  const percentage = (value / max) * 100;
  console.log(percentage, "%");
  return (
    <div className="w-full bg-gray-200 rounded-full h-6">
      <div
        className="bg-blue-500 h-6 rounded-full transition-all duration-300"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};
// const QuizPage = () => {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedChoice, setSelectedChoice] = useState(null);
//   const [score, setScore] = useState(0);
//   const [progress, setProgress] = useState(0);
//   const [time, setTime] = useState(0);

//   const handleChoiceSelect = (choice) => {
//     setSelectedChoice(choice);
//   };

//   const handleCheckClick = () => {
//     const correctAnswer = quizData.quiz[currentQuestionIndex].correct;
//     if (selectedChoice === correctAnswer) {
//       setScore(score + 1);
//     }
//     if (currentQuestionIndex < quizData.quiz.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//       setSelectedChoice(null);
//       setTime(0);
//     } else {
//       alert(`Quiz finished! Your score is ${score + (selectedChoice === correctAnswer ? 1 : 0)}/${quizData.quiz.length}`);
//     }
//   };

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTime((prevTime) => prevTime + 1);
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [currentQuestionIndex]);

//   useEffect(() => {
//     setProgress((currentQuestionIndex / quizData.quiz.length) * 100);
//   }, [currentQuestionIndex]);

//   const currentQuestion = quizData.quiz[currentQuestionIndex];

//   return (
//     <div className="flex flex-col items-center">
//       <h1 className="text-3xl font-bold mb-4">Quiz</h1>
//       <ProgressBar value={progress} max={quizData.quiz.length} className="w-full mb-4" />
//       <ChoiceCardFullPicture
//         question={currentQuestion.question}
//         answers={currentQuestion.answers}
//         selectedChoice={selectedChoice}
//         onChoiceSelect={handleChoiceSelect}
//       />
//       <button
//         className="block w-full bg-green-500 hover:bg-green-600 text-white rounded-md py-3 px-4 mt-6 cursor-pointer transition-colors"
//         onClick={handleCheckClick}
//       >
//         Check
//       </button>
//       <div className="mt-4 text-xl">Score: {score}</div>
//       <div className="mt-2 text-md">Time: {time} seconds</div>
//     </div>
//   );
// };

// export default QuizPage;

// const ProgressBar = ({ value, max }) => {
//     const percentage = (value / max) * 100;

//     return (
//       <div className="w-full bg-gray-200 rounded-full h-6">
//         <div
//           className="bg-blue-500 h-6 rounded-full transition-all duration-300"
//           style={{ width: `${percentage}%` }}
//         ></div>
//       </div>
//     );
//   };
