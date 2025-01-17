import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { signUp } from "../../store/slices/authSlice";
import "./SignUp.css";
const SignUp = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [showRepassword, setShowRepassword] = useState(false);
  const [isFocused, setIsFocused] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    password: false,
    confirmPassword: false,
  });

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const { loading, error } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleFocus = (field) => {
    setIsFocused((prevState) => ({
      ...prevState,
      [field]: true,
    }));
  };

  const handleBlur = (field) => {
    setIsFocused((prevState) => ({
      ...prevState,
      [field]: false,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(userData));

    // Reset form after submission
    setUserData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="max-w-[500px] w-full bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-8  text-center text-zinc-600">
        Sign Up
      </h2>
      <form onSubmit={handleSubmit} className="signUp">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-4">
          {/* First Name */}
          <div className="relative w-full md:w-[48%] ">
            <input
              type="text"
              name="firstName"
              value={userData.firstName}
              onChange={handleChange}
              onFocus={() => handleFocus("firstName")}
              onBlur={() => handleBlur("firstName")}
              id="firstName"
              className="w-full p-2 border-b-2    border-gray-300 focus:border-green-600 focus:outline-none peer"
              autoComplete="given-name"
            />
            <label
              htmlFor="firstName"
              className={`absolute left-2 top-2 text-gray-500 transition-all duration-200 
                ${
                  userData.firstName || isFocused.firstName
                    ? "top-[-15px] text-green-600"
                    : "top-2 text-gray-500"
                }`}
            >
              First Name
            </label>
          </div>

          {/* Last Name */}
          <div className="relative w-full md:w-[48%]">
            <input
              type="text"
              name="lastName"
              value={userData.lastName}
              onChange={handleChange}
              onFocus={() => handleFocus("lastName")}
              onBlur={() => handleBlur("lastName")}
              id="lastName"
              className="w-full p-2 border-b-2 border-gray-300 focus:border-green-600 focus:outline-none peer"
              autoComplete="family-name"
            />
            <label
              htmlFor="lastName"
              className={`absolute left-2 top-2 text-gray-500 transition-all duration-200 
                ${
                  userData.lastName || isFocused.lastName
                    ? "top-[-15px] text-green-600"
                    : "top-2 text-gray-500"
                }`}
            >
              Last Name
            </label>
          </div>
        </div>

        {/* Email */}
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
            className={`absolute left-2 top-2 text-gray-500 transition-all duration-200 
                ${
                  userData.email || isFocused.email
                    ? "top-[-15px] text-green-600"
                    : "top-2 text-gray-500"
                }`}
          >
            Email Address
          </label>
        </div>

        {/* Phone */}
        <div className="relative mb-4">
          <input
            type="tel"
            name="phone"
            value={userData.phone}
            onChange={handleChange}
            onFocus={() => handleFocus("phone")}
            onBlur={() => handleBlur("phone")}
            id="phone"
            className="w-full p-2 border-b-2 border-gray-300 focus:border-green-600 focus:outline-none peer"
            autoComplete="tel"
          />
          <label
            htmlFor="phone"
            className={`absolute left-2 top-2 text-gray-500 transition-all duration-200 
                ${
                  userData.phone || isFocused.phone
                    ? "top-[-15px] text-green-600"
                    : "top-2 text-gray-500"
                }`}
          >
            Mobile Number
          </label>
        </div>

        {/* Password */}
        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={userData.password}
            onChange={handleChange}
            onFocus={() => handleFocus("password")}
            onBlur={() => handleBlur("password")}
            id="password"
            className="w-full p-2 border-b-2 border-gray-300 focus:border-green-600 focus:outline-none peer"
            autoComplete="new-password"
          />
          <label
            htmlFor="password"
            className={`absolute left-2 top-2 text-gray-500 transition-all duration-200 
                ${
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

        {/* Re-enter Password */}
        <div className="relative mb-6">
          <input
            type={showRepassword ? "text" : "password"}
            name="confirmPassword"
            value={userData.confirmPassword}
            onChange={handleChange}
            onFocus={() => handleFocus("confirmPassword")}
            onBlur={() => handleBlur("confirmPassword")}
            id="confirmPassword"
            className="w-full p-2 border-b-2 border-gray-300 focus:border-green-600 focus:outline-none peer"
            autoComplete="new-password"
          />
          <label
            htmlFor="confirmPassword"
            className={`absolute left-2 top-2 text-gray-500 transition-all duration-200 
                ${
                  userData.confirmPassword || isFocused.confirmPassword
                    ? "top-[-15px] text-green-600"
                    : "top-2 text-gray-500"
                }`}
          >
            Re-enter Password
          </label>
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
            onClick={() => setShowRepassword(!showRepassword)}
          >
            {showRepassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg"
          disabled={loading}
        >
          {loading ? "Signing Up..." : "Sign Up"}
        </button>

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </form>
    </div>
  );
};

export default SignUp;
