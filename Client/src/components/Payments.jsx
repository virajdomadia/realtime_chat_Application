import React from "react";

function Payments() {
  return (
    <section className="">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 sm:px-6 lg:px-8 ">
        <div className="mx-auto max-w-screen-md text-center mb-8">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold">
            Designed for business team like yours
          </h2>
          <p className="mb-5 font-light sm:text-xl text-gray-400">
            Here at swift we focus on markets where technology, innovation, and
            capital can unlock long-term value and drive economic growth.
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-8 md:grid-cols-2">
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center bg-white rounded-lg shadow-lg">
            <h3 className="mb-4 text-2xl font-semibold">Starter</h3>
            <p className="font-light sm:text-lg text-gray-400">
              Best option for personal use & for your next project
            </p>
            <div className="flex justify-center items-baseline mt-6 text-2xl font-extrabold">
              <span className="mr-2 text-5xl font-extrabold">$29</span>
              <span className=" text-gray-400">/month</span>
            </div>
            <ul role="list" className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 3h4.5M6.343 6.343l3.182-3.182m8.954 3.182l-3.182-3.182M3 9.75v4.5m3.182 8.954l-3.182-3.182m14.636 3.182l-3.182-3.182M20.25 14.25h-4.5m-8.25-1.5a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z"
                  />
                </svg>
                <span>Individual configuration</span>
              </li>
              <li class name="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8c-1.5 0-3 .5-3 2s1.5 2 3 2 3 .5 3 2-1.5 2-3 2m0-10v2m0 10v2m8-8l-3 3-2-2"
                  />
                </svg>
                <span>No Setup or Hidden Fees</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 20h5M2 20h5M12 20h5M7 11a3 3 0 10-6 0 3 3 0 006 0zM9 12a3 3 0 116 0 3 3 0 01-6 0zm8-1a3 3 0 100 6 3 3 0 000-6z"
                  />
                </svg>
                <span>
                  Team Size: <span className="font-semibold">1 developer</span>
                </span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2a10 10 0 00-10 10v1.5a3.5 3.5 0 003.5 3.5h.5M17 12a3.5 3.5 0 00-3.5-3.5h-3A3.5 3.5 0 007 12m5 8.5a7.5 7.5 0 01-7.5-7.5V12A7.5 7.5 0 0112 4.5h0A7.5 7.5 0 0119.5 12v1.5M12 16l1.5-4.5 3.5 2.5-3.5 2.5-1.5-4.5z"
                  />
                </svg>
                <span>
                  Premium Support:{" "}
                  <span className="font-semibold">6 months</span>
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v3m0 0H9m3-3h3M9.75 14.25l2.25 2.25 4.5-4.5M12 20.5a8.5 8.5 0 100-17 8.5 8.5 0 000 17z"
                  />
                </svg>
                <span>
                  Free Updates: <span className="font-semibold">Included</span>
                </span>
              </li>
            </ul>
            <a
              href="#"
              className="text-white hover:bg-[#1B57E9] bg-primary rounded-lg py-3 px-6"
            >
              Get Started
            </a>
          </div>
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center bg-white rounded-lg shadow-md">
            <h3 className="mb-4 text-2xl font-semibold">Company</h3>
            <p className="font-light sm:text-lg text-gray-400">
              Relevent for multiple users, extended & Premium support included
              in this plan for your business needs.
            </p>
            <div className="flex justify-center items-baseline ">
              <span className="mr-2 text-5xl font-extrabold">$99</span>
              <span className="text-gray-400">/month</span>
            </div>
            <ul role="list" className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 3h4.5M6.343 6.343l3.182-3.182m8.954 3.182l-3.182-3.182M3 9.75v4.5m3.182 8.954l-3.182-3.182m14.636 3.182l-3.182-3.182M20.25 14.25h-4.5m-8.25-1.5a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z"
                  />
                </svg>
                <span>Individual configuration</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8c-1.5 0-3 .5-3 2s1.5 2 3 2 3 .5 3 2-1.5 2-3 2m0-10v2m0 10v2m8-8l-3 3-2-2"
                  />
                </svg>
                <span>No setup, or hidden fees</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 20h5M2 20h5M12 20h5M7 11a3 3 0 10-6 0 3 3 0 006 0zM9 12a3 3 0 116 0 3 3 0 01-6 0zm8-1a3 3 0 100 6 3 3 0 000-6z"
                  />
                </svg>
                <span>
                  Team size:{" "}
                  <span className="font-semibold">10 developers</span>
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2a10 10 0 00-10 10v1.5a3.5 3.5 0 003.5 3.5h.5M17 12a3.5 3.5 0 00-3.5-3.5h-3A3.5 3.5 0 007 12m5 8.5a7.5 7.5 0 01-7.5-7.5V12A7.5 7.5 0 0112 4.5h0A7.5 7.5 0 0119.5 12v1.5M12 16l1.5-4.5 3.5 2.5-3.5 2.5-1.5-4.5z"
                  />
                </svg>
                <span>
                  Premium support:{" "}
                  <span className="font-semibold">24 months</span>
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v3m0 0H9m3-3h3M9.75 14.25l2.25 2.25 4.5-4.5M12 20.5a8.5 8.5 0 100-17 8.5 8.5 0 000 17z"
                  />
                </svg>
                <span>
                  Free updates: <span className="font-semibold">Included</span>
                </span>
              </li>
            </ul>
            <a
              href="#"
              className="text-white hover:bg-[#1B57E9] bg-primary px-6 py-3 rounded-md text-center"
            >
              Get started
            </a>
          </div>
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center bg-white rounded-lg shadow-lg">
            <h3 className="mb-4 text-2xl font-semibold">Enterprise</h3>
            <p className="font-light sm:text-lg text-gray-400">
              Best for large scale uses and extended redistribution rights for
              your business.
            </p>
            <div className="flex justify-center items-baseline mt-6 text-2xl font-extrabold">
              <span className="mr-2 text-5xl font-extrabold">$49</span>
              <span className=" text-gray-400">/month</span>
            </div>
            <ul role="list" className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 3h4.5M6.343 6.343l3.182-3.182m8.954 3.182l-3.182-3.182M3 9.75v4.5m3.182 8.954l-3.182-3.182m14.636 3.182l-3.182-3.182M20.25 14.25h-4.5m-8.25-1.5a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z"
                  />
                </svg>
                <span>Individual Configuration</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8c-1.5 0-3 .5-3 2s1.5 2 3 2 3 .5 3 2-1.5 2-3 2m0-10v2m0 10v2m8-8l-3 3-2-2"
                  />
                </svg>
                <span>No setup, or hidden fees</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 20h5M2 20h5M12 20h5M7 11a3 3 0 10-6 0 3 3 0 006 0zM9 12a3 3 0 116 0 3 3 0 01-6 0zm8-1a3 3 0 100 6 3 3 0 000-6z"
                  />
                </svg>
                <span>
                  Team size:{" "}
                  <span className="font-semibold">100+ developer</span>
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2a10 10 0 00-10 10v1.5a3.5 3.5 0 003.5 3.5h.5M17 12a3.5 3.5 0 00-3.5-3.5h-3A3.5 3.5 0 007 12m5 8.5a7.5 7.5 0 01-7.5-7.5V12A7.5 7.5 0 0112 4.5h0A7.5 7.5 0 0119.5 12v1.5M12 16l1.5-4.5 3.5 2.5-3.5 2.5-1.5-4.5z"
                  />
                </svg>
                <span>
                  Premium support:{" "}
                  <span className="font-semibold">36 months</span>
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v3m0 0H9m3-3h3M9.75 14.25l2.25 2.25 4.5-4.5M12 20.5a8.5 8.5 0 100-17 8.5 8.5 0 000 17z"
                  />
                </svg>
                <span>
                  Free updates: <span className="font-semibold">Included</span>
                </span>
              </li>
            </ul>
            <a
              href="#"
              className="text-white hover:bg-[#1B57E9] bg-primary rounded-lg py-3 px-6"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Payments;
