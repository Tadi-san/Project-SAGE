
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
