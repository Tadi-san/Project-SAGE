"use client";
import React, { useState, useEffect } from "react";
import ChoiceCardFullPicture from "../../components/ChoiceCardFullPicture";
import axios from "axios";
import Loader from "@/components/Loader";

const CapitalQuiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState(0);
  const [time, setTime] = useState(60);
  const [quiz, setQuiz] = useState<{ quiz: any[] }>({ quiz: [] });

  const fetchQuiz = async () => {
    try {
      await axios
        .post("http://localhost:5000/api/get_quizzes")
        .then((response) => {
          setQuiz(response.data);
          console.log(response.data);
        })
        .catch((error) => console.error(error));
    } catch (error) {
      console.error(error);
    }
  };

  const handleCheckClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const correctAnswer = quiz.quiz[currentQuestionIndex].correct;
    if (selectedChoice === correctAnswer) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < quiz.quiz.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedChoice(null);
      setTime(60);
    } else {
      setProgress(currentQuestionIndex + 1);
      alert(
        `Quiz finished! Your score is ${
          score + (selectedChoice === correctAnswer ? 1 : 0)
        }/${quiz.quiz.length}`
      );
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);
    if (time <= 0) {
      if (quiz.quiz[currentQuestionIndex + 1]) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    }
    return () => clearInterval(timer);
  }, [time, currentQuestionIndex, quiz.quiz]);

  useEffect(() => {
    setTime(60);
    setProgress(currentQuestionIndex);
  }, [currentQuestionIndex]);

  useEffect(() => {
    fetchQuiz();
  }, []);

  if (quiz.quiz.length == 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader />
      </div>
    );
  }

  const currentQuestion = quiz.quiz[currentQuestionIndex];

  return (
    <div className="flex flex-row justify-center items-center h-screen bg-gradient-to-b from-gray-200 to-white font-sans">
      <div className="bg-white rounded-lg shadow-md p-6  w-full max-w-4xl">
        <ProgressBar
          value={progress}
          max={quiz.quiz.length}
          // className="w-full mb-4"
        />
        <div className="mt-4 text-xl">Score: {score}</div>
        <div className="mt-2 text-md">Time: {time} seconds</div>
        <ChoiceCardFullPicture
          // imageurl={currentQuestion.imageurl}
          question={currentQuestion.question}
          answers={currentQuestion.answers}
          selectedChoice={selectedChoice}
          setSelectedChoice={setSelectedChoice}
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

const ProgressBar = ({ value, max }: { value: number; max: number }) => {
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

export default CapitalQuiz;
