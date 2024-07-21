import React from "react";
// import calander from "../assets/calander.jpg"; // Adjust the path to your image

const Hero = () => {
  return (
    <div className="flex items-center flex-col lg:flex-row justify-center w-3/4 mx-auto space-x-20 mt-[100px] rig-2 ing-blue-300 bg-white p-6 relative">
      <div className="text-center md:text-left ing-2 rng-red-300 lg:w-2/2">
        <h1 className="lg:text-6xl text-3xl font-lora  font-bold lg:leading-tight">
          Unlock{" "}
          <span className="text-[#1bb214] ">
            {" "}
            <br /> Your Child's <br />
          </span>
          Potential With <br />
          Fun Learning!
        </h1>
        <a
          href="/home"
          className="mt-10 px-10 rounded-lg py-1 font-poppins bg-[#1bb214] hover:bg-white hover:ring-2 hover:ring-[#1bb214] hover:text-[#1d5d1a] transition-all text-white shadow-lg"
        >
          Get Started
        </a>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center relative mt-20 lg:mt-0">
        <div className="absolute md:-top-8 md:left-11 lg:-top-10 lg:left-0 lg:w-[350px] lg:h-[380px] w-[250px] h-[280px] -top-10 -left-10 rounded-3xl bg-blue-100  transform  z-10"></div>
        <img
          src={"/hero.png"}
          alt="Calendar"
          className="relative md:right-12 lg:left-2 rounded-3xl z-20 lg:w-[400px] lg:h-[380px] w-[280px] h-[280px] bg-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
