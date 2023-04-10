import React, { useState } from 'react'

const CreateShow = () => {
    const[time,setTime]=useState("00:00")
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-2 pt-4">
        <div>
          <h1 className="font-sans my-2 mb-4 font-semibold text-3xl text-slate-100">
            Create Show
          </h1>
        </div>

        <div className="">
          <form>
            <div>
              <label className="block mb-2 text-sm font-light text-gray-400 dark:text-white">
                Show name
              </label>
              <input
                type="text"
                className=" border  border-gray-300 text-gray-900 text-sm  block p-2.5 w-[50vw] bg-[rgb(65,66,67)] dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>

            <div className="flex justify-between my-4">
              <div>
                <label className="block mb-2 text-sm font-light text-gray-400 dark:text-white">
                  Show Date
                </label>
                <input
                  type="date"
                  className=" border  border-gray-300 text-gray-900 text-sm  block p-2.5 w-[15vw] bg-[rgb(65,66,67)] dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-light text-gray-400 dark:text-white">
                  Show time
                </label>
                <input
                  type="time"
                  placeholder={time}
                  className=" border  border-gray-300 text-gray-900 text-sm  block p-2.5 w-[15vw] bg-[rgb(65,66,67)] dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>
            </div>

            <div className="flex justify-between my-4">
              <div>
                <label className="block mb-2 text-sm font-light text-gray-400 dark:text-white">
                  Number of regular seats
                </label>
                <input
                  type="text"
                  className=" border  border-gray-300 text-gray-900 text-sm  block p-2.5 w-[15vw] bg-[rgb(65,66,67)] dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-light text-gray-400 dark:text-white">
                  Price of regular seats (₹)
                </label>
                <input
                  type="text"
                  className=" border  border-gray-300 text-gray-900 text-sm  block p-2.5 w-[15vw] bg-[rgb(65,66,67)] dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>
            </div>

            <div className="flex justify-between my-4">
              <div>
                <label className="block mb-2 text-sm font-light text-gray-400 dark:text-white">
                  Number of balcony seats
                </label>
                <input
                  type="text"
                  className=" border  border-gray-300 text-gray-900 text-sm  block p-2.5 w-[15vw] bg-[rgb(65,66,67)] dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-light text-gray-400 dark:text-white">
                  Price of balcony seats (₹)
                </label>
                <input
                  type="text"
                  className=" border  border-gray-300 text-gray-900 text-sm  block p-2.5 w-[15vw] bg-[rgb(65,66,67)] dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>
            </div>
          </form>

          <div className="flex justify-between my-4">
            <div className="">
              <button
                type="button"
                class="text-white   bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium  text-sm px-6 py-2 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
              >
                Back
              </button>
            </div>
            <div className="">
              <button
                type="button"
                class="text-white   bg-[rgb(210,65,134)] focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium  text-sm px-6 py-2 text-center mb-2 rgb(210,65,134) hover:bg-rgb(212,65,134) focus:bg-rgb(212,65,134) hover:opacity-80"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateShow