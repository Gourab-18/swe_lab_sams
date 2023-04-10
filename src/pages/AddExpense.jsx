import React from 'react'

const AddExpense = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-2 pt-4">
        <div>
          <h1 className="font-sans my-2 mb-4 font-semibold text-3xl text-slate-100">
            Add an Expenditure
          </h1>
        </div>

        <div className="">
          <form>
            <div className="my-4">
              <label className="block mb-2 text-sm font-light text-gray-400 dark:text-white">
                Enter amount
              </label>
              <input
                type="number"
                className=" border  border-gray-300 text-gray-900 text-sm  block p-2.5 w-[50vw] bg-[rgb(65,66,67)] dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <div className="my-4">
              <label className="block mb-2 text-sm font-light text-gray-400 dark:text-white">
                Enter Reason for expense
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
              class="text-white  uppercase mt-4 hover:opacity-80  bg-[rgb(210,65,134)] font-medium  text-sm px-6 py-3 text-center mb-2"
            >
             Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddExpense