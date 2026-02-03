import { useState } from "react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import PageTitle from "./PageTitle";
import Input from "./Input";
import MultipleSelect from "./MultipleSelect";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AppContext } from "../stores/AppContext";
import axios from "axios";

const skillsList = [
  "Photoshop",
  "HTML",
  "CSS",
  "Bootstrap",
  "JavaScript",
  "jQuery",
  "ReactJs",
  "ContextAPI",
  "Redux/Redux-Toolkit",
  "TailwindCSS",
  "MaterialUI",
  "ExpressJs",
  "NextJs",
  "GitHub",
  "WordPress",
  "Shopify",
  "Cloudinary",
  "Socket.io",
];

function AddProfile() {
  const { authUser, setAuthUser } = useContext(AppContext);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [responsibilitiesText, setResponsibilitiesText] = useState("");
  const [responsibilities, setResponsibilities] = useState([]);
  const [formErrMsg, setFormErrMsg] = useState({});
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    designation: "",
    email: "",
    phone: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    setFormErrMsg((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSkillChange = (e) => {
    const {
      target: { value },
    } = e;
    setSelectedSkills(typeof value === "string" ? value.split(",") : value);
  };

  const formsValidation = () => {
    const newFromErrMsg = {};
    if (!formData.firstName.trim()) {
      newFromErrMsg.firstName = "Firstname is required.";
    }
    if (!formData.lastName.trim()) {
      newFromErrMsg.lastName = "Lastname is required.";
    }
    if (!formData.designation.trim()) {
      newFromErrMsg.designation = "Designation is required.";
    }
    if (!formData.email.trim()) {
      newFromErrMsg.email = "Email is required.";
    } else if (
      !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)
    ) {
      newFromErrMsg.email = "Invalid email.";
    }
    if (!formData.phone.trim()) {
      newFromErrMsg.phone = "Phone is required.";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newFromErrMsg.phone = "Phone must be 10 digits.";
    }
    if (!formData.description.trim()) {
      newFromErrMsg.description = "Description is required.";
    }
    if (!responsibilitiesText.trim()) {
      newFromErrMsg.responsibilitiesText = "Responsibilities are required.";
    }

    setFormErrMsg(newFromErrMsg);
    return () => Object.keys(newFromErrMsg).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formsValidation()) return;

    const list = responsibilitiesText
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);

    setResponsibilities((prev) => [...prev, list]);

    const payload = {
      ...formData,
      skills: selectedSkills,
      responsibilities: responsibilities,
    };

    try {
      const response = await axios.put(
        `/api/user/${authUser._id}/editProfile`,
        payload
      );

      const localUserData = JSON.parse(localStorage.getItem("loggedInData"));

      // const updatedUserData = 
      console.log(response)

    } catch (error) {
      console.log(error);
      toast.error(response?.data?.meaasge);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-6">
        <div className="flex items-center justify-between bg-white mb-7 pb-3 border-b border-b-gray-300">
          <PageTitle title="Edit Profile" />
          <Link
            to="/dashboard"
            className="px-4 flex items-center gap-1 py-2 text-sm text-gray-700 rounded-lg hover:text-blue-600 transition"
          >
            <HiOutlineArrowNarrowLeft />
            Back
          </Link>
        </div>

        {/* Basic Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
          <Input
            label="First Name"
            name="firstName"
            placeholder="Enter first name"
            value={formData.firstName}
            onChange={handleChange}
            error={formErrMsg.firstName}
          />
          <Input
            label="Last Name"
            name="lastName"
            placeholder="Enter Last name"
            value={formData.lastName}
            onChange={handleChange}
            error={formErrMsg.lastName}
          />
          <Input
            label="Role / Designation"
            name="designation"
            placeholder="e.g. Frontend Developer"
            value={formData.designation}
            onChange={handleChange}
            error={formErrMsg.designation}
          />

          <Input
            label="Email"
            name="email"
            type="text"
            placeholder="example@email.com"
            value={formData.email}
            onChange={handleChange}
            error={formErrMsg.email}
          />

          <Input
            label="Phone"
            name="phone"
            placeholder="+91 XXXXX XXXXX"
            value={formData.phone}
            onChange={handleChange}
            error={formErrMsg.phone}
          />
          {/* Skills */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Skills
            </label>
            <MultipleSelect
              items={skillsList}
              itemName={selectedSkills}
              handleChange={handleSkillChange}
            />
            {formErrMsg.selectedSkills && (
              <p className={`text-xs text-red-500 mt-1`}>
                {formErrMsg.selectedSkills}
              </p>
            )}
          </div>
        </div>

        {/* About */}
        <div className="mb-4">
          <label className="block text-sm text-gray-700 mb-1 font-semibold">
            Description
          </label>
          <textarea
            name="description"
            rows="2"
            placeholder="Brief description about the profile"
            value={formData.description}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 resize-none"
          />
          {formErrMsg.description && (
            <p className="text-[12px] text-red-500">{formErrMsg.description}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm text-gray-700 mb-1 font-semibold">
            Roles & Responsibilities
          </label>
          <textarea
            rows="2"
            value={responsibilitiesText}
            onChange={(e) => setResponsibilitiesText(e.target.value)}
            placeholder="Enter responsibilities separated by commas"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 resize-none"
          />
          {formErrMsg.responsibilitiesText && (
            <p className="text-[12px] text-red-500">
              {formErrMsg.responsibilitiesText}
            </p>
          )}
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-4 pt-4">
          {/* <button
            type="reset"
            onClick={() =>
              setFormData({
                fullName: "",
                role: "",
                email: "",
                phone: "",
                about: "",
                skills: "",
              })
            }
            className="px-4 py-2 text-sm border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            Cancel
          </button> */}

          <button
            type="submit"
            className="px-6 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
}

export default AddProfile;
