import React from 'react';

const ThirdSec = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex gap-4 flex-col items-center w-2/4 text-center mx-auto">
        <div className="lg:text-[55px] font-poppins hover:text-[59px] transition-all font-medium md:text-[30px] text-[21px] text-[#2092CF]">
          Our platform makes scheduling simple
        </div>
        <div className="lg:text-[19px] hover:text-[21px] transition-all font-poppins md:text-[14px] text-[9px]">
          Our platform was designed to make scheduling simple and effortless. With its intuitive interface and streamlined workflows, the process of coordinating appointments becomes seamless and stress-free.
        </div>
        <div>
          <button className="bg-[#2092CF] hover:bg-white hover:ring-2 hover:ring-[#2092CF] hover:text-[#2092CF] transition-all font-poppins text-white p-2 lg:px-14 px-2 text-sm rounded-[4px]">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default ThirdSec;
