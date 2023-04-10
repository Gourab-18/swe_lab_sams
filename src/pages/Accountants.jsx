import React from "react";
import ProfileCard from "../components/ProfileCard";
const Accountants = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-8 flex-col">
        <div className="mb-4 ">
          <h1 className="font-sans mb-4 font-semibold text-3xl text-slate-100">
            Accountants
          </h1>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
        </div>
        <div className="flex justify-center items-center">
          <button
            type="button"
            class="text-white   bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium  text-sm px-6 py-3 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            Go Back
          </button>
        </div>
      </div>
    </>
  );
};

export default Accountants;
