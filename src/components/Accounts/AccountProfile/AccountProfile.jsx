import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProfile,
  fetchDivisions,
  fetchDistricts,
  fetchThanas,
  fetchUnions,
  updateProfile,
} from "../../../store/slices/profileSlice";

const AccountProfile = () => {
  const dispatch = useDispatch();
  const {
    username,
    email,
    phone_number,
    union_id,
    thana_id,
    district_id,
    division_id,
    address,
    isLoading,
    divisions,
    districts,
    thanas,
    unions,
    success,
    error,
  } = useSelector((state) => state.profile);

  const [user, setUser] = useState({
    username: username || "",
    email: email || "",
    address: address || "",
    union_id: union_id || "",
    thana_id: thana_id || "",
    district_id: district_id || "",
    division_id: division_id || "",
    phone_number: phone_number || "",
  });

  //   console.log(division_id, district_id, thana_id, union_id);
  const handleChange = (e) => {
    e.preventDefault(); // This will prevent accidental form submission
    const { name, value } = e.target;
    console.log(name, value);
    setUser((prevData) => ({
      ...prevData,
      [name]: value,
      ...(name === "division_id" && {
        district_id: "",
        thana_id: "",
        union_id: "",
      }),
      ...(name === "district_id" && { thana_id: "", union_id: "" }),
      ...(name === "thana_id" && { union_id: "" }),
    }));
  };

  useEffect(() => {
    dispatch(fetchProfile());
    dispatch(fetchDivisions()); // Fetch Divisions
  }, [dispatch]);

  useEffect(() => {
    if (user.division_id) {
      dispatch(fetchDistricts(user.division_id));
    }
  }, [dispatch, user.division_id]);

  useEffect(() => {
    if (user.district_id) {
      dispatch(fetchThanas(user.district_id));
    }
  }, [dispatch, user.district_id]);

  useEffect(() => {
    if (user.thana_id) {
      dispatch(fetchUnions(user.thana_id));
    }
  }, [dispatch, user.thana_id]);

  const division = divisions.divisions;
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updateProfile(user));
    localStorage.setItem("user", JSON.stringify(user));
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="account-profile">
      <h1 className="text-2xl font-semibold mb-4 text-[#24aa86]">
        Edit your Details!
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Username Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
              className="w-full p-2 mt-1 border border-[#24aa86] rounded-md focus:outline-none focus:ring-2 focus:ring-[#24aa86] placeholder-gray-400"
            />
          </div>
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <div className="flex items-center space-x-2">
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              className="w-full p-2 mt-1 border border-[#24aa86] rounded-md focus:outline-none focus:ring-2 focus:ring-[#24aa86] placeholder-gray-400"
            />
          </div>
        </div>

        {/* Phone Number Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              name="phone_number"
              value={phone_number}
              onChange={handleChange}
              className="w-full p-2 mt-1 border border-[#24aa86] rounded-md focus:outline-none focus:ring-2 focus:ring-[#24aa86] placeholder-gray-400"
            />
          </div>
        </div>

        {/* Location Fields */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-800">
            Location Details
          </h3>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            {/* Division */}
            <div className="flex flex-col">
              <strong>Division</strong>
              <select
                name="division_id"
                value={division_id}
                onChange={handleChange}
                className="mt-1 border border-[#24aa86] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#24aa86]"
              >
                <option value="">Select Division</option>
                {division?.map((division) => (
                  <option key={division.id} value={division.id}>
                    {division.name}
                  </option>
                ))}
              </select>
            </div>

            {/* District */}
            <div className="flex flex-col">
              <strong>District</strong>
              <select
                name="district_id"
                value={district_id}
                onChange={handleChange}
                className="mt-1 border border-[#24aa86] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#24aa86]"
              >
                <option value="">Select District</option>
                {districts?.map((district) => (
                  <option key={district.id} value={district.id}>
                    {district.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Thana */}
            <div className="flex flex-col">
              <strong>Thana</strong>
              <select
                name="thana_id"
                value={thana_id}
                onChange={handleChange}
                className="mt-1 border border-[#24aa86] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#24aa86]"
              >
                <option value="">Select Thana</option>
                {thanas?.map((thana) => (
                  <option key={thana.id} value={thana.id}>
                    {thana.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Union */}
            <div className="flex flex-col">
              <strong>Union</strong>
              <select
                name="union_id"
                value={union_id}
                onChange={handleChange}
                className="mt-1 border border-[#24aa86] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#24aa86]"
              >
                <option value="">Select Union</option>
                {unions?.map((union) => (
                  <option key={union.id} value={union.id}>
                    {union.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Address Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <div className="flex items-center space-x-2">
            <textarea
              name="address"
              value={address}
              onChange={handleChange}
              className="w-full p-2 mt-1 border border-[#24aa86] rounded-md focus:outline-none focus:ring-2 focus:ring-[#24aa86] placeholder-gray-400"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full p-2 bg-[#24aa86] text-white rounded-md hover:bg-[#209e7a] transition duration-300"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccountProfile;
