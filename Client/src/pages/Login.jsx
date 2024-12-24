import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useAuth } from "../context/authContext";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const { isAuthenticated, setAuthenticated } = useAuth();

  useEffect(() => {
    console.log(isAuthenticated);
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "/api/user/login";
      console.log(data);
      const response = await axios.post(url, data, {
        withCredentials: true,
      });
      console.log(response.message);
      if (response.status === 200) {
        setAuthenticated(true);
        navigate("/");
      }
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        toast.error(error.response.data.message);
      }
    }
  };
  return (
    <section className="bg-black/95 min-h-screen flex justify-center items-center">
      <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto px-4 py-8">
        <div className="w-full rounded-lg shadow-md border border-slate-800 bg-slate-900 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-normal text-slate-100">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-slate-100"
                >
                  Your email
                </label>
                <input
                  onChange={handleChange}
                  value={data.email}
                  type="email"
                  name="email"
                  id="email"
                  className="border border-slate-700 bg-slate-800 text-slate-100 sm:text-sm rounded-lg block w-full p-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-slate-100"
                >
                  Password
                </label>
                <input
                  onChange={handleChange}
                  value={data.password}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="border border-slate-700 bg-slate-800 text-slate-100 sm:text-sm rounded-lg block w-full p-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border rounded focus:ring-4 focus:ring-offset-4 focus:ring-offset-dark focus:ring-white text-dark"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className=" text-gray-400">
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-slate-400 hover:text-slate-300"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 rounded-lg p-2.5 transition-colors"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-slate-400 hover:underline">
                Don’t have an account yet?{" "}
                <Link
                  to={"/register"}
                  className="font-medium text-slate-400 hover:text-slate-300"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Login;
