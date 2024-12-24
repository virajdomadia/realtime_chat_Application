import React from "react";

const Features = () => {
  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white sm:text-5xl">
            Designed for business teams like yours
          </h2>
          <p className="sm:text-xl text-gray-400">
            Here at Swift we focus on markets where technology, innovation, and
            capital can unlock long-term value and drive economic growth.
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8">
          <div>
            <div className="flex justify-center items-center mb-4">
              <svg
                className="w-5 h-5 text-white lg:w-6 lg:h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">Marketing</h3>
            <p className="text-gray-400">
              Plan it, create it, launch it. Collaborate seamlessly with all the
              organization and hit your marketing goals every month with our
              marketing plan.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4">
              <svg
                className="w-5 h-5 text-white lg:w-6 lg:h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">Security</h3>
            <p className="text-gray-400">
              Protect your organization, devices, and stay compliant with
              structured workflows and custom permissions made for you.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4">
              <svg
                className="w-5 h-5 text-white lg:w-6 lg:h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0"
                  clipRule="evenodd"
                ></path>
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">
              Business Automation
            </h3>
            <p className="text-gray-400">
              Auto-assign tasks, send Slack messages, and much more. Now power
              up with hundreds of new templates to help you get started.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4">
              <svg
                className="w-5 h-5 text-white lg:w-6 lg:h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.433 7.418c.155-.103.346-.196.567-.26" />
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">Finance</h3>
            <p className="text-gray-400">
              Audit-proof software built for critical financial processes like
              month-end close and quarterly budgeting.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4">
              <svg
                className="w-5 h-5 text-white lg:w-6 lg:h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">
              Enterprise Design
            </h3>
            <p className="text-gray-400">
              Craft beautiful, delightful experiences for both marketing and
              product with real cross-company collaboration.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4">
              <svg
                className="w-5 h-5 text-white lg:w-6 lg:h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">Operations</h3>
            <p className="text-gray-400">
              Keep your company’s lights on with customizable, iterative and
              structured workflows built for all efficient teams and
              individuals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
