// "use client";

// import React, { useState } from "react";

// const ChoiceCardFullPicture = () => {
//     const [selectedChoice, setSelectedChoice] = useState(null);

//     const handleCheckClick = () => {
//         // Implement your logic to check the selected choice
//         console.log("Checked choice:", selectedChoice);
//         setSelectedChoice(choice);
//     };

//     return (
//         <div className="flex flex-row justify-center items-center h-screen bg-gradient-to-b from-gray-200 to-white font-sans">
//             <div className="bg-white rounded-lg shadow-md p-6  w-full max-w-4xl">
//                 <div className="text-2xl font-bold text-gray-800 mb-4">
//                     What is the capital of France?
//                 </div>
//                 <div className="grid grid-cols-4 gap-3">
//                     <div
//                         className={`flex flex-col items-center cursor-pointer rounded-md p-4 transition-colors ${selectedChoice === "Paris"
//                             ? "bg-blue-200"
//                             : "bg-gray-100 hover:bg-gray-200"
//                             }`}
//                     // onClick={() => handleChoiceClick("Paris")}
//                     >
//                         <img
//                             src="https://via.placeholder.com/300x200"
//                             alt="Choice 1"
//                             className="w-full h-48 rounded-md object-cover mb-3"
//                         />
//                         <div className="flex flex-row  justify-evenly ">
//                             <input
//                                 type="radio"
//                                 name="choice"
//                                 checked={selectedChoice === "Berlin"}
//                                 className="mr-2"
//                             />
//                             <span className="text-gray-800 text-xl font-bold">Berlin</span>
//                         </div>{" "}
//                     </div>
//                     <div
//                         className={`flex flex-col items-center cursor-pointer rounded-md p-4 transition-colors ${selectedChoice === "London"
//                             ? "bg-blue-200"
//                             : "bg-gray-100 hover:bg-gray-200"
//                             }`}
//                     // onClick={() => handleChoiceClick("London")}
//                     >
//                         {" "}
//                         <img
//                             src="https://via.placeholder.com/300x200"
//                             alt="Choice 2"
//                             className="w-full h-48 rounded-md object-cover mb-3"
//                         />
//                         <div className="flex flex-row  justify-evenly ">
//                             <input
//                                 type="radio"
//                                 name="choice"
//                                 checked={selectedChoice === "Berlin"}
//                                 className="mr-2"
//                             />
//                             <span className="text-gray-800 text-xl font-bold">Berlin</span>
//                         </div>
//                     </div>
//                     <div
//                         className={`flex flex-col items-center cursor-pointer rounded-md p-4 transition-colors ${selectedChoice === "Berlin"
//                             ? "bg-blue-200"
//                             : "bg-gray-100 hover:bg-gray-200"
//                             }`}
//                     // onClick={() => handleChoiceClick("Berlin")}
//                     >
//                         <img
//                             src="https://via.placeholder.com/300x200"
//                             alt="Choice 3"
//                             className="w-full h-48 rounded-md object-cover mb-3"
//                         />
//                         <div className="flex flex-row  justify-evenly ">
//                             <input
//                                 type="radio"
//                                 name="choice"
//                                 checked={selectedChoice === "Berlin"}
//                                 className="mr-2"
//                             />
//                             <span className="text-gray-800 text-xl font-bold">Berlin</span>
//                         </div>
//                     </div>
//                     <div
//                         className={`flex flex-col items-center cursor-pointer rounded-md p-4 transition-colors ${selectedChoice === "Rome"
//                             ? "bg-blue-200"
//                             : "bg-gray-100 hover:bg-gray-200"
//                             }`}
//                     // onClick={() => handleChoiceClick("Rome")}
//                     >
//                         <img
//                             src="https://via.placeholder.com/300x200"
//                             alt="Choice 4"
//                             className="w-full h-48 rounded-md object-cover mb-3"
//                         />
//                         <div className="flex flex-row  justify-evenly ">
//                             <input
//                                 type="radio"
//                                 name="choice"

//                                 checked={selectedChoice === "Berlin"}
//                                 className="mr-2"
//                             />
//                             <span className="text-gray-800 text-xl font-bold">Berlin</span>
//                         </div>{" "}
//                     </div>
//                 </div>
//                 <button
//                     className="block w-full bg-green-500 hover:bg-green-600 text-white rounded-md py-3 px-4 mt-6 cursor-pointer transition-colors"
//                     onClick={handleCheckClick}
//                 >
//                     Check
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default ChoiceCardFullPicture;

"use client";

import React, { useState } from "react";

const ChoiceCardFullPicture = ({
  question,
  answers,
  selectedChoice,
  onChoiceSelect,
}) => {
  return (
    <div className="bg-white rounded-lg  p-6 w-full max-w-4xl">
      <div className="text-2xl font-bold text-gray-800 mb-4">{question}</div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {Object.entries(answers).map(([key, answer]) => (
          <div
            key={key}
            className={`flex flex-col items-center cursor-pointer rounded-md p-4 transition-colors ${
              selectedChoice === key
                ? "bg-blue-200"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
            onClick={() => onChoiceSelect(key)}
          >
            <img
              src={answer.image}
              alt={`Choice ${key}`}
              className="w-full h-48 rounded-md object-cover mb-3"
            />
            <div className="flex flex-row justify-evenly">
              <input
                type="radio"
                name="choice"
                checked={selectedChoice === key}
                className="mr-2"
              />
              <span className="text-gray-800 text-xl font-bold">
                {answer.text}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChoiceCardFullPicture;
