import React from "react";
// import logo from "../logo.png";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around shadow-md items-center p-1">
      <div className="mt-1 w-[55px] h-[50px] md:mb-0">
        <img src={"/logo.png"} alt="Logo" />
      </div>
      <div className="flex flex-col md:flex-row  font-poppins space-y-2 md:space-y-0 md:space-x-4">
        <button className="text-sm hover:text-[#2092CF] ">Home</button>
        <button className="text-sm hover:text-[#2092CF]">Contact Us</button>
        <button className="text-sm hover:text-[#2092CF]">Features</button>
        <button className="text-sm hover:text-[#2092CF]">Pricing</button>
      </div>
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 mt-2 md:mt-0">
        <button className="text-[#2092CF] font-roboto hover:text-black text-sm p-2">Log in</button>
        <button className="bg-[#2092CF]  lg:px-4 px-2 py-2 rounded-[4px] hover:bg-white hover:ring-2 hover:ring-[#2092CF] hover:text-[#2092CF] transition-all text-white text-xs">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Header;
