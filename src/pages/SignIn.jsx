import { useContext, useEffect, useState } from "react";
import { AppContext } from "../stores/AppContext";
import Input from "../components/Input";
import { Link, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa6";

function SignIn() {
  const { theme, LogoDark, LogoLight } = useContext(AppContext);

  const [loginForm, setLoginForm] = useState({
    username:"",
    password:"",
    rememberMe:false
  });
  const [errMsg, setErrMsg] = useState({});

  useEffect(()=>{
    const savedUsername = localStorage.getItem("rememberedUsername");

    if(savedUsername){
        setLoginForm((prev)=> ({...prev, username:savedUsername, rememberMe:true}))
    }
  },[])

  const navigate = useNavigate();

  const handleFormOnChange = (e) => {
    const {name, value, checked, type} = e.target;
    setLoginForm((prev) => ({...prev, [name]: type === 'checkbox'? checked :value}))
    setErrMsg((prev) => ({ ...prev, [name]: "" }));
  };

  const loginFormValidate = (e) => {
    const newErrMsg = {};

    if (!loginForm.username.trim()) {
      newErrMsg.username = "Username is required.";
    }
    if (!loginForm.password.trim()) {
      newErrMsg.password = "Password is required";
    }

    setErrMsg(newErrMsg);

    return Object.keys(newErrMsg).length === 0;
  };

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();

    if (!loginFormValidate()) return;

    try {
        if(loginForm.rememberMe){
            localStorage.setItem("rememberedUsername", loginForm.username)
        }else{
            localStorage.removeItem("rememberedUsername")
        }

        console.log(loginForm);

        navigate("/", { replace: true })
        
    } catch (error) {
        setErrMsg({ form: "Invalid username or password" });
        console.log(error)
    }finally{
        setLoginForm((prev)=>({...prev, password:""}))
    }

  };

  return (
    <div className="big-bg w-full h-screen relative bg-gray-50 dark:bg-gray-800 overflow-hidden">
      <div className="fixed bg-white h-full w-100 flex flex-col py-3 sm:px-6 lg:px-10">
        <img
          src={theme === "dark" ? LogoDark : LogoLight}
          alt=""
          className="w-56.5 mx-auto mb-3"
        />
        <hr className="lg:-ml-10 lg:-mr-10 border-gray-300 mb-3" />
        <div className="sm:mx-auto sm:w-full sm:max-w-md px-4 md:px-0">
          <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white">
            Sign in
          </h1>
        </div>
        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-md px-4 md:px-0">
          <div className="bg-white dark:bg-gray-700">
            <form onSubmit={handleLoginFormSubmit} className="space-y-6">
              <div>
                <Input
                  label="Email address / Username"
                  placeholder="Email address / Username"
                  name="username"
                  value={loginForm.username}
                  onChange={handleFormOnChange}
                />
                {errMsg && (
                  <p className="text-red-500 text-[12px] -mt-2">
                    {errMsg.username}
                  </p>
                )}
              </div>
              <div>
                <Input
                  label="password"
                  placeholder="password"
                  type="password"
                  name="password"
                  value={loginForm.password}
                  onChange={handleFormOnChange}
                />
                {errMsg && (
                  <p className="text-red-500 text-[12px] -mt-2">
                    {errMsg.password}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={loginForm.rememberMe}
                    onChange={handleFormOnChange}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:text-white dark:border-gray-600 dark:focus:ring-indigo-400 disabled:cursor-wait disabled:opacity-50"
                  />
                  <label
                    htmlFor="remember_me"
                    className="ml-2 block text-sm text-gray-900 dark:text-white"
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <Link
                    className="font-medium text-indigo-400 hover:text-indigo-500"
                    to="/forgot-password"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div>
              <div>
                <button
                  className="bg-linear-to-r dark:text-gray-300 from-orange-600 to-blue-800 shadow-lg p-3.5 text-white rounded-lg w-full hover:scale-105 hover:from-blue-800 hover:to-orange-600 transition duration-300 ease-in-out"
                  type="submit"
                >
                  LOG IN
                </button>
              </div>
            </form>
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white dark:bg-gray-700 px-2 text-gray-500 dark:text-white">
                    Or continue with
                  </span>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <button className="inline-flex w-full items-center justify-center rounded-md bg-red-200 dark:bg-gray-700 px-4 py-3 text-xl font-medium text-red-500 dark:text-white hover:bg-red-600 dark:hover:bg-gray-600 hover:text-white transition duration-300 ease-in-out">
                  <span className="sr-only">Sign in with Google</span>
                  <FaGoogle />
                </button>
                <button className="inline-flex w-full justify-center rounded-md bg-gray-200 dark:bg-gray-700 px-4 py-3 text-xl font-medium text-gray-800 dark:text-white hover:bg-gray-700 dark:hover:bg-gray-600 hover:text-white transition duration-300 ease-in-out">
                  <span className="sr-only">Sign in with GitHub</span>
                  <FaGithub />
                </button>
              </div>
            </div>
            <div className="m-auto mt-6 w-fit md:mt-8">
              <span className="m-auto dark:text-gray-400">
                Don't have an account?
                <a
                  className="font-semibold text-indigo-600 dark:text-indigo-100"
                  href="/register"
                >
                  Create Account
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
