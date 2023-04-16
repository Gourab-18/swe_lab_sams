import React from "react";
import ProfileCard from "../components/ProfileCard";

import { Link } from "react-router-dom";
const Accountants = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-8 flex-col">
        <div className="mb-4 ">
          <h1 className="font-sans mb-4 font-semibold text-3xl text-slate-100">
            Accountants
          </h1>
        </div>

        <div className="flex justify-between m-4  w-[40vw]">
          <Link to="/addAccountants">
            <div className="">
              <button
                type="button"
                class="text-white   bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium  text-sm px-6 py-2 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
              >
                Add Accountants
              </button>
            </div>
          </Link>

          <div className="">
            <button
              type="submit"
              class="text-white   bg-[rgb(210,65,134)] focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium  text-sm px-6 py-2 text-center mb-2 rgb(210,65,134) hover:bg-rgb(212,65,134) focus:bg-rgb(212,65,134) hover:opacity-80"
            >
              View Accountants
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <ProfileCard />
        </div>
        <div className="flex justify-center items-center">
          <Link to="/">
            <button
              type="button"
              class="text-white   bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium  text-sm px-6 py-3 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            >
              Go Back
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Accountants;
