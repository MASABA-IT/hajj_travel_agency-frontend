import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changePassword,
  resetSuccessState,
} from "../../../store/slices/authSlice";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import icons

import { toast, ToastContainer } from "react-toastify";

const ChangePassword = () => {
  const dispatch = useDispatch();
  const { isLoading, success, error } = useSelector((state) => state.auth);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirmation, setNewPasswordConfirmation] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false); // Toggle state for old password
  const [showNewPassword, setShowNewPassword] = useState(false); // Toggle state for new password
  const [showNewPasswordConfirmation, setShowNewPasswordConfirmation] =
    useState(false); // Toggle state for confirmation password
  const [passwordsMatch, setPasswordsMatch] = useState(true); // State to track if passwords match
  const [submitted, setSubmitted] = useState(false); // Track if the form has been submitted

  useEffect(() => {
    // Check if new passwords match
    setPasswordsMatch(newPassword === newPasswordConfirmation);
  }, [newPassword, newPasswordConfirmation]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Only dispatch changePassword if passwords match
    if (passwordsMatch) {
      dispatch(
        changePassword({ oldPassword, newPassword, newPasswordConfirmation })
      );

      setSubmitted(true);
    }
  };
  useEffect(() => {
    if (success) {
      toast.success("Password changed successfully!");
      setOldPassword("");
      setNewPassword("");
      setNewPasswordConfirmation("");
      dispatch(resetSuccessState());
    }
  }, [dispatch, success]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div style={{ padding: "20px" }}>
      <h1 className="">Change your Password!</h1>
      <form onSubmit={handleSubmit}>
        {/* Old Password */}
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="old_password" style={{ color: "#24aa86" }}>
            Old Password
          </label>
          <div className="relative">
            <input
              type={showOldPassword ? "text" : "password"} // Toggle between text and password
              id="old_password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              className="w-full p-2 mt-1 border border-[#24aa86] rounded-md focus:outline-none focus:ring-2 focus:ring-[#24aa86] placeholder-gray-400"
            />
            <button
              type="button"
              onClick={() => setShowOldPassword(!showOldPassword)} // Toggle visibility for old password
              className="absolute right-2 top-[40%]"
              style={{ border: "none", background: "transparent" }}
            >
              {showOldPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        {/* New Password */}
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="new_password" style={{ color: "#24aa86" }}>
            New Password
          </label>
          <div className="relative">
            <input
              type={showNewPassword ? "text" : "password"} // Toggle between text and password
              id="new_password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full p-2 mt-1 border border-[#24aa86] rounded-md focus:outline-none focus:ring-2 focus:ring-[#24aa86] placeholder-gray-400"
            />
            <button
              type="button"
              onClick={() => setShowNewPassword(!showNewPassword)} // Toggle visibility for new password
              className="absolute right-2 top-[40%]"
              style={{ border: "none", background: "transparent" }}
            >
              {showNewPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        {/* Confirm New Password */}
        <div style={{ marginBottom: "10px" }}>
          <label
            htmlFor="new_password_confirmation"
            style={{ color: "#24aa86" }}
          >
            Confirm New Password
          </label>
          <div className="relative">
            <input
              type={showNewPasswordConfirmation ? "text" : "password"} // Toggle between text and password
              id="new_password_confirmation"
              value={newPasswordConfirmation}
              onChange={(e) => setNewPasswordConfirmation(e.target.value)}
              className="w-full p-2 mt-1 border border-[#24aa86] rounded-md focus:outline-none focus:ring-2 focus:ring-[#24aa86] placeholder-gray-400"
            />
            <button
              type="button"
              onClick={() =>
                setShowNewPasswordConfirmation(!showNewPasswordConfirmation)
              } // Toggle visibility for confirm new password
              className="absolute right-2 top-[40%]"
              style={{ border: "none", background: "transparent" }}
            >
              {showNewPasswordConfirmation ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Show error if passwords do not match only after typing in the confirmation password */}
          {newPasswordConfirmation && !passwordsMatch && !submitted && (
            <div className="py-2" style={{ color: "red" }}>
              New password and confirmation do not match.
            </div>
          )}

          {/* Show final error message after submission */}
          {submitted && error && (
            <div className="py-2" style={{ color: "red" }}>
              {error}
            </div>
          )}
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: "#24aa86",
            color: "#fff",
            padding: "10px 20px",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ChangePassword;
