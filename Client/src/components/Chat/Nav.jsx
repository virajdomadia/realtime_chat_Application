import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
const Nav = () => {
  const { logout, isAuthenticated } = useAuth();
  const [isMobile, setIsMobile] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated]);
  return (
    <>
      <button
        onClick={() => setIsMobile(!isMobile)}
        className="flex fixed bottom-5 h-10 aspect-square lg:hidden right-5 items-center justify-center bg-primary text-white rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      {isMobile && (
        <header className="fixed h-screen w-[150px] z-40 lg:static lg:w-[250px] bg-primary text-white flex flex-col items-center justify-between">
          <Link
            to="/"
            className="flex gap-2 items-center justify-center border-b-2 border-white w-full py-4"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Swift Logo"
            />
            <span className="font-semibold text-xl mr-2">Swift</span>
          </Link>
          <nav className="h-full flex flex-col my-4 justify-between">
            <div className="flex flex-col gap-5 ">
              <Link to="/profile" className="flex items-end gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM12 13.5c3.25 0 5.75 2.25 5.75 5s-2.5 5-5.75 5-5.75-2.25-5.75-5 2.5-5 5.75-5z"
                  />
                </svg>
                <span>Profile</span>
              </Link>
              <Link to="/chathome" className="flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0zm4.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0zM8.625 9a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0zm4.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0zM3 6h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z"
                  />
                </svg>
                <span>Chats</span>
              </Link>
            </div>
            <Link className="flex items-end gap-1 mb-14">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6A2.25 2.25 0 0 0 5.25 5.25V9M3 12l3-3m0 0l-3-3m3 3h10.5a2.25 2.25 0 0 1 2.25 2.25v8.5A2.25 2.25 0 0 1 13.5 21H5.25A2.25 2.25 0 0 1 3 18.75v-8.5A2.25 2.25 0 0 1 5.25 9H15.75z"
                />
              </svg>
              <button onClick={logout}>Logout</button>
            </Link>
          </nav>
        </header>
      )}
    </>
  );
};
export default Nav;
