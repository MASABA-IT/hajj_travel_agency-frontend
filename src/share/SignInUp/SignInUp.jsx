import { useState } from "react";
import bgImg from "../../assets/imgs/Caliography.png";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";

const SignInUp = () => {
  const [formType, setFormType] = useState("signIn");

  return (
    <div className="max-w-[1400px] mx-auto bg-cover">
      <div
        className={`w-[90%] md:w-full mx-auto text-black md:h-[90vh] bg-cover rounded-sm mt-28 flex py-14 flex-col-reverse  md:flex-row ${
          formType === "signUp" ? "sign-up-active" : "sign-in-active"
        }`}
      >
        {/* Left Side */}
        <div
          className={`w-full md:w-1/2 h-full flex justify-center items-center ${
            formType === "signUp" ? "md:bg-blue-50" : "md:bg-green-50"
          }`}
        >
          {formType === "signUp" ? (
            // Sign In Button
            <div className="flex flex-col justify-center items-center space-y-2">
              <h2 className="text-3xl text-zinc-600">Welcome to Sign Up</h2>
              <p>You have an account?</p>
              <button
                className="px-4 py-2 text-white bg-emerald-600 rounded"
                onClick={() => setFormType("signIn")} // Switch to Sign In
              >
                Sign In
              </button>
            </div>
          ) : (
            // Login Form
            <SignIn />
          )}
        </div>

        {/* Right Side */}
        <div
          className={`w-full md:w-1/2 h-full py-10 md:py-0 flex justify-center items-center bg-cover ${
            formType === "signUp" ? "bg-green-50" : "bg-blue-50"
          }`}
          style={{
            backgroundImage: `url(${bgImg})`,
            backgroundRepeat: "no-repeat",
          }}
        >
          {formType === "signUp" ? (
            // Sign Up Form
            <SignUp />
          ) : (
            // Sign Up Button
            <div className="flex flex-col justify-center items-center space-y-2">
              <h2 className="text-3xl text-zinc-600">Welcome to Sign In</h2>
              <p>Don&apos;t have an account?</p>
              <button
                className="px-4 py-2 text-white bg-cyan-600 rounded"
                onClick={() => setFormType("signUp")} // Switch to Sign Up
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignInUp;
