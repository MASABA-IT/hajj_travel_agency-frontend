import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaEye, FaEyeSlash, FaFacebookF, FaTwitter } from "react-icons/fa";
import { signIn } from "../../store/slices/authSlice";
import "./SignIn.css";
const SignIn = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState({
    email: false,
    password: false,
  });
  const [userData, setUserData] = useState({ email: "", password: "" });
  const { loading, error } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFocus = (field) => {
    setIsFocused((prevState) => ({ ...prevState, [field]: true }));
  };

  const handleBlur = (field) => {
    setIsFocused((prevState) => ({ ...prevState, [field]: false }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(userData));
  };

  return (
    <div className="max-w-[500px] w-full bg-white p-8 rounded-xl shadow-lg">
      <div className="w-full flex flex-col gap-5 md:gap-0 md:flex-row justify-center items-center  mb-8">
        <h2 className="md:flex-1 text-2xl font-bold text-end text-zinc-600">
          Sign In
        </h2>
        <div className="md:flex-1  flex justify-end space-x-4">
          <a
            href="#"
            className="text-zinc-400 border p-2 rounded-full hover:text-zinc-800 hover:shadow-lg duration-75 active:translate-y-2"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="text-zinc-400 border p-2 rounded-full hover:text-blue-800 hover:shadow-lg duration-75 active:translate-y-2"
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="signIn">
        {/* Email Input */}
        <div className="relative mb-4">
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            onFocus={() => handleFocus("email")}
            onBlur={() => handleBlur("email")}
            id="email"
            className="w-full p-2 border-b-2 border-gray-300 focus:border-green-600 focus:outline-none peer"
            autoComplete="email"
          />
          <label
            htmlFor="email"
            className={`absolute left-2 top-2 text-gray-500 transition-all duration-200 ${
              userData.email || isFocused.email
                ? "top-[-15px] text-green-600"
                : "top-2 text-gray-500"
            }`}
          >
            Email Address
          </label>
        </div>

        {/* Password Input */}
        <div className="relative mb-6">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={userData.password}
            onChange={handleChange}
            onFocus={() => handleFocus("password")}
            onBlur={() => handleBlur("password")}
            id="password"
            className="w-full p-2 border-b-2 border-gray-300 focus:border-green-600 focus:outline-none peer"
            autoComplete="current-password"
          />
          <label
            htmlFor="password"
            className={`absolute left-2 top-2 text-gray-500 transition-all duration-200 ${
              userData.password || isFocused.password
                ? "top-[-15px] text-green-600"
                : "top-2 text-gray-500"
            }`}
          >
            Password
          </label>
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg"
          disabled={loading}
        >
          {loading ? "Signing In..." : "Sign In"}
        </button>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </form>
    </div>
  );
};

export default SignIn;
