
// import logo from '/logo.png'


const Bottom = () => {
  return (
    <footer class="bg-[#DDF0FA4F]">
      <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0 flex justify-start text-left flex-col gap-2">
            <a class="flex flex-col justify-start items-start gap-1">
              <img src={"/logo.png"} class="h-12 me-3" />
              <span class="text-3xl font-semibold whitespace-nowrap mt-3 font-poppins hover:text-[#2092CF] text-black">
                Appoint
              </span>
              <span class=" font-poppins font-light ">
                Simplifying your booking experience <br /> with Seamless
                Appointments
              </span>
            </a>
          </div>

          <div class="grid grid-cols-2 gap-8 sm:gap-6 font-poppins sm:grid-cols-3">
            <div>
              <h2 class="mb-6 text-sm font-semibold font-poppins  uppercase text-black">
                Company
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 gap-3 font-light">
                <li class="">
                  <a href="https://flowbite.com/" class="hover:text-[#2092CF]">
                    Home
                  </a>
                </li>
                <li>
                  <a class="hover:text-[#2092CF]">Features</a>
                </li>
                <li>
                  <a class="hover:text-[#2092CF]">Contact</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-black uppercase ">
                Resources
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-light ">
                <li class="">
                  <a class="hover:text-[#2092CF] ">Documentation</a>
                </li>
                <li>
                  <a class="hover:text-[#2092CF]">Papers</a>
                </li>
                <li>
                  <a class="hover:text-[#2092CF]">Press Conference</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-black uppercase ">
                Legal
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-light ">
                <li class="">
                  <a href="#" class="hover:text-[#2092CF]">
                    Terms of service
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-[#2092CF]">
                    Privacy Policy
                  </a>
                </li>
                <li class="">
                  <a href="#" class="hover:text-[#2092CF]">
                    Cookie policy
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-[#2092CF]">
                    Data processing
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            {" "}
            <a>© 2024 Appoint Inc. All rights reserved.</a>
          </span>
          <div class="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="#"
              class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                class="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="sr-only">Facebook page</span>
            </a>

            <a
              href="#"
              class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                class="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.311.975.975 1.248 2.242 1.31 3.608.058 1.267.07 1.647.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.336 2.633-1.31 3.608-.975.975-2.242 1.248-3.608 1.31-1.267.058-1.647.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.336-3.608-1.31-.975-.975-1.248-2.242-1.31-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.336-2.633 1.31-3.608.975-.975 2.242-1.248 3.608-1.31C8.416 2.175 8.796 2.163 12 2.163zM12 0C8.736 0 8.332.014 7.052.072 5.773.13 4.595.366 3.553 1.408 2.511 2.45 2.275 3.627 2.217 4.907 2.159 6.187 2.145 6.591 2.145 10s.014 3.813.072 5.093c.058 1.28.294 2.457 1.336 3.499 1.042 1.042 2.22 1.278 3.499 1.336 1.28.058 1.684.072 5.093.072s3.813-.014 5.093-.072c1.28-.058 2.457-.294 3.499-1.336 1.042-1.042 1.278-2.22 1.336-3.499.058-1.28.072-1.684.072-5.093s-.014-3.813-.072-5.093c-.058-1.28-.294-2.457-1.336-3.499C19.167.366 17.989.13 16.71.072 15.43.014 15.026 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324A6.162 6.162 0 0 0 12 5.838zm0 10.164a4.002 4.002 0 1 1 0-8.004 4.002 4.002 0 0 1 0 8.004zm6.406-11.845a1.44 1.44 0 1 0-2.88 0 1.44 1.44 0 0 0 2.88 0z"
                  clip-rule="evenodd"
                />
              </svg>

              <span class="sr-only">GitHub account</span>
            </a>
            <a
              href="#"
              class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                class="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M23.499 6.186c-.28-1.048-1.102-1.87-2.151-2.151-1.888-.507-9.449-.507-9.449-.507s-7.561 0-9.449.507C1.603 4.316.781 5.138.501 6.186 0 8.074 0 12 0 12s0 3.926.501 5.814c.28 1.048 1.102 1.87 2.151 2.151 1.888.507 9.449.507 9.449.507s7.561 0 9.449-.507c1.048-.281 1.87-1.103 2.151-2.151C24 15.926 24 12 24 12s0-3.926-.501-5.814zM9.545 15.568v-7.137l6.204 3.568-6.204 3.569z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Bottom;
