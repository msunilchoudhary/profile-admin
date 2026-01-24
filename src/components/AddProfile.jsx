import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageTitle from "./PageTitle";
import Input from "./Input";

function AddProfile() {
  const navigate = useNavigate();

  const [profileImage, setProfileImage] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    role: "",
    email: "",
    phone: "",
    about: "",
    skills: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      profileImage,
      skills: formData.skills.split(",").map((s) => s.trim()),
    };

    console.log("Profile Data:", payload);

    navigate("/add-education");
  };

  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <PageTitle title="Edit Profile" />

        <Link
          to="/dashboard"
          className="px-4 py-2 text-sm bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
        >
          Back
        </Link>
      </div>

      {/* Profile Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow p-6 space-y-6"
      >
        {/* Profile Image */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Profile Photo
          </label>

          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Profile Preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <svg
                  className="w-10 h-10 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
                  <path d="M6 20c0-3.31 2.69-6 6-6s6 2.69 6 6" />
                </svg>
              )}
            </div>

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="block text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-lg file:border-0
                file:bg-blue-600 file:text-white
                hover:file:bg-blue-700"
            />
          </div>
        </div>

        {/* Basic Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Full Name"
            name="fullName"
            placeholder="Enter full name"
            value={formData.fullName}
            onChange={handleChange}
          />

          <Input
            label="Role / Designation"
            name="role"
            placeholder="e.g. Frontend Developer"
            value={formData.role}
            onChange={handleChange}
          />

          <Input
            label="Email"
            name="email"
            type="email"
            placeholder="example@email.com"
            value={formData.email}
            onChange={handleChange}
          />

          <Input
            label="Phone"
            name="phone"
            placeholder="+91 XXXXX XXXXX"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        {/* About */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            About
          </label>
          <textarea
            name="about"
            rows="4"
            placeholder="Brief description about the profile"
            value={formData.about}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Skills */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Skills
          </label>
          <input
            name="skills"
            type="text"
            placeholder="React, Tailwind, JavaScript"
            value={formData.skills}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-xs text-gray-500 mt-1">
            Separate skills with commas
          </p>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-4 pt-4">
          <button
            type="reset"
            onClick={() => setFormData({
              fullName: "",
              role: "",
              email: "",
              phone: "",
              about: "",
              skills: "",
            })}
            className="px-4 py-2 text-sm border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="px-6 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Save and Next
          </button>
        </div>
      </form>
    </>
  );
}

export default AddProfile;