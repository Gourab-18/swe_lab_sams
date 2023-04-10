import React from 'react'

const Login = () => {
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
                User name
              </label>
              <input
                type="text"
                className=" border  border-gray-300 text-gray-900 text-sm  block p-2.5 w-[50vw] bg-[rgb(65,66,67)] dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <div className="my-4">
              <label className="block mb-2 text-sm font-light text-gray-400 dark:text-white">
                Password
              </label>
              <input
                type="text"
                className=" border  border-gray-300 text-gray-900 text-sm  block p-2.5 w-[50vw] bg-[rgb(65,66,67)] dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
          </form>

          <div className="flex justify-center items-center">
            <button
              type="button"
              class="text-white   bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium  text-sm px-6 py-2 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            >
              Login
            </button>
          </div>
          <div className="flex justify-center items-center">
            <button
              type="button"
              class="text-white  uppercase mt-4 hover:opacity-80  bg-[rgb(210,65,134)] font-medium rounded-l text-sm px-3 py-3 text-center mb-2"
            >
              Don't have an account signup
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login