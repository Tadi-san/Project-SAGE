import React from "react";

const ThirdSec = () => {
  return (
    <div className="flex justify-center items-center mb-32">
      <div className="flex gap-4 flex-col items-center w-2/4 text-center mx-auto">
        <div className="lg:text-[55px] font-poppins transition-all font-medium md:text-[30px] text-[21px] text-[#1bb214]">
          Our platform makes learning simple
        </div>
        <div className="lg:text-[19px] transition-all font-poppins md:text-[14px] text-[9px]">
          Many existing educational software platforms have limitations in terms
          of the depth and breadth of content, as well as the level of
          interactivity, personalization, and fun they can offer. With the rapid
          advancements in AI, multimedia, and game-based learning technologies,
          there is an opportunity to create a more dynamic, responsive, and
          enjoyable educational experience that better meets the needs of modern
          learners.
        </div>
        <div>
          <a
            href="/home"
            className="bg-[#1bb214] hover:bg-white hover:ring-2 hover:ring-[#1bb214] hover:text-[#1bb214] transition-all font-poppins text-white p-2 lg:px-14 px-2 text-sm rounded-[4px]"
          >
            Get started
          </a>
        </div>
      </div>
    </div>
  );
};

export default ThirdSec;
