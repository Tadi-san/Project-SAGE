import React from "react"; // Assuming you have a separate CSS file
const Service = () => {
  return (
    <div className="flex items-center justify-center min-h-screen relative">
      <div className="hidden lg:block absolute bottom-[14rem] left-36 transform z-10 overflow-hidden">
        <div className="w-28 h-28 bg-[#BCE1F5] rounded-full"></div>
      </div>

      <div className="relative py-16 overflow-hidden w-3/4 mx-auto">
        <div className="absolute rounded-[30px] inset-0 bg-[#1d5d1a] h-64"></div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="flex lg:flex-row flex-col justify-between items-center mb-8">
            <h2 className="lg:text-3xl text-[20px] font-poppins font- ml-5 text-white">
              Our best service for you!
            </h2>
            <p className="text-white text-lg font-poppins mr-9 text-left max-w-md">
              Our mission is to create an enhanced educational software
              experience for children that leverages the latest advancements in
              technology to ignite their curiosity, facilitate engaging
              learning, and help them develop essential knowledge and skills.
            </p>
          </div>
          <div className="relative text-center z-20 grid grid-cols-1 md:grid-cols-3 mx-auto gap-4">
            <div className="service-item">
              <div className="relative hover:ring-2 hover:ring-[#2092CF] transition-all rounded-[15px] p-12 m-4 bg-[#FAFAFA] text-black shadow-md transform translate-y-[-20px] h-80">
                <div className="flex items-center justify-center text-4xl text-center mb-2">
                  <img
                    src={"./fun.png"}
                    className="w-[55px] h-[50px] text-center"
                    alt="alarm"
                  />
                </div>
                <h3 className="text-xl font-semibold font-poppins text-[#5A5555] mb-6 mt-7">
                  Fun
                </h3>
                <p className="lg:text-[16px] font-poppins text-[10px] text-[#5A5555]">
                  The generative AI capabilities will allow for the creation of
                  dynamic, personalized quizzes that provide immediate feedback,
                  reinforce key concepts, and challenge children in a fun and
                  rewarding way.
                </p>
              </div>
            </div>
            <div className="service-item">
              <div className="relative rounded-[15px] hover:ring-2 hover:ring-[#2092CF] transition-all bg-[#FAFAFA] text-black p-12 m-4 shadow-md transform translate-y-[-20px] h-80">
                <div className="flex items-center justify-center text-4xl mb-2">
                  <img
                    src={"/game.png"}
                    className="w-[55px] h-[50px] text-center"
                    alt="bag"
                  />
                </div>
                <h3 className="text-xl font-poppins font-semibold mb-6 mt-7 text-[#5A5555]">
                  Game based
                </h3>
                <p className="lg:text-[16px] font-poppins text-[10px] text-[#5A5555]">
                  The integration of game-based mechanics, such as scoring
                  systems, challenges, and rewards, will help make the learning
                  process more enjoyable, motivating, and memorable for
                  children.
                </p>
              </div>
            </div>
            <div className="service-item">
              <div className="relative rounded-[15px] hover:ring-2 hover:ring-[#2092CF] transition-all bg-[#FAFAFA] text-black p-12 m-4 shadow-md transform translate-y-[-20px] h-80">
                <div className="flex items-center justify-center text-4xl mb-2">
                  <img
                    src={"/ai.png"}
                    className="w-[55px] h-[50px] text-center"
                    alt="tick"
                  />
                </div>
                <h3 className="text-xl font-poppins font-semibold mb-6 mt-7 text-[#5A5555]">
                  AI Assistance
                </h3>
                <p className="lg:text-[16px] font-poppins text-[10px] text-[#5A5555]">
                  By understanding each child's progress, learning patterns, and
                  strengths, the AI can adjust the pace, difficulty, and
                  delivery of the content, creating a more personalized and
                  effective learning journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
