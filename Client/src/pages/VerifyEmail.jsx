import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../context/authContext";

const VerifyEmail = () => {
  const { id, token } = useParams();
  const [loading, setLoading] = useState(false);
  const { isAuthenticated, checkAuth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
    if (isAuthenticated) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `/api/user/${id}/verify-email/${token}`
        );
        toast.success(response.data.message);
      } catch (error) {
        setLoading(false);
        toast.error(error.response.data.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id, token]);
  return (
    <div className="bg-dark min-h-screen text-white flex justify-center">
      {loading && (
        <div className="mb-10 flex flex-col items-center" role="status">
          <svg
            aria-hidden="true"
            className="w-20 h-20 animate-spin fill-primarySecond mx-auto"
            viewBox="0 0 100 101"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9765 22.3858 0 50 0C77.6142 0 100 22.9765 100 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.2253 33.4862C96.5882 31.0608 94.096 29.5914 91.6706 30.2285C85.9786 31.591 80.4091 34.316 75.7171 38.2285C71.0251 42.141 66.4566 47.591 63.6711 53.6739C60.8856 59.7568 59.6943 66.2618 60.199 72.7015C60.7037 79.1412 62.8845 85.2402 66.4444 90.1316C70.0043 95.023 74.8166 98.5212 80.0707 100.171C85.3249 101.82 90.7946 101.52 95.6504 99.3071C100.506 97.0943 104.505 93.1233 107.029 88.0235C109.553 82.9237 110.5 76.9715 109.663 71.0893C108.827 65.207 106.218 59.5674 102.1 55.0409C97.9819 50.5144 92.5895 47.181 86.6842 45.4343C80.7788 43.6875 74.4944 43.573 68.5876 45.1057C62.6808 46.6384 57.4557 49.7761 53.5507 54.1017C49.6458 58.4274 47.313 63.7136 46.9541 69.2169C46.5953 74.7202 48.2392 80.1568 51.5936 84.7129C54.9481 89.2691 59.7877 92.6786 65.0865 94.4039C70.3852 96.1291 75.9386 96.0923 81.1346 94.3038C86.3306 92.5153 90.9257 89.0331 94.2867 84.3326"
              fill="currentFill"
            />
          </svg>

          <span className="my-4 text-lg">Loading...</span>
        </div>
      )}
      {!loading && (
        <span className="my-4 text-xl font-medium">Verification</span>
      )}
      {!loading && !isAuthenticated && (
        <Link
          to={"/login"}
          className="inline-flex items-center justify-center px-4 py-2 mt-4 text-base font-medium text-white bg-primary rounded-md hover:bg-primaryHover"
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
    </div>
  );
};
export default VerifyEmail;
