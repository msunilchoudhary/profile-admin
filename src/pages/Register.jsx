import { useEffect, useState } from "react";
import Input from "../components/Input";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AppContext } from "../stores/AppContext";

function Register() {
  const { setAuthUser } = useContext(AppContext);
  const [formErr, setFormErr] = useState({});
  const [msg, setMsg] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    cPassword: "",
  });

  useEffect(() => {
    const saveSignupData = localStorage.getItem("signupForm");

    if (saveSignupData) {
      setFormData(JSON.parse(saveSignupData));
    }
  }, []);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    setFormErr((prev) => ({ ...prev, [name]: "" }));
  };

  const signUpDataVailidate = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "Firstname is required.";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Lastname is required.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required.";
    } else if (formData.phone.length < 10) {
      newErrors.phone = "Invalid phone number";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }

    if (!formData.cPassword.trim()) {
      newErrors.cPassword = "Confirm password is required.";
    } else if (formData.password !== formData.cPassword) {
      newErrors.cPassword = "Passwords do not match.";
    }

    setFormErr(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (!signUpDataVailidate()) return;

    try {
      const response = await axios.post("/api/user/signup", formData);

      const refinedData = response?.data?.data;
      console.log(refinedData);

      localStorage.setItem("signupForm", JSON.stringify(refinedData));
      setAuthUser(refinedData);

      toast.success(response?.data?.message);
      setMsg(response?.data?.message);

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        cPassword: "",
      });
    } catch (error) {
      console.log(error);
      toast.error(response?.data?.message);
    }
  };

  return (
    <div className="h-screen bg-gray-900 dark:bg-gray-900">
      <div className="mx-auto">
        <div className="flex justify-center  px-6 py-10">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex p-2 bg-linear-to-r from-blue-500 to-orange-600 rounded-xl">
            <div className="rgs-bg w-full h-auto bg-gray-400 dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"></div>

            <div className="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
              <h2 className="py-2 text-3xl text-center text-gray-800 dark:text-white font-bold">
                {msg ? <span>{msg}</span> : "Create an Account!"}
              </h2>
              {msg ? (
                <p className="text-center">
                  <Link to="/signin">Login here</Link>
                </p>
              ) : (
                <form
                  onSubmit={handleOnSubmit}
                  className="px-8 pt-6 mb-4 bg-white dark:bg-gray-800 rounded"
                >
                  <div className="md:flex md:justify-between">
                    <div className="mb-4 md:mr-2 md:mb-0 md:w-1/2">
                      <Input
                        label="First Name"
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        placeholder="First Name"
                        onChange={handleOnChange}
                      />
                      {formErr.firstName && (
                        <p className="text-red-500 text-[12px] -mt-2">
                          {formErr.firstName}
                        </p>
                      )}
                    </div>
                    <div className="mb-4 md:ml-2 md:w-1/2">
                      <Input
                        label="Last Name"
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        placeholder="Last Name"
                        onChange={handleOnChange}
                      />
                      {formErr.lastName && (
                        <p className="text-red-500 text-[12px] -mt-2">
                          {formErr.lastName}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="mb-4 md:flex md:justify-between">
                    <div className="mb-4 md:mr-2 md:mb-0 md:w-1/2">
                      <Input
                        label="Email"
                        name="email"
                        value={formData.email}
                        type="email"
                        placeholder="Email"
                        onChange={handleOnChange}
                      />
                      {formErr.email && (
                        <p className="text-red-500 text-[12px] -mt-2">
                          {formErr.email}
                        </p>
                      )}
                    </div>
                    <div className="md:ml-2 md:w-1/2">
                      <Input
                        label="Phone"
                        name="phone"
                        value={formData.phone}
                        type="phone"
                        placeholder="Mobile number"
                        onChange={handleOnChange}
                      />
                      {formErr.phone && (
                        <p className="text-red-500 text-[12px] -mt-2">
                          {formErr.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mb-4 md:flex md:justify-between">
                    <div className="mb-4 md:mr-2 md:mb-0 md:w-1/2">
                      <Input
                        label="Password"
                        name="password"
                        value={formData.password}
                        type="password"
                        placeholder="******************"
                        onChange={handleOnChange}
                      />
                      {formErr.password && (
                        <p className="text-red-500 text-[12px] -mt-2">
                          {formErr.password}
                        </p>
                      )}
                    </div>
                    <div className="md:ml-2 md:w-1/2">
                      <Input
                        label="Confirm Password"
                        name="cPassword"
                        value={formData.cPassword}
                        type="password"
                        placeholder="******************"
                        onChange={handleOnChange}
                      />
                      {formErr.cPassword && (
                        <p className="text-red-500 text-[12px] -mt-2">
                          {formErr.cPassword}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="mb-5 text-center">
                    <button
                      className="bg-linear-to-r dark:text-gray-300 from-orange-600 to-blue-800 shadow-lg p-3.5 text-white rounded-lg w-full hover:scale-105 hover:from-blue-800 hover:to-orange-600 transition duration-300 ease-in-out uppercase"
                      type="submit"
                    >
                      Register Account
                    </button>
                  </div>
                  <hr className="mb-5 border-t border-gray-300" />
                  <div className="text-center">
                    <a
                      className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
                      href="#"
                    >
                      Forgot Password?
                    </a>
                  </div>
                  <div className="text-center">
                    <Link
                      className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
                      to="/signin"
                    >
                      Already have an account? Login!
                    </Link>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
