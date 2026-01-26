import { useState } from "react";
import { Link } from "react-router-dom";
import PasswordInput from "./PasswordInput";

function ChangePassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (formData.newPassword !== formData.confirmPassword) {
      setError("New passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      // 🔐 Call your API here
      // await changePasswordAPI(formData);

      setSuccess("Password updated successfully.");
      setFormData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } catch (err) {
      setError("Failed to update password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        {/* Header */}
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">
          Change Password
        </h2>
        <p className="text-sm text-gray-600 text-center mb-6">
          Update your account password
        </p>

        {/* Alerts */}
        {success && (
          <div className="mb-4 text-sm text-green-700 bg-green-100 px-4 py-2 rounded">
            {success}
          </div>
        )}

        {error && (
          <div className="mb-4 text-sm text-red-700 bg-red-100 px-4 py-2 rounded">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Current Password */}
          <PasswordInput
            label="Current Password"
            name="currentPassword"
            value={formData.currentPassword}
            onChange={handleChange}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />

          {/* New Password */}
          <PasswordInput
            label="New Password"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />

          {/* Confirm Password */}
          <PasswordInput
            label="Confirm New Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-linear-to-r dark:text-gray-300 from-orange-600 to-blue-800 shadow-lg p-3.5 text-white rounded-lg w-full hover:scale-105 hover:from-blue-800 hover:to-orange-600 transition duration-300 ease-in-out"
          >
            {loading ? "Updating..." : "Update Password"}
          </button>
        </form>

        {/* Footer */}
        <div className="text-center mt-4">
          <Link
            to="/profile"
            className="text-sm text-blue-600 hover:underline"
          >
            Back to Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;


