import { Link } from "react-router-dom";
import hero from "../assets/hero.png";
import { useAuth } from "../context/authContext";
const Hero = () => {
  const { isAuthenticated } = useAuth();
  return (
    <section className="">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:px-8 lg:py-12 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold lg:mb-6 md:text-5xl md:leading-tight lg:text-6xl">
            Swift Chat: Instant Connections, Effortless Conversa
          </h1>
          <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg">
            Connect Seamlessly, Chat Effortlessly: Elevate Your with Our
            Intuitive Chat Application!
          </p>
          {!isAuthenticated && (
            <Link
              to={"/login"}
              className="inline-flex items-center justify-center p-3 px-6 text-lg font-medium text-white bg-primary rounded-md hover:bg-primaryHover"
            >
              Login
              <svg
                class="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 10l-5.293-5.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </Link>
          )}
          {isAuthenticated && (
            <Link
              to={"/chathome"}
              className="inline-flex items-center justify-center p-3 px-6 text-lg font-medium text-white bg-primary rounded-md hover:bg-primaryHover"
            >
              Chat Home
              <svg
                class="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 10l-5.293-5.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </Link>
          )}
          {!isAuthenticated && (
            <Link
              to={"/register"}
              className="inline-flex items-center justify-center p-3 px-6 mt-4 text-lg font-medium text-white bg-primary rounded-md hover:bg-primaryHover"
            >
              Register
            </Link>
          )}
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src={hero} alt="mockup" className="mix-blend-" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
