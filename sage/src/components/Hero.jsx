import React from "react";
// import calander from "../assets/calander.jpg"; // Adjust the path to your image

const Hero = () => {
  return (
    <div className="flex items-center flex-col lg:flex-row justify-center w-3/4 mx-auto space-x-20 mt-[100px] rig-2 ing-blue-300 bg-white p-6 relative">
      <div className="text-center md:text-left ing-2 rng-red-300 lg:w-2/2">
        <h1 className="lg:text-6xl text-3xl font-lora  font-bold lg:leading-tight">
          Effortless{" "}
          <span className="text-[#2092CF] ">
            {" "}
            <br /> Scheduling
          </span>
          , Automated for <br /> Your Convenience
        </h1>
        <button className="mt-6 px-10 rounded-[2px] py-1 font-poppins bg-[#2092CF] hover:bg-white hover:ring-2 hover:ring-[#2092CF] hover:text-[#2092CF] transition-all text-white shadow-lg">
          Get Started
        </button>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center relative mt-20 lg:mt-0">
        <div className="absolute md:-top-8 md:left-11 lg:-top-10 lg:left-0 lg:w-[350px] lg:h-[380px] w-[250px] h-[280px] -top-10 -left-10 rounded-3xl bg-blue-100  transform  z-10"></div>
        <img
          src={"/calander.jpg"}
          alt="Calendar"
          className="relative md:right-12 lg:left-2 rounded-3xl z-20 lg:w-[350px] lg:h-[380px] w-[250px] h-[280px]"
        />
      </div>
    </div>
  );
};

export default Hero;
