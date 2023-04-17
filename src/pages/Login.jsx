import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { Link } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
        // console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorCode, errorMessage);
      });
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-2 pt-4">
        <div>
          <h1 className="font-sans my-2 mb-4 font-semibold text-3xl text-slate-100">
            Login
          </h1>
        </div>

        <div className="">
          <form>
            <div className="my-4">
              <label className="block mb-2 text-sm font-light text-gray-400 dark:text-white">
                Email
              </label>
              <input
                className=" border  border-gray-300 text-gray-900 text-sm  block p-2.5 w-[50vw] bg-[rgb(65,66,67)] dark:placeholder-gray-400 dark:text-white"
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="my-4">
              <label className="block mb-2 text-sm font-light text-gray-400 dark:text-white">
                Password
              </label>
              <input
                className=" border  border-gray-300 text-gray-900 text-sm  block p-2.5 w-[50vw] bg-[rgb(65,66,67)] dark:placeholder-gray-400 dark:text-white"
                name="password"
                type="password"
                required
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </form>

          <div className="flex justify-center items-center">
            <button
              type="button"
              class="text-white   bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium  text-sm px-6 py-2 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
              onClick={onLogin}
            >
              Login
            </button>
          </div>
          <div className="flex justify-center items-center">
            <Link to="/signup">
              <button
                type="button"
                class="text-white  uppercase mt-4 hover:opacity-80  bg-[rgb(210,65,134)] font-medium rounded-l text-sm px-3 py-3 text-center mb-2"
              >
                Don't have an account ? Signup
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
