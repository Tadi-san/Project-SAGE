import React from "react";
// import logo from "../logo.png";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around shadow-md items-center p-2">
      <div className="mt-1 w-[60px] h-[50px] md:mb-0">
        <img src={"/slogo.png"} alt="Logo" />
      </div>
      <div className="flex flex-col md:flex-row  font-poppins space-y-2 md:space-y-0 md:space-x-4">
        <a href="/landing" className="text-lg font-bold hover:text-[#2092CF] ">
          Home
        </a>
        <a href="/games" className="text-lg font-bold hover:text-[#2092CF]">
          Games
        </a>
        <a href="/quiz" className="text-lg font-bold hover:text-[#2092CF]">
          Quizzes
        </a>
        <a href="/about" className="text-lg font-bold hover:text-[#2092CF]">
          About Us
        </a>
      </div>
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 mt-2 md:mt-0">
        <button className="text-[#1bb214] font-roboto hover:text-black text-sm p-2">
          Log in
        </button>
        <a
          href="/home"
          className="bg-[#1bb214]  lg:px-4 px-2 py-2 rounded-[4px] hover:bg-white hover:ring-2 hover:ring-[#1d5d1a] hover:text-[#1d5d1a] transition-all text-white text-xs"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Header;
