import React, { useContext, useState } from "react";
import { AppContext } from "../stores/AppContext";
import { Link } from "react-router-dom";
import { FiCamera } from "react-icons/fi";
import toast from "react-hot-toast";
import axios from "axios";

function ProfileCard() {
  const { avtarImg, authUser, setAuthUser } = useContext(AppContext);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(authUser?.photo?.url || avtarImg);
  const [isShow, setIsShow] = useState(false)

  console.log(authUser)
  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
    setIsShow(true)
  };
  const handleUpload = async (e) => {
    if (!file) return toast.error("Please select a photo");

    const formData = new FormData();
    formData.append("photo", file);
    try {
      const response = await axios.put(
        `/api/user/${authUser._id}/photo`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } },
      );

      const localAuthUser = JSON.parse(localStorage.getItem("loggedInData"));

      const updatedAuthUser = {...localAuthUser, photo: response.data.photo}

      setAuthUser(updatedAuthUser)
      localStorage.setItem("loggedInData", JSON.stringify(updatedAuthUser))

      setPreview(response?.data?.photo.url);
      console.log(response?.data?.photo.url)
      setFile(null);
      setIsShow(false)
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || "Upload failed");
    }
  };
  console.log(preview)
  return (
    <>
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 text-center">
        <div className="relative">
          <img
            src={preview || avtarImg}
            alt="Profile"
            className="w-28 h-28 rounded-full mx-auto object-cover"
          />
          <label
            htmlFor="file-upload"
            title="upload photo"
            className="w-12 flex justify-center rounded-lg mx-auto border border-gray-300 py-1 shadow-md text-2xl font-medium *:rounded-md cursor-pointer bg-white hover:bg-gray-100 absolute -bottom-4 left-0 right-0"
          >
            <FiCamera />
            <input
              id="file-upload"
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleChange}
            />
          </label>
          {isShow && <button
            onClick={handleUpload}
            className="px-2 py-1 text-[12px] cursor-pointer bg-blue-500 text-white rounded absolute top-0 right-0"
          >
            Save Photo
          </button>}
          
        </div>

        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-8">
          {authUser?.firstName} {authUser?.lastName}
        </h2>
        <p className="text-sm text-gray-500">{authUser?.role}</p>

        <Link to={`/edit-profile/${authUser._id}`}>
          <button className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Edit Profile
          </button>
        </Link>
      </div>
    </>
  );
}

export default ProfileCard;
