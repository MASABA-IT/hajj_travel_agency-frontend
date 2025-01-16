import React, { useState } from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

const SignInUp = () => {
  // State to toggle between Sign In and Sign Up
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="max-w-[1400px] mx-auto">
      <div className="w-[90%] md:w-full mx-auto text-black   h-[600px] bg-cover rounded-sm mt-28 flex py-14">
        {/* Left Side (Login or Sign Up Form based on isSignUp) */}
        <div
          className={`w-1/2 h-full flex justify-center items-center ${
            isSignUp ? "bg-blue-200" : "bg-green-200"
          }`}
        >
          {isSignUp ? (
            <div className="max-w-[400px] w-full bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-center">
                Sign Up Form
              </h2>
              {/* Add your sign up form fields here */}
              <form>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-2 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
                  Sign Up
                </button>
              </form>
            </div>
          ) : (
            <div className="max-w-[400px] w-full bg-white p-8 rounded-xl shadow-lg">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold mb-4 text-center text-gray-600">
                  Sign In
                </h2>
                <div className="flex justify-center space-x-4 mb-4">
                  <a
                    href="#"
                    className="text-zinc-400 border p-2 rounded-full hover:text-zinc-800"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="#"
                    className="text-zinc-400 border p-2 rounded-full hover:text-blue-800"
                  >
                    <FaTwitter />
                  </a>
                </div>
              </div>

              {/* Sign In Form Fields */}
              <form>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />

                <div className="flex justify-between items-center py-4">
                  {/* Remember Me Checkbox */}
                  <div className="flex items-center  ">
                    <input type="checkbox" id="remember-me" className="mr-2" />
                    <label
                      htmlFor="remember-me"
                      className="text-sm text-gray-600"
                    >
                      Remember Me
                    </label>
                  </div>

                  {/* Forgot Password Link */}
                  <div className="  ">
                    <a
                      href="#"
                      className="text-sm underline text-gray-600 hover:text-blue-800"
                    >
                      Forgot Password?
                    </a>
                  </div>
                </div>

                {/* Sign In Button */}
                <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
                  Sign In
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Right Side (Buttons for Sign In / Sign Up) */}
        <div
          className={`w-1/2 h-full flex justify-center items-center ${
            !isSignUp ? "bg-blue-200" : "bg-green-200"
          }`}
        >
          {!isSignUp ? (
            <div className=" flex flex-col justify-center items-center space-y-2">
              <h2 className="text-3xl">Welcome to SignIn</h2>
              <p>Don't have an account?</p>
              <button
                className="px-4 py-2 text-white bg-blue-600 rounded"
                onClick={() => setIsSignUp(true)} // Switch to Sign Up
              >
                Sign Up
              </button>
            </div>
          ) : (
            <div>
              <h2 className="text-3xl">Welcome to SignUp</h2>
              <p>You have an account?</p>
              <button
                className="px-4 py-2 text-white bg-green-600 rounded"
                onClick={() => setIsSignUp(false)} // Switch to Sign In
              >
                Sign In
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignInUp;
