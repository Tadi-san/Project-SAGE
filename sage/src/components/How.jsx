import React from 'react';

const How = () => {
  return (
    <section className="relative bg-[#DDF0FA4F]">
      {/* Blue circle at bottom left, visible on large devices only, behind main content */}
      <div className="hidden lg:block absolute bottom-0 -left-[140px] transform translate-x-6 translate-y-6 z-0">
        <div className="w-64 h-64 bg-[#BCE1F5] rounded-full"></div>
      </div>
      
      <div className="relative z-10 py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 mx-auto lg:mb-16 text-center">
          <h2 className="mb-4 font-poppins text-4xl tracking-tight mx-auto font-medium text-[#2092CF]">
            How it works
          </h2>
        </div>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-2">
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-[#2092CF] lg:h-12 lg:w-12">
              <p className="w-5 h-5 lg:w-6 lg:h-6 text-white text-xl flex justify-center">
                1
              </p>
            </div>
            <h3 className="mb-6 text-3xl lg:text-3xl font-bold font-poppins text-[#5A5555] ">Register Subscription</h3>
            <p className="text-[#5A5555] text-2xl font-poppins lg:text-2xl font-light ">
              Sign up your company by providing the necessary information. After the verification process, you will receive admin credentials to access the dashboard.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-[#2092CF] lg:h-12 lg:w-12">
              <p className="w-5 h-5 lg:w-6 lg:h-6 text-white text-xl flex justify-center">
                2
              </p>
            </div>
            <h3 className="mb-6 text-3xl lg:text-3xl font-bold text-[#5A5555] font-poppins ">Set Up Admin Dashboard</h3>
            <p className="text-[#5A5555] text-2xl font-light font-poppins lg:text-2xl">
              Log in to the admin dashboard using the provided credentials to manage your company's settings and configurations.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-[#2092CF] lg:h-12 lg:w-12">
              <p className="w-5 h-5 lg:w-6 lg:h-6 text-white text-xl flex justify-center">
                3
              </p>
            </div>
            <h3 className="mb-6 text-3xl lg:text-3xl font-bold text-[#5A5555] font-poppins">Add Employees</h3>
            <p className="text-[#5A5555] text-2xl font-light font-poppins lg:text-2xl">
              Onboard your employees and have them add their details, including their name, roles, and available time slots.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-[#2092CF] lg:h-12 lg:w-12">
              <p className="w-5 h-5 lg:w-6 lg:h-6 text-white text-xl flex justify-center">
                4
              </p>
            </div>
            <h3 className="mb-6 text-3xl lg:text-3xl font-bold text-[#5A5555] font-poppins ">Manage Bookings</h3>
            <p className="text-[#5A5555] text-2xl font-light font-poppins lg:text-2xl">
              Your clients can now easily book appointments with the right employee through the platform's intuitive booking system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default How;
