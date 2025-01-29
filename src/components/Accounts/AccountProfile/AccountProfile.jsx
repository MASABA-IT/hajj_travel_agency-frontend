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
  } = useSelector((state) => state.profile);
  // console.log(username, divisions);
  const [user, setUser] = useState({
    username: "",
    email: "",
    address: "",
    union_id: "",
    thana_id: "",
    district_id: "",
    division_id: "",
    phone_number: "",
  });

  // Redux থেকে পাওয়া ডাটা state এ সেট করা
  useEffect(() => {
    setUser({
      username: username || "",
      email: email || "",
      address: address || "",
      union_id: union_id || "",
      thana_id: thana_id || "",
      district_id: district_id || "",
      division_id: division_id || "",
      phone_number: phone_number || "",
    });
  }, [
    username,
    email,
    phone_number,
    address,
    union_id,
    thana_id,
    district_id,
    division_id,
  ]);

  useEffect(() => {
    dispatch(fetchProfile());
    dispatch(fetchDivisions());
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

  const handleChange = (e) => {
    const { name, value } = e.target;
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
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            className="w-full p-2 mt-1 border border-[#24aa86] rounded-md focus:outline-none focus:ring-2 focus:ring-[#24aa86]"
          />
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            className="w-full p-2 mt-1 border border-[#24aa86] rounded-md focus:outline-none focus:ring-2 focus:ring-[#24aa86]"
          />
        </div>

        {/* Phone Number Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="text"
            name="phone_number"
            value={user.phone_number}
            onChange={handleChange}
            className="w-full p-2 mt-1 border border-[#24aa86] rounded-md focus:outline-none focus:ring-2 focus:ring-[#24aa86]"
          />
        </div>

        {/* Location Fields */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-800">
            Location Details
          </h3>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            <div className="flex flex-col">
              <strong>Division</strong>
              <select
                name="division_id"
                value={user.division_id}
                onChange={handleChange}
                className="mt-1 border border-[#24aa86] rounded-md p-2"
              >
                <option value="">Select Division</option>
                {divisions?.map((division) => (
                  <option key={division.id} value={division.id}>
                    {division.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col">
              <strong>District</strong>
              <select
                name="district_id"
                value={user.district_id}
                onChange={handleChange}
                className="mt-1 border border-[#24aa86] rounded-md p-2"
              >
                <option value="">Select District</option>
                {districts?.map((district) => (
                  <option key={district.id} value={district.id}>
                    {district.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col">
              <strong>Thana</strong>
              <select
                name="thana_id"
                value={user.thana_id}
                onChange={handleChange}
                className="mt-1 border border-[#24aa86] rounded-md p-2"
              >
                <option value="">Select Thana</option>
                {thanas?.map((thana) => (
                  <option key={thana.id} value={thana.id}>
                    {thana.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col">
              <strong>Union</strong>
              <select
                name="union_id"
                value={user.union_id}
                onChange={handleChange}
                className="mt-1 border border-[#24aa86] rounded-md p-2"
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

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-2 bg-[#24aa86] text-white rounded-md hover:bg-[#209e7a]"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default AccountProfile;
